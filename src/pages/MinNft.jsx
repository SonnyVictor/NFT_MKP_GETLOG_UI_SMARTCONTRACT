import HeaderStyle2 from "../components/header/HeaderStyle2";
import {
  Container,
  ContentBox,
  Layout,
  GifLayout,
  BoxCoppyContrac,
  ButnSubMit,
} from "./MinNftStyle";
import { ToastContainer, toast } from 'react-toastify';
import { useState, useMemo, useEffect, useContext } from "react";
import { getProvider } from "../services/lib/ethers";
import { ethers } from "ethers";
import { useActiveWeb3React } from "../hooks";
import { ModalConfirmContext } from "../components/ProviderPopUp/confirm";
import { ConnectPopUp } from "../components/Modal/ModalConnectWallet";
import { SignerContractNFT } from "../integrateContract/contract";
import 'react-toastify/dist/ReactToastify.css';

const ContractMint = "0x79592cD2CedAfcC7E0747814B2A9ec8044C5B400";

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
          toast('Mint Nft successfully', {
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
          if(err && err.code === 4001){
            toast.error('You rejected transaction', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          }else{
            toast.error('An error occurred while processing your request. Please try again later.', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
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
              <h3 style={{ paddingBottom: "12px" }}>ARBA #???</h3>
              <ul>
                <div style={{ paddingBottom: "12px" }}>
                  <li>
                    The ArbNFT Astronaut Club is the only ArbNFT collection
                    launched on the Arbitrum Chain. ArbNFT Astronaut Club was
                    released with the theme of astronauts coming to the Arbitrum
                    universe. Along with the beautiful astronauts we also have
                    Dogs, Cats, Monkeys... with Mars, Mercury, Moon and all
                    other planets.
                  </li>
                </div>
                <div style={{ paddingBottom: "12px" }}>
                  <li>
                    ArbNFT Astronaut Club Collection consists of 9,000 with the
                    main characters being men, women, dogs, cats, monkeys... in
                    astronaut costumes with various features in the form of
                    pixels. Each NFTs in the collection is a unique item and no
                    two items are alike. This Collection is owned by ArbNFT AI
                    Marketplace on the Arbitrum Chain ecosystem.
                  </li>
                </div>
                <div style={{ paddingBottom: "12px" }}>
                  <li>
                    Users who own a full set of 9 NFTs corresponding to 9
                    planets in the solar system will receive a special ticket to
                    receive many offers from ArbNFT and a reward for a Special
                    Airdrop
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
              <h3>Price Mint : 0.009 BNB</h3>
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
