import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { readUserFromAuthHeader } from '@triszt4n/remark-auth'
import { ChannelModel, CreatePostView, PostModel, PostVoteModel } from '@triszt4n/remark-types'
import { fetchCosmosContainer, fetchCosmosDatabase } from '../lib/dbConfig'
import { createQueryChannelJoinByUserIdAndChannelId } from '../lib/dbQueries'
import { ChannelJoinResource, validateInput } from '../lib/model'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  if (!req.body) {
    context.res = {
      status: 400,
      body: { message: `No body attached to POST query.` }
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
  const user = result.userFromJwt as { id: string; username: string; email: string }
  const inputPost = req.body as CreatePostView
  const { parentChannelId, title, rawMarkdown } = inputPost
  const isValid = validateInput(inputPost)
  if (!isValid) {
    context.res = {
      status: 400,
      body: { message: `Request body field(s) failed validation.` }
    }
    return
  }

  // DB
  // todo: optimize container usage
  const database = fetchCosmosDatabase()

  // Check for parent channel
  const channelsContainer = fetchCosmosContainer(database, 'Channels')
  const { resource: parentChannel } = await channelsContainer.item(parentChannelId, parentChannelId).read<ChannelModel>()
  if (!parentChannel) {
    context.res = {
      status: 400,
      body: { message: `Parent channel with id ${parentChannelId} does not exists!` }
    }
    return
  }

  // Check if joined to channel
  const channelJoinsContainer = fetchCosmosContainer(database, 'ChannelJoins')
  const { resources } = await channelJoinsContainer.items
    .query<ChannelJoinResource>(createQueryChannelJoinByUserIdAndChannelId(user.id, parentChannel.id))
    .fetchAll()
  if (resources.length == 0) {
    context.res = {
      status: 403,
      body: { message: `You are not joined to the channel you want to publish a post to!` }
    }
    return
  }

  // Creation
  const creatablePost: PostModel = {
    createdAt: +new Date(),
    title,
    rawMarkdown,
    publisherId: user.id,
    parentChannelId: parentChannel.id
  }

  const postsContainer = fetchCosmosContainer(database, 'Posts')
  const { resource: post } = await postsContainer.items.create(creatablePost)

  // Upvote the post by the publisher user immediately after creation
  const postVotesContainer = fetchCosmosContainer(database, 'PostVotes')
  await postVotesContainer.items.create<PostVoteModel>({
    userId: user.id,
    postId: post.id,
    isUpvote: true
  })

  context.res = {
    body: post
  }
}

export default httpTrigger
