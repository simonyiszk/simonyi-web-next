import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react'
import { Link } from 'gatsby'
import { IndexLayout } from 'layouts'
import { Header } from '~components/Header'
import { SEO } from '~components/SEO'

const NotFoundPage = () => (
  <>
    <SEO title="404" robots="nofollow, noindex" />
    <IndexLayout>
      <Box>
        <Header>
          <Container>
            <Heading as="h1">Az oldal nem található.</Heading>
          </Container>
        </Header>
        <Container>
          <Flex justifyContent="space-between">
            A keresett elérési útvonalon tartalom nem található.{' '}
            <Button as={Link} colorScheme="brand" variant="outline" to="/">
              Vissza
            </Button>
          </Flex>
        </Container>
      </Box>
    </IndexLayout>
  </>
)

export default NotFoundPage
