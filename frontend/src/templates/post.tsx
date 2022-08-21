import { Box, Button, Flex, Heading, HStack, Tag, Text, useBreakpointValue } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/system'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'

import { FaClock } from 'react-icons/fa'
import { BlogAuthor } from '~components/blog/BlogAuthor'
import { ScrollButton } from '~components/blog/ScrollButton'
import { SContainer } from '~components/_common/SContainer'
import { SEO } from '~components/_common/SEO'
import { SLayout } from '~components/_common/SLayout'
import { PostProps } from '~types/post.props'
import { readTimeInMinutes } from '~utils/commonFunctions'

type Props = {
  data: {
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: PostProps
      wordCount: {
        words: number
      }
    }
  }
}

const PostTemplate = ({ data }: Props) => {
  const post = data.markdownRemark
  const featuredImage = getImage(post.frontmatter.featuredImage)
  const ogImageSrc = post.frontmatter.ogImage ? getSrc(post.frontmatter.ogImage) : getSrc(post.frontmatter.featuredImage)

  return (
    <>
      <SEO title={post.frontmatter.title} description={post.frontmatter.lead} type="article" image={ogImageSrc} />
      <SLayout
        background={useBreakpointValue({
          xl: 'url(/background/pattern-right.svg) right top repeat-y,url(/background/pattern-left.svg) left top repeat-y'
        })}
      >
        <SContainer>
          <Flex mt={2} direction={{ base: 'column', sm: 'row' }} justifyContent="space-between">
            <Flex flex={1} position="relative" mr={{ base: 0, sm: 2 }} pb={{ base: 2, sm: 0 }}>
              <Box w="80%" zIndex={2}>
                {featuredImage && <GatsbyImage image={featuredImage} alt="Blog preview" objectFit="contain" />}
              </Box>
              <Box zIndex={1} w="100%" h="100%" position="absolute" ml={1} mt={1}>
                <Box bgGradient="radial(orange.400 1px, transparent 1px)" bgSize={{ base: '1.5rem 1.5rem', sm: '1rem 1rem' }} h="100%" />
              </Box>
            </Flex>
            <Flex flex={{ base: 2, md: 4 }} direction="column" justifyContent="center" mt={{ base: 3, sm: 0 }} pl={{ base: 0, sm: 3 }}>
              <Heading as="h1">{post.frontmatter.title}</Heading>
              <Flex justifyContent="space-between" wrap="wrap-reverse">
                <BlogAuthor
                  hasLongDate={useBreakpointValue({ base: false, md: true })}
                  name={post.frontmatter.author}
                  date={new Date(post.frontmatter.date)}
                />
                <HStack
                  ml={4}
                  mb={2}
                  flex={1}
                  fontWeight="light"
                  alignItems="center"
                  justifyContent="flex-end"
                  fontSize="sm"
                  textColor={useColorModeValue('gray.600', 'gray.400')}
                >
                  <FaClock />
                  <Text>{readTimeInMinutes(post.wordCount.words)}&nbsp;perc</Text>
                </HStack>
              </Flex>
            </Flex>
          </Flex>
          <Flex>
            {post.frontmatter.tags && (
              <HStack flex={1} my={3} flexWrap={{ base: 'wrap', sm: 'nowrap' }} justifyContent="flex-end">
                {post.frontmatter.tags.map((tag) => (
                  <Tag key={tag}>#{tag.trim()}</Tag>
                ))}
              </HStack>
            )}
          </Flex>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <Box
            textAlign="right"
            mt={10}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }}
          >
            <Button colorScheme="orange">Vissza a tetejére</Button>
          </Box>
        </SContainer>
        <ScrollButton />
      </SLayout>
    </>
  )
}

export default PostTemplate
