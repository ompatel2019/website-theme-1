import React from 'react';
import useScreenWidth from '../hooks/useScreenWidth';

// ─── Sections ───────────────────────────────────────────────────────────
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import Blogs from '../components/Blogs'

const HomePage = ({}) => {
  const screenWidth = useScreenWidth();

  return (
    <>
      <Hero/> 
      
      <Services/>

      <WhyChooseUs/>

      <Testimonials/>
      
      <AboutUs/>
      
      <ContactForm/>
      
      <Blogs/>
    </>
  );
};

export default HomePage;