import React from 'react'
import { Link } from 'react-router-dom'
import Section from './Section'
import Service from './Service'
import SectionHeader from './SectionHeader'

const Services = ({services, bg, text, isHome}) => {
  const buttonClass = 'border-2 border-transparent w-fit text-black bg-primary hover:bg-black text-center md:p-2 p-1 rounded-md h7 hover:text-white hover:border-white'
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

      <div className='grid grid-cols-2 md:grid-cols-3 gap-12'>
        {
          services.map((service, index) => (
            <Service 
              index={index} 
              serviceImg={service.serviceImg} 
              serviceImgAlt={service.serviceAlt}
              serviceName={service.serviceName}
              serviceDesc={service.serviceDesc}
            />
          ))
        }
      </div>
    </Section>
  )
}

export default Services