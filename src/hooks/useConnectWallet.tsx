import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { bsc, injected, walletconnect1 } from "../connectors";

export default function useConnectWallet() {
  const { connector, account, activate, deactivate, active, chainId }: any =
    useWeb3React();
  const [currentConnector, setCurrentConnector]: any = useState();
  const [currentConnectorId, setCurrentConnectorId] = useState();
  useEffect(() => {
    if (
      currentConnectorId &&
      currentConnector &&
      currentConnector === connector
    ) {
      // Activated
      if (account) {
        window.localStorage.setItem("accountStatus", "1");
        window.localStorage.setItem("connectorId", currentConnectorId);
        window.localStorage.setItem("currentAddress", account);

        // localStorage.setItem("chain", JSON.stringify(value));
        if (chainId === 204) {
          window.localStorage.setItem("chain", "opbnb");
        }
        // if (chainId === 56) {
        //   window.localStorage.setItem("chain", "bep");
        // }
        // if (chainId === 137) {
        //   window.localStorage.setItem("chain", "poly");
        // }
        // if (chainId === 42161) {
        //   window.localStorage.setItem("chain", "arb");
        // }
        // if (chainId === 204) {
        //   window.localStorage.setItem("chain", "opbnb");
        // }
      }
    }
  }, [account, currentConnectorId, currentConnector, connector, chainId]);

  async function walletLogin(connectorId: any) {
    let _connector;
    switch (connectorId) {
      case "walletconnect":
        _connector = walletconnect1;
        break;
      case "bsc":
        _connector = bsc;
        break;
      default:
        _connector = injected;
        break;
    }

    setCurrentConnectorId(connectorId);
    setCurrentConnector(_connector);
    !active && (await activate(_connector));
  }

  function walletLogout() {
    deactivate();
    window.localStorage.removeItem("accountStatus");
    window.localStorage.removeItem("connectorId");
    window.localStorage.removeItem("walletconnect");
    window.localStorage.removeItem("currentAddress");
  }

  return { walletLogin, walletLogout };
}
