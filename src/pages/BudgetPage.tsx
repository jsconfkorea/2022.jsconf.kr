import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { getStaticProps } from 'pages/[pageName]'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'
import Fade from 'react-reveal/Fade'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function BudgetPage({ recordMap }: PageProps) {
  const title = `수입과 지출`
  const description = `JSConf Korea budget`

  return (
    <>
      <NextSeo title={title} description={description} />
      <div className="flex w-full flex-row">
        <Navbar />

        <div className="mt-16 w-full flex-1 bg-white text-white">
          <Fade bottom distance="1rem" duration={700}>
            <NotionRenderer
              className="!bg-white"
              recordMap={recordMap}
              fullPage
              disableHeader
              components={{
                nextLink: Link,
              }}
            />
          </Fade>

          <Footer />
        </div>
      </div>
    </>
  )
}
