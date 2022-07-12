import { useTranslations } from 'next-intl'
import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Navbar() {
  const t = useTranslations('nav')
  const { pathname, query } = useRouter()

  return (
    <div className="fixed z-[201] flex w-full bg-white text-black">
      <div className="flex h-14 w-full items-center px-2">
        <Link href="/" className="aspect-square">
          <a className="aspect-square h-full p-3">
            <Image
              className="rounded-md"
              width={32}
              height={32}
              src="https://cloudflare-ipfs.com/ipfs/bafybeihif7fowjzxe7gqsnyhj2nqx5zgdcjyksqzqhc4i5x66he42pquli"
              alt="logo"
              priority
            />
          </a>
        </Link>

        <div className="flex-1" />

        {/* <Link href="/code-of-conduct" passHref>
            <a className="p-4 align-middle text-white">{'Code of Conduct'}</a>
          </Link> */}

        <Link href={{ pathname, query }} locale={'ko'} passHref>
          <a className="p-4 align-middle">{'한국어'}</a>
        </Link>
        <Link href={{ pathname, query }} locale={'en'} passHref>
          <a className="p-4 align-middle">{'English'}</a>
        </Link>
      </div>
    </div>
  )
}
