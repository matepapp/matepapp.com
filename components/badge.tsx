import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

export const Badge: FC<HTMLAttributes<HTMLSpanElement>> = ({ children, className }) => (
  <span
    className={clsx(
      'inline-flex items-center px-3 py-0.5 rounded-full text-xs uppercase font-medium bg-green-100 dark:bg-green-800 dark:text-green-200 text-green-800',
      className,
    )}
  >
    {children}
  </span>
)
