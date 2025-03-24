import React from 'react'
import { ImagesMarqueeVert } from './ImagesMarqueeVert'
import { ImagesMarqueeHor } from './ImagesMarqueeHor'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Hero = ({ placeholderImg }) => { 
  const h1 = "Lorem ipsum dolor sit amet"
  const p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere ac quam et imperdiet. Etiam non mauris feugiat, efficitur mauris sed, aliquam dui. Nulla gravida."
  const buttonClass = 'border-2 border-transparent w-full text-black bg-primary py-2 hover:bg-white text-center md:py-3 rounded-md h7 hover:text-black hover:border-white hover:px-16 transition-all'
  return (
    <section className='grid grid-cols-2 bg-black max-md:grid-cols-1 font-supreme text-white max-lg:text-center'>
        <div className="cols-span-1 2xl:py-16 xl:py-12 pt-12 pb-8 flex flex-col justify-between max-md:items-center 2xl:pl-[80px] xl:pl-[64px] xl:pr-0 lg:px-[48px] md:px-[24px] sm:px-[16px] px-[8px] max-lg:space-y-4">
          <p className='p-2 px-3 rounded-full bg-primary h7 w-fit max-md:flex max-md:justify-center text-black'>
              Lorem ipsum dolor sit amet
          </p>
          <h1 className='h1 font-supreme-extrabold max-md:text-center text-left'>
            {h1}
          </h1>
          <p className='max-[500px]:hidden h7 max-md:text-center text-left'>
            {p}
          </p>
          <div className='flex space-x-1 p items-center'>
            <FcGoogle  className='w-5 h-5'/>
            <div className='flex flex-col space-x-1'>
              <div className="flex space-x-1 text-white">
                <div className="flex space-x-1 text-primary">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p>
                  5/5 (XX + Reviews)
                </p>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 w-full max-md:px-8">
            <Link to='/contact-us' className={buttonClass}>Contact Us </Link>
            <Link to='/services' className={buttonClass}> View Services</Link>
          </div>
        </div>

      <div>
        <div className="hidden md:block">
          <ImagesMarqueeVert placeholderImg={placeholderImg}/>
        </div>
        <div className="md:hidden block pb-8">
          <ImagesMarqueeHor placeholderImg={placeholderImg} />  
        </div>
      </div>
    </section>
  )
}

export default Hero
