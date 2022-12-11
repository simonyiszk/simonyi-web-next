import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { readUserFromAuthHeader } from '@triszt4n/remark-auth'
import { UpdatePostView } from '@triszt4n/remark-types'
import { fetchCosmosContainer, fetchCosmosDatabase } from '../lib/dbConfig'
import { createQueryChannelJoinByUserIdAndChannelId } from '../lib/dbQueries'
import { ChannelJoinResource, ChannelResource, PostResource, validateInput } from '../lib/model'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const id = context.bindingData.id as string

  // Authorization
  const result = readUserFromAuthHeader(req, process.env.JWT_PRIVATE_KEY)
  if (result.isError) {
    context.res = {
      status: result.status,
      body: { message: result.message }
    }
    return
  }
  const { userFromJwt: user } = result

  const inputPost = req.body as UpdatePostView
  const { rawMarkdown, title } = inputPost
  const isValid = validateInput(inputPost)
  if (!isValid) {
    context.res = {
      status: 400,
      body: { message: `Request body field(s) failed validation.` }
    }
    return
  }

  const database = fetchCosmosDatabase()
  const postsContainer = fetchCosmosContainer(database, 'Posts')
  const postItem = postsContainer.item(id, id)
  let { resource: post } = await postItem.read<PostResource>()
  if (!post) {
    context.res = {
      status: 404,
      body: { message: `Post with id ${id} not found.` }
    }
    return
  }

  const channelsContainer = fetchCosmosContainer(database, 'Channels')
  const channelJoinsContainer = fetchCosmosContainer(database, 'ChannelJoins')
  const { resource: parentChannel } = await channelsContainer.item(post.parentChannelId, post.parentChannelId).read<ChannelResource>()
  const { resources: channelJoins } = await channelJoinsContainer.items
    .query<ChannelJoinResource>(createQueryChannelJoinByUserIdAndChannelId(user.id, parentChannel.id))
    .fetchAll()

  if (channelJoins.length == 0) {
    context.res = {
      status: 403,
      body: { message: 'You are not joined to the parent channel of this post!' }
    }
    return
  }

  // Deleting is available for: publisher, channel owner and channel moderators
  if (post.publisherId != user.id && !channelJoins[0].isOwner && !channelJoins[0].isModerator) {
    context.res = {
      status: 403,
      body: { message: 'You are forbidden to delete this post!' }
    }
    return
  }

  // Apply changes
  const { resource: updatedPost } = await postItem.replace<PostResource & { isUpdated: boolean }>({
    ...post,
    rawMarkdown,
    title,
    isUpdated: true
  })

  context.res = {
    body: updatedPost
  }
}

export default httpTrigger
