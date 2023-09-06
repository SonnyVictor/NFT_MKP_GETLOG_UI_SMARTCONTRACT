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
  h3 {
    font-size: 28px;
  }
  li {
    font-size: 14px;
    line-height: 150%;
  }
`;
export const Layout = styled.div`
  width: 100%;
  position: relative;
  @media only screen and (max-width: 1280px) {
    margin-left: -70px;
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
  .view_video {
    width: 180px;
  }
  @media only screen and (max-width: 1024px) {
    top: 20%;
    width: 350px;
  }

  @media only screen and (max-width: 520px) {
    top: 10%;
    width: 300px;
    .view_video {
      width: 140px;
    }
  }
`;

export const BoxCoppyContrac = styled.div`
  width: 100%;
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
`;

export const ButnSubMit = styled.button`
  width: 100%;
  /* background-color: transparent; */
  /* color: var(--primary-color3) !important ; */
  /* transition: all 0.3s linear; */
  :hover {
    /* background-color: var(--primary-color3); */
    /* color: #fff !important ; */
  }
`;
