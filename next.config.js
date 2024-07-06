// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "termek.sch.bme.hu",
          },
        ],
        destination: "/berles",
        permanent: true,
      },
    ];
  },
  pageExtensions: ["ts", "tsx", "md"],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "warp.sch.bme.hu",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "cdn.contentful.com",
      },
      {
        protocol: "https",
        hostname: "preview.contentful.com",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
