import { ChevronRightIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { FC, HTMLAttributes } from 'react'

export const ButtonLink: FC<LinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
  className,
  href,
  children,
}) => (
  <Link href={href}>
    <a className={clsx('inline-flex items-center py-1 font-medium text-link', className)}>
      {children}
      <ChevronRightIcon className="inline-block w-5 h-5 ml-1" />
    </a>
  </Link>
)
