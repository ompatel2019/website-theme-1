// pages/AboutUsPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';

// ─── Components for About Us Page ─────────────────────────────────────
import PageHeading from '../components/PageHeading';
import Stats from '../components/Stats'
import CTAMini from '../components/CTAMini';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Faqs from '../components/Faqs';
import CTA from '../components/CTA';

const AboutUsPage = ({placeholderImg}) => {
  // ─── Schema for About Us Page ─────────────────────────────────────────
  const jsonLdAboutUsPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Us",
    "description": "Learn more about Business Name, our values, and our team.",
    "url": "https://example.com/aboutus"
  };

  const stats = [ 
    {
      stat: "30",
      statType: "+",
      statDesc: "Services Offered"
    },
    {
      stat: "550",
      statType: "+",
      statDesc: "Satisfied Customers"
    },
    {
      stat: "1100",
      statType: "+",
      statDesc: "Projects Completed"
    },
  ]

  return (
    <>
      <SeoHelmet
        title="About Us"
        description="Learn more about Business Name, our values, and our team."
        jsonSchema={jsonLdAboutUsPage}
      />

      {/* ─── Sections ───────────────────────────────────────────── */}
      <PageHeading 
        placeholderImg={placeholderImg} 
        route={"Home / About Us"}
        heading={"About Us"}
        subheading={"Explore our portfolio of completed projects that showcase quality workmanship and innovative solutions."}
      />
      <Stats stats={stats} bg="bg-black" text="text-white"/>
      <CTAMini text="Get Your No-Obligation Quote Now"/>
      <AboutUs />
      <Testimonials bg="bg-black" text="text-white"/>
      <Faqs />
      <CTA />
    </>
  );
};

export default AboutUsPage;
