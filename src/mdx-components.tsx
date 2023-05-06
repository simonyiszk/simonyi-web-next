import { Link } from './components';
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
    h1: ({ children, ...props }) => (
      <h1 className="text-h1 font-heading" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-h2 font-heading" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-h3 font-heading" {...props}>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4 className="text-h4 font-heading" {...props}>
        {children}
      </h4>
    ),
    h5: ({ children, ...props }) => (
      <h5 className="font-heading" {...props}>
        {children}
      </h5>
    ),
    h6: ({ children, ...props }) => (
      <h6 className="font-heading" {...props}>
        {children}
      </h6>
    ),
    p: ({ children, ...props }) => (
      <p className="font-body" {...props}>
        {children}
      </p>
    ),
    a: ({ children, ...props }) => (
      <Link className="font-body text-simonyi_zold" {...props}>
        {children}
      </Link>
    ),
    i: ({ children, ...props }) => <i {...props}>{children}</i>,
    b: ({ children, ...props }) => <b {...props}>{children}</b>,
    ...components
  };
}
