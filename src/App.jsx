import React, { Suspense, lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

// Lazy load your blog pages
const BlogsPage = lazy(() => import('./pages/BlogsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const Blog1 = lazy(() => import('./pages/blogs/Blog1'));
const Blog2 = lazy(() => import('./pages/blogs/Blog2'));
const Blog3 = lazy(() => import('./pages/blogs/Blog3'));

// ─── Assets and Layout Settings ─────────────────────────────────────────
const consistentLayout = {};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<MainLayout/>}
    >
      <Route
        index
        element={<HomePage/>}
      />

      <Route
        path="blogs"
        element={
          <Suspense fallback={<div>Loading Blogs...</div>}>
            <BlogsPage/>
          </Suspense>
        }
      />

      <Route
        path="services"
        element={
          <Suspense fallback={<div>Loading Services...</div>}>
            <ServicesPage/>
          </Suspense>
        }
      />
      <Route
        path="blogs/1"
        element={
          <Suspense fallback={<div>Loading Blog1...</div>}>
            <Blog1/>
          </Suspense>
        }
      />
      <Route
        path="blogs/2"
        element={
          <Suspense fallback={<div>Loading Blog2...</div>}>
            <Blog2/>
          </Suspense>
        }
      />
      <Route
        path="blogs/3"
        element={
          <Suspense fallback={<div>Loading Blog3...</div>}>
            <Blog3/>
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
