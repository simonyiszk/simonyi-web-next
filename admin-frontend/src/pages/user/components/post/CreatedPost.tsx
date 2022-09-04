import { Badge, Box, Button, Heading, HStack, Image, LinkBox, LinkOverlay, Spacer, VStack } from '@chakra-ui/react'
import { PostPartialView } from '@triszt4n/remark-types'
import { FaChevronRight, FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import { Link, useNavigate } from 'react-router-dom'
import { ellipsifyLongText, toRelativeDateString } from '../../../../util/core-util-functions'

type Props = {
  post: PostPartialView
}

export const CreatedPost = ({ post }: Props) => {
  const { channel, voteCount, createdAt, id, title, imageUrl, rawMarkdown } = post
  const navigate = useNavigate()
  const onReadMore = () => {
    navigate(`/posts/${id}`)
  }

  return (
    <LinkBox flex="0 0 auto">
      <VStack alignItems="stretch" mx={1} borderWidth="1px" borderRadius="md" p={3} w="20rem" h="full">
        <HStack fontSize="xs" color="gray.500" fontWeight={700} letterSpacing="wide" flexWrap="wrap">
          <Badge colorScheme={voteCount > 0 ? 'secondary' : 'primary'} letterSpacing="wide">
            <HStack>
              {voteCount >= 0 ? <FaRegThumbsUp /> : <FaRegThumbsDown />}
              <Box>{voteCount}</Box>
            </HStack>
          </Badge>
          <Box>ch/{channel.uriName}</Box>
          <Spacer />
          <Box>{toRelativeDateString(createdAt)}</Box>
        </HStack>
        <Heading size="sm">
          <LinkOverlay as={Link} to={`/posts/${id}`} whiteSpace="break-spaces">
            {ellipsifyLongText(title, 26)}
          </LinkOverlay>
        </Heading>
        <Box fontSize="xs" whiteSpace="normal">
          <ReactMarkdown allowedElements={[]} unwrapDisallowed children={ellipsifyLongText(rawMarkdown, imageUrl ? 32 : 120)} skipHtml />
        </Box>
        {imageUrl ? (
          <Box>
            <Image borderRadius="md" objectFit="cover" maxH={{ md: '12rem', lg: '10rem' }} w="full" src={imageUrl} alt="Post image" />
          </Box>
        ) : (
          <>
            <Spacer />
            <VStack alignItems="end">
              <Button size="sm" variant="ghost" colorScheme="theme" rightIcon={<FaChevronRight />} onClick={onReadMore}>
                Read more
              </Button>
            </VStack>
          </>
        )}
      </VStack>
    </LinkBox>
  )
}
