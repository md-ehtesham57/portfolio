import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactCompiler is now at the root level, not inside experimental
  reactCompiler: true,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;