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
            <Link href={`/speakers/${speaker}`}>
              <a className="grid max-w-[212px] gap-2.5 self-center hover:opacity-80 sm:gap-4">
                <Image
                  className="aspect-[1/1.2] rounded-xl"
                  width={500}
                  height={500}
                  src={`/${speaker}.profile.png`}
                  alt={t(`${speaker}.name`)}
                />
                <h3 className="text-[13px] font-semibold leading-4 sm:text-base">
                  {t(`${speaker}.title`)}
                </h3>
                <span className="text-xs text-slate-400 sm:text-sm">
                  {t(`${speaker}.name`)}
                </span>
              </a>
            </Link>
          </Fade>
        ))}
      </div>
    </div>
  )
}
