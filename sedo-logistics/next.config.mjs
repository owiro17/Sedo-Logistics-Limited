/** @type {import('next').NextConfig} */
const nextConfig = {webpack: (config) => {
    config.externals = { mongoose: 'commonjs mongoose' };
    return config;
  },};

export default nextConfig;
