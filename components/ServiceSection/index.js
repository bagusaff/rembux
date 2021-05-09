import {
  ServiceContainer,
  Title,
  TitleImage,
  InnerWrapper,
  Wrapper,
  ServiceWrapper,
  LogoWrapper,
  DescriptionWrapper,
  ServiceLogo,
  DescriptionHeader,
  Header,
  DescriptionBody,
  Content,
  SecondInnerWrapper,
} from "./ServiceElements";
import Image from "next/image";

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

            <SecondInnerWrapper
              backgroundImage="/images/particle-1.svg"
              backgroundPosition="right"
            >
              <ServiceWrapper>
                <LogoWrapper>
                  <ServiceLogo
                    src="/images/services-logo1.svg"
                    alt="logo1"
                    width={90}
                    height={90}
                    layout="responsive"
                  />
                </LogoWrapper>
                <DescriptionWrapper>
                  <DescriptionHeader>
                    <Image src="/images/line.svg" width={100} height={100} />
                    <Header>Web Apps</Header>
                  </DescriptionHeader>
                  <DescriptionBody>
                    <Content>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </Content>
                    <Content>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </Content>
                  </DescriptionBody>
                </DescriptionWrapper>
              </ServiceWrapper>
            </SecondInnerWrapper>

            <SecondInnerWrapper
              backgroundImage="/images/particle2.svg"
              backgroundPosition="left"
            >
              <ServiceWrapper>
                <DescriptionWrapper>
                  <DescriptionHeader>
                    <Image src="/images/line.svg" width={100} height={100} />
                    <Header>Mobile Apps</Header>
                  </DescriptionHeader>
                  <DescriptionBody>
                    <Content>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </Content>
                    <Content>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </Content>
                  </DescriptionBody>
                </DescriptionWrapper>
                <LogoWrapper>
                  <ServiceLogo
                    src="/images/services-logo2.svg"
                    alt="logo1"
                    width={90}
                    height={90}
                    layout="responsive"
                  />
                </LogoWrapper>
              </ServiceWrapper>
            </SecondInnerWrapper>

            <SecondInnerWrapper
              backgroundImage="/images/particle-1.svg"
              backgroundPosition="right"
            >
              <ServiceWrapper>
                <LogoWrapper>
                  <ServiceLogo
                    src="/images/services-logo3.svg"
                    alt="logo1"
                    width={90}
                    height={90}
                    layout="responsive"
                  />
                </LogoWrapper>
                <DescriptionWrapper>
                  <DescriptionHeader>
                    <Image src="/images/line.svg" width={100} height={100} />
                    <Header>Website / Landingpage</Header>
                  </DescriptionHeader>
                  <DescriptionBody>
                    <Content>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </Content>
                    <Content>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </Content>
                  </DescriptionBody>
                </DescriptionWrapper>
              </ServiceWrapper>
            </SecondInnerWrapper>
          </InnerWrapper>
        </Wrapper>
      </ServiceContainer>
    </>
  );
};

export default ServiceSection;
