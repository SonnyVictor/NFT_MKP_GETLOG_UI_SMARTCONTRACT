import { ethers } from "ethers";
import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useCallback,
} from "react";
import { useActiveWeb3React } from "../hooks";
import { getProviderOrSigner } from "../integrateContract/contract";

const FAST_INTERVAL = 10000;
const SLOW_INTERVAL = 60000;

const RefreshContext = createContext({
  slow: 0,
  fast: 0,
  actionConnect: false,
  handleActionConnect: () => {},
});

// Check if the tab is active in the user browser
const useIsBrowserTabActive = () => {
  const isBrowserTabActiveRef = useRef(true);

  useEffect(() => {
    const onVisibilityChange = () => {
      isBrowserTabActiveRef.current = !document.hidden;
    };

    window.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return isBrowserTabActiveRef;
};

// This context maintain 2 counters that can be used as a dependencies on other hooks to force a periodic refresh
// @ts-ignore
const RefreshContextProvider = ({ children }) => {
  const [slow, setSlow] = useState(0);
  const [fast, setFast] = useState(0);
  const isBrowserTabActiveRef = useIsBrowserTabActive();
  const [actionConnect, setActionConnect] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [chainIdConnect, setChainIdConnect] = useState(204);
  const [getOpBnbBalance, setGetOpBnbBalance] = useState(0);
  const { account } = useActiveWeb3React();
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [showContentModal, setShowContentModal] = useState(true);
  const handleCheckNetWork = async () => {
    const provider = await getProviderOrSigner(false);
    const network = await provider.getNetwork();
    setChainIdConnect(network.chainId);

    setIsLoadingModal(true);
    setShowContentModal(false);
    try {
      if (network.chainId !== 204) {
        await window.ethereum
          .request({
            method: "wallet_switchEthereumChain",
            params: [
              {
                chainId: "0xcc",
              },
            ],
          })
          .then(() => setActionConnect(true))
          .then(() => setIsLoadingModal(false))
          .then(() => setShowContentModal(true))
          .then(() => window.location.reload());
      } else {
        return;
      }
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum
            .request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0xcc",
                  nativeCurrency: {
                    name: "opBNB Mainnet",
                    decimals: 18,
                    symbol: "BNB",
                  },
                  chainName: "opBNB Mainnet",
                  rpcUrls: ["https://opbnb-mainnet-rpc.bnbchain.org"],
                },
              ],
            })
            .then(() => setActionConnect(true))
            .then(() => setIsLoadingModal(false))
            .then(() => setShowContentModal(true))
            .then(() => {
              window.location.reload();
            });
        } catch (error) {}
      }
    }
  };

  const handleGetOpBnbBalance = async () => {
    try {
      const provider = await getProviderOrSigner(false);
      const balance = await provider.getBalance(account.toString());
      setGetOpBnbBalance(balance.toString());
    } catch (error) {
      console.log("Error", error);
    }
  };
  const handleChangeChainChanged = useCallback(() => {
    handleCheckNetWork();
  }, []);

  useEffect(() => {
    // handleCheckNetWork();
    handleGetOpBnbBalance();
  }, []);
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", handleChangeChainChanged);
    }
    return () => {
      window.ethereum?.removeListener("chainChanged", handleChangeChainChanged);
    };
  }, [handleChangeChainChanged]);

  const handleActionConnect = () => {
    setActionConnect(true);
    handleCheckNetWork();
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      if (isBrowserTabActiveRef.current) {
        setFast((prev) => prev + 1);
      }
    }, FAST_INTERVAL);
    return () => clearInterval(interval);
  }, [isBrowserTabActiveRef]);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (isBrowserTabActiveRef.current) {
        setSlow((prev) => prev + 1);
      }
    }, SLOW_INTERVAL);
    return () => clearInterval(interval);
  }, [isBrowserTabActiveRef]);

  return (
    <RefreshContext.Provider
      value={{
        slow,
        fast,
        actionConnect: actionConnect,
        handleActionConnect: handleActionConnect,
        handleCheckNetWork,
        chainIdConnect,
        handleGetOpBnbBalance,
        getOpBnbBalance,
        isLoadingModal,
        showContentModal,
      }}
    >
      {children}
    </RefreshContext.Provider>
  );
};

export { RefreshContext, RefreshContextProvider };
