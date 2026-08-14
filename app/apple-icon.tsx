import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

/**
 * Apple touch icon cropped directly from the Welch Bros Towing logo — the
 * Texas-outline "W" mark on the left side of the full lockup, with no
 * color or effect changes.
 */
export default async function AppleIcon() {
  const logoData = await readFile(join(process.cwd(), 'public/welch-brothers-towing-revised-logo-1-19.png'))
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#000000',
          backgroundImage: `url(${logoSrc})`,
          backgroundSize: 'auto 100%',
          backgroundPosition: '12% center',
          backgroundRepeat: 'no-repeat',
        }}
      />
    ),
    { ...size }
  )
}
