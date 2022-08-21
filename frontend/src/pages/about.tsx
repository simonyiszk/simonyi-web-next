import { Flex, Heading, HStack, Text, useBreakpointValue } from '@chakra-ui/react'

import { SContainer } from '~components/_common/SContainer'
import { SEO } from '~components/_common/SEO'
import { SLayout } from '~components/_common/SLayout'
import { getSocials } from '~utils/commonFunctions'

/** key -> title */
const ABOUT_MAP: Map<string, string> = new Map([['contact', 'Kapcsolat']])

const AboutPage = () => {
  return (
    <>
      <SEO title="Rólunk" />
      <SLayout>
        <SContainer>
          <Heading
            textAlign="center"
            my={6}
            fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
            fontWeight="bold"
            lineHeight="none"
            letterSpacing="tight"
          >
            Simonyi Károly Szakkollégium
          </Heading>

          <Flex mt={6} direction={{ base: 'column', sm: 'row' }}>
            <Flex mt={{ base: 4, sm: 0 }} flex={1} whiteSpace="nowrap" width="full" direction="column" alignItems="flex-end">
              {getSocials().map(({ url, Icon, longText }) => (
                <HStack
                  key={url}
                  pb={2}
                  as="a"
                  target="_blank"
                  _hover={{ color: 'orange.400' }}
                  transition="color 200ms ease-in-out"
                  href={url}
                >
                  <Text>{longText}</Text>
                  <Icon size={useBreakpointValue({ base: '1rem', lg: '1.5rem' })} />
                </HStack>
              ))}
            </Flex>
          </Flex>
        </SContainer>
      </SLayout>
    </>
  )
}

export default AboutPage
