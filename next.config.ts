/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn0.it4profit.com" },
      { protocol: "https", hostname: "cdn.example.com" },
    ],
  }

};

module.exports = nextConfig;
