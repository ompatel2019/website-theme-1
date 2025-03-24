// pages/WhyChooseUsPage.jsx
import React from 'react';
import SeoHelmet from '../tools/SeoHelmet';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Stats from '../components/Stats';
import CTAMini from '../components/CTAMini';
import PageHeading from '../components/PageHeading';

const WhyChooseUsPage = ({ placeholderImg }) => {
  const jsonLdWhyChooseUsPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Business Name",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.",
    "url": "https://example.com/whychooseus"
  };

  const stats = [
    { stat: "10", statType: "+", statDesc: "Years Experience" },
    { stat: "100", statType: "+", statDesc: "5-Star Reviews" },
    { stat: "95", statType: "%", statDesc: "First-Time Fix Rate" }
  ];

  return (
    <>
      <SeoHelmet
        title="Why Choose Us | Business Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida."
        canonicalUrl="https://example.com/whychooseus"
        jsonSchema={jsonLdWhyChooseUsPage}
      />

      <PageHeading
        placeholderImg={placeholderImg}
        route="Home / Why Choose Us"
        heading="Why Us"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida.."
      />
      <Stats stats={stats} bg="bg-black" text="text-white"/>
      <CTAMini text="Contact Us for 24/7 Emergency Support"/>
      <WhyChooseUs bg="bg-black" text="text-white" placeholderImg={placeholderImg}/>
      <CTA />
      <Testimonials bg="bg-black" text="text-white"/>
    </>
  );
};

export default WhyChooseUsPage;
