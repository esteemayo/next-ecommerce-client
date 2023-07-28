/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['dawid-next-ecommerce.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
