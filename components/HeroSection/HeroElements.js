import styled from "styled-components";
import Image from "next/image";
export const HeroContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  max-width: 1152px;
  margin: auto;
  background-image: url("/images/hero-background.png");
  background-repeat: no-repeat;
  background-position: absolute;
  padding-bottom: 6rem;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10rem;
`;

export const Left = styled.div`
  flex: 1;
  margin-left: 3rem;
`;

export const Right = styled.div`
  flex: 1;
  margin-top: 2rem;
  margin-left: 2rem;
`;

export const HeadingLg = styled.h1`
  font-weight: 700;
  color: white;
  font-size: 2rem;
`;

export const DividerText = styled.p`
  font-weight: 300;
  color: white;
`;

export const BodyText = styled.p`
  font-weight: 300;
  color: white;
  margin-bottom: 4rem;
`;

export const BtnLink = styled.a`
  border-radius: 20px;
  background: white;
  color: #fc5c7e;
  text-decoration: none;
  white-space: nowrap;
  padding: 12px 30px;
  display: inline-block;
  font-weight: 700;
  font-size: 1rem;
  outline: none;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const HeroImage = styled(Image)`
  filter: drop-shadow(5px 4px 11px rgba(0, 0, 0, 0.25));
`;
