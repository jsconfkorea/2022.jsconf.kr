import { ko } from './ko'

export const en: typeof ko = {
  seo: {
    description: `🗓 Sep. 16-17th | 🏝 Nodeul Island`,
  },
  nav: {
    about: 'About',
    speakers: 'Speakers',
    'code-of-conduct': 'Code of Conduct',
    sponsors: 'Sponsors',
    workshops: 'Workshops',
    sponsorship: 'Sponsorship',
    scholarship: 'Scholarship',
    'privacy-policy': 'Privacy Policy',

    english: 'English',
    korean: '한국어',
  },
  hero: {
    date: 'Sep. 16(Fri)-17th(Sat), 2022',
    location: 'Nodeul Island Forest Multi-Hall',
    ticket: 'Tickets will be released on July 27th!',
  },
  sponsors: {
    Sponsors: 'Sponsors',
    'Gold Sponsor': 'Gold Sponsor',
    'Silver Sponsor': 'Silver Sponsor',
    'Bronze Sponsor': 'Bronze Sponsor',
  },
  speakers: {
    Speakers: 'Speakers',
    'anna-migas': {
      name: 'Anna Migas',
      title: 'The secret web performance metric no one is talking about',
    },
    'jong-chan-choi': {
      name: 'Jong Chan Choi',
      title:
        'Connecting WebViews and Native Properly - Webview Request Protocol',
    },
    'jeremy-wagner': {
      name: 'Jeremy Wagner',
      title: 'Optimizing INP',
    },
    'hung-viet-nguyen': {
      name: 'Hung Viet Nguyen',
      title: 'How I got 1600 stars on GitHub in 2 months of Open Source work',
    },
    'jeong-eun-lee': {
      name: 'Jeong Eun Lee',
      title: 'if (extensible design)  return "work life balance"',
    },
    'nicol-ribaudo': {
      name: 'Nicolò Ribaudo',
      title:
        'Records & Tuples are coming: the next exciting JavaScript feature',
    },
    'chen-hui-jing': {
      name: 'Chen Hui Jing',
      title: 'The many flavours of enterprise CSS grid',
    },
    'dwane-hemmings': {
      name: 'Dwane Hemmings',
      title: 'React x Web Components : How It Is and How It Could Be',
    },
    'seok-ju-na': {
      name: 'Seokju Na',
      title: 'Printing Receipts with React: How to Create POS with JavaScript',
    },
    'minsu-kim-changhui-lee': {
      name: 'Minsu Kim, Changhui Lee',
      title: `Is it Okay to Pursue Functional Programming on Frontend?`,
    },
    'anuradha-kumari': {
      name: 'Anuradha Kumari',
      title: `Accessibility with Svelte - beyond compiler warnings`,
    },
    'eleanor-rumsey': {
      name: 'Eleanor Rumsey',
      title: `How to Fail Successfully`,
    },
    'yong-wook-choi': {
      name: 'Yongwook Choi',
      title: `Deno: Next Generation JavaScript Runtime`,
    },
    'erick-wendel': {
      name: 'Erick Wendel',
      title: `The journey about how I fixed a bug in the Node.js core that affected thousands of packages`,
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
    description:
      'Nodeul Island an artificial island in the Han River in Seoul, South Korea. The uninhabited island is located to the east of the larger island of Yeouido. Hangang Bridge passes directly over the island.',
  },
} as const
