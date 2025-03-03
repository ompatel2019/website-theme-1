// pages/ContactPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';

// ─── Components for Contact Page ─────────────────────────────────────
import ContactForm from '../components/ContactForm';
import Faqs from '../components/Faqs';
import CTA from '../components/CTA';

const ContactPage = () => {
  // ─── Schema for Contact Page ─────────────────────────────────────────
  const jsonLdContactPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contact",
    "description": "Get in touch with Business Name for inquiries and support.",
    "url": "https://example.com/contact"
  };

  return (
    <>
      <SeoHelmet
        title="Contact"
        description="Get in touch with Business Name for inquiries and support."
        jsonSchema={jsonLdContactPage}
      />

      {/* ─── Sections ───────────────────────────────────────────── */}
      <ContactForm />
      <Faqs />
      <CTA />
    </>
  );
};

export default ContactPage;
