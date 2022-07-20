import { recordMap } from 'lib/notion'
import { messages } from 'locales/messages'
import type { GetStaticProps } from 'next'

export { default } from 'src/pages/HomePage/HomePage'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: messages[locale],
      recordMap: await recordMap[locale]['sponsors'],
    },
    revalidate: 1,
  }
}
