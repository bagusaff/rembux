import styled from "styled-components";
import Image from "next/image";

export const Nav = styled.nav`
  height: 60px;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  font-weight: 500;
  background: ${({ scrollNav }) => (scrollNav ? "white" : "transparent")};
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? " 0px 4px 4px rgba(0, 0, 0, 0.15)" : "none"};
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1440px;
  border-radius: 5rem;
  transition: 0.8s all ease;
`;

export const NavLogoContainer = styled.a`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLogo = styled(Image)`
  width: 12%;
  transition: 2s all ease;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 60px;
`;

export const NavLinks = styled.a`
  color: ${({ scrollNav }) => (scrollNav ? "#FC5C7E" : "#fff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-weight: 500;
  height: 100%;
  cursor: pointer;
  transition: 0.1s all ease-in-out;
  &:hover {
    border-bottom: ${({ scrollNav }) =>
      scrollNav ? "3px solid #FC5C7E" : "3px solid #fff"};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  /* margin-right: auto; */
  margin-left: auto;
  a {
    border-radius: 50px;
    background: transparent;
    color: #000;
    text-decoration: none;
    white-space: nowrap;
    padding: 10px 22px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      font-weight: 600;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LanguageSelectWrapper = styled.div``;
