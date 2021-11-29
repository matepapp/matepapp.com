import { ExternalLinkIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { ReactElement } from 'react'
import { ButtonLink } from '../components'
import { Badge } from '../components/badge'
import { SEO } from '../utils/seo'

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

const ProjectCard = ({ image, title, url, badge, description }: ProjectCardProps) => (
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

const IndexPage = () => {
  const { title } = SEO

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Hey, I'm Mate! 👋🏻</h1>

      <div className="card p-5">
        <p className="dark:text-gray-200 text-gray-800">
          Full-time Software Engineer, part-time Indie Maker, and wannabe home Barista. Passionate
          about solving problems by building useful & aesthetic products for people and learning new
          things along the journey. I try to stay up-to-date with the latest hot trends in Tech &
          Software Engineering, and occasionally even share my{' '}
          <ButtonLink href="/thoughts" showArrowIcon={false}>
            thoughts
          </ButtonLink>{' '}
          on those.
        </p>
        <ButtonLink href="/about" showArrowIcon className="mt-4">
          More About Me
        </ButtonLink>
      </div>

      <h2 className="mt-4">Projects</h2>

      <ProjectCard
        image={{ src: '/assets/bankliday.png', alt: 'Bankliday logo' }}
        title="bankliday"
        url="bankliday.com"
        badge={<Badge>In Progress</Badge>}
        description="Automated bank holiday tracker for international companies, distributed organizations, and remote teams."
      />

      <ProjectCard
        image={{ src: '/assets/historico.png', alt: 'Historico logo' }}
        title="Historico - Today in History"
        url="historico.app"
        description="Minimal & clean iOS application to discover daily historical events, births, and deaths and leverage iOS14 Widgets."
      />
    </>
  )
}
export default IndexPage
