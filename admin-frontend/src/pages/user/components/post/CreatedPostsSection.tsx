import { Box, Flex, Heading, Skeleton } from '@chakra-ui/react'
import { PostPartialView } from '@triszt4n/remark-types'
import { rconsole } from '../../../../util/remark-console'
import { CreatedPost } from './CreatedPost'

type Props = {
  posts: PostPartialView[] | undefined
  isLoading: boolean
  error: any
}

export const CreatedPostsSection = ({ posts, isLoading, error }: Props) => {
  if (isLoading) {
    return (
      <>
        <Box py={10}>
          <Skeleton width="14rem" height="2.5rem" />
        </Box>
        <Box maxWidth="100%">
          <Flex py={3} overflowX="auto" flexWrap="nowrap" w="full" alignItems="stretch">
            {[...Array(2)].map((_, index) => (
              <Skeleton key={index} flex="0 0 auto" mx={1} width="20rem" height="16rem" />
            ))}
          </Flex>
        </Box>
      </>
    )
  }

  if (error) {
    rconsole.log('Error at ProfileDetails: CreatedPostsSection', error)
    return (
      <>
        <Box>
          <Heading size="xl" mt={10} mb={4}>
            Posts created
          </Heading>
        </Box>
        <Box maxWidth="100%">
          <Box>Error when fetching createad posts! {error?.response.data.message}</Box>
        </Box>
      </>
    )
  }

  return (
    <>
      <Box>
        <Heading size="xl" mt={10} mb={4}>
          Posts created
        </Heading>
      </Box>
      {posts?.length == 0 ? (
        <Box>No posts found</Box>
      ) : (
        <Flex py={3} overflowX="auto" flexWrap="nowrap" w="full" alignItems="stretch">
          {posts
            ?.sort((a, b) => b.createdAt - a.createdAt) // desc
            .map((post) => (
              <CreatedPost key={post.id} post={post} />
            ))}
        </Flex>
      )}
    </>
  )
}
