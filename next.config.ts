import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
  //  experimental: {
  //   asyncParams: false, // 👈 ВАЖНО
  // },
};

export default nextConfig;
