import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  const hoverBg = 'hover:bg-green-400';
  return (
    <>
      <Navbar hoverBg = {hoverBg}/>
      <Hero hoverBg = {hoverBg}/>
    </>
  );
}

export default App;
