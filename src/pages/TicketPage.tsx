import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { InferGetStaticPropsType } from 'next'
import { useTranslations } from 'next-intl'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
    'sold-out': '티켓이 매진되었습니다!',
    'thank-you':
      'JSConf Korea 2022를 향한 여러분의 관심과 성원에 감사드립니다.',
  },
  en: {
    ticket: 'Tickets',
    'korean-ticket': 'Buy with a KOREAN payment method',
    'foreign-ticket': 'Buy with a NON-KOREAN payment method',
    'sold-out': 'Tickets are SOLD OUT!',
    'thank-you': 'Thank you for your love and support for JSConf Korea 2022.',
  },
}

export default function TicketPage({ recordMap, pageName }: PageProps) {
  const { locale } = useRouter()
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

        <div className="mt-16 flex w-full flex-1 flex-col pt-16">
          <Fade bottom distance="1rem" duration={700}>
            <div className="flex flex-col items-center justify-center gap-8 px-8 sm:gap-12">
              <h2 className="text-4xl font-bold">{t('ticket')}</h2>
              <div className="flex flex-col items-center gap-4 text-center">
                <span className="text-xl font-semibold">{t('sold-out')}</span>
                <span className="break-words text-lg">{t('thank-you')}</span>
                <span className="text-sm">
                  {locale === 'en'
                    ? 'Check out the event announcement on'
                    : '행사 관련 공지는'}{' '}
                  <a
                    className="text-blue-500 hover:text-blue-400 hover:underline"
                    href="https://twitter.com/jsconfkorea"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {locale === 'en' ? 'Twitter' : '트위터'}
                  </a>
                  {locale === 'en' ? '.' : '에서도 확인할 수 있습니다.'}
                </span>
              </div>
            </div>
          </Fade>
          <div className="mt-16 flex flex-col items-center justify-center gap-3 px-6">
            <Fade bottom distance="1rem" duration={700} delay={100}>
              <a
                href="https://festa.io/events/e8QWVbxEybNJbJozFGgND6"
                className="btn btn-block bg-white px-2 normal-case text-black hover:bg-[#ffffff88] sm:btn-lg sm:w-[420px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('korean-ticket')}
              </a>
            </Fade>
            <Fade bottom distance="1rem" duration={700} delay={200}>
              <a
                href="https://ti.to/jsconfkorea/jsconf-korea-2022"
                className="btn btn-outline btn-block border-white px-2 normal-case text-white hover:bg-white hover:text-black sm:btn-lg sm:w-[420px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('foreign-ticket')}
              </a>
            </Fade>
          </div>
          <Fade bottom distance="1rem" duration={700} delay={300}>
            <NotionRenderer
              className="mt-16 !bg-black"
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
