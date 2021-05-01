import { ExternalLinkIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
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
  isComingSoon?: boolean
  description: string
}

const ProjectCard = ({ image, title, url, isComingSoon, description }: ProjectCardProps) => (
  <div className={clsx('card flex flex-col p-5', isComingSoon && 'cursor-not-allowed opacity-40')}>
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
          <h3 className="inline-flex items-center">{title}</h3>
          {isComingSoon && <Badge>Coming Soon</Badge>}
        </div>
        <a
          href={`https://${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link mt-1"
        >
          {url} <ExternalLinkIcon className="inline w-4 h-4" />
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
        <ButtonLink href="/about" showArrowIcon className="mt-4 font-medium">
          More About Me
        </ButtonLink>
      </div>

      <h2 className="mt-4">Projects</h2>

      <ProjectCard
        image={{ src: '/assets/historico.png', alt: 'Historico logo' }}
        title="Historico - This Day in History"
        url="historico.app"
        description="Minimal & clean iOS application to discover daily historical events, births, and deaths."
      />

      <ProjectCard
        image={{ src: '/assets/cusfeed.png', alt: 'cusfeed logo' }}
        title="cusfeed"
        url="cusfeed.com"
        isComingSoon
        description="Create sharable or private custom Instagram feeds for specific topics. Keep your personal
        feed clean and interact with pages & profiles without following them."
      />

      <ProjectCard
        image={{ src: '/assets/local-roasters.png', alt: 'Local Roasters logo' }}
        title="Local Roasters"
        url="localroasters.coffee"
        isComingSoon
        description="Easily find and explore local, specialty coffee roasters in your area with a community based webpage. Because always buy local!"
      />
    </>
  )
}
export default IndexPage
