import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook, FaTiktok, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoArrowUp } from "react-icons/io5";
import { HashLink } from 'react-router-hash-link';

const Footer = ({ consistentLayout }) => {
  const socials = [
    {
      socialIcon: FaInstagram,
      socialLink: 'https://www.instagram.com/bytesitedigital/'
    },
    {
      socialIcon: FaLinkedin,
      socialLink: 'https://www.linkedin.com/company/bytesite-digital/'
    },
    {
      socialIcon: FaFacebook,
      socialLink: ''
    },
    {
      socialIcon: FaTiktok,
      socialLink: ''
    }
  ];

  const quickLinks = [
    { linkName: 'Book a Call', to: '#contact' },
    { linkName: 'Pricing', to: '#pricing' },
    { linkName: 'Why Choose Us', to: '/#whyChooseUs' }
  ];

  const contacts = [
    {
      icon: FaPhoneAlt,
      contactInformation: '0490536019',
      contactRedirect: 'tel:0490536019'
    },
    {
      icon: MdEmail,
      contactInformation: 'bytesites@info.com',
      contactRedirect: 'mailto:bytesites@info.com'
    },
    {
      icon: FaLocationDot,
      contactInformation: 'Sydney, NSW'
    }
  ];

  const subHeading = "Ah sh*t I've reached the end!";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <section
      id="footer"
      className={`responsivePad bg-c1-0 text-c4-0 font-dm-sans space-y-4 py-4 md:pt-24 pt-12`}
      aria-label="Footer"
    >
      <div className="md:space-y-8 border-b-2 md:pb-10 pb-4">
        <div className="flex justify-between h6">
          {/* SOCIAL ICONS + SUBHEADING */}
          <div className="flex space-x-8 max-md:space-x-4 items-center">
            <div className="flex flex-col gap-2">
              {socials.map((social, socialIndex) => {
                const Icon = social.socialIcon;
                return (
                  <a
                    key={socialIndex}
                    href={social.socialLink || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${
                      Icon.name.replace('Fa', '') || 'Social'
                    } page`}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <div className={`${consistentLayout.sectionSubheadingClass} max-md:hidden`}>
              <h3>{subHeading}</h3>
              <HashLink
                  to="#"
                  onClick={scrollToTop}
                  aria-label="Scroll back to top"
                  className="flex items-center"
                >
                Go back up <IoArrowUp />
              </HashLink>
            </div>
          </div>

          {/* QUICK LINKS + CONTACTS */}
          <div className="flex space-x-8 p">
            <div className="flex flex-col space-y-2 justify-around">
              {quickLinks.map((quickLink, quickLinkIndex) => (
                <HashLink
                  rel="noopener noreferrer"
                  key={quickLinkIndex}
                  to={quickLink.to}
                  className='hover:underline'
                >
                  {quickLink.linkName}   
                </HashLink>
              ))}
            </div>
            <div className="flex md:flex-col justify-around gap-2 max-md:flex-col">
              {contacts.map((contact, contactIndex) => {
                const Icon = contact.icon;
                return (
                  <div key={contactIndex} className="flex space-x-2 items-center">
                    {contact.contactRedirect ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={contact.contactRedirect}
                        className="flex gap-2"
                        aria-label={`Contact via ${
                          Icon.name.replace('Fa', '').replace('Md', '')
                          || 'Link'
                        }`}
                      >
                        <Icon className="w-6 h-6" aria-hidden="true" />
                        <p className="max-md:hidden">{contact.contactInformation}</p>
                      </a>
                    ) : (
                      <div className="flex gap-2">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                        <p className="max-md:hidden">{contact.contactInformation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <h2 className="h2 w-full text-center font-bold 2xl:tracking-[40px] lg:tracking-[32px] md:tracking-[24px] max-md:hidden">
          BYTESITE DIGITAL
        </h2>
      </div>

      <div className="p font-questrial text-center">
        © {new Date().getFullYear()} Bytesites Digital. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
