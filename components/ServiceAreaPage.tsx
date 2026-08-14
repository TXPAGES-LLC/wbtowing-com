import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import CallCTA from '@/components/CallCTA'

const PHONE = '(325) 998-6955'
const PHONE_HREF = 'tel:+13259986955'

export type ServiceAreaService = {
  title: string
  href: string
  desc: string
}

export type ServiceAreaFAQ = {
  q: string
  a: string
}

export type ServiceAreaLink = {
  label: string
  href: string
}

export type ServiceAreaPageProps = {
  canonicalUrl: string
  breadcrumbLabel: string
  kicker: string
  heading: string
  intro: string
  servicesHeading: string
  servicesIntro: string
  services: ServiceAreaService[]
  ctaHeading: string
  ctaSubtext: string
  mapHeading: string
  mapIntro: string
  mapEmbedSrc: string
  mapTitle: string
  addressName: string
  addressLines: string
  mapLink: string
  mapLinkLabel: string
  faqHeading: string
  faqs: ServiceAreaFAQ[]
  relatedHeading: string
  relatedLinks: ServiceAreaLink[]
}

export default function ServiceAreaPage({
  canonicalUrl,
  breadcrumbLabel,
  kicker,
  heading,
  intro,
  servicesHeading,
  servicesIntro,
  services,
  ctaHeading,
  ctaSubtext,
  mapHeading,
  mapIntro,
  mapEmbedSrc,
  mapTitle,
  addressName,
  addressLines,
  mapLink,
  mapLinkLabel,
  faqHeading,
  faqs,
  relatedHeading,
  relatedLinks,
}: ServiceAreaPageProps) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: breadcrumbLabel, item: canonicalUrl },
    ],
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main id="main-content">
        {/* Page header */}
        <section className="bg-[#0a1628] border-b border-[#1c3350] py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-[#a3acbb] mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#f2c118] transition-colors">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#cfd4dc]">{breadcrumbLabel}</span>
            </nav>
            <p className="text-[#9aa5b1] text-sm font-bold uppercase tracking-widest mb-3">{kicker}</p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white uppercase leading-tight text-balance mb-4">
              {heading}
            </h1>
            <p className="text-[#cfd4dc] text-lg max-w-2xl leading-relaxed mb-8">{intro}</p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[#f2c118] hover:bg-[#d9a913] text-[#0a1628] font-extrabold px-6 py-3 rounded transition-colors"
              aria-label={`Call Welch Bros Towing at ${PHONE}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
              </svg>
              Call Now: {PHONE}
            </a>
          </div>
        </section>

        {/* Services list */}
        <section className="py-16 px-4 bg-[#0a1628]" aria-labelledby="services-list-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="services-list-heading" className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase tracking-wide mb-3">
              {servicesHeading}
            </h2>
            <p className="text-[#a3acbb] mb-10 max-w-2xl leading-relaxed">{servicesIntro}</p>
            <div className="space-y-6">
              {services.map((s) => (
                <article key={s.href + s.title} className="bg-[#0f2138] border border-[#1c3350] rounded-lg p-6 md:p-8">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white uppercase mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[#cfd4dc] leading-relaxed mb-4">{s.desc}</p>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1 text-[#f2c118] text-sm font-bold hover:underline"
                  >
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CallCTA heading={ctaHeading} subtext={ctaSubtext} />

        {/* Map */}
        <section className="py-16 px-4 bg-diamond-plate" aria-labelledby="map-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="map-heading" className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase tracking-wide mb-3">
              {mapHeading}
            </h2>
            <p className="text-[#a3acbb] mb-6 max-w-2xl leading-relaxed">{mapIntro}</p>
            <div className="rounded-lg overflow-hidden border border-[#1c3350]">
              <iframe
                src={mapEmbedSrc}
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={mapTitle}
                aria-label={mapTitle}
              />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <address className="not-italic text-[#cfd4dc] text-sm">
                <p className="text-white font-bold uppercase text-xs tracking-wider mb-1">{addressName}</p>
                {addressLines}
              </address>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#1c3350] text-[#a3acbb] hover:text-white hover:border-[#f2c118] px-5 py-2.5 rounded text-sm font-medium transition-colors shrink-0"
              >
                {mapLinkLabel}
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-[#0a1628]" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq-heading" className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase tracking-wide mb-8">
              {faqHeading}
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-[#1c3350] pb-6">
                  <h3 className="font-display font-bold text-white text-lg mb-2">{faq.q}</h3>
                  <p className="text-[#a3acbb] text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-12 px-4 bg-diamond-plate" aria-labelledby="related-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="related-heading" className="font-display font-bold text-lg text-white uppercase tracking-wide mb-4">
              {relatedHeading}
            </h2>
            <div className="flex flex-wrap gap-3 text-sm">
              {relatedLinks.map((l) => (
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
