import React from 'react'
import PortfolioItem from './PortfolioItem'
import icl from '../images/icl.webp'
import sbp from '../images/sbp.webp'
import rgb from '../images/rgb.webp'
import isolve from '../images/isolve.webp'

const Portfolio = ({portfolio, consistentLayout}) => {
  const subheading = "Our Innovative Projects Designed to Solve Business Issues"
  const portfolioItems = [
    {
      portfolioItemName: "ICL",
      portfolioItemDesc: "Revitalized the online presence of ICL with a dynamic, user-friendly website designed to enhance client engagement and streamline event management.",
      portfolioItemLink: "https://www.playicl.com.au/",
      portfolioItemImg: icl,
      portfolioItemDate: "2024"
    },
    {
      portfolioItemName: "Sydney Backflow Plumbing & Excavation",
      portfolioItemDesc: "Developed a robust website for Sydney Backflow, featuring advanced booking systems and detailed service information to boost operational efficiency.",
      portfolioItemLink: "https://sydneybackflow.com/",
      portfolioItemImg: sbp,
      portfolioItemDate: "2024"
    },
    {
      portfolioItemName: "RGB Plumbing",
      portfolioItemDesc: "Created an intuitive and visually appealing website for RGB Plumbing, focusing on user experience and seamless access to plumbing services.",
      portfolioItemLink: "https://rgbplumbing.com/",
      portfolioItemImg: rgb,
      portfolioItemDate: "2024"
    },
    {
      portfolioItemName: "ISolve Plumbing",
      portfolioItemDesc: "Designed a sleek, mobile-responsive website for ISolve Plumbing that emphasizes quick service requests and customer support.",
      portfolioItemLink: "https://isolveplumbing.com.au/",
      portfolioItemImg: isolve,
      portfolioItemDate: "2024"
    },
  ];
  

  return (
    <>
      <div id='portfolio' className='responsivePad bg-c1-0 space-y-4 py-[64px] font-dm-sans'>
        <div className='fade-in fade-down text-c4-0 text-center'>
            <p className={`${consistentLayout.sectionClass}`}>{portfolio.toUpperCase()}</p>
            <h2 className={consistentLayout.sectionSubheadingClass}>
              {subheading}
            </h2>
        </div>

        <div className='flex flex-col space-y-4'> 
          {
            portfolioItems.map((portfolioItem, portfolioItemKey) => (
              <PortfolioItem key={portfolioItemKey} portfolioItem = {portfolioItem} />
            ))
          }

        </div>

        </div>
    </>
  )
}

export default Portfolio