/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.statistics.gov.rw',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/3/action/:path*',
        destination: `${process.env.CKAN_BACKEND_URL}/api/3/action/:path*`,
      },
    ];
  },
};

export default nextConfig;
