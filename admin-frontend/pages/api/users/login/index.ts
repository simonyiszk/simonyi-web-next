import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { createJWT } from '@triszt4n/remark-auth'
import * as jwt from 'jsonwebtoken'
import { fetchCosmosContainer } from '../lib/dbConfig'
import { getOrCreateUserByEmail } from '../lib/dbQueries'
import { GoogleUser } from '../lib/model'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  // Request body verification
  if (!req.body || !req.body.credential) {
    context.res = {
      status: 400,
      body: { message: `Bad request: No accessToken in request body!` }
    }
    return
  }

  const { credential } = req.body
  const googleUser = jwt.decode(credential) as GoogleUser
  const usersContainer = fetchCosmosContainer('Users')
  const dbUser = await getOrCreateUserByEmail(usersContainer, googleUser)
  const jwtToken = createJWT(dbUser, process.env.JWT_PRIVATE_KEY, 60 * 60 * 24 * 2) // two days

  context.res = {
    body: {
      jwt: jwtToken,
      user: dbUser
    }
  }
}

export default httpTrigger
