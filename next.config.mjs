/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-blhad.nitrocdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.magicmen.com.au',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
