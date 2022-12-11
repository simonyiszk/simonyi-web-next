import { Box, useBreakpointValue } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { ellipsifyLongText } from "../../../util/core-util-functions";

type Props = {
  rawMarkdown?: string;
};

export const ResourcePreviewDescription = ({ rawMarkdown }: Props) => {
  const textLength = useBreakpointValue({
    base: 100,
    sm: 150,
    md: 300,
    lg: 600,
  });

  return (
    <Box wordBreak="break-all" fontSize={{ base: "sm", md: "md" }}>
      {rawMarkdown && (
        <ReactMarkdown
          allowedElements={[]}
          unwrapDisallowed
          // eslint-disable-next-line react/no-children-prop
          children={ellipsifyLongText(rawMarkdown, textLength)}
          skipHtml
        />
      )}
    </Box>
  );
};
