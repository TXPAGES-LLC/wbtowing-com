import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const OG_SIZE = { width: 1200, height: 630 }

/**
 * Builds the shared Open Graph / Twitter preview image using the homepage
 * hero (bluebonnet fleet) photo as the background, with the logo and core
 * value proposition overlaid — matching the site's homepage hero styling.
 */
export async function buildOgImage() {
  const [heroData, logoData] = await Promise.all([
    readFile(join(process.cwd(), 'public/about-us.jpg')),
    readFile(join(process.cwd(), 'public/welch-brothers-towing-revised-logo-1-19.png')),
  ])
  const heroSrc = `data:image/jpeg;base64,${heroData.toString('base64')}`
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundImage: `url(${heroSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            backgroundImage:
              'linear-gradient(90deg, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.88) 42%, rgba(10,22,40,0.35) 100%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            padding: '0 72px',
            gap: 28,
          }}
        >
          <img src={logoSrc} width={440} height={109} alt="" style={{ objectFit: 'contain' }} />
          <div
            style={{
              display: 'flex',
              fontSize: 46,
              fontWeight: 700,
              color: '#f2c118',
              letterSpacing: '-0.02em',
              maxWidth: 760,
            }}
          >
            24/7 Towing & Roadside Assistance
          </div>
          <div style={{ display: 'flex', fontSize: 28, color: '#e5e9ee' }}>Brownwood & Central Texas</div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  )
}
