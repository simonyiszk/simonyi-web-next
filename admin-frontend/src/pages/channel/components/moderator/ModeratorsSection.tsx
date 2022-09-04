import { Box, Center, HStack, Skeleton, Text, useToast } from '@chakra-ui/react'
import { UserView } from '@triszt4n/remark-types'
import { useMutation, useQuery } from 'react-query'
import { channelModule } from '../../../../api/modules/channel.module'
import { toReadableNumber } from '../../../../util/core-util-functions'
import { queryClient } from '../../../../util/query-client'
import { rconsole } from '../../../../util/remark-console'
import { ModeratorItem } from './ModeratorItem'
import { ModeratorItemLoading } from './ModeratorItemLoading'

type Props = {
  channelId: string
  amIOwner?: boolean
}

export const ModeratorsSection = ({ channelId, amIOwner }: Props) => {
  const { isLoading, data, error } = useQuery(['channelModerators', channelId], () => channelModule.fetchModeratorInfoOfChannel(channelId))
  const toast = useToast()

  const mutation = useMutation(channelModule.removeModeratorFromChannel, {
    onSuccess: () => {
      queryClient.invalidateQueries(['channelModerators', channelId])
    },
    onError: (error) => {
      const err = error as any
      rconsole.log('Error at removeModeratorFromChannel', err.toJSON())
      toast({
        title: 'Error occured when removing a moderator',
        description: `${err.response.status} ${err.response.data.message || err.message} Try again later.`,
        status: 'error',
        isClosable: true
      })
    }
  })

  const onRemovePressed = (moderator: UserView) => {
    if (confirm(`Do you really want to remove ${moderator.username} from the moderators of this channel?`))
      mutation.mutate({ id: channelId, moderatorId: moderator.id })
  }

  if (isLoading) {
    return (
      <>
        <HStack mb={2} spacing={2}>
          <Text fontSize="sm">Moderators</Text>
          <Skeleton width="1.25rem" height="0.8rem"></Skeleton>
        </HStack>
        {[...Array(3)].map((_, index) => (
          <ModeratorItemLoading key={index} />
        ))}
      </>
    )
  }

  if (error) {
    rconsole.log('Error at ModeratorsSection: channelModerators', error)
    return (
      <Box width="full">
        <Center fontSize="lg">Error when fetching channel's moderators! {(error as any)?.response.data.message}</Center>
      </Box>
    )
  }

  const { owner, moderators } = data || {}

  return (
    <>
      <Text fontSize="sm" mb={2}>
        Moderators ({toReadableNumber(moderators!!.length + 1)})
      </Text>
      <ModeratorItem user={owner!!} subtitle="founder" />
      {moderators!!.map((mod) => (
        <ModeratorItem key={mod.username} user={mod} onRemove={amIOwner ? onRemovePressed : undefined} onSendLoading={mutation.isLoading} />
      ))}
    </>
  )
}
