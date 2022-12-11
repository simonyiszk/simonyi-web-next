import { Code, Heading, useToast, VStack } from '@chakra-ui/react'
import { ChannelView, UpdatePostView } from '@triszt4n/remark-types'
import { AxiosError } from 'axios'
import { useMutation } from 'react-query'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useAuthContext } from '../../../api/contexts/auth/useAuthContext'
import { useStatefulQuery } from '../../../api/hooks/useStatefulQuery'
import { channelModule } from '../../../api/modules/channel.module'
import { postModule } from '../../../api/modules/post.module'
import { PuzzleAnimated } from '../../../components/commons/PuzzleAnimated'
import { rconsole } from '../../../util/remark-console'
import { PostForm } from './PostForm'

export const CreatePostPage = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const { isLoggedIn } = useAuthContext()
  const { channelId } = useParams()
  const {
    isLoading,
    error,
    data: channel
  } = useStatefulQuery<ChannelView>('channel', ['channelInfo', channelId], () => channelModule.fetchChannel(channelId!!))

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
    const err = error as AxiosError<{ message: string }>
    console.error('[DEBUG] Error at CreatePostPage', err)
    return (
      <Navigate
        replace
        to="/error"
        state={{
          title: 'Error occured loading channel info for creating post for',
          messages: [err.response?.data.message]
        }}
      />
    )
  }

  const mutation = useMutation(postModule.createPost, {
    onSuccess: ({ data }) => {
      navigate(`/posts/${data.id}`)
    },
    onError: (error) => {
      const err = error as AxiosError<{ message: string }>
      rconsole.log('Error at createPost', JSON.stringify(err))
      toast({
        title: 'Error occured when creating post',
        description: `${err.response?.status} ${err.response?.data.message} Try again later.`,
        status: 'error',
        isClosable: true
      })
    }
  })

  const onSend = (creatable: UpdatePostView & { imageFileData?: any }) => {
    mutation.mutate({ ...creatable, parentChannelId: channel!!.id })
  }

  return (
    <VStack spacing={6} alignItems="stretch">
      <Heading fontSize="3xl">
        Create post in <Code fontSize="3xl">ch/{channel!!.uriName}</Code>
      </Heading>
      <PostForm onSend={onSend} sendButtonText="Create" isSendLoading={mutation.isLoading} />
    </VStack>
  )
}
