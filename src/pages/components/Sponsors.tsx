import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'

export const Sponsors = () => {
  const t = useTranslations('sponsors')

  return (
    <div className="container mx-auto flex max-w-2xl flex-col gap-12 sm:gap-16">
      <Fade bottom distance="1rem" duration={700}>
        <div className="mr-4 flex gap-2 place-self-center sm:gap-4">
          <Image
            className="inline-block aspect-square self-center"
            width={40}
            height={40}
            src="/sparkles.png"
            alt="sparkles-icon"
            priority
          />
          <h2 className="text-4xl font-bold">{t('Sponsors')}</h2>
        </div>
      </Fade>
      <Fade bottom distance="1rem" duration={500} delay={150}>
        <div className="flex flex-col gap-4 sm:gap-8">
          <h2 className="text-2xl font-semibold">{t('Gold Sponsor')}</h2>
          <Link href="https://imweb.me/">
            <a className="self-center" target="_blank">
              <Image
                width={200}
                height={100}
                src="/imweb.png"
                alt="imweb logo"
                priority
              />
            </a>
          </Link>
        </div>
      </Fade>
      <Fade bottom distance="1rem" duration={500} delay={300}>
        <div className="flex flex-col gap-4 sm:gap-8">
          <h2 className="text-2xl font-semibold">{t('Silver Sponsor')}</h2>
          <Link href="https://www.labnote.co/">
            <a className="self-center" target="_blank">
              <Image
                width={200}
                height={100}
                src="/atant.png"
                alt="atant logo"
                priority
              />
            </a>
          </Link>
        </div>
      </Fade>
      <Fade bottom distance="1rem" duration={700} delay={450}>
        <div className="flex flex-col gap-4 sm:gap-8">
          <h2 className="text-2xl font-semibold">{t('Bronze Sponsor')}</h2>
          <Link href="https://linepluscorp.com/">
            <a className="self-center" target="_blank">
              <Image
                width={200}
                height={100}
                src="/lineplus.png"
                alt="lineplus logo"
                priority
              />
            </a>
          </Link>
        </div>
      </Fade>
    </div>
  )
}
