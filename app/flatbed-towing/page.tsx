import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import CallCTA from '@/components/CallCTA'

export const metadata: Metadata = {
  title: 'Flatbed Towing in Brownwood, TX | AWD, Luxury & Low-Clearance Vehicles | Welch Bros',
  description:
    'Welch Bros Towing offers 24/7 flatbed towing in Brownwood and Central Texas for all-wheel-drive, luxury, low-clearance, and non-running vehicles. Call now.',
  alternates: { canonical: '/flatbed-towing' },
}

const PHONE = '(325) 998-6955'
const PHONE_HREF = 'tel:+13259986955'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Flatbed Towing',
  name: 'Flatbed Towing in Brownwood, TX',
  description:
    'Welch Bros Towing offers 24/7 flatbed towing in Brownwood and Central Texas for all-wheel-drive, luxury, low-clearance, and non-running vehicles.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Welch Bros Towing',
    telephone: '+13259986955',
    url: '',
  },
  areaServed: { '@type': 'City', name: 'Brownwood', containedInPlace: { '@type': 'State', name: 'Texas' } },
  url: '/flatbed-towing',
}

export default function FlatbedTowingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main-content">
        <section className="bg-[#0a1628] border-b border-[#1c3350] py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <p className="text-[#9aa5b1] text-sm font-bold uppercase tracking-widest mb-3">Safe. Damage-Free.</p>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white uppercase leading-tight text-balance mb-4">
                Flatbed Towing in Brownwood, TX
              </h1>
              <p className="text-[#cfd4dc] text-lg max-w-2xl leading-relaxed mb-8">
                Flatbed towing is the safest method for all-wheel-drive vehicles, luxury cars, low-clearance vehicles, and any vehicle that cannot safely roll on two wheels. Welch Bros operates flatbed trucks available 24 hours a day throughout Central Texas.
              </p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-[#f2c118] hover:bg-[#d9a913] text-[#0a1628] font-extrabold px-6 py-3 rounded transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
                </svg>
                Call Now: {PHONE}
              </a>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#1c3350] hidden lg:block">
              <img
                src="/flatbed-1.jpg"
                alt="Maroon Ford Mustang being loaded onto a Welch Bros Towing flatbed tow truck in Brownwood, TX"
                width={2048}
                height={1152}
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#0a1628]" aria-labelledby="when-flatbed">
          <div className="max-w-5xl mx-auto">
            <h2 id="when-flatbed" className="font-display font-extrabold text-3xl text-white uppercase tracking-wide mb-3">
              When Is Flatbed Towing the Right Choice?
            </h2>
            <p className="text-[#a3acbb] mb-10 max-w-2xl leading-relaxed">
              Not every vehicle should be towed with a wheel-lift. Flatbed is required or strongly recommended in the following situations.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'All-Wheel-Drive & 4WD Vehicles',
                  desc: 'AWD and 4WD vehicles require all four wheels to be off the ground during transport to prevent damage to the drivetrain and transfer case. Flatbed is the only safe option.',
                },
                {
                  title: 'Luxury & High-Value Cars',
                  desc: 'Sports cars, luxury sedans, and collector vehicles are loaded on flatbeds to eliminate any risk of damage to front spoilers, bumpers, or bodywork.',
                },
                {
                  title: 'Low-Clearance Vehicles',
                  desc: 'Lowered cars and performance vehicles cannot be safely hooked up with a wheel-lift without risking contact damage. Flatbed loading eliminates that risk.',
                },
                {
                  title: 'Non-Running or Heavily Damaged Vehicles',
                  desc: 'Vehicles that cannot be rolled at all — due to mechanical failure, accident damage, or seized brakes — must be loaded onto a flatbed for safe transport.',
                },
                {
                  title: 'Electric Vehicles',
                  desc: 'Most EV manufacturers require flatbed-only towing to protect the battery management system and drivetrain. We transport EVs with care.',
                },
                {
                  title: 'Long-Distance Transport',
                  desc: 'For long-distance moves, flatbed provides a more stable, controlled transport with no wear on the vehicle\'s tires or suspension.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-[#0f2138] border border-[#1c3350] rounded-lg p-6">
                  <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-[#a3acbb] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-diamond-plate" aria-labelledby="flatbed-process">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_360px] gap-10">
            <div>
            <h2 id="flatbed-process" className="font-display font-extrabold text-3xl text-white uppercase tracking-wide mb-8">
              How Our Flatbed Towing Works
            </h2>
            <ol className="space-y-6">
              {[
                { step: '01', title: 'Call Us', body: 'Call our dispatch line. Give us your location, vehicle type, and destination. We will confirm availability and provide an ETA.' },
                { step: '02', title: 'We Arrive & Assess', body: 'Our driver arrives, assesses the vehicle, and selects the proper loading method — ramps or winch onto the flatbed deck.' },
                { step: '03', title: 'Safe Loading', body: 'Your vehicle is loaded fully onto the flatbed with all four wheels secured using professional tie-down straps and chains.' },
                { step: '04', title: 'Secure Transport', body: 'We transport your vehicle to the shop, dealership, or address you specify. The load is checked before departure and at any stops.' },
              ].map((item) => (
                <li key={item.step} className="flex gap-5">
                  <span className="font-display font-extrabold text-4xl text-[#f2c118]/30 leading-none w-12 shrink-0">{item.step}</span>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-1">{item.title}</h3>
                    <p className="text-[#a3acbb] text-sm leading-relaxed">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#1c3350] self-start">
              <img
                src="/flatbed-towing.jpg"
                alt="White Ford pickup truck secured on a flatbed tow truck on a dirt road"
                width={960}
                height={720}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <CallCTA heading="Need a Flatbed Tow in Central Texas?" subtext="Call Welch Bros Towing for safe, damage-free flatbed towing available 24/7 across Brownwood and Central Texas." />

        <section className="py-10 px-4 bg-diamond-plate" aria-labelledby="related-flatbed">
          <div className="max-w-5xl mx-auto">
            <h2 id="related-flatbed" className="font-display font-bold text-lg text-white uppercase tracking-wide mb-4">Related Services</h2>
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                { label: '24/7 Towing', href: '/towing' },
                { label: 'Heavy-Duty Towing', href: '/heavy-duty-towing' },
                { label: 'Recovery & Winch-Outs', href: '/recovery-winch-outs' },
                { label: 'Service Areas', href: '/service-areas' },
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
