// App.jsx
import React, { Suspense, lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Fallback from './tools/Fallback';

// All image imports go here
import bullseye from './assets/images/bullseye.png';
import commercial from './assets/images/commercial.png';
import drainCleaning from './assets/images/draincleaning.png';
import emergency from './assets/images/emergency.png';
import gasFitting from './assets/images/gasfitting.png';
import hotWater from './assets/images/hotwater.png';
import placeholderImg from './assets/images/placeholder.png';
import preventativeMaintenance from './assets/images/preventativemaintenance.png';
import renovation from './assets/images/renovation.png';
import residential from './assets/images/residential.png';
import waterLeak from './assets/images/waterleak.png';
import ServicePage from './pages/ServicePage';

// lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WhyChooseUsPage = lazy(() => import('./pages/WhyChooseUsPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export const services = [
  {
    serviceImg: emergency,
    serviceImgAlt: 'Emergency plumbing icon',
    serviceName: 'Emergency Repairs',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Available 24/7, our team provides rapid repairs to prevent further damage.',
    extendedDescription: `Our emergency response specialists arrive promptly to diagnose and resolve leaks, burst pipes, or clogs before they escalate into major complications. We utilize advanced diagnostic tools to quickly assess the situation and protect your home or business from costly water damage. Beyond immediate fixes, we also provide thorough inspections to identify any underlying issues. This proactive approach helps prevent repeated breakdowns, giving you the peace of mind that your plumbing system remains secure, day or night.`,
    howWeOffer: `We prioritize swift communication from the moment you place a distress call. Our team will walk you through immediate measures to minimize damage while one of our certified plumbers is dispatched. Once on-site, our technicians conduct a quick yet thorough evaluation, ensuring that every step of the repair process is transparent. Our goal is to restore normalcy to your home or business as efficiently as possible, with long-term preventative solutions in place.`
  },
  {
    serviceImg: residential,
    serviceImgAlt: 'Residential plumbing icon',
    serviceName: 'Home Plumbing',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'We deliver precise plumbing setups for homes with efficient, reliable workmanship.',
    extendedDescription: `From new pipe installations in recently built properties to modernizing fixtures in older homes, our residential plumbing services ensure a tailored solution for your specific needs. We use top-grade materials so you enjoy minimal leaks and maximum longevity.

In addition, our experts can advise on water-saving technologies, filtration systems, and preventative maintenance strategies. By prioritizing durability and eco-conscious solutions, we keep your home’s plumbing running optimally while helping you conserve water.`,
    howWeOffer: `Our residential services begin with a thorough assessment of your home’s plumbing needs, followed by a detailed quote and timeline. We believe in transparent communication, so you’re never left guessing about costs or progress.
    
Depending on your preferences and requirements, our team can recommend top-quality fixtures or specialized upgrades. We also coordinate with electricians or other contractors if the project calls for a multi-skilled approach, ensuring a seamless experience.`
  },
  {
    serviceImg: commercial,
    serviceImgAlt: 'Commercial plumbing icon',
    serviceName: 'Business Plumbing',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Tailored for businesses, our services resolve complex plumbing challenges with dependable results.',
    extendedDescription: `Whether you manage a single retail store or a sprawling corporate complex, our commercial plumbing solutions address high-usage demands while conforming to local and state regulations. We strive for minimal downtime so you can keep your focus on day-to-day operations.

We’re also available for scheduled upgrades and retrofitting projects that enhance efficiency. From fixture replacements to backflow prevention devices, we ensure your commercial plumbing meets safety standards and lowers operational costs.`,
    howWeOffer: `We start by collaborating with your facility manager or relevant contact to determine the scale and scope of each project. From there, we develop a strategic plan that includes clear milestones, safety checks, and compliance with regulations.
    
During the process, our team works around your operational hours to minimize disruption. With periodic check-ins and site visits, we stay responsive to any emerging needs, ensuring a successful outcome for your business.`
  },
  {
    serviceImg: gasFitting,
    serviceImgAlt: 'Gas fitting icon',
    serviceName: 'Gas Fitting',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Certified for gas fitting, we install and maintain gas appliances safely and efficiently.',
    extendedDescription: `Our licensed technicians specialize in installing and inspecting gas lines for appliances such as stoves, fireplaces, and water heaters. We adhere strictly to safety codes, ensuring that every connection is sealed and tested thoroughly.

Beyond installation, we also provide maintenance and emergency services to detect and address leaks. By using modern diagnostic methods, we help safeguard your property from potential hazards, allowing you to enjoy reliable gas-fueled appliances for years to come.`,
    howWeOffer: `Once you request gas-fitting services, we schedule an on-site evaluation to assess your existing infrastructure or future installation requirements. Safety is paramount, so every line is pressure-tested and thoroughly examined.
    
Throughout the entire process, we keep you informed of any required permits or local regulations. Our streamlined approach ensures your gas appliances and piping systems meet industry standards without compromising efficiency or comfort.`
  },
  {
    serviceImg: preventativeMaintenance,
    serviceImgAlt: 'Preventative maintenance icon',
    serviceName: 'System Maintenance',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Regular checks and upkeep keep your plumbing system in top condition, helping avoid costly repairs.',
    extendedDescription: `Our comprehensive maintenance plans spot potential trouble before it becomes a crisis. We inspect everything from pipe integrity to water heater efficiency, making minor fixes that prevent major breakdowns later on.

Clients often see reduced utility bills and fewer emergency calls due to our proactive approach. Investing in routine maintenance not only saves you money but also extends the lifespan of your fixtures and piping.`,
    howWeOffer: `We begin with a detailed inspection to create a baseline of your system’s current health. This allows us to customize a maintenance schedule that suits your property’s unique usage patterns.
    
After each visit, you receive a summary report noting any issues found and preventative steps taken. By staying on top of smaller repairs, you’ll avoid expensive overhauls and ensure the longevity of your plumbing infrastructure.`
  },
  {
    serviceImg: waterLeak,
    serviceImgAlt: 'Water leak detection icon',
    serviceName: 'Leak Detection',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'With state-of-the-art equipment, we quickly locate and repair leaks to protect your property.',
    extendedDescription: `Using cutting-edge acoustic and thermal imaging, our technicians can pinpoint hidden leaks behind walls, under floors, or even underground. Early detection spares you from expensive structural repairs and mold remediation. Once we find the source, we repair or replace the damaged section promptly. Our leak detection approach prioritizes minimal disruption, allowing you to get back to normal with confidence that your property is protected.`,
    howWeOffer: `When you suspect a leak, our quick-response team arrives equipped with specialized gear to find the exact problem area. We prioritize minimally invasive methods, reducing the need for large-scale demolition. After diagnosing the issue, our technicians provide a clear repair plan and cost estimate. You can expect transparent communication and a focus on restoring normal water flow with minimal impact on your day-to-day life.`
  },
  {
    serviceImg: hotWater,
    serviceImgAlt: 'Hot water system icon',
    serviceName: 'Hot Water',
    className: 'w-10 h-14',
    serviceDesc: 'Specializing in hot water systems, we ensure consistent performance through expert installs and fixes.',
    extendedDescription: `From modern tankless heaters to traditional storage units, our team can recommend and install the best hot water solution for your household or business. We carefully size units to match usage demands, maximizing both efficiency and comfort.

We also offer routine flushes, part replacements, and thermostat calibrations to keep your water heater running at peak performance. With our expertise, you’ll enjoy steady hot water and reduced energy consumption.`,
    howWeOffer: `We begin by evaluating your usage patterns, property layout, and budget to suggest a water heating solution best suited for you. Our recommendations aim to balance performance, energy efficiency, and long-term maintenance.
    
Installation is carried out by certified professionals who follow strict safety protocols. We’ll also walk you through maintenance tips to keep the system in optimal shape—ensuring you have reliable hot water year-round.`
  },
  {
    serviceImg: drainCleaning,
    serviceImgAlt: 'Drain cleaning icon',
    serviceName: 'Drain Cleaning',
    className: 'w-11 h-13',
    serviceDesc: 'Using advanced tools, we clear clogs and clean drains to restore smooth flow.',
    extendedDescription: `Our team uses hydro-jetting and specialized cable equipment to remove debris without harming your pipes. By eliminating stubborn grease, hair, and mineral buildup, we help reduce the risk of recurring blockages.

Additionally, we inspect drains for potential structural issues or root intrusion, offering targeted repairs when needed. This proactive approach extends the life of your plumbing and gives you peace of mind about your drainage system.`,
    howWeOffer: `Once you schedule a drain cleaning, we perform a quick camera inspection to locate blockages. Depending on the severity and type of clog, we then deploy the right method—ranging from enzyme treatments to high-pressure jetting.
    
After clearing the drain, we run another check to confirm full flow restoration. If we detect any persistent issues like tree root invasion, we’ll recommend a tailored repair plan to resolve them at the source.`
  },
  {
    serviceImg: renovation,
    serviceImgAlt: 'Renovation plumbing icon',
    serviceName: 'Plumbing Upgrades',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'We integrate modern plumbing solutions in renovations and new constructions for flawless results.',
    extendedDescription: `Whether you’re expanding a kitchen, adding a bathroom, or building from scratch, our experts meticulously plan water lines, drains, and fixtures for optimal performance. We focus on smooth integration with existing systems where needed.

Coupled with high-efficiency fixtures and modern materials, our upgrades not only enhance functionality but can also improve your property’s resale value. Our approach ensures minimal disruptions and a seamless finish that complements your design vision.`,
    howWeOffer: `Our process starts with a thorough blueprint review or walk-through of your existing layout. We’ll discuss your goals, be it modernizing outdated fixtures or integrating completely new plumbing installations.
    
From there, we create a phased plan to align with your renovation timeline. Our plumbers collaborate closely with architects, electricians, and general contractors to ensure each step is completed safely, on schedule, and to your exact specifications.`
  }
];


const projectsData = [
  {
    id: 1,
    title: "Modern Bathroom Renovation",
    category: "Residential",
    description: "Complete bathroom overhaul including installation of high-efficiency fixtures, custom shower system, and heated flooring.",
    image: "/api/placeholder/600/400",
    client: "Thompson Residence",
    completionDate: "January 2025",
    extendedDescription: "This renovation encompassed a luxurious walk-in shower with multiple spray settings, custom tiling, and contemporary fixtures that merge style with efficiency. The heated flooring system ensures year-round comfort, and a built-in sound system provides a spa-like atmosphere."
  },
  {
    id: 2,
    title: "Commercial Kitchen Plumbing",
    category: "Commercial",
    description: "Installation of industrial-grade plumbing systems for a restaurant kitchen, including grease traps and specialized drainage.",
    image: "/api/placeholder/600/400",
    client: "Seaside Bistro",
    completionDate: "December 2024",
    extendedDescription: "A comprehensive buildout featuring high-capacity grease interceptors, stainless steel piping for maximum hygiene, and automated dishwashing systems to optimize workflow. The project also included tankless water heaters designed to handle peak-hour demands."
  },
  {
    id: 3,
    title: "Whole-House Repiping",
    category: "Residential",
    description: "Complete replacement of outdated galvanized pipes with modern PEX plumbing throughout a three-story Victorian home.",
    image: "/api/placeholder/600/400",
    client: "Historic Hill Home",
    completionDate: "November 2024",
    extendedDescription: "The original Victorian architecture was preserved by routing PEX piping discreetly behind original moldings and fixtures. New pressure-regulating valves and filtration systems improved water quality, while careful craftsmanship maintained the home’s historical charm."
  },
  {
    id: 4,
    title: "Hotel Water Heating System",
    category: "Commercial",
    description: "Installation of energy-efficient tankless water heating system for a 40-room boutique hotel.",
    image: "/api/placeholder/600/400",
    client: "Harbor View Inn",
    completionDate: "October 2024",
    extendedDescription: "To accommodate high occupancy demands, multiple tankless units were interconnected for a continuous supply of hot water. System monitoring was integrated to track energy consumption, resulting in substantial cost savings and a reduced environmental footprint."
  },
  {
    id: 5,
    title: "Outdoor Irrigation System",
    category: "Residential",
    description: "Custom designed and installed water-saving irrigation system with smart controls for a large residential property.",
    image: "/api/placeholder/600/400",
    client: "Meadowlark Estate",
    completionDate: "September 2024",
    extendedDescription: "Drip irrigation lines tailored to the property's diverse plant varieties reduce water waste, while smart sensors automatically adjust watering schedules based on weather forecasts and soil moisture levels. All components were designed to blend seamlessly with the landscape."
  },
  {
    id: 6,
    title: "Medical Facility Plumbing",
    category: "Commercial",
    description: "Specialized medical-grade plumbing installation with strict sanitation requirements for a new dental clinic.",
    image: "/api/placeholder/600/400",
    client: "Bright Smile Dentistry",
    completionDate: "August 2024",
    extendedDescription: "Every aspect of this build adhered to stringent health regulations, including backflow prevention and sanitized supply lines. The project also integrated dedicated lines for autoclave machines and water filtration systems to maintain a sterile environment."
  },
  {
    id: 7,
    title: "Eco-Friendly Rainwater Harvesting",
    category: "Residential",
    description: "Installation of a comprehensive rainwater collection and filtration system for household use.",
    image: "/api/placeholder/600/400",
    client: "Green Living Residence",
    completionDate: "July 2024",
    extendedDescription: "Large capacity rain barrels collect roof runoff, passing it through a multi-stage filtration process for gray water usage in laundry and landscaping. Overflow systems are directed to permeable ground areas, ensuring minimal environmental impact and water wastage."
  },
  {
    id: 8,
    title: "Office Building Retrofit",
    category: "Commercial",
    description: "Complete plumbing retrofit for a 5-story office building, including water-saving fixtures and ADA compliance upgrades.",
    image: "/api/placeholder/600/400",
    client: "Downtown Business Center",
    completionDate: "June 2024",
    extendedDescription: "All restrooms were modernized with touchless fixtures and low-flow toilets, and new supply lines were routed to meet ADA standards. Energy-efficient hot water systems were installed to reduce overhead costs, and state-of-the-art leak detection sensors were strategically placed to prevent water damage."
  }
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<Fallback />}>
            <HomePage placeholderImg={placeholderImg} projectsData={projectsData} services={services.slice(0,6)}/>
          </Suspense>
        }
      />

      <Route
        path="services"
        element={
          <Suspense fallback={<Fallback />}>
            <ServicesPage services={services} placeholderImg={placeholderImg}/>
          </Suspense>
        }
      />

      <Route
        path="why-choose-us"
        element={
          <Suspense fallback={<Fallback />}>
            <WhyChooseUsPage placeholderImg={placeholderImg}/>
          </Suspense>
        }
      />

      <Route
        path="projects"
        element={
          <Suspense fallback={<Fallback />}>
            <ProjectsPage placeholderImg={placeholderImg} projectsData={projectsData}/>
          </Suspense>
        }
      />

      <Route
        path="about-us"
        element={
          <Suspense fallback={<Fallback />}>
            <AboutUsPage placeholderImg={placeholderImg}/>
          </Suspense>
        }
      />

      <Route
        path="contact-us"
        element={
          <Suspense fallback={<Fallback />}>
            <ContactPage placeholderImg={placeholderImg}/>
          </Suspense>
        }
      />

      <Route
        path="projects/:slug"
        element={
          <Suspense fallback={<Fallback />}>
            <ProjectPage projectsData={projectsData} />
          </Suspense>
        }
      />

      <Route
        path="services/:slug"
        element={
          <Suspense fallback={<Fallback />}>
            <ServicePage services={services} />
          </Suspense>
        }
      />

      <Route
        path="*"
        element={
          <Suspense fallback={<Fallback />}>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
