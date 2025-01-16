import React from 'react';
import PortfolioItem from './PortfolioItem';
import icl from '../images/icl.webp';
import sbp from '../images/sbp.webp';
import rgb from '../images/rgb.webp';
import isolve from '../images/isolve.webp';

/**
 * Portfolio section
 */
const Portfolio = ({ portfolio, consistentLayout }) => {
  const subheading = "Our Innovative Projects Designed to Solve Business Issues";

  const portfolioItems = [
    {
      portfolioItemName: "ICL ⋅ 2024",
      portfolioItemDesc: "Revitalized the online presence of ICL with a dynamic, user-friendly website designed to enhance client engagement and streamline event management.",
      portfolioItemLink: "https://www.playicl.com.au/",
      portfolioItemImg: icl
    },
    {
      portfolioItemName: "Sydney Backflow Plumbing ⋅ 2024",
      portfolioItemDesc: "Developed a robust website featuring booking systems and detailed service information to boost operational efficiency.",
      portfolioItemLink: "https://sydneybackflow.com/",
      portfolioItemImg: sbp
    },
    {
      portfolioItemName: "RGB Plumbing ⋅ 2024",
      portfolioItemDesc: "Created an intuitive and visually appealing website for RGB Plumbing, focusing on user experience and seamless access to plumbing services.",
      portfolioItemLink: "https://rgbplumbing.com/",
      portfolioItemImg: rgb
    },
    {
      portfolioItemName: "iSolve Plumbing ⋅ 2024",
      portfolioItemDesc: "Designed a sleek, mobile-responsive website for ISolve Plumbing that emphasizes quick service requests and customer support.",
      portfolioItemLink: "https://isolveplumbing.com.au/",
      portfolioItemImg: isolve
    }
  ];
  
  return (
    <section
      id="portfolio"
      className={consistentLayout.section}
    >
      <div className="text-c4-0 text-center">
        <p className={consistentLayout.sectionClass}>
          {portfolio.toUpperCase()}
        </p>
        <h2 className={consistentLayout.sectionSubheadingClass}>
          {subheading}
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {portfolioItems.map((item, idx) => (
          <PortfolioItem key={idx} portfolioItem={item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
