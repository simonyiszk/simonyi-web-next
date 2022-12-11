import { useDisclosure } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../../api/contexts/auth/useAuthContext'
import { rconsole } from '../../util/remark-console'
import { EditUsernameModal } from './components/EditUsernameModal'
import { ProfileDetails } from './components/ProfileDetails'
import { ProfileDetailsLoading } from './components/ProfileDetailsLoading'
import { UploadImageModal } from './components/UploadImageModal'

export const ProfilePage = () => {
  const { isLoggedIn, loggedInUser, loggedInUserError, loggedInUserLoading, onLogout } = useAuthContext()
  const { isOpen: isOpenUsernameEdit, onOpen: onUsernameEditPressed, onClose: onCloseUsernameEdit } = useDisclosure()
  const { isOpen: isOpenProfileImageModal, onOpen: onChangeProfileImagePressed, onClose: onCloseProfileImageModal } = useDisclosure()

  if (!isLoggedIn) {
    return <Navigate replace to="/error" state={{ title: 'You are not logged in yet!', messages: [] }} />
  }

  if (loggedInUserError) {
    const err = loggedInUserError as AxiosError<{ message: string }>
    rconsole.log('Error at ProfilePage', err)
    return <Navigate replace to="/error" state={{ title: 'You are not logged in yet!', messages: [err.response?.data.message] }} />
  }

  return (
    <>
      {loggedInUserLoading ? (
        <ProfileDetailsLoading />
      ) : (
        <ProfileDetails
          user={loggedInUser!!}
          profileOptions={{ onLogoutPressed: onLogout, onUsernameEditPressed, onChangeProfileImagePressed }}
        />
      )}
      {loggedInUser && (
        <>
          <EditUsernameModal isOpen={isOpenUsernameEdit} onClose={onCloseUsernameEdit} />
          <UploadImageModal isOpen={isOpenProfileImageModal} onClose={onCloseProfileImageModal} />
        </>
      )}
    </>
  )
}
