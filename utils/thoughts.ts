import fs from 'fs'
import matter, { GrayMatterFile } from 'gray-matter'
import marked from 'marked'
import path from 'path'
import readingTime from 'reading-time'

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

const thoughtsDirectory = () => path.join(process.cwd(), '/data/thoughts')

const parseMarkdown = (filename: string): GrayMatterFile<string> => {
  const filePath = path.join(thoughtsDirectory(), filename)
  const fileContents = fs.readFileSync(filePath).toString()
  return matter(fileContents)
}

const mapMeta = (markdown: GrayMatterFile<string>): ThoughtMeta =>
  ({ ...markdown.data, readingTime: readingTime(markdown.content).text } as ThoughtMeta)

export const fetchThoughtMetaList = (): ThoughtMeta[] =>
  fs.readdirSync(thoughtsDirectory()).map(parseMarkdown).map(mapMeta)
// .filter((meta) => meta.published)

export const fetchThought = (slug: string) =>
  fs
    .readdirSync(thoughtsDirectory())
    .map(parseMarkdown)
    .map((markdown) => ({ meta: mapMeta(markdown), content: marked(markdown.content) } as Thought))
    .find((thought) => thought.meta.slug === slug)
