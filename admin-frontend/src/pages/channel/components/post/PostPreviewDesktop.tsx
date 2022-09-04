import { Box, Heading, HStack, Image, LinkBox, LinkOverlay, Tooltip, VStack } from '@chakra-ui/react'
import { PostView } from '@triszt4n/remark-types'
import { Link } from 'react-router-dom'
import { RLink } from '../../../../components/commons/RLink'
import { VoteButtons } from '../../../../components/voting/VoteButtons'
import { ellipsifyLongText, toDateTimeString, toRelativeDateString } from '../../../../util/core-util-functions'
import { PostPreviewDescription } from './parts/PostPreviewDescription'

type Props = {
  targetPath: string
  post: PostView
  onUpvotePressed: () => void
  onDownvotePressed: () => void
  isSendLoading: boolean
}

export const PostPreviewDesktop = ({ post, onUpvotePressed, onDownvotePressed, targetPath, isSendLoading }: Props) => {
  return (
    <HStack spacing={6} alignItems="start">
      <VStack spacing={2}>
        <VoteButtons
          voteCount={post.voteCount}
          myVote={post.myVote}
          onUpvotePressed={onUpvotePressed}
          onDownvotePressed={onDownvotePressed}
          isSendLoading={isSendLoading}
        />
      </VStack>
      <LinkBox as={HStack} flex={1} spacing={3} alignItems="start">
        <Box flex={1}>
          <Box fontSize="sm" fontWeight={300}>
            posted by <RLink to={`/u/${post.publisher.username}`}>{post.publisher.username}</RLink>{' '}
            <Tooltip hasArrow placement="top" label={toDateTimeString(post.createdAt)}>
              <time style={{ position: 'absolute', zIndex: 2, marginLeft: '0.25rem' }} dateTime={new Date(post.createdAt).toISOString()}>
                {toRelativeDateString(post.createdAt)}
              </time>
            </Tooltip>
          </Box>
          <Heading size="lg" mb={4}>
            <LinkOverlay as={Link} to={targetPath}>
              {post.title}
            </LinkOverlay>
          </Heading>
          <PostPreviewDescription rawMarkdown={post.rawMarkdown} />
        </Box>
        <Box>
          {post.imageUrl && (
            <Image
              height={{ md: '8rem', lg: '10rem' }}
              width={{ md: '12rem', lg: '14rem' }}
              borderRadius="md"
              objectFit="cover"
              src={post.imageUrl}
              alt={ellipsifyLongText(post.title, 16)}
            />
          )}
        </Box>
      </LinkBox>
    </HStack>
  )
}
