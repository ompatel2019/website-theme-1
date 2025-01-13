import React, { useEffect, useState } from 'react'
import design from '../images/design.webp'
import seo from '../images/seo.webp'
import wireframe from '../images/wireframe.webp'
import development from '../images/development.webp'
import Service from './Service'


const Services = ({servicesSection, sectionClass, subHeadingClass}) => {

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
      serviceDuration: '5 days',
      serviceName: 'Free UX Wireframe',
      serviceDesc: 'Custom website blueprint tailored to your brand, provided at no cost. Ensures a seamless user experience.',
      serviceTools: ['Relume', 'Figma'],
      serviceImg: wireframe
    },
    {
      serviceActive: true,
      serviceDuration: '7 days',
      serviceName: 'Design Solution',
      serviceDesc: 'Creative design strategies that align with your brand, from concept to implementation, ensuring your vision is brought to life.',
      serviceTools: ['ThemeForest', 'Dribble'],
      serviceImg: design
    },
    {
      serviceActive: true,
      serviceDuration: '7 days',
      serviceName: 'Develop & Deploy',
      serviceDesc: 'Building responsive, high-performance websites with clean code, optimized for all devices and deploying on the internet.',
      serviceTools: ['ReactJS', 'TailwindCSS'],
      serviceImg: development
    },
    {
      serviceActive: true,
      serviceDuration: '2 days',
      serviceName: 'Search Engine Optimisation',
      serviceDesc: 'Increase your online presence with our SEO strategies, driving traffic and improving search engine rankings for growth.',
      serviceTools: ['Lighthouse', 'Technical SEO'],
      serviceImg: seo
    }
  ]

  return (
    <>
      <div id='services' className='responsivePad bg-c1-0 font-dm-sans pt-[32px] pb-[64px]'>
        <div className='text-c4-0 space-y-10'>
          <div className='fade-in fade-left'>
            <p className={sectionClass}>{servicesSection.toUpperCase()}</p>
            <h3 className={subHeadingClass}>
              {subHeading}
            </h3>
          </div>

          <div className='grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 fade-in fade-right'>
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