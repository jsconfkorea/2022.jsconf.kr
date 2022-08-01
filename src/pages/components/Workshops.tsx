import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import { Title } from './Title'

const workshops = ['jeongho-park', 'subeom-choi', 'jiyeon-noh']

export const Workshops = () => {
  const t = useTranslations('workshops')

  return (
    <div className="grid place-content-center gap-12 bg-black px-5 py-16 text-white sm:gap-16">
      <Title icon="workshops" text={t('Workshops')} />

      {/* List */}
      <div className="grid max-w-6xl grid-cols-2 place-content-center gap-4 gap-y-9 sm:grid-cols-3 sm:gap-6 sm:gap-y-16">
        {workshops.map((workshop) => (
          <Fade key={workshop} bottom distance="1rem" duration={500}>
            <Link href={`/workshops/${workshop}`}>
              <a className="grid max-w-[212px] gap-2.5 self-center hover:opacity-80 sm:gap-4">
                <Image
                  className="aspect-[1/1.2] rounded-xl"
                  width={500}
                  height={500}
                  src={`/${workshop}.profile.png`}
                  alt={t(`${workshop}.name`)}
                />
                <h3 className="text-[13px] font-semibold leading-4 sm:text-base">
                  {t(`${workshop}.title`)}
                </h3>
                <span className="text-xs text-slate-400 sm:text-sm">
                  {t(`${workshop}.name`)}
                </span>
              </a>
            </Link>
          </Fade>
        ))}
      </div>
    </div>
  )
}
