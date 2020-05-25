import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import path from "path";
import prism from "prismjs";
import { Thought, ThoughtMeta } from "../types/thought";

export const fetchThoughtMetaList = (): ThoughtMeta[] => {
  const thoughtsDirectory = path.join(process.cwd(), "/data/thoughts");
  const filenames = fs.readdirSync(thoughtsDirectory);

  const thoughtMetaList: ThoughtMeta[] = filenames.map((filename) => {
    const filePath = path.join(thoughtsDirectory, filename);
    const fileContents = fs.readFileSync(filePath).toString();
    const parsedMarkdown = matter(fileContents);
    const thoughtMeta = parsedMarkdown.data as ThoughtMeta;

    return {
      ...thoughtMeta,
      slug: filename,
    };
  });

  return thoughtMetaList;
};

export const fetchThought = (slug: string): Thought => {
  const thoughtsDirectory = path.join(process.cwd(), "/data/thoughts");
  const filenames = fs.readdirSync(thoughtsDirectory);

  const thoughts: Thought[] = filenames.map((filename) => {
    const filePath = path.join(thoughtsDirectory, filename);
    const fileContents = fs.readFileSync(filePath).toString();
    const parsedMarkdown = matter(fileContents);
    const thoughtMeta = parsedMarkdown.data as ThoughtMeta;

    marked.setOptions({
      highlight: (code, lang) =>
        prism.highlight(code, prism.languages[lang], lang),
    });

    return {
      meta: {
        ...thoughtMeta,
        slug: filename,
      },
      content: marked(parsedMarkdown.content),
    };
  });

  return thoughts.find((thought) => thought.meta.slug === slug);
};
