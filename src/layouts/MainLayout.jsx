// MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

// ─── Layout Components ────────────────────────────────────────────────
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <>
      {/* ─── Topbar Section ───────────────────────────────────────── */}
      <Topbar />

      {/* ─── Navigation Bar Section ───────────────────────────────── */}
      <Navbar />

      {/* ─── Page Content Outlet ─────────────────────────────────----- */}
      <Outlet />

      {/* ─── Footer Section ───────────────────────────────────────── */}
      <Footer />
    </>
  );
};

export default MainLayout;
