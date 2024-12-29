// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     experimental: {
//       appDir: true,
//     },
//   };
//   export default nextConfig;
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new CaseSensitivePathsPlugin());
    return config;
  },
};

export default nextConfig;
