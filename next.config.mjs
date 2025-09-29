/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:['cdn.sanity.io','res.cloudinary.com'],
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  async redirects() {
    return [
      // Journal -> Blog
      {
        source: '/journal',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/journal/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
      {
        source: '/our-honey',
        destination: 'https://shop.humble-beeing.com',
        permanent: true,
      },
      {
        source: '/our-honey/:path*',
        destination: 'https://shop.humble-beeing.com',
        permanent: true,
      },
      {
        source: '/our-candles',
        destination: 'https://shop.humble-beeing.com',
        permanent: true,
      },
      {
        source: '/our-candles/:path*',
        destination: 'https://shop.humble-beeing.com',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
