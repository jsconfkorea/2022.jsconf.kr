import { messages } from 'locales/messages'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NotionAPI } from 'notion-client'

export { default } from 'src/pages/SpeakerDetailPage'

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

  console.log({ paths })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const recordMap = {
  ko: {
    'anna-migas': '1a9d3393f99f485b81b4ab941f65c257',
    'jong-chan-choi': '9c2fda6292fc4062a0f6163422289a5f',
    'jeremy-wagner': '5b60a23da8f94b31acc5909b907c89d5',
    'hung-viet-nguyen': '42ce313ad2b14a4580660e8cfd78e0f8',
    'jeong-eun-lee': '9c2c11d968f140d0a9a7fe8c376bdb6c',
    'nicol-ribaudo': '196a05f888744f859ccdcc133c245e1b',
  },
  en: {
    'anna-migas': '39567a37387c4bd28182eaf3b5a31153',
    'jong-chan-choi': 'b58a86fda0374b88964e9b9ed9311bc2',
    'jeremy-wagner': '8bf710e640bc4d7a9fdedf4ed223b8fb',
    'hung-viet-nguyen': '80ee8de4e9404962aa727295045a319d',
    'jeong-eun-lee': 'b788fd35b1db46a0a5f5d78e1aac8b26',
    'nicol-ribaudo': 'c9746e9a9a6d4ef98f5da043cccd4be6',
  },
} as const
