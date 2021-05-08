import styled from "styled-components";
import Image from "next/image";
export const ServiceContainer = styled.div`
  width: 100%;
  height: 100vh;
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

export const Title = styled.h1`
  font-weight: 800;
  font-size: 2rem;
  color: #00163a;
  text-align: center;
  margin-top: -2rem;
  z-index: 1;
`;

export const TitleImage = styled(Image)`
  max-width: 72px !important;
  min-height: 50px !important;
  max-height: 50px !important;
  min-width: 72px !important;
  inset: 0 12rem 0 0 !important;
`;
