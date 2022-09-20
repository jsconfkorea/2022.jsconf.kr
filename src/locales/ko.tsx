import { program } from 'src/pages/ProgramPage'
import { ticket } from 'src/pages/TicketPage'

export const ko = {
  seo: {
    description: `🗓 9월 16-17일 | 🏝 노들섬 다목적 홀 숲`,
  },
  nav: {
    about: '행사소개',
    program: '프로그램',
    ticket: '티켓',
    speakers: '발표자',
    'code-of-conduct': '핵심원칙',
    sponsors: '후원사',
    workshops: '워크샵',
    sponsorship: '후원사 모집',
    accessibility: '접근성',
    scholarship: '장학제도',
    'privacy-policy': '개인정보 처리방침',

    english: 'English',
    korean: '한국어',
  },
  hero: {
    date: '2022년 9월 16일(금)~17일(토)',
    location: '노들섬 다목적 홀 숲',
    ticket: '티켓구매는 7월 27일에 오픈됩니다!',
    'buy-tickets': '티켓 구매',
  },
  sponsors: {
    Sponsors: '후원사',
    gold: '골드 등급',
    silver: '실버 등급',
    bronze: '브론즈 등급',
    'after-party': '애프터파티',
    imweb: {
      name: '아임웹',
    },
    lineplus: {
      name: '라인플러스',
    },
    gabia: {
      name: '가비아',
    },
    aaant: {
      name: '앤트',
    },
  },
  speakers: {
    Speakers: '발표자',
    'anna-migas': {
      name: '안나 미가스',
      title: '아무도 이야기하지 않는 웹 성능 지표의 비밀',
      link: {
        slide:
          'https://drive.google.com/file/d/13etA5nMuG-Y6jhciT-9Il5KAysAl5Wl8/view',
      },
    },
    'jong-chan-choi': {
      name: '최종찬',
      title: '웹뷰와 네이티브를 제대로 이어붙이기 - Webview Request Protocol',
      link: {
        slide:
          'https://docs.google.com/presentation/d/1lIHV5hdE46i3ZFw--yNM7loyh-rsUskiBvrvOJWm6Us/edit',
      },
    },
    'jeremy-wagner': {
      name: '제레미 와그너',
      title: 'INP(Interaction to Next Paint)를 이해하고 최적화 하기',
      link: {
        slide:
          'https://drive.google.com/file/d/1jyUNCx6T0MZhKkNSOaf218LbpZg1yzwU/view',
      },
    },
    'hung-viet-nguyen': {
      name: '흥 비엣 응우옌',
      title: '어떻게 두 달만에 오픈소스로 깃헙 별 1600개를 받을 수 있었을까?',
      link: {
        slide:
          'https://drive.google.com/file/d/13oaDGgamR_-8kC6iQAfz8n_C0gxjNJDg/view',
      },
    },
    'jeong-eun-lee': {
      name: '이정은',
      title: 'if (확장성있는 설계) return “워라밸”',
      link: {
        slide:
          'https://docs.google.com/presentation/d/1CmpaGsKMTd5Y-xlpXs4BBQUq989dRvmC/edit#slide=id.p1',
      },
    },
    'nicol-ribaudo': {
      name: '니콜로 리바우도',
      title: '자바스크립트에 그들이 온다: 기대되는 다음 피쳐 Records 와 Tuples',
      link: {
        slide:
          'https://nicolo-ribaudo.github.io/2022-09-jsconf-korea-slides/#/1',
      },
    },
    'chen-hui-jing': {
      name: '첸 후이 징',
      title: '엔터프라이즈 CSS grid의 다양한 특징',
      link: {
        slide: 'https://huijing.github.io/slides/99-jsconfkr-2022/',
      },
    },
    'dwane-hemmings': {
      name: '드웨인 헤밍스',
      title: 'React x Web Components : 어떻게 존재하고 어떻게 될 수 있을까',
      link: {
        slide:
          'https://drive.google.com/file/d/1lF7RsuH7dmXI9aDw71QGGwmGSU126ZkH/view',
      },
    },
    'seok-ju-na': {
      name: '나석주',
      title: 'React로 영수증 출력해보기 (부제: 자바스크립트로 POS를 만든다고?)',
      link: {
        slide: 'https://slides.com/seokjume/react-thermal-print',
      },
    },
    'minsu-kim-changhui-lee': {
      name: '김민수, 이창희',
      title: `프론트엔드에서 함수형을 추구하면 안되는걸까?`,
      link: {
        slide:
          'https://drive.google.com/file/d/1P_XzZOoI4XMlXpJbzRIf8O_f1oAaf31b/view',
      },
    },
    'anuradha-kumari': {
      name: '아누라다 쿠마리',
      title: `Svelte와 함께 하는 접근성 - 컴파일러 경고를 넘어서`,
      link: {
        slide:
          'https://docs.google.com/presentation/d/1ses9V7gl9OYloOeUVnqK7n3wCnZURfOJwN54ivEEjnc/edit#slide=id.p',
      },
    },
    'eleanor-rumsey': {
      name: '엘러너 럼지',
      title: `성공적으로 실패하는 방법`,
      link: {
        slide:
          'https://github.com/eleanorRumsey/jsConfKorea2022/blob/main/HowToFailSuccessfully.pdf',
      },
    },
    'yong-wook-choi': {
      name: '최용욱',
      title: `Deno: 차세대 JavaScript 런타임`,
      link: {
        slide: 'https://github.com/hyp3rflow/jsconf-kr-2022-deno',
      },
    },
    'erick-wendel': {
      name: '에릭 웬델',
      title: `수천 개의 패키지에 영향을 미친 Node.js 코어의 버그를 수정한 방법에 대한 여정`,
      link: {
        slide:
          'https://www.icloud.com/keynote/0ebVCpbGca71WwkLlffcaSsyQ#The_Journey_About_How_I_Fixed_a_Bug_in_the_Node.js_Core_that_Affected_Thousands_of_Packages_-_jsconfkorea_-_17092022',
      },
    },
    // Sponsor session
    'dong-hwi-lee': {
      name: '이동휘 (아임웹)',
      title: `구글 엔지니어의 한국 스타트업 생존기`,
    },
    'sukjoo-hong': {
      name: '홍석주 (앤트)',
      title: `스타트업 개발팀에서 협업하기`,
    },
    'chaeyoung-ha': {
      name: '하채영 (가비아)',
      title: `웹을 넘어 클라우드로, 가비아`,
    },
  },
  workshops: {
    Workshops: '워크샵',
    'jeongho-park': {
      name: '박정호',
      title: `웹캠을 이용한 자바스크립트 기반의 인터렉티브 음악 소프트웨어 만들기`,
    },
    'jiyeon-noh': {
      name: '노지연',
      title: `데이터 저널리즘!? 나만의 스크롤 스토리텔링 시각화 만들기`,
    },
    'subeom-choi': {
      name: '최수범',
      title: `딥링크 솔루션 직접 만들어보기`,
    },
  },
  performance: {
    Performance: '오프닝 및 클로징 공연',
    jeonghyo: {
      name: '이정효',
      link: 'https://www.instagram.com/doodlefingers/',
    },
    'so-sun-park': {
      name: '박소선',
      link: 'https://www.instagram.com/sosunnyproject/',
    },
  },
  venue: {
    Venue: '장소',
    location: '노들섬 다목적 홀 숲',
    'google-map': '구글맵으로 보기',
    description: '서울이 한눈에 보이는 노들섬에서 만나요!',
  },
  ticket: ticket.ko,
  program: program.ko,
}
