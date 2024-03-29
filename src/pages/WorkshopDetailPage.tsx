import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { URL } from 'lib/next-seo'
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

export default function WorkshopDetailPage({ recordMap, pageName }: PageProps) {
  const t = useTranslations('workshops')

  const title = `${t(`${pageName}.name`)} | JSConf Korea 2022 🌈`
  const description = `JSConf Korea 2022 ${t('Workshops')}`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          images: [
            {
              url: `${URL}/${pageName}.thumb.png`,
              alt: title,
              type: 'image/png',
              width: 1280,
              height: 640,
            },
          ],
        }}
      />

      <div className="flex w-full flex-row">
        <Navbar />

        <div className="speaker mt-16 w-full flex-1 text-white">
          <Fade bottom distance="1rem" duration={700}>
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
