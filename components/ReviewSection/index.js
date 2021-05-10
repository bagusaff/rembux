import {
  InnerWrapper,
  ReviewContainer,
  Title,
  TitleImage,
  Wrapper,
} from "./ReviewElements";

const ReviewSection = () => {
  return (
    <>
      <ReviewContainer>
        <Wrapper>
          <InnerWrapper>
            <TitleImage
              src="/images/pretitle-image.png"
              alt="pretitle"
              width={72}
              height={50}
            />
            <Title>Apa Kata Mereka ?</Title>
          </InnerWrapper>
        </Wrapper>
      </ReviewContainer>
    </>
  );
};

export default ReviewSection;
