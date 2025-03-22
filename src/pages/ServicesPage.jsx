// pages/ServicesPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';

// ─── Components for Services Page ──────────────────────────────────────
import Services from '../components/Services';
import CTA from '../components/CTA';
import Stats from '../components/Stats'
import CTAMini from '../components/CTAMini';
import PageHeading from '../components/PageHeading';

const ServicesPage = ({services, placeholderImg}) => {
  // ─── Schema for Services Page ─────────────────────────────────────────
  const jsonLdServicesPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Services",
    "description": "Discover our range of professional services at Business Name.",
    "url": "https://example.com/services"
  };

  const stats = [ 
    {
      stat: "30",
      statType: "+",
      statDesc: "Services Offered"
    },
    {
      stat: "100",
      statType: "%",
      statDesc: "Customer Satisfaction"
    },
    {
      stat: "250",
      statType: "+",
      statDesc: "Emergency Calls Resolved"
    },
  ]

  return (
    <>
      <SeoHelmet
        title="Services"
        description="Discover our range of professional services at Business Name."
        jsonSchema={jsonLdServicesPage}
      />

      {/* ─── Sections ───────────────────────────────────────────── */}
      <PageHeading 
        placeholderImg={placeholderImg} 
        route={"Home / Services"}
        heading={"Services"}
        subheading={"Our expert team delivers reliable plumbing and electrical services—from emergency repairs to new installations—with exceptional quality and care."}
      />
      <Stats stats={stats} bg="bg-black" text="text-white"/>
      <CTAMini text="Get Your No-Obligation Quote Now"/>
      <Services bg="bg-black" text="text-white" services={services} isHome={false}/>
      <CTA bg="bg-primary" text="text-black"/>
    </>
  );
};

export default ServicesPage;
