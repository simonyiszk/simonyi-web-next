import { Spinner, Text, VStack } from "@chakra-ui/react";
import { GoogleLogin } from "@react-oauth/google";
import { useAuthContext } from "../../api/contexts/auth/useAuthContext";

export const LoginPage = () => {
  const { isLoggedIn, onLoginSuccess, onLoginFailure, loginLoading } =
    useAuthContext();

  // if (isLoggedIn) return <Navigate replace to="/" />;

  return (
    <VStack alignItems="center" spacing={6}>
      {loginLoading ? (
        <Spinner size="xl" />
      ) : (
        <>
          <Text fontSize="xl" fontWeight={700}>
            Log in or register to re:mark using your Google account
          </Text>
          <GoogleLogin
            onSuccess={onLoginSuccess}
            onError={onLoginFailure}
            useOneTap
          />
        </>
      )}
    </VStack>
  );
};
