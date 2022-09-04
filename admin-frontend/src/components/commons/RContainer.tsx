import { Flex } from '@chakra-ui/react'
import { HasChildren } from '../../util/types'

export const RContainer = ({ children }: HasChildren) => (
  <Flex flexDirection="column" px={4} py={4} mx="auto" maxWidth={['100%', '48rem', '48rem', '64rem']}>
    {children}
  </Flex>
)
