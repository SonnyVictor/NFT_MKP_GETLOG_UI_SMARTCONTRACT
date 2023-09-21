import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  max-width: 2560px;
  margin: 0px auto;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 140px;
  @media only screen and (min-width: 835px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media only screen and (min-width: 1200px) {
    padding-left: 48px;
    padding-right: 48px;
  }

  @media only screen and (min-width: 1600px) {
    padding-left: 64px;
    padding-right: 64px;
  }
  @media screen and (max-width: 768px) {
    .view_mobile {
      gap: 50px;
    }
  }
  @media screen and (max-width: 550px) {
    .view_mobile {
      display: block;
    }
    .view_mobile .view_box_mobile {
      padding-top: 20px;
    }
  }
`;
export const ContentBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 70px 20px;
  gap: 30px;
  g
  h3 {
    font-size: 28px;
    color: #000;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  li {
    font-size: 14px;
    line-height: 150%;
    color: #787878;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
    text-transform: capitalize;
  }
  @media only screen and (max-width: 970px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 540px) {
    margin-top: 30px;
  }
`;
export const Layout = styled.div`
  width: 100%;
  position: relative;
  @media only screen and (max-width: 1280px) {
    /* margin-left: -70px; */
  }

  @media only screen and (max-width: 970px) {
    margin-left: 0px;
  }
  @media only screen and (max-width: 520px) {
    height: 400px !important;
    margin-top: -80px !important;
  }
  .column img {
    float: left;
    width: 33.33%;
    cursor: pointer;
  }
  .column img:hover {
    border: 1px #fff solid;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const GifLayout = styled.div`
  display: flex;
  justify-content: center;
  padding: 62px 20px;
  border-radius: 32px;
  background: #ececec;
  max-width: 450px;
  margin: auto;
  .view_video {
    width: 180px;
  }
  @media only screen and (max-width: 1024px) {
    top: 20%;
    width: 450px;
  }
  @media only screen and (max-width: 970px) {
    margin: auto;
  }
  @media only screen and (max-width: 520px) {
    top: 10%;
    width: 300px;
    .view_video {
      width: 140px;
    }
  }
`;

export const BtnGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const BoxCoppyContrac = styled.div`
  width: calc(50% - 10px);
  display: flex;
  align-items: center;
  border-radius: 16px;
  background: #ffeffc;
  padding: 12px;
  align-self: stretch;
  gap: 15px;
  img{
    width: 43px;
    height: 43px;
    border-radius: 12px;
  }
  h4 {
    color: #7b7b7b;
    leading-trim: both;
    text-edge: cap;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
    }
  }
  button {
    position: relative;
    padding: 0px;
    background-color: transparent;
    border-radius: 4px;
    max-width: 24px;
    max-height: 24px;
    border: none;
    margin-left: auto;
    img{
      max-width: 24px;
      max-height: 24px;
    }
    span {
      overflow: hidden;
      display: flex;
      position: absolute;
      text-align: center;
      justify-content: center;
      width: 500%;
      top: 0;
      left: 50%;
      transform: translateX(-50%) translateY(-100%);
      transition: all 1s linear;
      opacity: 0;
      color: #45d2c5;
    }
    :hover {
    }
    :active {
      transform: translateY(3%);
      span {
        opacity: 1;
        transition: all 0s linear;
      }
    }
  }
  @media only screen and (max-width: 540px) {
    display: none;
  }
`;

export const BoxCoppyContracMb = styled.div`
  width: 100%;
  display: none;
  h4 {
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    color: #808080;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    h3 {
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: -0.02em;
    }
    button {
      position: relative;
      padding: 4px 4px;
      background-color: transparent;
      border-radius: 4px;
      span {
        overflow: hidden;
        display: flex;
        position: absolute;
        text-align: center;
        justify-content: center;
        width: 500%;
        top: 0;
        left: 50%;
        transform: translateX(-50%) translateY(-100%);
        transition: all 1s linear;
        opacity: 0;
        color: #45d2c5;
      }
      :hover {
        background-color: var(--primary-color3);
      }
      :active {
        transform: translateY(3%);
        span {
          opacity: 1;
          transition: all 0s linear;
        }
      }
    }
  }
  @media only screen and (max-width: 540px) {
    display: block;
  }
`;

export const ButnSubMit = styled.button`
  width: 100%;
  /* background-color: transparent; */
  /* color: var(--primary-color3) !important ; */
  /* transition: all 0.3s linear; */
  border-radius: 16px;
  border: 1.5px solid #e33fc5;
  background: #ffeffc;
  :hover {
    /* background-color: var(--primary-color3); */
    /* color: #fff !important ; */
  }
`;
