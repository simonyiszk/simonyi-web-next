import { Box, HStack, Skeleton, SkeletonCircle, SkeletonText, useBreakpointValue } from '@chakra-ui/react'
import { VoteButtonsLoading } from '../../../../components/voting/VoteButtonsLoading'

export const CommentItemLoading = () => {
  return (
    <Box>
      <HStack>
        <SkeletonCircle size={useBreakpointValue({ base: '6', sm: '8' })} />
        <Skeleton height="0.8rem" width={{ base: '80%', md: '40%' }} />
      </HStack>
      <Box borderLeftWidth="0.2rem" mt={1} overflow="auto" ml={{ base: '0.6rem', sm: '0.9rem' }} pl={{ base: '0.7rem', sm: '1.4rem' }}>
        <SkeletonText noOfLines={4} my={4} />
        <HStack my={2}>
          <VoteButtonsLoading />
        </HStack>
      </Box>
    </Box>
  )
}
