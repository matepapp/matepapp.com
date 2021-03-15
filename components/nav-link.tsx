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
          'default-transition text-xl font-semibold sm:text-lg hover:text-green-400',
          activeStyle,
        )}
      >
        {children}
      </a>
    </Link>
  )
}
