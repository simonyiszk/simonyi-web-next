import { Box, Flex } from '@chakra-ui/react'
import { HasChildren } from '../../util/types'
import { Navbar } from '../navbar'
import { Footer } from './Footer'
import { RContainer } from './RContainer'

type Props = {
  background?: string
} & HasChildren

export const RLayout = ({ background, children }: Props) => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Navbar />
      <Box background={background} flex={1} pb={24}>
        <RContainer>{children}</RContainer>
      </Box>
      <Footer />
    </Flex>
  )
}
