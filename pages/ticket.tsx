import { messages } from 'locales/messages'
import { GetStaticProps } from 'next'
import { NotionAPI } from 'notion-client'

export { default } from 'src/pages/TicketPage'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: messages[locale],
      recordMap: await new NotionAPI().getPage(recordMap[locale]),
    },
    revalidate: 1,
  }
}

const recordMap = {
  ko: 'ba078dd2cea2420abcf8210147ff7b41',
  en: '129f0917b41547928a27eb12e7ac5b22',
} as const
