import { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
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
    ]
  },
  pageExtensions: ["ts", "tsx", "md"],
  reactStrictMode: true,
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
}

const withNextIntl = createNextIntlPlugin()

module.exports = withNextIntl(nextConfig)
