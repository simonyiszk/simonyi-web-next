/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    mdxRs: true
  },
  images: {
    domains: ['warp.sch.bme.hu', 'images.ctfassets.net']
  }
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withMDX(nextConfig);
