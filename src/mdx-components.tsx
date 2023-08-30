import { Code } from 'bright';
import { Link } from './components';
import type { MDXComponents } from 'mdx/types';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
// Example: https://github.com/vercel/next.js/tree/canary/examples/app-dir-mdx

export const mdxComponents: MDXComponents = {
  // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
  h1: ({ children, ...props }) => (
    <h1 className="mb-4 font-heading text-h1" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="mb-3 font-heading text-h2" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="mb-2 font-heading text-h3" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="mb-1 font-heading text-h4" {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5 className="mb-1 font-heading" {...props}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }) => (
    <h6 className="mb-1 font-heading" {...props}>
      {children}
    </h6>
  ),
  p: ({ children, ...props }) => (
    <p className="mb-4 font-body" {...props}>
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
  /*
    img: ({ children, ...props }) => (
      <span className="relative">
        <Image src={props.src || '/images/default/default/cover.png'} alt={props.alt || 'Default image alt text'} fill>
          {children}
        </Image>
      </span>
    ),
    */
  img: ({ children, ...props }) => (
    <span>
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img className="h-auto w-full" {...props}>
        {children}
      </img>
    </span>
  ),
  pre: Code,
  ol: ({ children, ...props }) => (
    <ol className="mb-4 ml-4 list-decimal font-body" {...props}>
      {children}
    </ol>
  ),
  ul: ({ children, ...props }) => (
    <ul className="mb-4 ml-4 list-disc font-body" {...props}>
      {children}
    </ul>
  ),
  li: ({ children, ...props }) => (
    <li className="ml-2 font-body" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <>
      <blockquote className="mb-4 border-l-4 border-simonyi_zold pl-4 font-body italic" {...props}>
        <svg aria-hidden="true" className="h-10 w-10 text-simonyi_zold" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        {children}
      </blockquote>
    </>
  )
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    ...mdxComponents,
    ...components
  };
}
