/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        protocol: 'http',
        domains: ['raw.githubusercontent.com'],
    },
};

module.exports = nextConfig;
