import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import CallCTA from '@/components/CallCTA'

export const metadata: Metadata = {
  title: 'Vehicle Recovery & Winch-Outs in Brownwood, TX | Stuck in Ditch or Mud | Welch Bros',
  description:
    'Welch Bros Towing provides 24/7 vehicle recovery and winch-out service in Brownwood and Central Texas. Stuck in mud, a ditch, or off-road? Call now for fast recovery.',
  alternates: { canonical: '/recovery-winch-outs' },
}

const PHONE = '(325) 998-6955'
const PHONE_HREF = 'tel:+13259986955'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Vehicle Recovery & Winch-Outs',
  name: 'Vehicle Recovery & Winch-Outs in Brownwood, TX',
  description:
    'Welch Bros Towing provides 24/7 vehicle recovery and winch-out service in Brownwood and Central Texas for vehicles stuck in mud, a ditch, or off-road.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Welch Bros Towing',
    telephone: '+13259986955',
    url: '',
  },
  areaServed: { '@type': 'City', name: 'Brownwood', containedInPlace: { '@type': 'State', name: 'Texas' } },
  url: '/recovery-winch-outs',
}

export default function RecoveryWinchOutsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main-content">
        <section className="bg-[#0a1628] border-b border-[#1c3350] py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <p className="text-[#9aa5b1] text-sm font-bold uppercase tracking-widest mb-3">Off-Road &amp; Accident Recovery</p>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white uppercase leading-tight text-balance mb-4">
                Vehicle Recovery &amp; Winch-Outs in Central Texas
              </h1>
              <p className="text-[#cfd4dc] text-lg max-w-2xl leading-relaxed mb-8">
                Stuck in a ditch, buried in mud, or off a Central Texas back road? Welch Bros Towing has the winch equipment and recovery expertise to get your vehicle out safely — without causing additional damage. Available 24 hours a day.
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
                src="/accident-recovery-1.jpg"
                alt="Welch Bros Towing heavy-duty wrecker towing a damaged truck chassis after a highway accident"
                width={960}
                height={720}
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#0a1628]" aria-labelledby="recovery-types">
          <div className="max-w-5xl mx-auto">
            <h2 id="recovery-types" className="font-display font-extrabold text-3xl text-white uppercase tracking-wide mb-3">
              Recovery Situations We Handle
            </h2>
            <p className="text-[#a3acbb] mb-10 max-w-2xl leading-relaxed">
              Texas terrain — from sandy flats to muddy creek beds and steep roadside dropoffs — creates a wide range of recovery scenarios. We have the tools and training to handle them all.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { src: '/accident-recovery-2.jpg', alt: 'Overturned semi-trailer with spilled lumber cargo on a Central Texas highway, first responders on scene' },
                { src: '/off-road-recovery-2.jpg', alt: 'Recovery crew working an overturned commercial truck in a Central Texas field' },
                { src: '/winch-out-2.jpg', alt: 'Heavy-duty wreckers using a crane winch to recover a propane tank trailer' },
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
                { title: 'Ditch & Embankment Recovery', desc: 'Vehicles that have slid off the road into a ditch or down an embankment are extracted using controlled winch tension.' },
                { title: 'Mud & Soft Ground Extraction', desc: 'Vehicles stuck in wet soil, sand, or loose terrain are pulled free with rigging that distributes force evenly.' },
                { title: 'Rollover Recovery', desc: 'Upright recovery for rolled vehicles, coordinated with emergency services as needed, using rotator wrecker equipment.' },
                { title: 'Off-Road Recovery', desc: 'Hunters, ranchers, and off-highway drivers who get stuck in remote Central Texas terrain.' },
                { title: 'Flood & Water Recovery', desc: 'Vehicles stalled in high water or pulled into standing water after a storm event — recovered safely once conditions allow.' },
                { title: 'Accident Scene Recovery', desc: 'Post-collision vehicle recovery in coordination with law enforcement and first responders to clear the roadway quickly.' },
              ].map((item) => (
                <div key={item.title} className="bg-[#0f2138] border border-[#1c3350] rounded-lg p-6">
                  <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-[#a3acbb] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-diamond-plate" aria-labelledby="recovery-equipment">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 id="recovery-equipment" className="font-display font-extrabold text-3xl text-white uppercase tracking-wide mb-5">
                Recovery Equipment &amp; Methods
              </h2>
              <p className="text-[#cfd4dc] leading-relaxed mb-6">
                Effective vehicle recovery requires more than a rope and a pickup truck. We use certified recovery rigging, snatch blocks, and properly rated winches to safely extract vehicles without worsening the situation.
              </p>
              <ul className="space-y-3">
                {[
                  'High-capacity winches rated for light and heavy vehicles',
                  'Snatch block rigging to redirect and amplify pulling force',
                  'Recovery straps and chains with rated load capacity',
                  'Rotator wrecker for complex and rollover recovery',
                  'Ground protection boards for soft terrain scenarios',
                  'Recovery anchors when no natural anchor is available',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#cfd4dc] text-sm">
                    <svg className="text-[#f2c118] shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0a1628] border border-[#1c3350] rounded-lg p-8">
              <p className="font-display font-extrabold text-xl text-white uppercase mb-2">Stuck Right Now?</p>
              <p className="text-[#a3acbb] text-sm mb-6 leading-relaxed">
                Give us your location, vehicle type, and a brief description of the situation. We will dispatch the right recovery equipment.
              </p>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-[#f2c118] hover:bg-[#d9a913] text-[#0a1628] font-extrabold text-xl py-4 rounded transition-colors w-full"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
                </svg>
                {PHONE}
              </a>
              <p className="text-[#9aa5b1] text-xs text-center mt-3">Available 24/7 — including remote rural areas</p>
            </div>
          </div>
        </section>

        <CallCTA heading="Need Recovery or Winch-Out Service?" subtext="Welch Bros Towing handles vehicle recovery across all of Central Texas — day or night, on-road or off. Call now." />

        <section className="py-10 px-4 bg-diamond-plate" aria-labelledby="related-recovery">
          <div className="max-w-5xl mx-auto">
            <h2 id="related-recovery" className="font-display font-bold text-lg text-white uppercase tracking-wide mb-4">Related Services</h2>
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                { label: '24/7 Towing', href: '/towing' },
                { label: 'Heavy-Duty Towing', href: '/heavy-duty-towing' },
                { label: 'Flatbed Towing', href: '/flatbed-towing' },
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
