import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import CallCTA from '@/components/CallCTA'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Welch Bros Towing',
  description:
    'Answers to common questions about Welch Bros Towing — response times, pricing, service area, payment, and what to expect when you call for towing or roadside help in Brownwood, TX.',
  alternates: { canonical: '/faq' },
}

const faqGroups = [
  {
    heading: 'Response & Availability',
    items: [
      {
        q: 'Are you really available 24 hours a day?',
        a: 'Yes. Welch Bros Towing operates 24 hours a day, 7 days a week, including weekends and holidays. Breakdowns do not wait for business hours, and neither do we.',
      },
      {
        q: 'How fast can you get to me?',
        a: 'Response times depend on your location and current call volume, but we dispatch the nearest available driver immediately and prioritize emergency situations like accidents and roadway hazards.',
      },
      {
        q: 'Do you serve areas outside Brownwood?',
        a: 'Yes. We regularly dispatch to Ballinger, Coleman, Comanche, San Saba, Early, Rising Star, Goldthwaite, Stephenville, and the surrounding Central Texas communities. See our Service Areas page for details.',
      },
    ],
  },
  {
    heading: 'Pricing & Payment',
    items: [
      {
        q: 'How much does a tow cost?',
        a: 'Pricing depends on distance, vehicle type, and the service needed. We quote straight pricing over the phone before dispatch — no hidden fees added at delivery.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept major credit and debit cards as well as cash. Ask our dispatcher about payment options when you call.',
      },
      {
        q: 'Do you work with insurance claims?',
        a: 'Yes. We can provide the documentation you need for insurance or roadside assistance plan reimbursement. Let us know when you call if you plan to file a claim.',
      },
    ],
  },
  {
    heading: 'Services & Equipment',
    items: [
      {
        q: 'What types of vehicles can you tow?',
        a: 'Our fleet handles passenger cars, pickups, SUVs, vans, motorcycles, and light commercial vehicles, plus heavy-duty equipment like semi-trucks, RVs, and farm machinery. See our Services page for the full list.',
      },
      {
        q: 'Can you help if my car will not start or I locked my keys inside?',
        a: 'Yes. Our roadside assistance covers jump starts, lockouts, flat tire changes, and fuel delivery in addition to towing.',
      },
      {
        q: 'Do you handle accident recovery?',
        a: 'Yes. We respond to accident scenes for vehicle recovery and can also winch out vehicles stuck in ditches, mud, or off-road terrain.',
      },
    ],
  },
  {
    heading: 'Trust & Licensing',
    items: [
      {
        q: 'Is Welch Bros Towing licensed and insured?',
        a: 'Yes. We are fully licensed and insured, and our drivers are trained to handle your vehicle safely from pickup to drop-off.',
      },
      {
        q: 'How do I know Welch Bros Towing is a legitimate local business?',
        a: 'We are a verified business on Google, Bing, Yelp, and several local directories. Visit our Reviews page to confirm our listings and read what customers say directly from those platforms.',
      },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    }))
  ),
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main id="main-content">
        <section className="bg-[#0a1628] border-b border-[#1c3350] py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#9aa5b1] text-sm font-bold uppercase tracking-widest mb-3">Brownwood &amp; Central Texas</p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white uppercase leading-tight text-balance mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-[#cfd4dc] text-lg max-w-2xl leading-relaxed">
              Answers to the questions we hear most from drivers across Brownwood and Central Texas. Still need help? Call us directly — we are available around the clock.
            </p>
          </div>
        </section>

        {faqGroups.map((group, idx) => (
          <section
            key={group.heading}
            className={`py-14 px-4 ${idx % 2 === 0 ? 'bg-[#0a1628]' : 'bg-diamond-plate'}`}
            aria-labelledby={`faq-${group.heading.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`}
          >
            <div className="max-w-3xl mx-auto">
              <h2
                id={`faq-${group.heading.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`}
                className="font-display font-extrabold text-2xl text-white uppercase tracking-wide mb-8"
              >
                {group.heading}
              </h2>
              <div className="space-y-6">
                {group.items.map((item) => (
                  <div key={item.q} className="border-b border-[#1c3350] pb-6 last:border-b-0 last:pb-0">
                    <h3 className="font-display font-bold text-white text-lg mb-2">{item.q}</h3>
                    <p className="text-[#a3acbb] text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <CallCTA
          heading="Still Have Questions?"
          subtext="Call Welch Bros Towing anytime — a real local dispatcher will answer and get a driver headed your way."
          dark
        />

        <section className="py-10 px-4 bg-diamond-plate" aria-labelledby="related-faq">
          <div className="max-w-5xl mx-auto">
            <h2 id="related-faq" className="font-display font-bold text-lg text-white uppercase tracking-wide mb-4">
              Explore More
            </h2>
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                { label: 'Services', href: '/services' },
                { label: 'Service Areas', href: '/service-areas' },
                { label: 'Reviews', href: '/reviews' },
                { label: 'About Us', href: '/about-us' },
                { label: 'Contact Us', href: '/contact-us' },
              ].map((l) => (
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
