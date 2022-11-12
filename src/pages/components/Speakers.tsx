import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import { Title } from './Title'

const speakers = [
  'anna-migas',
  'jong-chan-choi',
  'jeremy-wagner',
  'hung-viet-nguyen',
  'jeong-eun-lee',
  'nicol-ribaudo',
  'chen-hui-jing',
  'dwane-hemmings',
  'seok-ju-na',
  'minsu-kim-changhui-lee',
  'anuradha-kumari',
  'eleanor-rumsey',
  'yong-wook-choi',
  'erick-wendel',
]

export const Speakers = () => {
  const t = useTranslations('speakers')

  return (
    <div className="grid place-content-center gap-12 bg-black px-5 py-16 text-white sm:gap-16">
      {/* Title */}
      <Title icon="mic" text={t('Speakers')} />

      {/* List */}
      <div className="grid max-w-6xl grid-cols-2 place-content-center gap-4 gap-y-9 sm:grid-cols-3 sm:gap-6 sm:gap-y-16 md:grid-cols-4 lg:grid-cols-5">
        {speakers.map((speaker, i) => (
          <Fade key={speaker} bottom distance="1rem" duration={500}>
            <div className="flex max-w-[212px] flex-col gap-2.5 sm:gap-4">
              <Link href={`/speakers/${speaker}`}>
                <a className="block hover:opacity-80">
                  <Image
                    className="aspect-[1/1.2] rounded-xl"
                    width={500}
                    height={500}
                    src={`/${speaker}.profile.png`}
                    alt={t(`${speaker}.name`)}
                  />
                </a>
              </Link>
              <div className="flex flex-col gap-2.5">
                <div className="mt-1.5 flex gap-2 sm:gap-3">
                  <a
                    href={t(`${speaker}.link.slide`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Slides"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-presentation cursor-pointer opacity-80 hover:opacity-100"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1={3} y1={4} x2={21} y2={4}></line>
                      <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10"></path>
                      <line x1={12} y1={16} x2={12} y2={20}></line>
                      <line x1={9} y1={20} x2={15} y2={20}></line>
                      <path d="M8 12l3 -3l2 2l3 -3"></path>
                    </svg>
                  </a>
                  <a
                    href={t(`${speaker}.link.talk`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Talks"
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-youtube cursor-pointer opacity-80 hover:opacity-100"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x={3} y={5} width={18} height={14} rx={4}></rect>
                    <path d="M10 9l5 3l-5 3z"></path>
                  </svg>
                  </a>
                </div>
                <h3 className="text-[13px] font-semibold leading-4 sm:text-base">
                  <Link href={`/speakers/${speaker}`}>
                    <a>{t(`${speaker}.title`)}</a>
                  </Link>
                </h3>
                <span className="text-xs text-slate-400 sm:text-sm">
                  {t(`${speaker}.name`)}
                </span>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  )
}
