import { Flex, FlexProps } from '@chakra-ui/react'
import { HasChildren } from '~utils/HasChildren'

type Props = HasChildren & FlexProps

export const SContainer = ({ children, ...props }: Props) => (
  <Flex flexDirection="column" px={4} py={4} mx="auto" maxWidth={['100%', '48rem', '48rem', '64rem']} {...props}>
    {children}
  </Flex>
)
