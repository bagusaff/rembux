import React from "react";
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
  return (
    <>
      <Nav>
        <NavbarContainer>
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
              <NavLinks>About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Service</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Our Project</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Testimonials</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Contact Us</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <a>IND</a>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
