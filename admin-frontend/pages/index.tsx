import { Button, Flex, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaComments } from "react-icons/fa";
import { ResourceView } from "../api/types/resource.types";
import { ResourcePreview } from "../components/page-components/index/ResourcePreview";

export default function Home() {
  const router = useRouter();
  const onCreatePostPressed = () => {
    router.push(`/resources/new/`);
  };
  const resources: ResourceView[] | undefined = [];

  return (
    <>
      <Flex justifyContent="end" mb={3}>
        <Button
          leftIcon={<FaComments />}
          colorScheme="themeHelper"
          onClick={onCreatePostPressed}
        >
          Publish post
        </Button>
      </Flex>
      <VStack spacing={6} align="stretch">
        {resources
          ?.sort((a, b) => b.createdAt - a.createdAt) // desc
          .map((resource) => (
            <ResourcePreview key={resource.id} resource={resource} />
          ))}
      </VStack>
    </>
  );
}
