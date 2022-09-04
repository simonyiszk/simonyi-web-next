import { Badge, Box, Button, Heading, HStack, LinkBox, LinkOverlay, useBreakpointValue } from '@chakra-ui/react'
import { ChannelView } from '@triszt4n/remark-types'
import { FaCheck, FaPlus } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../../api/contexts/auth/useAuthContext'
import { ellipsifyLongText, toReadableNumber, toRelativeDateString } from '../../../util/core-util-functions'

type Props = {
  channel: ChannelView
  onJoinPressed: (channel: ChannelView) => void
  isSendLoading: boolean
}

export const ChannelPreview = ({ channel, onJoinPressed, isSendLoading }: Props) => {
  const { isLoggedIn } = useAuthContext()

  return (
    <LinkBox borderWidth="1px" borderRadius="lg" p={6}>
      <HStack mb={4}>
        <Box flex={1}>
          <Heading size={useBreakpointValue({ base: 'lg', sm: 'xl' })}>
            ch/
            <LinkOverlay as={Link} to={`/ch/${channel.uriName}`}>
              {channel.uriName}
            </LinkOverlay>
          </Heading>
          {channel.amIOwner && <Badge colorScheme="theme">Owned by you</Badge>}
          <Heading size="md" mb={3} mt={6}>
            {channel.title}
          </Heading>
          <Box wordBreak="break-all" fontSize={{ base: 'sm', md: 'md' }}>
            <ReactMarkdown allowedElements={[]} unwrapDisallowed children={ellipsifyLongText(channel.descRawMarkdown, 300)} skipHtml />
          </Box>
        </Box>
      </HStack>
      <HStack flexWrap="wrap">
        <Box fontSize="sm" py={2}>
          <Box>
            Founded <time dateTime={new Date(channel.createdAt).toISOString()}>{toRelativeDateString(channel.createdAt)}</time>
          </Box>
          <Box>{channel.postsCount} posts published</Box>
        </Box>
        <HStack spacing={3} flex={1} justifyContent="flex-end">
          <Box>
            <strong>{toReadableNumber(channel.joinCount)}</strong>&nbsp;joined
          </Box>
          {isLoggedIn && (
            <Button
              leftIcon={channel.amIJoined ? <FaCheck /> : <FaPlus />}
              colorScheme="theme"
              variant={channel.amIJoined ? 'outline' : 'solid'}
              onClick={() => onJoinPressed(channel)}
              isLoading={isSendLoading}
            >
              {channel.amIJoined ? 'Joined' : 'Join'}
            </Button>
          )}
        </HStack>
      </HStack>
    </LinkBox>
  )
}
