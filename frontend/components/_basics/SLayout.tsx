import { Box, Flex } from '@chakra-ui/react'
import { HasChildren } from '../../types/HasChildren'
import { Footer } from '../footer'
import { Navbar } from '../_navigation/Navbar'

type Props = {
  background?: string
} & HasChildren

export const SLayout = ({ background, children }: Props) => (
  <Flex direction="column" minHeight="100vh">
    <Navbar />
    <Box background={background} flex={1} pb={24}>
      {children}
    </Box>
    <Footer />
  </Flex>
)
