/** @type {import('next').NextConfig} */
const nextConfig = {
  output: undefined, // VERY IMPORTANT
  // appDir is now stable in Next.js 14 - no need for experimental flag
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;