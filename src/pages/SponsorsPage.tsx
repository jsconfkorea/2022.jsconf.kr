import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { Sponsors } from 'components/Sponsors'
import { useTranslations } from 'next-intl'
import { NextSeo } from 'next-seo'
import 'react-notion-x/src/styles.css'

export function SponsorsPage() {
  const t = useTranslations('sponsors')

  return (
    <>
      <NextSeo title={t('Sponsors')} />
      <div className="flex w-full flex-col">
        <Navbar />

        <div className="min-h-screen w-full flex-1 bg-white p-28 px-6 pt-32">
          <Sponsors />
        </div>

        <Footer />
      </div>
    </>
  )
}
