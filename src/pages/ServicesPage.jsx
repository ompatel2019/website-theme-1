// pages/ServicesPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Stats from '../components/Stats';
import CTAMini from '../components/CTAMini';
import PageHeading from '../components/PageHeading';

const ServicesPage = ({ services, placeholderImg }) => {
  const jsonLdServicesPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Our Services",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.",
    "url": "https://example.com/services"
  };

  const stats = [
    { stat: "30", statType: "+", statDesc: "Services Offered" },
    { stat: "100", statType: "%", statDesc: "Customer Satisfaction" },
    { stat: "250", statType: "+", statDesc: "Emergency Calls Resolved" }
  ];

  return (
    <>
      <SeoHelmet
        title="Services | Business Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida."
        canonicalUrl="https://example.com/services"
        jsonSchema={jsonLdServicesPage}
      />

      <PageHeading
        placeholderImg={placeholderImg}
        route="Home / Services"
        heading="Services"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida."
      />
      <Stats stats={stats} bg="bg-black" text="text-white"/>
      <CTAMini text="Get Your No-Obligation Quote Now"/>
      <Services bg="bg-black" text="text-white" services={services} isHome={false}/>
      <CTA bg="bg-primary" text="text-black"/>
    </>
  );
};

export default ServicesPage;
