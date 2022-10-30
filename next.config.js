const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname)
    }
    return config
  },
  images: {
    domains: ['spacee-1306444757.cos.ap-beijing.myqcloud.com']
  }
}

module.exports = nextConfig
