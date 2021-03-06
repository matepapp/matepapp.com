import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { ButtonLink } from '../../components'
import { SEO } from '../../utils/seo'
import { fetchThoughtMetaList, ThoughtMeta } from '../../utils/thoughts'

type ThoughtsPageProps = {
  thoughts: ThoughtMeta[]
}

const ThoughtsPage: NextPage<ThoughtsPageProps> = ({ thoughts }) => {
  const title = SEO.titleTemplate('Thoughts')

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <h1>Thoughts</h1>
      {thoughts.map(({ slug, title, excerpt, createdAt, readingTime }) => (
        <div className="card p-5" key={slug}>
          <Link href={`/thoughts/${slug}`} key={slug}>
            <a>
              <h3 className="hover:text-green-400 transition">{title}</h3>
            </a>
          </Link>
          <div className="mt-1 text-xs font-medium tracking-wider text-gray-500 uppercase">
            <span>{createdAt}</span> · <span>{readingTime}</span>
          </div>
          <div className="text-secondary mt-3">{excerpt}</div>

          <ButtonLink href={`/thoughts/${slug}`} showArrowIcon className="mt-3">
            Read More
          </ButtonLink>
        </div>
      ))}
    </>
  )
}
export function getStaticProps() {
  const thoughts = fetchThoughtMetaList()
  return { props: { thoughts } }
}
export default ThoughtsPage
