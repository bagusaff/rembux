import {
  AboutContainer,
  BannerCard,
  BannerLogo,
  BannerText,
  BannerWrapper,
  InnerWrapper,
  TextBody,
  Title,
  TitleImage,
  TitleImageSecond,
  Wrapper,
} from "./AboutElements";

const AboutSection = () => {
  return (
    <>
      <AboutContainer>
        <Wrapper>
          <InnerWrapper>
            <TitleImage
              src="/images/pretitle-image.png"
              alt="pretitle"
              width={72}
              height={50}
            />
            <Title>Tentang Kami</Title>
            <TextBody>
              Kami menyadari bahwa semakin hari, perkembangan teknologi semakin
              cepat dan semakin masuk ke dalam semua lini kehidupan. Sehingga,
              membuat orang-orang berinvoasi membuat teknologi untuk mempermudah
              aktifitas sehari-hari. Dan tentunya, tidak semua orang memahami
              dan mempunyai ilmu dan pengetahuan tentang teknologi.
            </TextBody>
            <TextBody>
              Menyadari hal tersebut, Rembux hadir untuk bersinergi dan
              berkembang bersama untuk menyelesaikan permasalahan mu. Tidak
              memiliki keahlian untuk mengembangkan aplikasi bukan halangan
              untuk mu mewujudkan impianmu. Kita bersama membangun masa depan
              yang lebih cerah!
            </TextBody>
          </InnerWrapper>

          <InnerWrapper>
            <TitleImageSecond
              src="/images/pretitle-image.png"
              alt="pretitle"
              width={72}
              height={50}
            />
            <Title>Kenapa Harus Kami ?</Title>
            <BannerWrapper>
              <BannerCard>
                <BannerLogo
                  src="/images/banner-logo1.svg"
                  alt="logo1"
                  width={100}
                  height={100}
                />
                <BannerText>Biaya Tentukan Sendiri</BannerText>
              </BannerCard>
              <BannerCard>
                <BannerLogo
                  src="/images/banner-logo2.svg"
                  alt="logo1"
                  width={100}
                  height={100}
                />
                <BannerText>Konsultasi Gratis</BannerText>
              </BannerCard>
              <BannerCard>
                <BannerLogo
                  src="/images/banner-logo3.svg"
                  alt="logo1"
                  width={100}
                  height={100}
                />
                <BannerText>Pelayanan Terbaik</BannerText>
              </BannerCard>
              <BannerCard>
                <BannerLogo
                  src="/images/banner-logo4.svg"
                  alt="logo1"
                  width={90}
                  height={100}
                />
                <BannerText>Teknologi Terbaru</BannerText>
              </BannerCard>
            </BannerWrapper>
          </InnerWrapper>
        </Wrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
