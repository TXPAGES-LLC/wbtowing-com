import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import CallCTA from '@/components/CallCTA'

export const metadata: Metadata = {
  title: 'Roadside Tire Change Service in Brownwood, TX | Welch Bros Towing',
  description:
    'Flat tire on a Texas road? Welch Bros Towing provides fast 24-hour roadside tire change service in Brownwood and Central TX. Call now for immediate assistance.',
  alternates: { canonical: '/tire-changes' },
}

const PHONE = '(325) 998-6955'
const PHONE_HREF = 'tel:+13259986955'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Roadside Tire Change',
  name: 'Roadside Tire Change Service in Brownwood, TX',
  description:
    'Welch Bros Towing provides fast 24-hour roadside tire change service in Brownwood and Central Texas for flat tires.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Welch Bros Towing',
    telephone: '+13259986955',
    url: '',
  },
  areaServed: { '@type': 'City', name: 'Brownwood', containedInPlace: { '@type': 'State', name: 'Texas' } },
  url: '/tire-changes',
}

export default function TireChangesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main-content">
        <section className="bg-[#0a1628] border-b border-[#1c3350] py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#82c0c7] text-sm font-bold uppercase tracking-widest mb-3">Roadside Assistance</p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white uppercase leading-tight text-balance mb-4">
              Tire Change Service in Brownwood, TX
            </h1>
            <p className="text-[#cfd4dc] text-lg max-w-2xl leading-relaxed mb-8">
              A flat tire can leave you stranded anywhere in Central Texas. Welch Bros Towing provides fast 24-hour roadside tire change service — we come to you and get your spare mounted so you can get moving again safely.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[#f2c118] hover:bg-[#d9a913] text-[#0a1628] font-extrabold px-6 py-3 rounded transition-colors"
              aria-label={`Call Welch Bros Towing for tire change at ${PHONE}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
              </svg>
              Call Now: {PHONE}
            </a>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#0a1628]">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase mb-4">What Our Tire Change Service Includes</h2>
                <p className="text-[#cfd4dc] leading-relaxed mb-6">
                  When you call Welch Bros for a flat tire, our roadside technician arrives with the proper tools to safely mount your spare — no jack fumbling on the shoulder of a busy Texas highway. We check lug nut torque and give you an honest assessment of whether the spare will get you safely to a tire shop.
                </p>
                <ul className="space-y-3">
                  {[
                    'Safe mounting of your vehicle spare tire',
                    'Lug nut tightening to correct torque specs',
                    'Visual inspection of remaining tires',
                    'Tow to nearest shop if no spare available',
                    'Available 24 hours a day across Central Texas',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#cfd4dc] text-sm">
                      <svg className="text-[#f2c118] shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-[#0f2138] border border-[#1c3350] rounded-lg p-6">
                  <h3 className="font-display font-bold text-white text-lg uppercase mb-2">No Spare? No Problem.</h3>
                  <p className="text-[#a3acbb] text-sm leading-relaxed">
                    If your vehicle does not have a spare or the spare is also damaged, we will tow your vehicle to the nearest tire shop in Brownwood or wherever you need to go in Central Texas.
                  </p>
                </div>
                <div className="bg-[#0f2138] border border-[#1c3350] rounded-lg p-6">
                  <h3 className="font-display font-bold text-white text-lg uppercase mb-2">Stay Safe While You Wait</h3>
                  <p className="text-[#a3acbb] text-sm leading-relaxed">
                    Pull as far off the road as possible, turn on your hazard lights, and stay in your vehicle if you are on a busy highway. Our team will arrive as quickly as possible.
                  </p>
                </div>
                <div className="bg-[#f2c118]/10 border border-[#f2c118]/30 rounded-lg p-6 text-center">
                  <p className="font-display font-bold text-white text-xl uppercase mb-2">Flat Tire Right Now?</p>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 bg-[#f2c118] text-[#0a1628] font-bold px-5 py-2.5 rounded text-sm mt-1"
                  >
                    Call {PHONE}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CallCTA
          heading="Flat Tire in Central Texas?"
          subtext="Call Welch Bros Towing now for fast 24-hour tire change service anywhere in Brownwood and surrounding Central Texas communities."
        />

        <section className="py-12 px-4 bg-diamond-plate">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-xl text-white uppercase tracking-wide mb-6">Related Services</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              {[
                { label: 'All Roadside Services', href: '/services' },
                { label: 'Fuel Delivery', href: '/services#fuel-delivery' },
                { label: 'Jump Start', href: '/services#jump-start' },
                { label: 'Emergency Towing', href: '/services#emergency-towing' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 bg-[#0a1628] border border-[#1c3350] rounded text-[#a3acbb] hover:text-[#f2c118] hover:border-[#f2c118] transition-colors"
                >
                  {link.label}
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
