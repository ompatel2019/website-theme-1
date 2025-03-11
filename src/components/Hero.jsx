import React from 'react'
import { ImagesMarqueeVert } from './ImagesMarqueeVert'
import { ImagesMarqueeHor } from './ImagesMarqueeHor'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Hero = ({ placeholderImg }) => { 
  const h1 = "We Fix All Your Plumbing Problems"
  const p = "We resolve every plumbing challenge swiftly and efficiently. Trust our skilled team to deliver prompt repairs and expert installations, ensuring your water systems run flawlessly day and night with utmost care."
  const buttonClass = 'border-2 border-transparent w-full text-black bg-primary py-2 hover:bg-black text-center md:py-3 rounded-md h7 hover:text-white hover:border-white'
  return (
    <section className='grid grid-cols-2 bg-black max-md:grid-cols-1 font-supreme text-white max-lg:text-center'>
        <div className="cols-span-1 2xl:py-16 xl:py-12 pt-12 pb-8 flex flex-col justify-between max-md:items-center 2xl:pl-[80px] xl:pl-[64px] xl:pr-0 lg:px-[48px] md:px-[24px] sm:px-[16px] px-[8px] max-lg:space-y-4">
          <p className='p-2 px-3 rounded-full bg-primary h7 w-fit max-md:flex max-md:justify-center text-black'>
            Top Rated Plumbing Service
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
                  5/5 (40 + Reviews)
                </p>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 w-full max-md:px-8">
            <Link className={buttonClass}>Contact Us </Link>
            <Link className={buttonClass}> View Services</Link>
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
