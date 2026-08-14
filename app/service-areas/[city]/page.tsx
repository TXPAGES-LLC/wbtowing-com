import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceAreaPage, { type ServiceAreaFAQ, type ServiceAreaService } from '@/components/ServiceAreaPage'

const CID = '17631543369070428573'
const SHOP_MAP_LINK = `https://maps.google.com/?cid=${CID}`
const SHOP_ADDRESS = '3203 Stephen F Austin, Brownwood, TX 76801'

type CityData = {
  name: string
  state: string
  county: string
  intro: string
  servicesIntro: string
  mapQuery: string
  mapIntro: string
  services: ServiceAreaService[]
  faqs: ServiceAreaFAQ[]
}

const cities: Record<string, CityData> = {
  'ballinger-tx': {
    name: 'Ballinger',
    state: 'TX',
    county: 'Runnels County',
    intro:
      'Welch Bros Towing dispatches from Brownwood to Ballinger and the rest of Runnels County. Whether you are stranded near the courthouse square, on US-83, or out along the Colorado River, our trucks head your way as soon as you call — day or night.',
    servicesIntro:
      'Every service below is available to drivers and businesses throughout Ballinger and Runnels County.',
    mapQuery: 'Ballinger, TX',
    mapIntro:
      'We do not keep a lot inside Ballinger itself, but our Brownwood shop is a short run up US-83, so response times stay quick.',
    services: [
      {
        title: '24-Hour Towing in Ballinger, TX',
        href: '/towing',
        desc: 'Breakdowns near the Runnels County Courthouse or out on US-67 toward Winters get a fast response, any hour of the day or night.',
      },
      {
        title: 'Roadside Assistance in Ballinger, TX',
        href: '/roadside-assistance',
        desc: 'Dead battery outside a shop on Hutchings Avenue or a warning light on the way to work? Our roadside crew comes to you and tries to fix it on the spot.',
      },
      {
        title: 'Heavy-Duty & Commercial Towing in Ballinger, TX',
        href: '/heavy-duty-towing',
        desc: 'Farm trucks, trailers, and commercial rigs moving along US-83 through Runnels County get pulled with the same heavy wreckers we run out of Brownwood.',
      },
      {
        title: 'Flatbed Towing in Ballinger, TX',
        href: '/flatbed-towing',
        desc: 'Low-clearance cars and all-wheel-drive vehicles are loaded wheels-off on a flatbed for the trip out of Ballinger, protecting the drivetrain the whole way.',
      },
      {
        title: 'Accident Recovery in Ballinger, TX',
        href: '/services#accident-recovery',
        desc: 'After a wreck on US-83 or a county road outside town, we work with local first responders to clear the scene and recover your vehicle safely.',
      },
      {
        title: 'Car Lockout Service in Ballinger, TX',
        href: '/services#lockout',
        desc: 'Locked out at home or downtown near the square? We use non-destructive entry tools so your locks and trim stay undamaged.',
      },
      {
        title: 'Tire Change Service in Ballinger, TX',
        href: '/tire-changes',
        desc: 'A flat on a Runnels County farm road is a real hazard. We come out, mount your spare, and check the fit before you get back on the road.',
      },
      {
        title: 'Fuel Delivery in Ballinger, TX',
        href: '/services#fuel-delivery',
        desc: 'Running low between towns on the long stretches of highway near Ballinger? We bring enough fuel to get you to the nearest station.',
      },
      {
        title: 'Recovery & Winch-Outs in Ballinger, TX',
        href: '/recovery-winch-outs',
        desc: 'Stuck in a ditch or soft ground near the Colorado River? Our winch equipment pulls you out without adding further damage.',
      },
    ],
    faqs: [
      {
        q: 'Do you have a location in Ballinger?',
        a: 'No, our shop is based in Brownwood, but we dispatch to Ballinger and all of Runnels County regularly and respond quickly.',
      },
      {
        q: 'How far out do you cover around Ballinger?',
        a: 'We serve Ballinger, Winters, and the surrounding Runnels County roads, not just inside the city limits.',
      },
      {
        q: 'Can you tow a vehicle from Ballinger back to a shop in Brownwood?',
        a: 'Yes, long-distance tows between Ballinger and Brownwood (or anywhere else) are something we handle regularly.',
      },
      {
        q: 'Is nighttime towing available in Ballinger?',
        a: 'Yes, we run 24 hours a day, 7 days a week, including nights, weekends, and holidays.',
      },
      {
        q: 'What should I do while waiting for a tow near Ballinger?',
        a: 'Pull as far off the roadway as safely possible, turn on your hazard lights, and stay inside your vehicle with your seatbelt on if you are near traffic.',
      },
    ],
  },
  'coleman-tx': {
    name: 'Coleman',
    state: 'TX',
    county: 'Coleman County',
    intro:
      'Welch Bros Towing covers Coleman and the rest of Coleman County from our Brownwood shop. Stranded near the downtown square, on US-84, or out toward Hords Creek Lake, we get a truck moving toward you right away.',
    servicesIntro: 'Every service below is available to Coleman drivers and Coleman County businesses.',
    mapQuery: 'Coleman, TX',
    mapIntro:
      'Coleman sits a straightforward drive from our Brownwood location along US-84, keeping our response times reasonable.',
    services: [
      {
        title: '24-Hour Towing in Coleman, TX',
        href: '/towing',
        desc: 'Whether your car quits near the courthouse square or out on US-283, our tow trucks reach Coleman day or night.',
      },
      {
        title: 'Roadside Assistance in Coleman, TX',
        href: '/roadside-assistance',
        desc: 'A stalled engine or a dead battery in a Coleman parking lot does not need to end your day — our roadside team often gets you moving without a tow.',
      },
      {
        title: 'Heavy-Duty & Commercial Towing in Coleman, TX',
        href: '/heavy-duty-towing',
        desc: 'Ranch equipment, box trucks, and commercial vehicles on US-84 or US-283 through Coleman County get the correct heavy-duty rig for the job.',
      },
      {
        title: 'Flatbed Towing in Coleman, TX',
        href: '/flatbed-towing',
        desc: 'We load lowered vehicles and AWD trucks wheels-off for the drive out of Coleman, avoiding drivetrain stress on the way to a shop.',
      },
      {
        title: 'Accident Recovery in Coleman, TX',
        href: '/services#accident-recovery',
        desc: 'Collisions on the highways surrounding Coleman get a coordinated response with local authorities so the scene clears safely and quickly.',
      },
      {
        title: 'Car Lockout Service in Coleman, TX',
        href: '/services#lockout',
        desc: 'Locked out near the square or at a Coleman County ranch gate? We carry the tools to get you back inside without damaging your vehicle.',
      },
      {
        title: 'Tire Change Service in Coleman, TX',
        href: '/tire-changes',
        desc: 'Flats on rural Coleman County roads are common. We come to you, swap in the spare, and check that everything is torqued correctly.',
      },
      {
        title: 'Fuel Delivery in Coleman, TX',
        href: '/services#fuel-delivery',
        desc: 'If you run dry between Coleman and the next town over, we bring fuel out to you so you are not left stranded.',
      },
      {
        title: 'Recovery & Winch-Outs in Coleman, TX',
        href: '/recovery-winch-outs',
        desc: 'Stuck near Hords Creek Lake or off a soft shoulder outside town? Our winch trucks pull vehicles free without extra damage.',
      },
    ],
    faqs: [
      {
        q: 'Is Welch Bros Towing based in Coleman?',
        a: 'We are based in Brownwood and dispatch to Coleman and Coleman County as one of our regular service areas.',
      },
      {
        q: 'Do you serve areas outside Coleman city limits?',
        a: 'Yes, we cover the surrounding Coleman County roads and ranch routes, not just inside town.',
      },
      {
        q: 'How fast can you get to Coleman?',
        a: 'Response times vary with traffic and call volume, but Coleman is a regular part of our coverage area and we prioritize emergency calls.',
      },
      {
        q: 'Do you tow farm and ranch equipment near Coleman?',
        a: 'Yes, we have heavy-duty equipment for larger vehicles and machinery common in Coleman County.',
      },
      {
        q: 'Are weekend calls in Coleman handled the same as weekdays?',
        a: 'Yes, we operate every day of the week, including weekends and holidays, at the same response priority.',
      },
    ],
  },
  'comanche-tx': {
    name: 'Comanche',
    state: 'TX',
    county: 'Comanche County',
    intro:
      'Welch Bros Towing serves Comanche and Comanche County from our Brownwood shop. Near the courthouse square, out on US-377, or along SH-16 toward Proctor Lake, we dispatch a truck as soon as you call.',
    servicesIntro: 'Every service below is available throughout Comanche and Comanche County.',
    mapQuery: 'Comanche, TX',
    mapIntro:
      'Comanche sits along US-67, US-377, and SH-16, all routes our drivers know well on the way in from Brownwood.',
    services: [
      {
        title: '24-Hour Towing in Comanche, TX',
        href: '/towing',
        desc: 'A breakdown near the downtown square or out on US-377 gets the same fast response as a call from inside Brownwood.',
      },
      {
        title: 'Roadside Assistance in Comanche, TX',
        href: '/roadside-assistance',
        desc: 'Dead batteries and minor mechanical issues in Comanche often get resolved on the spot, without needing a full tow.',
      },
      {
        title: 'Heavy-Duty & Commercial Towing in Comanche, TX',
        href: '/heavy-duty-towing',
        desc: 'Commercial trucks and trailers moving through the SH-16 and US-377 junction near Comanche get our heavy wreckers when a standard tow will not do.',
      },
      {
        title: 'Flatbed Towing in Comanche, TX',
        href: '/flatbed-towing',
        desc: 'Vehicles with drivetrain damage or low ground clearance are loaded flatbed-style for a safe trip out of Comanche.',
      },
      {
        title: 'Accident Recovery in Comanche, TX',
        href: '/services#accident-recovery',
        desc: 'Crashes near the Proctor Lake turnoff or along the highways into town get cleared with recovery equipment matched to the situation.',
      },
      {
        title: 'Car Lockout Service in Comanche, TX',
        href: '/services#lockout',
        desc: 'Locked out at a Comanche parking lot or ranch entrance? Our non-destructive tools get the door open without harming your locks.',
      },
      {
        title: 'Tire Change Service in Comanche, TX',
        href: '/tire-changes',
        desc: 'We swap flats on the shoulder near Comanche, checking lug torque and tire fit before sending you on your way.',
      },
      {
        title: 'Fuel Delivery in Comanche, TX',
        href: '/services#fuel-delivery',
        desc: 'Out of gas between Comanche and the next stop on your route? We bring enough fuel to reach the nearest station.',
      },
      {
        title: 'Recovery & Winch-Outs in Comanche, TX',
        href: '/recovery-winch-outs',
        desc: 'Stuck near Proctor Lake or off a muddy county road? Our winch-outs recover vehicles without adding damage.',
      },
    ],
    faqs: [
      {
        q: 'Does Welch Bros Towing have a shop in Comanche?',
        a: 'Our shop is in Brownwood, and Comanche is one of the towns we dispatch to regularly along US-377 and SH-16.',
      },
      {
        q: 'Do you cover areas near Proctor Lake?',
        a: 'Yes, we respond to calls around Proctor Lake and the rural roads surrounding Comanche.',
      },
      {
        q: 'What if my vehicle needs to go to a shop outside Comanche?',
        a: 'We handle tows to any shop or destination you choose, including back to Brownwood or elsewhere in the region.',
      },
      {
        q: 'Is emergency service available in Comanche at night?',
        a: 'Yes, our dispatch line runs 24 hours a day for Comanche and every other area we serve.',
      },
      {
        q: 'Can you help with a locked vehicle in a rural part of Comanche County?',
        a: 'Yes, our lockout technicians respond to rural addresses in Comanche County, not just inside town.',
      },
    ],
  },
  'san-saba-tx': {
    name: 'San Saba',
    state: 'TX',
    county: 'San Saba County',
    intro:
      'Welch Bros Towing dispatches to San Saba and San Saba County from our Brownwood shop. Whether you are near the courthouse square, along the San Saba River, or out on US-190, we send help right away.',
    servicesIntro: 'Every service below is available throughout San Saba and the surrounding county.',
    mapQuery: 'San Saba, TX',
    mapIntro:
      'San Saba sits at the crossing of US-190 and US-281, both routes our drivers use regularly coming from Brownwood.',
    services: [
      {
        title: '24-Hour Towing in San Saba, TX',
        href: '/towing',
        desc: 'A stalled vehicle near the courthouse square or out on US-281 gets a tow truck dispatched the moment you call, any time of day.',
      },
      {
        title: 'Roadside Assistance in San Saba, TX',
        href: '/roadside-assistance',
        desc: 'Battery trouble or a warning light near downtown San Saba often gets fixed on-site by our roadside crew, no tow required.',
      },
      {
        title: 'Heavy-Duty & Commercial Towing in San Saba, TX',
        href: '/heavy-duty-towing',
        desc: 'Pecan-harvest equipment, farm trucks, and commercial rigs moving through San Saba County get matched with the right heavy-duty wrecker.',
      },
      {
        title: 'Flatbed Towing in San Saba, TX',
        href: '/flatbed-towing',
        desc: 'Vehicles that cannot roll safely on their own wheels are loaded flatbed for the trip out of San Saba, protecting the undercarriage.',
      },
      {
        title: 'Accident Recovery in San Saba, TX',
        href: '/services#accident-recovery',
        desc: 'Wrecks near the San Saba River bridge or along US-190 get cleared with recovery gear sized to the vehicle involved.',
      },
      {
        title: 'Car Lockout Service in San Saba, TX',
        href: '/services#lockout',
        desc: 'Locked out at a San Saba parking lot or farmhouse? We use tools that open the door without damaging the lock or paint.',
      },
      {
        title: 'Tire Change Service in San Saba, TX',
        href: '/tire-changes',
        desc: 'Flats on the rural roads around San Saba get handled on the shoulder — spare mounted, lug nuts torqued, tire checked.',
      },
      {
        title: 'Fuel Delivery in San Saba, TX',
        href: '/services#fuel-delivery',
        desc: 'Running out of gas on the stretch between San Saba and neighboring towns? We deliver enough fuel to reach a station.',
      },
      {
        title: 'Recovery & Winch-Outs in San Saba, TX',
        href: '/recovery-winch-outs',
        desc: 'Bogged down near the river or off a soft field road? Our winch equipment recovers vehicles without further damage.',
      },
    ],
    faqs: [
      {
        q: 'How far is San Saba from your shop?',
        a: 'We operate out of Brownwood and treat San Saba as a regular part of our coverage area along US-190 and US-281.',
      },
      {
        q: 'Do you tow farm equipment near San Saba?',
        a: 'Yes, our heavy-duty trucks handle larger equipment common during the pecan harvest and other agricultural seasons.',
      },
      {
        q: 'Can you respond to calls outside San Saba city limits?',
        a: 'Yes, we cover the surrounding county roads and rural properties as well as the town itself.',
      },
      {
        q: 'Is there a difference in response time for rural San Saba County calls?',
        a: 'Rural calls may take slightly longer than in-town calls, but we prioritize based on the nature of the emergency.',
      },
      {
        q: 'Do you offer towing to shops outside San Saba?',
        a: 'Yes, we can tow your vehicle to a shop of your choice, including destinations in Brownwood or elsewhere.',
      },
    ],
  },
  'early-tx': {
    name: 'Early',
    state: 'TX',
    county: 'Brown County',
    intro:
      'Early sits right next door to Brownwood, so Welch Bros Towing reaches it faster than almost anywhere else on our list. Along the US-183/US-84 corridor or anywhere in between, our trucks are minutes away.',
    servicesIntro: 'Every service below is available throughout Early with some of our fastest response times.',
    mapQuery: 'Early, TX',
    mapIntro:
      'Early borders Brownwood directly along the US-183/US-84 corridor, so our trucks are typically on-site in minutes.',
    services: [
      {
        title: '24-Hour Towing in Early, TX',
        href: '/towing',
        desc: 'Because Early borders Brownwood directly, a stalled vehicle along the highway corridor usually sees one of our trucks within minutes.',
      },
      {
        title: 'Roadside Assistance in Early, TX',
        href: '/roadside-assistance',
        desc: 'Dead battery or a check-engine light near the retail corridor in Early? Our roadside crew is close enough to respond quickly.',
      },
      {
        title: 'Heavy-Duty & Commercial Towing in Early, TX',
        href: '/heavy-duty-towing',
        desc: 'Commercial trucks moving along the Early corridor between Brownwood and the highway get our heavy-duty equipment when needed.',
      },
      {
        title: 'Flatbed Towing in Early, TX',
        href: '/flatbed-towing',
        desc: 'Lowered cars and AWD vehicles in Early are loaded wheels-off on a flatbed, the same method we use across all of our service area.',
      },
      {
        title: 'Accident Recovery in Early, TX',
        href: '/services#accident-recovery',
        desc: 'Collisions along the busy Early corridor get a fast, coordinated recovery response given our proximity to the area.',
      },
      {
        title: 'Car Lockout Service in Early, TX',
        href: '/services#lockout',
        desc: 'Locked out at a shop or home in Early? We can typically be on-site quickly with non-destructive lockout tools.',
      },
      {
        title: 'Tire Change Service in Early, TX',
        href: '/tire-changes',
        desc: 'A flat tire in Early gets a fast spare swap and safety check, thanks to how close our Brownwood shop sits to the area.',
      },
      {
        title: 'Fuel Delivery in Early, TX',
        href: '/services#fuel-delivery',
        desc: 'Out of gas near Early? We bring fuel directly to your location, often faster than in areas farther from Brownwood.',
      },
      {
        title: 'Recovery & Winch-Outs in Early, TX',
        href: '/recovery-winch-outs',
        desc: 'Stuck off the roadway near Early? Our winch trucks are close by and ready to pull vehicles free safely.',
      },
    ],
    faqs: [
      {
        q: 'Is Early considered part of your main service area?',
        a: 'Yes, Early borders Brownwood directly and is one of the fastest areas for us to reach.',
      },
      {
        q: 'How quickly can you respond in Early compared to Brownwood?',
        a: 'Response times in Early are typically very close to our in-town Brownwood times given the short distance.',
      },
      {
        q: 'Do you serve both residential and commercial areas in Early?',
        a: 'Yes, we respond to homes, retail locations, and commercial properties throughout Early.',
      },
      {
        q: 'Can I get a tow from Early to a shop in another town?',
        a: 'Yes, we handle tows to any destination you choose, not just within Early or Brownwood.',
      },
      {
        q: 'Is 24-hour service really available in Early?',
        a: 'Yes, all of our services are available in Early 24 hours a day, every day of the year.',
      },
    ],
  },
  'rising-star-tx': {
    name: 'Rising Star',
    state: 'TX',
    county: 'Eastland County',
    intro:
      'Welch Bros Towing dispatches to Rising Star and the surrounding Eastland County roads from our Brownwood shop. Along US-183 or the rural routes near town, we send a truck as soon as you call.',
    servicesIntro: 'Every service below is available to Rising Star drivers and the surrounding county.',
    mapQuery: 'Rising Star, TX',
    mapIntro:
      'Rising Star sits along US-183 north of Brownwood, a route our drivers travel regularly for calls in the area.',
    services: [
      {
        title: '24-Hour Towing in Rising Star, TX',
        href: '/towing',
        desc: 'A breakdown on US-183 near Rising Star gets a tow truck dispatched right away, no matter the hour.',
      },
      {
        title: 'Roadside Assistance in Rising Star, TX',
        href: '/roadside-assistance',
        desc: 'A dead battery or minor issue near downtown Rising Star often gets resolved on the spot by our roadside team.',
      },
      {
        title: 'Heavy-Duty & Commercial Towing in Rising Star, TX',
        href: '/heavy-duty-towing',
        desc: 'Farm equipment and commercial trucks on the rural roads around Rising Star get the correct heavy-duty rig for a safe tow.',
      },
      {
        title: 'Flatbed Towing in Rising Star, TX',
        href: '/flatbed-towing',
        desc: 'Vehicles with drivetrain issues or low clearance are loaded flatbed-style for the drive out of Rising Star.',
      },
      {
        title: 'Accident Recovery in Rising Star, TX',
        href: '/services#accident-recovery',
        desc: 'Wrecks on US-183 or the county roads near Rising Star get a coordinated recovery response with local responders.',
      },
      {
        title: 'Car Lockout Service in Rising Star, TX',
        href: '/services#lockout',
        desc: 'Locked out near town or at a rural property outside Rising Star? Our tools get you back inside without lock damage.',
      },
      {
        title: 'Tire Change Service in Rising Star, TX',
        href: '/tire-changes',
        desc: 'Flats on the shoulder near Rising Star get a fast spare swap, with lug torque and tire fit checked before you leave.',
      },
      {
        title: 'Fuel Delivery in Rising Star, TX',
        href: '/services#fuel-delivery',
        desc: 'Running out of fuel on the long stretch of US-183 near Rising Star? We bring enough gas or diesel to reach a station.',
      },
      {
        title: 'Recovery & Winch-Outs in Rising Star, TX',
        href: '/recovery-winch-outs',
        desc: 'Stuck off a rural road near Rising Star? Our winch-outs pull vehicles free without adding damage.',
      },
    ],
    faqs: [
      {
        q: 'Do you regularly serve Rising Star?',
        a: 'Yes, Rising Star is a regular part of our coverage area along US-183, dispatched from our Brownwood shop.',
      },
      {
        q: 'What areas around Rising Star do you cover?',
        a: 'We respond throughout Rising Star and the surrounding rural Eastland County roads, not just the town itself.',
      },
      {
        q: 'Can you tow farm equipment near Rising Star?',
        a: 'Yes, our heavy-duty equipment is suited for the agricultural vehicles common in the area.',
      },
      {
        q: 'Is service available at night in Rising Star?',
        a: 'Yes, we operate 24 hours a day, including for calls from Rising Star and the surrounding area.',
      },
      {
        q: 'Do you provide fuel delivery on rural roads near Rising Star?',
        a: 'Yes, we deliver fuel to rural locations near Rising Star, not just paved in-town roads.',
      },
    ],
  },
  'goldthwaite-tx': {
    name: 'Goldthwaite',
    state: 'TX',
    county: 'Mills County',
    intro:
      'Welch Bros Towing serves Goldthwaite and Mills County from our Brownwood shop. Near the courthouse square, along US-84, or out on the ranch roads surrounding town, we dispatch a truck as soon as you call.',
    servicesIntro: 'Every service below is available throughout Goldthwaite and Mills County.',
    mapQuery: 'Goldthwaite, TX',
    mapIntro:
      'Goldthwaite sits along US-84 and US-183, both routes our drivers know well coming from Brownwood.',
    services: [
      {
        title: '24-Hour Towing in Goldthwaite, TX',
        href: '/towing',
        desc: 'A stalled vehicle near the Mills County Courthouse or out on US-84 gets a tow truck on the way immediately, day or night.',
      },
      {
        title: 'Roadside Assistance in Goldthwaite, TX',
        href: '/roadside-assistance',
        desc: 'Battery issues or a warning light near downtown Goldthwaite often get resolved on-site, without needing a full tow.',
      },
      {
        title: 'Heavy-Duty & Commercial Towing in Goldthwaite, TX',
        href: '/heavy-duty-towing',
        desc: 'Ranch trucks and commercial vehicles on US-84 or US-183 through Mills County get paired with the right heavy-duty wrecker.',
      },
      {
        title: 'Flatbed Towing in Goldthwaite, TX',
        href: '/flatbed-towing',
        desc: 'Vehicles with drivetrain damage or low ground clearance are loaded wheels-off on a flatbed for the drive out of Goldthwaite.',
      },
      {
        title: 'Accident Recovery in Goldthwaite, TX',
        href: '/services#accident-recovery',
        desc: 'Crashes on the highways near Goldthwaite get cleared with recovery equipment matched to the vehicle and scene.',
      },
      {
        title: 'Car Lockout Service in Goldthwaite, TX',
        href: '/services#lockout',
        desc: 'Locked out near the square or at a ranch property outside Goldthwaite? Our tools open the door without damaging your locks.',
      },
      {
        title: 'Tire Change Service in Goldthwaite, TX',
        href: '/tire-changes',
        desc: 'Flats on the rural roads around Goldthwaite get a fast spare swap, with lug torque and fit checked before you go.',
      },
      {
        title: 'Fuel Delivery in Goldthwaite, TX',
        href: '/services#fuel-delivery',
        desc: 'Out of gas on the stretch between Goldthwaite and the next town? We deliver enough fuel to reach the nearest station.',
      },
      {
        title: 'Recovery & Winch-Outs in Goldthwaite, TX',
        href: '/recovery-winch-outs',
        desc: 'Stuck off a ranch road or near the Colorado River outside Goldthwaite? Our winch equipment recovers vehicles safely.',
      },
    ],
    faqs: [
      {
        q: 'Does Welch Bros Towing have a location in Goldthwaite?',
        a: 'No, we dispatch to Goldthwaite from our Brownwood shop, and it is a regular part of our Mills County coverage.',
      },
      {
        q: 'Do you cover ranch properties outside Goldthwaite city limits?',
        a: 'Yes, we respond to rural Mills County addresses and ranch roads, not just inside town.',
      },
      {
        q: 'Can you handle heavy or oversized vehicles near Goldthwaite?',
        a: 'Yes, our heavy-duty trucks are equipped for larger vehicles and equipment common in the area.',
      },
      {
        q: 'Is towing available on weekends in Goldthwaite?',
        a: 'Yes, we operate every day of the week, including weekends and holidays, with the same response priority.',
      },
      {
        q: 'Can you tow a vehicle from Goldthwaite to a shop in Brownwood?',
        a: 'Yes, long-distance tows between Goldthwaite and Brownwood, or any other destination, are something we handle regularly.',
      },
    ],
  },
  'stephenville-tx': {
    name: 'Stephenville',
    state: 'TX',
    county: 'Erath County',
    intro:
      'Welch Bros Towing dispatches to Stephenville and the rest of Erath County from our Brownwood shop. Near the Tarleton State University campus, downtown on Washington Street, or out on US-281 or US-377, we send a truck as soon as you call.',
    servicesIntro: 'Every service below is available to drivers, students, and businesses throughout Stephenville and Erath County.',
    mapQuery: 'Stephenville, TX',
    mapIntro:
      'Stephenville sits along US-281 and US-377 southeast of Brownwood, a regular route for our drivers responding to calls in the area.',
    services: [
      {
        title: '24-Hour Towing in Stephenville, TX',
        href: '/towing',
        desc: 'A breakdown near the Tarleton State campus or out on US-377 toward Granbury gets a tow truck dispatched immediately, any hour of the day or night.',
      },
      {
        title: 'Roadside Assistance in Stephenville, TX',
        href: '/roadside-assistance',
        desc: 'A dead battery in a Washington Street parking lot or a stalled car near campus housing usually gets sorted on the spot by our roadside crew, no tow required.',
      },
      {
        title: 'Heavy-Duty & Commercial Towing in Stephenville, TX',
        href: '/heavy-duty-towing',
        desc: 'Dairy trucks, livestock trailers, and commercial rigs moving through Erath County on US-281 get matched with the heavy wreckers we run out of Brownwood.',
      },
      {
        title: 'Flatbed Towing in Stephenville, TX',
        href: '/flatbed-towing',
        desc: 'Lowered cars and all-wheel-drive vehicles around Stephenville are loaded wheels-off on a flatbed, protecting the drivetrain for the trip to a shop.',
      },
      {
        title: 'Accident Recovery in Stephenville, TX',
        href: '/services#accident-recovery',
        desc: 'After a wreck on US-377 or one of the ranch roads outside town, we coordinate with local first responders to clear the scene and recover your vehicle safely.',
      },
      {
        title: 'Car Lockout Service in Stephenville, TX',
        href: '/services#lockout',
        desc: 'Locked out near campus, downtown, or at home in Stephenville? We use non-destructive entry tools so your locks and trim stay undamaged.',
      },
      {
        title: 'Tire Change Service in Stephenville, TX',
        href: '/tire-changes',
        desc: 'A flat on the loop around Stephenville or a rural Erath County road gets a fast spare swap, with lug torque and tire fit checked before you leave.',
      },
      {
        title: 'Fuel Delivery in Stephenville, TX',
        href: '/services#fuel-delivery',
        desc: 'Running low between Stephenville and the next town on US-281 or US-377? We bring enough fuel to get you to the nearest station.',
      },
      {
        title: 'Recovery & Winch-Outs in Stephenville, TX',
        href: '/recovery-winch-outs',
        desc: 'Stuck in a pasture, ditch, or soft field road near Stephenville? Our winch equipment pulls you out without adding further damage.',
      },
    ],
    faqs: [
      {
        q: 'Do you have a location in Stephenville?',
        a: 'No, our shop is based in Brownwood, but we dispatch to Stephenville and all of Erath County on a regular basis.',
      },
      {
        q: 'Do you serve the area around Tarleton State University?',
        a: 'Yes, we regularly respond to calls near campus, student housing, and the surrounding Stephenville neighborhoods.',
      },
      {
        q: 'Can you tow a vehicle from Stephenville back to a shop in Brownwood?',
        a: 'Yes, long-distance tows between Stephenville and Brownwood, or any other destination, are something we handle regularly.',
      },
      {
        q: 'Is nighttime towing available in Stephenville?',
        a: 'Yes, we run 24 hours a day, 7 days a week, including nights, weekends, and holidays.',
      },
      {
        q: 'Do you tow farm and dairy equipment near Stephenville?',
        a: 'Yes, our heavy-duty trucks are equipped for the larger vehicles and agricultural equipment common in Erath County.',
      },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const cityData = cities[city]
  if (!cityData) return {}
  return {
    title: `Services in ${cityData.name}, ${cityData.state} | Welch Bros Towing`,
    description: cityData.intro,
    alternates: { canonical: `/service-areas/${city}` },
  }
}

export default async function CityServiceAreaPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const cityData = cities[city]
  if (!cityData) notFound()

  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(cityData.mapQuery)}&output=embed`
  const cityLabel = `${cityData.name}, ${cityData.state}`

  const relatedLinks = [
    { label: 'Brownwood, TX', href: '/service-areas' },
    ...Object.entries(cities)
      .filter(([slug]) => slug !== city)
      .map(([slug, c]) => ({ label: `${c.name}, ${c.state}`, href: `/service-areas/${slug}` })),
    { label: 'All Services', href: '/services' },
    { label: 'Contact Us', href: '/contact-us' },
  ]

  return (
    <ServiceAreaPage
      canonicalUrl={`/service-areas/${city}`}
      breadcrumbLabel={`Services in ${cityLabel}`}
      kicker={`${cityData.name}, Texas`}
      heading={`Services in ${cityLabel}`}
      intro={cityData.intro}
      servicesHeading={`Every Service We Offer in ${cityData.name}`}
      servicesIntro={cityData.servicesIntro}
      services={cityData.services}
      ctaHeading={`Need Help Somewhere in ${cityData.name}?`}
      ctaSubtext={`Call Welch Bros Towing now — we dispatch to ${cityData.name} and ${cityData.county} 24 hours a day, 7 days a week.`}
      mapHeading={`Serving ${cityLabel}`}
      mapIntro={cityData.mapIntro}
      mapEmbedSrc={mapEmbedSrc}
      mapTitle={`Map of ${cityLabel}`}
      addressName="Welch Bros Towing — Dispatched from Brownwood"
      addressLines={SHOP_ADDRESS}
      mapLink={SHOP_MAP_LINK}
      mapLinkLabel="Get Directions to Our Shop"
      faqHeading={`${cityData.name} Service Questions`}
      faqs={cityData.faqs}
      relatedHeading="More Central Texas Areas We Cover"
      relatedLinks={relatedLinks}
    />
  )
}
