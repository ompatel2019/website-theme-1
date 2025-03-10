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

// Lazy-load your pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WhyChooseUsPage = lazy(() => import('./pages/WhyChooseUsPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<Fallback />}>
            <HomePage />
          </Suspense>
        }
      />

      <Route
        path="services"
        element={
          <Suspense fallback={<Fallback />}>
            <ServicesPage />
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
