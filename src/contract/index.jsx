// import { ethers } from "ethers";

// import ARB_ABI_NFT_LUFFY_TESTNET from "../services/abi/arb_ABI_NFT_LUFFY_TESTNET.json";
// import ARB_ABI_MARKETPLACE_TESTNET from "../services/abi/arb_ABI_MarketPlace_TestNet.json";
// import {
//   CHAIN_ID_MARKET_TESTNET,
//   arb_Address_MarketPlace_TestNet_Contract,
//   arb_Address_NFT_LUFFY_TESTNET_CONTRACT,
// } from "../constants/index";

// // MarketPlace
// const addressMarketPlace_TestNet_Contract =
//   arb_Address_MarketPlace_TestNet_Contract[CHAIN_ID_MARKET_TESTNET];
// // NFT LUFFY
// const addressNFTLuffy_TestNet_Contract =
//   arb_Address_NFT_LUFFY_TESTNET_CONTRACT[CHAIN_ID_MARKET_TESTNET];

// export const getProviderOrSigner = async (needSigner = false) => {
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   if (needSigner) {
//     const signer = provider.getSigner();
//     return signer;
//   }
//   return provider;
// };

// export const ContractNFT = async () => {
//   try {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const contract = new ethers.Contract(
//       addressNFTLuffy_TestNet_Contract,
//       ARB_ABI_NFT_LUFFY_TESTNET,
//       provider
//     );

//     return contract;
//   } catch (error) {
//     console.log("error contractNFT", error);
//   }
// };

// export const approveContractNFT = async (
//   addressContractMarketPlace: any,
//   tokenId: any
// ) => {
//   try {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const contract = new ethers.Contract(
//       addressNFTLuffy_TestNet_Contract,
//       ARB_ABI_NFT_LUFFY_TESTNET,
//       signer
//     );
//     const gasPrice = await provider.getGasPrice();
//     const setApprove = await contract.approve(
//       addressContractMarketPlace,
//       tokenId,
//       {
//         gasPrice: gasPrice,
//       }
//     );
//     await setApprove.wait();
//   } catch (error) {
//     return error;
//   }
// };

// export const listSellContractNFT = async (
//   tokenId: any,
//   price: any,
//   time: any
// ) => {
//   try {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const contract = new ethers.Contract(
//       addressMarketPlace_TestNet_Contract,
//       ARB_ABI_MARKETPLACE_TESTNET,
//       signer
//     );
//     const gasPrice = await provider.getGasPrice();

//     const sell = await contract.createMarketplaceItem(tokenId, price, time, {
//       gasPrice: gasPrice,
//     });

//     await sell.wait();
//     return "Successfully posted for sale.";
//   } catch (error) {
//     console.log("listSellNFT", error);
//     return "Error posted for sale.";
//   }
// };

// export const contractMarketPlace = async () => {
//   try {
//     const provider = await getProviderOrSigner(false);
//     const contract = new ethers.Contract(
//       addressMarketPlace_TestNet_Contract,
//       ARB_ABI_MARKETPLACE_TESTNET,
//       provider
//     );

//     return contract;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getImageNFT = async (tokenID: any) => {
//   try {
//     const provider = await getProviderOrSigner(false);
//     const contract = new ethers.Contract(
//       addressNFTLuffy_TestNet_Contract,
//       ARB_ABI_NFT_LUFFY_TESTNET,
//       provider
//     );

//     const imgNft = await contract.genImgSVG(tokenID);
//     return imgNft;
//   } catch (error) {
//     console.log("error contract getImageNFT", error);
//   }
// };

// export const getNameNFT = async () => {
//   try {
//     const provider = await getProviderOrSigner(false);
//     const contract = new ethers.Contract(
//       addressNFTLuffy_TestNet_Contract,
//       ARB_ABI_NFT_LUFFY_TESTNET,
//       provider
//     );

//     const nameNft = await contract.name();
//     return nameNft.toString();
//   } catch (error) {
//     console.log("error contract getImageNFT", error);
//   }
// };

// // getALlValueMarketPlace
// export const getAllValueMarketPlace = async () => {
//   try {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const contract = new ethers.Contract(
//       addressMarketPlace_TestNet_Contract,
//       ARB_ABI_MARKETPLACE_TESTNET,
//       provider
//     );
//     const getAllValue = contract.fetchMarketplaceItems();
//     return getAllValue;
//   } catch (error) {
//     console.log("error contractNFT", error);
//   }
// };

// export const unListNFTMarketPlace = async (id: any) => {
//   try {
//     const signer = await getProviderOrSigner(true);
//     const provider = new ethers.providers.Web3Provider(window.ethereum);

//     const contract = new ethers.Contract(
//       addressMarketPlace_TestNet_Contract,
//       ARB_ABI_MARKETPLACE_TESTNET,
//       signer
//     );
//     const gasPrice = await provider.getGasPrice();

//     const unlistNFT = contract.unListNftOnSale(id, {
//       gasPrice: gasPrice,
//     });
//     await unlistNFT.wait();
//   } catch (error) {
//     console.log("Error contractNFT", error);
//   }
// };

// export const upDatePriceNFTMarketPlace = async (id: any, price: any) => {
//   try {
//     const signer = await getProviderOrSigner(true);
//     const contract = new ethers.Contract(
//       addressMarketPlace_TestNet_Contract,
//       ARB_ABI_MARKETPLACE_TESTNET,
//       signer
//     );
//     const upPrice = await contract.updatePriceNftOnSale(id, price);

//     await upPrice.wait();
//   } catch (error) {}
// };

// export const getTokenURI = async (id: any) => {
//   try {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const contract = new ethers.Contract(
//       addressNFTLuffy_TestNet_Contract,
//       ARB_ABI_NFT_LUFFY_TESTNET,
//       provider
//     );

//     const getURI = await contract.tokenURI(id);
//     return getURI;
//   } catch (error) {}
// };

// export const getEventDetail = async () => {
//   try {
//     // const signer = await getProviderOrSigner(true);
//     const provider = new ethers.providers.WebSocketProvider(
//       "wss://arb-goerli.g.alchemy.com/v2/YuLIDxmtnQ6FAWrnbTlItQe_fzFBjkQC"
//     );
//     // const txHash = await provider.getTransaction(transactionHash)
//     const contract = new ethers.Contract(
//       addressMarketPlace_TestNet_Contract,
//       ARB_ABI_MARKETPLACE_TESTNET,
//       provider
//     );
//     return contract;
//   } catch (error) {
//     console.log("getEventDetail", error);
//   }
// };

// export const fetchTransactionHistory = async () => {
//   try {
//     const etherscanProvider = new ethers.providers.EtherscanProvider();

//     return etherscanProvider;
//   } catch (error) {
//     console.log(error);
//   }
// };
