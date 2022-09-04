import { Flex, HStack, Skeleton, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import { UpdateCommentView } from '@triszt4n/remark-types'
import { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { useMutation, useQuery } from 'react-query'
import { Navigate, useParams } from 'react-router-dom'
import { useAuthContext } from '../../api/contexts/auth/useAuthContext'
import { commentModule } from '../../api/modules/comment.module'
import { postModule } from '../../api/modules/post.module'
import { RemarkEditorLoading } from '../../components/editor/RemarkEditorLoading'
import { queryClient } from '../../util/query-client'
import { rconsole } from '../../util/remark-console'
import { ActionsSection } from './components/ActionsSection'
import { CommentSection } from './components/CommentSection'
import { PostDetails } from './components/PostDetails'
import { PostDetailsLoading } from './components/PostDetailsLoading'
import { CommentForm } from './forms/CommentForm'
import { UploadPostImageModal } from './modals/UploadPostImageModal'

export const PostPage = () => {
  const { postId } = useParams()
  const { isLoggedIn } = useAuthContext()
  const toast = useToast()
  const { isLoading, data: post, error } = useQuery(['post', postId], () => postModule.fetchPost(postId!!))
  const [canEraseContent, setCanEraseContent] = useState(false)
  const { isOpen, onOpen: onUploadImagePressed, onClose } = useDisclosure()

  const mutation = useMutation(commentModule.createComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['postComments', postId])
      setCanEraseContent(true)
      setCanEraseContent(false)
    },
    onError: (error) => {
      const err = error as any
      rconsole.log('Error at createComment', err.toJSON())
      toast({
        title: 'Error occured when creating comment',
        description: `${err.response.status} ${err.response.data.message} Try again later.`,
        status: 'error',
        isClosable: true
      })
    }
  })

  const onSend = (creatable: UpdateCommentView) => {
    if (!postId) return
    mutation.mutate({ ...creatable, parentPostId: postId })
  }

  if (error) {
    rconsole.log('Error at PostPage', error)
    return (
      <Navigate
        replace
        to="/error"
        state={{ title: "Error when fetching post's details!", messages: [(error as any)?.response.data.message] }}
      />
    )
  }

  return (
    <>
      <VStack align="stretch" spacing={10}>
        {isLoading ? (
          <>
            <PostDetailsLoading />
            <HStack>
              <Skeleton width="6rem" height="2.5rem" />
              <Flex flex={1} borderTopWidth="2px" />
            </HStack>
          </>
        ) : (
          <>
            <PostDetails post={post!!} />
            <ActionsSection post={post!!} onUploadImagePressed={onUploadImagePressed} />
          </>
        )}
        {isLoggedIn && isLoading && <RemarkEditorLoading />}
        {isLoggedIn && !isLoading && (
          <CommentForm
            buttonProps={{ sendButtonText: 'Send comment', hideBackButton: true, sendButtonIcon: <FaPaperPlane /> }}
            onSend={onSend}
            canEraseContent={canEraseContent}
            isSendLoading={mutation.isLoading}
          />
        )}
        <CommentSection postId={postId!!} post={post} />
      </VStack>
      <UploadPostImageModal postId={postId!!} isOpen={isOpen} onClose={onClose} />
    </>
  )
}
