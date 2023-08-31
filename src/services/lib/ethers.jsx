import { ethers } from "ethers";

export async function getProvider() {
  // Modern dapp browsers...
  if (window.ethereum) {
    try {
      // Request account access from the user
      await window.ethereum.request({ method: "eth_requestAccounts" });
      return new ethers.providers.Web3Provider(window.ethereum);
    } catch (error) {
      //throw new Error("User rejected MetaMask connection");
    }
  }

  // Legacy dapp browsers...
  else if (window.web3) {
    return new ethers.providers.Web3Provider(window.web3.currentProvider);
  }

  // Non-dapp browsers...
  else {
    ///throw new Error("No Ethereum provider found");
  }
}
