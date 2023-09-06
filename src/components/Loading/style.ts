import styled from "styled-components";

export const LoadingContainer = styled.span`
  width: 20px;
  height: 20px;
  border: 3px solid #fff;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  opacity: 0.5;
  :after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    background: #181b81;
    width: 8px;
    height: 8px;
    transform: translate(-50%, 50%);
    border-radius: 50%;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
