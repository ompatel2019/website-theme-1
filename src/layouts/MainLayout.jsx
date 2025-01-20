import React from 'react';
import { Outlet } from 'react-router-dom';

// ─── Components ─────────────────────────────────────────────────────────
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({}) => {
  return (
    <>
      <Topbar/>

      <Navbar/>

      <Outlet />

      <Footer/>
    </>
  );
};

export default MainLayout;
