import styled from "styled-components";

export const WapperExample = styled.div`
  width: 100%;
  margin-bottom: 3.19vw;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 162%;
    text-transform: uppercase;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 24px;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 46px;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;

export const BoxImg = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    max-width: 375px;
    width: calc((100% - 50px) / 6);
    border-radius: 9.47%;
  }
`;
