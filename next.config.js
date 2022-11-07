/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        protocol: 'http',
        domains: ['raw.githubusercontent.com'],
    },
    staticPageGenerationTimeout: 1000,
};

module.exports = nextConfig;
