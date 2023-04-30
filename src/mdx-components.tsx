import { Link, Text } from '@chakra-ui/react';
import type { MDXComponents } from 'mdx/types';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
// Example: https://github.com/vercel/next.js/tree/canary/examples/app-dir-mdx
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h1: ({ children }) => <Text as="h1">{children}</Text>,
    h2: ({ children }) => <Text as="h2">{children}</Text>,
    h3: ({ children }) => <Text as="h3">{children}</Text>,
    h4: ({ children }) => <Text as="h4">{children}</Text>,
    h5: ({ children }) => <Text as="h5">{children}</Text>,
    h6: ({ children }) => <Text as="h6">{children}</Text>,
    p: ({ children }) => <Text as="p">{children}</Text>,
    a: ({ children }) => <Link color="simonyi_zold">{children}</Link>,
    ...components
  };
}
