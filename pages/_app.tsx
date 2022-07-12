import { NextIntlProvider } from 'next-intl'
import { AppProps } from 'next/app'
import '../styles/globals.css'

export default function ({ Component, pageProps }: AppProps) {
  const { messages } = pageProps

  return (
    <NextIntlProvider messages={messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  )
}
