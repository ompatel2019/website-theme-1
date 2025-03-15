import React from 'react'
import { Link } from 'react-router-dom'
import Section from './Section'
import Service from './Service'
import SectionHeader from './SectionHeader'

const Services = ({services, bg, text, isHome}) => {
  const buttonClass = 'border-2 border-transparent w-fit text-black bg-primary py-2 hover:bg-white text-center md:py-3 rounded-md h7 hover:text-black hover:border-white hover:px-16 transition-all lg:px-10 px-6'
  return (
    <Section bg={bg} text={text}>
      <div className='flex max-md:flex-col md:justify-between md:items-center 2xl:gap-8 md:gap-6 gap-4'>
        <SectionHeader sectionName="Services" sectionHeader="Our Comprehensive Solutions"/> 
        {
          isHome ? 
          <Link to='/services' className={buttonClass}>View All Services</Link>
          :
          <>
          </>
        }
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:gap-10 md:gap-8 gap-6'>
        {
          services.map((service, index) => (
            <Service 
              index={index} 
              serviceImg={service.serviceImg} 
              serviceImgAlt={service.serviceAlt}
              serviceName={service.serviceName}
              serviceDesc={service.serviceDesc}
              serviceClass={service.className}
            />
          ))
        }
      </div>
    </Section>
  )
}

export default Services