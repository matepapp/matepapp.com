import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { SEO } from '../../utils/seo'
import { fetchThought, fetchThoughtMetaList, Thought } from '../../utils/thoughts'

type ThoughtPageProps = {
  thought: Thought
}

const ThoughtPage: NextPage<ThoughtPageProps> = ({ thought }) => {
  const { meta, content } = thought
  const title = SEO.titleTemplate(meta.title)
  const description = meta.excerpt

  return (
    <>
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <div>
        <h1>{meta.title}</h1>
        <div className="text-tertiary mt-2 font-medium tracking-wider uppercase">
          <span>{meta.createdAt}</span> · <span>{meta.readingTime}</span>
        </div>
      </div>
      {content && (
        <div
          className="lg:prose-lg dark:prose-dark prose"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </>
  )
}

export function getStaticProps({ params }) {
  const { slug } = params
  const thought = fetchThought(slug)

  return {
    props: { thought },
  }
}

export function getStaticPaths() {
  const thoughtMetaList = fetchThoughtMetaList()

  return {
    paths: thoughtMetaList.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export default ThoughtPage
