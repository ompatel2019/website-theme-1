import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SlidingText from './components/SlidingText'

const App = () => {
  const hoverBg = 'hover:bg-green-400';
  return (
    <>
      <Navbar hoverBg = {hoverBg}/>
      <Hero hoverBg = {hoverBg}/>
      <SlidingText/>
    </>
  );
}

export default App;
