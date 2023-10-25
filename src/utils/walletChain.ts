/* eslint-disable react-hooks/rules-of-hooks */

const switchNetworkChain = async (chainId: any, value: any) => {
  // @ts-ignore
  const provider: any = (window as Window).ethereum;

  if (provider) {
    try {
      if (provider?.selectedAddress && chainId) {
        await provider
          .request({
            method: "wallet_switchEthereumChain",
            params: [
              {
                chainId,
              },
            ],
          })
          .then((res: any) => {
            localStorage.setItem("chain", value);
          });
      }
    } catch (switchError: any) {
      try {
        if (chainId === "0x89") {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainName: "Polygon Chain Mainnet",
                chainId: "0x89",
                rpcUrls: ["https://polygon-rpc.com"],
                nativeCurrency: {
                  name: "MATIC",
                  symbol: "MATIC",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://polygonscan.com/"],
              },
            ],
          });
        } else if (chainId === "0x1") {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainName: "Ethereum Chain Mainnet",
                chainId: "0x1",
                rpcUrls: ["https://mainnet.infura.io/v3"],
                nativeCurrency: {
                  name: "ETH",
                  symbol: "ETH",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://etherscan.io/"],
              },
            ],
          });
        } else if (chainId === "0x61") {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainName: "BNB Testnet",
                chainId: "0x61",
                rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
                nativeCurrency: {
                  name: "BNB",
                  symbol: "BNB",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://testnet.bscscan.com"],
              },
            ],
          });
        } else if (chainId === "0xa4b1") {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainName: "Arbitrum One",
                chainId: "0xa4b1",
                rpcUrls: ["https://arb1.arbitrum.io/rpc"],
                nativeCurrency: {
                  name: "Arbitrum One",
                  symbol: "ETH",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://arbiscan.io"],
              },
            ],
          });
        } 
        else if (chainId === "0xcc") {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainName: "opBNB Mainnet",
                chainId: "0xcc",
                rpcUrls: ["https://opbnb-mainnet-rpc.bnbchain.org/"],
                nativeCurrency: {
                  name: "opBNB Mainnet",
                  symbol: "BNB",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://mainnet.opbnbscan.com/"],
              },
            ],
          });}
          else if(chainId === "0x1b59"){
            await provider.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainName: "opBNB Mainnet",
                  chainId: "0xcc",
                  rpcUrls: ["https://opbnb-mainnet-rpc.bnbchain.org/"],
                  nativeCurrency: {
                    name: "opBNB Mainnet",
                    symbol: "BNB",
                    decimals: 18,
                  },
                  blockExplorerUrls: ["https://mainnet.opbnbscan.com/"],
                },
              ],
            })
          }
        else {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainName: "BNB Chain Mainnet",
                chainId: "0x38",
                rpcUrls: ["https://bsc-dataseed.binance.org"],
                nativeCurrency: {
                  name: "BNB",
                  symbol: "BNB",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://bscscan.com/"],
              },
            ],
          });
        }
        return false;
      } catch (addError) {
        console.error(addError);
        return false;
      }
      console.error(switchError);
      return false;
    }
  } else {
    return false;
  }
};

export default switchNetworkChain;
