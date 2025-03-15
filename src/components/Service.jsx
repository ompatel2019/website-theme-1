import React from 'react'
import ImageComponent from './ImageComponent'
import { Link } from 'react-router-dom'

const Service = ({serviceImg, serviceImgAlt, serviceName, serviceDesc, serviceClass, isHome}) => {
  return (
    <Link to='/services' className='flex flex-col md:space-y-2 justify-around lg:p-8 p-6 rounded-md bg-[#3f3f3f] space-y-2 hover:invert transition-all'>
        <ImageComponent
          src={serviceImg}
          alt={serviceImgAlt}
          width={72}
          height={72}
          className={serviceClass}
          loading='lazy'
        />

      <h5 className='h7 font-supreme-medium text-left'>
        {serviceName}
      </h5>
      
      {/* {isHome ? 
        <></>
      : 
        <p className='font-supreme text-sm text-left max-md:hidden'>
          {serviceDesc}
        </p>
      } */}
        <p className='font-supreme text-sm text-left'>
          {serviceDesc}
        </p>
    </Link>
  )
}

export default Service