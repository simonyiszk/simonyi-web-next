import { Box, Heading, HStack, Image, LinkBox, LinkOverlay, Spacer } from '@chakra-ui/react'
import { PostView } from '@triszt4n/remark-types'
import { Link } from 'react-router-dom'
import { RLink } from '../../../../components/commons/RLink'
import { VoteButtons } from '../../../../components/voting/VoteButtons'
import { ellipsifyLongText, toRelativeDateString } from '../../../../util/core-util-functions'
import { PostPreviewDescription } from './parts/PostPreviewDescription'

type Props = {
  targetPath: string
  post: PostView
  onUpvotePressed: () => void
  onDownvotePressed: () => void
  isSendLoading: boolean
}

export const PostPreviewMobile = ({ post, onUpvotePressed, onDownvotePressed, targetPath, isSendLoading }: Props) => {
  return (
    <Box>
      <LinkBox as={HStack} mb={4}>
        <Box flex={1}>
          <Heading size="md" mb={2}>
            <LinkOverlay as={Link} to={targetPath}>
              {post.title}
            </LinkOverlay>
          </Heading>
          <PostPreviewDescription rawMarkdown={post.rawMarkdown} />
        </Box>
        {post.imageUrl && (
          <Image
            height="4rem"
            width="6rem"
            borderRadius="md"
            objectFit="cover"
            src={post.imageUrl}
            alt={ellipsifyLongText(post.title, 16)}
          />
        )}
      </LinkBox>
      <HStack spacing={2}>
        <VoteButtons
          voteCount={post.voteCount}
          onUpvotePressed={onUpvotePressed}
          onDownvotePressed={onDownvotePressed}
          myVote={post.myVote}
          isSendLoading={isSendLoading}
        />
        <Spacer />
        <Box fontSize="xs" textAlign="end">
          <Box>
            Posted by <RLink to={`/u/${post.publisher.username}`}>{ellipsifyLongText(post.publisher.username, 24)}</RLink>
          </Box>
          <Box>
            <time dateTime={new Date(post.createdAt).toISOString()}>{toRelativeDateString(post.createdAt)}</time>
          </Box>
        </Box>
      </HStack>
    </Box>
  )
}
