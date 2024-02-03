import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

export const NavLink: FC<LinkProps> = ({ href, children }) => {
  const router = useRouter()
  const isActivePath = router.pathname === href || router.pathname === `${href}/[slug]`

  return (
    <Link legacyBehavior href={href}>
      <a
        className={clsx(
          'text-primary text-xl font-medium transition hover:text-emerald-400 dark:hover:text-emerald-300 sm:text-lg',
          isActivePath && 'text-link',
        )}
      >
        {children}
      </a>
    </Link>
  )
}
