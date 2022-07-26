import Footer from 'components/Footer'
import { Graphic } from 'components/Graphic'
import { Navbar } from 'components/Navbar'
import { Performs } from 'components/Performs'
import { Speakers } from 'components/Speakers'
import { Sponsors } from 'components/Sponsors'
import { Venue } from 'components/Venue'
import { Workshops } from 'components/Workshops'
import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import Link from 'next/link'
import { confetti, variation } from 'party-js'
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
              <div className="absolute h-full w-full bg-black opacity-60" />
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
                    {/* <Fade bottom duration={700} delay={450}>
                      <div className="flex justify-end gap-2.5 sm:gap-5">
                        <h2 className="inline text-lg sm:text-4xl">
                          {t('ticket')}
                        </h2>
                        <Image
                          className="inline-block aspect-square self-center sm:h-8 sm:w-8"
                          width={20}
                          height={20}
                          src="/ticket.png"
                          alt="ticket-icon"
                          priority
                        />
                      </div>
                    </Fade> */}
                  </div>
                </div>
              </div>
              <Fade bottom distance="1rem" duration={700} delay={450}>
                <div className="absolute bottom-28 w-full text-center sm:container sm:top-[58%] sm:text-right">
                  <Link href="/ticket">
                    <a
                      className="btn btn-primary mx-auto w-32 text-black sm:btn-lg sm:mr-6 sm:w-44"
                      onClick={({ currentTarget }) => {
                        confetti(currentTarget, {
                          count: variation.range(20, 60),
                        })
                      }}
                    >
                      {t('buy-tickets')}
                    </a>
                  </Link>
                </div>
              </Fade>
              <Fade duration={700} delay={1000}>
                <div className="absolute bottom-0 z-40 w-full">
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
              <Fade duration={700} delay={1500}>
                <a
                  href="https://www.instagram.com/doodlefingers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-1 right-1 z-40 flex flex-col text-right text-[10px] text-gray-400 hover:text-gray-100 sm:bottom-2 sm:right-2 sm:text-sm"
                >
                  <span className="text-[9px] text-gray-500 hover:text-gray-500 sm:text-xs">
                    interactive graphic by
                  </span>
                  @doodlefingers
                </a>
              </Fade>
            </div>
          </div>

          {/* Speakers */}
          <div className="grid min-h-screen bg-white p-16 px-6 pt-28">
            <Speakers />
          </div>

          {/* Workshops */}
          <div className="grid bg-white p-16 px-6">
            <Workshops />
          </div>

          {/* Performance */}
          <div className="grid bg-white p-16 px-6">
            <Performs />
          </div>

          {/* Sponsors */}
          <div className="grid min-h-screen bg-white p-16 px-6">
            <Sponsors />
          </div>

          {/* Venue */}
          <div className="grid min-h-screen bg-white p-16 px-0">
            <Venue />
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}
