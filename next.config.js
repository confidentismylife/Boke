/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');

const nextConfig = {
    env: {
        API_ADDRESS: "https://line-art-dog-boke-pjw1.vercel.app/",
    },
    output: 'standalone',
}

module.exports = withVideos(nextConfig);
