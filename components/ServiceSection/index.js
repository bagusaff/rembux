import {
  ServiceContainer,
  Title,
  TitleImage,
  InnerWrapper,
  Wrapper,
} from "./ServiceElements";

const ServiceSection = () => {
  return (
    <>
      <ServiceContainer>
        <Wrapper>
          <InnerWrapper>
            <TitleImage
              src="/images/pretitle-image.png"
              alt="pretitle"
              width={72}
              height={50}
            />
            <Title>Layanan Kami</Title>
          </InnerWrapper>
        </Wrapper>
      </ServiceContainer>
    </>
  );
};

export default ServiceSection;
