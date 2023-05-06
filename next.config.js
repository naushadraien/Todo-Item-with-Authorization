/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"], //this is for adding the mongoose package to the server side
  },
}

module.exports = nextConfig
