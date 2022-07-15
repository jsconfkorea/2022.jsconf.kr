import { SEO } from 'lib/next-seo'
import { useTranslations } from 'next-intl'
import { DefaultSeo } from 'next-seo'
import { PropsWithChildren } from 'react'

export function SEOProvider({ children }: PropsWithChildren<{}>) {
  const t = useTranslations('seo')

  return (
    <>
      <DefaultSeo {...SEO} description={t('description')} />
      {children}
    </>
  )
}
