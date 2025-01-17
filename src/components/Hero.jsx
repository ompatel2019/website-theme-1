import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import heroImage1 from "../images/heroImage1.webp";
import heroImage2 from "../images/heroImage2.webp";

/**
 * The Hero section that welcomes users.
 * @param {string} hoverBg - A Tailwind class for the main CTA button hover.
 * @param {number} screenWidth 
 */
const Hero = ({ hoverBg, consistentLayout, screenWidth }) => {
  const allTestimonials = [
    "Their expertise brought my vision to life—highly recommended!",
    "Creative solutions, timely delivery, and excellent attention to detail!",
    "Exceptional web design and communication throughout the process!",
  ];

  const allHeroSubText = "Find your place on the internet in under a month! We offer custom designs, domain hosting, SEO services, and more to help you establish a standout online presence quickly and efficiently.";
  const mobHeroSubText = "Get online fast with our custom designs, domain hosting, and SEO services!";

  const [testimonials, setTestimonials] = useState([]);
  const [heroSubText, setHeroSubText] = useState("");

  useEffect(() => {
    function handleResizeOrLoad() {
      if ((screenWidth || window.innerWidth) <= 768) {
        setTestimonials(allTestimonials.slice(0, 2));
        setHeroSubText(mobHeroSubText);
      } else {
        setTestimonials(allTestimonials);
        setHeroSubText(allHeroSubText);
      }
    }

    handleResizeOrLoad();
  }, [screenWidth]);

  const heroText = "We Offer Web Solutions";
  const leftButton = "Get Started";
  const leftMobButton = "Book Call";
  const rightButton = "Services";

  const buttonClass = `
    ${hoverBg}
    bg-c2-0
    border-c4-0
    w-[90%]
    rounded-md
    p-3
    2xl:p-4
    text-center
    transition-all
    hover:px-32
    duration-[325ms]
    max-md:hover:px-8
  `;

  return (
    <section
      id="home"
      className={`responsivePad bg-c1-0 text-c4-0 font-dm-sans space-y-8 2xl:py-[72px] lg:py-[32px] md:py-[24px] py-[16px]`}
    >
      <div className="grid grid-cols-3 max-lg:flex max-lg:flex-col gap-8">
        
        {/* LEFT SIDE */}
        <div className="col-span-2 flex flex-col justify-around max-lg:space-y-10 max-md:space-y-10 fade-in fade-up">
          <div className="flex p space-x-8 max-lg:text-center">
            {testimonials.map((item, index) => (
              <div key={index}>
                <div className="flex max-lg:justify-center">
                  {[0, 1, 2, 3, 4].map((starIndex) => (
                    <FaStar key={starIndex} className="text-[#E6BD7B] p" />
                  ))}
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="max-lg:text-center space-y-4">
            <h1 className="h1 font-bold max-md:leading-10">
              {heroText.toUpperCase()}
            </h1>
            <p className="h6">{heroSubText}</p>
          </div>

          <div className="flex max-lg:justify-center p space-x-3">
            {/* Desktop Button */}
            <a
              href="#pricing"
              aria-label="View Pricing"
              className={`${buttonClass} max-md:hidden`}
            >
              {leftButton.toUpperCase()}
            </a>

            {/* Mobile Button */}
            <a
              href="#contact"
              aria-label="Book a call"
              className={`${buttonClass} md:hidden`}
            >
              {leftMobButton.toUpperCase()}
            </a>

            <a
              href="#services"
              aria-label="Explore Services"
              className={buttonClass}
            >
              {rightButton.toUpperCase()}
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="fade-in fade-down max-sm:hidden">
          <div className="flex flex-row lg:flex-col gap-4 justify-center items-center">
            <div className="w-fit flex items-center justify-center">
            <img
              className="2xl:w-[90%] lg:w-[85%] rounded-[8px]"
              src={heroImage1}
              alt="Hero Image 1"
              loading="lazy"
              width="600" 
              height="400" 
            />
            </div>
            <div className="w-fit flex items-center justify-center">
              <img
                className="2xl:w-[90%] lg:w-[85%] h-full"
                src={heroImage2}
                alt="Hero Image 2"
                loading="lazy"
                width="600" 
                height="400" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
