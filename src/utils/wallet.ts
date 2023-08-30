
const switchNetwork = async (chainId:any) => {
  // @ts-ignore
  const provider: any = (window as Window).ethereum
  if (provider) {
    try {
      if (provider?.selectedAddress && chainId) {
        await provider
            .request({
              method: 'wallet_switchEthereumChain',
              params: [
                {
                  chainId,
                },
              ],
            })
            .then((res:any) => {
              return true
            })
      }
    } catch (switchError:any) {
      if (switchError.code === 4902) {
        try {
          if (chainId === '0x89') {
            await provider.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainName: 'Polygon Chain Mainnet',
                  chainId: '0x89',
                  rpcUrls: ["https://polygon-rpc.com"],
                  nativeCurrency: {
                    name: 'MATIC',
                    symbol: 'MATIC',
                    decimals: 18
                  },
                  blockExplorerUrls: ["https://polygonscan.com/"],
                },
              ],
            });
          } else
          if (chainId === '0x250') {
            await provider.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainName: 'Fantom Opera',
                  chainId: '250',
                  rpcUrls: ["https://rpcapi.fantom.network"],
                  nativeCurrency: {
                    name: 'FTM',
                    symbol: 'FTM',
                    decimals: 18
                  },
                  blockExplorerUrls: ["https://ftmscan.com/"],
                },
              ],
            });
          }
          else if (chainId === "0xa4b1") {
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
             
            });
          } 
          else
          if (chainId === '0xa86a') {
            await provider.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainName: 'Avalanche Network',
                  chainId: '0xa86a',
                  rpcUrls: ["https://snowtrace.io/"],
                  nativeCurrency: {
                    name: 'AVAX',
                    symbol: 'AVAX',
                    decimals: 18
                  },
                  blockExplorerUrls: ["https://avascan.info/"],
                },
              ],
            });
          }
          else if (chainId === '0x1') {
            await provider.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainName: 'Ethereum Chain Mainnet',
                  chainId: '0x1',
                  rpcUrls: ["https://mainnet.infura.io/v3"],
                  nativeCurrency: {
                    name: 'ETH',
                    symbol: 'ETH',
                    decimals: 18
                  },
                  blockExplorerUrls: ["https://etherscan.io/"],
                },
              ],
            });
          } else  {
            await provider.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainName: 'BNB Chain Mainnet',
                  chainId: '0x38',
                  rpcUrls: ["https://bsc-dataseed.binance.org"],
                  nativeCurrency: {
                    name: 'BNB',
                    symbol: 'BNB',
                    decimals: 18
                  },
                  blockExplorerUrls: ["https://bscscan.com/"],
                },
              ],
            });
          }
        } catch (addError) {
          console.error(addError);
        }
      }
      console.error(switchError);
    }
  } else {
    // console.error("Can't setup the BSC network on metamask because window.ethereum is undefined")
  }
};

export default switchNetwork