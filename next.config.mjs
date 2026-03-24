/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/catalog', destination: '/filas', permanent: true },
      { source: '/catalog/:path*', destination: '/filas/:path*', permanent: true },
      { source: '/product/:id', destination: '/filas/:id', permanent: true },
    ];
  },
};

export default nextConfig;
