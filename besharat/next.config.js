/** @type {import('next').NextConfig} */

const nextConfig = {
    publicRuntimeConfig: {
        BASEAPI: process.env.BASEAPI,
        CAPTCHA_SITEKEY: process.env.CAPTCHA_SITEKEY
    },
    env: {
        BASEAPI: process.env.BASEAPI,
        CAPTCHA_SITEKEY: process.env.CAPTCHA_SITEKEY,
    },
    // output: 'export',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig