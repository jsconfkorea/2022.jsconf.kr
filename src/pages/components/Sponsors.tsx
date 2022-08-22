import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import { Title } from './Title'

export const sponsors = {
  gold: [
    {
      name: 'imweb',
      link: 'https://imweb.me',
    },
  ],
  silver: [
    {
      name: 'gabia',
      link: 'https://company.gabia.com',
    },
    {
      name: 'atant',
      link: 'https://www.labnote.co',
    },
  ],
  bronze: [
    {
      name: 'lineplus',
      link: 'https://linepluscorp.com',
    },
  ],
}

export const Sponsors = () => {
  const t = useTranslations('sponsors')

  return (
    <div className="grid place-content-stretch gap-12 bg-black px-5 py-16 text-white sm:gap-16">
      <Title icon="sponsor" text={t('Sponsors')} />

      {/* List */}
      <div className="grid w-full max-w-xl gap-3 place-self-center sm:gap-4">
        {Object.entries(sponsors).map(([level, sponsors]) => (
          <Fade key={level} bottom distance="1rem" duration={500}>
            <div className="grid place-content-center gap-2 rounded-lg bg-white p-5 text-black sm:flex sm:place-content-start sm:gap-12 sm:px-12 sm:py-10">
              <h3 className="text-center text-sm font-semibold sm:place-self-center sm:text-lg">
                {t(level)}
              </h3>
              <div
                className={`grid grid-cols-${sponsors.length} gap-5 sm:flex-1 sm:justify-center`}
              >
                {sponsors.map(({ name, link }) => (
                  <Link key={name} href={`/sponsors/${name}`}>
                    <a
                      className="hover:opacity-80 sm:place-self-center"
                      // target="_blank"
                      // rel="noopener noreferrer"
                    >
                      <Image
                        className="w-24 sm:w-36"
                        width={200}
                        height={100}
                        src={`/${name}.png`}
                        alt={name}
                        priority
                      />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  )
}
