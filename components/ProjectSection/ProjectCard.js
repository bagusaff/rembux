import styled from "styled-components";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = () => {
  return (
    <>
      <CardContainer>
        <ImgThumb
          src="/images/project-thumbnail.png"
          alt="project"
          width={300}
          height={400}
        />
        <LinkWrapper>
          <Link>Landing Page</Link>
          <FiExternalLink size="1.5rem" color="#FC5C7E" />
        </LinkWrapper>
      </CardContainer>
    </>
  );
};

export default ProjectCard;

const CardContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 5px 21px -8px rgba(0, 0, 0, 0.25);
  background-color: white;
  cursor: pointer;
  transition: transform 0.2s, transform 0.3s, opacity 0.3s,
    background-color 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-top: 4px solid #fc5c7e;
  padding: 0 1rem;
  align-items: center;
`;

const Link = styled.h3`
  font-weight: 400;
  color: #061d40;
  padding: 0;
`;

const ImgThumb = styled(Image)`
  width: inherit !important;
  height: inherit !important;
`;
