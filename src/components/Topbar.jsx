import React from 'react';
import AnimateOnScroll from '../tools/AnimateOnScroll';

const Topbar = () => {
  const leftText = 'Business Information Goes Here';
  const number = 'Business Number Goes Here';
  const location = 'Business Location Goes Here';

  return (
    <AnimateOnScroll className='fade-in fade-down p'>
      <header
        className="2xl:px-[48px] lg:px-[32px] md:px-[16px] px-[4px]
        flex justify-between 2xl:py-6 lg:py-4 py-2 max-lg:justify-center"
      >
        <p className="text-center">{leftText}</p>
        <div className="max-lg:hidden flex space-x-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="tel:"
            className="flex space-x-2 items-center"
          >
            <i className="bi bi-telephone-fill"></i>
            <p>{number}</p>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href=""
            className="flex space-x-2 items-center"
          >
            <i className="bi bi-geo-fill"></i>
            <p>{location}</p>
        </a>
        </div>
      </header>
    </AnimateOnScroll>
  );
};

export default Topbar;
