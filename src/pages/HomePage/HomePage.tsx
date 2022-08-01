import { Footer } from 'components/Footer'
import { Hero } from 'components/Hero'
import { Navbar } from 'components/Navbar'
import { Performs } from 'components/Performs'
import { Speakers } from 'components/Speakers'
import { Sponsors } from 'components/Sponsors'
import { Venue } from 'components/Venue'
import { Workshops } from 'components/Workshops'
import { useTranslations } from 'next-intl'
import 'react-notion-x/src/styles.css'

export default function HomePage() {
  const t = useTranslations('hero')

  return (
    <>
      <div className="flex w-full flex-row">
        <Navbar />

        <div className="flex-1 overflow-y-auto">
          <Hero />

          <Speakers />

          <Workshops />

          <Performs />

          <Sponsors />

          <Venue />

          <Footer />
        </div>
      </div>
    </>
  )
}
