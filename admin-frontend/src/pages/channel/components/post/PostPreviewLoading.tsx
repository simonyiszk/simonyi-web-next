import { Box, Heading, HStack, Skeleton, SkeletonText, Spacer, useBreakpointValue, VStack } from '@chakra-ui/react'
import { VoteButtonsLoading } from '../../../../components/voting/VoteButtonsLoading'

type Props = {
  hasImage: boolean
}

export const PostPreviewLoading = ({ hasImage }: Props) => {
  return (
    <Box as="article" p={4} borderRadius="md" borderWidth="1px">
      {useBreakpointValue({
        base: (
          <Box>
            <HStack mb={4}>
              <Box flex={1}>
                <Skeleton height="1.75rem" width="80%" mb={2} />
                <SkeletonText noOfLines={2} />
              </Box>
              {hasImage && <Skeleton height="4rem" width="6rem" />}
            </HStack>
            <HStack>
              <VoteButtonsLoading />
              <Spacer />
              <VStack alignItems="end" spacing={1}>
                <Skeleton height="1rem" width="5rem" />
                <Skeleton height="1rem" width="4rem" />
              </VStack>
            </HStack>
          </Box>
        ),
        md: (
          <HStack spacing={6} alignItems="start">
            <VStack spacing={2}>
              <VoteButtonsLoading />
            </VStack>
            <HStack flex={1} spacing={3} alignItems="start">
              <Box flex={1}>
                <Skeleton height="1rem" width="50%" mb={1} />
                <Heading mb={4}>
                  <Skeleton height="2rem" width="70%" />
                </Heading>
                <SkeletonText noOfLines={3} />
              </Box>
              {hasImage && (
                <Box>
                  <Skeleton height={{ md: '8rem', lg: '10rem' }} width={{ md: '12rem', lg: '14rem' }} />
                </Box>
              )}
            </HStack>
          </HStack>
        )
      })}
    </Box>
  )
}
