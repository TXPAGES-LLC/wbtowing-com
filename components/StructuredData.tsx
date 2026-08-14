export default function StructuredData() {
  const sharedOfferCatalog = {
    '@type': 'OfferCatalog',
    name: 'Towing & Roadside Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Towing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roadside Assistance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lockout Service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tire Change' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fuel Delivery' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jump Start' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vehicle Recovery' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Heavy Duty Towing' } },
    ],
  }

  const sharedAreaServed = [
    { '@type': 'City', name: 'Brownwood', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Ballinger', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Coleman', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Comanche', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'San Saba', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Early', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Rising Star', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Goldthwaite', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Stephenville', containedInPlace: { '@type': 'State', name: 'Texas' } },
  ]

  const sharedOpeningHours = {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00',
    closes: '23:59',
  }

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': '/#organization',
    name: 'Welch Bros Towing',
    description:
      'Welch Bros Towing provides 24/7 towing and roadside assistance in Brownwood and Central Texas. Services include lockouts, tire changes, fuel delivery, and vehicle recovery.',
    url: '',
    telephone: '+13259986955',
    email: 'welch83@msn.com',
    priceRange: '$$',
    image: '/opengraph-image',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3203 Stephen F Austin',
      addressLocality: 'Brownwood',
      addressRegion: 'TX',
      postalCode: '76801',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.7096,
      longitude: -98.9912,
    },
    hasMap: 'https://maps.google.com/?cid=17631543369070428573',
    openingHoursSpecification: sharedOpeningHours,
    areaServed: sharedAreaServed,
    hasOfferCatalog: sharedOfferCatalog,
    department: [
      {
        '@type': 'LocalBusiness',
        '@id': '/#location-city',
        name: 'Welch Bros Towing — City Lot',
        telephone: '+13259986955',
        email: 'welch83@msn.com',
        hasMap: 'https://maps.google.com/?cid=17631543369070428573',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '3203 Stephen F Austin',
          addressLocality: 'Brownwood',
          addressRegion: 'TX',
          addressCountry: 'US',
        },
        openingHoursSpecification: sharedOpeningHours,
      },
      {
        '@type': 'LocalBusiness',
        '@id': '/#location-lake',
        name: 'Welch Bros Towing — Lake Lot',
        telephone: '+13257848403',
        email: 'welch83@msn.com',
        hasMap: 'https://maps.google.com/?cid=15482721336789362167',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '6435 Hwy 279',
          addressLocality: 'Brownwood',
          addressRegion: 'TX',
          postalCode: '76801',
          addressCountry: 'US',
        },
        openingHoursSpecification: sharedOpeningHours,
      },
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Welch Bros Towing',
    url: '',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
