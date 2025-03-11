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
import handshake from './assets/images/handshake.png';
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
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));


// services-page 
const services = [
  {
    serviceImg: emergency,
    serviceImgAlt: 'Emergency plumbing icon',
    serviceName: 'Emergency Repairs',
    serviceDesc: 'Available 24/7, our team provides rapid repairs to prevent further damage.'
  },
  {
    serviceImg: residential,
    serviceImgAlt: 'Residential plumbing icon',
    serviceName: 'Home Plumbing',
    serviceDesc: 'We deliver precise plumbing setups for homes with efficient, reliable workmanship.'
  },
  {
    serviceImg: commercial,
    serviceImgAlt: 'Commercial plumbing icon',
    serviceName: 'Business Plumbing',
    serviceDesc: 'Tailored for businesses, our services resolve complex plumbing challenges with dependable results.'
  },
  {
    serviceImg: hotWater,
    serviceImgAlt: 'Hot water system icon',
    serviceName: 'Hot Water',
    serviceDesc: 'Specializing in hot water systems, we ensure consistent performance through expert installs and fixes.'
  },
  {
    serviceImg: drainCleaning,
    serviceImgAlt: 'Drain cleaning icon',
    serviceName: 'Drain Cleaning',
    serviceDesc: 'Using advanced tools, we clear clogs and clean drains to restore smooth flow.'
  },
  {
    serviceImg: renovation,
    serviceImgAlt: 'Renovation plumbing icon',
    serviceName: 'Plumbing Upgrades',
    serviceDesc: 'We integrate modern plumbing solutions in renovations and new constructions for flawless results.'
  },
  {
    serviceImg: gasFitting,
    serviceImgAlt: 'Gas fitting icon',
    serviceName: 'Gas Fitting',
    serviceDesc: 'Certified for gas fitting, we install and maintain gas appliances safely and efficiently.'
  },
  {
    serviceImg: preventativeMaintenance,
    serviceImgAlt: 'Preventative maintenance icon',
    serviceName: 'System Maintenance',
    serviceDesc: 'Regular checks and upkeep keep your plumbing system in top condition, helping avoid costly repairs.'
  },
  {
    serviceImg: waterLeak,
    serviceImgAlt: 'Water leak detection icon',
    serviceName: 'Leak Detection',
    serviceDesc: 'With state-of-the-art equipment, we quickly locate and repair leaks to protect your property.'
  }
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<Fallback />}>
            <HomePage placeholderImg={placeholderImg} services={services.slice(0,6)}/>
          </Suspense>
        }
      />

      <Route
        path="services"
        element={
          <Suspense fallback={<Fallback />}>
            <ServicesPage services={services}/>
          </Suspense>
        }
      />

      <Route
        path="why-choose-us"
        element={
          <Suspense fallback={<Fallback />}>
            <WhyChooseUsPage />
          </Suspense>
        }
      />

      <Route
        path="about-us"
        element={
          <Suspense fallback={<Fallback />}>
            <AboutUsPage />
          </Suspense>
        }
      />

      <Route
        path="contact-us"
        element={
          <Suspense fallback={<Fallback />}>
            <ContactPage />
          </Suspense>
        }
      />

      <Route
        path="projects"
        element={
          <Suspense fallback={<Fallback />}>
            <ProjectsPage />
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
