import styled from "styled-components";

export const Wapper = styled.div`
  width: 50%;
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 133%;
    letter-spacing: -0.02em;
    color: #fff;
    margin-bottom: 26px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ImgBox = styled.div<{ imgs?: boolean }>`
  max-height: 965px;
  max-width: 965px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  div {
    width: ${({ imgs }) => (imgs ? "calc((100% - 15px) / 2 )" : "auto")};
    position: relative;
    input {
      position: absolute;
      width: 30px;
      height: 30px;
      background-color: transparent;
      border: none;
      top: 10px;
      right: 10px;
      appearance: none;
      cursor: pointer;
      &:before {
        content: "";
        display: block;
        position: absolute;
        width: 16px;
        height: 16px;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 50%;
        background-color: #1ce4ff;
      }
      &:checked {
        &:after {
          content: "";
          display: block;
          width: 28.33%;
          height: 50.66%;
          border: solid black;
          border-width: 0 4px 4px 0;
          top: 50%;
          left: 50%;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: translateX(-50%) translateY(-60%) rotate(45deg);
          position: absolute;
        }
      }
    }
    label {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
    }
  }
  img {
    border-radius: 8px;
    border: 2px dashed #f612d1;
  }
`;
export const BoxBtnGroup = styled.div<{
  downloadable?: boolean;
  maybeMint?: boolean;
}>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  p {
    width: 100%;
    margin-top: 16px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 217%;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #fff;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: calc((100% - 15px) / 2);
    max-width: 264px;
    height: 56px;
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
    @keyframes pulsate {
      100% {
          box-shadow:
          0 0 0.4px #fff,
          0 0 1.1px #fff,
          0 0 1.9px #fff,
          0 0 4px #181b81,
          0 0 8px #181b81,
          0 0 9px #181b81,
          0 0 10px #181b81,
          0 0 15px #181b81;
      }
      0% {
        box-shadow:
        0 0 0.2px #fff,
        0 0 0.4px #fff,
        0 0 0.6px #fff,
        0 0 1px #181b81,
        0 0 4.5px #181b81,
        0 0 5.5px #181b81,
        0 0 7px #181b81,
        0 0 8px #181b81;
      }
    }
    :nth-child(2) {
      border: 1px solid ${({ downloadable }) =>
        downloadable ? "#181b81" : "#fff"};
      ${({ downloadable }) =>
        downloadable ? "animation: pulsate 1.5s infinite alternate;" : ""}
      cursor: ${({ downloadable }) => (downloadable ? "pointer" : "no-drop")};
    }
    :nth-child(3) {
      border: 1px solid ${({ maybeMint }) =>
        maybeMint ? "#181b81" : "#fff"};
      ${({ maybeMint }) =>
        maybeMint ? "animation: pulsate 1.5s infinite alternate;" : ""}
      cursor: ${({ maybeMint }) => (maybeMint ? "pointer" : "no-drop")};
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      width: 100%;
    }
  }
`;
