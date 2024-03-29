import { GoogleAnalytics } from 'components/GoogleAnalytics'
import { SEOProvider } from 'components/SEOProvider'
import { messages } from 'locales/messages'
import { NextIntlProvider } from 'next-intl'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import 'pretendard/dist/web/static/pretendard.css'
import 'styles/globals.css'
import { isProd } from 'utils/isProd'
import { isServer } from 'utils/isServer'

if (!isServer()) {
  console.log('%c👋', 'font-size: 10rem')
}

export default function App({
  Component,
  pageProps,
}: AppProps<{ messages: typeof messages['en'] }>) {
  const { locale } = useRouter()

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <NextIntlProvider
        messages={pageProps.messages ?? messages[locale]}
        locale={locale}
      >
        <SEOProvider>
          <Component {...pageProps} />
        </SEOProvider>
      </NextIntlProvider>

      {isProd && <GoogleAnalytics id="G-ZTPXBNHJF9" />}
    </>
  )
}
