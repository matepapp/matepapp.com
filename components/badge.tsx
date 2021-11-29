import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

export const Badge: FC<HTMLAttributes<HTMLSpanElement>> = ({ children, className }) => (
  <span
    className={clsx(
      'inline-flex items-center px-3 py-0.5 rounded-full text-xs uppercase font-medium bg-blue-100 dark:bg-blue-800 dark:text-blue-200 text-blue-800',
      className,
    )}
  >
    {children}
  </span>
)
