import Link from 'next/link'
import type { BlogPost } from '@/lib/blog/source'

interface BlogPostCardProps {
  post: BlogPost
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const href = `/blog/${post.slug}`
  return (
    <Link
      href={href}
      className="group block bg-[#0f2138] border border-[#1c3350] rounded-lg overflow-hidden hover:border-[#f2c118] transition-colors cursor-pointer"
      aria-label={`Read: ${post.title}`}
    >
      {/* Hero image */}
      {post.heroImageUrl && (
        <div className="aspect-video overflow-hidden bg-[#0a1628]">
          <img
            src={post.heroImageUrl}
            alt={post.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6 flex flex-col gap-3">
        {/* Meta row */}
        <div className="flex items-center gap-3 text-xs text-[#9aa5b1] font-medium uppercase tracking-wider">
          <time dateTime={post.publishAt}>{formatDate(post.publishAt)}</time>
          {post.readingTimeMinutes && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.readingTimeMinutes} min read</span>
            </>
          )}
          {post.author && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.author}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h2 className="font-display font-bold text-lg text-white leading-snug text-balance group-hover:text-[#f2c118] transition-colors">
          {post.title}
        </h2>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-[#a3acbb] text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
        )}

        {/* Read more indicator */}
        <span className="mt-1 text-[#f2c118] text-sm font-bold inline-flex items-center gap-1">
          Read Article
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
