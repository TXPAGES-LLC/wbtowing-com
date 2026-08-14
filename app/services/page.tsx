import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import CallCTA from '@/components/CallCTA'

export const metadata: Metadata = {
  title: 'Towing & Roadside Assistance Services | Welch Bros Towing – Brownwood, TX',
  description:
    'Welch Bros Towing offers 24-hour emergency towing, accident recovery, lockout service, tire changes, fuel delivery, and jump starts in Brownwood and Central Texas.',
  alternates: { canonical: '/services' },
}

const PHONE = '(325) 998-6955'
const PHONE_HREF = 'tel:+13259986955'

const services = [
  {
    id: 'emergency-towing',
    title: 'Emergency Towing',
    desc: 'When your vehicle breaks down on the road, our emergency towing team responds fast. We handle passenger cars, pickups, SUVs, and light commercial vehicles with care. Our flatbed and wheel-lift trucks are ready 24 hours a day across Brownwood and Central Texas.',
    bullets: [
      'Available 24/7, including holidays',
      'Light and medium-duty vehicles',
      'Flatbed and wheel-lift options',
      'Short and long-distance towing',
    ],
  },
  {
    id: 'heavy-duty-towing',
    title: 'Heavy-Duty & Commercial Towing',
    desc: 'Semi-trucks, box trucks, RVs, and construction equipment require specialized equipment and trained operators. Welch Bros Towing is equipped for heavy-duty recovery and commercial towing throughout Central Texas.',
    bullets: [
      'Semi-trucks and 18-wheelers',
      'RVs and oversized vehicles',
      'Construction and farm equipment',
      'Commercial fleet support',
    ],
  },
  {
    id: 'accident-recovery',
    title: 'Accident Recovery & Wrecker Service',
    desc: 'After a collision, safe and efficient vehicle recovery is critical. Our wrecker operators work alongside emergency services to clear the scene, recover your vehicle, and minimize secondary hazards on Brownwood and Central Texas roads.',
    bullets: [
      'On-scene accident coordination',
      'Vehicle uprighting and recovery',
      'Rollover and off-road recovery',
      'Works with law enforcement and EMS',
    ],
  },
  {
    id: 'lockout',
    title: 'Car Lockout Service',
    desc: 'Locked out of your vehicle in Central Texas? Our certified technicians use professional tools to gain entry without damaging your door locks or window seals. Fast, discreet, and damage-free.',
    bullets: [
      'All makes and models',
      'No damage to door frames or locks',
      'Fast average response time',
      'Keys locked inside or lost',
    ],
  },
  {
    id: 'tire-change',
    title: 'Tire Change Service',
    desc: 'A flat tire at the wrong time and place can be dangerous. Our mobile tire change service gets you off the shoulder and back on the road using your spare. If you do not have a spare, we can tow you to a nearby tire shop.',
    bullets: [
      'Roadside tire swap with your spare',
      'Lug nut torque and safety check',
      'Tow to shop if no spare available',
      'Available day and night',
    ],
  },
  {
    id: 'fuel-delivery',
    title: 'Fuel Delivery',
    desc: 'Running out of gas on a remote Texas road is never fun. We deliver enough fuel to get you to the nearest station — quickly and without requiring a full tow. Gas and diesel available.',
    bullets: [
      'Gas and diesel delivery',
      'Enough fuel to reach the nearest station',
      'No tow required',
      'Available across Central Texas',
    ],
  },
  {
    id: 'jump-start',
    title: 'Jump Start / Battery Service',
    desc: 'Dead battery? We carry commercial-grade jump start equipment to get your vehicle started in minutes. If the battery is beyond recovery, we can tow you to a shop.',
    bullets: [
      'Professional jump start equipment',
      'Battery diagnostic assistance',
      'Tow to shop if needed',
      'Works on all vehicle types',
    ],
  },
  {
    id: 'winch-out',
    title: 'Winch-Out & Off-Road Recovery',
    desc: 'Stuck in mud, a ditch, or off the side of a Central Texas back road? Our winch and recovery equipment pulls you out safely without further damage to your vehicle or the terrain.',
    bullets: [
      'Mud, sand, and ditch recovery',
      'Multiple winch configurations',
      'Soft and hard recovery methods',
      'Works in remote areas',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Page header */}
        <section className="bg-[#0a1628] border-b border-[#1c3350] py-14 px-4" aria-label="Services page header">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#9aa5b1] text-sm font-bold uppercase tracking-widest mb-3">Brownwood &amp; Central Texas</p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white uppercase leading-tight text-balance mb-4">
              24-Hour Towing &amp; Roadside Assistance Services
            </h1>
            <p className="text-[#cfd4dc] text-lg max-w-2xl leading-relaxed mb-8">
              Welch Bros Towing offers the full range of towing and roadside assistance services in Brownwood, TX and throughout Central Texas — available every hour of every day.
            </p>
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

        {/* Services grid */}
        <section className="py-16 px-4 bg-[#0a1628]" aria-labelledby="services-list-heading">
          <h2 id="services-list-heading" className="sr-only">Full List of Services</h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {services.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className="bg-[#0f2138] border border-[#1c3350] rounded-lg p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded bg-[#f2c118]/10 text-[#f2c118] font-display font-bold text-lg shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h2 className="font-display font-extrabold text-2xl text-white uppercase mb-3">{s.title}</h2>
                    <p className="text-[#cfd4dc] leading-relaxed mb-5">{s.desc}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-[#a3acbb]">
                          <svg className="text-[#9aa5b1] shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CallCTA
          heading="Ready to Dispatch a Tow Truck?"
          subtext="Call Welch Bros Towing anytime for fast, professional towing and roadside assistance throughout Brownwood and Central Texas."
        />

        {/* Related links */}
        <section className="py-12 px-4 bg-diamond-plate" aria-labelledby="related-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="related-heading" className="font-display font-bold text-xl text-white uppercase tracking-wide mb-6">Related Resources</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              {[
                { label: 'Tire Changes in Brownwood, TX', href: '/tire-changes' },
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Photo Gallery', href: '/gallery' },
                { label: 'Reviews', href: '/reviews' },
                { label: 'About Welch Bros Towing', href: '/about-us' },
                { label: 'Contact Us', href: '/contact-us' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-[#a3acbb] hover:text-[#f2c118] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
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
