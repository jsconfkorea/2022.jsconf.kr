import { DefaultSeoProps } from 'next-seo'

const title = 'JSConf Korea 2022 🌈'

export const SEO: DefaultSeoProps = {
  titleTemplate: `%s | ${title}`,
  defaultTitle: title,

  openGraph: {
    type: 'website',
    url: 'https://2020.jsconf.kr',
    site_name: title,
    title,
    images: [
      {
        url: 'https://cloudflare-ipfs.com/ipfs/bafybeiee76oyiotuqhsji2bglyiiaupsflgz3nzqx4awlque7lsipg7e5a',
        alt: title,
        type: 'image/png',
        width: 1280,
        height: 640,
      },
    ],
  },
  twitter: {
    handle: '@jsconfkorea',
    cardType: 'summary_large_image',
  },
}
