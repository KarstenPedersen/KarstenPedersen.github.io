import { defineCollection, z, reference } from "astro:content";
import { glob, file } from "astro/loaders";
import { TagSchema, SocialSchema } from "$lib/types/types";

const authors = defineCollection({
  loader: file("./src/content/authors.json", {
    parser: (text) => JSON.parse(text).authors
  }),
  schema: z.object({
    name: z.string(),
    socials: z.record(z.string(), SocialSchema).optional()
  }),
});

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/posts"
  }),  
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: reference("authors"),
    tags: z.array(TagSchema),
    publishDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    relatedPosts: z.array(reference("posts")).optional()
  })
});

export const collections = {
  authors,
  posts
}
