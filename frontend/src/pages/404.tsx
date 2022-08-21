import { Button, Container, Flex, Heading } from '@chakra-ui/react'
import { Link } from 'gatsby'
import { SEO } from '~components/_common/SEO'
import { SHero } from '~components/_common/SHero'
import { SLayout } from '~components/_common/SLayout'

const NotFoundPage = () => (
  <>
    <SEO title="404" robots="nofollow, noindex" />
    <SLayout>
      <SHero>
        <Container>
          <Heading as="h1">Az oldal nem található.</Heading>
        </Container>
      </SHero>
      <Container>
        <Flex justifyContent="space-between">
          A keresett elérési útvonalon tartalom nem található.{' '}
          <Button as={Link} colorScheme="brand" variant="outline" to="/">
            Vissza
          </Button>
        </Flex>
      </Container>
    </SLayout>
  </>
)

export default NotFoundPage
