import styled from "styled-components";

export const DropContainer = styled.div`
  position: relative;
`;

export const DropBtn = styled.button`
  background: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 0.4s ease;
  border-radius: 10px;
  padding: 6px 10px;
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
  span {
    margin: 0 0.3rem;
    font-weight: 700;
    color: #313131;
    font-family: "Nunito", sans-serif;
  }
`;

export const DropMenu = styled.div`
  background: #ffffff;
  border-radius: 8px;
  margin-top: 10px;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-direction: column;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: ${({ active }) => (active ? "1" : "0")};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  transform: ${({ active }) =>
    active ? "translateY(0)" : "translateY(-20px)"};
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
`;

export const DropMenuItems = styled.div`
  border-bottom: 1px solid #dddddd;
  padding: 0.5rem;
  margin: 0;
  display: flex;
  align-content: center;
`;

export const DropMenuLinks = styled.a`
  padding: 5px !important;
`;
