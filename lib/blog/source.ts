export const BLOG_DATA_URL =
  'https://raw.githubusercontent.com/TXPAGES-LLC/wbtowing-com/main/lib/blog/posts.json'

export interface BlogSeo {
  metaTitle?: string
  metaDescription?: string
  canonicalUrl?: string
  ogImageUrl?: string
  keywords?: string[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  contentHtml: string
  heroImageUrl?: string
  author?: string
  tags?: string[]
  categories?: string[]
  publishAt: string
  updatedAt?: string
  readingTimeMinutes?: number
  wordCount?: number
  seo?: BlogSeo
}

export interface BlogData {
  collection?: {
    title?: string
    navLabel?: string
    basePath?: string
  }
  posts: BlogPost[]
}

export async function fetchBlogData(): Promise<BlogData> {
  try {
    const res = await fetch(BLOG_DATA_URL, { cache: 'no-store' })
    if (!res.ok) return { posts: [] }
    const data: BlogData = await res.json()
    return data
  } catch {
    return { posts: [] }
  }
}

export function getPublishedPosts(posts: BlogPost[]): BlogPost[] {
  const now = new Date()
  return posts
    .filter((p) => new Date(p.publishAt) <= now)
    .sort((a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime())
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
