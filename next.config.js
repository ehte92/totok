/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "images.unsplash.com",
      "cdn.sanity.io",
      "upload.wikimedia.org",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
