/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "source.unsplash.com",

      },
      {
        hostname: "img.icons8.com"
      }
    ],
  },
};

export default nextConfig;
