import { ExternalLinkIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Image from 'next/image'
import { ReactElement } from 'react'

type ProjectCardProps = {
  image: {
    src: string
    alt: string
  }
  title: string
  url: string
  badge?: ReactElement
  description: string
}

export const ProjectCard = ({ image, title, url, badge, description }: ProjectCardProps) => (
  <div className={clsx('card flex flex-col p-5')}>
    <div className="flex items-center space-x-4">
      <div className="w-16 flex-none overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          className="rounded-xl shadow-sm"
          layout="responsive"
          width={512}
          height={512}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col items-start">
        <div className="flex flex-col items-start space-y-1 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
          <h3 className="mr-2 inline-flex items-center">{title}</h3>
          {badge}
        </div>
        <a
          href={`https://${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link mt-1 flex items-center"
        >
          {url} <ExternalLinkIcon className="ml-1 inline h-4 w-4" />
        </a>
      </div>
    </div>
    <p className="mt-3">{description}</p>
  </div>
)
