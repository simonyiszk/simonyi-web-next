import { useToast } from "@chakra-ui/react";
import { CredentialResponse } from "@react-oauth/google";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { createContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../../../util/query-client";
import { rconsole } from "../../../util/remark-console";
import { HasChildren } from "../../../util/types";
import { userModule } from "../../modules/user.module";
import { CookieKeys } from "../CookieKeys";

export type AuthContextType = {
  isLoggedIn: boolean;
  loggedInUser: /* UserView | undefined */ any;
  loggedInUserLoading: boolean;
  loggedInUserError: unknown;
  onLoginSuccess: (response: CredentialResponse) => void;
  onLoginFailure: () => void;
  onLogout: () => void;
  loginLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  loggedInUser: undefined,
  loggedInUserLoading: false,
  loggedInUserError: undefined,
  onLoginSuccess: () => {},
  onLoginFailure: () => {},
  onLogout: () => {},
  loginLoading: false,
});

export const AuthProvider = ({ children }: HasChildren) => {
  const toast = useToast();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    typeof Cookies.get(CookieKeys.SIMONYI_ADMIN_JWT_TOKEN) !== "undefined"
  );
  const {
    isLoading,
    data: user,
    error,
  } = useQuery("currentUser", userModule.fetchCurrentUser, {
    enabled: !!isLoggedIn,
  });

  const mutation = useMutation(userModule.loginUser, {
    onSuccess: async ({ data }) => {
      const { jwt, user } = data;
      Cookies.set(CookieKeys.SIMONYI_ADMIN_JWT_TOKEN, jwt, { expires: 2 });

      await queryClient.invalidateQueries("currentUser", {
        refetchInactive: true,
      });
      setIsLoggedIn(true);
      // navigate("/profile");
    },
    onError: (error) => {
      const err = error as AxiosError<{ message: string }>;
      rconsole.log("Error at loginUser", JSON.stringify(err));
      toast({
        title: "Error occured when logging in new user",
        description: `${err.response?.status} ${err.response?.data.message} Try again later.`,
        status: "error",
        isClosable: true,
      });
    },
  });

  const onLoginSuccess = (response: CredentialResponse) => {
    const { credential } = response;
    mutation.mutate(credential);
  };

  const onLoginFailure = () => {
    rconsole.log("Error at onLoginFailure");
    toast({
      title: "Authentication error",
      description: "There was an error while authenticating you at Google!",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };

  const onLogout = () => {
    Cookies.remove(CookieKeys.SIMONYI_ADMIN_JWT_TOKEN);
    setIsLoggedIn(false);
    queryClient.invalidateQueries("currentUser", { refetchInactive: true });
    // navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        loggedInUserLoading: isLoading,
        loggedInUser: user,
        loggedInUserError: error,
        onLoginSuccess,
        onLoginFailure,
        onLogout,
        loginLoading: mutation.isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
