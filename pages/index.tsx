import { recordMap } from 'lib/notion'
import type { GetStaticProps } from 'next'

export { default } from 'src/pages/HomePage/HomePage'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      recordMap: await recordMap[locale ?? 'ko']['sponsors'],
    },
    revalidate: 1,
  }
}
