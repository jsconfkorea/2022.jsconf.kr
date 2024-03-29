import { program } from 'src/pages/ProgramPage'
import { ticket } from 'src/pages/TicketPage'
import { ko } from './ko'

export const en: typeof ko = {
  seo: {
    description: `🗓 Sep. 16-17th | 🏝 Nodeul Island Forest Multi-Hall`,
  },
  nav: {
    about: 'About',
    program: 'Program',
    ticket: 'Tickets',
    speakers: 'Speakers',
    'code-of-conduct': 'Code of Conduct',
    sponsors: 'Sponsors',
    workshops: 'Workshops',
    sponsorship: 'Sponsorship',
    accessibility: 'Accessibility',
    scholarship: 'Scholarship',
    'privacy-policy': 'Privacy Policy',

    english: 'English',
    korean: '한국어',
  },
  hero: {
    date: 'Sep. 16(Fri)~17th(Sat), 2022',
    location: 'Nodeul Island Forest Multi-Hall',
    ticket: 'Tickets will be released on July 27th!',
    'buy-tickets': 'Buy Tickets',
  },
  sponsors: {
    Sponsors: 'Sponsors',
    gold: 'Gold',
    silver: 'Silver',
    bronze: 'Bronze',
    'after-party': 'After party',
    imweb: {
      name: 'Imweb',
    },
    lineplus: {
      name: 'LINE Plus',
    },
    gabia: {
      name: 'gabia',
    },
    aaant: {
      name: 'aaant',
    },
  },
  speakers: {
    Speakers: 'Speakers',
    'anna-migas': {
      name: 'Anna Migas',
      title: 'The secret web performance metric no one is talking about',
      link: {
        slide:
          'https://www.slideshare.net/AnnaMigas1/the-secret-web-performance-metric-no-one-is-talking-about',
        talk: 'https://youtu.be/NCV0xsMp4Jw',
      },
    },
    'jong-chan-choi': {
      name: 'Jong Chan Choi',
      title:
        'Connecting WebViews and Native Properly - Webview Request Protocol',
      link: {
        slide:
          'https://docs.google.com/presentation/d/1lIHV5hdE46i3ZFw--yNM7loyh-rsUskiBvrvOJWm6Us/edit',
        talk: 'https://youtu.be/FazNzl6Ei3A',
      },
    },
    'jeremy-wagner': {
      name: 'Jeremy Wagner',
      title: 'Understanding and Optimizing Interaction to Next Paint (INP)',
      link: {
        slide:
          'https://speaking.jeremy.codes/tqo2nq/optimizing-interaction-to-next-paint-inp',
        talk: 'https://youtu.be/BoaORHnJYAE',
      },
    },
    'hung-viet-nguyen': {
      name: 'Hung Viet Nguyen',
      title: 'How I got 1600 stars on GitHub in 2 months of Open Source work',
      link: {
        slide:
          'https://jsconf.hung.dev/1',
        talk: 'https://youtu.be/1CZjE3cDLbY'
      },
    },
    'jeong-eun-lee': {
      name: 'Jeong Eun Lee',
      title: 'if (extensible design)  return "work life balance"',
      link: {
        slide:
          'https://github.com/chbin05/JSConfKorea2022',
        talk: 'https://youtu.be/eewc_hCvCsg',
      },
    },
    'nicol-ribaudo': {
      name: 'Nicolò Ribaudo',
      title:
        'Records & Tuples are coming: the next exciting JavaScript feature',
      link: {
        slide:
          'https://nicolo-ribaudo.github.io/2022-09-jsconf-korea-slides/',
        talk: 'https://youtu.be/DQTmEhBI41o',
      },
    },
    'chen-hui-jing': {
      name: 'Chen Hui Jing',
      title: 'The many flavours of enterprise CSS grid',
      link: {
        slide: 'https://huijing.github.io/slides/99-jsconfkr-2022/',
        talk: 'https://youtu.be/r3O3Fj1H2yw',
      },
    },
    'dwane-hemmings': {
      name: 'Dwane Hemmings',
      title: 'React x Web Components : How It Is and How It Could Be',
      link: {
        slide:
          'https://drive.google.com/file/d/1lF7RsuH7dmXI9aDw71QGGwmGSU126ZkH/view',
        talk: 'https://youtu.be/JFotV9Fb6cI',
      },
    },
    'seok-ju-na': {
      name: 'Seokju Na',
      title: 'Printing Receipts with React: How to Create POS with JavaScript',
      link: {
        slide: 'https://slides.com/seokjume/react-thermal-print',
        talk: 'https://youtu.be/FFolxFrUgoQ',
      },
    },
    'minsu-kim-changhui-lee': {
      name: 'Minsu Kim, Changhui Lee',
      title: `Is it Okay to Pursue Functional Programming on Frontend?`,
      link: {
        slide:
          'https://moonlit-nougat-422445.netlify.app/1',
        talk: 'https://youtu.be/IqdvgzV_nms',
      },
    },
    'anuradha-kumari': {
      name: 'Anuradha Kumari',
      title: `Accessibility with Svelte - beyond compiler warnings`,
      link: {
        slide:
          'https://docs.google.com/presentation/d/1ses9V7gl9OYloOeUVnqK7n3wCnZURfOJwN54ivEEjnc/edit#slide=id.p',
        talk: 'https://youtu.be/LhYkzhAC7PU',
      },
    },
    'eleanor-rumsey': {
      name: 'Eleanor Rumsey',
      title: `How to Fail Successfully`,
      link: {
        slide:
          'https://github.com/eleanorRumsey/jsConfKorea2022/blob/main/HowToFailSuccessfully.pdf',
        talk: 'https://youtu.be/ybbw71aWu4o',
      },
    },
    'yong-wook-choi': {
      name: 'Yongwook Choi',
      title: `Deno: Next Generation JavaScript Runtime`,
      link: {
        slide: 'https://github.com/hyp3rflow/jsconf-kr-2022-deno',
        talk: 'https://youtu.be/WtQlAzhE3gY',
      },
    },
    'erick-wendel': {
      name: 'Erick Wendel',
      title: `The journey about how I fixed a bug in the Node.js core that affected thousands of packages`,
      link: {
        slide:
          'https://www.icloud.com/keynote/0ebVCpbGca71WwkLlffcaSsyQ#The_Journey_About_How_I_Fixed_a_Bug_in_the_Node.js_Core_that_Affected_Thousands_of_Packages_-_jsconfkorea_-_17092022',
        talk: 'https://youtu.be/cxUWZoirTZk',
      },
    },
    // Sponsor session
    'dong-hwi-lee': {
      name: `Donghwi Lee (I'mweb)`,
      title: `A Googler's journey to Korean start-ups`,
    },
    'sukjoo-hong': {
      name: 'Sukjoo Hong (aaant)',
      title: `Working in startup engineering team`,
    },
    'chaeyoung-ha': {
      name: 'Chaeyoung Ha (gabia)',
      title: `To Cloud beyond Web, gabia`,
    },
  },
  workshops: {
    Workshops: 'Workshops',
    'jeongho-park': {
      name: 'JeongHo Park',
      title: `Making an Interactive Sound Generator with Webcam and JavaScript (p5.js, tone.js)`,
    },
    'jiyeon-noh': {
      name: 'Jiyeon Noh',
      title: `What Is Data Journalism and How to Make Your Own Scroll-Based Storytelling Visualization`,
    },
    'subeom-choi': {
      name: 'Subeom Choi',
      title: `Let's Make a Deeplink Solution`,
    },
  },
  performance: {
    Performance: 'Opening & Closing Performance',
    jeonghyo: {
      name: 'JeongHyo',
      link: 'https://www.instagram.com/doodlefingers/',
    },
    'so-sun-park': {
      name: 'So Sun Park',
      link: 'https://www.instagram.com/sosunnyproject/',
    },
  },
  venue: {
    Venue: 'Venue',
    location: 'Nodeul Island Forest Multi-Hall',
    'google-map': 'Google Map',
    description:
      'Nodeul Island an artificial island in the Han River in Seoul, South Korea. The uninhabited island is located to the east of the larger island of Yeouido. Hangang Bridge passes directly over the island.',
  },
  ticket: ticket.en,
  program: program.en,
} as const
