/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');

const nextConfig = {
    env: {
        API_ADDRESS: "http://localhost:3000/api",
    },
}

module.exports = withVideos(nextConfig);
