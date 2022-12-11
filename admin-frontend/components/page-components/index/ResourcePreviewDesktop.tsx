import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Tooltip,
} from "@chakra-ui/react";
import { ResourceView } from "../../../api/types/resource.types";
import {
  ellipsifyLongText,
  toDateTimeString,
  toRelativeDateString,
} from "../../../util/core-util-functions";
import { RLink } from "../../commons/RLink";
import { ResourcePreviewDescription } from "./ResourcePreviewDescription";

type Props = {
  targetPath: string;
  resource: ResourceView;
};

export const ResourcePreviewDesktop = ({ resource, targetPath }: Props) => {
  return (
    <HStack spacing={6} alignItems="start">
      <LinkBox as={HStack} flex={1} spacing={3} alignItems="start">
        <Box flex={1}>
          <Box fontSize="sm" fontWeight={300}>
            posted by{" "}
            <RLink to={`/users/${resource.publisher.id}`}>
              {resource.publisher.username}
            </RLink>{" "}
            <Tooltip
              hasArrow
              placement="top"
              label={toDateTimeString(resource.createdAt)}
            >
              <time
                style={{
                  position: "absolute",
                  zIndex: 2,
                  marginLeft: "0.25rem",
                }}
                dateTime={new Date(resource.createdAt).toISOString()}
              >
                {toRelativeDateString(resource.createdAt)}
              </time>
            </Tooltip>
          </Box>
          <Heading size="lg" mb={4}>
            <LinkOverlay as={Link} to={targetPath}>
              {resource.title}
            </LinkOverlay>
          </Heading>
          <ResourcePreviewDescription rawMarkdown={resource.rawMarkdownLead} />
        </Box>
        <Box>
          {resource.imageUrl && (
            <Image
              height={{ md: "8rem", lg: "10rem" }}
              width={{ md: "12rem", lg: "14rem" }}
              borderRadius="md"
              objectFit="cover"
              src={resource.imageUrl}
              alt={ellipsifyLongText(resource.title, 16)}
            />
          )}
        </Box>
      </LinkBox>
    </HStack>
  );
};
