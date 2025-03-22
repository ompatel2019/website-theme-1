// components/Service.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ImageComponent from './ImageComponent';

const Service = ({ service }) => {
  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row items-start md:space-x-8">
        {/* Circular icon wrapper */}
        <div className="rounded-full bg-[#3f3f3f] p-6 flex items-center justify-center w-32 h-32 mb-6 md:mb-0">
          <ImageComponent
            src={service.serviceImg}
            alt={service.serviceImgAlt}
            width={128}
            height={128}
            className="max-w-full max-h-full"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Service Description</h2>
          <p className="text-gray-300 mb-4">{service.serviceDesc}</p>

          <p className="text-md text-gray-200 whitespace-pre-line leading-relaxed mb-8">
            {service.extendedDescription}
          </p>

          {/* How We Offer This Service */}
          {service.howWeOffer && (
            <>
              <h3 className="text-xl font-semibold mb-2">
                How We Offer {service.serviceName}
              </h3>
              <p className="text-md text-gray-200 whitespace-pre-line leading-relaxed">
                {service.howWeOffer}
              </p>
            </>
          )}

          <Link
            to="/services"
            className="inline-block mt-6 text-primary font-semibold underline hover:text-blue-300"
          >
            &larr; Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
