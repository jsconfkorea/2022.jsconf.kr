import { Graphic } from 'components/Graphic'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { confetti, variation } from 'party-js'
import 'react-notion-x/src/styles.css'
import Fade from 'react-reveal/Fade'

export function Hero() {
  const t = useTranslations('hero')

  return (
    <div className="relative bg-black">
      <Graphic />

      <div className="relative z-20 h-screen bg-transparent text-white">
        <div className="absolute h-full w-full bg-black opacity-60" />
        <div className="grid h-full w-full place-content-center">
          <div className="grid gap-5 text-center sm:gap-8">
            <Fade bottom duration={700}>
              <h1 className="w-72 justify-self-center text-center text-[40px] font-black leading-10 mix-blend-exclusion sm:w-auto sm:text-8xl">
                JSConf Korea 2022
              </h1>
            </Fade>
            <div className="flex flex-col gap-1 text-sm font-semibold sm:gap-2.5 sm:text-xl">
              <Fade bottom duration={700} delay={150}>
                <h2 className="inline">{t('date')}</h2>
              </Fade>
              <Fade bottom duration={700} delay={300}>
                <h2 className="inline">{t('location')}</h2>
              </Fade>
              <Fade bottom distance="1rem" duration={700} delay={450}>
                <Link href="/ticket">
                  <a
                    className="sm:mt-15 btn mx-auto mt-8 w-32 bg-white text-xs text-black hover:bg-slate-500 sm:btn-lg sm:w-44"
                    onClick={({ currentTarget }) => {
                      confetti(currentTarget, {
                        count: variation.range(20, 60),
                      })
                    }}
                  >
                    {t('buy-tickets')}
                  </a>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
        <Fade duration={700} delay={1000}>
          <div className="absolute bottom-0 z-20 w-full">
            <svg
              className="fill:white mx-auto h-10 w-10 animate-bounce p-2 will-change-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Fade>
        <Fade duration={700} delay={1200}>
          <a
            href="https://www.instagram.com/doodlefingers/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-1 right-1 z-20 flex flex-col text-right text-[10px] text-gray-400 hover:text-gray-100 sm:bottom-2 sm:right-2 sm:text-sm"
          >
            <span className="text-[9px] text-gray-500 hover:text-gray-500 sm:text-xs">
              interactive graphic by
            </span>
            @doodlefingers
          </a>
        </Fade>
      </div>
    </div>
  )
}
