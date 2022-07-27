import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'

const workshops = ['jeongho-park', 'subeom-choi', 'jiyeon-noh']

export const Workshops = () => {
  const t = useTranslations('workshops')

  return (
    <div className="container mx-auto flex max-w-2xl flex-col gap-12 sm:gap-16">
      <Fade bottom distance="1rem" duration={700}>
        <div className="mr-4 flex gap-2 place-self-center sm:gap-4">
          <Image
            className="inline-block aspect-square self-center"
            width={40}
            height={40}
            src="/workshops.png"
            alt="workshop icon"
            priority
          />
          <h2 className="text-4xl font-bold">{t('Workshops')}</h2>
        </div>
      </Fade>
      {workshops.map((workshop, i) => (
        <Fade
          key={workshop}
          bottom
          distance="1rem"
          duration={500}
          delay={(i + 1) * 100}
        >
          <Link href={`/workshops/${workshop}`}>
            <a className="self-center hover:opacity-70">
              <div className="flex gap-4 sm:gap-8">
                <Image
                  className="aspect-square h-20 w-20 rounded-lg sm:h-40 sm:w-40"
                  width={200}
                  height={200}
                  src={`/${workshop}.png`}
                  alt={t(`${workshop}.name`)}
                />
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-md font-semibold leading-5 sm:text-2xl">
                    {t(`${workshop}.title`)}
                  </h3>
                  <span className="text-sm font-medium text-slate-500 sm:text-lg">
                    {t(`${workshop}.name`)}
                  </span>
                </div>
              </div>
            </a>
          </Link>
        </Fade>
      ))}
    </div>
  )
}