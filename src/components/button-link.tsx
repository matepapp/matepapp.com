import { ArrowRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  href: string
  showArrowIcon: boolean
}

export function ButtonLink({
  children,
  className,
  href,
  showArrowIcon,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={clsx('text-link group inline-flex items-center font-medium', className)}
      href={href}
      {...props}
    >
      {children}
      {showArrowIcon ? (
        <ArrowRightIcon className="ml-2 inline-block h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
      ) : null}
    </a>
  )
}
