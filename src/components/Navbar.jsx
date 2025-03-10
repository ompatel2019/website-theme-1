import React from "react";
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
import { Link } from "react-router-dom";

export default function App() {
  // Keep track of menu open/close
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { linkName: "Home", linkTo: "/" },
    { linkName: "Services", linkTo: "/services" },
    { linkName: "Why Choose Us", linkTo: "/whychooseus" },
    { linkName: "Projects", linkTo: "/projects" },
    { linkName: "About Us", linkTo: "/aboutus" },
    { linkName: "Get a Quote", linkTo: "/contact" },
  ];

  // For fully controlled, pass BOTH isMenuOpen and onMenuOpenChange
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
    >
      {/* Left side: brand + menu toggle (mobile) */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Lightwater Plumbing</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop nav */}
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.linkName}>
            <Link
              to={item.linkTo}
              className="text-foreground hover:text-primary transition"
            >
              {item.linkName}
            </Link>
          </NavbarItem>
        ))}

      {/* Right side (desktop) */}
      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarItem>
          <Button
            as={Link}
            to="/book-call"
            variant="flat"
            radius="sm"
            className="bg-secondary text-black px-6"
            >
            Book a call
          </Button>
        </NavbarItem>
      </NavbarContent>
        </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem
            key={item.linkName}
            // If you want the built-in 'active' styles:
            // isActive={location.pathname === item.linkTo}
            onClick={() => setIsMenuOpen(false)} // closes menu
          >
            <Link
              to={item.linkTo}
              // also close on link click
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground hover:text-primary transition"
            >
              {item.linkName}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
