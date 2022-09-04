import { Avatar, Box, Button, Heading, HStack, Image, Link, Spacer, Tooltip, VStack } from '@chakra-ui/react'
import { PostView } from '@triszt4n/remark-types'
import { FaExpand } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import { RemarkUIRenderer } from '../../../assets/remark-ui-renderer'
import { RLink } from '../../../components/commons/RLink'
import { VoteButtons } from '../../../components/voting/VoteButtons'
import { toDateTimeString, toRelativeDateString } from '../../../util/core-util-functions'

type Props = {
  post: PostView
  onUpvotePressed: () => void
  onDownvotePressed: () => void
  isSendLoading: boolean
}

export const PostDetailsDesktop = ({ post, onUpvotePressed, onDownvotePressed, isSendLoading }: Props) => {
  const { createdAt, publisher: user, rawMarkdown, channel, title, voteCount, myVote, imageUrl } = post

  return (
    <>
      <HStack alignItems="start" spacing={6}>
        <VStack spacing={2}>
          <Avatar m={1} mb={3} name={`${user.firstName} ${user.lastName}`} src={user.imageUrl} />
          <VoteButtons
            voteCount={voteCount}
            onUpvotePressed={onUpvotePressed}
            onDownvotePressed={onDownvotePressed}
            myVote={myVote}
            isSendLoading={isSendLoading}
          />
        </VStack>
        <Box>
          <Box fontSize={{ base: 'sm', md: 'md' }}>
            posted in <RLink to={`/channels/${channel.id}`}>{channel.uriName}</RLink> by{' '}
            <RLink to={`/u/${user.username}`}>{user.username}</RLink>
            <Tooltip hasArrow placement="top" label={toDateTimeString(createdAt)}>
              <time dateTime={new Date(createdAt).toISOString()}> {toRelativeDateString(createdAt)}</time>
            </Tooltip>
          </Box>
          <Heading size="4xl">{title}</Heading>
        </Box>
        <Spacer />
        {imageUrl && (
          <Box position="relative">
            <Image
              borderRadius="md"
              maxHeight={{ md: '6rem', lg: '12rem' }}
              maxWidth={{ md: '10rem', lg: '20rem' }}
              src={imageUrl}
              alt="Post image"
            />
            <Link href={imageUrl} isExternal>
              <Button size="xs" colorScheme="themeHelper" position="absolute" top="-0.15rem" right="-0.15rem">
                <FaExpand />
              </Button>
            </Link>
          </Box>
        )}
      </HStack>
      <Box px={6}>
        <ReactMarkdown components={RemarkUIRenderer()} children={rawMarkdown} skipHtml />
      </Box>
    </>
  )
}
