import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

export const NavLink: FC<LinkProps> = ({ href, children }) => {
  const router = useRouter()
  const isActivePath = router.pathname === href || router.pathname === `${href}/[slug]`

  return (
    <Link href={href}>
      <a
        className={clsx(
          'text-xl transition font-medium sm:text-lg hover:text-emerald-400 dark:hover:text-emerald-300 text-primary',
          isActivePath && 'text-link',
        )}
      >
        {children}
      </a>
    </Link>
  )
}
