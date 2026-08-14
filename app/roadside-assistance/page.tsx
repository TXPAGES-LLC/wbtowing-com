import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import CallCTA from '@/components/CallCTA'

export const metadata: Metadata = {
  title: 'Roadside Assistance in Brownwood, TX | Jump Starts, Lockouts, Tire Changes, Fuel | Welch Bros',
  description:
    'Welch Bros Towing provides 24-hour roadside assistance in Brownwood and Central Texas — jump starts, car lockouts, flat tire changes, and fuel delivery. Call now.',
  alternates: { canonical: '/roadside-assistance' },
}

const PHONE = '(325) 998-6955'
const PHONE_HREF = 'tel:+13259986955'

const roadsideServices = [
  {
    id: 'jump-start',
    title: 'Jump Starts',
    desc: 'A dead battery does not have to end your day. Our technicians carry commercial-grade jump start equipment that gets most vehicles started within minutes. If the battery is beyond recovery, we can tow you to the nearest shop.',
    bullets: ['Works on all 12V and 24V vehicles', 'Commercial jump packs on every truck', 'Battery diagnostic check included', 'Tow to shop if battery is failed'],
  },
  {
    id: 'car-lockout',
    title: 'Car Lockout Service',
    desc: 'Locked your keys inside your vehicle? It happens. Our technicians use professional lockout tools to open your door quickly and without damage to your lock cylinder, window seals, or door frame.',
    bullets: ['All makes and models', 'No damage to locks or door frames', 'Fast average arrival time', 'Keys locked in or lost'],
  },
  {
    id: 'tire-changes',
    title: 'Tire Changes',
    desc: 'A flat tire on a busy Texas road or a remote back road is dangerous. We come to you, swap your flat for your spare, and check lug nut torque before you drive off. If you have no spare, we will tow you to the nearest tire shop.',
    bullets: ['Roadside tire swap with your spare', 'Lug nut torque and safety check', 'Tow to shop if no spare available', 'Day and night availability'],
  },
  {
    id: 'fuel-delivery',
    title: 'Fuel Delivery',
    desc: 'Running out of gas on a remote Texas highway can leave you stranded for hours. We deliver enough fuel — gas or diesel — to get you to the nearest station. No tow required.',
    bullets: ['Gas and diesel available', 'Enough fuel to reach nearest station', 'No tow required', 'Covers remote Central Texas routes'],
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Roadside Assistance',
  name: 'Roadside Assistance in Brownwood, TX',
  description:
    'Welch Bros Towing provides 24-hour roadside assistance in Brownwood and Central Texas — jump starts, car lockouts, flat tire changes, and fuel delivery.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Welch Bros Towing',
    telephone: '+13259986955',
    url: '',
  },
  areaServed: { '@type': 'City', name: 'Brownwood', containedInPlace: { '@type': 'State', name: 'Texas' } },
  url: '/roadside-assistance',
}

export default function RoadsideAssistancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main-content">
        <section className="bg-[#0a1628] border-b border-[#1c3350] py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#9aa5b1] text-sm font-bold uppercase tracking-widest mb-3">Brownwood &amp; Central Texas</p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white uppercase leading-tight text-balance mb-4">
              24-Hour Roadside Assistance in Brownwood, TX
            </h1>
            <p className="text-[#cfd4dc] text-lg max-w-2xl leading-relaxed mb-8">
              From dead batteries and lockouts to flat tires and empty fuel tanks — Welch Bros Towing covers every common roadside emergency in Brownwood and all of Central Texas. We respond fast so you are not stranded longer than necessary.
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
        </section>

        {/* Alert banner */}
        <div className="bg-[#c8202f] py-3 px-4 text-center">
          <p className="text-white text-sm font-bold">
            In an emergency, do not fill out a form — <a href={PHONE_HREF} className="underline hover:no-underline font-extrabold">call {PHONE}</a> for immediate dispatch.
          </p>
        </div>

        {/* Services list */}
        <section className="py-16 px-4 bg-[#0a1628]" aria-labelledby="roadside-services">
          <div className="max-w-5xl mx-auto">
            <h2 id="roadside-services" className="font-display font-extrabold text-3xl text-white uppercase tracking-wide mb-3">
              Roadside Services We Provide
            </h2>
            <p className="text-[#a3acbb] mb-10 max-w-2xl leading-relaxed">
              All four services below are available 24 hours a day, 7 days a week across Brownwood and the surrounding Central Texas area.
            </p>
            <div className="space-y-8">
              {roadsideServices.map((s, i) => (
                <article key={s.id} id={s.id} className="bg-[#0f2138] border border-[#1c3350] rounded-lg p-8">
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
          </div>
        </section>

        {/* Trust photo */}
        <section className="py-14 px-4 bg-diamond-plate" aria-labelledby="roadside-in-action">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-8 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#1c3350]">
              <img
                src="/emergency-assistance-1.jpg"
                alt="Welch Bros Towing wreckers clearing an overturned freight trailer accident on a Central Texas highway"
                width={960}
                height={720}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 id="roadside-in-action" className="font-display font-extrabold text-2xl text-white uppercase tracking-wide mb-3">
                We Respond, Day or Night
              </h2>
              <p className="text-[#cfd4dc] leading-relaxed">
                Whether it is a dead battery in a parking lot or a major incident on the highway, Welch Bros Towing sends a truck out in any weather, at any hour. See more of our crew at work in the{' '}
                <Link href="/gallery" className="text-[#f2c118] hover:underline font-bold">photo gallery</Link>.
              </p>
            </div>
          </div>
        </section>

        <CallCTA heading="Need Roadside Help in Central Texas?" subtext="Call Welch Bros Towing for immediate roadside assistance anywhere in Brownwood and Central Texas — available 24/7." />

        <section className="py-10 px-4 bg-diamond-plate" aria-labelledby="related-roadside">
          <div className="max-w-5xl mx-auto">
            <h2 id="related-roadside" className="font-display font-bold text-lg text-white uppercase tracking-wide mb-4">Related Services</h2>
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                { label: '24/7 Towing', href: '/towing' },
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
