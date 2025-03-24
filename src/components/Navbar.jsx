import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { linkName: "Home", linkTo: "/" },
    { linkName: "Services", linkTo: "/services" },
    { linkName: "Why Choose Us", linkTo: "/why-choose-us" },
    { linkName: "Projects", linkTo: "/projects" },
    { linkName: "About Us", linkTo: "/about-us" },
    { linkName: "Get a Quote", linkTo: "/contact-us" },
  ];

  const linkClass = ({isActive}) => isActive ? 'text-primary rounded-sm p' : 'p text-white hover:text-primary transition'

  // For fully controlled, pass BOTH isMenuOpen and onMenuOpenChange
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="bg-black text-white font-supreme-medium xl:py-3 py-2 2xl:px-[64px] xl:px-[48px] lg:px-[40px] md:px-[16px] sm:px-[8px]"
    >
      {/* Left side: brand + menu toggle (mobile) */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link to='/'>
            <p className="font-bold text-inherit p">Company Name Goes Here</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop nav */}
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {menuItems.map((item) => (
            item.linkName != 'Get a Quote' ? 
          <NavbarItem key={item.linkName}>
            <NavLink
              to={item.linkTo}
              className={linkClass}
            >
              {item.linkName}
            </NavLink>
          </NavbarItem>
            :
          <Button
            as={Link}
            to="/contact-us"
            className="bg-primary text-black px-6 rounded-sm p"
            >
            {item.linkName}
          </Button>
        ))}
        </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-black text-white mt-12 md:px-10 sm:px-8 px-6 font-supreme">
        {menuItems.map((item) => (
          <NavbarMenuItem
            key={item.linkName}
            onClick={() => setIsMenuOpen(false)}
          >
            <NavLink
              to={item.linkTo}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-primary transition p"
            >
              {item.linkName}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
