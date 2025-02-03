// pages/ContactPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

// ─── Components for Contact Page ─────────────────────────────────────
import ContactForm from '../components/ContactForm';
import Faqs from '../components/Faqs';
import CTA from '../components/CTA';

const ContactPage = () => {
  // ─── Schema for Contact Page ─────────────────────────────────────────
  const jsonLdContactPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contact - Business Name",
    "description": "Get in touch with Business Name for inquiries and support.",
    "url": "https://example.com/contact"
  };

  return (
    <>
      <Helmet>
        <title>Contact - Business Name</title>
        <meta name="description" content="Get in touch with Business Name for inquiries and support." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdContactPage)}
        </script>
      </Helmet>

      {/* ─── Sections ───────────────────────────────────────────── */}
      <ContactForm />
      <Faqs />
      <CTA />
    </>
  );
};

export default ContactPage;
