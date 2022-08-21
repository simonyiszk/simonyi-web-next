import { Box, chakra, Heading } from '@chakra-ui/react'
import { Link } from 'gatsby'

import { SContainer } from '~components/_common/SContainer'
import { SEO } from '~components/_common/SEO'
import { SHero } from '~components/_common/SHero'
import { SLayout } from '~components/_common/SLayout'

const Archive = () => {
  const articles: any[] = []

  return (
    <>
      <SEO title="Archívum" />
      <SLayout>
        <Box>
          <SHero>
            <SContainer>
              <Heading as="h1">Archívum</Heading>
            </SContainer>
          </SHero>
          <SContainer>
            {articles.map((post) => (
              <Box key={post.fields.slug} fontSize={{ base: 'md', md: 'lg' }} py={1}>
                <span>{post.frontmatter.date.split('T')[0]} » </span>
                <Link to={post.fields.slug}>
                  <chakra.span fontWeight="bold" _hover={{ textDecor: 'underline', color: 'tomato', transition: '.2s ease-in-out' }}>
                    {post.frontmatter.title}
                  </chakra.span>
                </Link>
              </Box>
            ))}
          </SContainer>
        </Box>
      </SLayout>
    </>
  )
}

export default Archive
