import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import liveAuctionData from "../assets/fake-data/data-live-auction";
import LiveAuction from "../components/layouts/LiveAuction";
import img1 from "../assets/images/IconEvent/mint.svg";
import img2 from "../assets/images/IconEvent/list.svg";
import img3 from "../assets/images/IconEvent/buy.svg";
import img4 from "../assets/images/avatar/avt-5.jpg";
import img5 from "../assets/images/avatar/avt-7.jpg";
import img6 from "../assets/images/avatar/avt-8.jpg";
import img7 from "../assets/images/avatar/avt-2.jpg";
import imgdetail1 from "../assets/images/box-item/images-item-details.jpg";
import HeaderStyle2 from "../components/header/HeaderStyle2";
import { useLocation } from "react-router-dom";
import {
  ContractNFT,
  getAllValueMarketPlace,
  getDataTokenURI,
  getImageNFT,
  getNameNFT,
  getSymbolNFT,
  getTokenURI,
  setbuyNFT,
} from "../integrateContract/contract";
import { ethers } from "ethers";
import { shortenAddress } from "../utils/formartAddress";
import { useActiveWeb3React } from "../hooks";
import axios from "axios";
import { convertTimeEnd } from "../utils/formartTime";
import styled from "styled-components";

const ItemDetails01 = () => {
  const { account } = useActiveWeb3React();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [itemTokenId, setItemTokenId] = useState([]);
  const [trains, setTrains] = useState([]);
  const [eventOfNft, setEventOfNft] = useState([]);
  const getAllNftListMarketPlace = async () => {
    try {
      let transition = await getAllValueMarketPlace();

      const items = await Promise.all(
        transition.map(async (i) => {
          var tokenURI = await getImageNFT(i.tokenId);
          var nameNFT = await getNameNFT();
          var symbolNFT = await getSymbolNFT();
          let price = ethers.utils.formatUnits(i.price.toString(), "ether");
          let attributes = await getTokenURI(i.tokenId.toString());
          // let timeEnd = await
          let item = {
            id: i.itemId.toString(),
            seller: i.seller,
            tokenId: i.tokenId.toString(),
            tokenIMG: tokenURI,
            price,
            name: nameNFT.toString(),
            symbolNFT: symbolNFT,
            attributes: attributes,
            endTime: i.timeEnd.toString(),
          };
          return item;
        })
      );
      const itemTokenId = items.filter((item) => item.tokenId === id);
      setItemTokenId(itemTokenId);
    } catch (error) {
      console.log("getAllNftListMarketPlace", error);
    }
  };
  useEffect(() => {
    getAllNftListMarketPlace();
  }, [account, Tab]);

  useEffect(() => {
    getAllEventNFT();
    getAllActivityNFT(id);
  }, []);

  const buyNFTTokenId = async (id, valuePrice) => {
    try {
      await setbuyNFT(id, valuePrice).then((res) => window.location.reload());
    } catch (error) {
      console.log("error buyNFT", error);
    }
  };

  const [dataHistory, setDataHistory] = useState([
    // {
    //   typeEvent: 1,
    //   event: "Mint",
    //   time: "8 hours ago",
    //   from: "0x000",
    //   to: "0x123",
    //   price: "",
    //   priceChange: "",
    // },
  ]);

  const getAllEventNFT = async () => {
    const contractEventNFT = await ContractNFT();
    const getFilters = contractEventNFT.filters.Mint();
    const events = await contractEventNFT.queryFilter(getFilters, 6574800);
    const getArgs = events.map((value) => value.args);
    const findUserMint = getArgs.find(
      (item) => id === item?.tokenId?.toString()
    );
    console.log("EVENT", findUserMint);
    setEventOfNft(findUserMint);
    setDataHistory([
      ...dataHistory,
      {
        typeEvent: 1,
        event: "Mint",
        time: convertTimeEnd(findUserMint[2].toString()),
        from: `${findUserMint[0].substring(
          0,
          5
        )} ... ${findUserMint[0].substring(findUserMint[0].length - 5)}`,
        to: "",
        price: "",
        priceChange: "",
      },
    ]);
  };

  const getAllActivityNFT = async (tokenId) => {
    try {
      const activity = await getDataTokenURI(tokenId);
      console.log(activity);
      const json = window?.atob(activity?.substring(29));
      if (json) {
        const result = JSON.parse(json);
        if (result) {
          setTrains(result?.attributes);
        }
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  console.log(trains);
  return (
    <div className="item-details">
      <HeaderStyle2 />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center"> Lumia NFT Luffy</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {itemTokenId[0] ? (
        <div className="tf-section tf-item-details">
          <div className="themesflat-container">
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <div className="content-left">
                  <div className="media">
                    <img
                      src={`data:image/svg+xml;utf8,${encodeURIComponent(
                        itemTokenId[0]?.tokenIMG
                      )}`}
                      alt="NFT Image"
                      width="400px"
                      height="400px"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="content-right">
                  <div className="sc-item-details">
                    <h2 className="style2">NFT Details {id ? `#${id}` : ""}</h2>
                    {/* <div className="meta-item">
                      <div className="left">
                        <span className="viewed eye">225</span>
                        <span className="liked heart wishlist-button mg-l-8">
                          <span className="number-like">100</span>
                        </span>
                      </div>
                      <div className="right">
                        <Link to="#" className="share"></Link>
                        <Link to="#" className="option"></Link>
                      </div>
                    </div> */}
                    <div className="client-infor sc-card-product">
                      <div className="meta-info">
                        <div className="author">
                          <div className="info">
                            <span>Owned By</span>
                            <h6>{shortenAddress(itemTokenId[0].seller)}</h6>
                          </div>
                        </div>
                      </div>
                      <div className="meta-info">
                        <div className="author">
                          <div className="info">
                            <span>Create By</span>
                            <h6>
                              {eventOfNft[0]
                                ? `${eventOfNft[0].substring(
                                    0,
                                    5
                                  )} ... ${eventOfNft[0].substring(
                                    eventOfNft[0].length - 5
                                  )}`
                                : "--"}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="meta-item-details style2">
                      <div className="item meta-price">
                        <span className="heading">Price List</span>
                        <div className="price">
                          <div className="price-box">
                            <h5> {itemTokenId[0]?.price || "--"}BNB</h5>
                            {/* <span>= $12.246</span> */}
                          </div>
                        </div>
                      </div>
                      <div className="item count-down">
                        <span className="heading style-2">Countdown</span>
                        <Countdown date={Date.now() + 500000000}>
                          <span>You are good to go!</span>
                        </Countdown>
                      </div>
                    </div>
                    <div
                      onClick={() =>
                        buyNFTTokenId(itemTokenId[0].id, itemTokenId[0].price)
                      }
                      className="sc-button loadmore style bag fl-button pri-3"
                    >
                      <span>Buy</span>
                    </div>
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
                                          <span> {item.event} </span>
                                        </div>
                                        <span className="time">
                                          {item.from
                                            ? `From: ${item.from}`
                                            : ""}
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
                                    <div className="author-avatar">
                                      {/* <Link to="#">
                                        <img
                                          src={img1}
                                          alt="Axies"
                                          className="avatar"
                                        />
                                      </Link>
                                      <div className="badge"></div> */}
                                    </div>

                                    <TransTab className="author-infor">
                                      {trains.map((item, index) => {
                                        return (
                                          <>
                                            {item.value && (
                                              <BoxTrani>
                                                <div
                                                  className="name"
                                                  key={index}
                                                >
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
            </div>
          </div>
        </div>
      ) : (
        <div>""</div>
      )}

      {/* <LiveAuction data={liveAuctionData} /> */}
      <Footer />
    </div>
  );
};

export default ItemDetails01;

const TransTab = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;
const BoxTrani = styled.div`
  width: calc(50% - 5px);
  align-self: stretch;
  display: flex;
  border-radius: 10px;
  background: rgba(18, 18, 18, 0.04);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #fff;
  h6 {
    font-weight: 600;
    font-size: 16px;
  }
`;
