import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import Link from 'next/link'

export default function Footer() {
  const t = useTranslations('nav')

  return (
    <>
      {/* Footer */}
      <div className="flex h-80 snap-start justify-start bg-zinc-800 p-8 text-white sm:h-72 sm:p-16">
        <div className="grid w-full gap-8 self-center sm:grid-cols-2 sm:gap-x-4 sm:gap-y-16">
          <div className="flex flex-col gap-4 text-lg sm:flex-row sm:gap-8 sm:text-xl">
            <Link href="/privacy-policy">
              <a className="flex gap-2 hover:opacity-50">
                <Image
                  className="self-center"
                  src={`/privacy-policy.png`}
                  width={24}
                  height={24}
                  alt="privacy-policy"
                />
                <span className="text-lg">{t('privacy-policy')}</span>
              </a>
            </Link>
            <Link href="/code-of-conduct">
              <a className="flex gap-2 hover:opacity-50">
                <Image
                  className="self-center"
                  src={`/code-of-conduct.png`}
                  width={24}
                  height={24}
                  alt="code-of-conduct"
                />
                <span className="text-lg">{t('code-of-conduct')}</span>
              </a>
            </Link>
          </div>
          <div className="flex gap-4 sm:justify-end">
            <a href="mailto:contact@jsconf.kr" className="hover:opacity-50">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail stroke-white"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/jsconfkorea"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-50"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-facebook stroke-white"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/jsconf.korea/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-50"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram stroke-white"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://twitter.com/jsconfkorea"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-50"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-twitter stroke-white"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCzoVCacndDCfGDf41P-z0iA"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-50"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-youtube stroke-white"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a
              href="https://github.com/jsconfkorea"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-50"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github stroke-white"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
          <div className="flex gap-4 text-lg">
            <a
              href="https://2019.jsconfkorea.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-50"
            >
              2019
            </a>
            <a
              href="https://2020.jsconf.kr/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-50"
            >
              2020
            </a>
          </div>
          <div className="text-sm sm:text-right sm:text-lg">
            © COPYRIGHT JSCONF KOREA | 2019 - {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </>
  )
}
