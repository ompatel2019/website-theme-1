import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6"; 
import { RxCross2 } from "react-icons/rx";
import { CSSTransition } from 'react-transition-group';
import { CgMenuMotion } from "react-icons/cg";

/**
 * Navigation bar with desktop + mobile support.
 * @param {string} hoverBg - A Tailwind class to apply on hover for the main CTA button.
 * @param {Array} navBarLinks - Array of objects: [{ name, anchor }, ...]
 */
const Navbar = ({ hoverBg, navBarLinks }) => {
  const [showMenu, setShowMenu] = useState(false);
  
  const changeMenuVisibility = () => setShowMenu(prev => !prev);

  return (
    <>
      <nav
        className="bg-c1-0 flex items-center responsivePad pt-[24px] pb-[16px] justify-between font-questrial sticky z-50 top-0"
        aria-label="Main Navigation"
      >
        <a href="#home" aria-label="Home">
          <p className="text-white text-[16px] fade-left fade-in h4 max-md:text-[32px]">
            Byt.
          </p>
        </a>

        {/** DESKTOP NAV */}
        <div className="max-[960px]:hidden flex space-x-4 h5 fade-right fade-in">
          <ul className="bg-c2-0 flex text-c4-0 rounded-full items-center space-x-6 px-8 p">
            {navBarLinks.map((link, index) => (
              <li
                key={index}
                className="hover:translate-y-[-8px] transition-all duration-300 hover:pl-2"
              >
                <a href={link.anchor} aria-label={`Navigate to ${link.name}`}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact">
            <button
              className={`
                ${hoverBg}
                p bg-c4-0
                rounded-full
                flex items-center
                p-4 px-10
                justify-center
                btn
                hover:bg-c1-0
                hover:text-c4-0
                transition-all
                hover:px-12
                duration-300
              `}
              aria-label="Book a call"
            >
              Book a call <FaPlus className="plus" aria-hidden="true" />
            </button>
          </a>
        </div>

        {/** MOBILE NAV ICON */}
        <div className='min-[961px]:hidden text-white h3 fade-right fade-in max-md:text-[32px]'>
          <button
            onClick={changeMenuVisibility}
            aria-label={showMenu ? "Close Menu" : "Open Menu"}
            aria-expanded={showMenu}
            aria-controls="mobile-menu"
          >
            {!showMenu ? (
              <CgMenuMotion aria-hidden="true" />
            ) : (
              <RxCross2 aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/** MOBILE NAV MENU */}
      <CSSTransition
        in={showMenu}
        timeout={300}
        classNames="menu"
        unmountOnExit
      >
        <div
          className='bg-c1-0 fixed inset-0 flex flex-col items-center justify-center z-40 h4 font-questrial opacity-[0.97]'
          id="mobile-menu"
          aria-modal="true"
        >
          <ul className="flex flex-col text-c4-0 items-center space-y-10 font-dm-sanstext-[16px]placeholder-opacity-80">
            {navBarLinks.map((link, index) => (
              <li
                key={index}
                className="hover:translate-y-[-5px] transition-transform duration-200"
              >
                <a
                  href={link.anchor}
                  onClick={() => setShowMenu(false)}
                  aria-label={`Navigate to ${link.name}`}
                >
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
