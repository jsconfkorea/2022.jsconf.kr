import Footer from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { Speakers } from 'components/Speakers'
import { useTranslations } from 'next-intl'
import { NextSeo } from 'next-seo'
import 'react-notion-x/src/styles.css'

export function SpeakersPage() {
  const t = useTranslations('speakers')

  return (
    <>
      <NextSeo title={t('Speakers')} />
      <div className="flex w-full flex-col">
        <Navbar />

        <div className="mt-14 w-full flex-1 bg-white p-28 px-8">
          <Speakers />
        </div>

        <Footer />
      </div>
    </>
  )
}
