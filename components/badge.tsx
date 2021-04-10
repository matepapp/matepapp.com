import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

export const Badge: FC<HTMLAttributes<HTMLSpanElement>> = ({ children, className }) => (
  <span
    className={clsx(
      'inline-flex items-center px-3 py-0.5 rounded-full text-xs uppercase font-medium bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200 text-yellow-800',
      className,
    )}
  >
    {children}
  </span>
)
