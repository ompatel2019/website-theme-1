// Enhanced Services Component
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import Service from './Service';
import SectionHeader from './SectionHeader';
import { ChevronRight, ArrowRight } from 'lucide-react';

const Services = ({ services, bg, text, isHome }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const buttonClass = 'group flex items-center gap-2 border-2 border-transparent w-fit text-black bg-primary py-2 hover:bg-white text-center md:py-3 rounded-md h7 hover:text-black hover:border-white px-6 md:px-8 transition-all duration-300 font-medium';
  
  return (
    <Section bg={bg} text={text}>
      <div className='flex max-md:flex-col md:justify-between md:items-center 2xl:gap-8 md:gap-6 gap-4 mb-8'>
        <div className="flex-1">
          <SectionHeader 
            sectionName="Our Services" 
            sectionHeader="Professional Plumbing Solutions for Every Need"
            sectionDesc={isHome ? "From emergency repairs to complete installations, our expert team is ready to tackle any plumbing challenge." : ""}
          />
        </div>
        
        {isHome && (
          <div className="max-md:self-start">
            <Link to='/services' className={buttonClass}>
              <span>View All Services</span>
              <ChevronRight size={18} className="group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 md:gap-8 gap-6'>
        {services.map((service, index) => (
          <Service 
            key={index}
            index={index} 
            serviceImg={service.serviceImg} 
            serviceImgAlt={service.serviceAlt}
            serviceName={service.serviceName}
            serviceDesc={service.serviceDesc}
            serviceClass={service.className}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
      
      {!isHome && (
        <div className="mt-12 text-center">
          <Link to='/contact-us' className="inline-flex items-center gap-2 bg-primary hover:bg-white text-black font-medium py-3 px-8 rounded-md transition-all duration-300">
            <span>Need a Custom Solution?</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </Section>
  );
};

export default Services;