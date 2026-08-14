const PHONE = '(325) 998-6955'
const PHONE_HREF = 'tel:+13259986955'

interface CallCTAProps {
  heading?: string
  subtext?: string
  dark?: boolean
}

export default function CallCTA({
  heading = 'Need a Tow Right Now?',
  subtext = 'We answer 24 hours a day, 7 days a week — including holidays.',
  dark = false,
}: CallCTAProps) {
  return (
    <section
      className={`py-14 px-4 ${dark ? 'bg-[#0a1628]' : 'bg-diamond-plate'}`}
      aria-label="Call to action"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white uppercase tracking-wide text-balance mb-3">
          {heading}
        </h2>
        <p className="text-[#a3acbb] text-base mb-8 leading-relaxed">{subtext}</p>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-3 bg-[#f2c118] hover:bg-[#d9a913] text-[#0a1628] font-extrabold text-xl px-8 py-4 rounded transition-colors"
          aria-label={`Call Welch Bros Towing at ${PHONE}`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
          </svg>
          {PHONE}
        </a>
        <p className="mt-4 text-[#9aa5b1] text-sm font-medium">Fast response • Licensed &amp; insured • Brownwood, TX &amp; Central Texas</p>
      </div>
    </section>
  )
}
