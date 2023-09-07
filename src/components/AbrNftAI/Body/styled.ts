import styled from "styled-components";

export const Wapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  min-height: calc(100vh - 127px);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding-top: 130px;
  padding-bottom: 50px;
  /* :before {
    width: 100%;
    height: 100%;
    content: "";
    background: linear-gradient(
      180deg,
      #2d2e37 0%,
      #2d2e37 10.75%,
      rgba(0, 0, 0, 0.747483) 100%
    );
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
  } */
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
