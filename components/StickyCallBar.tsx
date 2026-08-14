'use client'

const PHONE = '(325) 998-6955'
const PHONE_HREF = 'tel:+13259986955'

export default function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#f2c118] shadow-2xl border-t-2 border-[#0a1628]">
      <a
        href={PHONE_HREF}
        className="flex items-center justify-center gap-3 py-4 text-[#0a1628] font-extrabold text-lg w-full active:bg-[#d9a913] transition-colors"
        aria-label={`Call Welch Bros Towing now at ${PHONE}`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
        </svg>
        <span>CALL NOW — {PHONE}</span>
      </a>
    </div>
  )
}
