import { Box, Heading, useToast, VStack } from '@chakra-ui/react'
import { CommentView, PostView, UpdateCommentView } from '@triszt4n/remark-types'
import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useAuthContext } from '../../../api/contexts/auth/useAuthContext'
import { useStatefulQuery } from '../../../api/hooks/useStatefulQuery'
import { commentModule } from '../../../api/modules/comment.module'
import { postModule } from '../../../api/modules/post.module'
import { PuzzleAnimated } from '../../../components/commons/PuzzleAnimated'
import { RLink } from '../../../components/commons/RLink'
import { queryClient } from '../../../util/query-client'
import { rconsole } from '../../../util/remark-console'
import { CommentForm } from './CommentForm'

const errorHandler = (error: any) => {
  if (error) {
    const err = error as AxiosError<{ message: string }>
    console.error('[DEBUG] Error at EditCommentPage', err)
    return (
      <Navigate
        replace
        to="/error"
        state={{
          title: 'Error occured loading post or comment info',
          messages: [err.response?.data.message]
        }}
      />
    )
  }
}

export const EditCommentPage = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const { isLoggedIn } = useAuthContext()
  const { postId } = useParams()
  const {
    isLoading: isLoadingPost,
    error: errorPost,
    data: post
  } = useStatefulQuery<PostView>('post', ['post', postId], () => postModule.fetchPost(postId!!))

  const { commentId } = useParams()
  const {
    isLoading: isLoadingComment,
    error: errorComment,
    data: comment
  } = useStatefulQuery<CommentView>('comment', ['comment', commentId], () => commentModule.fetchComment(commentId!!))

  const mutation = useMutation(commentModule.updateComment, {
    onSuccess: () => {
      navigate(`/posts/${post?.id}`)
      queryClient.invalidateQueries(['postComments', [post?.id]])
    },
    onError: (error) => {
      const err = error as AxiosError<{ message: string }>
      rconsole.log('Error at updateComment', JSON.stringify(err))
      toast({
        title: 'Error occured when updating comment',
        description: `${err.response?.status} ${err.response?.data.message} Try again later.`,
        status: 'error',
        isClosable: true
      })
    }
  })

  const onSend = (updatable: UpdateCommentView) => {
    if (!commentId) return
    mutation.mutate({ id: commentId, commentData: updatable })
  }

  if (!isLoggedIn) {
    return (
      <Navigate
        replace
        to="/error"
        state={{
          title: 'You are not logged in',
          messages: [
            'The action you intended to do is restricted to authenticated users',
            'Please log in via the Log in button in the navigation bar'
          ]
        }}
      />
    )
  }

  if (isLoadingPost || isLoadingComment) {
    return <PuzzleAnimated text="Loading" />
  }

  if (errorPost) {
    console.error('[DEBUG] Error at EditCommentPage', errorPost)
    return (
      <Navigate
        replace
        to="/error"
        state={{ title: 'Error occured loading post info', messages: [(errorPost as any)?.response.data.message] }}
      />
    )
  }
  if (errorComment) {
    console.error('[DEBUG] Error at EditCommentPage', errorComment)
    return (
      <Navigate
        replace
        to="/error"
        state={{ title: 'Error occured loading comment info', messages: [(errorComment as any)?.response.data.message] }}
      />
    )
  }

  // Comment's publisher, moderators and owner can edit the comment
  if (!comment?.amIPublisher && !post?.channel.amIModerator && !post?.channel.amIOwner) {
    return (
      <Navigate
        replace
        to="/error"
        state={{
          title: 'Access forbidden',
          messages: [
            'The action you intended to do is restricted to users with proper access to the resource',
            "Please contact the resource's owner for further actions"
          ]
        }}
      />
    )
  }

  return (
    <VStack spacing={6} alignItems="stretch">
      <Heading fontSize="3xl">Edit comment</Heading>
      <Box>
        Comment by <RLink to={`/u/${comment?.publisher.username}`}>{comment?.publisher.username}</RLink> under post titled{' '}
        <RLink to={`/posts/${post?.id}`}>{post?.title}</RLink>
      </Box>
      <CommentForm onSend={onSend} buttonProps={{ sendButtonText: 'Save' }} defaultValues={comment} isSendLoading={mutation.isLoading} />
    </VStack>
  )
}
