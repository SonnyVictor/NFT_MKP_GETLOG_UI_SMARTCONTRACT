import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import useConnectWallet from "./useConnectWallet";
import { NetworkContextName } from "../constants/index";

export default function useActiveWeb3React() {
  const context = useWeb3React();
  const contextNetwork = useWeb3React(NetworkContextName);

  const { active, error } = useWeb3React();

  const { walletLogin } = useConnectWallet();

  useEffect(() => {
    const hasSignedIn = Boolean(window.localStorage.getItem("accountStatus"));
    const connectorId = window.localStorage.getItem("connectorId");
    //@ts-ignore
    if (hasSignedIn && !active && !error) {
      walletLogin(connectorId);
    }
  }, [active]);

  return context.active ? context : contextNetwork;
}
