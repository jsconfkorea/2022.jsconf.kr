import { Navbar } from 'components/Navbar'
import { messages } from 'locales/messages'
import { GetStaticProps } from 'next'
import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import Script from 'next/script'
import Fade from 'react-reveal/Fade'

export default function () {
  const t = useTranslations('hero')

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"
        strategy="beforeInteractive"
      />
      <div className="flex h-[100dvh] h-full w-full flex-row">
        <Navbar />

        {/* Body */}
        <div className="mt-14 flex-1 snap-y snap-mandatory overflow-y-auto">
          {/* Hero */}
          <div className="relative h-full snap-start bg-black text-white">
            <div className="container grid h-full w-full px-2 pr-6 pt-[25vh] text-right">
              <div className="flex flex-col gap-6 justify-self-end">
                <Fade bottom duration={700}>
                  <h1 className="self-end text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                    JSConf Korea 2022
                  </h1>
                </Fade>
                <div className="flex flex-col gap-2 self-end sm:gap-4">
                  <Fade bottom duration={700} delay={150}>
                    <div className="flex justify-end gap-2.5">
                      <h2 className="inline text-xl sm:text-4xl">
                        {t('date')}
                      </h2>
                      <Image
                        className="inline-block aspect-square self-center sm:h-8"
                        width={20}
                        height={20}
                        src="https://cloudflare-ipfs.com/ipfs/bafybeia3wcjrh2ec756iybf34giqhcjkesy2kbwnjb3v3fdqrilxzxykpy"
                        alt="calendar-icon"
                        priority
                      />
                    </div>
                  </Fade>
                  <Fade bottom duration={700} delay={300}>
                    <div className="flex justify-end gap-2.5">
                      <h2 className="inline text-lg sm:text-4xl">
                        {t('location')}
                      </h2>
                      <Image
                        className="inline-block aspect-square self-center sm:h-8"
                        width={20}
                        height={20}
                        src="https://cloudflare-ipfs.com/ipfs/bafybeic7ruprr7aq2w6kzo7l6ee73krt2itn4rad255w2i27shyrwjxaqi"
                        alt="island-icon"
                        priority
                      />
                    </div>
                  </Fade>
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
          <div className="grid h-full snap-start place-content-center bg-amber-400">
            <h1 className="text-center text-xl text-white">프로그램</h1>
          </div>

          {/* Sponsors */}
          <div className="grid h-full snap-start place-content-center bg-slate-500">
            <h1 className="text-center text-xl text-white">스폰서</h1>
          </div>

          {/* Footer */}
          <div className="grid h-72 snap-start place-content-center bg-red-400">
            <h1 className="text-center text-xl text-white">Footer</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: messages[locale],
    },
  }
}
