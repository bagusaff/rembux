import styled from "styled-components";
import Image from "next/image";

export const ProjectContainer = styled.div`
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
  z-index: 1;
  margin-top: -2rem;
`;

export const TitleImage = styled(Image)`
  max-width: 72px !important;
  min-height: 50px !important;
  max-height: 50px !important;
  min-width: 72px !important;
  inset: 0 5.5rem 0 0 !important;
`;

export const ButtonMore = styled.a`
  margin-top: 2rem;
  align-self: center;
  letter-spacing: 2px;
  display: inline-block;
  cursor: pointer;
  color: #fc5c7e;
  text-align: center;
  font-weight: bold;
  padding: 1rem 3rem;
  border: 3px solid #fc5c7e;
  border-radius: 2rem;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    background: #fc5c7e;
    color: white;
    transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
  }
`;
