import React from 'react'
import { ImagesMarqueeVert } from './ImagesMarqueeVert'
import { ImagesMarqueeHor } from './ImagesMarqueeHor'
import PageHeadingHeader from './PageHeadingHeader'

const PageHeading = ({placeholderImg, route, heading, subheading}) => {
  return (
    <section className='grid grid-cols-2 bg-primary max-md:grid-cols-1 font-supreme text-black max-lg:text-center'>
        <div className="cols-span-1 2xl:py-16 xl:py-12 pt-12 pb-8 flex flex-col justify-center max-md:items-center 2xl:pl-[80px] xl:pl-[64px] xl:pr-0 lg:px-[48px] md:px-[24px] sm:px-[16px] px-[8px] max-lg:space-y-4">
          <PageHeadingHeader
          route={route}
          heading={heading}
          subheading={subheading}
        />
        </div>

      <div>
        <div className="hidden md:block">
          <ImagesMarqueeVert placeholderImg={placeholderImg} height={"500px"}/>
        </div>
        <div className="md:hidden block pb-8">
          <ImagesMarqueeHor placeholderImg={placeholderImg} />  
        </div>
      </div>
    </section>
  )
}

export default PageHeading