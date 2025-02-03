// pages/WhyChooseUsPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

// ─── Components for Why Choose Us Page ──────────────────────────────────
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const WhyChooseUsPage = () => {
  // ─── Schema for Why Choose Us Page ─────────────────────────────────────
  const jsonLdWhyChooseUsPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Why Choose Us - Business Name",
    "description": "Learn why Business Name is the best choice for your needs.",
    "url": "https://example.com/whychooseus"
  };

  return (
    <>
      <Helmet>
        <title>Why Choose Us - Business Name</title>
        <meta name="description" content="Learn why Business Name is the best choice for your needs." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdWhyChooseUsPage)}
        </script>
      </Helmet>

      {/* ─── Sections ───────────────────────────────────────────── */}
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
};

export default WhyChooseUsPage;
