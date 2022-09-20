import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import { Title } from './Title'

const performs = ['jeonghyo', 'so-sun-park']

export const Performs = () => {
  const t = useTranslations('performance')

  return (
    <div className="grid place-content-center gap-12 bg-black px-5 py-16 text-white sm:gap-16">
      <Title icon="opening" text={t('Performance')} />

      {/* List */}
      <div className="grid max-w-6xl grid-cols-2 place-content-center gap-4 gap-y-9 sm:gap-6 sm:gap-y-16">
        {performs.map((perform, i) => (
          <Fade key={perform} bottom distance="1rem" duration={500}>
            <Link href={t(`${perform}.link`)}>
              <a className="grid max-w-[212px] gap-2.5 self-center hover:opacity-80 sm:gap-4">
                <Image
                  className="aspect-[1/1.2] rounded-xl"
                  width={500}
                  height={500}
                  src={`/${perform}.profile.png`}
                  alt={t(`${perform}.name`)}
                />
                <span
                  aria-hidden
                  className="text-center text-xs text-slate-400 sm:text-sm"
                >
                  {t(`${perform}.name`)}
                </span>
              </a>
            </Link>
          </Fade>
        ))}
      </div>
    </div>
  )
}
