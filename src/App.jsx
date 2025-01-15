import React, { useEffect } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SlidingText from './components/SlidingText'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import AboutUs from './components/AboutUs';

const App = () => {
  const hoverBg = 'hover:bg-green-400';
  const servicesSection = 'Services';
  const whyChooseUS = 'Why Choose Us';
  const portfolio = 'Portfolio';
  const pricing = 'Pricing';
  const aboutUs = 'About Us';

  useEffect(() => {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
  }, []);

  const consistentLayout = {
    sectionClass: 'italic p',
    sectionSubheadingClass: 'h4 font-semibold'
  };

  return (
    <>
      <Navbar hoverBg = {hoverBg} />
      <Hero hoverBg = {hoverBg}/>
      <SlidingText/>
      <Services servicesSection = {servicesSection} consistentLayout = {consistentLayout}/>
      <WhyChooseUs whyChooseUS = {whyChooseUS} consistentLayout = {consistentLayout}/>
      <Portfolio portfolio = {portfolio} consistentLayout = {consistentLayout}/>
      <Pricing pricing = {pricing} consistentLayout = {consistentLayout}/>
      <AboutUs aboutUs = {aboutUs} consistentLayout = {consistentLayout}/>
    </>
  );
}

export default App;
