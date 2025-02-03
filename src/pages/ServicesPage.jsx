// pages/ServicesPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>Services - Business Name</title>
        <meta name="description" content="Discover our range of professional services at Business Name." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdServicesPage)}
        </script>
      </Helmet>

      {/* ─── Sections ───────────────────────────────────────────── */}
      <Services />
      <CTA />
    </>
  );
};

export default ServicesPage;
