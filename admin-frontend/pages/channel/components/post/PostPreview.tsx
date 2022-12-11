import { Box, useBreakpointValue, useToast } from '@chakra-ui/react'
import { PostView } from '@triszt4n/remark-types'
import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../../../api/contexts/auth/useAuthContext'
import { postModule } from '../../../../api/modules/post.module'
import { FailedVotingModal } from '../../../../components/voting/FailedVotingModal'
import { queryClient } from '../../../../util/query-client'
import { rconsole } from '../../../../util/remark-console'
import { PostPreviewDesktop } from './PostPreviewDesktop'
import { PostPreviewMobile } from './PostPreviewMobile'

export type PostPreviewProps = {
  post: PostView
}

export const PostPreview = ({ post }: PostPreviewProps) => {
  const toast = useToast()
  const navigate = useNavigate()
  const { isLoggedIn } = useAuthContext()
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

  const voteMutation = useMutation(postModule.votePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['channelPosts', post.channel.id])
    },
    onError: (error) => {
      const err = error as AxiosError<{ message: string }>
      rconsole.log('Error at votePost', JSON.stringify(err))
      toast({
        title: 'Error occured when sending vote',
        description: `${err.response?.status} ${err.response?.data.message || err.message} Try again later.`,
        status: 'error',
        isClosable: true
      })
    }
  })

  const onUpvotePressed = () => {
    if (!isLoggedIn) {
      return unauthorizedToast()
    }
    voteMutation.mutate({ id: post.id, voteType: post.myVote === 'up' ? 'none' : 'up' })
  }
  const onDownvotePressed = () => {
    if (!isLoggedIn) {
      return unauthorizedToast()
    }
    voteMutation.mutate({ id: post.id, voteType: post.myVote === 'down' ? 'none' : 'down' })
  }

  return (
    <Box as="article" p={4} borderRadius="md" borderWidth="1px">
      {useBreakpointValue({
        base: (
          <PostPreviewMobile
            post={post}
            onUpvotePressed={onUpvotePressed}
            onDownvotePressed={onDownvotePressed}
            targetPath={`/posts/${post.id}`}
            isSendLoading={voteMutation.isLoading}
          />
        ),
        md: (
          <PostPreviewDesktop
            post={post}
            onUpvotePressed={onUpvotePressed}
            onDownvotePressed={onDownvotePressed}
            targetPath={`/posts/${post.id}`}
            isSendLoading={voteMutation.isLoading}
          />
        )
      })}
    </Box>
  )
}
