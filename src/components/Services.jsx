import React, { useEffect, useState } from 'react'
import design from '../images/design.webp'
import seo from '../images/seo.webp'
import wireframe from '../images/wireframe.webp'
import development from '../images/development.webp'
import Service from './Service'
import { PiBlueprint } from "react-icons/pi";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { SiGodaddy } from "react-icons/si";
import { MdAutoGraph } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";

const Services = ({consistentLayout, servicesSection}) => {

  const allSubHeading = "We offer an array of services designed to help you effectively expand your brand in the digital realm. Our comprehensive solutions are tailored to enhance your online presence and drive growth."
  const mobileSubheading = "We offer services to expand your brand online, enhance your presence, and drive growth.";

  const [subHeading, setSubheading] = useState("");

  const updateSubheading = () => { 
    const screensize = window.innerWidth;

    if (screensize <= 768) { 
      setSubheading(mobileSubheading);
    } else { 
      setSubheading(allSubHeading);
    }

  }

  useEffect(() => { 
    updateSubheading();
    window.addEventListener("resize", updateSubheading);

    return () => { 
      window.removeEventListener("resize", updateSubheading);
    };
  }, [])

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
      serviceName: 'SEO',
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
    <>
      <div id='services' className='responsivePad bg-c1-0 font-dm-sans pt-[32px] pb-[64px]'>
        <div className='text-c4-0 space-y-10'>
          <div className='fade-in fade-down'>
            <p className={consistentLayout.sectionClass}>{servicesSection.toUpperCase()}</p>
            <h2 className={consistentLayout.sectionSubheadingClass}>
              {subHeading}
            </h2>
          </div>

          <div className='grid 2xl:px-[160px] lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 fade-in fade-up'>
            {
              services.map((serviceInfo, serviceIndex) => (
                <Service key={serviceIndex} serviceInfo={serviceInfo}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Services