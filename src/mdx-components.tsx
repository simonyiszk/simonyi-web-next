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
    h1: ({ children }) => <h1 className="text-h1 font-heading">{children}</h1>,
    h2: ({ children }) => <h2 className="text-h2 font-heading">{children}</h2>,
    h3: ({ children }) => <h3 className="text-h3 font-heading">{children}</h3>,
    h4: ({ children }) => <h4 className="text-h4 font-heading">{children}</h4>,
    h5: ({ children }) => <h5 className="font-heading">{children}</h5>,
    h6: ({ children }) => <h6 className="font-heading">{children}</h6>,
    p: ({ children }) => <p className="font-body">{children}</p>,
    a: ({ children, href, title, target, rel }) => (
      <a className="font-body text-simonyi_zold" href={href} title={title} target={target} rel={rel}>
        {children}
      </a>
    ),
    i: ({ children }) => <i>{children}</i>,
    b: ({ children }) => <b>{children}</b>,
    ...components
  };
}
