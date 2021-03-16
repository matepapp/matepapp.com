import { NextSeo } from 'next-seo'
import { ButtonLink } from '../components'
import { SEO } from '../utils/seo'

const IndexPage = () => {
  const { title } = SEO

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Hey, I'm Mate! 👋🏻</h1>

      <div className="card p-6">
        <p className="dark:text-gray-200 text-gray-800">
          I like to refer to myself as &frac12; Software Engineer, &frac14; Designer, and &frac14;
          Entrepreneur who is focusing on building products that people love to use. I'm passionate
          about exploring new things and staying up-to-date with the latest hot trends and topics by
          attending (and occasionally speaking at) meetups, conferences, and listening to podcasts.
        </p>
        <ButtonLink href="/about" className="mt-4">
          More About Me
        </ButtonLink>
      </div>
    </>
  )
}

export default IndexPage
