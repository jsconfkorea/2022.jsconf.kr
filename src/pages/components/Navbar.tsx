import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const menus = [
  'about',
  'speakers',
  'workshops',
  'sponsorship',
  'scholarship',
  'code-of-conduct',
]

export function Navbar() {
  const t = useTranslations('nav')
  const { pathname, query, locale } = useRouter()

  const targetLocale = locale === 'en' ? 'ko' : 'en'

  return (
    <nav className="navbar fixed z-50 bg-white text-black drop-shadow-md">
      <Link href="/" className="aspect-square">
        <a className="aspect-square h-full px-1">
          <Image
            className="rounded-md"
            width={40}
            height={40}
            src="/logo.png"
            alt="logo"
            priority
          />
        </a>
      </Link>

      <div className="flex-1" />

      <ul className="menu menu-horizontal hidden gap-1 p-0 lg:flex">
        {menus.map((menu) => (
          <li key={menu}>
            <Link href={`/${menu}`}>
              <a className="flex h-full gap-1.5 p-2.5">
                <Image src={`/${menu}.png`} width={18} height={18} alt={menu} />
                <span className="text-lg">{t(menu)}</span>
              </a>
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={{ pathname, query }}
            locale={locale === 'ko' ? 'en' : 'ko'}
            scroll={false}
          >
            <a className="flex w-28 justify-center gap-1.5 p-2.5">
              <Image
                src={`/${targetLocale}.png`}
                width={18}
                height={18}
                alt={locale === 'ko' ? t('english') : t('korean')}
              />
              <span className="text-lg">
                {locale === 'ko' ? t('english') : t('korean')}
              </span>
            </a>
          </Link>
        </li>
      </ul>

      <button className="dropdown-end dropdown lg:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-square">
          <svg
            className="fill-current"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box mt-4 w-[calc(100vw-16px)] bg-white p-2 shadow drop-shadow-md focus:visible"
        >
          {menus.map((menu) => (
            <li
              key={menu}
              onClick={() => {
                ;(document.activeElement as HTMLElement)?.blur()
              }}
            >
              <Link href={`/${menu}`}>
                <a className="flex justify-center gap-2 p-2.5">
                  <Image
                    src={`/${menu}.png`}
                    width={20}
                    height={20}
                    alt={menu}
                  />
                  <span className="text-lg">{t(menu)}</span>
                </a>
              </Link>
            </li>
          ))}
          <li
            onClick={() => {
              ;(document.activeElement as HTMLElement)?.blur()
            }}
          >
            <Link
              href={{ pathname, query }}
              locale={targetLocale}
              scroll={false}
            >
              <a className="justify-center p-2.5 text-lg">
                <Image
                  src={`/${targetLocale}.png`}
                  width={20}
                  height={20}
                  alt={locale === 'ko' ? t('english') : t('korean')}
                />
                <span className="text-lg">
                  {locale === 'ko' ? t('english') : t('korean')}
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </button>
    </nav>
  )
}
