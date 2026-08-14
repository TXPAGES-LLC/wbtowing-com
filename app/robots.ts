import type { MetadataRoute } from 'next'

// Hardcoded to the single preferred production domain.
const BASE_URL = ''

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
