import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import CallCTA from '@/components/CallCTA'

export const metadata: Metadata = {
  title: 'Welch Bros Towing | 24 Hour Towing & Roadside Assistance in Brownwood, TX',
  description:
    'Welch Bros Towing delivers 24 hour towing and roadside assistance across Brownwood and Central Texas. Fast response for emergencies, lockouts, tire changes, fuel delivery, and vehicle recovery.',
  alternates: { canonical: '/' },
}

const PHONE = '(325) 998-6955'
const PHONE_HREF = 'tel:+13259986955'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: '24/7 Towing',
    desc: 'Light and medium-duty towing around the clock. Cars, trucks, SUVs — we dispatch fast any time of day or night in Central Texas.',
    href: '/towing',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Roadside Assistance',
    desc: 'Jump starts, lockouts, tire changes, and fuel delivery — our roadside team gets you moving again without a long wait.',
    href: '/roadside-assistance',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 2 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    title: 'Heavy-Duty Towing',
    desc: 'Semi-trucks, box trucks, RVs, and commercial equipment. Welch Bros has the heavy-duty rigs and trained operators to handle it.',
    href: '/heavy-duty-towing',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/><line x1="1" y1="9" x2="16" y2="9"/>
      </svg>
    ),
    title: 'Flatbed Towing',
    desc: 'All-wheel-drive vehicles, luxury cars, and low-clearance vehicles are loaded safely on our flatbed trucks — no wheel contact, no damage risk.',
    href: '/flatbed-towing',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Recovery & Winch-Outs',
    desc: 'Stuck in a ditch, mud, or off-road? Our winch and recovery equipment pulls you out safely without further damage to your vehicle.',
    href: '/recovery-winch-outs',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Service Areas',
    desc: 'Based in Brownwood, TX, we cover Ballinger, Coleman, Comanche, San Saba, Early, Rising Star, Goldthwaite, Stephenville, and surrounding communities.',
    href: '/service-areas',
  },
]

const trustPoints = [
  { stat: '24/7', label: 'Always Available' },
  { stat: 'Fast', label: 'Response Times' },
  { stat: 'Local', label: 'Brownwood, TX' },
  { stat: 'Licensed', label: '& Insured' },
]

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section
          className="relative bg-[#0a1628] py-20 md:py-28 px-4 overflow-hidden"
          aria-label="Welch Bros Towing hero"
        >
          {/* Background image */}
          <img
            src="/about-us.jpg"
            alt="Welch Bros Towing fleet of heavy-duty wreckers behind a field of Texas bluebonnets in Central Texas"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-[#0a1628]/60"
            aria-hidden="true"
          />

          <div className="relative max-w-5xl mx-auto">
            <p className="inline-block text-[#9aa5b1] text-sm font-bold uppercase tracking-widest mb-4 border border-[#9aa5b1]/30 px-3 py-1 rounded">
              Brownwood &amp; Central Texas
            </p>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white uppercase leading-tight text-balance mb-6">
              24 Hour Towing &amp;{' '}
              <span className="text-[#f2c118]">Roadside Assistance</span>{' '}
              in Central TX
            </h1>
            <p className="text-[#cfd4dc] text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              Welch Bros Towing responds fast — day or night — for emergency towing, vehicle recovery, lockouts, tire changes, and fuel delivery across Brownwood and all of Central Texas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-3 bg-[#f2c118] hover:bg-[#d9a913] text-[#0a1628] font-extrabold text-lg px-8 py-4 rounded transition-colors"
                aria-label={`Call Welch Bros Towing 24/7 at ${PHONE}`}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
                </svg>
                Call {PHONE}
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white hover:bg-white/10 font-bold text-lg px-8 py-4 rounded transition-colors"
              >
                View All Services
              </Link>
            </div>

            {/* Trust bar */}
            <div className="mt-12 flex flex-wrap gap-6">
              {trustPoints.map((t) => (
                <div key={t.label} className="flex items-center gap-2">
                  <span className="font-display font-extrabold text-[#f2c118] text-xl">{t.stat}</span>
                  <span className="text-[#a3acbb] text-sm">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency banner */}
        <div className="bg-[#c8202f] py-4 px-4 text-center">
          <p className="text-white font-bold text-base">
            Stranded right now?{' '}
            <a href={PHONE_HREF} className="underline hover:no-underline font-extrabold">
              Call {PHONE}
            </a>{' '}
            — We answer every call, 24 hours a day.
          </p>
        </div>

        {/* Services */}
        <section className="py-16 px-4 bg-[#0a1628]" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h2 id="services-heading" className="font-display font-extrabold text-3xl md:text-4xl text-white uppercase tracking-wide text-balance">
                Towing &amp; Roadside Services in Brownwood, TX
              </h2>
              <p className="text-[#a3acbb] mt-3 max-w-2xl leading-relaxed">
                From light-duty passenger vehicle towing to heavy commercial recovery, Welch Bros handles every roadside emergency in Central Texas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group bg-[#0f2138] border border-[#1c3350] hover:border-[#f2c118] rounded-lg p-6 flex flex-col gap-4 transition-colors"
                  aria-label={`Learn more about ${s.title}`}
                >
                  <span className="text-[#f2c118]">{s.icon}</span>
                  <h3 className="font-display font-bold text-white text-xl group-hover:text-[#f2c118] transition-colors">{s.title}</h3>
                  <p className="text-[#a3acbb] text-sm leading-relaxed flex-1">{s.desc}</p>
                  <span className="text-[#f2c118] text-sm font-bold flex items-center gap-1">
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* In Action photo strip */}
        <section className="py-14 px-4 bg-[#0a1628]" aria-labelledby="in-action-heading">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <h2 id="in-action-heading" className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase tracking-wide text-balance">
                  Welch Bros Towing in Action
                </h2>
                <p className="text-[#a3acbb] mt-2 max-w-xl">Real jobs from Brownwood and Central Texas — towing, heavy-duty recovery, and winch-outs.</p>
              </div>
              <Link href="/gallery" className="text-[#f2c118] font-bold text-sm hover:underline shrink-0 flex items-center gap-1">
                View Full Gallery
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { src: '/towing-1.jpg', alt: 'Welch Bros Towing wrecker towing a white pickup truck on a street in Brownwood, TX', w: 2048, h: 1536 },
                { src: '/24hr-towing-1.jpg', alt: 'Welch Bros Towing wrecker and service truck responding to a nighttime call at a Brownwood, TX dealership', w: 960, h: 720 },
                { src: '/commercial.jpg', alt: 'Welch Bros Towing red Peterbilt semi hauling a flatbed trailer with a Mack truck in Brownwood, TX', w: 960, h: 720 },
              ].map((img) => (
                <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#1c3350]">
                  <img
                    src={img.src || '/placeholder.svg'}
                    alt={img.alt}
                    width={img.w}
                    height={img.h}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-diamond-plate" aria-labelledby="why-heading">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id="why-heading" className="font-display font-extrabold text-3xl md:text-4xl text-white uppercase tracking-wide text-balance mb-6">
                  Tow Truck Company Built on Trust &amp; Reliability in Central Texas
                </h2>
                <p className="text-[#cfd4dc] leading-relaxed mb-5">
                  Welch Bros Towing has served Brownwood, TX and surrounding communities with dependable, professional towing and roadside assistance. We are not a dispatch call center — when you call us, a real local technician answers and responds.
                </p>
                <p className="text-[#cfd4dc] leading-relaxed mb-8">
                  Our drivers are licensed, experienced, and committed to treating your vehicle with care. Whether it is a minor roadside issue or a major accident recovery, we bring the right equipment and the right attitude every time.
                </p>
                <ul className="space-y-3">
                  {[
                    'Locally owned and operated in Brownwood, TX',
                    'Licensed, insured, and fully equipped',
                    'Light-duty through heavy commercial towing',
                    'Fast response — we know every road in Central Texas',
                    'Honest pricing with no hidden fees',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#cfd4dc] text-sm">
                      <svg className="text-[#f2c118] shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2 bg-[#f2c118] hover:bg-[#d9a913] text-[#0a1628] font-bold px-6 py-3 rounded transition-colors"
                  >
                    Call Now: {PHONE}
                  </a>
                  <Link
                    href="/about-us"
                    className="inline-flex items-center justify-center gap-2 border border-[#1c3350] text-[#a3acbb] hover:text-white hover:border-[#f2c118] px-6 py-3 rounded transition-colors"
                  >
                    About Welch Bros
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '24/7', label: 'Emergency Availability' },
                  { num: 'Local', label: 'Brownwood Based' },
                  { num: 'Fast', label: 'ETA Response' },
                  { num: 'All', label: 'Vehicle Types Handled' },
                ].map((item) => (
                  <div key={item.label} className="bg-[#0a1628] border border-[#1c3350] rounded-lg p-6 text-center">
                    <p className="font-display font-extrabold text-4xl text-[#f2c118] mb-2">{item.num}</p>
                    <p className="text-[#a3acbb] text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-14 px-4 bg-[#0a1628]" aria-labelledby="areas-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="areas-heading" className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase tracking-wide text-balance mb-3">
              Serving Brownwood TX &amp; All of Central Texas
            </h2>
            <p className="text-[#a3acbb] mb-8 max-w-xl leading-relaxed">
              Our tow trucks cover a wide area around Brownwood. If you are stranded on a Central Texas highway or back road, we will come to you.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Brownwood, TX', href: '/service-areas' },
                { label: 'Ballinger, TX', href: '/service-areas/ballinger-tx' },
                { label: 'Coleman, TX', href: '/service-areas/coleman-tx' },
                { label: 'Comanche, TX', href: '/service-areas/comanche-tx' },
                { label: 'San Saba, TX', href: '/service-areas/san-saba-tx' },
                { label: 'Early, TX', href: '/service-areas/early-tx' },
                { label: 'Rising Star, TX', href: '/service-areas/rising-star-tx' },
                { label: 'Goldthwaite, TX', href: '/service-areas/goldthwaite-tx' },
                { label: 'Stephenville, TX', href: '/service-areas/stephenville-tx' },
              ].map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="px-4 py-2 bg-[#0f2138] border border-[#1c3350] rounded text-[#cfd4dc] text-sm hover:border-[#f2c118] hover:text-[#f2c118] transition-colors"
                >
                  {area.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CallCTA
          heading="Need Emergency Towing in Central Texas?"
          subtext="Call Welch Bros Towing anytime — we are available 24 hours a day, 7 days a week for all towing and roadside emergencies in Brownwood, TX."
        />

      </main>

      <Footer />
      <StickyCallBar />
    </>
  )
}
