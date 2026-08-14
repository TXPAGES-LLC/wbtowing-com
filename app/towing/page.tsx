import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import CallCTA from '@/components/CallCTA'

export const metadata: Metadata = {
  title: '24/7 Towing Service in Brownwood, TX | Welch Bros Towing',
  description:
    'Welch Bros Towing provides 24/7 emergency towing in Brownwood and Central Texas. Fast response for cars, trucks, and SUVs — day or night. Call now.',
  alternates: { canonical: '/towing' },
}

const PHONE = '(325) 998-6955'
const PHONE_HREF = 'tel:+13259986955'

const faqs = [
  {
    q: 'How fast can you respond to a tow request in Brownwood?',
    a: 'Response times vary by location and demand, but we prioritize emergency calls and dispatch the nearest available driver immediately.',
  },
  {
    q: 'Do you tow all vehicle types?',
    a: 'Yes — we handle passenger cars, pickups, SUVs, vans, and light commercial vehicles. For heavier equipment, see our Heavy-Duty Towing service.',
  },
  {
    q: 'Can you tow my vehicle long distance?',
    a: 'Absolutely. We handle both local tows within Central Texas and long-distance transport. Call us to discuss your specific route and vehicle.',
  },
  {
    q: 'Is your towing service available on holidays?',
    a: 'Yes. We operate 365 days a year including all major holidays. Emergencies do not wait, and neither do we.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: '24/7 Towing Service',
  name: '24/7 Towing Service in Brownwood, TX',
  description:
    'Welch Bros Towing provides 24/7 emergency towing in Brownwood and Central Texas for cars, trucks, and SUVs — day or night.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Welch Bros Towing',
    telephone: '+13259986955',
    url: '',
  },
  areaServed: { '@type': 'City', name: 'Brownwood', containedInPlace: { '@type': 'State', name: 'Texas' } },
  url: '/towing',
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

export default function TowingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <main id="main-content">
        {/* Page header */}
        <section className="bg-[#0a1628] border-b border-[#1c3350] py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <p className="text-[#9aa5b1] text-sm font-bold uppercase tracking-widest mb-3">Brownwood &amp; Central Texas</p>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white uppercase leading-tight text-balance mb-4">
                24/7 Towing Service in Brownwood, TX
              </h1>
              <p className="text-[#cfd4dc] text-lg max-w-2xl leading-relaxed mb-8">
                Welch Bros Towing dispatches fast — around the clock, every day of the year. Whether you have a breakdown on a Central Texas highway or need a vehicle moved across town, we are the local towing company that answers when you call.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 bg-[#f2c118] hover:bg-[#d9a913] text-[#0a1628] font-extrabold px-6 py-3 rounded transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
                  </svg>
                  Call Now: {PHONE}
                </a>
                <Link href="/service-areas" className="inline-flex items-center gap-2 border border-[#1c3350] text-[#a3acbb] hover:text-white hover:border-[#f2c118] px-6 py-3 rounded transition-colors">
                  View Service Areas
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#1c3350] hidden lg:block">
              <img
                src="/towing-1.jpg"
                alt="Welch Bros Towing wrecker towing a white pickup truck on a street in Brownwood, TX"
                width={2048}
                height={1536}
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* What we tow */}
        <section className="py-16 px-4 bg-[#0a1628]" aria-labelledby="what-we-tow">
          <div className="max-w-5xl mx-auto">
            <h2 id="what-we-tow" className="font-display font-extrabold text-3xl text-white uppercase tracking-wide mb-3">
              What We Tow
            </h2>
            <p className="text-[#a3acbb] mb-10 max-w-2xl leading-relaxed">
              Our fleet of tow trucks covers the full range of light and medium-duty vehicles. We have the right equipment for every job.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Passenger Cars', desc: 'Sedans, coupes, and hatchbacks towed safely using flatbed or wheel-lift method.' },
                { title: 'Pickup Trucks', desc: 'Full-size and mid-size pickups including 1500, 2500, and 3500 series trucks.' },
                { title: 'SUVs & Crossovers', desc: 'All-wheel and four-wheel-drive SUVs loaded carefully to avoid drivetrain damage.' },
                { title: 'Vans & Minivans', desc: 'Cargo and passenger vans towed with proper hookups and strapping.' },
                { title: 'Motorcycles', desc: 'Motorcycles secured and transported with dedicated tie-down equipment.' },
                { title: 'Light Commercial Vehicles', desc: 'Box vans and light-duty work trucks for local businesses and contractors.' },
              ].map((item) => (
                <div key={item.title} className="bg-[#0f2138] border border-[#1c3350] rounded-lg p-6">
                  <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-[#a3acbb] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why call us */}
        <section className="py-14 px-4 bg-diamond-plate" aria-labelledby="why-welch-towing">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 id="why-welch-towing" className="font-display font-extrabold text-3xl text-white uppercase tracking-wide mb-5">
                Why Choose Welch Bros for 24-Hour Towing in Central Texas?
              </h2>
              <ul className="space-y-4">
                {[
                  { heading: 'Real Local Response', body: 'We are based in Brownwood, TX — not a national dispatch center. When you call, a local driver heads your way.' },
                  { heading: 'Proper Equipment', body: 'Flatbed and wheel-lift trucks on standby so we always have the right tow method for your vehicle.' },
                  { heading: 'Licensed & Insured', body: 'Fully licensed towing operators. Your vehicle is protected from pickup to drop-off.' },
                  { heading: 'No Hidden Fees', body: 'Straight pricing quoted before we hook up. No surprise charges at delivery.' },
                  { heading: 'Available Every Hour', body: '24/7/365 — nights, weekends, and holidays. We answer when other companies do not.' },
                ].map((item) => (
                  <li key={item.heading} className="flex gap-3">
                    <svg className="text-[#f2c118] shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <div>
                      <span className="font-bold text-white text-sm">{item.heading} — </span>
                      <span className="text-[#cfd4dc] text-sm">{item.body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0a1628] border border-[#1c3350] rounded-lg p-8">
              <p className="font-display font-extrabold text-2xl text-white uppercase mb-2">Need a Tow Right Now?</p>
              <p className="text-[#a3acbb] text-sm mb-6 leading-relaxed">Call us directly — do not wait for a form response when you are stranded.</p>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-[#f2c118] hover:bg-[#d9a913] text-[#0a1628] font-extrabold text-xl py-4 rounded transition-colors w-full"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
                </svg>
                {PHONE}
              </a>
              <p className="text-[#9aa5b1] text-xs text-center mt-3">Available 24 hours a day, 7 days a week</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 px-4 bg-[#0a1628]" aria-labelledby="towing-faq">
          <div className="max-w-3xl mx-auto">
            <h2 id="towing-faq" className="font-display font-extrabold text-2xl text-white uppercase tracking-wide mb-8">
              24/7 Towing — Frequently Asked Questions
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

        <CallCTA heading="Stranded in Central Texas?" subtext="Call Welch Bros Towing for fast 24/7 towing in Brownwood and surrounding areas. We dispatch immediately." />

        {/* Related */}
        <section className="py-10 px-4 bg-diamond-plate" aria-labelledby="related-towing">
          <div className="max-w-5xl mx-auto">
            <h2 id="related-towing" className="font-display font-bold text-lg text-white uppercase tracking-wide mb-4">Related Services</h2>
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                { label: 'Roadside Assistance', href: '/roadside-assistance' },
                { label: 'Heavy-Duty Towing', href: '/heavy-duty-towing' },
                { label: 'Flatbed Towing', href: '/flatbed-towing' },
                { label: 'Recovery & Winch-Outs', href: '/recovery-winch-outs' },
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'FAQ', href: '/faq' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="px-4 py-2 bg-[#0a1628] border border-[#1c3350] rounded text-[#a3acbb] hover:text-[#f2c118] hover:border-[#f2c118] transition-colors">
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
