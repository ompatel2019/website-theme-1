import React, { useEffect, useState } from 'react'
import design from '../images/design.webp'
import seo from '../images/seo.webp'
import wireframe from '../images/wireframe.webp'
import development from '../images/development.webp'
import Service from './Service'


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
      serviceImg: wireframe
    },
    {
      serviceActive: true,
      serviceDuration: '7 days',
      serviceName: 'Design Solution',
      serviceDesc: 'Transform your ideas into captivating digital designs, from concept to final visuals, ensuring a strong and consistent brand presence.',
      serviceTools: ['ThemeForest', 'Dribbble'],
      serviceImg: design
    },
    {
      serviceActive: true,
      serviceDuration: '7 days',
      serviceName: 'Development',
      serviceDesc: 'Build responsive, high-performance websites with clean code, seamlessly optimized for every device and aligned with modern best practices.',
      serviceTools: ['React.js', 'TailwindCSS'],
      serviceImg: development
    },
    {
      serviceActive: true,
      serviceDuration: '1 day',
      serviceName: 'Web Hosting',
      serviceDesc: 'Secure, reliable hosting solutions that improves site speed, giving your website consistent, top-tier performance.',
      serviceTools: ['GoDaddy', 'Netlify'],
      serviceImg: development
    },
    {
      serviceActive: true,
      serviceDuration: '2 days',
      serviceName: 'SEO',
      serviceDesc: 'Enhance your visibility with strategic optimizations that boost traffic, amplify brand reach, and drive sustainable online growth.',
      serviceTools: ['Lighthouse', 'TechnicalSEO'],
      serviceImg: seo
    },
    {
      serviceActive: false,
      serviceName: 'Reviews Automation',
      serviceDesc: 'Enable customers to generate quick, authentic feedback using AI-driven prompts, boosting reviews, SEO, and brand trust.',
      serviceTools: ['AI-API', 'Django', 'Next.js'],
      serviceImg: seo
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