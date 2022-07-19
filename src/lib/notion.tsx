import { NotionAPI } from 'notion-client'

export const notion = new NotionAPI()

export const recordMap = {
  ko: {
    about: notion.getPage('8fc4a992d0e74b24ad31d089d9006853'),
    'code-of-conduct': notion.getPage('3a1aba32506747a1ad7f1b84b3d05443'),
    'privacy-policy': notion.getPage('9527de9651ca4679b5dd79ffbd42d76a'),
    sponsorship: notion.getPage('f4e0595ecfa8492cbb79f848f7de0f2b'),
    sponsors: notion.getPage('bb999ec93bec4e3cbf034d9b14d42556'),
  },
  en: {
    about: notion.getPage('893dab512e8542b1be186cc766297052'),
    'code-of-conduct': notion.getPage('b5395345cafa4b74a8a745bc15a3daeb'),
    'privacy-policy': notion.getPage('c945e35036cd46abab2ca01da1497d97'),
    sponsorship: notion.getPage('29fc4391cf4f41fc860c6972d84c24fc'),
    sponsors: notion.getPage('2fe696f5589247f88879db843fde220e'),
  },
} as const
