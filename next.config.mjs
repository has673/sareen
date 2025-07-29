/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "localhost", // for local
      "engaging-apparel-e7c7bbefca.media.strapiapp.com", // for production media
      "engaging-apparel-e7c7bbefca.strapiapp.com", // optional, if serving images directly from Strapi admin
    ],
  },
};

export default nextConfig;
