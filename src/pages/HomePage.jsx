import React from 'react'
import Hero from '../components/Hero';
import SlidingText from '../components/SlidingText';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Blogs from '../components/Blogs';
import Faqs from '../components/Faqs';

// ─── Custom Hook for Screen Width ─────────────────────────────────────────────
import useScreenWidth from '../hooks/useScreenWidth';

// ─── Basic text for sections ─────────────────────────────────────────────────────────
  const servicesSec = 'Services';
  const whyChooseUsSec = 'Why Choose Us';
  const portfolioSec= 'Portfolio';
  const pricingSec  = 'Pricing';
  const contactSec  = 'Contact Form';
  const blogsSec  = 'Blogs';
  const faqsSec     = 'FAQs';

const HomePage = ({consistentLayout, hoverBg}) => {
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

        
        <Blogs 
            blogsSec={blogsSec}
            consistentLayout={consistentLayout} 
        />


        <Faqs 
            faqsSec={faqsSec} 
            consistentLayout={consistentLayout} 
        />
    </>
  )
}

export default HomePage