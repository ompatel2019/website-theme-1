import React, { useEffect } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SlidingText from './components/SlidingText'
import Services from './components/Services'

const App = () => {
  const hoverBg = 'hover:bg-green-400';
  const servicesSection = 'Services';
  const sectionClass = 'italic p';
  const subHeadingClass = 'h4 font-semibold';

  useEffect(() => {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
  }, []);

  return (
    <>
      <Navbar hoverBg = {hoverBg}/>
      <Hero hoverBg = {hoverBg}/>
      <SlidingText/>
      <Services servicesSection = {servicesSection} sectionClass = {sectionClass} subHeadingClass = {subHeadingClass}/>
    </>
  );
}

export default App;
