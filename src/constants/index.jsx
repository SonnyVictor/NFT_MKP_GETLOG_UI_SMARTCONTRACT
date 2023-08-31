import {
  BinanceWallet,
  Metamask,
  TrustWallet,
  WalletConnect,
} from "../components/icons";

export const NetworkContextName = "NETWORK";

export const CHAIN_ID_MARKET_TESTNET = 421613;
export const arb_Address_MarketPlace_TestNet_Contract = {
  421613: "0xA7eD1dEb29fd0B39E72026de4e0730Da103AD8E8",
};
export const arb_Address_NFT_LUFFY_TESTNET_CONTRACT = {
  421613: "0x21e02De785De12eE13591fa80DC4e06A350415B4",
};
export const MAPPING_CHAINID: any = {
  bep: "0x38",
  erc: "0x1",
  poly: "0x89",
  arb: "0xa4b1",
  opbnb: "0xcc",
  beptest: "0x61",
};
export const CHAINID_CONVERT: any = {
  56: "bep",
  1: "erc",
  137: "poly",
  66: "okc",
  42161: "arb",
  204: "opbnb",
  97: "beptest",
};

// wallet list
export const WALLET_LIST = [
  { icon: Metamask, title: "Meta Mask", connectorId: "injected" },
  // {
  //   icon: BinanceWallet,
  //   title: "Binance chain",
  //   connectorId: "bsc",
  // },
  {
    icon: WalletConnect,
    title: "Wallet Connect",
    connectorId: "walletconnect",
  },
  // { icon: TrustWallet, title: "Trust Wallet", connectorId: "walletconnect" },
];
export const NEED_A_PLACEHOLDER = WALLET_LIST.length % 2 !== 0;

export const NETWORK_CHAIN_ID: number = parseInt(
  process.env.REACT_APP_CHAIN_ID ?? "56"
);
export const SC_MULTISEND: any = {
  // 56: "0x821847762E8B67b264c83DA33DF0bD523629Faa2", // no fee
  // 97: "0xdA58a41854a6B6b9cf4b24D81b59d5Fa111C83Ec", // no fee
  56: "0x4675d6D1A8949173456567CA245f479AFBAaD2Be",
  97: "0x1FCc22c7E65B3104C86c8e66775728D47dCb1DDD",
};
export const SC_MULTISEND_TOKEN_and_FEE: any = {
  56: "0x35Be25d0998f85F4f8980906d126bfA373097d20",
  42161: "0xb38848c16b47e667c9a53e4da9da8f2e54043e3f",
  97: "0x9f7F65eb3EC2FFe73511397226aDa953b8E20eaD",
  1: "0xB6bE4054731c09b2CFc30711f503C2307Ba28CBf"
};

export const SCAN_URL: any = {
  56: "https://bscscan.com",
  42161: "https://arbiscan.io",
  204: "https://mainnet.opbnbscan.com/",
  97: "https://testnet.bscscan.com",
  1: "https://etherscan.io"
};
export const HTTPS_NETWORK: any = {
  56: "https://bsc-dataseed.binance.org/",
  42161: "https://arb1.croswap.com/rpc",
  204: "https://opbnb-mainnet-rpc.bnbchain.org/",
  97: "https://data-seed-prebsc-1-s3.binance.org:8545",
  1: "https://mainnet.infura.io/v3/ffba1579926a470e98adb34ffb50bd4d",
};