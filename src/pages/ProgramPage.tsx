import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { useTranslations } from 'next-intl'
import { NextSeo } from 'next-seo'
import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const program = {
  ko: {
    program: '프로그램',
    description:
      '행사기간 동안 오프라인 행사의 경험을 높여줄 소소한 액티비티들이 준비되어 있습니다!',
    thu: '목',
    fri: '금',
    sat: '토',
    'multi-hall': '다목적 홀',
    room: '세미나실',
    'pre-registration': '참가자 사전등록 및 소규모 밋업',
    registration: '참가자등록',
    opening: '오프닝 및 오프닝 공연',
    m: '분',
    lunch: '점심시간',
    workshop: '워크샵',
    break: '쉬는시간',
    networking: '네트워킹 & 휴식공간',
    performance: '공연',
    'after-party': '애프터 파티',
    'sponsor-session': '후원사 세션',
    closing: '클로징 & 단체사진',
    TBA: '추후 공개',
  },
  en: {
    program: 'Program',
    description:
      'We are preparing small and fun activities during the conference!',
    thu: 'THU',
    fri: 'FRI',
    sat: 'SAT',
    'multi-hall': 'Multi-hall',
    room: 'Room',
    'pre-registration': 'Pre-registration and chill meet-up',
    registration: 'Registration',
    opening: 'Opening & Performance',
    m: 'm',
    lunch: 'Lunch',
    workshop: 'Workshop',
    break: 'Break',
    networking: 'Networking Lounge',
    performance: 'Performance',
    'after-party': 'After party',
    'sponsor-session': 'Sponsor session',
    closing: 'Closing & Group Photo',
    TBA: 'TBA',
  },
}

export function ProgramPage() {
  const t = useTranslations('program')
  const s = useTranslations('speakers')
  const w = useTranslations('workshops')

  const { query, replace } = useRouter()

  const day = ['0', '1', '2'].includes(query.day as string)
    ? (query.day as string)
    : '1'
  const room = ['M', 'A', 'C'].includes(query.room as string)
    ? (query.room as string)
    : 'M'

  return (
    <>
      <NextSeo title={t('program')} />

      <div className="flex min-h-screen w-full flex-col">
        <Navbar />

        <div className="mt my-44 flex w-full flex-1 bg-black text-white">
          <div className="container flex flex-col justify-center">
            <h1 className="text-center text-4xl font-bold">{t('program')}</h1>

            <h2 className="lg:text-md mt-6 px-12 text-center text-sm">
              {t('description')}
            </h2>

            <div className="relative mt-12 grid h-12 w-80 grid-flow-col grid-cols-3 self-center rounded-full bg-[#252525] p-0.5 text-sm font-light text-white">
              <div
                className={`ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] absolute m-0.5 h-[calc(100%-4px)] w-[calc(320px/3)] rounded-full bg-black transition ease-in-out ${
                  day === '1'
                    ? 'translate-x-[calc(100%-4px)]'
                    : day === '2'
                    ? 'translate-x-[calc(200%-4px)]'
                    : ''
                }`}
              ></div>
              <button
                className={`z-10 flex h-full items-center justify-center rounded-full ${
                  day === '0' ? '' : 'opacity-40'
                }`}
                onClick={() =>
                  replace({ query: { ...query, day: '0' } }, undefined, {
                    shallow: true,
                  })
                }
              >
                9.15 {t('thu')}
              </button>
              <button
                className={`z-10 flex h-full items-center justify-center rounded-full ${
                  day === '1' ? '' : 'opacity-40'
                }`}
                onClick={() =>
                  replace({ query: { ...query, day: '1' } }, undefined, {
                    shallow: true,
                  })
                }
              >
                9.16 {t('fri')}
              </button>
              <button
                className={`z-10 flex h-full items-center justify-center rounded-full ${
                  day === '2' ? '' : 'opacity-40'
                }`}
                onClick={() =>
                  replace({ query: { ...query, day: '2' } }, undefined, {
                    shallow: true,
                  })
                }
              >
                9.17 {t('sat')}
              </button>
            </div>

            <div className="relative mt-16 grid max-w-4xl grid-cols-3 gap-5 place-self-center lg:w-full lg:grid-cols-4 lg:px-5">
              {day === '0' ? (
                <button
                  className={`${
                    room === 'M' ? 'underline !opacity-100' : ''
                  } col-span-3 underline-offset-8 opacity-60 lg:col-span-4 lg:cursor-default lg:text-white lg:no-underline lg:opacity-100`}
                  onClick={() =>
                    replace({ query: { ...query, room: 'M' } }, undefined, {
                      shallow: true,
                    })
                  }
                >
                  {t('multi-hall')}
                </button>
              ) : (
                <>
                  <button
                    className={`${
                      room === 'M' ? 'underline !opacity-100' : ''
                    } underline-offset-8 opacity-60 lg:col-span-2 lg:cursor-default lg:text-white lg:no-underline lg:opacity-100`}
                    onClick={() =>
                      replace({ query: { ...query, room: 'M' } }, undefined, {
                        shallow: true,
                      })
                    }
                  >
                    {t('multi-hall')}
                  </button>
                  <button
                    className={`${
                      room === 'A' ? 'underline !opacity-100' : ''
                    } underline-offset-8 opacity-60 lg:cursor-default lg:text-white lg:no-underline lg:opacity-100`}
                    onClick={() =>
                      replace({ query: { ...query, room: 'A' } }, undefined, {
                        shallow: true,
                      })
                    }
                  >
                    {t('room')} A
                  </button>
                  <button
                    className={`${
                      room === 'C' ? 'underline !opacity-100' : ''
                    } underline-offset-8 opacity-60 lg:cursor-default lg:text-white lg:no-underline lg:opacity-100`}
                    onClick={() =>
                      replace({ query: { ...query, room: 'C' } }, undefined, {
                        shallow: true,
                      })
                    }
                  >
                    {t('room')} C
                  </button>
                </>
              )}
            </div>

            <div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-5 self-center px-5 lg:grid-cols-4 lg:gap-x-8">
              {day === '0' && (
                <>
                  <div className="flex min-h-[180px] flex-col gap-1.5 rounded-xl bg-[#191919] p-6 lg:col-span-4">
                    <div className="flex w-full grid-cols-2 justify-between gap-1.5 text-sm">
                      <span className="opacity-70">17:00 - 19:00</span>
                      <span className="justify-self-end opacity-70">
                        120{t('m')}
                      </span>
                    </div>
                    <div className="">
                      <span className="justify-self-center font-light opacity-100">
                        {t('pre-registration')}
                      </span>
                    </div>
                  </div>
                </>
              )}

              {day === '1' && (
                <>
                  <div className="grid gap-1.5 rounded-xl bg-[#191919] p-6 lg:col-span-4">
                    <div className="grid grid-cols-2 gap-1.5 text-sm lg:grid-flow-col lg:grid-cols-3">
                      <span className="opacity-70">10:30 - 11:00</span>
                      <span className="justify-self-end opacity-70 lg:order-3">
                        30{t('m')}
                      </span>
                      <span className="font-light opacity-100 lg:justify-self-center">
                        {t('registration')}
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-1.5 rounded-xl bg-[#191919] p-6 lg:col-span-4">
                    <div className="grid grid-cols-2 gap-1.5 text-sm lg:grid-flow-col lg:grid-cols-3">
                      <span className="opacity-70">11:00 - 11:30</span>
                      <span className="justify-self-end opacity-70 lg:order-3">
                        30{t('m')}
                      </span>
                      <span className="font-light opacity-100 lg:justify-self-center">
                        {t('opening')}
                      </span>
                    </div>
                  </div>

                  <Link href="/speakers/anna-migas">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">11:30 - 11:55</span>
                        <span className="">25{t('m')}</span>
                      </div>
                      <div className="grid w-4/5 grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {s('anna-migas.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                          alt={s('anna-migas.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {s('anna-migas.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/workshops/jeongho-park">
                    <a
                      className={`${
                        room === 'A' ? 'flex' : 'hidden'
                      } group min-h-[300px] flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:row-span-3 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">11:30 - 13:00</span>
                        <span className="">90{t('m')}</span>
                      </div>
                      <div className="grid w-full grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          ({t('workshop')}) {w('jeongho-park.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/jeongho-park.png"
                          alt={w('jeongho-park.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {w('jeongho-park.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="#">
                    <a
                      className={`${
                        room === 'C' ? 'flex' : 'hidden'
                      } min-h-[300px] cursor-default flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 lg:row-span-3 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">11:30 - 13:00</span>
                        <span className="">90{t('m')}</span>
                      </div>
                      <div className="grid grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">{t('networking')}</span>
                      </div>
                      {/* <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <div className="h-6 w-6 rounded-full bg-gray-800"></div>
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          TBA
                        </span>
                      </div> */}
                    </a>
                  </Link>

                  {/* <Link href="#">
                    <a
                      className={`${
                        room === 'C' ? 'flex' : 'hidden'
                      } group min-h-[300px] flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:row-span-3 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">11:30 - 13:00</span>
                        <span className="">90{t('m')}</span>
                      </div>
                      <div className="grid grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">{t('networking')}</span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <div className="h-6 w-6 rounded-full bg-gray-800"></div>
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          TBA
                        </span>
                      </div>
                    </a>
                  </Link> */}

                  <Link href="/speakers/minsu-kim-changhui-lee">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">12:00 - 12:25</span>
                        <span className="">25{t('m')}</span>
                      </div>
                      <div className="grid w-4/5 grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {s('minsu-kim-changhui-lee.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/minsu-kim-changhui-lee.png"
                          alt={s('minsu-kim-changhui-lee.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {s('minsu-kim-changhui-lee.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/speakers/anuradha-kumari">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">12:30 - 12:55</span>
                        <span className="">25{t('m')}</span>
                      </div>
                      <div className="grid w-4/5 grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {s('anuradha-kumari.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anuradha-kumari.png"
                          alt={s('anuradha-kumari.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {s('anuradha-kumari.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <div className="grid gap-1.5 rounded-xl bg-[#191919] p-6 lg:col-span-4">
                    <div className="grid grid-cols-2 gap-1.5 text-sm lg:grid-flow-col lg:grid-cols-3">
                      <span className="opacity-70">13:00 - 14:30</span>
                      <span className="justify-self-end opacity-70 lg:order-3">
                        90{t('m')}
                      </span>
                      <span className="font-light opacity-100 lg:justify-self-center">
                        {t('lunch')}
                      </span>
                    </div>
                  </div>

                  <Link href="/speakers/eleanor-rumsey">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">14:30 - 14:55</span>
                        <span className="">25{t('m')}</span>
                      </div>
                      <div className="grid w-4/5 grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {s('eleanor-rumsey.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/eleanor-rumsey.png"
                          alt={s('eleanor-rumsey.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {s('eleanor-rumsey.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/workshops/jiyeon-noh">
                    <a
                      className={`${
                        room === 'A' ? 'flex' : 'hidden'
                      } group min-h-[300px] flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:row-span-3 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">14:30 - 16:00</span>
                        <span className="">90{t('m')}</span>
                      </div>
                      <div className="grid w-full grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          ({t('workshop')}) {w('jiyeon-noh.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/jiyeon-noh.png"
                          alt={w('jiyeon-noh.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {w('jiyeon-noh.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="#">
                    <a
                      className={`${
                        room === 'C' ? 'flex' : 'hidden'
                      } min-h-[300px] cursor-default flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 lg:row-span-3 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">14:30 - 16:00</span>
                        <span className="">90{t('m')}</span>
                      </div>
                      <div className="grid grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">{t('networking')}</span>
                      </div>
                      {/* <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <div className="h-6 w-6 rounded-full bg-gray-800"></div>
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          TBA
                        </span>
                      </div> */}
                    </a>
                  </Link>

                  <Link href="/speakers/dwane-hemmings">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">15:00 - 15:25</span>
                        <span className="">25{t('m')}</span>
                      </div>
                      <div className="grid w-4/5 grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {s('dwane-hemmings.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/dwane-hemmings.png"
                          alt={s('dwane-hemmings.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {s('dwane-hemmings.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <div
                    className={`${
                      room === 'M' ? 'flex' : 'hidden'
                    } grid gap-1.5 rounded-xl bg-[#191919] p-6 lg:col-span-2 lg:!flex`}
                  >
                    <div className="grid w-full grid-cols-2 gap-1.5 text-sm lg:grid-flow-col lg:grid-cols-3">
                      <span className="opacity-70">15:30 - 16:00</span>
                      <span className="justify-self-end opacity-70 lg:order-3">
                        30{t('m')}
                      </span>
                      <span className="font-light opacity-100 lg:justify-self-center">
                        {t('break')}
                      </span>
                    </div>
                  </div>

                  <Link href="/speakers/jeong-eun-lee">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">16:00 - 16:25</span>
                        <span className="">25{t('m')}</span>
                      </div>
                      <div className="grid w-4/5 grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {s('jeong-eun-lee.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/jeong-eun-lee.png"
                          alt={s('jeong-eun-lee.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {s('jeong-eun-lee.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/workshops/subeom-choi">
                    <a
                      className={`${
                        room === 'A' ? 'flex' : 'hidden'
                      } group min-h-[300px] flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:row-span-3 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">16:00 - 17:30</span>
                        <span className="">90{t('m')}</span>
                      </div>
                      <div className="grid w-full grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          ({t('workshop')}) {w('subeom-choi.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/subeom-choi.png"
                          alt={w('subeom-choi.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {w('subeom-choi.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="">
                    <a
                      className={`${
                        room === 'C' ? 'flex' : 'hidden'
                      } min-h-[300px] cursor-default flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 lg:row-span-3 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">16:00 - 17:30</span>
                        <span className="">90{t('m')}</span>
                      </div>
                      <div className="grid w-4/5 grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">{t('networking')}</span>
                      </div>
                      {/* <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div> */}
                    </a>
                  </Link>

                  <Link href="/speakers/hung-viet-nguyen">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">16:30 - 16:55</span>
                        <span className="">25{t('m')}</span>
                      </div>
                      <div className="grid w-4/5 grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {s('hung-viet-nguyen.title')}
                        </span>
                      </div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/hung-viet-nguyen.png"
                          alt={s('hung-viet-nguyen.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {s('hung-viet-nguyen.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/speakers/jeremy-wagner">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">17:00 - 17:25</span>
                        <span className="">25{t('m')}</span>
                      </div>
                      <div className="grid w-4/5 grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {s('jeremy-wagner.title')}
                        </span>
                      </div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/jeremy-wagner.png"
                          alt={s('jeremy-wagner.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {s('jeremy-wagner.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <div className="grid gap-1.5 rounded-xl bg-[#191919] p-6 lg:col-span-4">
                    <div className="grid grid-cols-2 gap-1.5 text-sm lg:grid-flow-col lg:grid-cols-3">
                      <span className="opacity-70">17:30 - 18:00</span>
                      <span className="justify-self-end opacity-70 lg:order-3">
                        30{t('m')}
                      </span>
                      <span className="font-light opacity-100 lg:justify-self-center">
                        {t('performance')}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`${
                      room === 'M' ? 'flex' : 'hidden'
                    } group min-h-[300px] flex-col gap-1.5 rounded-xl bg-[#191919] p-6 lg:col-span-2 lg:row-span-4 lg:!flex lg:min-h-[164px] lg:gap-3`}
                  >
                    <div className="flex justify-between text-sm opacity-70">
                      <span className="">18:00 ~</span>
                      {/* <span className="">150{t('m')}</span> */}
                    </div>
                    <div className="grid w-4/5 grid-flow-col justify-between text-sm text-white">
                      <span className="font-light">{t('after-party')}</span>
                    </div>
                  </div>

                  <Link href="/workshops/jeongho-park">
                    <a
                      className={`${
                        room === 'A' ? 'flex' : 'hidden'
                      } group min-h-[300px] flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:row-span-4 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">18:00 - 19:30</span>
                        <span className="">90{t('m')}</span>
                      </div>
                      <div className="grid grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          ({t('workshop')}) {w('jeongho-park.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/jeongho-park.png"
                          alt={w('jeongho-park.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {w('jeongho-park.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="#">
                    <a
                      className={`${
                        room === 'C' ? 'flex' : 'hidden'
                      } cursor-default flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">18:00 - 18:20</span>
                        <span className="">20{t('m')}</span>
                      </div>
                      <div className="grid grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {s('dong-hwi-lee.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="h-6 self-center rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/dong-hwi-lee.png"
                          alt={s('dong-hwi-lee.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {s('dong-hwi-lee.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="#">
                    <a
                      className={`${
                        room === 'C' ? 'flex' : 'hidden'
                      } cursor-default flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">18:20 - 18:40</span>
                        <span className="">20{t('m')}</span>
                      </div>
                      <div className="grid grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {s('sukjoo-hong.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="h-6 self-center rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/sukjoo-hong.png"
                          alt={s('sukjoo-hong.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {s('sukjoo-hong.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="#">
                    <a
                      className={`${
                        room === 'C' ? 'flex' : 'hidden'
                      } cursor-default flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">18:40 - 19:00</span>
                        <span className="">20{t('m')}</span>
                      </div>
                      <div className="grid grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {t('sponsor-session')} ({t('TBA')})
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="#">
                    <a
                      className={`${
                        room === 'C' ? 'flex' : 'hidden'
                      } cursor-default flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">19:00 - 19:20</span>
                        <span className="">20{t('m')}</span>
                      </div>
                      <div className="grid grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {t('sponsor-session')} ({t('TBA')})
                        </span>
                      </div>
                    </a>
                  </Link>
                </>
              )}

              {day === '2' && (
                <>
                  <Link href="/speakers/chen-hui-jing">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">10:30 - 10:55</span>
                        <span className="">25{t('m')}</span>
                      </div>
                      <div className="grid w-4/5 grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {s('chen-hui-jing.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/chen-hui-jing.png"
                          alt={s('chen-hui-jing.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {s('chen-hui-jing.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="#">
                    <a
                      className={`${
                        room === 'A' ? 'flex' : 'hidden'
                      } min-h-[200px] cursor-default flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 lg:row-span-2 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">10:30 - 11:30</span>
                        <span className="">60{t('m')}</span>
                      </div>
                      <div className="grid grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">{t('networking')}</span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/workshops/jiyeon-noh">
                    <a
                      className={`${
                        room === 'C' ? 'flex' : 'hidden'
                      } group min-h-[300px] flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:row-span-3 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">10:30 - 12:00</span>
                        <span className="">90{t('m')}</span>
                      </div>
                      <div className="grid grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          ({t('workshop')}) {w('jiyeon-noh.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/jiyeon-noh.png"
                          alt={w('jiyeon-noh.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {w('jiyeon-noh.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/speakers/jong-chan-choi">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">11:00 - 11:25</span>
                        <span className="">25{t('m')}</span>
                      </div>
                      <div className="grid w-4/5 grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {s('jong-chan-choi.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/jong-chan-choi.png"
                          alt={s('jong-chan-choi.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {s('jong-chan-choi.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <div
                    className={`${
                      room === 'M' ? 'flex' : 'hidden'
                    } grid gap-1.5 rounded-xl bg-[#191919] p-6 lg:col-span-2 lg:!flex`}
                  >
                    <div className="grid w-full grid-cols-2 gap-1.5 text-sm lg:grid-flow-col lg:grid-cols-3">
                      <span className="opacity-70">11:30 - 12:00</span>
                      <span className="justify-self-end opacity-70 lg:order-3">
                        30{t('m')}
                      </span>
                      <span className="font-light opacity-100 lg:justify-self-center">
                        {t('break')}
                      </span>
                    </div>
                  </div>

                  <Link href="/workshops/subeom-choi">
                    <a
                      className={`${
                        room === 'A' ? 'flex' : 'hidden'
                      } group min-h-[300px] flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:row-span-3 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">11:30 - 13:00</span>
                        <span className="">90{t('m')}</span>
                      </div>
                      <div className="grid grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          ({t('workshop')}) {w('subeom-choi.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/subeom-choi.png"
                          alt={w('subeom-choi.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {w('subeom-choi.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/speakers/seok-ju-na">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">12:00 - 12:25</span>
                        <span className="">25{t('m')}</span>
                      </div>
                      <div className="grid w-4/5 grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {s('seok-ju-na.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/seok-ju-na.png"
                          alt={s('seok-ju-na.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {s('seok-ju-na.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="#">
                    <a
                      className={`${
                        room === 'C' ? 'flex' : 'hidden'
                      } min-h-[300px] cursor-default flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 lg:row-span-2 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">12:00 - 13:00</span>
                        <span className="">60{t('m')}</span>
                      </div>
                      <div className="grid grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">{t('networking')}</span>
                      </div>
                      {/* <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <div className="h-6 w-6 rounded-full bg-gray-800"></div>
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          TBA
                        </span>
                      </div> */}
                    </a>
                  </Link>

                  <Link href="/speakers/nicol-ribaudo">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">12:30 - 12:55</span>
                        <span className="">25{t('m')}</span>
                      </div>
                      <div className="grid w-4/5 grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {s('nicol-ribaudo.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/nicol-ribaudo.png"
                          alt={s('nicol-ribaudo.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {s('nicol-ribaudo.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <div className="grid gap-1.5 rounded-xl bg-[#191919] p-6 lg:col-span-4">
                    <div className="grid grid-cols-2 gap-1.5 text-sm lg:grid-flow-col lg:grid-cols-3">
                      <span className="opacity-70">13:00 - 14:30</span>
                      <span className="justify-self-end opacity-70 lg:order-3">
                        90{t('m')}
                      </span>
                      <span className="font-light opacity-100 lg:justify-self-center">
                        {t('lunch')}
                      </span>
                    </div>
                  </div>

                  <Link href="/speakers/yong-wook-choi">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">14:30 - 14:55</span>
                        <span className="">25{t('m')}</span>
                      </div>
                      <div className="grid w-4/5 grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {s('yong-wook-choi.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/yong-wook-choi.png"
                          alt={s('yong-wook-choi.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {s('yong-wook-choi.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="#">
                    <a
                      className={`${
                        room !== 'M' ? 'flex' : 'hidden'
                      } min-h-[300px] cursor-default flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 lg:col-span-2 lg:row-span-2 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">14:30 - 15:30</span>
                        <span className="">60{t('m')}</span>
                      </div>
                      <div className="grid w-4/5 grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">{t('networking')}</span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/speakers/erick-wendel">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:min-h-[164px] lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">15:00 - 15:25</span>
                        <span className="">25{t('m')}</span>
                      </div>
                      <div className="grid w-4/5 grid-flow-col justify-between text-sm text-white">
                        <span className="font-light">
                          {s('erick-wendel.title')}
                        </span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/erick-wendel.png"
                          alt={s('erick-wendel.name')}
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          {s('erick-wendel.name')}
                        </span>
                      </div>
                    </a>
                  </Link>

                  <div className="grid gap-1.5 rounded-xl bg-[#191919] p-6 lg:col-span-4">
                    <div className="grid grid-cols-2 gap-1.5 text-sm lg:grid-flow-col lg:grid-cols-3">
                      <span className="opacity-70">15:30 - 16:00</span>
                      <span className="justify-self-end opacity-70 lg:order-3">
                        30{t('m')}
                      </span>
                      <span className="font-light opacity-100 lg:justify-self-center">
                        {t('closing')}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
