import { ethers } from "ethers";
import ABI_NFT_LUFFY from "../ABI/OPBNB_NFT_Lufffy_ABI.json";
import ABI_MKP_LISTBUYSELL from "../ABI/OPBNB_MKP_BuySell_Contract_ABI.json";

export const address_NFT_LUFFY_OPBNB_TESTNET =
  "0x304e964DdbAa4517118d1d7D500b773998374B63";
export const address_MKP_LISTBUYSELL_OPBNB_TESTNET =
  "0x85F0BE0D4827027473925eeC6704E25E846E99f7";

export const getProviderOrSigner = async (needSigner = false) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  if (needSigner) {
    const signer = provider.getSigner();
    return signer;
  }
  return provider;
};

export const ContractNFT = async (address_NFT_Chain, abi_NFT_Chain) => {
  try {
    const provider = await getProviderOrSigner(false);
    const contract = new ethers.Contract(
      address_NFT_Chain,
      abi_NFT_Chain,
      provider
    );

    return contract;
  } catch (error) {
    console.log("error contractNFT", error);
  }
};
export const SignerContractNFT = async (address_NFT_Chain, abi_NFT_Chain) => {
  try {
    const provider = await getProviderOrSigner(true);
    const contract = new ethers.Contract(
      address_NFT_Chain,
      abi_NFT_Chain,
      provider
    );

    return contract;
  } catch (error) {
    console.log("error contractNFT", error);
  }
};

export const contractMarketPlace = async (address_MKP_Chain, abi_MKP_Chain) => {
  try {
    const provider = await getProviderOrSigner(false);
    const contractMKP = new ethers.Contract(
      address_MKP_Chain,
      abi_MKP_Chain,
      provider
    );
    return contractMKP;
  } catch (error) {}
};

export const getTokenURI = async (id, address_NFT_Chain, abi_NFT_Chain) => {
  try {
    const contract = await ContractNFT(address_NFT_Chain, abi_NFT_Chain);
    const getURI = await contract.tokenURI(id);
    return getURI;
  } catch (error) {
    console.log("Error getTokenURI", error);
  }
};

export const getNameNFT = async (address_NFT_Chain, abi_NFT_Chain) => {
  try {
    const contract = await ContractNFT(address_NFT_Chain, abi_NFT_Chain);
    const nameNft = await contract.name();
    return nameNft.toString();
  } catch (error) {
    console.log("error contract getImageNFT", error);
  }
};

export const getSymbolNFT = async (address_NFT_Chain, abi_NFT_Chain) => {
  try {
    const contract = await ContractNFT(address_NFT_Chain, abi_NFT_Chain);
    const symbolNft = await contract.symbol();
    return symbolNft.toString();
  } catch (error) {
    console.log("error contract getImageNFT", error);
  }
};

export const getImageNFT = async (
  tokenID,
  address_NFT_Chain,
  abi_NFT_Chain
) => {
  try {
    const provider = await getProviderOrSigner(false);
    const contract = new ethers.Contract(
      address_NFT_Chain,
      abi_NFT_Chain,
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
  tokenId,
  address_NFT_Chain,
  abi_NFT_Chain
) => {
  try {
    const provier = await getProviderOrSigner(false);
    const signer = await getProviderOrSigner(true);
    const contract = new ethers.Contract(
      address_NFT_Chain,
      abi_NFT_Chain,
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

export const listSellContractNFT = async (
  tokenId,
  price,
  time,
  address_MKP_Chain,
  abi_MKP_Chain
) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      address_MKP_Chain,
      abi_MKP_Chain,
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

export const getAllValueMarketPlace = async (
  address_MKP_Chain,
  abi_MKP_Chain
) => {
  try {
    const provider = await getProviderOrSigner(false);

    const contractMarketPlace = new ethers.Contract(
      address_MKP_Chain,
      abi_MKP_Chain,
      provider
    );
    const getAllValue = contractMarketPlace.fetchMarketplaceItems();
    return getAllValue;
  } catch (error) {
    console.log("error contractNFT", error);
  }
};

export const setbuyNFT = async (
  tokenId,
  valuePrice,
  address_MKP_Chain,
  abi_MKP_Chain
) => {
  try {
    const provider = await getProviderOrSigner(false);
    const signer = await getProviderOrSigner(true);
    const contractMarketPlace = new ethers.Contract(
      address_MKP_Chain,
      abi_MKP_Chain,
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

export const unListNFT = async (id, address_MKP_Chain, abi_MKP_Chain) => {
  try {
    const signer = await getProviderOrSigner(true);
    const contractMKP = new ethers.Contract(
      address_MKP_Chain,
      abi_MKP_Chain,
      signer
    );
    await contractMKP.unListNftOnSale(id);
  } catch (error) {
    console.log("Error", error);
  }
};

export const upDatePriceNFTMarketPlace = async (
  id,
  price,
  address_MKP_Chain,
  abi_MKP_Chain
) => {
  try {
    const signer = await getProviderOrSigner(true);
    const contract = new ethers.Contract(
      address_MKP_Chain,
      abi_MKP_Chain,
      signer
    );
    const upPrice = await contract.updatePriceNftOnSale(id, price);

    await upPrice.wait();
  } catch (error) {
    console.log("Error", error);
  }
};

export const getEventEmitBuyNFTMKP = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const getDataTokenURI = async (
  tokenId,
  address_NFT_Chain,
  abi_NFT_Chain
) => {
  try {
    const contract = await ContractNFT(address_NFT_Chain, abi_NFT_Chain);
    const getActivity = await contract.tokenURI(tokenId);

    return getActivity;
  } catch (error) {}
};
