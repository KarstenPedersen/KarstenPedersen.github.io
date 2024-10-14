import { z, defineCollection, reference } from "astro:content";import { defineAction } from "astro:actions"

const socialCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    username: z.string(),
    url: z.string().url(),
    icon: z.string()
  })
})

export const collections = {
  social: socialCollection,
}