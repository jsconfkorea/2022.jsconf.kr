import Footer from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { NextSeo } from 'next-seo'

export function NotFoundPage() {
  return (
    <>
      <NextSeo title={'Wrong Page'} />
      <div className="flex min-h-screen w-full flex-col">
        <Navbar />

        <div className="flex w-full flex-1 bg-white">
          <div className="grid w-full flex-1 justify-center place-self-center">
            <h1 className="text-9xl font-black">404</h1>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
