import { ArrowRightIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { FC, HTMLAttributes } from 'react'

type Props = {
  showArrowIcon: boolean
}

export const ButtonLink: FC<Props & LinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
  className,
  href,
  children,
  showArrowIcon,
}) => (
  <Link href={href}>
    <a className={clsx('group text-link inline-flex items-center font-medium', className)}>
      {children}
      {showArrowIcon && (
        <ArrowRightIcon className="ml-2 inline-block h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
      )}
    </a>
  </Link>
)
