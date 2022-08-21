import { Box, Grid, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import { Link } from 'gatsby'

import { BlogPreviewCard } from '~components/blog/BlogPreviewCard'
import { SContainer } from '~components/_common/SContainer'
import { SEO } from '~components/_common/SEO'
import { SHero } from '~components/_common/SHero'
import { SLayout } from '~components/_common/SLayout'

const Blog = () => {
  const articles: any[] = []

  return (
    <>
      <SEO title="Blog" />
      <SLayout>
        <SHero>
          <SContainer>
            <Heading as="h1">Legújabb bejegyzések</Heading>
          </SContainer>
        </SHero>
        <SContainer>
          <Grid templateColumns={`repeat(${useBreakpointValue({ base: 1, md: 2 })}, 1fr)`} gap={{ base: 24, sm: 10 }}>
            {articles.map((post) => (
              <BlogPreviewCard key={post.fields.slug} post={post} />
            ))}
          </Grid>
          <Box textAlign="right" mt={8}>
            <Text as={Link} fontSize="lg" to="/archive" color="orange.400" _hover={{ color: 'tomato', textDecor: 'underline' }}>
              Még több...
            </Text>
          </Box>
        </SContainer>
      </SLayout>
    </>
  )
}

export default Blog
