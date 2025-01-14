import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const PortfolioItem = ({portfolioItem}) => {
  return (
    <div className='bg-c2-0 rounded-lg grid grid-cols-2 max-md:grid-cols-1 p-8 gap-7 text-c4-0 duration-200 font-dm-sans transition-all hover:p-10'>

        <div className='flex flex-col justify-between max-md:text-center max-md:space-y-4'>
            <div className='space-y-4'>
                <div className='space-y-2'>
                    <h3 className='h5 font-bold'>
                        {portfolioItem.portfolioItemName}
                    </h3>
                    <p className='p font-questrial text-c4-0'>
                        {portfolioItem.portfolioItemDesc}
                    </p>
                </div>
                
            </div>

            <div className=''>
                <a className='md:w-fit flex items-center justify-center text-base md:p-2 md:px-5 md:bg-c4-0 md:transition-all md:hover:px-6 md:rounded-lg md:text-c2-0 text-c4-0 max-md:underline font-dm-mono turnParent space-x-1 md:duration-200' target='_blank' href={portfolioItem.portfolioItemLink}>
                    <p>View Project</p>
                    <MdArrowOutward className='turn duration-200 transition-all'/>
                </a>
            </div>

        </div>

        <div className='flex justify-end'>
            <img src={portfolioItem.portfolioItemImg} alt="" className='rounded-md' />
        </div>
        
    </div>
  )
}

export default PortfolioItem