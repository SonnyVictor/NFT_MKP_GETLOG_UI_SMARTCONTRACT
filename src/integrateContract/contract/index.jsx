import { ethers } from "ethers";
import ABI_NFT_LUFFY from "../ABI/NFT_Lufffy_ABI.json";
import ABI_MKP_LISTBUYSELL from "../ABI/MKP_BuySell_Contract_ABI.json";

const address_NFT_LUFFY_OPBNB_TESTNET =
  "0x79592cD2CedAfcC7E0747814B2A9ec8044C5B400";
const address_MKP_LISTBUYSELL_OPBNB_TESTNET =
  "0xDEb4b362f392B6C6Fc57c9aDe349345A43e574C0";

export const getProviderOrSigner = async (needSigner = false) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  if (needSigner) {
    const signer = provider.getSigner();
    return signer;
  }
  return provider;
};

export const ContractNFT = async () => {
  try {
    const provider = await getProviderOrSigner(false);
    const contract = new ethers.Contract(
      address_NFT_LUFFY_OPBNB_TESTNET,
      ABI_NFT_LUFFY,
      provider
    );

    return contract;
  } catch (error) {
    console.log("error contractNFT", error);
  }
};

export const getTokenURI = async (id) => {
  try {
    const contract = await ContractNFT();
    const getURI = await contract.tokenURI(id);
    return getURI;
  } catch (error) {
    console.log("Error getTokenURI", error);
  }
};

export const getNameNFT = async () => {
  try {
    const contract = await ContractNFT();
    const nameNft = await contract.name();
    return nameNft.toString();
  } catch (error) {
    console.log("error contract getImageNFT", error);
  }
};

export const getImageNFT = async (tokenID) => {
  try {
    const provider = await getProviderOrSigner(false);
    const contract = new ethers.Contract(
      address_NFT_LUFFY_OPBNB_TESTNET,
      ABI_NFT_LUFFY,
      provider
    );

    const imgNft = await contract.genImgSVG(tokenID);
    return imgNft;
  } catch (error) {
    console.log("error contract getImageNFT", error);
  }
};

export const listSellContractNFT = async (tokenId, price, time) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      address_MKP_LISTBUYSELL_OPBNB_TESTNET,
      ABI_MKP_LISTBUYSELL,
      signer
    );
    const gasPrice = await provider.getGasPrice();

    const sell = await contract.createMarketplaceItem(tokenId, price, time, {
      gasPrice: gasPrice,
    });

    await sell.wait();
    return "Successfully posted for sale.";
  } catch (error) {
    console.log("listSellNFT", error);
    return "Error posted for sale.";
  }
};
