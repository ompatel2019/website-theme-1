import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";

const Pricing = ({pricing, consistentLayout}) => {
  const subheading = "An average website for a small business can range from $5,000 to $10,000+ in Australia. Nobody should commit that much money without seeing results."
  const pricingTabs = [
    {
      pricingName: "Lump Sum",
      pricingStrikeThrough: "$5000",
      pricingPrice: "$2899",
      pricingPerks: [
        {
          offered: true, 
          perkName: "Custom Design & Development"
        }, 
        {
          offered: true, 
          perkName: "$10/mo Hosting"
        }, 
        {
          offered: true, 
          perkName: "Blogs"
        }, 
        {
          offered: false, 
          perkName: "Periodical Blog Updates for SEO"
        }, 
        {
          offered: false, 
          perkName: "Unlimited Edits"
        }, 
        {
          offered: false, 
          perkName: "24/7 Support"
        }, 
      ]
    }, 
    {
      pricingName: "Monthly",
      pricingPrice: "$239/mo",
      pricingPerks: [
        {
          offered: true, 
          perkName: "Custom Design & Development"
        }, 
        {
          offered: true, 
          perkName: "Includes Hosting"
        }, 
        {
          offered: true, 
          perkName: "Blogs"
        }, 
        {
          offered: true, 
          perkName: "Periodical Blog Updates for SEO"
        }, 
        {
          offered: true, 
          perkName: "Unlimited Edits"
        }, 
        {
          offered: true, 
          perkName: "24/7 Support"
        }, 
      ]
    }, 
  ];
  
  return (
    <>
      <div id='pricing' className='responsivePad bg-c1-0 py-[32px] max-md:py-[16px] font-dm-sans space-y-8'>
        <div className='fade-in fade-down text-c4-0 text-left'>
            <p className={`${consistentLayout.sectionClass}`}>{pricing.toUpperCase()}</p>
            <h2 className="h4 font-semibold leading-8">
              {subheading}
            </h2>
        </div>


        <div className='grid grid-cols-2 max-md:grid-cols-1 gap-4 text-c4-0 2xl:px-[240px] lg:px-[120px]'>
          {
            pricingTabs.map((pricingTab, pricingTabIndex) => (
              <div key={pricingTabIndex} className={`border-2 border-c4-0 max-md:p-6 p-8 pt-12 rounded-lg transition-all hover:translate-y-5 duration-200 bg-c1-0 space-y-6 max-md:space-y-3 ${pricingTab.pricingName == 'Monthly' ? 'invert' : 'bg-c1-0'}`}>

                <div className='border-b-2 pb-4 space-y-2 max-md:space-y-1'>
                  <h2 className='font-dm-mono h4 font-bold'>
                    {pricingTab.pricingName}
                  </h2>

                  <div className='font-dm-mono h5 flex space-x-2'>
                    {
                      pricingTab.pricingStrikeThrough ?
                      <h3 className='text-gray-300 line-through'>{pricingTab.pricingStrikeThrough}</h3>
                      :
                      <></>
                    }
                    <h3>
                      {pricingTab.pricingPrice}
                    </h3>
                  </div>
                </div>
                
                <p className='p'>Includes:</p>

                <div className='space-y-4 max-md:space-y-2'>
                  {
                    pricingTab.pricingPerks.map((perk, perkIndex) => (
                      <div key={perkIndex} className='flex space-x-2'>
                        {
                          perk.offered ? 
                          <IoCheckmark className='w-6 h-6'/>
                          :
                          <RxCross2 className='w-6 h-6'/>
                        }
                        <p className='p'>
                          {perk.perkName}
                        </p>
                      </div>
                    ))
                  }
                </div>
                  
                <div>
                  <a href="#contact">
                    <div className='text-center p bg-c4-0 rounded-md p-3 max-md:p-2 text-c2-0 font-dm-mono'>
                      Get Started
                    </div>
                  </a>
                </div>

              </div>
            ))
          }
        </div>

        </div>
    </>
  )
}

export default Pricing