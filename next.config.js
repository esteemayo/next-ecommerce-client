/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'dawid-next-ecommerce.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
