import ProjectCardLists from "./ProjectCardLists";
import {
  ButtonMore,
  InnerWrapper,
  ProjectContainer,
  Title,
  TitleImage,
  Wrapper,
} from "./ProjectElements";

const ProjectSection = () => {
  return (
    <>
      <ProjectContainer>
        <Wrapper>
          <InnerWrapper>
            <TitleImage
              src="/images/pretitle-image.png"
              alt="pretitle"
              width={72}
              height={50}
            />
            <Title>Project</Title>

            <ProjectCardLists />
            <ButtonMore>Lihat Semua Projek</ButtonMore>
          </InnerWrapper>
        </Wrapper>
      </ProjectContainer>
    </>
  );
};

export default ProjectSection;
