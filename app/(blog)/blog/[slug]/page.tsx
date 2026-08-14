import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import CallCTA from '@/components/CallCTA'
import ProseContent from '@/components/blog/ProseContent'
import { fetchBlogData, getPublishedPosts } from '@/lib/blog/source'

const PHONE = '(325) 998-6955'
const PHONE_HREF = 'tel:+13259986955'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const data = await fetchBlogData()
  const published = getPublishedPosts(data.posts)
  const post = published.find((p) => p.slug === slug)

  if (!post) {
    return { title: 'Post Not Found | Welch Bros Towing' }
  }

  const title = post.seo?.metaTitle ?? post.title
  const description = post.seo?.metaDescription ?? post.excerpt
  const canonical = post.seo?.canonicalUrl ?? `/blog/${post.slug}`
  const ogImage = post.seo?.ogImageUrl ?? post.heroImageUrl

  return {
    title,
    description,
    keywords: post.seo?.keywords?.length ? post.seo.keywords : undefined,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      publishedTime: post.publishAt,
      modifiedTime: post.updatedAt,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const data = await fetchBlogData()
  const published = getPublishedPosts(data.posts)
  const post = published.find((p) => p.slug === slug)

  if (!post) notFound()

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

  // Related posts: up to 3 other published posts, excluding current
  const related = published.filter((p) => p.slug !== slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': post.author ? 'Person' : 'Organization',
      name: post.author ?? 'Welch Bros Towing',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Welch Bros Towing',
      url: '',
    },
    datePublished: post.publishAt,
    dateModified: post.updatedAt ?? post.publishAt,
    image: post.heroImageUrl,
    mainEntityOfPage: `/blog/${post.slug}`,
    keywords: post.seo?.keywords?.join(', '),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: '/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <Header />
      <main id="main-content">
        <article itemScope itemType="https://schema.org/BlogPosting">
          {/* JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
          />

          {/* Article header */}
          <header className="bg-[#0a1628] border-b border-[#1c3350] py-14 px-4">
            <div className="max-w-3xl mx-auto">
              {/* Breadcrumb */}
              <nav
                className="flex items-center gap-2 text-sm text-[#a3acbb] mb-5 flex-wrap"
                aria-label="Breadcrumb"
              >
                <Link href="/" className="hover:text-[#f2c118] transition-colors">
                  Home
                </Link>
                <span aria-hidden="true">/</span>
                <Link href="/blog" className="hover:text-[#f2c118] transition-colors">
                  Blog
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-[#cfd4dc] truncate max-w-[240px]">{post.title}</span>
              </nav>

              {/* Categories */}
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs font-bold uppercase tracking-widest text-[#9aa5b1] border border-[#9aa5b1]/30 px-2.5 py-0.5 rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}

              <h1
                itemProp="headline"
                className="font-display font-extrabold text-3xl md:text-5xl text-white uppercase leading-tight text-balance mb-5"
              >
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="text-[#cfd4dc] text-lg max-w-2xl leading-relaxed mb-6" itemProp="description">
                  {post.excerpt}
                </p>
              )}

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#a3acbb]">
                <time dateTime={post.publishAt} itemProp="datePublished" className="text-[#9aa5b1] font-medium">
                  {formatDate(post.publishAt)}
                </time>
                {post.author && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span itemProp="author">{post.author}</span>
                  </>
                )}
                {post.readingTimeMinutes && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTimeMinutes} min read</span>
                  </>
                )}
              </div>
            </div>
          </header>

          {/* Hero image */}
          {post.heroImageUrl && (
            <div className="bg-[#0a1628] px-4 pt-8">
              <div className="max-w-3xl mx-auto">
                <img
                  src={post.heroImageUrl}
                  alt={post.title}
                  loading="eager"
                  decoding="async"
                  className="w-full rounded-lg object-cover max-h-[420px]"
                  itemProp="image"
                />
              </div>
            </div>
          )}

          {/* Article body */}
          <div className="py-12 px-4 bg-[#0a1628]">
            <div className="max-w-3xl mx-auto">
              <div itemProp="articleBody">
                <ProseContent html={post.contentHtml} />
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-[#1c3350]">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#a3acbb] mb-3">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-[#a3acbb] bg-[#0f2138] border border-[#1c3350] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Related posts */}
              {related.length > 0 && (
                <nav className="mt-12 pt-8 border-t border-[#1c3350]" aria-label="Related articles">
                  <h2 className="font-display font-bold text-white uppercase text-sm tracking-wider mb-5">
                    Related Articles
                  </h2>
                  <div className="space-y-3">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        className="flex items-center gap-2 text-[#a3acbb] hover:text-[#f2c118] transition-colors text-sm"
                      >
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
                        {r.title}
                      </Link>
                    ))}
                  </div>
                </nav>
              )}

              {/* Emergency call box */}
              <div className="mt-12 bg-[#f2c118]/10 border border-[#f2c118]/30 rounded-lg p-6">
                <p className="font-display font-bold text-white text-xl uppercase mb-2">
                  Need Help Right Now?
                </p>
                <p className="text-[#a3acbb] text-sm mb-4">
                  Welch Bros Towing responds 24/7 to towing and roadside emergencies throughout Brownwood and
                  Central Texas.
                </p>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 bg-[#f2c118] hover:bg-[#d9a913] text-[#0a1628] font-bold px-5 py-2.5 rounded text-sm transition-colors"
                  aria-label={`Call Welch Bros Towing at ${PHONE}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
                  </svg>
                  Call {PHONE}
                </a>
              </div>
            </div>
          </div>
        </article>

        <CallCTA
          heading="24/7 Towing & Roadside Assistance in Central Texas"
          subtext="Call Welch Bros Towing any time — we answer around the clock for all towing and roadside emergencies in Brownwood, TX and Central Texas."
        />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  )
}
