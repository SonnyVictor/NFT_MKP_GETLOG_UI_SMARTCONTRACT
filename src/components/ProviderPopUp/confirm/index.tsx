import { createContext, useState, ReactNode, useEffect } from "react";
import styled from "styled-components";

interface GlobalState {
  [key: string]: any;
}

interface StoreContextValue {
  onClose: any;
  onOpen: any;
  OnLock: any;
  propsModal: any;
  getTotalTokent:any;
}

interface Props {
  children: ReactNode;
}

export const ModalConfirmContext = createContext<StoreContextValue | null>(
  null
);

export const ModalConfirmProvider: React.FC<Props> = ({ children }: Props) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [PopUp, setPopUp] = useState<ReactNode>(<></>);
  const [lock, OnLock] = useState(false);
  const [propsModal, setPropsModal] = useState(null);
  const [totalTokent , getTotalTokent] = useState<any>()
  const onOpen = (Modal: ReactNode, props: any) => {
    setIsShowModal(true);
    setPopUp(Modal);
    setPropsModal(props || null);
  };
  const onClose = () => {
    setIsShowModal(lock);
  };
  useEffect(() => {
    if (isShowModal) {
      document.body.classList.add("hidden");
    } else {
      document.body.classList.remove("hidden");
    }
  }, [isShowModal]);

  return (
    <ModalConfirmContext.Provider
      value={{
        onClose,
        onOpen,
        OnLock,
        propsModal,
        getTotalTokent,
      }}
    >
      <ModalLayout isShowModal={isShowModal}>
        {isShowModal && (
          <ModalOverlay
            onClick={() => {
              onClose();
            }}
          >
            <WrapperPopup
              onClick={(e: any) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              {PopUp}
            </WrapperPopup>
          </ModalOverlay>
        )}
        {children}
      </ModalLayout>
    </ModalConfirmContext.Provider>
  );
};

export const ModalLayout = styled.div<{ isShowModal?: boolean }>`
  width: 100vw;
  height: ${({isShowModal})=> isShowModal ? '100vh' : 'fit-content'};
  overflow: hidden;
`;

export const WrapperPopup = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  max-height: 100vh;
  padding: 40px 0px;
  scrollbar-width: none; /* Ẩn thanh trượt */
  scrollbar-color: transparent transparent; /* Ẩn màu của thanh trượt */
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0); /* Màu của thanh trượt */
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: transparent; /* Màu của thanh trượt khi di chuột qua */
  }
  @media only screen and (max-width: 743px) {
    width: 100%;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  background: rgba(24, 27, 129,0.3);
  backdrop-filter: blur(11.5px);
  transform: translateX(-50%) translateY(-50%);
  z-index: 1000;
  animation: 0.1s ease-in 0s 1 normal forwards running showPopup;
  @keyframes showPopup {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 743px) {
    padding: 0 6.25vw;
  }
`;

export const ConfirmPopup = styled.div`
  position: relative;
  width: 420px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  background-color: #010819;
  border-radius: 16px;
  margin: 0px 5px;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    margin: -2px;
    background-image: linear-gradient(
      265.98deg,
      #004eff -2.85%,
      #6bd0ff 101.88%
    );
    border-radius: 16px;
  }
  @media only screen and (max-width: 743px) {
    width: 100%;
    padding: 6.25vw;
  }
`;

export const BoxLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  img {
    max-width: 60px;
    max-height: 60px;
  }
  span {
    margin-left: 10px;
    line-height: 18px;
    font-size: 20px;
    font-family: OrbitronRegular;
    font-weight: 600;
  }
  @media only screen and (max-width: 743px) {
    margin-bottom: 9.375vw;
    svg {
      width: 10.6vw;
      height: 9.3vw;
    }
    span {
      line-height: 5.6vw;
      margin-left: 3.125vw;
      font-size: 6.25vw;
    }
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 280px;
  margin: 0 auto;
  button {
    position: relative;
    width: 128px;
    height: 48px;
    padding: 5px;
    background: #010819;
    border: 2px solid #015bea;
    border-radius: 16px;
    font-size: 18px;
    color: #fff;
    outline: none;
    transition: background 0.25s, font-weight 0.25s;
    cursor: pointer;
    &:hover {
      font-weight: 700;
      background: var(--succses,linear-gradient(0deg,#00b59c 0%,#9cffac 100%));
    }
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  @media only screen and (max-width: 743px) {
    max-width: 87.5vw;
    button {
      width: 40vw;
      height: 15vw;
      font-size: 5.6vw;
      &:not(:last-child) {
        margin-right: 3.125vw;
      }
    }
  }
`;

export const ConfirmTitle = styled.p`
  margin-bottom: 60px;
  font-size: 18px;
  text-align: center;
  @media only screen and (max-width: 743px) {
    margin-bottom: 18.75vw;
    font-size: 5.6vw;
  }
`;
