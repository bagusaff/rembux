import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectCardLists = () => {
  return (
    <>
      <ProjectWrapper>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectWrapper>
    </>
  );
};

export default ProjectCardLists;

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 3rem;
  width: 100%;
`;
