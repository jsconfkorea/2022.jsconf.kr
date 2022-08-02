import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const menus = [
  'about',
  'ticket',
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

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.querySelector('html').style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <>
      <nav className="navbar fixed z-40 h-24 bg-gradient-to-b from-black to-transparent text-white">
        <Link href="/">
          <a className="m-2 h-full w-32 px-2 text-xl font-black leading-5 hover:opacity-80 sm:px-6">
            JSConf Korea
          </a>
        </Link>

        <div className="flex-1" />

        {/* Desktop */}
        <ul className="menu menu-horizontal hidden gap-0.5 p-0 lg:mr-2 lg:flex">
          {menus.map((menu) => (
            <li key={menu}>
              <Link href={`/${menu}`}>
                <a className="flex h-full justify-center rounded-lg hover:bg-[#ffffff1a] active:bg-[#efdb4f] active:text-black">
                  <span className="text-lg">{t(menu)}</span>
                </a>
              </Link>
            </li>
          ))}
          {pathname !== '/budget' && (
            <li>
              <Link
                href={{ pathname, query }}
                locale={locale === 'ko' ? 'en' : 'ko'}
                scroll={false}
              >
                <a className="flex w-28 justify-center gap-1.5 p-2.5 hover:bg-[#ffffff1a] active:bg-[#efdb4f] active:text-black">
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
          )}
        </ul>

        {/* Mobile */}
        <label className="swap-rotate btn swap btn-circle border-none bg-transparent hover:bg-transparent lg:hidden">
          <input type="checkbox" onClick={() => setIsOpen((v) => !v)} />

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </nav>
      <div className="">
        <ul
          className={`menu menu-vertical fixed top-0 left-0 z-30 flex h-screen max-h-screen w-full justify-start justify-items-start bg-black py-24 text-lg text-white transition-opacity duration-300 lg:hidden${
            isOpen ? ' opacity-100' : ' pointer-events-none opacity-0'
          }`}
        >
          {menus.map((menu) => (
            <li key={menu} className="flex-1">
              <Link href={`/${menu}`}>
                <a
                  className="mx-12 flex w-60 justify-center self-center rounded-lg p-3 hover:bg-[#ffffff1a] active:bg-[#efdb4f] active:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{t(menu)}</span>
                </a>
              </Link>
            </li>
          ))}
          {pathname !== '/budget' && (
            <li className="flex-1" onClick={() => setIsOpen(false)}>
              <Link
                href={{ pathname, query }}
                locale={targetLocale}
                scroll={false}
              >
                <a className="mx-12 flex w-60 justify-center self-center rounded-lg px-3 hover:bg-[#ffffff1a] active:bg-[#efdb4f] active:text-black">
                  <Image
                    src={`/${targetLocale}.png`}
                    width={20}
                    height={20}
                    alt={locale === 'ko' ? t('english') : t('korean')}
                  />
                  <span>{locale === 'ko' ? t('english') : t('korean')}</span>
                </a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}
