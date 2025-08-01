import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "localhost" }, { hostname: "randomuser.me" }],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('./src'),
      '@/components': path.resolve('./src/components'),
      '@/lib': path.resolve('./src/lib'),
      '@/app': path.resolve('./src/app'),
    }
    return config
  },
};

export default nextConfig;
