import { Box, BoxProps } from '@chakra-ui/react'
import { HasChildren } from '../../types/HasChildren'

type Props = HasChildren & BoxProps

export const SHero = ({ children, ...props }: Props) => (
  <Box py={12} {...props}>
    {children}
  </Box>
)
