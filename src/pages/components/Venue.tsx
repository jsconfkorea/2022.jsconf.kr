import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import { useRouter } from 'next/router'
import Fade from 'react-reveal/Fade'

export const Venue = () => {
  const { locale } = useRouter()
  const t = useTranslations('venue')

  return (
    <div className="container mx-auto flex max-w-2xl flex-col gap-12 sm:gap-16">
      <Fade bottom distance="1rem" duration={700}>
        <div className="mr-4 flex gap-2 place-self-center sm:gap-4">
          <Image
            className="inline-block aspect-square self-center"
            width={40}
            height={40}
            src="/venue.png"
            alt="venue icon"
            priority
          />
          <h2 className="text-4xl font-bold">{t('Venue')}</h2>
        </div>
      </Fade>

      <Fade bottom distance="1rem" duration={700}>
        <div className="flex gap-2 self-center">
          <Image
            className="inline-block aspect-square self-center sm:h-8 sm:w-8"
            width={24}
            height={24}
            src="/island.png"
            alt="island-icon"
            priority
          />
          <h3 className="text-xl">{t('location')}</h3>
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
      </div>
    </div>
  )
}
