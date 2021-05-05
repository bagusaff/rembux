import {
  BodyText,
  BtnLink,
  DividerText,
  HeadingLg,
  HeroContainer,
  HeroImage,
  InnerWrapper,
  Left,
  Right,
  Wrapper,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <Wrapper>
          <InnerWrapper>
            <Left>
              <HeadingLg>
                Tugas mu butuh aplikasi, tapi kamu ngga sempet bikin sendiri?
              </HeadingLg>
              <DividerText>Atau</DividerText>
              <HeadingLg>
                Bikin aplikasi pakai jasa, tapi ragu sama biaya nya?
              </HeadingLg>
              <BodyText>
                Jika kehidupan mu sekarang sedang berkutat dengan pertanyaan
                diatas, Rembux adalah solusi tepat untuk membantu menyelesaikan
                masalahmu. Biaya? Tenang, kamu tentuin sendiri biaya nya.
              </BodyText>
              <BtnLink>Yuk Konsultasi Dulu!</BtnLink>
            </Left>
            <Right>
              <HeroImage
                src="/images/hero-image.png"
                alt="Hero Banner"
                width={590}
                height={530}
              />
            </Right>
          </InnerWrapper>
        </Wrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
