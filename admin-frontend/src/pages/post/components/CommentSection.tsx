import { Box, Flex, VStack } from '@chakra-ui/react'
import { PostView } from '@triszt4n/remark-types'
import { useQuery } from 'react-query'
import { postModule } from '../../../api/modules/post.module'
import { CommentItem } from './comment/CommentItem'
import { CommentItemLoading } from './comment/CommentItemLoading'

type Props = {
  postId: string
  post: PostView | undefined
}

export const CommentSection = ({ postId, post }: Props) => {
  const { isLoading, data: comments, error } = useQuery(['postComments', postId], () => postModule.fetchCommentsOfPost(postId))

  if (isLoading) {
    return (
      <>
        <VStack align="stretch" spacing={6} id="comments">
          {[...Array(5)].map((_, index) => (
            <CommentItemLoading key={index} />
          ))}
        </VStack>
      </>
    )
  }

  if (error) {
    return (
      <Flex justifyContent="center">
        <Box>Error while loading comments: {(error as any).response?.data?.message || (error as any).message}</Box>
      </Flex>
    )
  }

  return (
    <>
      <VStack align="stretch" spacing={6} id="comments">
        {comments
          ?.sort((a, b) => b.createdAt - a.createdAt) // desc
          .map((comment) => (
            <CommentItem post={post} key={comment.id} comment={comment} />
          ))}
      </VStack>
    </>
  )
}
