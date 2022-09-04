import { Box, Button, HStack, useToast } from '@chakra-ui/react'
import { ChannelView } from '@triszt4n/remark-types'
import { FaCheck, FaPlus } from 'react-icons/fa'
import { useMutation } from 'react-query'
import { useAuthContext } from '../../../api/contexts/auth/useAuthContext'
import { channelModule } from '../../../api/modules/channel.module'
import { toReadableNumber } from '../../../util/core-util-functions'
import { queryClient } from '../../../util/query-client'
import { rconsole } from '../../../util/remark-console'

type Props = {
  channel: ChannelView
  joinCount: number
}

export const JoinCounter = ({ channel, joinCount }: Props) => {
  const { isLoggedIn } = useAuthContext()
  const toast = useToast()

  const mutation = useMutation(channelModule.joinOrLeaveChannel, {
    onSuccess: () => {
      const wasIJoined = channel.amIJoined
      queryClient.invalidateQueries(['channelInfo', channel.id])
      toast({
        status: 'success',
        title: 'Successful action',
        description: `You've ${wasIJoined ? 'left' : 'joined'} ch/${channel.uriName}.`,
        isClosable: true
      })
    },
    onError: (error) => {
      const err = error as any
      rconsole.log('Error at joinOrLeaveChannel', err.toJSON())
      toast({
        title: 'Error occured when joining or leaving channel',
        description: `${err.response.status} ${err.response.data.message} Try again later.`,
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
    <HStack ml="auto">
      <Box>
        <strong>{toReadableNumber(joinCount)}</strong> joined
      </Box>
      {isLoggedIn && (
        <Button
          leftIcon={channel.amIJoined ? <FaCheck /> : <FaPlus />}
          colorScheme="theme"
          variant={channel.amIJoined ? 'outline' : 'solid'}
          onClick={onJoinPressed}
          isLoading={mutation.isLoading}
        >
          {channel.amIJoined ? 'Joined' : 'Join'}
        </Button>
      )}
    </HStack>
  )
}
