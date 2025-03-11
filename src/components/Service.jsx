import React from 'react'
import ImageComponent from './ImageComponent'
import { Link } from 'react-router-dom'

const Service = ({serviceImg, serviceImgAlt, serviceName, serviceDesc, isHome}) => {
  return (
    <Link to='/services' className='flex flex-col md:space-y-2 space-y-1 justify-around items-center'>
        <ImageComponent
          src={serviceImg}
          alt={serviceImgAlt}
          width={72}
          height={72}
          className='min-w-12 max-w-12 max-h-20'
          loading='lazy'
        />

      <h5 className='h7 font-supreme-medium text-center'>
        {serviceName}
      </h5>
      
      {isHome ? 
        <></>
      : 
        <p className='font-supreme text-sm text-center max-md:hidden'>
          {serviceDesc}
        </p>
      }
    </Link>
  )
}

export default Service