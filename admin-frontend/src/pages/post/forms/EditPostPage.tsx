import { Code, Heading, useToast, VStack } from '@chakra-ui/react'
import { PostView, UpdatePostView } from '@triszt4n/remark-types'
import { useMutation } from 'react-query'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useAuthContext } from '../../../api/contexts/auth/useAuthContext'
import { useStatefulQuery } from '../../../api/hooks/useStatefulQuery'
import { postModule } from '../../../api/modules/post.module'
import { PuzzleAnimated } from '../../../components/commons/PuzzleAnimated'
import { rconsole } from '../../../util/remark-console'
import { PostForm } from './PostForm'

export const EditPostPage = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const { isLoggedIn } = useAuthContext()
  const { postId } = useParams()
  const { isLoading, error, data: post } = useStatefulQuery<PostView>('post', ['post', postId], () => postModule.fetchPost(postId!!))

  const mutation = useMutation(postModule.updatePost, {
    onSuccess: () => {
      navigate(`/posts/${postId}`)
    },
    onError: (error) => {
      const err = error as any
      rconsole.log('Error at updatePost', err.toJSON())
      toast({
        title: 'Error occured when updating post',
        description: `${err.response.status} ${err.response.data.message} Try again later.`,
        status: 'error',
        isClosable: true
      })
    }
  })

  const onSend = (updatable: UpdatePostView) => {
    if (!postId) return
    mutation.mutate({ id: postId, postData: updatable })
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

  if (isLoading) {
    return <PuzzleAnimated text="Loading" />
  }

  if (error) {
    console.error('[DEBUG] Error at EditPostPage', error)
    return (
      <Navigate replace to="/error" state={{ title: 'Error occured loading post', messages: [(error as any)?.response.data.message] }} />
    )
  }

  if (!post?.amIPublisher && !post?.channel.amIModerator && !post?.channel.amIOwner) {
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
      <Heading fontSize="3xl">
        Edit your post in <Code fontSize="3xl">ch/{post.channel.uriName}</Code>
      </Heading>
      <PostForm onSend={onSend} sendButtonText="Save" defaultValues={post} isSendLoading={mutation.isLoading} />
    </VStack>
  )
}
