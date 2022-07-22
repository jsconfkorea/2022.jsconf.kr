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
    'chen-hui-jing': '4a339f3e2a464983932b06aa33688e51',
    'dwane-hemmings': 'ccc6e605a0994261a8dfc229c2979298',
    'seok-ju-na': 'cae47e200f8144eba65d43627ed34442',
    'minsu-kim-changhui-lee': 'f10d31c12dac46c9836aa2e9ee8fa8ff',
    'anuradha-kumari': '57629fa79bee4f77a9826dbaff30f77e',
    'eleanor-rumsey': '53f8aef137fe4209938903778b929703',
    'yong-wook-choi': '82080b88bccb46be92f7f4f71a0a78c5',
    'erick-wendel': 'a0d39c6668224379b8a21237722b9091',
  },
  en: {
    'anna-migas': '39567a37387c4bd28182eaf3b5a31153',
    'jong-chan-choi': 'b58a86fda0374b88964e9b9ed9311bc2',
    'jeremy-wagner': '8bf710e640bc4d7a9fdedf4ed223b8fb',
    'hung-viet-nguyen': '80ee8de4e9404962aa727295045a319d',
    'jeong-eun-lee': 'b788fd35b1db46a0a5f5d78e1aac8b26',
    'nicol-ribaudo': 'c9746e9a9a6d4ef98f5da043cccd4be6',
    'chen-hui-jing': 'bce8b72c582b4a30b7271232d591ed91',
    'dwane-hemmings': 'b27370cae1f34afd806aacd978b567bd',
    'seok-ju-na': 'b72514f039ff4f7698bd0f6c844db4de',
    'minsu-kim-changhui-lee': '435c85cd65e641d293cd5af601d67dbd',
    'anuradha-kumari': '7e2d9a771ad5481787126874e0f13bcd',
    'eleanor-rumsey': '13a9aeb2fa1545c394447b8776889c83',
    'yong-wook-choi': '2e953c4f52ba45cd99ce4d9a4974ba91',
    'erick-wendel': '04d0af96cbc04b149340a239afb96434',
  },
} as const
