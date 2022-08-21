/**
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import '@fontsource/archivo/300.css'
import '@fontsource/archivo/400.css'
import '@fontsource/archivo/700.css'
import '@fontsource/space-grotesk/300.css'
import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/700.css'
import { MDXProvider } from '@mdx-js/react'
import { GatsbyBrowser } from 'gatsby'
import React from 'react'
import '~assets/stylesheets/global.css'
import '~assets/stylesheets/markdown.css'

const Br = () => <br />
const A = ({ children, ...restProps }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a target="_blank" rel="noopener noreferrer" {...restProps}>
    {children}
  </a>
)

const components = {
  br: Br,
  a: A
}

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
