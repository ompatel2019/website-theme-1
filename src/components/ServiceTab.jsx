

// Enhanced Service Component
import React from 'react';
import ImageComponent from './ImageComponent';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

const Service = ({
  serviceImg, 
  serviceImgAlt, 
  serviceName, 
  serviceDesc, 
  serviceClass, 
  isHovered,
  onMouseEnter,
  onMouseLeave
}) => {
  const serviceSlug = slugify(serviceName); // Create the slug outside JSX
  return (
    <Link 
      to={`/services/${serviceSlug}`} 
      className='group flex flex-col justify-between h-full lg:p-8 p-6 rounded-lg bg-[#3f3f3f] hover:bg-[#4a4a4a] transition-all duration-300 border border-transparent hover:border-gray-500 relative overflow-hidden'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Decorative corner accent */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary opacity-0 group-hover:opacity-10 transform rotate-45 transition-all duration-300"></div>
      
      <div className="flex flex-col space-y-4">
        <div className="relative">
          <div className="p-3rounded-lg inline-block">
            <ImageComponent
              src={serviceImg}
              alt={serviceImgAlt}
              width={56}
              height={56}
              className={`${serviceClass} transition-transform duration-300 group-hover:scale-110`}
              loading='lazy'
            />
          </div>
        </div>

        <h5 className='h7 font-supreme-medium text-left text-lg group-hover:text-primary transition-colors duration-300'>
          {serviceName}
        </h5>
        
        <p className='font-supreme text-sm text-left text-gray-300 flex-grow'>
          {serviceDesc}
        </p>
      </div>
    </Link>
  );
};

export default Service;