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

// lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WhyChooseUsPage = lazy(() => import('./pages/WhyChooseUsPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));


// services-page 
const services = [
  {
    serviceImg: emergency,
    serviceImgAlt: 'Emergency plumbing icon',
    serviceName: 'Emergency Repairs',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Available 24/7, our team provides rapid repairs to prevent further damage.'
  },
  {
    serviceImg: residential,
    serviceImgAlt: 'Residential plumbing icon',
    serviceName: 'Home Plumbing',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'We deliver precise plumbing setups for homes with efficient, reliable workmanship.'
  },
  {
    serviceImg: commercial,
    serviceImgAlt: 'Commercial plumbing icon',
    serviceName: 'Business Plumbing',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Tailored for businesses, our services resolve complex plumbing challenges with dependable results.'
  },
  {
    serviceImg: gasFitting,
    serviceImgAlt: 'Gas fitting icon',
    serviceName: 'Gas Fitting',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Certified for gas fitting, we install and maintain gas appliances safely and efficiently.'
  },
  {
    serviceImg: preventativeMaintenance,
    serviceImgAlt: 'Preventative maintenance icon',
    serviceName: 'System Maintenance',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Regular checks and upkeep keep your plumbing system in top condition, helping avoid costly repairs.'
  },
  {
    serviceImg: waterLeak,
    serviceImgAlt: 'Water leak detection icon',
    serviceName: 'Leak Detection',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'With state-of-the-art equipment, we quickly locate and repair leaks to protect your property.'
  },
  {
    serviceImg: hotWater,
    serviceImgAlt: 'Hot water system icon',
    serviceName: 'Hot Water',
    className: 'w-10 h-14',
    serviceDesc: 'Specializing in hot water systems, we ensure consistent performance through expert installs and fixes.'
  },
  {
    serviceImg: drainCleaning,
    serviceImgAlt: 'Drain cleaning icon',
    serviceName: 'Drain Cleaning',
    className: 'w-11 h-13',
    serviceDesc: 'Using advanced tools, we clear clogs and clean drains to restore smooth flow.'
  },
  {
    serviceImg: renovation,
    serviceImgAlt: 'Renovation plumbing icon',
    serviceName: 'Plumbing Upgrades',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'We integrate modern plumbing solutions in renovations and new constructions for flawless results.'
  },
];

// data/projectsData.js
export const projectsData = [
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

      {/* <Route
        path="projects/1"
        element={
          <Suspense fallback={<Fallback />}>
            <Project1 />
          </Suspense>
        }
      />

      <Route
        path="projects/2"
        element={
          <Suspense fallback={<Fallback />}>
            <Project2 />
          </Suspense>
        }
      />

      <Route
        path="projects/3"
        element={
          <Suspense fallback={<Fallback />}>
            <Project3 />
          </Suspense>
        }
      /> */}

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
