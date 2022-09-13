/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  staticPageGenerationTimeout: 300,
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko',
  },
  images: {
    domains: ['notion.so', 'www.notion.so', 's3.us-west-2.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
  },
  redirects() {
    return [
      {
        source: '/coc',
        destination: '/code-of-conduct',
        permanent: true,
      },
      {
        source: '/pp',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/cfp',
        destination: '/call-for-proposals',
        permanent: true,
      },
      {
        source: '/survey',
        destination: 'https://tally.so/r/wvG1dv',
        permanent: true,
      },
    ]
  },
}
