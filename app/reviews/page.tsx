import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import CallCTA from '@/components/CallCTA'
import VerifiedProfiles from '@/components/VerifiedProfiles'

export const metadata: Metadata = {
  title: 'Reviews | Welch Bros Towing in Brownwood, TX',
  description:
    'Read verified customer reviews for Welch Bros Towing on Google, Yelp, Bing, and other trusted directories, and see why Central Texas drivers rely on us for towing and roadside help.',
  alternates: { canonical: '/reviews' },
}

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-[#0a1628] border-b border-[#1c3350] py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#9aa5b1] text-sm font-bold uppercase tracking-widest mb-3">Brownwood &amp; Central Texas</p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white uppercase leading-tight text-balance mb-4">
              Customer Reviews
            </h1>
            <p className="text-[#cfd4dc] text-lg max-w-2xl leading-relaxed">
              Welch Bros Towing is verified and reviewed on Google, Yelp, Bing, and several other trusted platforms. Tap any profile below to read reviews directly from the source.
            </p>
          </div>
        </section>

        <VerifiedProfiles />

        <CallCTA
          heading="Had a Great Experience With Us?"
          subtext="If we got you back on the road, a quick review on Google or Yelp helps other Central Texas drivers find us when they need help."
          dark
        />

        <section className="py-10 px-4 bg-diamond-plate" aria-labelledby="related-reviews">
          <div className="max-w-5xl mx-auto">
            <h2 id="related-reviews" className="font-display font-bold text-lg text-white uppercase tracking-wide mb-4">
              Explore More
            </h2>
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                { label: 'Services', href: '/services' },
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'FAQ', href: '/faq' },
                { label: 'About Us', href: '/about-us' },
                { label: 'Contact Us', href: '/contact-us' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 bg-[#0a1628] border border-[#1c3350] rounded text-[#a3acbb] hover:text-[#f2c118] hover:border-[#f2c118] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  )
}
