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

// Lazy-load your pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WhyChooseUsPage = lazy(() => import('./pages/WhyChooseUsPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogsPage = lazy(() => import('./pages/BlogsPage'));
const Blog1 = lazy(() => import('./pages/blogs/Blog1'));
const Blog2 = lazy(() => import('./pages/blogs/Blog2'));
const Blog3 = lazy(() => import('./pages/blogs/Blog3'));
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
        path="blogs"
        element={
          <Suspense fallback={<Fallback />}>
            <BlogsPage />
          </Suspense>
        }
      />

      <Route
        path="blogs/1"
        element={
          <Suspense fallback={<Fallback />}>
            <Blog1 />
          </Suspense>
        }
      />

      <Route
        path="blogs/2"
        element={
          <Suspense fallback={<Fallback />}>
            <Blog2 />
          </Suspense>
        }
      />

      <Route
        path="blogs/3"
        element={
          <Suspense fallback={<Fallback />}>
            <Blog3 />
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
