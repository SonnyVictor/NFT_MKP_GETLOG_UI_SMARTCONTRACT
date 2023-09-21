import styled from "styled-components";

const Arr1 = [
  "assets/images/slider/img1.png",
  "assets/images/slider/img2.png",
  "assets/images/slider/img3.png",
  "assets/images/slider/img4.png",
  "assets/images/slider/img5.png",
  "assets/images/slider/img6.png",
  "assets/images/slider/img7.png",
  "assets/images/slider/img8.png",
  "assets/images/slider/img9.png",
  "assets/images/slider/img10.png",
];

export const SliderMarketPlace = () => {
  return (
    <SliderBox>
      <SliderWapper>
        <SliderContainer>
          <SliderFloor>
            <SliderItem>
              {Arr1.map((img, index) => {
                return <img key={`${img}${index}`} src={img} alt="" />;
              })}
            </SliderItem>
            <SliderItem>
              {Arr1.map((img, index) => {
                return <img key={`${img}${index}`} src={img} alt="" />;
              })}
            </SliderItem>
            <SliderItem>
              {Arr1.map((img, index) => {
                return <img key={`${img}${index}`} src={img} alt="" />;
              })}
            </SliderItem>
          </SliderFloor>
        </SliderContainer>
        <SliderContainer>
          <SliderFloor>
            <SliderItem className="rever">
              {Arr1.map((img, index) => {
                return <img key={`${img}${index}`} src={img} alt="" />;
              })}
            </SliderItem>
            <SliderItem className="rever">
              {Arr1.map((img, index) => {
                return <img key={`${img}${index}`} src={img} alt="" />;
              })}
            </SliderItem>
            <SliderItem className="rever">
              {Arr1.map((img, index) => {
                return <img key={`${img}${index}`} src={img} alt="" />;
              })}
            </SliderItem>
          </SliderFloor>
        </SliderContainer>
      </SliderWapper>
    </SliderBox>
  );
};

const SliderBox = styled.div`
  background-image: url("/images/Mint/Banner.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  :after {
    content: "";
    position: absolute;
    top: 0%;
    left: 0;
    background: radial-gradient(
      67.01% 67.01% at 50% 50%,
      rgba(248 ,248 ,248, 0.69) 0%,
      rgba(248 ,248 ,248, 0.9) 56.77%,
      #f8f8f8 100%
    );
    backdrop-filter: blur(10px);
    width: 100%;
    height: 100%;
  }
`;
const SliderWapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 130px;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 30px;
  ::after,
  ::before {
    content: "";
    width: 15%;
    height: 100%;
    background: linear-gradient(to right, 
      rgba(45, 46, 55, 0) 0%,
      rgba(248 ,248 ,248, 0.3) 100%);
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 3;
  }
  ::before{
    left: 0;
    transform: rotateZ(180deg);
  }
`;
const SliderContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  width: 100%;
  overflow: hidden;
  max-width: 2560px;
  margin: 0px auto;
`;
const SliderFloor = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  min-height: 90px;
  position: relative;
  width: 100%;
  min-width: 1708px;
  transform-style: preserve-3d;
  .rever {
    animation: SliderAnimation2 30s linear infinite;
    left: 0px;
    transform-style: preserve-3d;
    :first-child {
      animation-delay: -10s;
    }
    :last-child {
      animation-delay: 10s;
    }
    @keyframes SliderAnimation2 {
      0% {
        opacity: 1;
        transform: translateX(-100%);
      }
      33% {
        opacity: 1;
        transform: translateX(0%);
      }
      66% {
        opacity: 1;
        transform: translateX(100%);
      }
      67% {
        opacity: 0;
        transform: translateX(100%);
      }
      68% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  }
`;
const SliderItem = styled.div`
  display: flex;
  gap: 12px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  width: 100%;
  transform: translateX(100%);
  animation: SliderAnimation 30s linear infinite;
  transform-style: preserve-3d;
  :first-child {
    animation-delay: -10s;
  }
  :last-child {
    animation-delay: 10s;
  }
  img {
    width: calc((100% - 108px) / 10);
    min-width: 160px;
  }
  @keyframes SliderAnimation {
    0% {
      opacity: 1;
      transform: translateX(100%);
    }
    33% {
      opacity: 1;
      transform: translateX(0%);
    }
    66% {
      opacity: 1;
      transform: translateX(-100%);
    }
    67% {
      opacity: 0;
      transform: translateX(-100%);
    }
    68% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
