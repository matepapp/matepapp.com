import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro:schema";

const thoughts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/thoughts" }),
  schema: z.object({
    title: z.string(),
    createdAt: z.string(),
    updatedAt: z.string().optional().default(""),
    slug: z.string(),
    published: z.boolean(),
    excerpt: z.string(),
    readingTime: z.string(),
  }),
});

export const collections = { thoughts };
