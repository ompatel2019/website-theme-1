import React from 'react'

// ─── Components ──────────────────────────────────────────────────────────────
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Outlet } from 'react-router-dom'

// ─── Centralized Data ────────────────────────────────────────────────────────
const navBarLinks = [
    { name: 'Why Choose Us', to: '/whyChooseUs' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Blogs', to: '/blogs' },
    { name: 'FAQs', to: '/faqs' }
];

const MainLayout = ({consistentLayout, hoverBg}) => {
  return (
    <>
        <Navbar 
            hoverBg={hoverBg} 
            navBarLinks={navBarLinks} 
        />

        <Outlet/>

        <Footer 
            consistentLayout={consistentLayout}
        />
    </>
  )
}

export default MainLayout