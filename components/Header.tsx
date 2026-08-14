'use client'

import { useState } from 'react'
import Link from 'next/link'

const PHONE = '(325) 998-6955'
const PHONE_HREF = 'tel:+13259986955'

// Individual service pages grouped under the "Services" dropdown
const serviceLinks = [
  { label: 'All Services', href: '/services' },
  { label: '24/7 Towing', href: '/towing' },
  { label: 'Roadside Assistance', href: '/roadside-assistance' },
  { label: 'Heavy-Duty Towing', href: '/heavy-duty-towing' },
  { label: 'Flatbed Towing', href: '/flatbed-towing' },
  { label: 'Recovery & Winch-Outs', href: '/recovery-winch-outs' },
  { label: 'Tire Changes', href: '/tire-changes' },
]

// City pages grouped under the "Service Areas" dropdown
const serviceAreaLinks = [
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

// Top-level utility/company links shown flat in the desktop bar
const primaryLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
]

const contactLink = { label: 'Contact', href: '/contact-us' }

export default function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0a1628] border-b border-[#f2c118]/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="Welch Bros Towing — Home">
          <img
            src="/welch-brothers-towing-revised-logo-1-19.png"
            alt="Welch Bros Towing logo — 24/7 towing and roadside assistance in Brownwood, TX"
            width={220}
            height={56}
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center" aria-label="Main navigation">
          <Link
            href={primaryLinks[0].href}
            className="text-sm font-medium text-[#cfd4dc] hover:text-[#f2c118] transition-colors px-2 py-1 rounded whitespace-nowrap"
          >
            {primaryLinks[0].label}
          </Link>

          {/* Services dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              className="text-sm font-medium text-[#cfd4dc] hover:text-[#f2c118] transition-colors px-2 py-1 rounded flex items-center gap-1 whitespace-nowrap"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 bg-[#0f2138] border border-[#1c3350] rounded shadow-xl min-w-[200px] py-1 z-50">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-[#cfd4dc] hover:text-[#f2c118] hover:bg-[#14294a] transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Service Areas dropdown */}
          <div className="relative">
            <button
              onClick={() => setAreasOpen(!areasOpen)}
              onBlur={() => setTimeout(() => setAreasOpen(false), 150)}
              className="text-sm font-medium text-[#cfd4dc] hover:text-[#f2c118] transition-colors px-2 py-1 rounded flex items-center gap-1 whitespace-nowrap"
              aria-expanded={areasOpen}
              aria-haspopup="true"
            >
              Service Areas
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            {areasOpen && (
              <div className="absolute top-full left-0 mt-1 bg-[#0f2138] border border-[#1c3350] rounded shadow-xl min-w-[200px] py-1 z-50">
                {serviceAreaLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-[#cfd4dc] hover:text-[#f2c118] hover:bg-[#14294a] transition-colors"
                    onClick={() => setAreasOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {primaryLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#cfd4dc] hover:text-[#f2c118] transition-colors px-2 py-1 rounded whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={contactLink.href}
            className="text-sm font-medium text-[#cfd4dc] hover:text-[#f2c118] transition-colors px-2 py-1 rounded whitespace-nowrap"
          >
            {contactLink.label}
          </Link>
        </nav>

        {/* Desktop CTA */}
        <a
          href={PHONE_HREF}
          className="hidden lg:flex items-center gap-2 bg-[#f2c118] hover:bg-[#d9a913] text-[#0a1628] font-extrabold text-sm px-4 py-2 rounded transition-colors shrink-0 whitespace-nowrap"
          aria-label={`Call Welch Bros Towing at ${PHONE}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
          </svg>
          {PHONE}
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex items-center justify-center h-11 w-11 -mr-1 text-[#cfd4dc] hover:text-[#f2c118]"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0a1628] border-t border-[#1c3350] px-4 pb-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col gap-1 pt-3" aria-label="Mobile navigation">
            <Link
              href="/"
              className="py-2.5 text-[#cfd4dc] hover:text-[#f2c118] text-base font-medium transition-colors border-b border-[#1c3350]/60"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <p className="pt-3 pb-1 text-xs font-bold uppercase tracking-widest text-[#9aa5b1]">Services</p>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 pl-3 text-[#cfd4dc] hover:text-[#f2c118] text-base font-medium transition-colors border-b border-[#1c3350]/60"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <p className="pt-3 pb-1 text-xs font-bold uppercase tracking-widest text-[#9aa5b1]">Service Areas</p>
            {serviceAreaLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 pl-3 text-[#cfd4dc] hover:text-[#f2c118] text-base font-medium transition-colors border-b border-[#1c3350]/60"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {primaryLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 text-[#cfd4dc] hover:text-[#f2c118] text-base font-medium transition-colors border-b border-[#1c3350]/60"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={contactLink.href}
              className="py-2.5 text-[#cfd4dc] hover:text-[#f2c118] text-base font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {contactLink.label}
            </Link>
          </nav>
          <a
            href={PHONE_HREF}
            className="mt-4 flex items-center justify-center gap-2 bg-[#f2c118] hover:bg-[#d9a913] text-[#0a1628] font-extrabold py-3 rounded text-base w-full"
            aria-label={`Call Welch Bros Towing at ${PHONE}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
            </svg>
            Call Now: {PHONE}
          </a>
        </div>
      )}
    </header>
  )
}
