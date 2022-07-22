import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import Fade from 'react-reveal/Fade'

const performs = ['jeonghyo', 'so-sun-park']

export const Performs = () => {
  const t = useTranslations('performance')

  return (
    <div className="container mx-auto flex max-w-2xl flex-col gap-12 sm:gap-16">
      <Fade bottom distance="1rem" duration={700}>
        <div className="flex gap-2 place-self-center sm:gap-4">
          <Image
            className="inline-block aspect-square self-center"
            width={40}
            height={40}
            src="/opening.png"
            alt="opening icon"
            priority
          />
          <h2 className="inline-block text-3xl font-bold">
            {t('Performance')}
          </h2>
        </div>
      </Fade>
      <div className="flex flex-row">
        {performs.map((perform, i) => (
          <Fade key={perform} bottom distance="1rem" delay={(i + 1) * 150}>
            <a
              href={t(`${perform}.link`)}
              className="flex flex-1 justify-center hover:!opacity-70"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col gap-4 sm:gap-8">
                <Image
                  className="aspect-square h-28 w-28 rounded-lg sm:h-40 sm:w-40"
                  width={200}
                  height={200}
                  src={`/${perform}.png`}
                  alt={t(`${perform}.name`)}
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-center text-sm font-medium text-slate-500 sm:text-lg">
                    {t(`${perform}.name`)}
                  </span>
                </div>
              </div>
            </a>
          </Fade>
        ))}
      </div>
    </div>
  )
}
