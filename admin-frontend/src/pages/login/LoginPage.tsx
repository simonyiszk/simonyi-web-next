import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import { GoogleLogin } from 'react-google-login'
import { FcGoogle } from 'react-icons/fc'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../../api/contexts/auth/useAuthContext'
import { PuzzleAnimated } from '../../components/commons/PuzzleAnimated'
import { GOOGLE_AUTH_CLIENT_ID } from '../../util/environment'

export const LoginPage = () => {
  const { isLoggedIn, onLoginSuccess, onLoginFailure, loginLoading } = useAuthContext()

  if (isLoggedIn) return <Navigate replace to="/" />

  return (
    <VStack alignItems="center" spacing={6}>
      {loginLoading ? (
        <PuzzleAnimated text="Logging in user" />
      ) : (
        <>
          <Text fontSize="xl" fontWeight={700}>
            Log in or register to re:mark using your Google account
          </Text>
          <GoogleLogin
            clientId={GOOGLE_AUTH_CLIENT_ID}
            buttonText="Log in with Google"
            render={(renderProps) => (
              <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                <HStack>
                  <FcGoogle size="1.75rem" />
                  <Text>Log in with Google</Text>
                </HStack>
              </Button>
            )}
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={'single_host_origin'}
          />
        </>
      )}
    </VStack>
  )
}
