import { ArrowRightIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { FC, HTMLAttributes } from 'react'

export const ButtonLink: FC<LinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
  className,
  href,
  children,
}) => (
  <Link href={href}>
    <a
      className={clsx(
        'inline-flex group items-center transition py-1 font-medium text-link',
        className,
      )}
    >
      {children}
      <ArrowRightIcon className="group-hover:opacity-100 inline-block w-4 h-4 ml-2 transition-opacity opacity-0" />
    </a>
  </Link>
)
