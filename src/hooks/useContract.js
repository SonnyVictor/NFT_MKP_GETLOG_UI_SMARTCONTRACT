import { Contract } from "@ethersproject/contracts";
import idoTokenClaimDailyAbi from "../pages/Ido/Abi/idoTokenClaimDaily.json";
import idoTokenClaimAbi from "../pages/Ido/Abi/idoTokenClaim.json";
import abiBoxMarket from "../pages/Ino/Abi/abiBoxMarket.json";
import abiOpenMyBox from "../pages/Ino/Abi/abiOpenMyBox.json";
import abiMyBox from "../pages/Ino/Abi/abiMyBox.json";
import NFT_ABI from "../constants/abis/nft.json";
import ERC20_ABI from "../constants/abis/erc20.json";
import NFTMARKET_ABI from "../constants/abis/nftmarket.json";

import abiSwap from "../abi/abiSwap.json";

import { useMemo } from "react";

import { getContract } from "../utils";

import { useActiveWeb3React } from "./index";
// returns null on errors
export function useContract(address, ABI, withSignerIfPossible = true) {
  const { library, account } = useActiveWeb3React();

  return useMemo(() => {
    if (!address || !ABI || !library) return null;
    try {
      return getContract(
        address,
        ABI,
        library,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
}

export function useIdoTokenClaimContract(scAddr, item) {
  return useContract(
    scAddr,
    item && item.claimRound === 100 ? idoTokenClaimDailyAbi : idoTokenClaimAbi
  );
}

export function useBoxMarketContract(address) {
  return useContract(address, abiBoxMarket, true);
}

export function useOpenMyBoxContract(address) {
  return useContract(address, abiOpenMyBox, true);
}

export function useMyBoxContract(address) {
  return useContract(address, abiMyBox, true);
}
export function useTokenContract(tokenAddress, withSignerIfPossible) {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible);
}
export function useTokenNFTContract(tokenAddress, withSignerIfPossible) {
  return useContract(tokenAddress, NFT_ABI, withSignerIfPossible);
}
export function useSwapContract(address) {
  return useContract(address, abiSwap, true);
}
