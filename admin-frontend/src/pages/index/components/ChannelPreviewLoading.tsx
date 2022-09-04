import { Box, HStack, Skeleton, SkeletonText } from '@chakra-ui/react'

export const ChannelPreviewLoading = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={6}>
      <HStack mb={4}>
        <Box flex={1}>
          <Skeleton height="2.5rem" width="60%" />
          <Skeleton height="2rem" width="90%" mb={3} mt={6} />
          <SkeletonText noOfLines={3} />
        </Box>
      </HStack>
      <HStack justifyContent="space-between">
        <Skeleton height="2rem" width="6rem" />
        <Skeleton height="2rem" width="6rem" />
      </HStack>
    </Box>
  )
}
