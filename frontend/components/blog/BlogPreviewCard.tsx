import { Box, Flex, Heading, Link } from '@chakra-ui/react'
import { chakra, useColorModeValue } from '@chakra-ui/system'
import { FaClock } from 'react-icons/fa'
import { BlogAuthor } from './BlogAuthor'
import { readTimeInMinutes } from './read-time.util'

export const BlogPreviewCard = () => {
  return (
    <Flex mt={2} direction="column">
      <Flex direction={{ base: 'column', sm: 'row' }} justifyContent="space-between">
        <Flex flex={1} position="relative" mr={{ base: 0, sm: 2 }} pb={{ base: 2, sm: 0 }}>
          <Box w="85%" zIndex={2}>
            {/*<Link to={post.fields.slug}>
              {featuredImage ? (
                <GatsbyImage image={featuredImage} alt="Blog preview" objectFit="contain" />
              ) : (
                <Image src="../../post-default.jpg" />
              )}
              </Link>*/}
          </Box>
          <Box zIndex={1} w="100%" h="100%" position="absolute" ml={1} mt={1}>
            <Box bgGradient="radial(orange.400 1px, transparent 1px)" bgSize={{ base: '1.5rem 1.5rem', sm: '1rem 1rem' }} h="100%" />
          </Box>
        </Flex>
        <Flex flex={2.15} direction="column" justifyContent="center" mt={{ base: 3, sm: 0 }} pl={{ base: 0, sm: 3 }}>
          <Heading as={Link} fontSize="2xl" fontWeight="400" lineHeight="tight" to={'#'}>
            {'TODO'}
          </Heading>
          <Box mt={1} fontWeight="light" textColor={useColorModeValue('gray.600', 'gray.400')}>
            <Box display="inline-block" pr={1}>
              <FaClock size="0.75rem" />
            </Box>
            <chakra.span fontSize="sm">
              {readTimeInMinutes(10)}&nbsp;perc{true ? ` • ${'TODO'}` : ''}
            </chakra.span>
          </Box>
        </Flex>
      </Flex>
      <Flex flex={1} h="fit-content" direction="column" justifyContent="flex-end">
        <Flex justifyContent="space-between" direction={{ base: 'column', sm: 'row' }} flexWrap="wrap" pt={4}>
          <BlogAuthor name={'TODO'} date={new Date()} />
          {/*post.frontmatter.tags && (
            <HStack flex={1} my={3} flexWrap={{ base: 'wrap', sm: 'nowrap' }} justifyContent="flex-end">
              {post.frontmatter.tags.map((tag) => (
                <Tag key={tag}>#{tag.trim()}</Tag>
              ))}
            </HStack>
              )}*/}
        </Flex>
      </Flex>
    </Flex>
  )
}
