import { ArrowRightIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { HTMLAttributes, ReactNode } from 'react'

type ButtonLinkProps = LinkProps &
  HTMLAttributes<HTMLAnchorElement> & {
    showArrowIcon: boolean
    children: ReactNode
  }

export function ButtonLink(props: ButtonLinkProps) {
  return (
    <Link legacyBehavior {...props}>
      <a className={clsx('text-link group inline-flex items-center font-medium', props.className)}>
        {props.children}
        {props.showArrowIcon && (
          <ArrowRightIcon className="ml-2 inline-block h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
        )}
      </a>
    </Link>
  )
}
