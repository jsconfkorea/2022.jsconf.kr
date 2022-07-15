import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { useClickAway, useToggle } from 'react-use'

const menus = ['about', 'code-of-conduct', 'sponsorship']

export function Navbar() {
  const t = useTranslations('nav')
  const { pathname, query, locale } = useRouter()
  const [on, toggle] = useToggle(false)
  const ref = useRef(null)

  useClickAway(ref, () => {
    toggle(false)
  })

  return (
    <nav className="navbar absolute z-50 bg-white text-black drop-shadow-md">
      <Link href="/" className="aspect-square">
        <a className="aspect-square h-full px-1">
          <Image
            className="rounded-md"
            width={40}
            height={40}
            src="https://cloudflare-ipfs.com/ipfs/bafybeihif7fowjzxe7gqsnyhj2nqx5zgdcjyksqzqhc4i5x66he42pquli"
            alt="logo"
            priority
          />
        </a>
      </Link>

      <div className="flex-1" />

      <ul className="menu menu-horizontal hidden gap-1 p-0 sm:flex">
        {menus.map((menu) => (
          <li key={menu}>
            <Link href={`/${menu}`}>
              <a className="h-full p-2.5 text-lg">{t(menu)}</a>
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={{ pathname, query }}
            locale={locale === 'ko' ? 'en' : 'ko'}
          >
            <a className="w-28 justify-center p-2.5 text-lg">
              {locale === 'ko' ? t('english') : t('korean')}
            </a>
          </Link>
        </li>
      </ul>

      <div ref={ref} className="dropdown-end dropdown sm:hidden">
        <label
          tabIndex={0}
          className="swap-rotate btn swap btn-ghost btn-square"
        >
          <input
            checked={on}
            type="checkbox"
            onChange={({ currentTarget, currentTarget: { checked } }) => {
              if (!checked) currentTarget.blur()
              toggle(checked)
            }}
          />

          <svg
            className="swap-off fill-current"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box mt-4 w-[calc(100vw-16px)] bg-white p-2 shadow drop-shadow-md focus:visible"
        >
          {menus.map((menu) => (
            <li key={menu}>
              <Link href={`/${menu}`}>
                <a
                  className="justify-center p-2.5 text-lg"
                  onClick={() => toggle(false)}
                >
                  {t(menu)}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={{ pathname, query }}
              locale={locale === 'ko' ? 'en' : 'ko'}
            >
              <a className="justify-center p-2.5 text-lg">
                {locale === 'ko' ? t('english') : t('korean')}
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
