import { Box, HStack, Skeleton, SkeletonCircle, SkeletonText, useBreakpointValue, VStack } from '@chakra-ui/react'
import { VoteButtonsLoading } from '../../../components/voting/VoteButtonsLoading'

export const PostDetailsLoading = () => {
  return (
    <Box>
      {useBreakpointValue({
        base: (
          <>
            <VStack align="stretch" spacing={4}>
              <HStack>
                <SkeletonCircle size="10" />
                <Skeleton h="1rem" w="100%" flex={1} />
              </HStack>
              <Skeleton h="2rem" w="80%" />
              <Skeleton h="2rem" w="90%" />
              <HStack spacing={2}>
                <VoteButtonsLoading />
              </HStack>
            </VStack>
            <Box my={4}>
              <SkeletonText noOfLines={5} />
            </Box>
          </>
        ),
        md: (
          <>
            <HStack alignItems="stretch" spacing={6}>
              <VStack spacing={2}>
                <SkeletonCircle size="16" />
                <VoteButtonsLoading />
              </VStack>
              <VStack spacing={1} flex={1} alignItems="start">
                <Skeleton h="1.5rem" w="90%" />
                <Skeleton h="4rem" w="100%" />
                <Skeleton h="4rem" w="60%" />
              </VStack>
            </HStack>
            <Box px={6} my={6} mt={10}>
              <SkeletonText noOfLines={5} />
            </Box>
          </>
        )
      })}
    </Box>
  )
}
