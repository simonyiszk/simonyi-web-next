import { Box, IconButton, Skeleton } from '@chakra-ui/react'
import { MyVoteType } from '@triszt4n/remark-types'
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa'
import { toReadableNumber } from '../../util/core-util-functions'

type Props = {
  voteCount: number
  onUpvotePressed: () => void
  onDownvotePressed: () => void
  myVote: MyVoteType
  isLoading?: boolean
  isSendLoading: boolean
}

export const VoteButtons = ({ voteCount, onUpvotePressed, onDownvotePressed, myVote, isLoading, isSendLoading }: Props) => {
  return (
    <>
      <IconButton
        size="sm"
        aria-label="Upvote post"
        icon={<FaRegThumbsUp />}
        variant={myVote === 'up' ? 'solid' : 'outline'}
        colorScheme="secondary"
        onClick={onUpvotePressed}
        isLoading={isLoading || isSendLoading}
      />
      {isLoading ? (
        <Skeleton height="1rem" width="2rem" />
      ) : (
        <Box fontSize="sm" fontWeight={700}>
          {toReadableNumber(voteCount)}
        </Box>
      )}
      <IconButton
        size="sm"
        aria-label="Downvote post"
        icon={<FaRegThumbsDown />}
        variant={myVote === 'down' ? 'solid' : 'outline'}
        colorScheme="primary"
        onClick={onDownvotePressed}
        isLoading={isLoading || isSendLoading}
      />
    </>
  )
}
