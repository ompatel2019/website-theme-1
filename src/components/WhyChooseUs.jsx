import React, { useEffect, useState } from 'react'
import { IoHourglassOutline } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { BsLightningCharge } from "react-icons/bs";

const WhyChooseUs = ({consistentLayout, whyChooseUS}) => {
  const allSubHeading = "We develop products that consistently outperform expectations. Our proven track record with previous clients guarantees superior results."
  const mobileSubheading = "Our products consistently exceed expectations with a proven track record of superior results.";

  const [subHeading, setSubheading] = useState("");

  const updateSubheading = () => { 
    const screensize = window.innerWidth;

    if (screensize <= 768) { 
      setSubheading(mobileSubheading);
    } else { 
      setSubheading(allSubHeading);
    }

  }

  useEffect(() => { 
    updateSubheading();
    window.addEventListener("resize", updateSubheading);

    return () => { 
      window.removeEventListener("resize", updateSubheading);
    };
  }, [])

  const perks = [
    {
      perkLogo: IoHourglassOutline,
      perkDesc: 'Improved load times can boost traffic and conversion rates.'
    },
    {
      perkLogo: SlGraph,
      perkDesc: 'Faster websites enhance SEO and improve Google Ads performance.'
    },
    {
      perkLogo: BsLightningCharge,
      perkDesc: 'Our sites load in under a second, boosting user experience and conversions.'
    }
  ];
  
  return (
    <>
      <div id='whyChooseUs' className='responsivePad bg-c1-0 font-dm-sans pt-[32px] pb-[64px]'>
        <div className='text-c4-0 space-y-10'>
          <div className='fade-in fade-down fade-in fade'>
            <p className={consistentLayout.sectionClass}>{whyChooseUS.toUpperCase()}</p>
            <h2 className={consistentLayout.sectionSubheadingClass}>
              {subHeading}
            </h2>
          </div>

          <div className='grid grid-cols-2 max-md:flex max-md:flex-col gap-8 2xl:px-[200px] lg:px-[96px]'>

            <div className='border-2 w-full h-full fade-in fade-left rounded-md'>
            </div>

            <div className='flex flex-col justify-between space-y-4 fade-in fade-right'>

              <h3 className='h5 font-medium'>
                Few achieve the Google Page Speed scores we consistently deliver. 
              </h3>

              {
                perks.map((perk, perkIndex) => (
                  <div key={perkIndex} className='flex items-center p space-x-4 space-y-4'>
                      <perk.perkLogo className='h-12 w-12' />
                      <p>
                        {perk.perkDesc}
                      </p>
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

export default WhyChooseUs
