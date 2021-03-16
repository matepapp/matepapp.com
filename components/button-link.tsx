import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { FC, HTMLAttributes } from 'react'

export const ButtonLink: FC<LinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
  className,
  href,
  children,
}) => (
  <Link href={href} passHref>
    <a
      className={clsx(
        'inline-flex items-center pl-3 pr-2 py-1 bg-green-100 text-green-500 duration-200 ease-in-out transform hover:scale-105 rounded-lg dark:text-green-300 dark:bg-green-900',
        className,
      )}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="inline-block w-4 h-4 ml-1"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </Link>
)
