import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6"; 
import { RxCross2 } from "react-icons/rx";
import { CSSTransition } from 'react-transition-group';
import { RiMenu3Fill } from "react-icons/ri";
import '../animations.css'; 

const Navbar = () => {
  const navBarLinks = [
    { name: 'About Us', anchor: '#aboutUs' },
    { name: 'Why Choose Us', anchor: '#whyChooseUs' },
    { name: 'Pricing', anchor: '#pricing' },
    { name: 'Portfolio', anchor: '#portfolio' },
    { name: 'Blogs', anchor: '#blogs' }
  ];

  const [showMenu, setShowMenu] = useState(false);
  
  const changeMenuVisibility = () => setShowMenu(prevState => !prevState);

  return (
    <>
      <nav id='home' className="bg-c1-0 flex items-center responsivePad pt-[32px] justify-between font-questrial sticky z-50 top-0" aria-label="Main Navigation">
        <a href="/" aria-label="Home">
          <p className="text-white text-[16px] fade-left fade-in h4 max-md:text-[32px]">Byt.</p>
        </a>

        <div className="max-[960px]:hidden flex space-x-4 h5 fade-right fade-in">
          <ul className="bg-c2-0 flex text-c4-0 border-2 border-c4-0 rounded-full items-center space-x-6 px-5 p">
            {navBarLinks.map((link, index) => (
              <li key={index} className="hover:translate-y-[-5px] transition-transform duration-300">
                <a href={link.anchor}>{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="#contact">
            <button
              className="p bg-c4-0 rounded-full flex items-center p-4 px-10 justify-center btn hover:bg-c1-0 hover:text-c4-0 transition-all hover:px-12 hover:border-white hover:border-2 border-2 duration-300"
              aria-label="Book a call"
            >
              Book a call <FaPlus className="plus" aria-hidden="true" />
            </button>
          </a>
        </div>

        <div className='min-[961px]:hidden text-white h3 fade-right fade-in max-md:text-[32px]'>
          <button
            onClick={changeMenuVisibility}
            aria-label={showMenu ? "Close Menu" : "Open Menu"}
            aria-expanded={showMenu}
            aria-controls="mobile-menu"
          >
            {!showMenu ? <RiMenu3Fill aria-hidden="true" /> : <RxCross2 aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <CSSTransition
        in={showMenu}
        timeout={300}
        classNames="menu"
        unmountOnExit
      >
        <div
          className='bg-c1-0 fixed inset-0 flex flex-col items-center justify-center z-40 h4 font-questrial'
          id="mobile-menu"
          // role="dialog"
          aria-modal="true">
          <ul className="flex flex-col text-c4-0 items-center space-y-10 font-dm-sanstext-[16px]placeholder-opacity-80">
            {navBarLinks.map((link, index) => (
              <li key={index} className="hover:translate-y-[-5px] transition-transform duration-200">
                <a href={link.anchor} onClick={() => setShowMenu(false)} aria-label={`Navigate to ${link.name}`}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </CSSTransition>
    </>
  );
};

export default Navbar;
