import React from 'react';
import TestimonialMarqee from './TestimonialMarquee';
import Section from './Section';
import SectionHeader from './SectionHeader';

const Testimonials = ({
  bg, 
  text
}) => {

  return (
    <>
      <section className={`${bg} ${text} 2xl:py-32 xl:py-24 md:py-16 sm:py-12 py-8 space-y-8`}
      >
        <SectionHeader 
          sectionName="Testimonials" 
          sectionHeader="Our reviews are a reflection of our great work"
          centre={true}
        />

      <TestimonialMarqee />
      </section>
    </>
  );
};

export default Testimonials;
