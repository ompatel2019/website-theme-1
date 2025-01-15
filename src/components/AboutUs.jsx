import React from 'react'
import aboutUsImg from "../images/aboutUs.webp";

const AboutUs = ({consistentLayout, aboutUs}) => {
  const subheading = "Just because you're a small business doesn't mean your website can't impress."
  const subheadingText = "At Bytesite Digital, we found many small businesses still lack an online presence, and website costs are often too high. We're here to close that gap by providing tailored, affordable website solutions, ensuring businesses get exactly what they need without overpaying."

  const stats = [
    {
      stateNumber: "100%",
      statName: "Satisfaction",
    },
    {
      stateNumber: "15+",
      statName: "Projects",
    },
    {
      stateNumber: "100",
      statName: "Page Scores",
    },
    {
      stateNumber: "2+ Years",
      statName: "Experience",
    },
  ]
  return (
    <>
      <div className='responsivePad py-[32px] bg-c1-0'>
        <div className='font-dm-sans grid grid-cols-2 max-md:flex max-md:flex-col gap-4 2xl:px-[120px] lg:px-[64px]'>
          <div className='p-6 bg-c2-0 flex flex-col justify-between rounded-2xl text-c4-0 max-md:space-y-8'>
            <div className='space-y-4 2xl:space-y-8'>
              <p className={consistentLayout.sectionClass}>
                {aboutUs}
              </p>
              <h2 className="h3 font-bold">
                {subheading}
              </h2>
            </div>
            <p className='p'>
              {subheadingText}
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <div>
              <img src={aboutUsImg} alt="" className='rounded-2xl w-full' />
            </div>

            <div className='grid grid-cols-2 2xl:grid-cols-4 p-6 bg-c2-0 rounded-2xl gap-2'>
              {
                stats.map((stat, statIndex) => (
                  <div key={statIndex} className='rounded-lg text-c4-0 border-2 bg- p-4'>
                    <h3 className='h6 font-bold'>{stat.stateNumber}</h3>
                    <p className='text-base font-bold'>{stat.statName}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs