import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/events/2026-conference.html",
        destination: "/events/2026-conference",
        permanent: true,
      },
      {
        source: "/events/2025-conference.html",
        destination: "/events/2025-conference",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
