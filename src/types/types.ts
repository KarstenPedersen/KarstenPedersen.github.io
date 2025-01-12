import { z } from "astro:content";

export const SocialSchema = z.object({
  title: z.string(),
  username: z.string(),
  url: z.string().url(),
  icon: z.string()
});

export const TagSchema = z.string().regex(/^[a-z-]+$/, {
  message: "String must contain only lowercase letters and dashes.",
});

export type Tag = z.infer<typeof TagSchema>;
