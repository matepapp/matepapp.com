import { FC } from 'react'

type CareerCardProps = {
  title: string
  tag: string
  subtitle: string
  description?: string
}

export const CareerCard: FC<CareerCardProps> = ({
  children,
  title,
  tag,
  subtitle,
  description,
}) => {
  return (
    <div className="card">
      <div className="flex flex-row flex-wrap items-center">
        <h3 className="dark:text-gray-200 p-0 mr-2 text-gray-800">{title}</h3>
        <div className="px-2 text-sm text-white bg-gray-500 rounded-md">{tag}</div>
      </div>
      <p className="dark:text-gray-300 pt-1 text-lg text-gray-700">{subtitle}</p>
      {description && <p className="dark:text-gray-400 pt-2 text-gray-600">{description}</p>}
      {children}
    </div>
  )
}
