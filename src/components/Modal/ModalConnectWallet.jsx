import {
  Container,
  BoxModal,
  BoxHeader,
  BoxPd,
  BoxModalContent,
  BoxPdDisconnect,
  BoxModalDisConnect,
} from "./PopUpConnectStyle";
import { NEED_A_PLACEHOLDER, WALLET_LIST } from "../../constants";
import React, {useContext} from "react";
import { ModalConfirmContext } from "../ProviderPopUp/confirm";
import { useWeb3React } from "@web3-react/core";
import WalletItem from "../Connect-wallet/WalletItem";
import { useConnectWallet } from "../../hooks";
export const ConnectPopUp = () => {
    const {onClose} = useContext(ModalConfirmContext);
    const { walletLogin , walletLogout } = useConnectWallet();
    const context = useWeb3React();
    const { active, error } = context;
    const walletItemClass = "w-1/3 flex-auto mb-0.5 p-0.5 last:bg-transparent";
    const handleConnect = async (connectorId: string) => {
        try {
          const rs = await walletLogin(connectorId);
          localStorage.setItem("isCheck", "1");
          onClose?.();
        } catch (e) {
          console.error("Login failed");
        }
      };
      const handleDisconnect = () => {
        walletLogout();
        onClose?.();
      };
  return (
    <Container>
      <BoxModal isactive={active}>
        <>
          {active ? (
            <BoxHeader>
              <h6>Disconnect wallet</h6>
              <button onClick={onClose}>
                <img src="/assets/images/closeIconC3.svg" alt="" />
              </button>
            </BoxHeader>
          ) : (
            <BoxHeader>
              <p>Connect wallet</p>
              <button onClick={onClose}>
                <img src="/assets/images/closeIconC3.svg" alt="" />
              </button>
            </BoxHeader>
          )}
        </>
        {!active ? (
          <BoxPd>
            <h6>
              Connect with one of our available wallet providers or create a new
              one.
            </h6>
            <BoxModalContent>
              {WALLET_LIST.map((wallet) => {
                if (
                  wallet.title === "Metamask" &&
                  !window?.ethereum &&
                  !window?.ethereum?.isMetaMask
                ) {
                  return (
                    <WalletItem
                      className={`cus-wallet`}
                      onClick={() => {
                        window.location.href = `https://metamask.app.link/${window.location.hostname}${window.location.pathname}`;
                      }}
                      key={wallet.title}
                      icon={<wallet.icon width="32px" />}
                      title={wallet.title}
                      isPopular={true}
                    />
                  );
                } else {
                  return (
                    <WalletItem
                      className={`cus-wallet`}
                      key={wallet.title}
                      onClick={() => {
                        handleConnect(wallet.connectorId);
                      }}
                      icon={<wallet.icon width="32px" />}
                      title={wallet.title}
                      isPopular={wallet.title === "Metamask" ? true : false}
                    />
                  );
                }
              })}
              {NEED_A_PLACEHOLDER && <div className={walletItemClass} />}
              <h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <path
                    d="M4.79967 5.75C5.11992 5.07042 5.98383 4.58333 7 4.58333C8.28917 4.58333 9.33333 5.36675 9.33333 6.33333C9.33333 7.15 8.58783 7.83542 7.57983 8.02908C7.26367 8.08975 7 8.34408 7 8.66667M7 10.4167H7.00583M12.25 7.5C12.25 8.18944 12.1142 8.87213 11.8504 9.50909C11.5865 10.146 11.1998 10.7248 10.7123 11.2123C10.2248 11.6998 9.64605 12.0865 9.00909 12.3504C8.37213 12.6142 7.68944 12.75 7 12.75C6.31056 12.75 5.62787 12.6142 4.99091 12.3504C4.35395 12.0865 3.7752 11.6998 3.28769 11.2123C2.80018 10.7248 2.41347 10.146 2.14963 9.50909C1.8858 8.87213 1.75 8.18944 1.75 7.5C1.75 6.10761 2.30312 4.77226 3.28769 3.78769C4.27226 2.80312 5.60761 2.25 7 2.25C8.39239 2.25 9.72774 2.80312 10.7123 3.78769C11.6969 4.77226 12.25 6.10761 12.25 7.5Z"
                    stroke="#767676"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Why do I need to connect with my wallet?
              </h5>
            </BoxModalContent>
          </BoxPd>
        ) : (
          <BoxPdDisconnect>
            <BoxModalDisConnect>
              <p>This account will be removed from the Wallet.</p>
              <span>Still Disconnect?</span>
            </BoxModalDisConnect>
            <BoxModalDisConnect>
              <div>
                <button
                  onClick={() => {
                    handleDisconnect();
                  }}
                >
                  Yes, disconnect
                </button>
              </div>
            </BoxModalDisConnect>
          </BoxPdDisconnect>
        )}
      </BoxModal>
    </Container>
  );
};
