import Script from 'next/script'

type Props = {
  id: string
}

export const GoogleAnalytics = ({ id }: Props) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script id="gtag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${id}');`}
      </Script>
      <Script
        async
        defer
        data-website-id="19c44ce7-1b3d-462a-b7b9-47f7e86849d4"
        src="https://umami.ysm.dev/umami.js"
      ></Script>
    </>
  )
}
