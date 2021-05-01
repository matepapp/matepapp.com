import React, { FC, ReactNode } from 'react'

type Props = {
  month: string
  icon: ReactNode
}

export const CareerTimelineItem: FC<Props> = ({ icon, month, children }) => (
  <li>
    <div className="relative pt-3">
      <span
        className="absolute left-5 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"
        aria-hidden="true"
      />

      <div className="relative z-0 flex items-center space-x-4">
        <div>
          <span className="dark:bg-gray-800 card ring-8 dark:ring-gray-900 ring-gray-100 text-secondary flex items-center justify-center w-10 h-10 p-2 bg-white rounded-full shadow-sm">
            {icon}
          </span>
        </div>

        <div className="card flex-1">
          <h4 className="font-semibold">{month}</h4>
          <p className="text-primary mt-1 text-sm">{children}</p>
        </div>
      </div>
    </div>
  </li>
)
