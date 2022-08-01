import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { InferGetStaticPropsType } from 'next'
import { useTranslations } from 'next-intl'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { getStaticProps } from 'pages/[pageName]'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'
import Fade from 'react-reveal/Fade'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export const ticket = {
  ko: {
    ticket: '티켓',
    'korean-ticket': '국내 결제 수단으로 티켓 구매',
    'foreign-ticket': '해외 결제 수단으로 티켓 구매',
  },
  en: {
    ticket: 'Tickets',
    'korean-ticket': 'Buy with a KOREAN payment method',
    'foreign-ticket': 'Buy with a NON-KOREAN payment method',
  },
}

export default function TicketPage({ recordMap, pageName }: PageProps) {
  const t = useTranslations('ticket')

  const title = `${t(`ticket`)} | JSConf Korea 2022 🌈`
  const description = `JSConf Korea 2022 ${t('ticket')}`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          // images: [
          //   {
          //     url: `${URL}/${pageName}.thumb.png`,
          //     alt: title,
          //     type: 'image/png',
          //     width: 1280,
          //     height: 640,
          //   },
          // ],
        }}
      />
      <div className="flex w-full flex-row text-white">
        <Navbar />

        <div className="mt-16 flex w-full flex-1 flex-col gap-12 pt-16">
          <Fade bottom distance="1rem" duration={700}>
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              <Image
                src="/ticket.png"
                width={40}
                height={40}
                alt="Ticket icon"
              />
              <h2 className="text-4xl font-bold">{t('ticket')}</h2>
            </div>
          </Fade>
          <div className="flex flex-col items-center justify-center gap-6 px-6">
            <Fade bottom distance="1rem" duration={700} delay={100}>
              <a
                href="https://festa.io/events/e8QWVbxEybNJbJozFGgND6"
                className="btn btn-block px-2 normal-case sm:btn-lg sm:w-[420px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('korean-ticket')}
              </a>
            </Fade>
            <Fade bottom distance="1rem" duration={700} delay={200}>
              <a
                href="https://ti.to/jsconfkorea/jsconf-korea-2022"
                className="btn btn-block px-2 normal-case sm:btn-lg sm:w-[420px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('foreign-ticket')}
              </a>
            </Fade>
          </div>
          <Fade bottom distance="1rem" duration={700} delay={300}>
            <NotionRenderer
              className="!bg-black"
              recordMap={recordMap}
              fullPage
              darkMode
              disableHeader
              components={{
                nextImage: Image,
                nextLink: Link,
              }}
              forceCustomImages
            />
          </Fade>

          <Footer />
        </div>
      </div>
    </>
  )
}
