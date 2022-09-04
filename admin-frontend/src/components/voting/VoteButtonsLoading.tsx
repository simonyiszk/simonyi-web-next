import { IconButton, Skeleton } from '@chakra-ui/react'
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa'

export const VoteButtonsLoading = () => {
  return (
    <>
      <IconButton size="sm" aria-label="Upvote post" icon={<FaRegThumbsUp />} variant="outline" colorScheme="secondary" />
      <Skeleton height="1rem" width="2.5rem" />
      <IconButton size="sm" aria-label="Downvote post" icon={<FaRegThumbsDown />} variant="outline" colorScheme="primary" />
    </>
  )
}
