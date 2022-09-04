import { Flex, Skeleton, VStack } from '@chakra-ui/react'

type Props = {
  textAreaHeight?: string | number
}

export const RemarkEditorLoading = ({ textAreaHeight = '22rem' }: Props) => {
  return (
    <VStack width="full" align="stretch">
      <Skeleton width="10rem" height="2rem" />
      <Skeleton width="70%" height="1.5rem" />
      <Skeleton borderRadius="md" width="100%" height={textAreaHeight} />
      <Flex justifyContent="flex-end">
        <Skeleton width="10rem" height="2rem" />
      </Flex>
    </VStack>
  )
}
