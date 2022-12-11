import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { ReactNode } from "react-markdown/lib/react-markdown";
import { RLink } from "../components/commons/RLink";

const sliceHref = (href: string, pattern: string): string => {
  if (href.indexOf(pattern) === 0) {
    return href.slice(pattern.length, href.length);
  }
  return href;
};

const remarkTheme: any = {
  a: (props: { href: string; children: ReactNode }) => {
    const { href, children } = props;
    let slicedHref = href;
    slicedHref = sliceHref(slicedHref, `https://${process.env.HOSTNAME}`);
    slicedHref = sliceHref(slicedHref, `${process.env.HOSTNAME}`);
    if (slicedHref.length === 0) slicedHref = "/";
    const isInternal = slicedHref.startsWith("/");
    return (
      <RLink isExternal={!isInternal} to={slicedHref}>
        {children}
      </RLink>
    );
  },
};

export const RemarkUIRenderer = () => ChakraUIRenderer(remarkTheme);
