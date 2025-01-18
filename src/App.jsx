import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import Blog1 from './pages/blogs/Blog1';
import Blog2 from './pages/blogs/Blog2';
import Blog3 from './pages/blogs/Blog3';

// ─── Assets and Layout Settings ─────────────────────────────────────────
const consistentLayout = {
  section: 'responsivePad bg-c1-0 text-c4-0 font-dm-sans space-y-8 2xl:py-[72px] lg:py-[48px] md:py-[40px] py-[32px]',
  sectionClass: 'h6 font-semibold',
  sectionSubheadingClass: 'h4 font-semibold',
};

const hoverBg = 'hover:bg-orange-500';

// Define all routes, including new blog routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <MainLayout
          consistentLayout={consistentLayout}
          hoverBg={hoverBg}
        />
      }
    >
      {/* Home Page */}
      <Route
        index
        element={
          <HomePage
            consistentLayout={consistentLayout}
            hoverBg={hoverBg}
          />
        }
      />

      {/* Blogs main listing page */}
      <Route
        path="blogs"
        element={<BlogsPage consistentLayout={consistentLayout} />}
      />

      {/* Individual blog pages */}
      <Route
        path="blogs/1"
        element={<Blog1 consistentLayout={consistentLayout} />}
      />
      <Route
        path="blogs/2"
        element={<Blog2 consistentLayout={consistentLayout} />}
      />
      <Route
        path="blogs/3"
        element={<Blog3 consistentLayout={consistentLayout} />}
      />

    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
