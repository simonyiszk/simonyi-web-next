import {
  Link as ChakraLink,
  LinkProps,
  useColorModeValue,
} from "@chakra-ui/react";
import RouterLink from "next/link";
import { HasChildren } from "../../util/types";

type Props = {
  isExternal?: boolean;
  to: string;
} & HasChildren &
  LinkProps;

export const RLink = ({ isExternal, to, children, ...props }: Props) => {
  const Component = (
    <ChakraLink
      as="span"
      color={useColorModeValue("themeHelper.500", "themeHelper.300")}
      {...props}
    >
      {children}
    </ChakraLink>
  );

  return isExternal ? (
    <a href={to} target="_blank" rel="noreferrer">
      {Component}
    </a>
  ) : (
    <RouterLink href={to}>{Component}</RouterLink>
  );
};
