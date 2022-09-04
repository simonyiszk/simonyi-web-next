import {
  Avatar,
  Badge,
  Box,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Spinner,
  Tooltip,
  useBreakpointValue,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import { CommentView, PostView } from '@triszt4n/remark-types'
import { FaEdit, FaEllipsisV, FaTrashAlt } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../../../api/contexts/auth/useAuthContext'
import { commentModule } from '../../../../api/modules/comment.module'
import { RemarkUIRenderer } from '../../../../assets/remark-ui-renderer'
import { RLink } from '../../../../components/commons/RLink'
import { FailedVotingModal } from '../../../../components/voting/FailedVotingModal'
import { VoteButtons } from '../../../../components/voting/VoteButtons'
import { ellipsifyLongText, toDateTimeString, toRelativeDateString } from '../../../../util/core-util-functions'
import { queryClient } from '../../../../util/query-client'
import { rconsole } from '../../../../util/remark-console'

type Props = {
  comment: CommentView
  post: PostView | undefined
}

export const CommentItem = ({ comment, post }: Props) => {
  const { publisher: user, createdAt, rawMarkdown, voteCount, amIPublisher, myVote } = comment
  const { isLoggedIn } = useAuthContext()
  const navigate = useNavigate()
  const toast = useToast()
  const dangerColor = useColorModeValue('red.600', 'red.400')
  const unauthorizedToast = () =>
    toast({
      render: ({ onClose }) => (
        <FailedVotingModal
          onClose={onClose}
          message="Please log in to vote!"
          actionButton={{ text: 'Log in here', onClick: () => navigate('/login') }}
        />
      )
    })

  const voteMutation = useMutation(commentModule.voteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['postComments', comment.parentPostId])
    },
    onError: (error) => {
      const err = error as any
      rconsole.log('Error at voteComment', err.toJSON())
      toast({
        title: 'Error occured when sending vote',
        description: `${err.response.status} ${err.response.data.message} Try again later.`,
        status: 'error',
        isClosable: true
      })
    }
  })
  const delMutation = useMutation(commentModule.deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['postComments', comment.parentPostId], { refetchInactive: true })
    },
    onError: (error) => {
      const err = error as any
      rconsole.log('Error at deleteComment', err.toJSON())
      toast({
        title: 'Error occured when deleting comment',
        description: `${err.response.status} ${err.response.data.message} Try again later.`,
        status: 'error',
        isClosable: true
      })
    }
  })

  const onUpvotePressed = () => {
    if (!isLoggedIn) {
      return unauthorizedToast()
    }
    voteMutation.mutate({ id: comment.id, voteType: comment.myVote === 'up' ? 'none' : 'up' })
  }
  const onDownvotePressed = () => {
    if (!isLoggedIn) {
      return unauthorizedToast()
    }
    voteMutation.mutate({ id: comment.id, voteType: comment.myVote === 'down' ? 'none' : 'down' })
  }
  const onEditPressed = () => {
    navigate(`/comments/${comment.id}/edit/${post?.id}`, { state: { comment, post } })
  }
  const onDeletePressed = () => {
    if (confirm('Are you sure, you want to delete this comment?')) delMutation.mutate(comment.id)
  }

  return (
    <Box as="article" id={comment.id}>
      <HStack spacing={2} fontSize={{ base: 'xs', sm: 'sm' }} mb={1}>
        <Avatar
          name={`${comment.publisher.firstName} ${user.lastName}`}
          src={user.imageUrl}
          size={useBreakpointValue({ base: 'xs', sm: 'sm' })}
        />
        <RLink to={`/u/${user.username}`} wordBreak="break-all">
          {ellipsifyLongText(user.username, useBreakpointValue({ base: 24, md: 40 }))}
        </RLink>
        <Box>·</Box>
        <Tooltip hasArrow placement="top" label={toDateTimeString(createdAt)}>
          <time dateTime={new Date(createdAt).toISOString()}>{toRelativeDateString(createdAt)}</time>
        </Tooltip>
        <Spacer />
        <Box>
          {(amIPublisher || post?.channel.amIModerator || post?.channel.amIOwner) && (
            <Menu>
              <MenuButton as={IconButton} size="sm" aria-label="Options" icon={<FaEllipsisV />} variant="outline" colorScheme="theme" />
              <MenuList>
                <MenuItem icon={<FaEdit />} onClick={onEditPressed}>
                  Edit comment
                </MenuItem>
                <MenuItem color={dangerColor} icon={<FaTrashAlt />} onClick={onDeletePressed}>
                  Delete comment
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </Box>
      </HStack>
      <Box borderLeftWidth="0.2rem" overflow="auto" ml={{ base: '0.6rem', sm: '0.9rem' }} pl={{ base: '0.7rem', sm: '1.4rem' }}>
        {delMutation.isLoading && (
          <Badge size="xl" colorScheme="red">
            <HStack>
              <Spinner size="xs" />
              <Box>Deletion in progress</Box>
            </HStack>
          </Badge>
        )}
        <ReactMarkdown components={RemarkUIRenderer()} children={rawMarkdown} skipHtml />
        <HStack spacing={2} my={2}>
          <VoteButtons
            voteCount={voteCount}
            onUpvotePressed={onUpvotePressed}
            onDownvotePressed={onDownvotePressed}
            myVote={myVote}
            isSendLoading={voteMutation.isLoading}
          />
        </HStack>
      </Box>
    </Box>
  )
}
