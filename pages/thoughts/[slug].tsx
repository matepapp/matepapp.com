import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { MDX } from '../../components/mdx'
import { Tweet } from '../../components/tweet'
import { fetchThought, fetchThoughtMetaList, Thought } from '../../lib/thoughts'
import { fetchTweets } from '../../lib/twitter'
import { SEO } from '../../utils/seo'

type ThoughtPageProps = {
  thought: Thought
  tweets: any[]
}

const ThoughtPage: NextPage<ThoughtPageProps> = ({ thought, tweets }) => {
  const router = useRouter()
  const { meta, content } = thought
  const title = SEO.titleTemplate(meta.title)
  const url = SEO.url(router.asPath)
  const description = meta.excerpt
  const imageURL = SEO.url(`/assets/thoughts/${meta.slug}/meta.png`)

  const StaticTweet = ({ id }) => {
    const tweet = tweets?.find((tweet) => tweet.id === id)
    console.log({ tweets, id })
    return tweet ? <Tweet id={id} {...tweet} /> : null
  }

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
      <div className="prose-wrapper">
        <MDX code={content} components={{ StaticTweet }} />
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const thought = await fetchThought(slug)
  const tweets = await fetchTweets(thought.meta.tweetIDs)

  return { props: { thought, tweets } }
}

export async function getStaticPaths() {
  const thoughtMetaList = await fetchThoughtMetaList()

  return {
    paths: thoughtMetaList.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export default ThoughtPage
