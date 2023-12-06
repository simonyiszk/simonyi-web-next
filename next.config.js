/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md"],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["warp.sch.bme.hu", "images.ctfassets.net", "cdn.contentful.com", "preview.contentful.com"],
  },
};

module.exports = nextConfig;
