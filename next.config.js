/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  i18n: {
    locales: ['hu', 'en'],
    defaultLocale: 'hu',
    localeDetection: false
  }
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
