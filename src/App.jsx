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
const Blog1 = lazy(() => import('./pages/blogs/Blog1'));
const Blog2 = lazy(() => import('./pages/blogs/Blog2'));
const Blog3 = lazy(() => import('./pages/blogs/Blog3'));

// ─── Assets and Layout Settings ─────────────────────────────────────────
const consistentLayout = {
  section: 'responsivePad bg-c1-0 text-c4-0 font-dm-sans space-y-8 2xl:py-[72px] lg:py-[48px] md:py-[40px] py-[32px]',
  sectionClass: 'h6 font-semibold',
  sectionSubheadingClass: 'h4 font-semibold',
};

const hoverBg = 'hover:bg-orange-500';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<MainLayout consistentLayout={consistentLayout} hoverBg={hoverBg} />}
    >
      <Route
        index
        element={<HomePage consistentLayout={consistentLayout} hoverBg={hoverBg} />}
      />

      {/* Suspense boundary for route-level code splitting */}
      <Route
        path="blogs"
        element={
          <Suspense fallback={<div>Loading Blogs...</div>}>
            <BlogsPage consistentLayout={consistentLayout} />
          </Suspense>
        }
      />
      <Route
        path="blogs/1"
        element={
          <Suspense fallback={<div>Loading Blog1...</div>}>
            <Blog1 consistentLayout={consistentLayout} />
          </Suspense>
        }
      />
      <Route
        path="blogs/2"
        element={
          <Suspense fallback={<div>Loading Blog2...</div>}>
            <Blog2 consistentLayout={consistentLayout} />
          </Suspense>
        }
      />
      <Route
        path="blogs/3"
        element={
          <Suspense fallback={<div>Loading Blog3...</div>}>
            <Blog3 consistentLayout={consistentLayout} />
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
