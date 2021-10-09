import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { SEO } from '../../utils/seo'
import { fetchThought, fetchThoughtMetaList, Thought } from '../../utils/thoughts'

type ThoughtPageProps = {
  thought: Thought
}

const ThoughtPage: NextPage<ThoughtPageProps> = ({ thought }) => {
  const router = useRouter()
  const { meta, content } = thought
  const title = SEO.titleTemplate(meta.title)
  const url = SEO.url(router.asPath)
  const description = meta.excerpt
  const imageURL = SEO.url(`/assets/thoughts/${meta.slug}.png`)

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
          images: [{ url: imageURL, width: 1200, height: 627 }],
        }}
      />

      <div>
        <h1>{meta.title}</h1>
        <div className="text-tertiary mt-4 text-sm font-medium tracking-wider uppercase">
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
