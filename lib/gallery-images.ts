export type GalleryCategory =
  | 'Towing'
  | 'Flatbed Towing'
  | 'Heavy-Duty Towing'
  | 'Recovery & Winch-Outs'
  | 'Emergency & Accident Recovery'

export interface GalleryImage {
  src: string
  alt: string
  category: GalleryCategory
  width: number
  height: number
  href?: string
}

/**
 * Central photo library for Welch Bros Towing.
 * Add new entries here as more job photos come in — the /gallery page
 * and any service-page photo strips read from this single source.
 */
export const galleryImages: GalleryImage[] = [
  // Towing
  {
    src: '/towing-1.jpg',
    alt: 'Welch Bros Towing wrecker towing a white pickup truck on a street in Brownwood, TX',
    category: 'Towing',
    width: 2048,
    height: 1536,
    href: '/towing',
  },
  {
    src: '/towing-2.jpg',
    alt: 'Tow truck transporting an SUV on a flatbed on a rural Central Texas road',
    category: 'Towing',
    width: 960,
    height: 720,
    href: '/towing',
  },
  {
    src: '/towing.jpg',
    alt: 'Close-up of the Welch Bros Towing nameplate and Texas logo on a tow truck bed',
    category: 'Towing',
    width: 2048,
    height: 1536,
    href: '/towing',
  },

  // Flatbed Towing
  {
    src: '/flatbed-1.jpg',
    alt: 'Maroon Ford Mustang being loaded onto a Welch Bros Towing flatbed tow truck in Brownwood, TX',
    category: 'Flatbed Towing',
    width: 2048,
    height: 1152,
    href: '/flatbed-towing',
  },
  {
    src: '/flatbed-towing.jpg',
    alt: 'White Ford pickup truck secured on a flatbed tow truck on a dirt road',
    category: 'Flatbed Towing',
    width: 960,
    height: 720,
    href: '/flatbed-towing',
  },

  // 24-Hour Towing (additional job photos)
  {
    src: '/24hr-towing.jpg',
    alt: 'Welch Bros Towing heavy-duty wrecker towing a truck cab on a Central Texas highway',
    category: 'Towing',
    width: 960,
    height: 720,
    href: '/towing',
  },
  {
    src: '/24hr-towing-1.jpg',
    alt: 'Welch Bros Towing wrecker and service truck responding to a nighttime call at a Brownwood, TX dealership',
    category: 'Towing',
    width: 960,
    height: 720,
    href: '/towing',
  },
  {
    src: '/24hr-towing-2.jpg',
    alt: 'Welch Bros Towing heavy-duty wrecker towing a motorhome at night in Central Texas',
    category: 'Towing',
    width: 960,
    height: 720,
    href: '/towing',
  },

  // Heavy-Duty Towing
  {
    src: '/heavy-duty-1.jpg',
    alt: 'Heavy-duty wrecker towing a motorhome RV in Central Texas',
    category: 'Heavy-Duty Towing',
    width: 960,
    height: 720,
    href: '/heavy-duty-towing',
  },
  {
    src: '/commercial.jpg',
    alt: 'Welch Bros Towing red Peterbilt semi hauling a flatbed trailer with a Mack truck in Brownwood, TX',
    category: 'Heavy-Duty Towing',
    width: 960,
    height: 720,
    href: '/heavy-duty-towing',
  },
  {
    src: '/commercial-1.jpg',
    alt: 'Welch Bros Towing yellow heavy-duty truck hauling a lowboy trailer with commercial equipment',
    category: 'Heavy-Duty Towing',
    width: 960,
    height: 720,
    href: '/heavy-duty-towing',
  },
  {
    src: '/commercial-2.jpg',
    alt: 'Welch Bros Towing heavy-duty wrecker towing a commercial truck at a highway fuel station',
    category: 'Heavy-Duty Towing',
    width: 960,
    height: 720,
    href: '/heavy-duty-towing',
  },
  {
    src: '/heavy-duty-2.jpg',
    alt: 'Heavy-duty tow truck recovering large farm equipment in a Central Texas field',
    category: 'Heavy-Duty Towing',
    width: 960,
    height: 720,
    href: '/heavy-duty-towing',
  },
  {
    src: '/heavy-duty.jpg',
    alt: 'Welch Bros Towing heavy-duty flatbed truck parked at the Brownwood, TX shop',
    category: 'Heavy-Duty Towing',
    width: 960,
    height: 720,
    href: '/heavy-duty-towing',
  },
  {
    src: '/welch-bros.jpg',
    alt: 'Welch Bros Towing heavy-duty semi tractor parked under a carport at the Brownwood shop',
    category: 'Heavy-Duty Towing',
    width: 960,
    height: 720,
    href: '/heavy-duty-towing',
  },
  {
    src: '/welch-bros-towing.jpg',
    alt: 'Welch Bros Towing heavy-duty wrecker at sunset in Brownwood, TX',
    category: 'Heavy-Duty Towing',
    width: 1456,
    height: 1082,
    href: '/heavy-duty-towing',
  },
  {
    src: '/welch-bros-towing-1.jpg',
    alt: 'Welch Bros Towing heavy-duty wrecker with Brownwood, TX signage on the side',
    category: 'Heavy-Duty Towing',
    width: 960,
    height: 720,
    href: '/heavy-duty-towing',
  },
  {
    src: '/welch-bros-towing-2.jpg',
    alt: 'Welch Bros Towing heavy-duty wrecker parked in a grass field in Central Texas',
    category: 'Heavy-Duty Towing',
    width: 960,
    height: 720,
    href: '/heavy-duty-towing',
  },

  // Recovery & Winch-Outs
  {
    src: '/winch-out.jpg',
    alt: 'Tow truck winching a red pickup truck out of a roadside ditch in Central Texas',
    category: 'Recovery & Winch-Outs',
    width: 960,
    height: 720,
    href: '/recovery-winch-outs',
  },
  {
    src: '/winch-out-2.jpg',
    alt: 'Heavy-duty wreckers using a crane winch to recover a propane tank trailer',
    category: 'Recovery & Winch-Outs',
    width: 960,
    height: 720,
    href: '/recovery-winch-outs',
  },
  {
    src: '/off-road-recovery.jpg',
    alt: 'Welch Bros Towing recovering an overturned truck on a rural Central Texas road at sunset',
    category: 'Recovery & Winch-Outs',
    width: 960,
    height: 720,
    href: '/recovery-winch-outs',
  },
  {
    src: '/off-road-recovery-2.jpg',
    alt: 'Recovery crew working an overturned commercial truck in a Central Texas field',
    category: 'Recovery & Winch-Outs',
    width: 960,
    height: 720,
    href: '/recovery-winch-outs',
  },
  {
    src: '/off-road-recovery-3.jpg',
    alt: 'Welch Bros Towing flatbed truck recovering a camper trailer from a roadside ditch',
    category: 'Recovery & Winch-Outs',
    width: 960,
    height: 720,
    href: '/recovery-winch-outs',
  },

  // Emergency & Accident Recovery
  {
    src: '/emergency-assistance-2.jpg',
    alt: 'Heavy-duty wrecker responding to an overturned trailer accident on a Central Texas highway',
    category: 'Emergency & Accident Recovery',
    width: 960,
    height: 720,
    href: '/roadside-assistance',
  },
  {
    src: '/emergency-assistance.jpg',
    alt: 'Welch Bros Towing towing a school bus at night in Central Texas',
    category: 'Emergency & Accident Recovery',
    width: 960,
    height: 720,
    href: '/roadside-assistance',
  },
  {
    src: '/off-road-recovery-1.jpg',
    alt: 'Emergency recovery of an overturned tanker truck in a Central Texas field with crew on scene',
    category: 'Emergency & Accident Recovery',
    width: 960,
    height: 720,
    href: '/roadside-assistance',
  },
  {
    src: '/accident-recovery.jpg',
    alt: 'Overturned trailer with spilled lumber load after a highway accident in Central Texas',
    category: 'Emergency & Accident Recovery',
    width: 960,
    height: 720,
    href: '/recovery-winch-outs',
  },
  {
    src: '/accident-recovery-1.jpg',
    alt: 'Welch Bros Towing heavy-duty wrecker towing a damaged truck chassis after a highway accident',
    category: 'Emergency & Accident Recovery',
    width: 960,
    height: 720,
    href: '/recovery-winch-outs',
  },
  {
    src: '/accident-recovery-2.jpg',
    alt: 'Overturned semi-trailer with spilled lumber cargo on a Central Texas highway, first responders on scene',
    category: 'Emergency & Accident Recovery',
    width: 960,
    height: 720,
    href: '/recovery-winch-outs',
  },
  {
    src: '/accident-recovery-3.jpg',
    alt: 'Welch Bros Towing responding to a jackknifed semi-truck accident on a Central Texas highway',
    category: 'Emergency & Accident Recovery',
    width: 720,
    height: 960,
    href: '/recovery-winch-outs',
  },
  {
    src: '/accident-recovery-4.jpg',
    alt: 'Crashed box truck recovery in a Central Texas field after a highway accident',
    category: 'Emergency & Accident Recovery',
    width: 720,
    height: 960,
    href: '/recovery-winch-outs',
  },
  {
    src: '/emergency-assistance-1.jpg',
    alt: 'Welch Bros Towing wreckers clearing an overturned freight trailer accident on a Central Texas highway',
    category: 'Emergency & Accident Recovery',
    width: 960,
    height: 720,
    href: '/roadside-assistance',
  },
]

export function getImagesByCategory(category: GalleryCategory): GalleryImage[] {
  return galleryImages.filter((img) => img.category === category)
}
