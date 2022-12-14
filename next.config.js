/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        scrollRestoration: true,
    },
    images: {
        protocol: 'http',
        domains: ['raw.githubusercontent.com'],
    },
    staticPageGenerationTimeout: 10000,
};

module.exports = nextConfig;
