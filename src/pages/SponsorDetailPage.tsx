import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { getStaticProps } from 'pages/[pageName]'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'
import Fade from 'react-reveal/Fade'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function SponsorDetailPage({ recordMap, pageName }: PageProps) {
  // const t = useTranslations('sponsors')

  // const title = `${t(`${pageName}.name`)} | JSConf Korea 2022 🌈`
  // const description = `JSConf Korea 2022 ${t('Sponsors')}`

  return (
    <>
      {/* <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
        }}
      /> */}

      <div className="flex w-full flex-row">
        <Navbar />

        <div className="mt-32 w-full flex-1 text-white">
          <Fade bottom distance="1rem" duration={700}>
            <NotionRenderer
              className="!bg-black"
              recordMap={recordMap}
              fullPage
              darkMode
              disableHeader
              components={{
                // nextImage: Image,
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
