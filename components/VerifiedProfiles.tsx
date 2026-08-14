const PROFILES = [
  {
    name: 'Google — City Lot',
    description: 'Verified location & reviews',
    href: 'https://maps.google.com/?cid=17631543369070428573',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M21 10.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.5 8.5 0 118.5-8.5z" />
        <path d="M12 10.5h8.5" />
      </svg>
    ),
  },
  {
    name: 'Google — Lake Lot',
    description: 'Verified location & reviews',
    href: 'https://maps.google.com/?cid=15482721336789362167',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M21 10.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.5 8.5 0 118.5-8.5z" />
        <path d="M12 10.5h8.5" />
      </svg>
    ),
  },
  {
    name: 'Bing',
    description: 'Verified business listing',
    href: 'https://www.bing.com/local?lid=YN842x168908186',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M5 3l5 1.7v11.6l6-3.2 3 1.7-9 5.2-5-2.9V3z" />
      </svg>
    ),
  },
  {
    name: 'Yelp',
    description: 'Verified business profile',
    href: 'https://www.yelp.com/biz/welch-brothers-towing-brownwood',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 2v20" />
        <path d="M5 8l7 3 7-3" />
        <path d="M5 16l7-3 7 3" />
      </svg>
    ),
  },
  {
    name: 'Superpages',
    description: 'Verified business directory listing',
    href: 'https://www.superpages.com/brownwood-tx/bpp/welch-bros-towing-16001925',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    name: 'Yellow Pages',
    description: 'Verified business directory listing',
    href: 'https://www.yellowpages.com/brownwood-tx/mip/welch-bros-towing-16001925',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    name: 'Trusted Local Directory',
    description: 'Verified business directory listing',
    href: 'https://trustedlocaldirectory.com/listing/welch-bros-towing.html',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
]

export default function VerifiedProfiles() {
  return (
    <section className="py-14 px-4 bg-diamond-plate" aria-labelledby="verified-profiles-heading">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#9aa5b1] text-sm font-bold uppercase tracking-widest mb-3">Trust &amp; Verification</p>
        <h2
          id="verified-profiles-heading"
          className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase mb-4"
        >
          Verified Business Profiles
        </h2>
        <p className="text-[#cfd4dc] leading-relaxed max-w-2xl mb-8">
          Welch Bros Towing is listed and verified on the platforms below. Use these links to confirm our
          location, hours, and reviews directly from each source.
        </p>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
          {PROFILES.map((profile) => (
            <li key={profile.name}>
              <a
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 h-full bg-[#0a1628] border border-[#1c3350] hover:border-[#f2c118] rounded-lg p-5 transition-colors group"
                aria-label={`View Welch Bros Towing verified profile on ${profile.name} (opens in a new tab)`}
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-md bg-[#f2c118]/10 text-[#f2c118] shrink-0 group-hover:bg-[#f2c118]/15 transition-colors">
                  {profile.icon}
                </span>
                <span>
                  <span className="block text-white font-display font-bold uppercase text-base leading-tight">
                    {profile.name}
                  </span>
                  <span className="block text-[#9aa5b1] text-xs mt-0.5">{profile.description}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
