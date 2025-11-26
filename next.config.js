/** @type {import('next').NextConfig} */
const nextConfig = {
  output: undefined, // VERY IMPORTANT
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
