import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaTiktok, FaPhoneAlt, FaLocationDot } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoArrowUp } from "react-icons/io5";
import { HashLink } from 'react-router-hash-link';

const socials = [
  { Icon: FaInstagram, link: 'https://www.instagram.com/bytesitedigital/' },
  { Icon: FaLinkedin, link: 'https://www.linkedin.com/company/bytesite-digital/' },
  { Icon: FaFacebook, link: '' },
  { Icon: FaTiktok, link: '' }
];

const quickLinks = [
  { name: 'Book a Call', to: '#contact' },
  { name: 'Pricing', to: '#pricing' },
  { name: 'Why Choose Us', to: '/#whyChooseUs' }
];

const contacts = [
  { Icon: FaPhoneAlt, info: '0490536019', link: 'tel:0490536019' },
  { Icon: MdEmail, info: 'bytesites@info.com', link: 'mailto:bytesites@info.com' },
  { Icon: FaLocationDot, info: 'Sydney, NSW' }
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => (
  <section className="responsivePad bg-c1-0 text-c4-0 font-dm-sans space-y-4 py-4 md:pt-24 pt-12">
    <div className="md:space-y-8 border-b-2 md:pb-10 pb-4 flex justify-between h6">
      <div className="flex space-x-8 max-md:space-x-4 items-center">
        {socials.map(({ Icon, link }, index) => (
          <a key={index} href={link || '#'} target="_blank" rel="noopener noreferrer" aria-label="Social link">
            <Icon className="w-6 h-6" aria-hidden="true" />
          </a>
        ))}
        <div>
          <h3>Ah sh*t I've reached the end!</h3>
          <HashLink to="#" onClick={scrollToTop} aria-label="Scroll back to top" className="flex items-center">
            Go back up <IoArrowUp />
          </HashLink>
        </div>
      </div>
      <div className="flex space-x-8 p">
        <div className="flex flex-col space-y-2 justify-around">
          {quickLinks.map(({ name, to }, index) => (
            <HashLink key={index} to={to} className='hover:underline'>{name}</HashLink>
          ))}
        </div>
        <div className="flex md:flex-col justify-around gap-2 max-md:flex-col">
          {contacts.map(({ Icon, info, link }, index) => (
            <div key={index} className="flex space-x-2 items-center">
              {link ? (
                <a href={link} className="flex gap-2" aria-label="Contact link">
                  <Icon className="w-6 h-6" />
                  <p>{info}</p>
                </a>
              ) : (
                <div className="flex gap-2">
                  <Icon className="w-6 h-6" />
                  <p>{info}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <h2 className="h2 w-full text-center font-bold 2xl:tracking-[40px] lg:tracking-[32px] md:tracking-[24px] max-md:hidden">
      BYTESITE DIGITAL
    </h2>
    <p className="p font-questrial text-center">© {new Date().getFullYear()} Bytesites Digital. All rights reserved.</p>
  </section>
);

export default Footer;
