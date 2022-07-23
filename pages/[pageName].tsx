import { messages } from 'locales/messages'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NotionAPI } from 'notion-client'

export { default } from 'src/pages/NotionPage/NotionPage'

export const getStaticProps: GetStaticProps = async ({
  locale,
  params: { pageName },
}) => {
  console.log({ locale, pageName })

  if (!Object.keys(recordMap[locale]).includes(pageName as string)) {
    return {
      notFound: true,
    }
  }

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

  console.log({ paths })

  return {
    paths,
    fallback: 'blocking',
  }
}

const recordMap = {
  ko: {
    about: '8fc4a992d0e74b24ad31d089d9006853',
    'code-of-conduct': '3a1aba32506747a1ad7f1b84b3d05443',
    'privacy-policy': '9527de9651ca4679b5dd79ffbd42d76a',
    sponsorship: 'f4e0595ecfa8492cbb79f848f7de0f2b',
    scholarship: '0f134efed4f945a8a0dc8de7fbe50f1e',
    'call-for-proposals': '3426e1ac7231479288b1fd489c518e20',
  },
  en: {
    about: '893dab512e8542b1be186cc766297052',
    'code-of-conduct': 'b5395345cafa4b74a8a745bc15a3daeb',
    'privacy-policy': 'c945e35036cd46abab2ca01da1497d97',
    sponsorship: '29fc4391cf4f41fc860c6972d84c24fc',
    scholarship: 'a5006e7156b64a6eaf6bc4b188ec14d1',
    'call-for-proposals': 'fc40a4b9882c4bab815886ef3cd0970b',
  },
} as const
