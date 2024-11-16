/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn0.it4profit.com",
        },
      ],
    }
  };
  
  module.exports = nextConfig;
  