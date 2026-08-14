import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import CallCTA from '@/components/CallCTA'

export const metadata: Metadata = {
  title: 'Heavy-Duty Towing in Brownwood, TX | Semi-Trucks, RVs & Commercial | Welch Bros',
  description:
    'Welch Bros Towing provides 24/7 heavy-duty and commercial towing in Central Texas. Semi-trucks, 18-wheelers, RVs, construction equipment, and fleet vehicles. Call now.',
  alternates: { canonical: '/heavy-duty-towing' },
}

const PHONE = '(325) 998-6955'
const PHONE_HREF = 'tel:+13259986955'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Heavy-Duty Towing',
  name: 'Heavy-Duty Towing in Brownwood, TX',
  description:
    'Welch Bros Towing provides 24/7 heavy-duty and commercial towing in Central Texas for semi-trucks, 18-wheelers, RVs, construction equipment, and fleet vehicles.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Welch Bros Towing',
    telephone: '+13259986955',
    url: '',
  },
  areaServed: { '@type': 'City', name: 'Brownwood', containedInPlace: { '@type': 'State', name: 'Texas' } },
  url: '/heavy-duty-towing',
}

export default function HeavyDutyTowingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main-content">
        <section className="bg-[#0a1628] border-b border-[#1c3350] py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <p className="text-[#9aa5b1] text-sm font-bold uppercase tracking-widest mb-3">Commercial &amp; Fleet</p>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white uppercase leading-tight text-balance mb-4">
                Heavy-Duty Towing in Central Texas
              </h1>
              <p className="text-[#cfd4dc] text-lg max-w-2xl leading-relaxed mb-8">
                Welch Bros Towing has the equipment and experience to handle semi-trucks, 18-wheelers, RVs, buses, and heavy commercial equipment throughout Brownwood and Central Texas. When a standard wrecker will not cut it, we are the team to call.
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
                <Link href="/contact-us" className="inline-flex items-center gap-2 border border-[#1c3350] text-[#a3acbb] hover:text-white hover:border-[#f2c118] px-6 py-3 rounded transition-colors">
                  Commercial Inquiry
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#1c3350] hidden lg:block">
              <img
                src="/commercial.jpg"
                alt="Welch Bros Towing red Peterbilt semi hauling a flatbed trailer with a Mack truck in Brownwood, TX"
                width={960}
                height={720}
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#0a1628]" aria-labelledby="heavy-duty-vehicles">
          <div className="max-w-5xl mx-auto">
            <h2 id="heavy-duty-vehicles" className="font-display font-extrabold text-3xl text-white uppercase tracking-wide mb-3">
              Heavy-Duty &amp; Commercial Vehicles We Tow
            </h2>
            <p className="text-[#a3acbb] mb-10 max-w-2xl leading-relaxed">
              Our heavy-duty rotator and wrecker are equipped for large, complex recovery and towing jobs that standard trucks cannot handle.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { src: '/commercial-1.jpg', alt: 'Welch Bros Towing yellow heavy-duty truck hauling a lowboy trailer with commercial equipment' },
                { src: '/heavy-duty-2.jpg', alt: 'Heavy-duty tow truck recovering large farm equipment in a Central Texas field' },
                { src: '/commercial-2.jpg', alt: 'Welch Bros Towing heavy-duty wrecker towing a commercial truck at a highway fuel station' },
              ].map((img) => (
                <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#1c3350]">
                  <img
                    src={img.src || '/placeholder.svg'}
                    alt={img.alt}
                    width={960}
                    height={720}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Semi-Trucks & 18-Wheelers', desc: 'Full tractor-trailer combinations, day cabs, and sleeper trucks — loaded or empty.' },
                { title: 'Box Trucks & Straight Trucks', desc: 'Medium and heavy commercial box trucks for local and regional operators.' },
                { title: 'RVs & Motorhomes', desc: 'Class A, B, and C motorhomes as well as fifth-wheel and travel trailers.' },
                { title: 'Buses & Coach Vehicles', desc: 'School buses, charter coaches, and shuttle vehicles.' },
                { title: 'Construction Equipment', desc: 'Backhoes, excavators, loaders, and other on-site equipment needing transport or recovery.' },
                { title: 'Farm Equipment', desc: 'Combines, tractors, and oversized agricultural machinery across Central Texas farmland.' },
              ].map((item) => (
                <div key={item.title} className="bg-[#0f2138] border border-[#1c3350] rounded-lg p-6">
                  <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-[#a3acbb] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-diamond-plate" aria-labelledby="heavy-why">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 id="heavy-why" className="font-display font-extrabold text-3xl text-white uppercase tracking-wide mb-5">
                Why Welch Bros for Heavy-Duty Towing?
              </h2>
              <ul className="space-y-4">
                {[
                  { heading: 'Right Equipment', body: 'Heavy-duty rotator wreckers and lowboys for oversize loads and complex recovery scenarios.' },
                  { heading: 'Experienced Operators', body: 'Our drivers are trained on heavy-duty recovery procedures to protect your cargo and vehicle.' },
                  { heading: '24-Hour Dispatch', body: 'Commercial breakdowns do not respect business hours — we answer and dispatch at any time.' },
                  { heading: 'Commercial Accounts', body: 'Fleet operators and trucking companies can set up commercial accounts for priority service.' },
                  { heading: 'Covers Central Texas', body: 'We service all major corridors in and around Brownwood including Hwy 67, Hwy 84, and US 183.' },
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
              <p className="font-display font-extrabold text-xl text-white uppercase mb-2">Commercial Inquiries Welcome</p>
              <p className="text-[#a3acbb] text-sm mb-6 leading-relaxed">
                Trucking companies, fleet operators, and construction contractors — contact us about priority accounts and commercial towing agreements.
              </p>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-[#f2c118] hover:bg-[#d9a913] text-[#0a1628] font-extrabold text-lg py-4 rounded transition-colors w-full mb-3"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
                </svg>
                {PHONE}
              </a>
              <Link href="/contact-us" className="flex items-center justify-center gap-2 border border-[#1c3350] text-[#a3acbb] hover:text-white hover:border-[#f2c118] py-3 rounded transition-colors text-sm w-full">
                Send a Commercial Inquiry
              </Link>
            </div>
          </div>
        </section>

        <CallCTA heading="Heavy-Duty Breakdown in Central Texas?" subtext="Welch Bros Towing dispatches heavy-duty wreckers 24 hours a day across Brownwood and Central Texas. Call now." />

        <section className="py-10 px-4 bg-diamond-plate" aria-labelledby="related-heavy">
          <div className="max-w-5xl mx-auto">
            <h2 id="related-heavy" className="font-display font-bold text-lg text-white uppercase tracking-wide mb-4">Related Services</h2>
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                { label: '24/7 Towing', href: '/towing' },
                { label: 'Flatbed Towing', href: '/flatbed-towing' },
                { label: 'Recovery & Winch-Outs', href: '/recovery-winch-outs' },
                { label: 'Contact / Locations', href: '/contact-us' },
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
