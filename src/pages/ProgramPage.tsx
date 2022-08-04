import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { useTranslations } from 'next-intl'
import { NextSeo } from 'next-seo'
import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const program = {
  ko: {
    program: '프로그램',
  },
  en: {
    program: 'Program',
  },
}

export function ProgramPage() {
  const t = useTranslations('program')
  const { query, replace } = useRouter()

  const day = ['1', '2'].includes(query.day as string)
    ? (query.day as string)
    : '1'
  const room = ['M', 'A', 'C'].includes(query.room as string)
    ? (query.room as string)
    : 'M'

  return (
    <>
      <NextSeo title={t('program')} />

      <div className="flex min-h-screen w-full flex-col">
        <Navbar />

        <div className="mt mt-44 flex w-full flex-1 bg-black text-white">
          <div className="container flex flex-col justify-center">
            <h1 className="text-center text-4xl font-bold">{t('program')}</h1>

            <div className="relative mt-8 grid h-12 w-80 grid-flow-col grid-cols-2 self-center rounded-full bg-[#252525] p-0.5 text-sm font-semibold text-white">
              <div
                className={`ease-[cubic-bezier(0.34, 1.56, 0.64, 1)] absolute m-0.5 h-[calc(100%-4px)] w-40 rounded-full bg-black transition ease-in-out ${
                  day === '2' ? 'translate-x-[calc(100%-4px)]' : ''
                }`}
              ></div>
              <button
                className={`z-10 flex h-full items-center justify-center rounded-full ${
                  day === '1' ? '' : 'opacity-40'
                }`}
                onClick={() =>
                  replace({ query: { ...query, day: '1' } }, undefined, {
                    shallow: true,
                  })
                }
              >
                2022.9.16 금
              </button>
              <button
                className={`z-10 flex h-full items-center justify-center rounded-full ${
                  day === '2' ? '' : 'opacity-40'
                }`}
                onClick={() =>
                  replace({ query: { ...query, day: '2' } }, undefined, {
                    shallow: true,
                  })
                }
              >
                2022.9.17 토
              </button>
            </div>

            <div className="relative mt-16 grid max-w-4xl grid-cols-3 gap-5 place-self-center lg:w-full lg:grid-cols-4 lg:px-5">
              <button
                className={`${
                  room === 'M' ? 'underline opacity-100' : ''
                } underline-offset-8 opacity-60 lg:col-span-2 lg:text-white lg:no-underline lg:opacity-100`}
                onClick={() =>
                  replace({ query: { ...query, room: 'M' } }, undefined, {
                    shallow: true,
                  })
                }
              >
                다목적 홀 숲
              </button>
              <button
                className={`${
                  room === 'A' ? 'underline opacity-100' : ''
                } underline-offset-8 opacity-60 lg:text-white lg:no-underline lg:opacity-100`}
                onClick={() =>
                  replace({ query: { ...query, room: 'A' } }, undefined, {
                    shallow: true,
                  })
                }
              >
                세미나실 A
              </button>
              <button
                className={`${
                  room === 'C' ? 'underline opacity-100' : ''
                } underline-offset-8 opacity-60 lg:text-white lg:no-underline lg:opacity-100`}
                onClick={() =>
                  replace({ query: { ...query, room: 'C' } }, undefined, {
                    shallow: true,
                  })
                }
              >
                세미나실 C
              </button>
            </div>

            <div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-5 self-center px-5 lg:grid-cols-4 lg:gap-x-8">
              <div className="grid gap-1.5 rounded-xl bg-[#191919] p-6 lg:col-span-4">
                <div className="grid grid-cols-2 gap-1.5 text-sm lg:grid-flow-col lg:grid-cols-3">
                  <span className="opacity-70">10:30 - 11:00</span>
                  <span className="justify-self-end opacity-70 lg:order-3">
                    30분
                  </span>
                  <span className="font-semibold opacity-100 lg:justify-self-center">
                    참가자등록
                  </span>
                </div>
              </div>

              <div className="grid gap-1.5 rounded-xl bg-[#191919] p-6 lg:col-span-4">
                <div className="grid grid-cols-2 gap-1.5 text-sm lg:grid-flow-col lg:grid-cols-3">
                  <span className="opacity-70">11:00 - 11:30</span>
                  <span className="justify-self-end opacity-70 lg:order-3">
                    30분
                  </span>
                  <span className="font-semibold opacity-100 lg:justify-self-center">
                    오프닝 및 오프닝 공연
                  </span>
                </div>
              </div>

              {day === '1' && (
                <>
                  <Link href="/">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">11:30 - 11:55</span>
                        <span className="">25분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">
                          아무도 이야기 하지 않는 웹 성능 지표의 비밀
                        </span>
                      </div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a
                      className={`${
                        room === 'A' ? 'flex' : 'hidden'
                      } group min-h-[436px] flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:row-span-3 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">11:30 - 13:00</span>
                        <span className="">90분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">워크샵</span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a
                      className={`${
                        room === 'C' ? 'flex' : 'hidden'
                      } group min-h-[436px] flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:row-span-3 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">11:30 - 13:00</span>
                        <span className="">90분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">워크샵</span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">12:00 - 12:25</span>
                        <span className="">25분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">
                          아무도 이야기 하지 않는 웹 성능 지표의 비밀
                        </span>
                      </div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">12:30 - 12:55</span>
                        <span className="">25분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">
                          아무도 이야기 하지 않는 웹 성능 지표의 비밀
                        </span>
                      </div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>

                  <div className="grid gap-1.5 rounded-xl bg-[#191919] p-6 lg:col-span-4">
                    <div className="grid grid-cols-2 gap-1.5 text-sm lg:grid-flow-col lg:grid-cols-3">
                      <span className="opacity-70">13:00 - 14:30</span>
                      <span className="justify-self-end opacity-70 lg:order-3">
                        90분
                      </span>
                      <span className="font-semibold opacity-100 lg:justify-self-center">
                        점심시간
                      </span>
                    </div>
                  </div>

                  <Link href="/">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">14:30 - 14:55</span>
                        <span className="">25분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">
                          아무도 이야기 하지 않는 웹 성능 지표의 비밀
                        </span>
                      </div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a
                      className={`${
                        room === 'A' ? 'flex' : 'hidden'
                      } group min-h-[436px] flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:row-span-3 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">11:30 - 13:00</span>
                        <span className="">90분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">워크샵</span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a
                      className={`${
                        room === 'C' ? 'flex' : 'hidden'
                      } group min-h-[436px] flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:row-span-3 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">11:30 - 13:00</span>
                        <span className="">90분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">워크샵</span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">14:30 - 14:55</span>
                        <span className="">25분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">
                          아무도 이야기 하지 않는 웹 성능 지표의 비밀
                        </span>
                      </div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">14:30 - 14:55</span>
                        <span className="">25분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">
                          아무도 이야기 하지 않는 웹 성능 지표의 비밀
                        </span>
                      </div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">14:30 - 14:55</span>
                        <span className="">25분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">
                          아무도 이야기 하지 않는 웹 성능 지표의 비밀
                        </span>
                      </div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:row-span-3 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">14:30 - 14:55</span>
                        <span className="">25분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">네트워킹</span>
                      </div>
                      {/* <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div> */}
                    </a>
                  </Link>

                  <Link href="/">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">14:30 - 14:55</span>
                        <span className="">25분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">
                          아무도 이야기 하지 않는 웹 성능 지표의 비밀
                        </span>
                      </div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">14:30 - 14:55</span>
                        <span className="">25분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">
                          아무도 이야기 하지 않는 웹 성능 지표의 비밀
                        </span>
                      </div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>
                </>
              )}

              {day === '2' && (
                <>
                  <Link href="/">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">11:30 - 11:55</span>
                        <span className="">25분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">
                          아무도 이야기 하지 않는 웹 성능 지표의 비밀
                        </span>
                      </div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a
                      className={`${
                        room === 'A' ? 'flex' : 'hidden'
                      } group min-h-[436px] flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:row-span-3 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">11:30 - 13:00</span>
                        <span className="">90분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">워크샵</span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a
                      className={`${
                        room === 'C' ? 'flex' : 'hidden'
                      } group min-h-[436px] flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:row-span-3 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">11:30 - 13:00</span>
                        <span className="">90분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">워크샵</span>
                      </div>
                      <div className="flex-1"></div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">12:00 - 12:25</span>
                        <span className="">25분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">
                          아무도 이야기 하지 않는 웹 성능 지표의 비밀
                        </span>
                      </div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/">
                    <a
                      className={`${
                        room === 'M' ? 'flex' : 'hidden'
                      } group flex-col gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white lg:col-span-2 lg:!flex lg:gap-3`}
                    >
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">12:30 - 12:55</span>
                        <span className="">25분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">
                          아무도 이야기 하지 않는 웹 성능 지표의 비밀
                        </span>
                      </div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>

                  <div className="grid gap-1.5 rounded-xl bg-[#191919] p-6 lg:col-span-4">
                    <div className="grid grid-cols-2 gap-1.5 text-sm lg:grid-flow-col lg:grid-cols-3">
                      <span className="opacity-70">13:00 - 14:30</span>
                      <span className="justify-self-end opacity-70 lg:order-3">
                        90분
                      </span>
                      <span className="font-semibold opacity-100 lg:justify-self-center">
                        점심시간
                      </span>
                    </div>
                  </div>

                  <Link href="/">
                    <a className="group grid gap-1.5 rounded-xl border border-[#2f2f2f] bg-transparent p-6 hover:border-white">
                      <div className="flex justify-between text-sm opacity-70">
                        <span className="">11:30 - 11:50</span>
                        <span className="">20분</span>
                      </div>
                      <div className="grid w-3/4 grid-flow-col justify-between text-sm text-white">
                        <span className="font-semibold">
                          아무도 이야기 하지 않는 웹 성능 지표의 비밀
                        </span>
                      </div>
                      <div className="mt-1.5 flex grid-flow-col gap-2 text-sm text-white">
                        <Image
                          className="rounded-full grayscale group-hover:grayscale-0"
                          width={24}
                          height={24}
                          src="/anna-migas.png"
                        />
                        <span className="self-center text-xs opacity-70 group-hover:underline group-hover:opacity-100">
                          안나미가스
                        </span>
                      </div>
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
