import { Footer } from 'components/Footer'
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

        <div className="my-16 min-h-screen flex-1">
          <Speakers />
        </div>

        <Footer />
      </div>
    </>
  )
}
