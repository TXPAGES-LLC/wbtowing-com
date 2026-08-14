import type { Metadata } from 'next'
import ServiceAreaPage from '@/components/ServiceAreaPage'

export const metadata: Metadata = {
  title: 'Services in Brownwood, TX | Welch Bros Towing',
  description:
    'Welch Bros Towing provides 24-hour towing, roadside assistance, and vehicle recovery throughout Brownwood, TX. See every service we offer and where to find us.',
  alternates: { canonical: '/service-areas' },
}

const CID = '17631543369070428573'
const MAP_EMBED_SRC = `https://www.google.com/maps?cid=${CID}&output=embed`
const MAP_LINK = `https://maps.google.com/?cid=${CID}`

const services = [
  {
    title: '24-Hour Towing in Brownwood, TX',
    href: '/towing',
    desc: 'From breakdowns on US-84 and US-377 to a dead vehicle parked near Coggin Avenue, our trucks are on call around the clock. We tow passenger cars, pickups, and SUVs anywhere in the Brownwood city limits and beyond.',
  },
  {
    title: 'Roadside Assistance in Brownwood, TX',
    href: '/roadside-assistance',
    desc: 'Dead battery outside Howard Payne University, a stalled engine near the square, or a warning light on Early Boulevard — our roadside team reaches you fast and gets you moving again without a full tow.',
  },
  {
    title: 'Heavy-Duty & Commercial Towing in Brownwood, TX',
    href: '/heavy-duty-towing',
    desc: 'Semi-trucks, box trucks, and farm equipment moving through Brownwood on Highway 279 or the industrial routes near the rail yard need specialized rigs. We keep heavy-duty wreckers ready for exactly that.',
  },
  {
    title: 'Flatbed Towing in Brownwood, TX',
    href: '/flatbed-towing',
    desc: 'Low-clearance cars, all-wheel-drive SUVs, and vehicles with drivetrain damage get loaded wheels-off on a flatbed. This is our standard method for tows originating anywhere in Brownwood neighborhoods.',
  },
  {
    title: 'Accident Recovery in Brownwood, TX',
    href: '/services#accident-recovery',
    desc: 'After a collision on Fisk Avenue, Highway 279, or one of the county roads outside town, we coordinate with local police and EMS to clear the scene and recover your vehicle safely.',
  },
  {
    title: 'Car Lockout Service in Brownwood, TX',
    href: '/services#lockout',
    desc: 'Locked out at a Brownwood parking lot, the grocery store, or your own driveway? Our technicians use non-destructive tools to get you back inside your vehicle without damaging the locks or trim.',
  },
  {
    title: 'Tire Change Service in Brownwood, TX',
    href: '/tire-changes',
    desc: 'A flat on a Brownwood shoulder is a safety risk. We swap in your spare on-site, torque the lug nuts, and check the fit — or tow you to a nearby tire shop if a spare is not available.',
  },
  {
    title: 'Fuel Delivery in Brownwood, TX',
    href: '/services#fuel-delivery',
    desc: 'Running low between the city and Lake Brownwood happens more often than drivers expect. We bring enough gas or diesel to reach the nearest station so you are not stuck waiting on a tow.',
  },
  {
    title: 'Recovery & Winch-Outs in Brownwood, TX',
    href: '/recovery-winch-outs',
    desc: 'Stuck in mud or a ditch near Lake Brownwood or on a rural stretch outside the city? Our winch equipment pulls vehicles out safely without adding damage to your vehicle or the surrounding land.',
  },
]

const faqs = [
  {
    q: 'Where is Welch Bros Towing located in Brownwood?',
    a: 'Our primary lot is at 3203 Stephen F Austin, Brownwood, TX 76801. We also operate a second location near Lake Brownwood for faster response to that side of town.',
  },
  {
    q: 'Do you cover all of Brownwood, or just certain neighborhoods?',
    a: 'We dispatch to every part of Brownwood, including the downtown square, Howard Payne University area, Lake Brownwood, and the surrounding county roads.',
  },
  {
    q: 'How quickly can you reach me in Brownwood?',
    a: 'Because we are based in town, response times inside Brownwood are typically faster than a dispatch service routed from outside the area. We prioritize emergency calls first.',
  },
  {
    q: 'Can I request a specific service, like a lockout or fuel delivery, instead of a tow?',
    a: 'Yes. Tell our dispatcher what happened when you call and we will send the right equipment for the job — a tow is not always necessary.',
  },
  {
    q: 'Are you available on nights, weekends, and holidays in Brownwood?',
    a: 'Yes. We operate 24 hours a day, 7 days a week, including all holidays, for every service listed on this page.',
  },
]

const relatedLinks = [
  { label: 'Ballinger, TX', href: '/service-areas/ballinger-tx' },
  { label: 'Coleman, TX', href: '/service-areas/coleman-tx' },
  { label: 'Comanche, TX', href: '/service-areas/comanche-tx' },
  { label: 'San Saba, TX', href: '/service-areas/san-saba-tx' },
  { label: 'Early, TX', href: '/service-areas/early-tx' },
  { label: 'Rising Star, TX', href: '/service-areas/rising-star-tx' },
  { label: 'Goldthwaite, TX', href: '/service-areas/goldthwaite-tx' },
  { label: 'Stephenville, TX', href: '/service-areas/stephenville-tx' },
  { label: 'All Services', href: '/services' },
  { label: 'Contact Us', href: '/contact-us' },
]

export default function BrownwoodServiceAreaPage() {
  return (
    <ServiceAreaPage
      canonicalUrl="/service-areas"
      breadcrumbLabel="Services in Brownwood, TX"
      kicker="Brownwood, Texas"
      heading="Services in Brownwood, TX"
      intro="Welch Bros Towing is based right here in Brownwood, Texas. We know the local roads, the shortcuts around town, and the fastest way to reach you — whether you are stuck downtown, out by Lake Brownwood, or on a county road just outside the city. Every service below is available in Brownwood, 24 hours a day."
      servicesHeading="Every Service We Offer in Brownwood"
      servicesIntro="Each service is dispatched from our Brownwood lot, so help is never coming from far away."
      services={services}
      ctaHeading="Need Help Somewhere in Brownwood?"
      ctaSubtext="Call Welch Bros Towing now — we dispatch from right here in town, 24 hours a day, 7 days a week."
      mapHeading="Find Us in Brownwood"
      mapIntro="Our main lot sits at 3203 Stephen F Austin, close to the center of Brownwood, so we can reach any part of town quickly."
      mapEmbedSrc={MAP_EMBED_SRC}
      mapTitle="Welch Bros Towing location in Brownwood, TX"
      addressName="Welch Bros Towing — City Lot"
      addressLines="3203 Stephen F Austin, Brownwood, TX 76801"
      mapLink={MAP_LINK}
      mapLinkLabel="Get Directions"
      faqHeading="Brownwood Service Questions"
      faqs={faqs}
      relatedHeading="More Central Texas Areas We Cover"
      relatedLinks={relatedLinks}
    />
  )
}
