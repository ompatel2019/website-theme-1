import React, { useEffect, useState } from 'react';
import { IoHourglassOutline } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { BsLightningCharge } from "react-icons/bs";
import img from '../images/whyChooseUs.webp'

/**
 * Why Choose Us section
 */
const WhyChooseUs = ({ consistentLayout, whyChooseUS }) => {
  const allSubHeading = "We develop products that consistently outperform expectations. Our proven track record with previous clients guarantees superior results.";
  const mobileSubheading = "Our products consistently exceed expectations with a proven track record of superior results.";

  const [subHeading, setSubheading] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSubheading(mobileSubheading);
      } else {
        setSubheading(allSubHeading);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <section
      id="whyChooseUs"
      className={consistentLayout.section}
    >
      <div className="text-c4-0 space-y-10">
        <div className="">
          <p className={consistentLayout.sectionClass}>
            {whyChooseUS.toUpperCase()}
          </p>
          <h2 className={consistentLayout.sectionSubheadingClass}>
            {subHeading}
          </h2>
        </div>

        <div className="grid grid-cols-2 max-md:flex max-md:flex-col gap-8 2xl:px-[200px] lg:px-[96px]">
          <div className="flex items-center justify-center">
            <img src={img} alt="Image of our website scores" className='w-full h-fit max-md:max-h-[360px] max-md:max-w-[360px] rounded-lg' />
          </div>

          <div className="flex flex-col justify-between space-y-4">
            <h3 className="h5 font-medium">
              Few achieve the Google Page Speed scores we consistently deliver.
            </h3>

            {perks.map((perk, perkIndex) => {
              const Icon = perk.perkLogo;
              return (
                <div
                  key={perkIndex}
                  className="flex items-center p space-x-4 space-y-4"
                >
                  <Icon className="h-16 w-16" aria-hidden="true" />
                  <p className='font-semibold'>{perk.perkDesc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
