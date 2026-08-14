import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import CallCTA from '@/components/CallCTA'
import Gallery from '@/components/Gallery'
import { galleryImages, getImagesByCategory, type GalleryCategory } from '@/lib/gallery-images'

export const metadata: Metadata = {
  title: 'Photo Gallery | Welch Bros Towing in Brownwood, TX',
  description:
    'See Welch Bros Towing at work in Brownwood and Central Texas — towing, flatbed loading, heavy-duty recovery, off-road winch-outs, and emergency accident recovery.',
  alternates: { canonical: '/gallery' },
}

const categories: GalleryCategory[] = [
  'Towing',
  'Flatbed Towing',
  'Heavy-Duty Towing',
  'Recovery & Winch-Outs',
  'Emergency & Accident Recovery',
]

const categoryIntros: Record<GalleryCategory, string> = {
  Towing: 'Light and medium-duty tows around Brownwood and Central Texas.',
  'Flatbed Towing': 'Safe, wheels-off transport for AWD, luxury, and low-clearance vehicles.',
  'Heavy-Duty Towing': 'Semi-trucks, RVs, farm equipment, and commercial vehicle recovery.',
  'Recovery & Winch-Outs': 'Vehicles pulled from ditches, mud, and off-road terrain.',
  'Emergency & Accident Recovery': 'On-scene response for overturned vehicles and roadway emergencies.',
}

const categoryServiceLinks: Partial<Record<GalleryCategory, { label: string; href: string }>> = {
  Towing: { label: 'View 24/7 Towing Service Details', href: '/towing' },
  'Flatbed Towing': { label: 'View Flatbed Towing Service Details', href: '/flatbed-towing' },
  'Heavy-Duty Towing': { label: 'View Heavy-Duty Towing Service Details', href: '/heavy-duty-towing' },
  'Recovery & Winch-Outs': { label: 'View Recovery & Winch-Out Service Details', href: '/recovery-winch-outs' },
  'Emergency & Accident Recovery': { label: 'View Accident Recovery Service Details', href: '/services#accident-recovery' },
}

export default function GalleryPage() {
  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Welch Bros Towing Photo Gallery',
    description: 'Job photos from Welch Bros Towing showing towing, flatbed, heavy-duty, and recovery work across Brownwood and Central Texas.',
    url: '/gallery',
    image: galleryImages.map((img) => ({
      '@type': 'ImageObject',
      contentUrl: `${img.src}`,
      name: img.alt,
      description: img.alt,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />
      <Header />
      <main id="main-content">
        <section className="bg-[#0a1628] border-b border-[#1c3350] py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#9aa5b1] text-sm font-bold uppercase tracking-widest mb-3">Brownwood &amp; Central Texas</p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white uppercase leading-tight text-balance mb-4">
              Photo Gallery
            </h1>
            <p className="text-[#cfd4dc] text-lg max-w-2xl leading-relaxed">
              Real job photos from Welch Bros Towing — towing, flatbed loading, heavy-duty recovery, and off-road winch-outs across Brownwood and Central Texas. We add new photos as jobs come in.
            </p>
          </div>
        </section>

        {categories.map((category, idx) => {
          const images = getImagesByCategory(category)
          if (images.length === 0) return null
          return (
            <section
              key={category}
              className={`py-14 px-4 ${idx % 2 === 0 ? 'bg-[#0a1628]' : 'bg-diamond-plate'}`}
              aria-labelledby={`gallery-${category.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`}
            >
              <div className="max-w-6xl mx-auto">
                <h2
                  id={`gallery-${category.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`}
                  className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase tracking-wide mb-2"
                >
                  {category}
                </h2>
                <p className="text-[#a3acbb] mb-6 max-w-2xl leading-relaxed">{categoryIntros[category]}</p>
                <Gallery images={images} priority={idx === 0} />
                {categoryServiceLinks[category] && (
                  <Link
                    href={categoryServiceLinks[category]!.href}
                    className="inline-flex items-center gap-1 mt-6 text-[#f2c118] font-bold text-sm hover:underline"
                  >
                    {categoryServiceLinks[category]!.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                )}
              </div>
            </section>
          )
        })}

        <CallCTA
          heading="Need Service Like This?"
          subtext="Call Welch Bros Towing anytime — we are available 24 hours a day, 7 days a week for towing and roadside emergencies in Brownwood, TX."
        />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  )
}
