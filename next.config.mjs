/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:['cdn.sanity.io','res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/hb-home',
        destination: '/',
        permanent: true,
      },
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
        source: '/our-candles',
        destination: '/products#candles',
        permanent: true,
      },
      {
        source: '/our-candles/:path*',
        destination: '/products#candles',
        permanent: true,
      },
      // Legacy contact page -> main contact page
      {
        source: '/contact',
        destination: '/contact-and-connect',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
