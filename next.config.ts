/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    asyncParams: false, // 👈 ВАЖНО
  },
};

export default nextConfig;
