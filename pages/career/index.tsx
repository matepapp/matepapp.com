import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { ButtonLink, CareerCard } from '../../components'
import { JobMeta } from '../../types/job'
import { fetchJobMetaList } from '../../utils/fetch-jobs'
import { SEO } from '../../utils/seo'

type CareerPageProps = {
  jobs: JobMeta[]
}

const CareerPage: NextPage<CareerPageProps> = ({ jobs }) => {
  const title = SEO.titleTemplate('Career')

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Career</h1>
      <h2>Jobs</h2>
      <div className="grid grid-cols-1 gap-5 pt-4">
        {jobs.map(({ title, company, date, slug, excerpt }, index) => (
          <CareerCard title={title} tag={date} subtitle={company} description={excerpt} key={index}>
            <ButtonLink href={`/career/${slug}`} className="mt-4">
              Read More
            </ButtonLink>
          </CareerCard>
        ))}
      </div>

      <h2>Education</h2>
      <div className="grid grid-cols-1 gap-5 pt-4">
        <CareerCard
          title="University"
          tag="2014 - 2018"
          subtitle="University Budapest University of Technology and Economics"
          description="Computer Engineering BSc (Major - Systems Engineering)"
        />

        <CareerCard
          title="High School"
          tag="2010 - 2014"
          subtitle="Nagy Lajos Gimnázium Szombathely"
          description="Mathematics"
        />
      </div>

      <h2>Talks</h2>
      <div className="grid grid-cols-1 gap-5 pt-4">
        <CareerCard
          title="Let's Jump on the JAMStack Hype Train"
          tag="JSConf BP '19"
          subtitle="Workshop about what is, how and when to use the JAMStack"
        />

        <CareerCard
          title="Intro to GraphQL for iOS Developers - Part 2"
          tag="NSBudapest"
          subtitle="Second part of my GraphQL introduction Meetup talk"
        />

        <CareerCard
          title="Intro to GraphQL for iOS Developers - Part 1"
          tag="NSBudapest"
          subtitle="First part of my GraphQL introduction Meetup talk"
        />

        <CareerCard
          title="From Simonyi to the British Royal Palace"
          tag="Simonyi Conference XVI."
          subtitle="Conference talk about our journey with Cogito"
        />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { jobs: fetchJobMetaList() } }
}

export default CareerPage
