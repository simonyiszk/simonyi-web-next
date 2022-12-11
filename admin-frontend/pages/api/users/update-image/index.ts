import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { BlockBlobParallelUploadOptions } from '@azure/storage-blob'
import { readUserFromAuthHeader } from '@triszt4n/remark-auth'
import * as multipart from 'parse-multipart'
import { v4 as uuidv4 } from 'uuid'
import { fetchCosmosContainer } from '../lib/dbConfig'
import { UserResource } from '../lib/model'
import { fetchBlobContainer } from '../lib/storageConfig'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  // Request body verification
  if (!req.body || !req.body.length) {
    context.res = {
      status: 400,
      body: { message: `Bad request: Request body is invalid!` }
    }
    return
  }
  if (!req.headers || !req.headers['content-type']) {
    context.res = {
      status: 400,
      body: { message: `Bad request: Content type not defined!` }
    }
    return
  }
  if (!req.query?.filename) {
    context.res = {
      status: 400,
      body: { message: `Bad request: Filename not defined in query!` }
    }
    return
  }

  // Authorization
  const result = readUserFromAuthHeader(req, process.env.JWT_PRIVATE_KEY)
  if (result.isError) {
    context.res = {
      status: result.status,
      body: { message: result.message }
    }
    return
  }
  const { userFromJwt } = result

  // Get user
  const usersContainer = fetchCosmosContainer('Users')
  const userItem = usersContainer.item(userFromJwt.id, userFromJwt.id)
  let { resource: user } = await userItem.read<UserResource>()
  if (!user) {
    context.res = {
      status: 404,
      body: { message: `User with id ${userFromJwt.id} not found.` }
    }
    return
  }

  const oldImageUrl = user.imageUrl
  try {
    // Each chunk of the file is delimited by a special string
    const filename = req.query.filename
    const bodyBuffer = Buffer.from(req.body)
    const boundary = multipart.getBoundary(req.headers['content-type'])
    const parts = multipart.Parse(bodyBuffer, boundary)

    // The file buffer is corrupted or incomplete?
    if (!parts?.length) {
      context.res = {
        status: 400,
        body: { message: `Failed upload: File buffer is incorrect` }
      }
      return
    }

    // Upload as Blob
    const blobContainerName = 'remark-user-images'
    const blobContainer = fetchBlobContainer(blobContainerName)
    const blobName = `${user.username}_${uuidv4()}_${filename}`

    const blobClient = blobContainer.getBlockBlobClient(blobName)
    const options: BlockBlobParallelUploadOptions = {
      tags: { userId: user.id }
    }
    await blobClient.uploadData(parts[0]?.data, options)
    const imageUrl = `https://${process.env.STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${blobContainerName}/${blobName}`

    user = {
      ...user,
      imageUrl
    }
    const { resource: updatedUser } = await userItem.replace<UserResource>(user)

    context.res = {
      body: updatedUser
    }

    // Delete old blob
    if (oldImageUrl) {
      const oldBlobName = oldImageUrl.split('/').pop()
      const oldBlobClient = blobContainer.getBlockBlobClient(oldBlobName)
      await oldBlobClient.delete()
    }
  } catch (err) {
    context.log.error(err.message)
    context.res = {
      status: 500,
      body: { message: `${err.message}` }
    }
    return
  }
}

export default httpTrigger
