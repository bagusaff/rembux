import styled from "styled-components";
import Image from "next/image";
export const AboutContainer = styled.div`
  width: 100%;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  max-width: 1152px;
  margin: auto;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 2rem;
  color: #00163a;
  text-align: center;
  margin-top: -2rem;
  z-index: 1;
`;

export const TextBody = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 22px;
  text-align: center;
  color: #9f9f9f;
`;

export const TitleImage = styled(Image)`
  max-width: 72px !important;
  min-height: 50px !important;
  max-height: 50px !important;
  min-width: 72px !important;
  inset: 0 12rem 0 0 !important;
`;

export const TitleImageSecond = styled(Image)`
  max-width: 72px !important;
  min-height: 50px !important;
  max-height: 50px !important;
  min-width: 72px !important;
  inset: 0 19rem 0 0 !important;
`;

export const BannerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
  width: 100%;
  height: 300px;
`;

export const BannerCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #00163a;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #fc5c7e;
    box-shadow: 3px 3px 8px 2.5px rgba(0, 0, 0, 0.15);
  }
`;

export const BannerLogo = styled(Image)``;

export const BannerText = styled.h2`
  font-weight: 700;
  font-size: 1.2rem;
  text-align: center;
`;
