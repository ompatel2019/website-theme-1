// pages/WhyChooseUsPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';

// ─── Components for Why Choose Us Page ──────────────────────────────────
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Stats from '../components/Stats'
import CTAMini from '../components/CTAMini';
import PageHeading from '../components/PageHeading';

const WhyChooseUsPage = ({placeholderImg}) => {
  // ─── Schema for Why Choose Us Page ─────────────────────────────────────
  const jsonLdWhyChooseUsPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Why Choose Us",
    "description": "Learn why Business Name is the best choice for your needs.",
    "url": "https://example.com/whychooseus"
  };

  const stats = [ 
    {
      stat: "10",
      statType: "+",
      statDesc: "Years Experience"
    },
    {
      stat: "100",
      statType: "+",
      statDesc: "5-Star Reviews"
    },
    {
      stat: "95",
      statType: "%",
      statDesc: "First-Time Fix Rate"
    },
  ]

  return (
    <>
      <SeoHelmet
        title="Why Choose Us"
        description="Learn why Business Name is the best choice for your needs."
        jsonSchema={jsonLdWhyChooseUsPage}
      />

      {/* ─── Sections ───────────────────────────────────────────── */}
      <PageHeading 
        placeholderImg={placeholderImg} 
        route={"Home / Why Choose Us"}
        heading={"Why Choose Us"}
        subheading={"Choose us for proven expertise, prompt response, and transparent service that earns your trust every time."}
      />
      <Stats stats={stats} bg="bg-black" text="text-white"/>
      <CTAMini text="Contact Us for 24/7 Emergency Support"/>
      <WhyChooseUs bg="bg-black" text="text-white" placeholderImg={placeholderImg}/>
      <CTA />
      <Testimonials bg="bg-black" text="text-white"/>
    </>
  );
};

export default WhyChooseUsPage;
