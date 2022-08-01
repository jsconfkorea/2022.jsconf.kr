import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import Link from 'next/link'

const socials = [
  {
    name: 'twitter',
    link: 'https://twitter.com/jsconfkorea',
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/jsconfkorea',
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/jsconf.korea',
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/channel/UCzoVCacndDCfGDf41P-z0iA',
  },
  {
    name: 'github',
    link: 'https://github.com/jsconfkorea',
  },
]

export function Footer() {
  const t = useTranslations('nav')

  return (
    <div className="grid place-content-stretch gap-8 bg-black p-12 text-white sm:gap-5 sm:p-16 sm:pb-8">
      {/* Socials */}
      <div className="flex gap-3 place-self-center sm:place-self-end">
        {socials.map(({ link, name }) => (
          <Link href={link} key={name}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="group grid h-9 w-9 place-content-center rounded-full bg-[#232323]"
            >
              <Image
                className="!group-hover:text-white"
                width={16}
                height={16}
                src={`/${name}.svg`}
                alt={name}
              />
            </a>
          </Link>
        ))}
      </div>

      <div className="grid gap-3 sm:h-fit sm:grid-cols-3">
        {/* History */}
        <div className="flex gap-4 place-self-center sm:order-3 sm:justify-self-end">
          <Link href="https://2019.jsconfkorea.com">
            <a
              className="text-sm underline hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              2019
            </a>
          </Link>
          <Link href="https://2020.jsconf.kr">
            <a
              className="text-sm underline hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              2020
            </a>
          </Link>
        </div>

        {/* Links */}
        <div className="flex gap-4 place-self-center sm:order-1 sm:justify-self-start">
          <Link href="/code-of-conduct">
            <a className="text-sm hover:opacity-80">{t('code-of-conduct')}</a>
          </Link>
          <Link href="/privacy-policy">
            <a className="text-sm hover:opacity-80">{t('privacy-policy')}</a>
          </Link>
        </div>

        {/* CopyRight */}
        <div className="flex gap-4 place-self-center sm:order-2">
          <span className="text-xs text-[#404040]">
            © COPYRIGHT JSCONF KOREA | 2019 - {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </div>
  )
}
