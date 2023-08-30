

export interface TokenProps {
  address: string;
  symbol: string;
  decimals: number;
  image: string;
}

export const addTokenToWallet = async (props: TokenProps) => {
  const { address, symbol, decimals, image } = props;
  // @ts-ignore
  const provider: any = (window as Window).ethereum
  try {
    const wasAdded = await provider.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address,
          symbol,
          decimals,
          image,
        },
      },
    });
    if (!wasAdded) {
      // Toast.success({
      //   type: "success",
      //   content: "Something went wrong.",
      //   className: "custom-class",
      //   duration: 2,
      // });
    }
  } catch (error: any) {
    // message.error({
    //   type: "error",
    //   content: error?.message,
    //   className: "custom-class",
    //   duration: 2,
    // });
  }
};
