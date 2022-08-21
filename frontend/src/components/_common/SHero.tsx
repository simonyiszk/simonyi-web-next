import { Box, BoxProps } from '@chakra-ui/react'
import { HasChildren } from '~utils/HasChildren'

type Props = HasChildren & BoxProps

export const SHero = ({ children, ...props }: Props) => (
  <Box py={12} {...props}>
    {children}
  </Box>
)
