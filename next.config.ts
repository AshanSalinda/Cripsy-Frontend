import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn0.it4profit.com",
            },
        ],
    },
};

export default nextConfig;
