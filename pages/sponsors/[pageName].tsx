import { messages } from 'locales/messages'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NotionAPI } from 'notion-client'

export { default } from 'src/pages/SponsorDetailPage'

export const getStaticProps: GetStaticProps = async ({
  locale,
  params: { pageName },
}) => {
  return {
    props: {
      messages: messages[locale],
      recordMap: await new NotionAPI().getPage(recordMap[locale][pageName]),
      pageName,
    },
    revalidate: 1,
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = locales.flatMap((locale) =>
    Object.keys(recordMap['ko']).map((pageName) => ({
      params: {
        pageName,
      },
      locale,
    })),
  )

  return {
    paths,
    fallback: 'blocking',
  }
}

export const recordMap = {
  ko: {
    imweb: '0f1ffcea5db54a9a9e6e663688364ebe',
    lineplus: '42182f2d636c4a44a375621fd9633edd',
    gabia: 'c09eb74f950248e1b6c0086b5d1e9898',
    atant: '45570c202ffa4366bac286f245df076e',
  },
  en: {
    imweb: '5917626f1f9449e4a96f547251f89ebe',
    lineplus: '1efab95e59894d5a815a8d4a46cb2ed9',
    gabia: '5ad66904a05d4d0c8848b034a1551a63',
    atant: '14687ce676cf4f2f847a572d46e9704b',
  },
} as const
