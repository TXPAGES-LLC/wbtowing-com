import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import BlogPostCard from '@/components/blog/BlogPostCard'
import { fetchBlogData, getPublishedPosts } from '@/lib/blog/source'

export const metadata: Metadata = {
  title: 'Towing & Roadside Assistance Blog | Welch Bros Towing – Brownwood, TX',
  description:
    'Read helpful guides, safety tips, and local towing information from Welch Bros Towing in Brownwood, TX. Expert advice for Texas drivers on emergency towing, roadside assistance, and vehicle safety.',
  alternates: { canonical: '/blog' },
}

export default async function BlogIndexPage() {
  const data = await fetchBlogData()
  const posts = getPublishedPosts(data.posts)

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Page header */}
        <section className="bg-[#0d0f18] border-b border-[#252a38] py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#82c0c7] text-sm font-bold uppercase tracking-widest mb-3">Resources</p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white uppercase leading-tight text-balance mb-4">
              Towing &amp; Roadside Assistance Tips for Texas Drivers
            </h1>
            <p className="text-[#d1d5db] text-lg max-w-2xl leading-relaxed">
              Helpful guides from Welch Bros Towing on emergency towing, roadside safety, vehicle recovery, and
              everything in between for drivers in Brownwood and Central Texas.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-16 px-4 bg-[#0d0f18]" aria-labelledby="blog-posts-heading">
          <div className="max-w-5xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-display font-bold text-2xl text-white uppercase mb-3">No Articles Yet</p>
                <p className="text-[#9ca3af]">Check back soon — new guides are on the way.</p>
              </div>
            ) : (
              <>
                <h2 id="blog-posts-heading" className="sr-only">
                  All Blog Posts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map((post) => (
                    <BlogPostCard key={post.slug} post={post} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  )
}
