import { recordMap } from 'lib/notion'
import { messages } from 'locales/messages'
import { GetStaticPaths, GetStaticProps } from 'next'

export { default } from 'src/pages/SpeakerDetailPage'

export const getStaticProps: GetStaticProps = async ({
  locale,
  params: { pageName },
}) => {
  return {
    props: {
      messages: messages[locale],
      recordMap: await recordMap[locale][pageName],
      pageName,
    },
    revalidate: 10,
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
    fallback: false,
  }
}
