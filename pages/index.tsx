import { NextSeo } from 'next-seo'
import { Badge, ButtonLink, ProjectCard } from '../components'
import { SEO } from '../utils/seo'

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
