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
      <div className="flex-none w-16 overflow-hidden">
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
        <div className="sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 flex flex-col items-start space-y-1">
          <h3 className="inline-flex items-center mr-2">{title}</h3>
          {badge}
        </div>
        <a
          href={`https://${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link flex items-center mt-1"
        >
          {url} <ExternalLinkIcon className="inline w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
    <p className="mt-3">{description}</p>
  </div>
)
