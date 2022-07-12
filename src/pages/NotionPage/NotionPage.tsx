import { Navbar } from 'components/Navbar'
import { InferGetStaticPropsType } from 'next'
import Image from 'next/future/image'
import Link from 'next/link'
import { getStaticProps } from 'pages/[pageName]'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'
import Fade from 'react-reveal/Fade'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function ({ recordMap }: PageProps) {
  return (
    <>
      <div className="flex h-[100dvh] h-full w-full flex-row">
        <Navbar />

        <div className="mt-14 w-full flex-1 overflow-x-auto bg-white text-white">
          <Fade bottom distance="1rem" duration={700}>
            <NotionRenderer
              className="!bg-white"
              bodyClassName="!pt-32"
              recordMap={recordMap}
              fullPage
              // darkMode
              disableHeader
              components={{
                nextImage: Image,
                nextLink: Link,
              }}
            />
          </Fade>
        </div>
      </div>
    </>
  )
}
