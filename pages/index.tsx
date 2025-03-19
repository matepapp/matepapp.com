import { NextSeo } from 'next-seo'
import { ButtonLink } from '../components'
import { SEO } from '../utils/seo'

const IndexPage = () => {
  const { title } = SEO

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Hey, I'm Mate! 👋🏻</h1>

      <div className="card p-5">
        <p className="text-gray-800 dark:text-gray-200">
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
    </>
  )
}
export default IndexPage
