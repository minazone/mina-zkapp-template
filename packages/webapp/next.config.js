/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,


  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      snarkyjs: require('path').resolve('node_modules/snarkyjs')
    };
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

module.exports = nextConfig
