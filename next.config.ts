import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: `process.env.NEXT_PUBLIC_API_URL?.replace(/^https?:\/\//, "")`,
        port: "",
        pathname: "/**",
      },
    ],
  },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
