import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: [
    "ordinance-gardens-rebecca-rabbit.trycloudflare.com"
  ],
};

export default nextConfig;
