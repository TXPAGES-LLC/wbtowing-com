import type { GalleryImage } from '@/lib/gallery-images'

interface GalleryProps {
  images: GalleryImage[]
  /** Set true for the first visible row so those images load eagerly (better LCP). */
  priority?: boolean
}

export default function Gallery({ images, priority = false }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img, i) => (
        <a
          key={img.src}
          href={img.src}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-[4/3] overflow-hidden rounded-lg border border-[#1c3350] bg-[#0f2138]"
          aria-label={`View full-size photo: ${img.alt}`}
        >
          <img
            src={img.src || '/placeholder.svg'}
            alt={img.alt}
            width={img.width}
            height={img.height}
            loading={priority && i < 4 ? 'eager' : 'lazy'}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="absolute bottom-0 left-0 right-0 p-3 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
            {img.alt}
          </span>
        </a>
      ))}
    </div>
  )
}
