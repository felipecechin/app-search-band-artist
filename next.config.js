/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['i.ytimg.com', 's1.ticketm.net'],
    }
}

module.exports = nextConfig
