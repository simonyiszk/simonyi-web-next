import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { readUserFromAuthHeader } from '@triszt4n/remark-auth'
import { ChannelInPostView, PostPartialView } from '@triszt4n/remark-types'
import { fetchCosmosContainer, fetchCosmosDatabase } from '../lib/dbConfig'
import { createQueryChannelJoinByUserIdAndChannelId, createQueryPostsOfUserId, createQueryPostVotesByPostId } from '../lib/dbQueries'
import { ChannelJoinResource, ChannelResource, PostResource, PostVoteResource } from '../lib/model'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const id = context.bindingData.id as string

  // User data from Authorization
  const result = readUserFromAuthHeader(req, process.env.JWT_PRIVATE_KEY)
  const user = result.isError ? null : (result.userFromJwt as { id: string; username: string; email: string })

  const database = fetchCosmosDatabase()
  const postsContainer = fetchCosmosContainer(database, 'Posts')
  const { resources: posts } = await postsContainer.items.query<PostResource>(createQueryPostsOfUserId(id)).fetchAll()

  // Short circuit if none found, not connecting to containers
  if (posts.length === 0) {
    context.res = {
      body: []
    }
    return
  }

  const channelsContainer = fetchCosmosContainer(database, 'Channels')
  const postVotesContainer = fetchCosmosContainer(database, 'PostVotes')
  const channelJoinsContainer = fetchCosmosContainer(database, 'ChannelJoins')

  const returnables = await Promise.all(
    posts.map(async (post) => {
      // todo: optimize by parallelizing
      const { resources: postVotes } = await postVotesContainer.items
        .query<PostVoteResource>(createQueryPostVotesByPostId(post.id))
        .fetchAll()
      const voteCount = postVotes.reduce((total, { isUpvote }) => (isUpvote ? total + 1 : total - 1), 0)

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

      const returnable: PostPartialView = {
        ...post,
        channel,
        voteCount
      }
      return returnable
    })
  )

  context.res = {
    body: returnables
  }
}

export default httpTrigger
