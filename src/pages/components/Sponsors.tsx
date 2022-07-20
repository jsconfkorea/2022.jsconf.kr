import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import Link from 'next/link'

export const Sponsors = () => {
  const t = useTranslations('sponsors')

  return (
    <div className="container mx-auto flex max-w-2xl flex-col gap-12 sm:gap-16">
      <div className="flex gap-2 sm:gap-4">
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
      <div className="flex flex-col gap-4 sm:gap-8">
        <h2 className="text-2xl font-semibold">{t('Gold Sponsor')}</h2>
        <Link href="/sponsors/imweb">
          <a className="self-center">
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
      <div className="flex flex-col gap-4 sm:gap-8">
        <h2 className="text-2xl font-semibold">{t('Silver Sponsor')}</h2>
        <Link href="/sponsors/imweb">
          <a className="self-center">
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
      <div className="flex flex-col gap-4 sm:gap-8">
        <h2 className="text-2xl font-semibold">{t('Bronze Sponsor')}</h2>
        <Link href="/sponsors/imweb">
          <a className="self-center">
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
    </div>
  )
}
