import { URL } from 'lib/next-seo'
import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Fade from 'react-reveal/Fade'
import { Title } from './Title'

export const Venue = () => {
  const { locale } = useRouter()
  const t = useTranslations('venue')

  return (
    <div className="grid place-content-center gap-12 bg-black px-5 py-16 text-white sm:gap-16">
      <Title icon="venue" text={t('Venue')} />

      <div className="grid max-w-4xl gap-6 sm:grid-cols-2">
        {/* Google map */}
        <Fade bottom distance="1rem" duration={700}>
          <div className="flex flex-col overflow-hidden rounded-lg sm:row-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6329.149349104078!2d126.95384186044502!3d37.51794849902677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca107bd0eb5d1%3A0xa1a994a949cf6697!2sNodeulseom%20Island!5e0!3m2!1sen!2skr!4v1658604684351!5m2!1sen!2skr"
              className="aspect-[2/1] w-full hover:opacity-80 sm:aspect-auto sm:h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="grid h-16 place-content-center bg-[#d9d9d91a] sm:h-24">
              <span className="text-sm sm:text-lg">{t('location')}</span>
            </div>
          </div>
        </Fade>
        {[...Array(8)].map((_, i) => (
          <Fade
            key={i}
            bottom
            distance="1rem"
            duration={500}
            delay={(i + 1) * 100}
          >
            <Link href={`${URL}/nodeul${i + 1}.png`}>
              <a
                className="hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-lg"
                  width={800}
                  height={400}
                  src={`/nodeul${i + 1}.png`}
                  alt="Nodeul Island"
                />
              </a>
            </Link>
          </Fade>
        ))}
      </div>

      {/* <Fade bottom distance="1rem" duration={700}>
        <div className="grid place-content-center gap-3 rounded-lg bg-[#101010] p-5">
          <h3 className="text-center text-sm font-semibold">{t('location')}</h3>
          <Link href="https://www.google.com/maps?ll=37.517973,126.957735&z=15&t=m&hl=en&gl=KR&mapclient=embed&cid=11649005365979211415">
            <a
              className="btn btn-md h-9 bg-white text-black hover:bg-slate-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('google-map')}
            </a>
          </Link>
        </div>
      </Fade>

      <Fade bottom distance="1rem" duration={700}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6329.149349104078!2d126.95384186044502!3d37.51794849902677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca107bd0eb5d1%3A0xa1a994a949cf6697!2sNodeulseom%20Island!5e0!3m2!1sen!2skr!4v1658604684351!5m2!1sen!2skr"
          className="h-96 w-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Fade>

      <Fade bottom distance="1rem" duration={700}>
        <div className="flex flex-col gap-6">
          <span className="px-6">{t('description')}</span>
          {locale === 'en' && (
            <span className="px-6">
              For traveling in Seoul, checkout&nbsp;
              <a
                href="https://2019.jsconfkorea.com/en/seoul/"
                className="text-blue-400 underline hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </span>
          )}
        </div>
      </Fade>

      <div className="grid">
        {[...Array(8)].map((_, i) => (
          <Fade
            key={i}
            bottom
            distance="1rem"
            duration={500}
            delay={(i + 1) * 100}
          >
            <Image
              className=""
              width={800}
              height={400}
              src={`/nodeul${i + 1}.png`}
              alt="Nodeul Island"
            />
          </Fade>
        ))}
      </div> */}
    </div>
  )
}
