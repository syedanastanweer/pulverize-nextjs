/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// next.config.js
module.exports = {
  reactStrictMode: true,
  exportTrailingSlash: true, // Ensures trailing slashes for static HTML export
  images: {
    loader: 'akamai',
    path: '',
  },
}

