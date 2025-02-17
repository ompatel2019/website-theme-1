// pages/ServicesPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';

// ─── Components for Services Page ──────────────────────────────────────
import Services from '../components/Services';
import CTA from '../components/CTA';

const ServicesPage = () => {
  // ─── Schema for Services Page ─────────────────────────────────────────
  const jsonLdServicesPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Services - Business Name",
    "description": "Discover our range of professional services at Business Name.",
    "url": "https://example.com/services"
  };

  return (
    <>
      <SeoHelmet
        title="Services - Business Name"
        description="Discover our range of professional services at Business Name."
        jsonSchema={jsonLdServicesPage}
      />

      {/* ─── Sections ───────────────────────────────────────────── */}
      <Services />
      <CTA />
    </>
  );
};

export default ServicesPage;
