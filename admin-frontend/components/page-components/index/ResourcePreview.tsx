import { Box, useBreakpointValue, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAuthContext } from "../../../api/contexts/auth/useAuthContext";
import { ResourceView } from "../../../api/types/resource.types";
import { ResourcePreviewDesktop } from "./ResourcePreviewDesktop";
import { ResourcePreviewMobile } from "./ResourcePreviewMobile";

export type ResourcePreviewProps = {
  resource: ResourceView;
};

export const ResourcePreview = ({ resource }: ResourcePreviewProps) => {
  const toast = useToast();
  const router = useRouter();
  const { isLoggedIn } = useAuthContext();

  return (
    <Box as="article" p={4} borderRadius="md" borderWidth="1px">
      {useBreakpointValue({
        base: (
          <ResourcePreviewMobile
            resource={resource}
            targetPath={`/resources/${resource.id}`}
          />
        ),
        md: (
          <ResourcePreviewDesktop
            resource={resource}
            targetPath={`/resources/${resource.id}`}
          />
        ),
      })}
    </Box>
  );
};
