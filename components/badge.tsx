import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

export const Badge: FC<HTMLAttributes<HTMLSpanElement>> = ({ children, className }) => (
  <span
    className={clsx(
      'inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-xs font-medium uppercase text-blue-800 dark:bg-blue-800 dark:text-blue-200',
      className,
    )}
  >
    {children}
  </span>
)
