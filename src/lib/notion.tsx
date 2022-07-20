import { NotionAPI } from 'notion-client'

export const notion = new NotionAPI()

export const recordMap = {
  ko: {
    // Notion Page
    about: notion.getPage('8fc4a992d0e74b24ad31d089d9006853'),
    'code-of-conduct': notion.getPage('3a1aba32506747a1ad7f1b84b3d05443'),
    'privacy-policy': notion.getPage('9527de9651ca4679b5dd79ffbd42d76a'),
    sponsorship: notion.getPage('f4e0595ecfa8492cbb79f848f7de0f2b'),
    scholarship: notion.getPage('0f134efed4f945a8a0dc8de7fbe50f1e'),
    // sponsors: notion.getPage('bb999ec93bec4e3cbf034d9b14d42556'),

    // Speaker Page
    'anna-migas': notion.getPage('1a9d3393f99f485b81b4ab941f65c257'),
    'jong-chan-choi': notion.getPage('9c2fda6292fc4062a0f6163422289a5f'),
    'jeremy-wagner': notion.getPage('5b60a23da8f94b31acc5909b907c89d5'),
    'hung-viet-nguyen': notion.getPage('42ce313ad2b14a4580660e8cfd78e0f8'),
    'jeong-eun-lee': notion.getPage('9c2c11d968f140d0a9a7fe8c376bdb6c'),
    'nicol-ribaudo': notion.getPage('196a05f888744f859ccdcc133c245e1b'),
  },
  en: {
    // Notion Page
    about: notion.getPage('893dab512e8542b1be186cc766297052'),
    'code-of-conduct': notion.getPage('b5395345cafa4b74a8a745bc15a3daeb'),
    'privacy-policy': notion.getPage('c945e35036cd46abab2ca01da1497d97'),
    sponsorship: notion.getPage('29fc4391cf4f41fc860c6972d84c24fc'),
    scholarship: notion.getPage('a5006e7156b64a6eaf6bc4b188ec14d1'),
    // sponsors: notion.getPage('2fe696f5589247f88879db843fde220e'),

    // Speaker Page
    'anna-migas': notion.getPage('39567a37387c4bd28182eaf3b5a31153'),
    'jong-chan-choi': notion.getPage('b58a86fda0374b88964e9b9ed9311bc2'),
    'jeremy-wagner': notion.getPage('8bf710e640bc4d7a9fdedf4ed223b8fb'),
    'hung-viet-nguyen': notion.getPage('80ee8de4e9404962aa727295045a319d'),
    'jeong-eun-lee': notion.getPage('b788fd35b1db46a0a5f5d78e1aac8b26'),
    'nicol-ribaudo': notion.getPage('c9746e9a9a6d4ef98f5da043cccd4be6'),
  },
} as const
