import { Badge, Box, Button, Heading, HStack, LinkBox, LinkOverlay, Text, useToast, VStack } from '@chakra-ui/react'
import { ChannelPartialView } from '@triszt4n/remark-types'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../../../api/contexts/auth/useAuthContext'
import { channelModule } from '../../../../api/modules/channel.module'
import { toReadableNumber, toRelativeDateString } from '../../../../util/core-util-functions'
import { queryClient } from '../../../../util/query-client'
import { rconsole } from '../../../../util/remark-console'

type Props = {
  channel: ChannelPartialView
  userId: string
}

export const JoinedChannel = ({ channel, userId }: Props) => {
  const { isLoggedIn } = useAuthContext()
  const targetPath = `/channels/${channel.id}`
  const toast = useToast()

  const mutation = useMutation(channelModule.joinOrLeaveChannel, {
    onSuccess: () => {
      queryClient.invalidateQueries(['userChannels', userId])
      toast({
        status: 'success',
        title: 'Successful action',
        description: `You've left ch/${channel.uriName}.`,
        isClosable: true
      })
    },
    onError: (error) => {
      const err = error as any
      rconsole.log('Error at joinOrLeaveChannel', err.toJSON())
      toast({
        title: 'Error occured when leaving channel',
        description: `${err.response.status} ${err.response.data.message || err.message} Try again later.`,
        status: 'error',
        isClosable: true
      })
    }
  })

  const onJoinPressed = () => {
    if (channel.amIJoined) {
      if (confirm('Do you really want to leave this channel?')) mutation.mutate({ id: channel.id, intent: 'leave' })
    } else {
      mutation.mutate({ id: channel.id, intent: 'join' })
    }
  }

  return (
    <LinkBox flex="0 0 auto">
      <VStack justifyContent="space-between" alignItems="stretch" mx={1} borderWidth="1px" borderRadius="md" p={3} w="20rem" h="full">
        <Box fontSize="xs" color="gray.500" fontWeight={700} letterSpacing="wide" flexWrap="wrap">
          ch/{channel.uriName}
        </Box>
        <Heading size="sm">
          <LinkOverlay as={Link} to={targetPath} whiteSpace="break-spaces">
            {channel.title}
          </LinkOverlay>
        </Heading>
        <HStack justifyContent="space-between">
          <VStack alignItems="start" spacing={0}>
            <Badge colorScheme="theme" fontSize="sm" textTransform="uppercase">
              {toReadableNumber(channel.joinCount)} joined
            </Badge>
            {isLoggedIn && channel.amIJoined && (
              <Box fontSize="xs" color="gray.500" fontWeight={700} letterSpacing="wide">
                <Text fontSize="xs">you joined {toRelativeDateString(channel.joinedAt)}</Text>
              </Box>
            )}
          </VStack>
          {isLoggedIn && (
            <Box py={1}>
              <Button
                size="sm"
                colorScheme="theme"
                variant={channel.amIJoined ? 'outline' : 'solid'}
                onClick={onJoinPressed}
                isLoading={mutation.isLoading}
              >
                {channel.amIJoined ? 'Leave' : 'Join'}
              </Button>
            </Box>
          )}
        </HStack>
      </VStack>
    </LinkBox>
  )
}
