import { recordMap } from 'lib/notion'
import { GetStaticPaths, GetStaticProps } from 'next'

export { default } from 'src/pages/NotionPage/NotionPage'

export const getStaticProps: GetStaticProps = async ({
  locale,
  params: { pageName },
}) => {
  return {
    props: {
      // messages: messages[locale ?? 'ko'],
      recordMap: await recordMap[locale ?? 'ko'][pageName],
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
