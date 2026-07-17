/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'base-prod.rspb-prod.magnolia-platform.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig