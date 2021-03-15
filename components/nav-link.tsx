import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

export const NavLink: FC<LinkProps> = ({ href, children }) => {
  const router = useRouter()
  const activeStyle = router.pathname.includes(href as string) && 'text-green-400'

  return (
    <Link href={href} passHref>
      <a
        className={clsx(
          'text-xl font-medium sm:text-lg text-gray-900 dark:text-gray-100',
          activeStyle,
        )}
      >
        {children}
      </a>
    </Link>
  )
}
