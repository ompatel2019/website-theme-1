// pages/ServicesPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';

// ─── Components for Services Page ──────────────────────────────────────
import Services from '../components/Services';
import CTA from '../components/CTA';

const ServicesPage = ({services}) => {
  // ─── Schema for Services Page ─────────────────────────────────────────
  const jsonLdServicesPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Services",
    "description": "Discover our range of professional services at Business Name.",
    "url": "https://example.com/services"
  };

  return (
    <>
      <SeoHelmet
        title="Services"
        description="Discover our range of professional services at Business Name."
        jsonSchema={jsonLdServicesPage}
      />

      {/* ─── Sections ───────────────────────────────────────────── */}
      <Services bg="bg-black" text="text-white" services={services} isHome={false}/>
      <CTA />
    </>
  );
};

export default ServicesPage;
