import { VStack } from "@chakra-ui/react";
import { useAuthContext } from "../../api/contexts/auth/useAuthContext";
import { UserModule } from "../../api/modules/user.module";
import { ProfileDetails } from "./components/ProfileDetails";

export default function UserPage() {
  const { loggedInUser } = useAuthContext();
  const instance = UserModule.getInstance();
  const {
    isLoading,
    data: user,
    error,
  } = useQuery(["user", id], () => userModule.fetchUserByUsername(username!!));

  return (
    <VStack alignItems="flex-start">
      <ProfileDetails user={user} />
    </VStack>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}
