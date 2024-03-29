import fs from 'fs'
import { bundleMDX } from 'mdx-bundler'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import path from 'path'

export type ThoughtMeta = {
  title: string
  createdAt: string
  updatedAt: string
  slug: string
  published: boolean
  excerpt: string
  readingTime: string
  tweetIDs?: string[]
}

export type Thought = {
  meta: ThoughtMeta
  content: string
}

export async function bundleThoughtFiles() {
  return Promise.all(
    fs.readdirSync(path.join(process.cwd(), '/data/thoughts')).map(async (filename) => {
      const filePath = path.join(path.join(process.cwd(), '/data/thoughts'), filename)
      const fileContents = fs.readFileSync(filePath).toString()

      return await bundleMDX({
        source: fileContents,
        xdmOptions: (options) => {
          options.rehypePlugins = [
            ...(options?.rehypePlugins ?? []),
            rehypeSlug,
            rehypeAutolinkHeadings,
          ]
          return options
        },
      })
    }),
  )
}

export async function fetchThoughtMetaList(): Promise<ThoughtMeta[]> {
  const files = await bundleThoughtFiles()

  return files
    .filter((file) => file.frontmatter.published)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.createdAt).getTime() - new Date(a.frontmatter.createdAt).getTime(),
    )
    .map((file) => file.frontmatter as ThoughtMeta)
}

export async function fetchThought(slug: string): Promise<Thought> {
  const files = await bundleThoughtFiles()
  const thought = files.find((file) => file.frontmatter.slug === slug)

  return {
    meta: thought.frontmatter as ThoughtMeta,
    content: thought.code,
  }
}
