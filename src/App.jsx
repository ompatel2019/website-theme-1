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
    serviceImg: preventativeMaintenance,
    serviceImgAlt: 'Preventative maintenance icon',
    serviceName: 'Service Name Goes Here',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.',
    extendedDescription: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctu`,
    howWeOffer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctus.`
  },
  {
    serviceImg: preventativeMaintenance,
    serviceImgAlt: 'Preventative maintenance icon',
    serviceName: 'Service Name Goes Here',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.',
    extendedDescription: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctu`,
    howWeOffer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctus.`
  },
  {
    serviceImg: preventativeMaintenance,
    serviceImgAlt: 'Preventative maintenance icon',
    serviceName: 'Service Name Goes Here',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.',
    extendedDescription: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctu`,
    howWeOffer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctus.`
  },
  {
    serviceImg: preventativeMaintenance,
    serviceImgAlt: 'Preventative maintenance icon',
    serviceName: 'Service Name Goes Here',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.',
    extendedDescription: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctu`,
    howWeOffer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctus.`
  },
  {
    serviceImg: preventativeMaintenance,
    serviceImgAlt: 'Preventative maintenance icon',
    serviceName: 'Service Name Goes Here',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.',
    extendedDescription: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctu`,
    howWeOffer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctus.`
  },
  {
    serviceImg: preventativeMaintenance,
    serviceImgAlt: 'Preventative maintenance icon',
    serviceName: 'Service Name Goes Here',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.',
    extendedDescription: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctu`,
    howWeOffer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctus.`
  },
  {
    serviceImg: preventativeMaintenance,
    serviceImgAlt: 'Preventative maintenance icon',
    serviceName: 'Service Name Goes Here',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.',
    extendedDescription: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctu`,
    howWeOffer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctus.`
  },
  {
    serviceImg: preventativeMaintenance,
    serviceImgAlt: 'Preventative maintenance icon',
    serviceName: 'Service Name Goes Here',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.',
    extendedDescription: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctu`,
    howWeOffer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctus.`
  },
  {
    serviceImg: preventativeMaintenance,
    serviceImgAlt: 'Preventative maintenance icon',
    serviceName: 'Service Name Goes Here',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.',
    extendedDescription: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctu`,
    howWeOffer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctus.`
  },
  {
    serviceImg: preventativeMaintenance,
    serviceImgAlt: 'Preventative maintenance icon',
    serviceName: 'Service Name Goes Here',
    className: 'min-w-12 max-w-12 max-h-20 max-md:max-w-6 max-md:max-h-12',
    serviceDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.',
    extendedDescription: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctu`,
    howWeOffer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit interdum ante, eget consequat nibh mollis at. Quisque finibus libero sit amet turpis tempus, ac elementum mauris interdum. In condimentum, eros vitae dignissim consequat, diam nunc venenatis quam, a aliquam mi enim sed velit. Integer tincidunt nulla ac risus efficitur, quis scelerisque ipsum lobortis. Nullam laoreet accumsan lobortis. Pellentesque dapibus, eros congue volutpat mollis, massa ante venenatis nisi, ac mollis est tortor eget neque. Vestibulum nulla nisl, fringilla id fermentum sit amet, facilisis at augue. Suspendisse ut magna ullamcorper nulla fringilla consequat. Proin risus est, commodo eget tincidunt ac, luctus.`
  },
];


const projectsData = [
  {
    id: 1,
    title: "Project Name Goes Here",
    category: "Project Type",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.",
    image: "/api/placeholder/600/400",
    client: "Thompson Residence",
    completionDate: "January 2025",
    extendedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida."
  },
  {
    id: 1,
    title: "Project Name Goes Here",
    category: "Project Type",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.",
    image: "/api/placeholder/600/400",
    client: "Thompson Residence",
    completionDate: "January 2025",
    extendedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida."
  },
  {
    id: 1,
    title: "Project Name Goes Here",
    category: "Project Type",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.",
    image: "/api/placeholder/600/400",
    client: "Thompson Residence",
    completionDate: "January 2025",
    extendedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida."
  },
  {
    id: 1,
    title: "Project Name Goes Here",
    category: "Project Type",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.",
    image: "/api/placeholder/600/400",
    client: "Thompson Residence",
    completionDate: "January 2025",
    extendedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida."
  },
  {
    id: 1,
    title: "Project Name Goes Here",
    category: "Project Type",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.",
    image: "/api/placeholder/600/400",
    client: "Thompson Residence",
    completionDate: "January 2025",
    extendedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida."
  },
  {
    id: 1,
    title: "Project Name Goes Here",
    category: "Project Type",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.",
    image: "/api/placeholder/600/400",
    client: "Thompson Residence",
    completionDate: "January 2025",
    extendedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida."
  },
  {
    id: 1,
    title: "Project Name Goes Here",
    category: "Project Type",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.",
    image: "/api/placeholder/600/400",
    client: "Thompson Residence",
    completionDate: "January 2025",
    extendedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida."
  },
  {
    id: 1,
    title: "Project Name Goes Here",
    category: "Project Type",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.",
    image: "/api/placeholder/600/400",
    client: "Thompson Residence",
    completionDate: "January 2025",
    extendedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida."
  },
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
