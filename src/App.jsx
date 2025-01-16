import React, { useState } from 'react';

// ─── Custom Hook for Screen Width ─────────────────────────────────────────────
import useScreenWidth from './hooks/useScreenWidth';

// ─── Components ──────────────────────────────────────────────────────────────
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SlidingText from './components/SlidingText';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import Blogs from './components/Blogs';
import Faqs from './components/Faqs';
import Footer from './components/Footer';

// ─── Centralized Data ────────────────────────────────────────────────────────
const navBarLinks = [
  // { name: 'About Us', anchor: '#aboutUs' },
  { name: 'Why Choose Us', anchor: '#whyChooseUs' },
  { name: 'Pricing', anchor: '#pricing' },
  { name: 'Portfolio', anchor: '#portfolio' },
  { name: 'Blogs', anchor: '#blogs' },
  { name: 'FAQs', anchor: '#faqs' }
];

// ─── Layout Settings ─────────────────────────────────────────────────────────
const consistentLayout = {
  section: 'responsivePad bg-c1-0 text-c4-0 font-dm-sans space-y-8 2xl:py-[64px] lg:py-[32px] md:py-[24px] py-[16px]',
  sectionClass: 'h6 font-semibold max-md:border-l-2 max-md:pl-2 max-md:w-fit max-md:my-2',
  sectionSubheadingClass: 'h4 font-semibold'
};

function App() {
  const screenWidth = useScreenWidth();

  // Basic text for sections
  const hoverBg     = 'hover:bg-orange-500';
  const servicesSec = 'Services';
  const whyChooseUsSec = 'Why Choose Us';
  const portfolioSec= 'Portfolio';
  const pricingSec  = 'Pricing';
  const aboutUsSec  = 'About Us';
  const contactSec  = 'Contact Form';
  const blogsSec  = 'Blogs';
  const faqsSec     = 'FAQs';

  return (
    <>
      <Navbar 
        hoverBg={hoverBg} 
        navBarLinks={navBarLinks} 
      />

      <Hero 
        hoverBg={hoverBg} 
        consistentLayout={consistentLayout}
        screenWidth={screenWidth} 
      />

      <SlidingText />

      <Services
        servicesSection={servicesSec}
        consistentLayout={consistentLayout}
        screenWidth={screenWidth}
      />

      <WhyChooseUs
        whyChooseUS={whyChooseUsSec}
        consistentLayout={consistentLayout}
      />

      <Portfolio
        portfolio={portfolioSec}
        consistentLayout={consistentLayout}
      />

      <Pricing
        pricing={pricingSec}
        consistentLayout={consistentLayout}
      />

      {/* <AboutUs
        aboutUs={aboutUsSec}
        consistentLayout={consistentLayout}
      /> */}

      <ContactForm
        contactForm={contactSec}
        consistentLayout={consistentLayout}
      />

      
      {/* <Blogs 
        blogs={blogsSec}
        consistentLayout={consistentLayout} 
      /> */}


      <Faqs 
        faqsSec={faqsSec} 
        consistentLayout={consistentLayout} 
      />

      {/* <Footer /> */}
     
    </>
  );
}

export default App;
