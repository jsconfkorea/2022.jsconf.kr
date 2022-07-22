import Footer from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { Workshops } from 'components/Workshops'
import { useTranslations } from 'next-intl'
import { NextSeo } from 'next-seo'
import 'react-notion-x/src/styles.css'

export function WorkshopsPage() {
  const t = useTranslations('workshops')

  return (
    <>
      <NextSeo title={t('Workshops')} />
      <div className="flex w-full flex-col">
        <Navbar />

        <div className="min-h-screen w-full flex-1 bg-white p-28 px-6 pt-32">
          <Workshops />
        </div>

        <Footer />
      </div>
    </>
  )
}
