// pages/ContactPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';

// ─── Components for Contact Page ─────────────────────────────────────
import ContactForm from '../components/ContactForm';
import Faqs from '../components/Faqs';
import CTA from '../components/CTA';
import Stats from '../components/Stats'
import CTAMini from '../components/CTAMini';
import PageHeading from '../components/PageHeading';
import Projects from '../components/Projects';

const ContactPage = ({placeholderImg}) => {
  // ─── Schema for Contact Page ─────────────────────────────────────────
  const jsonLdContactPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contact",
    "description": "Get in touch with Business Name for inquiries and support.",
    "url": "https://example.com/contact"
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
        title="Contact"
        description="Get in touch with Business Name for inquiries and support."
        jsonSchema={jsonLdContactPage}
      />

      {/* ─── Sections ───────────────────────────────────────────── */}
      <PageHeading 
        placeholderImg={placeholderImg} 
        route={"Home / Contact Us"}
        heading={"Contact Us"}
        subheading={"Get in touch for fast, friendly support—our dedicated team is available 24/7 for all your service needs."}
      />
      <Stats stats={stats} bg="bg-black" text="text-white"/>
      <CTAMini text="Get Your No-Obligation Quote Now"/>
      <ContactForm />
      <Projects bg="bg-black" text="text-white" isHome={true} placeholderImg={placeholderImg}/>
      <Faqs />
      <CTA />
    </>
  );
};

export default ContactPage;
