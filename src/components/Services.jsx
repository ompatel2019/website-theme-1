import React, { useState, useEffect } from 'react';
import Service from './Service';
import { PiBlueprint } from "react-icons/pi";
import { MdOutlineDesignServices, MdOutlineReviews, MdAutoGraph } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { SiGodaddy } from "react-icons/si";

/**
 * Services Section
 * @param {object} consistentLayout
 * @param {string} servicesSection - e.g. "Services"
 * @param {number} screenWidth - (Optional) from parent if you want to do custom logic
 */
const Services = ({ consistentLayout, servicesSection, screenWidth }) => {
  // Moved the text logic here or you can keep it external
  const allSubHeading = "We offer an array of services designed to help you effectively expand your brand in the digital realm. Our comprehensive solutions are tailored to enhance your online presence and drive growth.";
  const mobileSubheading = "We offer services to expand your brand online, enhance your presence, and drive growth.";

  const [subHeading, setSubheading] = useState("");

  useEffect(() => {
    if ((screenWidth || window.innerWidth) <= 768) {
      setSubheading(mobileSubheading);
    } else {
      setSubheading(allSubHeading);
    }
  }, [screenWidth]);

  const services = [
    {
      serviceActive: true,
      serviceDuration: '2 days',
      serviceName: 'Free Wireframe',
      serviceDesc: 'Receive a free, brand-focused blueprint crafted to ensure seamless user experiences and cohesive layouts from the start.',
      serviceTools: ['Relume', 'Figma'],
      serviceImg: PiBlueprint
    },
    {
      serviceActive: true,
      serviceDuration: '7 days',
      serviceName: 'Custom Design',
      serviceDesc: 'Transform your ideas into captivating designs, from concept to final visuals, ensuring a strong and consistent brand presence.',
      serviceTools: ['ThemeForest', 'Dribbble'],
      serviceImg: MdOutlineDesignServices
    },
    {
      serviceActive: true,
      serviceDuration: '7 days',
      serviceName: 'Development',
      serviceDesc: 'Build responsive, high-performance websites with clean code, optimized for every device and made with modern practices.',
      serviceTools: ['React.js', 'TailwindCSS'],
      serviceImg: FaLaptopCode
    },
    {
      serviceActive: true,
      serviceDuration: '1 day',
      serviceName: 'Web Hosting Service',
      serviceDesc: 'Secure, reliable hosting solutions that improves site speed, giving your website consistent, top-tier performance.',
      serviceTools: ['GoDaddy', 'Netlify'],
      serviceImg: SiGodaddy
    },
    {
      serviceActive: true,
      serviceDuration: '2 days',
      serviceName: 'Search Engine Optimisation',
      serviceDesc: 'Enhance your visibility with strategic optimizations that boost traffic, amplify brand reach, and drive sustainable online growth.',
      serviceTools: ['Lighthouse', 'TechnicalSEO'],
      serviceImg: MdAutoGraph
    },
    {
      serviceActive: false,
      serviceName: 'Reviews Automation',
      serviceDesc: 'Enable customers to generate quick, authentic feedback using AI-driven prompts, boosting reviews, SEO, and brand trust.',
      serviceTools: ['AI-API', 'Django', 'Next.js'],
      serviceImg: MdOutlineReviews
    }
  ];

  return (
    <section
      id="services"
      className={consistentLayout.section}
    >
      <div className="text-c4-0 space-y-10">
        <div className="">
          <p className={consistentLayout.sectionClass}>
            {servicesSection.toUpperCase()}
          </p>
          <h2 className={consistentLayout.sectionSubheadingClass}>
            {subHeading}
          </h2>
        </div>

        <div className="grid 2xl:px-[160px] lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4">
          {services.map((serviceInfo, serviceIndex) => (
            <Service key={serviceIndex} serviceInfo={serviceInfo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
