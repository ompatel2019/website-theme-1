import React, { useState } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

// ─── Assets and Layout Settings ─────────────────────────────────────────────────────────
const consistentLayout = {
  section: 'responsivePad bg-c1-0 text-c4-0 font-dm-sans space-y-8 2xl:py-[72px] lg:py-[48px] md:py-[40px] py-[32px]',
  sectionClass: 'h6 font-semibold',
  sectionSubheadingClass: 'h4 font-semibold',
};

const hoverBg = 'hover:bg-orange-500';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout consistentLayout={consistentLayout} hoverBg={hoverBg} />}>
      <Route index element={<HomePage consistentLayout={consistentLayout} hoverBg={hoverBg} />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} /> 
}

export default App;
