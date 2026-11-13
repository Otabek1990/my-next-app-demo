import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.mercedes-benz-kiev.com",
        pathname: "/data/**",
      },
      {
        protocol: "https",
        hostname: "files.itv.uz",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
// https://files.itv.uz/uploads/
// https://img.mercedes-benz-kiev.com/data/news/325-novi-modeli-mercedes-benz-g-class-ta-mercedes-amg-g-63-2024-roku/novi-modeli-mercedes-benz-g-class-ta-mercedes-amg-g-63-2024-roku.jpg
