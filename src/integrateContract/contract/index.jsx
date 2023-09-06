import { ethers } from "ethers";
import ABI_NFT_LUFFY from "../ABI/NFT_Lufffy_ABI.json";
import ABI_MKP_LISTBUYSELL from "../ABI/MKP_BuySell_Contract_ABI.json";

const address_NFT_LUFFY_OPBNB_TESTNET =
  "0x79592cD2CedAfcC7E0747814B2A9ec8044C5B400";
export const address_MKP_LISTBUYSELL_OPBNB_TESTNET =
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

export const getSymbolNFT = async () => {
  try {
    const contract = await ContractNFT();
    const symbolNft = await contract.symbol();
    return symbolNft.toString();
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

export const approveContractNFT = async (
  addressContractMarketPlace,
  tokenId
) => {
  try {
    const provier = await getProviderOrSigner(false);
    const signer = await getProviderOrSigner(true);
    const contract = new ethers.Contract(
      address_NFT_LUFFY_OPBNB_TESTNET,
      ABI_NFT_LUFFY,
      signer
    );
    const gasPrice = await provier.getGasPrice();
    const setApprove = await contract.approve(
      addressContractMarketPlace,
      tokenId,
      {
        gasPrice: gasPrice,
      }
    );
    await setApprove.wait();
  } catch (error) {
    return error;
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

export const getAllValueMarketPlace = async () => {
  try {
    const provider = await getProviderOrSigner(false);

    const contractMarketPlace = new ethers.Contract(
      address_MKP_LISTBUYSELL_OPBNB_TESTNET,
      ABI_MKP_LISTBUYSELL,
      provider
    );
    const getAllValue = contractMarketPlace.fetchMarketplaceItems();
    return getAllValue;
  } catch (error) {
    console.log("error contractNFT", error);
  }
};

export const setbuyNFT = async (tokenId, valuePrice) => {
  try {
    const provider = await getProviderOrSigner(false);
    const signer = await getProviderOrSigner(true);
    const contractMarketPlace = new ethers.Contract(
      address_MKP_LISTBUYSELL_OPBNB_TESTNET,
      ABI_MKP_LISTBUYSELL,
      signer
    );
    const gasPrice = await provider.getGasPrice();
    const buy = await contractMarketPlace.buyNft(tokenId, {
      gasPrice: Number(gasPrice) * 1,
      gasLimit: 300000,
      value: ethers.utils.parseEther(valuePrice.toString()),
    });

    await buy.wait();
    return "Successfully buyNFT";
  } catch (error) {
    console.log("error", error);
  }
};
