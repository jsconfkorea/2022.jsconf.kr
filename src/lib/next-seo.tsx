import { DefaultSeoProps } from 'next-seo'

export const title = 'JSConf Korea 2022 🌈'

export const URL = 'https://2022.jsconf.kr'

export const SEO: DefaultSeoProps = {
  titleTemplate: `%s | ${title}`,
  defaultTitle: title,

  openGraph: {
    type: 'website',
    url: URL,
    site_name: title,
    title,
    images: [
      {
        url: `${URL}/thumb.png`,
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
