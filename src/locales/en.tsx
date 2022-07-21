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
  },
} as const
