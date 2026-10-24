export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/auth/',
          '/_next/',
          '/admin/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/auth/',
        ],
      },
    ],
    sitemap: 'https://besharatacademy.com/sitemap.xml',
    host: 'https://besharatacademy.com',
  }
}