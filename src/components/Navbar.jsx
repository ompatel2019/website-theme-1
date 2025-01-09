import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";  // Correct import path
import { RxCross2 } from "react-icons/rx"; // Combined import
import { CSSTransition } from 'react-transition-group';
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const navBarLinks = [
    { name: 'Home', anchor: '/' },
    { name: 'About Us', anchor: '#aboutUs' },
    { name: 'Why Choose Us', anchor: '#whyChooseUs' },
    { name: 'Portfolio', anchor: '#portfolio' },
    { name: 'Blogs', anchor: '#blogs' }
  ];

  const [showMenu, setShowMenu] = useState(false);
  
  const changeMenuVisibility = () => setShowMenu(prevState => !prevState);

  return (
    <>
      <nav className="bg-c1-0 flex items-center responsivePad pt-[32px] justify-between font-questrial sticky z-50 top-0">
        <a href="/">
          <p className="text-white h3 fade-left fade-in">Byt.</p>
        </a>

        <div className="max-md:hidden flex space-x-4 h5 fade-right fade-in">
          <ul className="bg-c2-0 flex text-c4-0 border-2 border-c4-0 rounded-full items-center space-x-6 px-5">
            {navBarLinks.map((link, index) => (
              <li key={index} className="hover:translate-y-[-5px] transition-transform duration-200">
                <a href={link.anchor}>{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="#contact">
            <button className="bg-c4-0 rounded-full flex items-center p-4 px-8 justify-center btn hover:bg-c1-0 hover:text-c4-0 transition-all hover:px-10 hover:border-white hover:border-2 border-2">
              Book a call <FaPlus className="plus" />
            </button>
          </a>
        </div>

        <div className='md:hidden text-white h3 fade-right fade-in'>
          <button onClick={changeMenuVisibility}>
            {!showMenu ? <RiMenu3Fill  /> : <RxCross2 />}
          </button>
        </div>
      </nav>

      {showMenu && (
        <div className='bg-c1-0 fade-in fade-down-quick'>
          <ul className="flex flex-col text-c4-0 items-center h-[100vh] space-y-10 font-dm-sans h4 placeholder-opacity-80">
            {navBarLinks.map((link, index) => (
              <li key={index} className="hover:translate-y-[-5px] transition-transform duration-200">
                <a href={link.anchor}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
