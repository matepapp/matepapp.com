import fs from 'fs'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'

// TODO: OG Image?

export type ThoughtMeta = {
  title: string
  createdAt: string
  updatedAt: string
  slug: string
  published: boolean
  excerpt: string
  readingTime: string
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

      return await bundleMDX({ source: fileContents })
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
