import { Button, Flex, Heading, Link } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import { RootContainer } from '../layouts'

const NotFoundPage = () => (
  <>
    <NextSeo title="404" nofollow noindex />
    <RootContainer>
      <Heading as="h1" my={10}>
        Az oldal nem található.
      </Heading>
      <Flex justifyContent="space-between">
        A keresett elérési útvonalon tartalom nem található.{' '}
        <Button as={Link} colorScheme="brand" variant="outline" to="/">
          Vissza
        </Button>
      </Flex>
    </RootContainer>
  </>
)

export default NotFoundPage
