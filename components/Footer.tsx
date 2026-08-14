import Link from 'next/link'

const PHONE = '(325) 998-6955'
const PHONE_HREF = 'tel:+13259986955'

const locations = [
  {
    label: 'City Lot',
    phone: '(325) 998-6955',
    phoneHref: 'tel:+13259986955',
    address: '3203 Stephen F Austin, Brownwood, TX',
    mapUrl: 'https://maps.google.com/?cid=17631543369070428573',
  },
  {
    label: 'Lake Lot',
    phone: '(325) 784-8403',
    phoneHref: 'tel:+13257848403',
    address: '6435 Hwy 279, Brownwood, TX 76801',
    mapUrl: 'https://maps.google.com/?cid=15482721336789362167',
  },
]

const EMAIL = 'welch83@msn.com'

const services = [
  { label: '24/7 Towing', href: '/towing' },
  { label: 'Roadside Assistance', href: '/roadside-assistance' },
  { label: 'Heavy-Duty Towing', href: '/heavy-duty-towing' },
  { label: 'Flatbed Towing', href: '/flatbed-towing' },
  { label: 'Recovery & Winch-Outs', href: '/recovery-winch-outs' },
]

const company = [
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Contact / Locations', href: '/contact-us' },
  { label: 'Photo Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
]

const serviceAreas = [
  { label: 'Brownwood, TX', href: '/service-areas' },
  { label: 'Ballinger, TX', href: '/service-areas/ballinger-tx' },
  { label: 'Coleman, TX', href: '/service-areas/coleman-tx' },
  { label: 'Comanche, TX', href: '/service-areas/comanche-tx' },
  { label: 'San Saba, TX', href: '/service-areas/san-saba-tx' },
  { label: 'Early, TX', href: '/service-areas/early-tx' },
  { label: 'Rising Star, TX', href: '/service-areas/rising-star-tx' },
  { label: 'Goldthwaite, TX', href: '/service-areas/goldthwaite-tx' },
  { label: 'Stephenville, TX', href: '/service-areas/stephenville-tx' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-[#1c3350] text-[#a3acbb] pb-20 md:pb-0">
      {/* CTA band */}
      <div className="bg-[#f2c118] py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display font-extrabold text-2xl text-[#0a1628] uppercase tracking-wide text-balance">
            Stranded? We Respond Fast — 24/7/365
          </p>
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 bg-[#0a1628] text-[#f2c118] font-extrabold text-lg px-6 py-3 rounded hover:bg-[#0f2138] transition-colors whitespace-nowrap"
            aria-label={`Call Welch Bros Towing at ${PHONE}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
            </svg>
            {PHONE}
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-block mb-4" aria-label="Welch Bros Towing — Home">
            <img
              src="/welch-brothers-towing-revised-logo-1-19.png"
              alt="Welch Bros Towing logo — 24/7 towing and roadside assistance in Brownwood, TX"
              width={240}
              height={61}
              className="h-12 w-auto"
            />
          </Link>
          <p className="text-sm leading-relaxed mb-4">
            24-hour towing and roadside assistance serving Brownwood and all of Central Texas. Licensed, insured, and locally trusted.
          </p>
          <div className="space-y-4">
            {locations.map((loc) => (
              <address key={loc.label} className="not-italic text-sm space-y-1">
                <p className="text-white font-bold uppercase text-xs tracking-wider">{loc.label}</p>
                <p>{loc.address}</p>
                <a href={loc.phoneHref} className="text-[#f2c118] hover:underline font-bold block">{loc.phone}</a>
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9aa5b1] hover:text-[#f2c118] hover:underline text-xs block transition-colors"
                >
                  View on Google Maps
                </a>
              </address>
            ))}
            <a href={`mailto:${EMAIL}`} className="text-[#a3acbb] hover:text-[#f2c118] transition-colors text-sm block">{EMAIL}</a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display font-bold text-white uppercase text-sm tracking-wider mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-[#f2c118] transition-colors">{s.label}</Link>
              </li>
            ))}
          </ul>
          <h3 className="font-display font-bold text-white uppercase text-sm tracking-wider mt-6 mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            {company.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="hover:text-[#f2c118] transition-colors">{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="font-display font-bold text-white uppercase text-sm tracking-wider mb-4">Service Areas</h3>
          <ul className="space-y-2 text-sm">
            {serviceAreas.map((a) => (
              <li key={a.href}>
                <Link href={a.href} className="hover:text-[#f2c118] transition-colors">{a.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1c3350] py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#76818f]">
          <p>
            &copy; {new Date().getFullYear()} Welch Bros Towing. All rights reserved. Brownwood, TX. Powered by{' '}
            <a
              href="https://txpages.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f2c118] hover:underline transition-colors"
            >
              TXPAGES
            </a>
          </p>
          <nav className="flex gap-4" aria-label="Footer legal navigation">
            <Link href="/faq" className="hover:text-[#f2c118] transition-colors">FAQ</Link>
            <Link href="/reviews" className="hover:text-[#f2c118] transition-colors">Reviews</Link>
            <Link href="/contact-us" className="hover:text-[#f2c118] transition-colors">Contact</Link>
            <Link href="/blog" className="hover:text-[#f2c118] transition-colors">Blog</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
