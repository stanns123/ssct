import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.aoac.in',
      },
      {
        protocol: 'https',
        hostname: 'files.aoac.in',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  env: {
    SHIPROCKET_WEBHOOK_SECRET: process.env.SHIPROCKET_WEBHOOK_SECRET,
  },
};

export default nextConfig;