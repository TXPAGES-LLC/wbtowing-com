import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import CallCTA from '@/components/CallCTA'

export const metadata: Metadata = {
  title: 'About Welch Bros Towing | 24/7 Towing Company in Brownwood, TX',
  description:
    'Welch Bros Towing is a locally owned and operated towing company in Brownwood, TX. Learn about our team, our values, and why Central Texas drivers trust us for 24-hour towing and roadside assistance.',
  alternates: { canonical: '/about-us' },
}

const PHONE = '(325) 998-6955'
const PHONE_HREF = 'tel:+13259986955'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-[#0a1628] border-b border-[#1c3350] py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#9aa5b1] text-sm font-bold uppercase tracking-widest mb-3">Brownwood, TX</p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white uppercase leading-tight text-balance mb-4">
              About Welch Bros Towing
            </h1>
            <p className="text-[#cfd4dc] text-lg max-w-2xl leading-relaxed">
              Welch Bros Towing has proudly served Central Texas as a family-owned and operated towing company since 2007. With nearly two decades of experience, we have built a reputation as a trusted tow truck company for dependable, professional service rooted in strong family values and a commitment to our community.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-14 px-4 bg-[#0a1628] border-b border-[#1c3350]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase mb-5">
              Our Mission
            </h2>
            <p className="text-[#cfd4dc] text-lg leading-relaxed max-w-2xl">
              Our mission is simple: to provide fast, reliable towing and roadside assistance with a personal touch. We understand how stressful vehicle emergencies can be, and we treat every customer like a member of our own family, offering honest, courteous service 24/7.
            </p>
          </div>
        </section>

        {/* Photo row */}
        <section className="py-14 px-4 bg-[#0a1628] border-b border-[#1c3350]">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#1c3350]">
              <img
                src="/about-us.jpg"
                alt="Welch Bros Towing fleet of heavy-duty wreckers behind a field of Texas bluebonnets in Central Texas"
                width={1456}
                height={1092}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#1c3350]">
              <img
                src="/welch-bros-towing-1.jpg"
                alt="Welch Bros Towing heavy-duty wrecker with Brownwood, TX signage on the side"
                width={960}
                height={720}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#0a1628]">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase mb-5">
                  Who We Are
                </h2>
                <p className="text-[#cfd4dc] leading-relaxed mb-4">
                  Welch Bros Towing serves Brownwood and the surrounding Central Texas area with professional towing, wrecker, and roadside assistance services. We are not a national chain or a call-center dispatch operation — we are a local company with local drivers who know these roads.
                </p>
                <p className="text-[#cfd4dc] leading-relaxed mb-4">
                  Our team handles everything from light-duty passenger vehicle towing to heavy commercial recovery. We work with individual drivers, businesses, fleet operators, and insurance companies across the Brownwood area.
                </p>
                <p className="text-[#cfd4dc] leading-relaxed">
                  Every member of our team is trained, licensed, and committed to the same standard: treat the customer and their vehicle the way you would want to be treated when you are the one stranded on the side of the road.
                </p>
              </div>

              <div className="space-y-5">
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase">
                  Our Commitment
                </h2>
                {[
                  {
                    title: '24/7 Availability',
                    body: 'Vehicle emergencies do not respect business hours. We answer calls around the clock, every day of the year, including holidays.',
                  },
                  {
                    title: 'Fast Response',
                    body: 'Being based in Brownwood means we know how to reach you quickly — whether you are on a downtown street or a rural county road.',
                  },
                  {
                    title: 'Honest Pricing',
                    body: 'We quote rates upfront before dispatch. No bait-and-switch, no hidden fees at delivery. What we quote is what you pay.',
                  },
                  {
                    title: 'Professional Equipment',
                    body: 'The right truck for the job. Flatbeds, wheel-lifts, heavy-duty wreckers — we use proper equipment to protect every vehicle we handle.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded bg-[#f2c118]/10 shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f2c118" strokeWidth="2.5" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-white uppercase text-base mb-1">{item.title}</h3>
                      <p className="text-[#a3acbb] text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services summary */}
        <section className="py-14 px-4 bg-diamond-plate">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-extrabold text-2xl text-white uppercase mb-6">What We Do</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Emergency Towing',
                'Heavy-Duty Towing',
                'Accident Recovery',
                'Wrecker Service',
                'Lockout Service',
                'Tire Changes',
                'Fuel Delivery',
                'Jump Starts',
                'Winch-Out Recovery',
                'Long-Distance Towing',
                'Commercial Fleet Towing',
                'Roadside Assistance',
              ].map((s) => (
                <div key={s} className="flex items-center gap-2 text-[#cfd4dc] text-sm">
                  <svg className="text-[#9aa5b1] shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  {s}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-[#f2c118] hover:bg-[#d9a913] text-[#0a1628] font-bold px-6 py-3 rounded transition-colors text-sm"
              >
                View All Services
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 border border-[#f2c118] text-[#f2c118] hover:bg-[#f2c118]/10 font-bold px-6 py-3 rounded transition-colors text-sm"
              >
                Call {PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="py-14 px-4 bg-[#0a1628]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-extrabold text-2xl text-white uppercase mb-4">Where We Operate</h2>
            <p className="text-[#cfd4dc] leading-relaxed max-w-2xl mb-8">
              Welch Bros Towing is based in Brownwood, TX and serves communities throughout Central Texas. Our trucks cover a wide radius including:
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
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
                  className="px-4 py-2 bg-[#0f2138] border border-[#1c3350] rounded text-[#cfd4dc] hover:border-[#f2c118] hover:text-[#f2c118] transition-colors"
                >
                  {area.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CallCTA
          heading="Ready to Work With Welch Bros?"
          subtext="Call us anytime for 24-hour towing and roadside assistance in Brownwood and Central Texas. Real people answer, every time."
        />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  )
}
