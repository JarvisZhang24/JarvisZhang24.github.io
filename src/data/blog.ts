import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "./site";

export type Post = CollectionEntry<"blog">;

/** Newest first, scoped to one language, with drafts hidden in production. */
export async function getPosts(locale: Locale): Promise<Post[]> {
  const posts = await getCollection("blog", ({ id, data }) => {
    if (!id.startsWith(`${locale}/`)) return false;
    return import.meta.env.PROD ? !data.draft : true;
  });

  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** `en/first-note` → `first-note` */
export function postSlug(post: Post): string {
  return post.id.replace(/^[a-z]{2}\//, "");
}

export function postPath(post: Post, locale: Locale): string {
  return locale === "en" ? `/blog/${postSlug(post)}/` : `/zh/blog/${postSlug(post)}/`;
}

/**
 * CJK is counted per character rather than per whitespace-delimited word,
 * otherwise a Chinese post reads as a handful of "words".
 */
export function readingMinutes(body = ""): number {
  const cjkPattern = /[぀-ヿ㐀-䶿一-鿿]/g;
  const cjk = body.match(cjkPattern)?.length ?? 0;
  const words = body
    .replace(cjkPattern, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.round(cjk / 400 + words / 220));
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}
