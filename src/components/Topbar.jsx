import React from 'react';
import AnimateOnScroll from '../tools/AnimateOnScroll';
import { TbHours24 } from "react-icons/tb";

const Topbar = () => {
  const leftText = 'Open 24-Hours';
  const socials = [
    {
      icon: <i class="bi bi-instagram"></i>,
      to: 'https://www.instagram.com/'
    }, 
    {
      icon: <i class="bi bi-linkedin"></i>,
      to: 'https://www.linkedin.com/feed/'
    }, 
    {
      icon: <i class="bi bi-facebook"></i>,
      to: 'https://www.facebook.com/'
    }, 
  ]

  return (
    <AnimateOnScroll className='fade-in fade-down'>
      <header
        className="responsivePad bg-primary font-supreme-medium
        flex justify-between 2xl:py-6 lg:py-4 py-2"
      >
        <div className='flex justify-center items-center gap-1'>
          <TbHours24 className='h6'/>
          <p className="text-center h7">{leftText}</p>
        </div>
        <div className="flex space-x-4">
          {socials.map((social, index) => (
            <div className='flex items-center gap-1 md:px-2 md:py-1 px-[6px] py-[3px] md:rounded-lg rounded-md bg-black'>
              <a href={social.to} target='_blank' className='text-white p' key={index}>{social.icon}</a>
            </div>
          ))}
        </div>
      </header>
    </AnimateOnScroll>
  );
};

export default Topbar;
