import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { BscConnector } from "./bsc";
import { WalletConnector } from "./walletConnect";

const NETWORK_URL = process.env.REACT_APP_BSC_NETWORK_URL;
const NETWORK_CHAIN_ID = parseInt(process.env.REACT_APP_CHAIN_ID ?? "204");

export const walletconnect = new WalletConnectConnector({
  //@ts-ignore
  rpc: { [NETWORK_CHAIN_ID]: NETWORK_URL },
  infuraId: "8c05040c9f4748d489ab9a485bf52e06",
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: 15000,
});

export const walletconnect1 = new WalletConnector({
  supportedChainIds: [204, 7001, 42161],
});

export const injected = new InjectedConnector({
  supportedChainIds: [
    // 1, 3, 4, 5, 2000, 43114, 250, 10, 42, 56, 66, 97, 137, 5611, 42161, 204,
    // 80001,
    204, 7001, 56, 42161,
  ],
});

export const bsc = new BscConnector({
  supportedChainIds: [
    // 1, 3, 4, 5, 2000, 43114, 250, 10, 42, 56, 97, 137, 5611, 80001,
    204, 7001, 56, 42161,
  ],
});
