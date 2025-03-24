// pages/ContactPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';
import ContactForm from '../components/ContactForm';
import Faqs from '../components/Faqs';
import Stats from '../components/Stats';
import CTAMini from '../components/CTAMini';
import PageHeading from '../components/PageHeading';

const ContactPage = ({ placeholderImg }) => {
  const jsonLdContactPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contact Us | Business Name",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.",
    "url": "https://example.com/contact"
  };

  const stats = [
    { stat: "30", statType: "+", statDesc: "Services Offered" },
    { stat: "100", statType: "%", statDesc: "Customer Satisfaction" },
    { stat: "250", statType: "+", statDesc: "Emergency Calls Resolved" }
  ];

  return (
    <>
      <SeoHelmet
        title="Contact Us | Business Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida."
        canonicalUrl="https://example.com/contact"
        jsonSchema={jsonLdContactPage}
      />

      <PageHeading
        placeholderImg={placeholderImg}
        route="Home / Contact Us"
        heading="Contact Us"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida."
      />
      <Stats stats={stats} bg="bg-black" text="text-white"/>
      <CTAMini text="Get Your No-Obligation Quote Now"/>
      <ContactForm />
      <Faqs />
    </>
  );
};

export default ContactPage;
