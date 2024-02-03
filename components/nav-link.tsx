import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

type NavLinkProps = LinkProps & {
  children: ReactNode
}

export function NavLink(props: NavLinkProps) {
  const router = useRouter()
  const isActivePath = router.pathname === props.href || router.pathname === `${props.href}/[slug]`

  return (
    <Link legacyBehavior {...props}>
      <a
        className={clsx(
          'text-primary text-xl font-medium transition hover:text-emerald-400 sm:text-lg dark:hover:text-emerald-300',
          isActivePath && 'text-link',
        )}
      >
        {props.children}
      </a>
    </Link>
  )
}
