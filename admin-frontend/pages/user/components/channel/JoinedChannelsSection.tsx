import { Box, Flex, Heading, Skeleton } from '@chakra-ui/react'
import { ChannelView } from '@triszt4n/remark-types'
import { rconsole } from '../../../../util/remark-console'
import { JoinedChannel } from './JoinedChannel'

type Props = {
  channels: ChannelView[] | undefined
  isLoading: boolean
  error: any
  userId: string
}

export const JoinedChannelsSection = ({ channels, isLoading, error, userId }: Props) => {
  if (isLoading) {
    return (
      <>
        <Box py={10}>
          <Skeleton width="14rem" height="2.5rem" />
        </Box>
        <Box maxWidth="100%">
          <Flex py={3} overflowX="auto" flexWrap="nowrap" w="full" alignItems="stretch">
            {[...Array(2)].map((_, index) => (
              <Skeleton key={index} flex="0 0 auto" mx={1} w="20rem" height="8rem" />
            ))}
          </Flex>
        </Box>
      </>
    )
  }

  if (error) {
    rconsole.log('Error at ProfileDetails: JoinedChannelsSection', error)
    return (
      <>
        <Box>
          <Heading size="xl" mt={10} mb={4}>
            Channels joined
          </Heading>
        </Box>
        <Box maxWidth="100%">
          <Box>Error when fetching joined channels! {error?.response.data.message}</Box>
        </Box>
      </>
    )
  }

  return (
    <>
      <Box>
        <Heading size="xl" mt={10} mb={4}>
          Channels joined
        </Heading>
      </Box>
      {channels?.length == 0 ? (
        <Box>No channels found</Box>
      ) : (
        <Flex py={3} overflowX="auto" flexWrap="nowrap" w="full" alignItems="stretch">
          {channels
            ?.sort((a, b) => b.joinedAt!! - a.joinedAt!!) // desc
            .map((channel) => (
              <JoinedChannel key={channel.id} channel={channel} userId={userId} />
            ))}
        </Flex>
      )}
    </>
  )
}
