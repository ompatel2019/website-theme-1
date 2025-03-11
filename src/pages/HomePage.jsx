// pages/HomePage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';

// ─── Sections ───────────────────────────────────────────────────────────
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Projects from '../components/Projects';
import Faqs from '../components/Faqs';
import CTAMini from '../components/CTAMini';

const HomePage = () => {
  // ─── Schema for Home Page ──────────────────────────────────────────────
  const jsonLdHomePage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Business Name: Description",
    "description": "Welcome to Business Name. Customize your homepage description here.",
    "url": "https://example.com/"
  };

  return (
    <>
      <SeoHelmet
        title="Business Name: Description"
        description="Welcome to Business Name. Customize your homepage description here."
        jsonSchema={jsonLdHomePage}
      />

      {/* ─── Sections ───────────────────────────────────────────── */}
      <CTAMini text="Book online and receive $50 off your first service"/>
      <Hero />
      <Services />
      <WhyChooseUs />
      <AboutUs />
      <Testimonials />
      <Projects />
      <Faqs />
    </>
  );
};

export default HomePage;
