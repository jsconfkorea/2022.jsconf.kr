import Image from 'next/future/image'
import Fade from 'react-reveal/Fade'

type Props = {
  icon: string
  text: string
}

export const Title = ({ icon, text }: Props) => {
  return (
    <div className="grid gap-4 sm:gap-5">
      <Fade bottom distance="1rem" duration={700}>
        <div className="grid h-16 w-16 place-content-center place-self-center rounded-full bg-[#FFFFFF1a] sm:h-20 sm:w-20">
          <Image
            className="inline-block aspect-square h-8 w-8 sm:h-10 sm:w-10"
            width={50}
            height={50}
            src={`/${icon}.png`}
            alt={icon}
            priority
          />
        </div>
      </Fade>
      <Fade bottom distance="1rem" duration={700} delay={200}>
        <h2 className="text-center text-lg font-bold sm:text-2xl">{text}</h2>
      </Fade>
    </div>
  )
}
