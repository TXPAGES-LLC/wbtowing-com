import type { Metadata, Viewport } from 'next'
import { Inter, Barlow_Condensed } from 'next/font/google'
import Script from 'next/script'
import ScrollToTop from '@/components/ScrollToTop'
import StructuredData from '@/components/StructuredData'
import './globals.css'

const GA_MEASUREMENT_ID = 'G-YDL44CJL5E'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const _barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(''),
  title: {
    default: 'Welch Bros Towing | 24 Hour Towing & Roadside Assistance in Brownwood, TX',
    template: '%s | Welch Bros Towing – Brownwood, TX',
  },
  description:
    'Welch Bros Towing provides 24/7 towing and roadside assistance in Brownwood and Central Texas. Fast response for lockouts, tire changes, fuel delivery, and vehicle recovery. Call now.',
  keywords: [
    'towing Brownwood TX',
    '24 hour towing Central Texas',
    'roadside assistance Brownwood',
    'emergency towing Texas',
    'wrecker service Brownwood',
    'lockout service TX',
    'fuel delivery Brownwood',
  ],
  authors: [{ name: 'Welch Bros Towing' }],
  creator: 'Welch Bros Towing',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Welch Bros Towing',
    title: 'Welch Bros Towing | 24 Hour Towing & Roadside Assistance in Brownwood, TX',
    description:
      'Welch Bros Towing provides 24/7 towing and roadside assistance in Brownwood and Central Texas. Fast response for lockouts, tire changes, fuel delivery, and vehicle recovery.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welch Bros Towing | 24/7 Towing & Roadside Assistance – Brownwood, TX',
    description: 'Fast, reliable 24/7 towing and roadside assistance in Brownwood and Central Texas. Call us anytime.',
  },
  generator: 'Next.js',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a1628',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#0a1628]">
      <body className={`${_inter.variable} ${_barlowCondensed.variable} font-sans antialiased min-h-screen`}>
        <StructuredData />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
