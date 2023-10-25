import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  Container,
  ContentBox,
  Layout,
  GifLayout,
  BoxCoppyContrac,
  ButnSubMit,
  BoxCoppyContracMb,
  BtnGroup,
} from "./MinNftStyle";
import { ToastContainer, toast } from "react-toastify";
import { useState, useMemo, useEffect, useContext } from "react";
import { getProvider } from "../services/lib/ethers";
import { ethers } from "ethers";
import { useActiveWeb3React } from "../hooks";
import { ModalConfirmContext } from "../components/ProviderPopUp/confirm";
import { ConnectPopUp } from "../components/Modal/ModalConnectWallet";
import img1 from "../assets/images/avatar/avt-9.svg";
import img2 from "../assets/images/avatar/avt-3.jpg";
import img3 from "../assets/images/avatar/avt-9.jpg";
import {
  SignerContractNFT,
  address_NFT_LUFFY_OPBNB_TESTNET,
} from "../integrateContract/contract";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  OpBNB_NFT_LUFFY_ABI,
  ZETA_NFT_Luffy_ABI,
  address_NFT_LUFFY_OPBNB_MainNet,
  address_NFT_LUFFY_Zeta_TestNet,
} from "../integrateContract/ABI";
const ContractMint = address_NFT_LUFFY_OPBNB_TESTNET;

const MinNft = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [local, setLocal] = useState("");
  const [total, setTotal] = useState(0);
  const [copySuccess, setCopySuccess] = useState("");
  const { onOpen } = useContext(ModalConfirmContext);
  const [isLoading, setIsLoading] = useState(false);

  const eventMappings = {
    MarketplaceItemCreated: "List",
    UnListNFTOnSale: "UnList",
    BuyNFT: "BuyNFT",
    Mint: "Mint",
    UpdatePriceNftOnSale: "UpdatePrice",
  };

  const changeTotal = (value) => {
    setTotal(value);
  };

  const { account, chainId, library } = useActiveWeb3React();
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

  const handleClickSubmit = async (address_NFT_Chain, abi_NFT_Chain) => {
    if (account) {
      setIsLoading(true);
      const contract = await SignerContractNFT(
        address_NFT_Chain,
        abi_NFT_Chain
      );
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

  const [dataHistory, setDataHistory] = useState([]);

  const [trains, setTrains] = useState([]);

  const handleChainMint = () => {
    if (chainId === 204) {
      handleClickSubmit(address_NFT_LUFFY_OPBNB_MainNet, OpBNB_NFT_LUFFY_ABI);
    } else if (chainId === 7001) {
      handleClickSubmit(address_NFT_LUFFY_Zeta_TestNet, ZETA_NFT_Luffy_ABI);
    }
  };

  return (
    <div>
      {/* <HeaderStyle2 /> */}
      <Container>
        <ContentBox>
          <Layout>
            <GifLayout>
              <Minted>
                <p>Minted: 123</p>
              </Minted>
              <img src="./assets/images/backgroundMint.png" alt="" />
            </GifLayout>
          </Layout>
          <div style={{ width: "100%", position: "relative" }}>
            <div style={{ maxWidth: "600px", margin: "0px auto" }}>
              <h3 style={{ paddingBottom: "12px" }}>XRender AI Luffy</h3>
              <ul>
                <div style={{ paddingBottom: "5px" }}>
                  <li style={{ fontFamily: "unset" }}>
                    XRender - a unique collection of NFT art inspired by the
                    Luffy. With only 9,000 limited works available, each piece
                    of art is powered by AI technology. The first XRenderNFT
                    collection will be distributed to all users on the opBNB
                    ecosystem.
                  </li>
                </div>
                <div style={{ paddingBottom: "5px" }}>
                  <li style={{ fontFamily: "unset" }}>
                    They are a collection of 9,000 NFTs made up of each of the
                    components that make up the One Piece comic. It has been
                    customized to appeal to the NFT-loving community and the
                    opBNB community.
                  </li>
                </div>
                <div style={{ paddingBottom: "5px" }}>
                  <li style={{ fontFamily: "unset" }}>
                    Initially, the NFT Luffy Collection can be minted for free
                    using any BEP-20 wallet with enough $BNB on the opBNB chain
                    to cover the gas fees.
                  </li>
                </div>
                <div style={{ paddingBottom: "5px" }}>
                  <li style={{ fontFamily: "unset" }}>
                    Each component on XRender will have different features from
                    each other. We focus on images and colors so that users can
                    choose the right NFT according to their preferences. Are you
                    liking its version? Maybe it will become the hottest color
                    for the collection. Maybe you'll be happy.
                  </li>
                </div>
              </ul>
              <BtnGroup>
                <BoxCoppyContrac>
                  {/* <img src={img2} alt=""/> */}
                  <div>
                    <h4>Price Mint :</h4>
                    <h3>0.009 ETH</h3>
                  </div>
                </BoxCoppyContrac>
                <BoxCoppyContrac>
                  {/* <img src={img3} alt=""/> */}
                  <div>
                    <h4>Smart Contract :</h4>
                    <h3>{`${ContractMint.substring(
                      0,
                      5
                    )} ... ${ContractMint.substring(
                      ContractMint.length - 5,
                      ContractMint.length
                    )}`}</h3>
                  </div>
                  <button onClick={() => copyToClipboard(ContractMint)}>
                    <img src={img1} alt="Copy" />
                    <span>{copySuccess}</span>
                  </button>
                </BoxCoppyContrac>
              </BtnGroup>
              <div style={{ marginBottom: "12px" }}>
                <ButnSubMit
                  className={`sc-button style ${
                    account ? "bag" : "wallet"
                  } fl-button pri-3 `}
                  onClick={() => handleChainMint()}
                >
                  <span>{TitleMint}</span>
                </ButnSubMit>
              </div>
              <div style={{ paddingTop: "12px" }}>
                <div className="flat-tabs themesflat-tabs">
                  <Tabs>
                    <TabList>
                      <Tab>Activity</Tab>
                      <Tab>Traits</Tab>
                    </TabList>
                    <TabPanel>
                      <ul className="bid-history-list">
                        {dataHistory.map((item, index) => (
                          <li key={index} item={item}>
                            <div className="content">
                              <div className="client">
                                <div className="sc-author-box style-2">
                                  <div className="author-avatar">
                                    <Link to="#">
                                      <img
                                        src={
                                          item.typeEvent === 1
                                            ? img1
                                            : item.typeEvent === 2
                                            ? img2
                                            : img3
                                        }
                                        alt=""
                                        className="avatar event-activity"
                                      />
                                    </Link>
                                    <div className="badge"></div>
                                  </div>
                                  <div className="author-infor">
                                    <div className="name">
                                      <h6>
                                        <Link to="#">Event:</Link>
                                      </h6>
                                      <span>
                                        {" "}
                                        {eventMappings[item?.event] || ""}
                                      </span>
                                    </div>
                                    <span className="time">
                                      {item.from ? `From: ${item.from}` : ""}
                                      &#160;
                                      {item.to ? `- To: ${item.to}` : ""}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="price">
                                <h5>price: {item.price || "--"}</h5>
                                {/* <span>{item.priceChange ? `=${item.priceChange}` : ''}</span> */}
                                <span>{item.time || ""}</span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </TabPanel>
                    <TabPanel>
                      <ul className="bid-history-list">
                        <li>
                          <div className="content">
                            <div className="client">
                              <div className="sc-author-box style-2">
                                <div className="author-avatar"></div>
                                <TransTab className="author-infor">
                                  {trains.map((item, index) => {
                                    return (
                                      <>
                                        {item.value && (
                                          <BoxTrani>
                                            <div className="name" key={index}>
                                              {/* {handleLogo(item.trait_type)} */}
                                              <h6> {item.trait_type} </h6>{" "}
                                              {/* <span> place a bid</span> */}
                                            </div>
                                            <span className="time">
                                              {item.value}
                                            </span>
                                          </BoxTrani>
                                        )}
                                      </>
                                    );
                                  })}
                                </TransTab>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </ContentBox>
      </Container>
      <ToastContainer />
    </div>
  );
};

const TransTab = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Minted = styled.div`
  position: absolute;
  top: 72px;
  border: 3px solid #dea930;
  border-radius: 10px;
  padding: 0px 12px;
  margin-left: -10px;
  p {
    color: #dea930;
    font-size: 16px;
    font-weight: 600;
  }
  @media screen and (max-width: 500px) {
    top: 65px;
    padding: 0px 12px;
  }
`;

const BoxTrani = styled.div`
  width: calc((100% - 45px) / 4);
  align-self: stretch;
  display: flex;
  border-radius: 10px;
  background: #ffeffc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    img {
      margin-bottom: 10px;
      max-width: 43px;
      border-radius: 12px;
    }
  }
  span {
    color: #000 !important ;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }

  h6 {
    color: #7b7b7b;
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 18px */
  }
`;
export default MinNft;
