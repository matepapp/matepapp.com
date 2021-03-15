import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { FiHeart } from 'react-icons/fi'
import { NavLink } from './nav-link'

export const Layout: FC = ({ children }) => (
  <div className="flex flex-col items-center w-full max-w-2xl px-4 mx-auto">
    <nav className="dark:bg-gray-900 bg-gray-50 sticky top-0 z-20 flex items-start justify-between w-full py-4 tracking-tight">
      <Link href="/">
        <a>
          <Image
            src="/assets/mp.png"
            alt="matepapp.com"
            className="w-8 h-8"
            width={32}
            height={32}
          />
        </a>
      </Link>

      <div className="flex items-center space-x-3">
        <NavLink href="/about">about</NavLink>
        <NavLink href="/thoughts">thoughts</NavLink>
      </div>
    </nav>
    <main className="flex flex-col flex-1 mt-6">{children}</main>
    <footer className="dark:text-gray-400 mt-8 mb-2 text-xs text-gray-500">
      <p>
        built with <FiHeart className="inline w-4 h-4 text-green-400" /> in Budapest & Barcelona
      </p>
    </footer>
  </div>
)
