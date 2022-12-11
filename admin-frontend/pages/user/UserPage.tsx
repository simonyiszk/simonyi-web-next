import { VStack } from '@chakra-ui/react'
import { UserView } from '@triszt4n/remark-types'
import { useLocation } from 'react-router-dom'
import { ProfileDetails } from './components/ProfileDetails'

export const UserPage = () => {
  const { state } = useLocation()
  const { user } = state as { user: UserView }

  return (
    <VStack alignItems="flex-start">
      <ProfileDetails user={user} />
    </VStack>
  )
}
