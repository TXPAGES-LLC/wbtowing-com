'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Forces the window to the top on every route change.
 * Handles cases where Next.js's default scroll restoration doesn't
 * kick in (e.g. navigating from a scrolled-down position via header
 * dropdown links, footer links, or related-page links).
 */
export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return null
}
