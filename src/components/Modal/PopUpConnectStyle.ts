import styled from "styled-components";

export const Container = styled.div`
    max-width: 700px;
`
export const BoxModal = styled.div<{ isactive?: boolean }>`
  position: relative;
  width: 100%;
  max-width: ${({ isactive }) => (isactive ? "480px" : "746px")};
  margin: 0 auto;
  border-radius: 12px;
  border: 1px solid var(--gray-200, #e5e7eb);
  background: var(--light-background, #fff);
`;

export const BoxPd = styled.div`
  position: relative;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  h6 {
    color: var(--content-text-low-contrast, #767676);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`;

export const BoxPdDisconnect = styled.div`
  padding: 24px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media only screen and (max-width: 744px) {
    padding: 12px 16px 16px;
  }
`;

export const BoxModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  h5 {
    color: var(--content-text-low-contrast, #767676);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const BoxModalDisConnect = styled.div`
  width: 100%;
  p {
    color: var(--content-text-low-contrast, #767676);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  span {
    color: var(--content-danger-message, #f14947);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
  div {
    display: flex;
    justify-content: flex-end;
  }
  button {
    margin-left: auto;
    margin-right: 0px;
    color: var(--white, #fff);
    /* text-sm/font-medium */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    padding: 10px 20px;
    border-radius: 66px;
    background: var(--content-danger-message, #f14947);
    border: none;
  }
`;

export const ModalText = styled.p`
  font-family: PlayRegular;
  font-size: 20px;
  line-height: 31px;
  display: flex;
  align-items: center;
  color: #ffffff;
  text-transform: uppercase;
`;

export const BoxHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
    background: linear-gradient(227.3deg, #8a208c 0%, #181b81 100.84%);
    background-size: 150%;
    background-position: center;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  button {
    background: none;
    border: none;
  }
  h6 {
    color: var(--dark-background, #13141d);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 36px */
    letter-spacing: -0.24px;
  }
  @media only screen and (max-width: 744px) {
    padding: 12px 16px ;
  }
`;