import Dropdown from "./Dropdown";
import React, { useState, useEffect } from "react";
import {
  Nav,
  NavLogoContainer,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
} from "./NavbarElements";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const scrolled = () => {
    if (window.scrollY >= 150) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrolled);
    console.log(scrollNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer scrollNav={scrollNav}>
          <NavLogoContainer>
            <NavLogo
              src="/images/rembux-logo.svg"
              alt="Rembux Logo"
              width={60}
              height={38}
            />
          </NavLogoContainer>
          <MobileIcon></MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks scrollNav={scrollNav}>About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks scrollNav={scrollNav}>Service</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks scrollNav={scrollNav}>Our Project</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks scrollNav={scrollNav}>Testimonials</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks scrollNav={scrollNav}>Contact Us</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <Dropdown />
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
