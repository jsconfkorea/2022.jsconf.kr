import { messages } from 'locales/messages'
import { GetStaticProps } from 'next'
import { NotionAPI } from 'notion-client'

export { default } from 'src/pages/BudgetPage'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: messages[locale],
      recordMap: await new NotionAPI().getPage(
        'c3ddcaa9693d4bd997c208bedd8af9f8',
      ),
    },
    revalidate: 1,
  }
}
