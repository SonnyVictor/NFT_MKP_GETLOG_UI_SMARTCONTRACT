import HeaderStyle2 from "../components/header/HeaderStyle2";
import {
  Container,
  ContentBox,
  Layout,
  GifLayout,
  BoxCoppyContrac,
  ButnSubMit,
  BoxCoppyContracMb,
} from "./MinNftStyle";
import { ToastContainer, toast } from "react-toastify";
import { useState, useMemo, useEffect, useContext } from "react";
import { getProvider } from "../services/lib/ethers";
import { ethers } from "ethers";
import { useActiveWeb3React } from "../hooks";
import { ModalConfirmContext } from "../components/ProviderPopUp/confirm";
import { ConnectPopUp } from "../components/Modal/ModalConnectWallet";
import {
  SignerContractNFT,
  address_NFT_LUFFY_OPBNB_TESTNET,
} from "../integrateContract/contract";
import "react-toastify/dist/ReactToastify.css";

const ContractMint = address_NFT_LUFFY_OPBNB_TESTNET;

const MinNft = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [local, setLocal] = useState("");
  const [total, setTotal] = useState(0);
  const [copySuccess, setCopySuccess] = useState("");
  const { onOpen } = useContext(ModalConfirmContext);
  const [isLoading, setIsLoading] = useState(false);

  const changeTotal = (value) => {
    setTotal(value);
  };

  const { account } = useActiveWeb3React();

  const TitleMint = useMemo(() => {
    if (account) {
      if (isLoading) {
        return "Loading...";
      } else {
        return "Mint NFT";
      }
    } else {
      return "Connect Wallet";
    }
  }, [account, isLoading]);

  const copyToClipboard = async (text) => {
    if (!navigator.clipboard) {
      return alert("Your browser does not support clipboard copy.");
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("copied!");
    } catch (err) {
      setCopySuccess("Cannot copy!");
    }
  };

  const handleClickSubmit = async () => {
    if (account) {
      setIsLoading(true);
      const contract = await SignerContractNFT();
      contract
        .mint()
        .then((res) => {
          setIsLoading(false);
          toast("Mint Nft successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch((err) => {
          if (err && err.code === 4001) {
            toast.error("You rejected transaction", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            toast.error(
              "An error occurred while processing your request. Please try again later.",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              }
            );
          }
          setIsLoading(false);
        });
    } else {
      onOpen(<ConnectPopUp />);
    }
  };

  return (
    <div>
      <HeaderStyle2 />
      <Container>
        <ContentBox>
          <Layout>
            <GifLayout>
              <img src="./assets/images/backgroundMint.png" alt="" />
            </GifLayout>
          </Layout>
          <div style={{ width: "100%", position: "relative" }}>
            <div style={{ maxWidth: "600px", margin: "0px auto" }}>
              <h3 style={{ paddingBottom: "12px" }}>XRender #???</h3>
              <ul>
                <div style={{ paddingBottom: "12px" }}>
                  <li>
                    XRender - a unique collection of NFT art inspired by the
                    Luffy. With only 9,000 limited works available, each piece
                    of art is powered by AI technology. The first XRenderNFT
                    collection will be distributed to all users on the opBNB
                    ecosystem.
                  </li>
                </div>
                <div style={{ paddingBottom: "12px" }}>
                  <li>
                    They are a collection of 9,000 NFTs made up of each of the
                    components that make up the One Piece comic. It has been
                    customized to appeal to the NFT-loving community and the
                    opBNB community.
                  </li>
                </div>
                <div style={{ paddingBottom: "12px" }}>
                  <li>
                    Initially, the NFT Luffy Collection can be minted for free
                    using any BEP-20 wallet with enough $BNB on the opBNB chain
                    to cover the gas fees.
                  </li>
                </div>
                <div style={{ paddingBottom: "12px" }}>
                  <li>
                    Each component on XRender will have different features from
                    each other. We focus on images and colors so that users can
                    choose the right NFT according to their preferences. Are you
                    liking its version? Maybe it will become the hottest color
                    for the collection. Maybe you'll be happy.
                  </li>
                </div>
              </ul>
              <BoxCoppyContrac>
                <h4>Smart Contract</h4>
                <div>
                  <h3>{ContractMint}</h3>
                  <button onClick={() => copyToClipboard(ContractMint)}>
                    📑
                    <span>{copySuccess}</span>
                  </button>
                </div>
              </BoxCoppyContrac>
              <BoxCoppyContracMb>
                <h4>Smart Contract</h4>
                <div>
                  <h3>{`${ContractMint.substring(
                    0,
                    5
                  )} ... ${ContractMint.substring(
                    ContractMint.length - 5,
                    ContractMint.length
                  )}`}</h3>
                  <button onClick={() => copyToClipboard(ContractMint)}>
                    📑
                    <span>{copySuccess}</span>
                  </button>
                </div>
              </BoxCoppyContracMb>
              <div style={{ marginBottom: "12px" }}>
                <ButnSubMit
                  className={`sc-button style ${
                    account ? "bag" : "wallet"
                  } fl-button pri-3 no-bg `}
                  onClick={handleClickSubmit}
                >
                  <span>{TitleMint}</span>
                </ButnSubMit>
              </div>
              <h3>Price Mint : Free</h3>
              <div style={{ paddingTop: "12px" }}>
                {/* <Activity
                  contractAddress={contractAddress}
                  account={account}
                  data={data}
                /> */}
              </div>
            </div>
          </div>
        </ContentBox>
      </Container>
      <ToastContainer />
    </div>
  );
};
export default MinNft;
