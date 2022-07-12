import { recordMap } from 'lib/notion'
import { messages } from 'locales/messages'
import { GetStaticPaths, GetStaticProps } from 'next'

export { default } from 'src/pages/NotionPage/NotionPage'

export const getStaticProps: GetStaticProps = async ({
  locale,
  params: { pageName },
}) => {
  return {
    props: {
      messages: messages[locale],
      recordMap: await recordMap[locale][pageName],
    },
    revalidate: 1,
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = locales.flatMap((locale) =>
    Object.keys(recordMap['ko']).map((pageName) => ({
      params: {
        locale,
        pageName,
      },
    })),
  )

  return {
    paths,
    fallback: 'blocking',
  }
}
