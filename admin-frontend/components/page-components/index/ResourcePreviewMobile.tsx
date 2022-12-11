import {
  Box,
  Heading,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import { ResourceView } from "../../../api/types/resource.types";
import {
  ellipsifyLongText,
  toRelativeDateString,
} from "../../../util/core-util-functions";
import { RLink } from "../../commons/RLink";
import { ResourcePreviewDescription } from "./ResourcePreviewDescription";

type Props = {
  targetPath: string;
  resource: ResourceView;
};

export const ResourcePreviewMobile = ({ resource, targetPath }: Props) => {
  return (
    <Box>
      <LinkBox as={HStack} mb={4}>
        <Box flex={1}>
          <Heading size="md" mb={2}>
            <LinkOverlay as={Link} href={targetPath}>
              {resource.title}
            </LinkOverlay>
          </Heading>
          <ResourcePreviewDescription rawMarkdown={resource.rawMarkdownLead} />
        </Box>
        {resource.imageUrl && (
          <Image
            height="4rem"
            width="6rem"
            borderRadius="md"
            objectFit="cover"
            src={resource.imageUrl}
            alt={ellipsifyLongText(resource.title, 16)}
          />
        )}
      </LinkBox>
      <HStack spacing={2}>
        <Spacer />
        <Box fontSize="xs" textAlign="end">
          <Box>
            Posted by{" "}
            <RLink to={`/users/${resource.publisher.id}`}>
              {ellipsifyLongText(resource.publisher.username, 24)}
            </RLink>
          </Box>
          <Box>
            <time dateTime={new Date(resource.createdAt).toISOString()}>
              {toRelativeDateString(resource.createdAt)}
            </time>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};
