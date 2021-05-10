import styled from "styled-components";
import Image from "next/image";

export const ServiceContainer = styled.div`
  width: 100%;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SecondInnerWrapper = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: ${(props) => props.backgroundPosition};
  width: 100%;
`;

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 1rem 2rem;
  width: 100%;
  height: 100%;
`;
export const LogoWrapper = styled.div`
  flex: 4;
`;
export const DescriptionWrapper = styled.div`
  flex: 7;
  display: flex;
  margin: 2rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Header = styled.h1`
  font-weight: 800;
  color: #061d40;
  margin-left: -3rem;
  padding: 0 2rem;
  background: white;
  z-index: 1;
  transition: 0.5s ease-in-out;
  ${ServiceWrapper}:hover & {
    margin-left: -2rem;
  }
`;

export const DescriptionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ServiceLogo = styled(Image)`
  width: 90% !important;
  height: 90% !important;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 2rem;
  color: #00163a;
  text-align: center;
  z-index: 1;
  margin-top: -2rem;
`;

export const DescriptionBody = styled.div`
  margin: 0;
`;
export const Content = styled.p`
  font-weight: 400;
  color: #9f9f9f;
`;

export const TitleImage = styled(Image)`
  max-width: 72px !important;
  min-height: 50px !important;
  max-height: 50px !important;
  min-width: 72px !important;
  inset: 0 12rem 0 0 !important;
`;
