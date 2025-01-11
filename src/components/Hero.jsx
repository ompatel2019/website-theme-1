import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import heroImage1 from "../images/heroImage1.webp";
import heroImage2 from "../images/heroImage2.webp";

const Hero = () => {
  const allTestimonials = [
    "Their expertise brought my vision to life—highly recommended!",
    "Creative solutions, timely delivery, and excellent attention to detail!",
    "Exceptional web design and communication throughout the process!",
  ];

  const allHeroSubText = "Find your place on the internet in under a month! We offer custom designs, domain hosting, SEO services, and more to help you establish a standout online presence quickly and efficiently.";

  const [testimonials, setTestimonialsArray] = useState([]);
  const [heroSubText, setHeroSubText] = useState("");
  const mobHeroSubText = "Get online fast with our custom designs, domain hosting, and SEO services!";

  const updateHeroTexts = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      const updatedTestimonialsArr = allTestimonials.slice(0, 2);
      setTestimonialsArray(updatedTestimonialsArr);
      setHeroSubText(mobHeroSubText);
    } else {
      setTestimonialsArray(allTestimonials);
      setHeroSubText(allHeroSubText);
    }
  };

  useEffect(() => {
    updateHeroTexts();

    const intervalId = setInterval(() => {
      updateHeroTexts();
    }, 1000);

    window.addEventListener('resize', updateHeroTexts);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', updateHeroTexts);
    };
  }, []);

  const heroText = "We Offer Web Solutions.";
  const leftButton = "Get Started";
  const rightButton = "Services";
  const buttonClass = 'bg-c2-0 border-2 border-c4-0 w-full rounded-md p-2 hover:bg-orange-400 transition-all hover:px-32 duration-[325ms]';

  return (
    <>
      <div className='responsivePad bg-c1-0 pt-[64px] pb-[16px] text-white font-dm-sans max-md:py-[16px]'>

        <div className='grid grid-cols-3 max-lg:flex max-lg:flex-col gap-8'>

          <div className='col-span-2 flex flex-col justify-around max-lg:space-y-8'>

            <div className='flex p space-x-8 max-lg:text-center'>
              {testimonials.map((item, index) => (
                <div key={index}>
                  <div className='flex max-lg:justify-center'>
                    {[0, 1, 2, 3, 4].map(starIndex => (
                      <FaStar key={starIndex} className='text-[#E6BD7B] p' />
                    ))}
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className='max-lg:text-center space-y-4'>
              <h1 className='h1 font-bold max-md:leading-10'>
                {heroText.toUpperCase()}
              </h1>
              <p className='h6'>
                {heroSubText}
              </p>
            </div>

            <div className='flex max-lg:justify-center p space-x-3'>
              <button
                className={buttonClass}
              >
                {leftButton.toUpperCase()}
              </button>

              <button
                className={buttonClass}
              >
                {rightButton.toUpperCase()}
              </button>
            </div>
          </div>

          <div className=''>
            <div className='flex lg:flex-col max-md:flex-col md:flex-row gap-4'>
              <img src={heroImage1} alt="" />
              <img src={heroImage2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
