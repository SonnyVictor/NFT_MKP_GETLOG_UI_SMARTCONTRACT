import styled from "styled-components";

export const Wapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  input {
    outline: none;
  }
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 133%;
    letter-spacing: -0.02em;
    color: #fff;
    margin-bottom: 26px;
  }
  h6 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 117%;
    display: flex;
    align-items: center;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
    top: 0px;
    left: 8px;
    transform: translateY(-50%);
    position: absolute;
    padding: 0px 8px;
    background-color: #ed13d2;
    width: fit-content;
    border-radius: 5px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (max-width: 530px) {
    h6 {
      font-size: 2.26vw;
    }
  }
`;

export const BoxOneElm = styled.div<{
  required?: boolean;
  showListSize?: boolean;
  submitError?: boolean;
}>`
  width: 90%;
  position: relative;
  input,
  button {
    width: 100%;
    height: 60px;
    border: 2px solid ${({ submitError }) => (submitError ? "red" : "#ed13d2")};
    border-radius: 10px;
    padding: 18px 16px;
    color: #fff;
    background-color: transparent;
    ::placeholder {
      color: ${({ submitError }) => (submitError ? "red" : "rgba(255,255,255,0.9)")};
      opacity: ${({ submitError }) => (submitError ? "1" : "0.5")};
    }
  }
  input{
    :focus{
      border: 2px solid #ed13d2 !important;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      transform: rotateZ(
        ${({ showListSize }) => (showListSize ? "180" : "0")}deg
      );
      transition: all 0.3s linear;
    }
  }
  ul {
    width: 100%;
    height: ${({ showListSize }) => (showListSize ? "92px" : "0px")};
    overflow: hidden;
    border: ${({ showListSize }) => (showListSize ? "2px" : "0px")} solid
    var(--primary-color3);
    padding: ${({ showListSize }) => (showListSize ? "18px 16px" : "0px")};
    position: absolute;
    border-radius: 10px;
    bottom: 52px;
    left: 0;
    transform: translateY(100%);
    z-index: 2;
    background-color: rgba(255, 255, 255 , 1);
    backdrop-filter: blur(10px);
    transition: all 0.3s linear;
    li {
      list-style-type: none;
      line-height: 28px;
      font-weight: 600;
    }
  }
  h6 {
    :before {
      content: "${({ required }) => (required ? "*" : "")}";
      position: absolute;
      color: #fff;
      top: 0px;
      right: 0px;
      transform: translateX(calc(100% - 5px));
      background-color: #ed13d2;
      padding-right: 8px;
      border-radius: 0px 5px 5px 0px;
    }
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #fff;
    margin: 6px 0px 26px;
    padding-left: 16px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BoxTowElm = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  p {
    width: 100%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #fff;
    margin: 6px 0px 26px;
    padding-left: 16px;
  }
  input {
    width: 30%;
    height: 60px;
    border: 2px solid #ed13d2;
    border-radius: 10px;
    padding: 18px 16px;
    background-color: transparent;
    color: #fff;
    :focus{
      border: 2px solid #ed13d2;
    }
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ProgressSlide = styled.div`
  width: 67%;
  border-radius: 4px;
  position: relative;
  input {
    width: 100%;
    height: 8px !important;
    transition: opacity 0.2s;
    padding: 0px;
    border: none;
    -webkit-appearance: none;
    ::-webkit-slider-runnable-track {
      background: #fff;
      height: 8px;
      border-radius: 10px;
    }
    ::-moz-range-track {
      background: #fff;
      height: 8px;
      border-radius: 10px;
    }
    ::-moz-range-thumb {
      width: 24px;
      height: 24px;
      background: #fff;
      cursor: pointer;
      border: 1px solid #181b81;
      border-radius: 50%;
    }
    ::-moz-range-progress {
      background-color: #ed13d2;
      height: 100%;
      border-radius: 10px;
    }
    ::-webkit-slider-runnable-track {
      boder-radius: 10px !important;
    }
    ::-moz-range-thumb {
      width: 8px;
      height: 8px;
      background: #ed13d2 !important;
      cursor: pointer;
    }

    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background-color: #ed13d2;
      height: 20px;
      width: 20px;
      transform: translateY(-6px);
      border-radius: 50%;
    }
  }
`;
export const BtnGroup = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 48px;
  gap: 30px;
  button {
    height: 56px;
    width: 50%;
    max-width: 200px;
    border-radius: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 162%;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: capitalize;
    font-feature-settings: "pnum" on, "lnum" on;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    background-color: #fff;
    color: #000;
    :last-child {
      border: 1px solid #fff;
    }
    :hover {
      background-color: var(--primary-color3);
      color: #fff;
    }
  }
  @media only screen and (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
  }
  @media only screen and (max-width: 430px) {
    button {
      height: 13vw;
    }
  }
`;
