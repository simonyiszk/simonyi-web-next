import { Avatar, Box, HStack, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { UserView } from '@triszt4n/remark-types'
import { FaUserMinus } from 'react-icons/fa'
import { RLink } from '../../../../components/commons/RLink'

type Props = {
  user: UserView
  subtitle?: string
  onRemove?: (moderator: UserView) => void
  onSendLoading?: boolean
}

export const ModeratorItem = ({ user, subtitle, onRemove, onSendLoading }: Props) => {
  return (
    <HStack spacing={4} p={2}>
      <Avatar name={`${user.firstName} ${user.lastName}`} src={user.imageUrl} size={useBreakpointValue({ base: 'sm', md: 'md' })} />
      <Box fontWeight={700} fontSize="lg">
        <RLink to={`/u/${user.username}`} wordBreak="break-all">
          {user.username}
        </RLink>
        {subtitle && (
          <Box fontWeight={400} fontSize="xs">
            {subtitle}
          </Box>
        )}
      </Box>
      {onRemove && (
        <Box>
          <IconButton
            size="sm"
            colorScheme="primary"
            aria-label={`Remove moderator ${user.username}`}
            icon={<FaUserMinus />}
            onClick={() => onRemove(user)}
            isLoading={onSendLoading}
          />
        </Box>
      )}
    </HStack>
  )
}
