import React from 'react';
import { Outlet } from 'react-router-dom';

// ─── Components ─────────────────────────────────────────────────────────
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ─── Centralized Data ───────────────────────────────────────────────────
/*
  We'll use the hash-based approach for sections on the HomePage
  ( /#services, /#pricing, etc. ), and direct routes for /blogs, /blogs/1, etc.
*/
const navBarLinks = [
  { name: 'Home', to: '/#home' },
  { name: 'Why Choose Us', to: '/#whyChooseUs' },
  { name: 'Pricing', to: '/#pricing' },
  { name: 'Portfolio', to: '/#portfolio' },
  { name: 'Blogs', to: '/blogs/#blogs' },
];

const MainLayout = ({ consistentLayout, hoverBg }) => {
  return (
    <>
      <Navbar
        hoverBg={hoverBg}
        navBarLinks={navBarLinks}
      />

      {/* Renders whatever child route is active */}
      <Outlet />

      <Footer consistentLayout={consistentLayout} />
    </>
  );
};

export default MainLayout;
