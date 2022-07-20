import Footer from 'components/Footer'
import { Graphic } from 'components/Graphic'
import { Navbar } from 'components/Navbar'
import { Sponsors } from 'components/Sponsors'
import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import 'react-notion-x/src/styles.css'
import Fade from 'react-reveal/Fade'

export default function HomePage() {
  const t = useTranslations('hero')

  return (
    <>
      <div className="flex w-full flex-row">
        <Navbar />
        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {/* Hero */}

          <div className="relative bg-black">
            <Graphic />

            <div className="relative z-[40] h-screen bg-transparent text-white">
              <div className="absolute h-full w-full bg-black opacity-50" />
              <div className="container grid h-full w-full px-2 pr-6 pt-[33vh] text-right">
                <div className="flex flex-col gap-6 justify-self-end sm:gap-12">
                  <Fade bottom duration={700}>
                    <h1 className="self-end text-4xl font-bold leading-tight tracking-tight mix-blend-exclusion sm:text-6xl">
                      JSConf Korea 2022
                    </h1>
                  </Fade>
                  <div className="flex flex-col gap-2 self-end sm:gap-6">
                    <Fade bottom duration={700} delay={150}>
                      <div className="flex justify-end gap-2.5 sm:gap-5">
                        <h2 className="inline text-xl sm:text-4xl">
                          {t('date')}
                        </h2>
                        <Image
                          className="inline-block aspect-square self-center sm:h-8 sm:w-8"
                          width={20}
                          height={20}
                          src="/calendar.png"
                          alt="calendar-icon"
                          priority
                        />
                      </div>
                    </Fade>
                    <Fade bottom duration={700} delay={300}>
                      <div className="flex justify-end gap-2.5 sm:gap-5">
                        <h2 className="inline text-lg sm:text-4xl">
                          {t('location')}
                        </h2>
                        <Image
                          className="inline-block aspect-square self-center sm:h-8 sm:w-8"
                          width={20}
                          height={20}
                          src="/island.png"
                          alt="island-icon"
                          priority
                        />
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>

            <Fade duration={700} delay={1000}>
              <div className="absolute bottom-0 w-full">
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
          </div>

          {/* Program */}
          {/* <div className="grid h-full snap-start place-content-center bg-amber-400">
            <h1 className="text-center text-xl text-white">프로그램</h1>
          </div> */}

          {/* Sponsors */}
          <div className="grid bg-white p-24 px-8">
            <Sponsors />
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}
