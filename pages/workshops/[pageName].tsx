import { messages } from 'locales/messages'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NotionAPI } from 'notion-client'

export { default } from 'src/pages/WorkshopDetailPage'

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

const recordMap = {
  ko: {
    'jeongho-park': 'bc0261d79cbf4223976a2c296d40d131',
    'subeom-choi': '1019c1b365a34f24b028606d80670f56',
    'jiyeon-noh': '9c1bb104a06343e8aad3a36aa0758d69',
  },
  en: {
    'jeongho-park': '66a11c84fbfe4f4486c29d4fe1921dc8',
    'subeom-choi': '109f39c4647941419108e5b8981b8166',
    'jiyeon-noh': 'a2f914cf81304fd7b13b2aa28a5af4fe',
  },
} as const
