import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { readUserFromAuthHeader } from '@triszt4n/remark-auth'
import { fetchCosmosContainer } from '../lib/dbConfig'
import { UserResource } from '../lib/model'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const usersContainer = fetchCosmosContainer('Users')

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

  // Query from DB
  await usersContainer
    .item(userFromJwt.id, userFromJwt.id)
    .read<UserResource>()
    .then((response) => {
      const user = response.resource

      if (user == null) {
        context.res = {
          status: 404,
          body: { message: `User with id ${userFromJwt.id} not found.` }
        }
        return
      }

      context.res = {
        body: user
      }
    })
    .catch((error) => {
      context.log('[ERROR] at GetUser', error)
      context.res = {
        status: 500,
        body: { message: `Error in database: Could not read user!` }
      }
    })
}

export default httpTrigger
