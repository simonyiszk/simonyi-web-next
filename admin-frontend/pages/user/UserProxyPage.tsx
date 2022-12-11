import { VStack } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { Navigate, useParams } from 'react-router-dom'
import { useAuthContext } from '../../api/contexts/auth/useAuthContext'
import { userModule } from '../../api/modules/user.module'
import { ProfileDetailsLoading } from './components/ProfileDetailsLoading'

export const UserProxyPage = () => {
  const { username } = useParams()
  const { loggedInUser } = useAuthContext()
  const { isLoading, data: user, error } = useQuery(['user', username], () => userModule.fetchUserByUsername(username!!))

  if (username?.toLowerCase() === loggedInUser?.username.toLowerCase()) {
    return <Navigate replace to="/profile" />
  }

  if (isLoading) {
    return (
      <VStack alignItems="flex-start">
        <ProfileDetailsLoading />
      </VStack>
    )
  }

  if (error) {
    const err = error as AxiosError<{ message: string }>
    console.error('[DEBUG] Error at UserProxyPage', err)
    return <Navigate replace to="/error" state={{ title: 'Error occured loading user', messages: [err.response?.data.message] }} />
  }

  return <Navigate replace to={`/users/${user?.id}`} state={{ user: user!! }} />
}
