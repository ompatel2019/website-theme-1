import React from 'react';
import useScreenWidth from '../hooks/useScreenWidth';

// ─── Sections ───────────────────────────────────────────────────────────
import Hero from '../components/Hero';
import SlidingText from '../components/SlidingText';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Faqs from '../components/Faqs';

// ─── Basic text for sections ────────────────────────────────────────────
const servicesSec = 'Services';
const whyChooseUsSec = 'Why Choose Us';
const portfolioSec = 'Portfolio';
const pricingSec = 'Pricing';
const contactSec = 'Contact Form';
const faqsSec = 'FAQs';

const HomePage = ({ consistentLayout, hoverBg }) => {
  const screenWidth = useScreenWidth();

  return (
    <>
      <Hero
        hoverBg={hoverBg}
        consistentLayout={consistentLayout}
        screenWidth={screenWidth}
      />

      <SlidingText />

      <Services
        servicesSection={servicesSec}
        consistentLayout={consistentLayout}
        screenWidth={screenWidth}
      />

      <WhyChooseUs
        whyChooseUS={whyChooseUsSec}
        consistentLayout={consistentLayout}
      />

      <Portfolio
        portfolio={portfolioSec}
        consistentLayout={consistentLayout}
      />

      <Pricing
        pricing={pricingSec}
        consistentLayout={consistentLayout}
      />

      <ContactForm
        contactForm={contactSec}
        consistentLayout={consistentLayout}
      />

      <Faqs
        faqsSec={faqsSec}
        consistentLayout={consistentLayout}
      />
    </>
  );
};

export default HomePage;