import { buildOgImage, OG_SIZE } from '@/lib/og-image'

export const size = OG_SIZE
export const contentType = 'image/png'
export const alt = 'Welch Bros Towing — 24/7 Towing & Roadside Assistance in Brownwood, TX'

export default async function Image() {
  return buildOgImage()
}
