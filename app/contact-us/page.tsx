import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'
import VerifiedProfiles from '@/components/VerifiedProfiles'

export const metadata: Metadata = {
  title: 'Contact Welch Bros Towing | 24-Hour Towing in Brownwood, TX',
  description:
    'Contact Welch Bros Towing for 24-hour towing and roadside assistance in Brownwood and Central Texas. Call now for immediate emergency response or reach us for commercial and heavy-duty inquiries.',
  alternates: { canonical: '/contact-us' },
}

const PHONE = '(325) 998-6955'
const PHONE_HREF = 'tel:+13259986955'
const EMAIL = 'welch83@msn.com'

const locations = [
  {
    label: 'City Lot',
    phone: '(325) 998-6955',
    phoneHref: 'tel:+13259986955',
    address: '3203 Stephen F Austin, Brownwood, TX',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4482.90950210474!2d-98.97364119999999!3d31.679279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8650c7e030ad6efd%3A0xf4afd3473b56419d!2sWelch%20Bros%20Towing%20-%20City%20Lot!5e1!3m2!1sen!2sin!4v1786643560001!5m2!1sen!2sin',
    cid: '17631543369070428573',
    mapUrl: 'https://maps.google.com/?cid=17631543369070428573',
  },
  {
    label: 'Lake Lot',
    phone: '(325) 784-8403',
    phoneHref: 'tel:+13257848403',
    address: '6435 Hwy 279, Brownwood, TX 76801',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4477.129760358837!2d-99.0943401!3d31.7987805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8650ce8690989f8d%3A0xd6ddad065bb0e5f7!2sWelch%20Bros%20Towing%20-%20Lake%20Lot!5e1!3m2!1sen!2sin!4v1786643618421!5m2!1sen!2sin',
    cid: '15482721336789362167',
    mapUrl: 'https://maps.google.com/?cid=15482721336789362167',
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-[#0a1628] border-b border-[#1c3350] py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#9aa5b1] text-sm font-bold uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white uppercase leading-tight text-balance mb-4">
              Contact Welch Bros Towing
            </h1>
            <p className="text-[#cfd4dc] text-lg max-w-2xl leading-relaxed">
              For emergencies, call us directly — we answer 24 hours a day. For non-emergency commercial inquiries or general questions, use the form below.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#0a1628]">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">

            {/* Contact info */}
            <div>
              {/* Emergency call block */}
              <div className="bg-[#f2c118]/10 border border-[#f2c118]/40 rounded-lg p-6 mb-8">
                <p className="font-display font-extrabold text-2xl text-white uppercase mb-2">Emergency? Call Now.</p>
                <p className="text-[#a3acbb] text-sm mb-5 leading-relaxed">
                  For immediate towing and roadside assistance anywhere in Brownwood and Central Texas — call whichever lot is closest to you.
                </p>
                <div className="space-y-3">
                  {locations.map((loc) => (
                    <a
                      key={loc.label}
                      href={loc.phoneHref}
                      className="flex items-center justify-between gap-3 bg-[#f2c118] hover:bg-[#d9a913] text-[#0a1628] font-extrabold px-6 py-4 rounded transition-colors w-full"
                      aria-label={`Call Welch Bros Towing ${loc.label} at ${loc.phone}`}
                    >
                      <span className="flex items-center gap-3 text-xl">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
                        </svg>
                        {loc.phone}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest bg-white/15 px-2 py-1 rounded">{loc.label}</span>
                    </a>
                  ))}
                </div>
                <p className="text-[#9aa5b1] text-xs mt-3 text-center">Available 24/7 — including weekends and holidays</p>
              </div>

              {/* Business details */}
              <div className="space-y-5">
                <div>
                  <h2 className="font-display font-bold text-white uppercase text-sm tracking-wider mb-3">Our Locations</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {locations.map((loc) => (
                      <div key={loc.label} className="bg-[#0f2138] border border-[#1c3350] rounded-lg p-4">
                        <p className="text-[#9aa5b1] text-xs font-bold uppercase tracking-widest mb-2">{loc.label}</p>
                        <address className="not-italic text-[#cfd4dc] text-sm leading-relaxed mb-2">
                          Welch Bros Towing<br />
                          {loc.address}
                        </address>
                        <a href={loc.phoneHref} className="text-[#f2c118] font-bold text-sm hover:underline">{loc.phone}</a>
                        <div className="mt-4 rounded-md overflow-hidden border border-[#1c3350]">
                          <iframe
                            src={loc.mapEmbedUrl}
                            width="100%"
                            height="200"
                            style={{ border: 0, display: 'block' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title={`Map showing Welch Bros Towing ${loc.label} at ${loc.address}`}
                          />
                        </div>
                        <a
                          href={loc.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#9aa5b1] hover:underline text-xs mt-2 inline-block"
                        >
                          View {loc.label} on Google Maps
                        </a>
                      </div>
                    ))}
                  </div>
                  <a href={`mailto:${EMAIL}`} className="text-[#a3acbb] hover:text-[#f2c118] transition-colors text-sm mt-4 inline-block">{EMAIL}</a>
                </div>
                <div>
                  <h2 className="font-display font-bold text-white uppercase text-sm tracking-wider mb-3">Hours</h2>
                  <p className="text-[#cfd4dc] text-sm">24 hours a day, 7 days a week</p>
                  <p className="text-[#a3acbb] text-xs mt-1">No appointment necessary for emergencies</p>
                </div>
                <div>
                  <h2 className="font-display font-bold text-white uppercase text-sm tracking-wider mb-3">Service Area</h2>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'Brownwood', href: '/service-areas' },
                      { label: 'Ballinger', href: '/service-areas/ballinger-tx' },
                      { label: 'Coleman', href: '/service-areas/coleman-tx' },
                      { label: 'Comanche', href: '/service-areas/comanche-tx' },
                      { label: 'San Saba', href: '/service-areas/san-saba-tx' },
                      { label: 'Early', href: '/service-areas/early-tx' },
                    ].map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        className="text-xs px-3 py-1.5 bg-[#0f2138] border border-[#1c3350] rounded text-[#a3acbb] hover:text-[#f2c118] hover:border-[#f2c118] transition-colors"
                      >
                        {area.label}, TX
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial / non-emergency contact */}
            <div>
              <h2 className="font-display font-extrabold text-2xl text-white uppercase mb-2">Non-Emergency Inquiry</h2>
              <p className="text-[#a3acbb] text-sm mb-6 leading-relaxed">
                For commercial towing contracts, heavy-duty service scheduling, fleet agreements, or general questions — call or email us directly and we will respond promptly.
              </p>

              <div className="space-y-4">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 bg-[#0f2138] border border-[#1c3350] hover:border-[#f2c118] rounded-lg p-5 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f2c118" strokeWidth="1.8" className="flex-shrink-0" aria-hidden="true">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
                  </svg>
                  <div>
                    <p className="text-white font-bold">{PHONE}</p>
                    <p className="text-[#a3acbb] text-xs">Call for commercial and fleet inquiries</p>
                  </div>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 bg-[#0f2138] border border-[#1c3350] hover:border-[#f2c118] rounded-lg p-5 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f2c118" strokeWidth="1.8" className="flex-shrink-0" aria-hidden="true">
                    <path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/>
                  </svg>
                  <div>
                    <p className="text-white font-bold break-all">{EMAIL}</p>
                    <p className="text-[#a3acbb] text-xs">Email for quotes, contracts, and general questions</p>
                  </div>
                </a>
              </div>

              <p className="text-[#9aa5b1] text-xs mt-6">
                For immediate emergencies, call <a href={PHONE_HREF} className="font-bold hover:underline">{PHONE}</a> directly rather than emailing.
              </p>
            </div>
          </div>
        </section>

        <VerifiedProfiles />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  )
}
