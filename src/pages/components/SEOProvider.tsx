import { SEO, URL } from 'lib/next-seo'
import { useTranslations } from 'next-intl'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'
import { isServer } from 'utils/isServer'

export function SEOProvider({ children }: PropsWithChildren<{}>) {
  const t = useTranslations('seo')
  const { asPath } = useRouter()

  return (
    <>
      <DefaultSeo
        {...SEO}
        description={t('description')}
        canonical={`${URL}${isServer() ? asPath : window.location.pathname}`}
      />
      {children}
    </>
  )
}
