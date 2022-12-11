import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { readUserFromAuthHeader } from '@triszt4n/remark-auth'
import { ChannelInPostView, MyVoteType, PostView } from '@triszt4n/remark-types'
import { fetchCosmosContainer, fetchCosmosDatabase } from '../lib/dbConfig'
import {
  createQueryChannelJoinByUserIdAndChannelId,
  createQueryPostVoteByPostIdAndUserId,
  createQueryPostVotesByPostId
} from '../lib/dbQueries'
import { ChannelJoinResource, ChannelResource, PostResource, PostVoteResource, UserResource } from '../lib/model'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const id = context.bindingData.id as string

  // User data from Authorization
  const result = readUserFromAuthHeader(req, process.env.JWT_PRIVATE_KEY)
  const user = result.isError ? null : (result.userFromJwt as { id: string; username: string; email: string })

  const database = fetchCosmosDatabase()
  // todo: optimize, and place these connection openers where needed
  const channelsContainer = fetchCosmosContainer(database, 'Channels')
  const postsContainer = fetchCosmosContainer(database, 'Posts')
  const usersContainer = fetchCosmosContainer(database, 'Users')
  const postVotesContainer = fetchCosmosContainer(database, 'PostVotes')
  const channelJoinsContainer = fetchCosmosContainer(database, 'ChannelJoins')

  const { resource: post } = await postsContainer.item(id, id).read<PostResource>()
  if (!post) {
    context.res = {
      status: 404,
      body: { message: `Post with id ${id} not found.` }
    }
    return
  }

  // todo: optimize with parallel
  const { resource: publisher } = await usersContainer.item(post.publisherId, post.publisherId).read<UserResource>()

  const { resources: postVotes } = await postVotesContainer.items.query<PostVoteResource>(createQueryPostVotesByPostId(id)).fetchAll()
  const voteCount = postVotes.reduce((total, { isUpvote }) => (isUpvote ? total + 1 : total - 1), 0)

  let myVote: MyVoteType = 'none'
  if (user) {
    const { resources } = await postVotesContainer.items
      .query<PostVoteResource>(createQueryPostVoteByPostIdAndUserId(id, user.id))
      .fetchAll()
    if (resources.length > 0) {
      myVote = resources[0].isUpvote ? 'up' : 'down'
    }
  }

  const { resource: parentChannel } = await channelsContainer.item(post.parentChannelId, post.parentChannelId).read<ChannelResource>()

  let amIOwner = false,
    amIModerator = false
  if (user) {
    const { resources: channelJoins } = await channelJoinsContainer.items
      .query<ChannelJoinResource>(createQueryChannelJoinByUserIdAndChannelId(user.id, parentChannel.id))
      .fetchAll()

    if (channelJoins.length !== 0) {
      amIOwner = channelJoins[0].isOwner
      amIModerator = channelJoins[0].isModerator
    }
  }

  const channel: ChannelInPostView = {
    ...parentChannel,
    amIOwner,
    amIModerator
  }

  const returnable: PostView = {
    ...post,
    publisher,
    channel,
    voteCount,
    myVote,
    amIPublisher: user?.id == publisher.id
  }

  context.res = {
    body: returnable
  }
}

export default httpTrigger
