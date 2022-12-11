import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { fetchCosmosContainer } from '../lib/dbConfig'
import { UserResource } from '../lib/model'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const id = context.bindingData.id as string
  const usersContainer = fetchCosmosContainer('Users')

  // No Authorization needed

  // Query from DB
  await usersContainer
    .item(id, id)
    .read<UserResource>()
    .then((response) => {
      context.log('[DEBUG] at GetUser', response)

      const user = response.resource

      if (user == null) {
        context.res = {
          status: 404,
          body: { message: `User with id ${id} not found.` }
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
