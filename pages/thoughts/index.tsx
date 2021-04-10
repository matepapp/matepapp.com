import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
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
        <Link href={`/thoughts/${slug}`} key={slug}>
          <a className="card group dark:hover:border-green-900 hover:scale-105 hover:border-green-100 p-6 transition transform">
            <h3 className="group-hover:text-link transition">{title}</h3>
            <div className="text-tertiary mt-1 text-sm">
              <span>{createdAt}</span> · <span>{readingTime}</span>
            </div>
            <div className="text-secondary mt-3">{excerpt}</div>
          </a>
        </Link>
      ))}
    </>
  )
}
export function getStaticProps() {
  const thoughts = fetchThoughtMetaList()
  return { props: { thoughts } }
}
export default ThoughtsPage
