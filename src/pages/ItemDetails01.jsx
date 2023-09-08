import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import liveAuctionData from "../assets/fake-data/data-live-auction";
import LiveAuction from "../components/layouts/LiveAuction";
import img1 from "../assets/images/avatar/avt-3.jpg";
import img2 from "../assets/images/avatar/avt-11.jpg";
import img3 from "../assets/images/avatar/avt-1.jpg";
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

const ItemDetails01 = () => {
  const { account } = useActiveWeb3React();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [itemTokenId, setItemTokenId] = useState([]);
  const [trains, setTrains] = useState([]);
  const [eventMint, setEventMint] = useState([]);
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
    getAllEventNFT();
    getAllActivityNFT(id);
  }, [account, Tab]);

  const buyNFTTokenId = async (id, valuePrice) => {
    try {
      await setbuyNFT(id, valuePrice).then((res) => window.location.reload());
    } catch (error) {
      console.log("error buyNFT", error);
    }
  };

  const [dataHistory] = useState([
    {
      img: img1,
      name: "Mason Woodward",
      time: "8 hours ago",
      price: "4.89 opBNB",
      priceChange: "$12.246",
    },
    {
      img: img2,
      name: "Mason Woodward",
      time: "at 06/10/2021, 3:20 AM",
      price: "4.89 opBNB",
      priceChange: "$12.246",
    },
    {
      img: img3,
      name: "Mason Woodward",
      time: "8 hours ago",
      price: "4.89 opBNB",
      priceChange: "$12.246",
    },
    {
      img: img4,
      name: "Mason Woodward",
      time: "8 hours ago",
      price: "4.89 opBNB",
      priceChange: "$12.246",
    },
    {
      img: img5,
      name: "Mason Woodward",
      time: "8 hours ago",
      price: "4.89 opBNB",
      priceChange: "$12.246",
    },
    {
      img: img6,
      name: "Mason Woodward",
      time: "8 hours ago",
      price: "4.89 opBNB",
      priceChange: "$12.246",
    },
  ]);

  const getAllEventNFT = async () => {
    const contractEventNFT = await ContractNFT();
    const getFilters = contractEventNFT.filters.Mint();
    const events = await contractEventNFT.queryFilter(getFilters, 6574800);
    const getArgs = events.map((value) => value.args);
    const findUserMint = getArgs.find((item) => id === item.tokenId.toString());
    setEventMint(findUserMint);
    console.log("EVENT", eventMint);
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
                <h1 className="heading text-center">NFT Details #tokenID</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Explore</Link>
                  </li>
                  <li>NFT Details</li>
                </ul>
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
                    <h2 className="style2">
                      Lumia NFT Luffy #{itemTokenId[0].tokenId}{" "}
                    </h2>
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
                          {/* <div className="avatar">
                            <img src={img6} alt="Axies" />
                          </div> */}
                          <div className="info">
                            <span>Owned By</span>
                            <h6>{shortenAddress(itemTokenId[0].seller)}</h6>
                          </div>
                        </div>
                      </div>
                      <div className="meta-info">
                        <div className="author">
                          {/* <div className="avatar">
                            <img src={img7} alt="Axies" />
                          </div> */}
                          <div className="info">
                            <span>Create By</span>
                            <h6> Address</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <p>
                      Habitant sollicitudin faucibus cursus lectus pulvinar dolor
                      non ultrices eget. Facilisi lobortisal morbi fringilla urna
                      amet sed ipsum vitae ipsum malesuada. Habitant sollicitudin
                      faucibus cursus lectus pulvinar dolor non ultrices eget.
                      Facilisi lobortisal morbi fringilla urna amet sed ipsum
                    </p> */}
                    <div className="meta-item-details style2">
                      <div className="item meta-price">
                        <span className="heading">Price List</span>
                        <div className="price">
                          <div className="price-box">
                            <h5> {itemTokenId[0].price}BNB</h5>
                            <span>= $12.246</span>
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
                          <Tab>Provenance</Tab>
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
                                            src={item.img}
                                            alt="Axies"
                                            className="avatar"
                                          />
                                        </Link>
                                        <div className="badge"></div>
                                      </div>
                                      <div className="author-infor">
                                        <div className="name">
                                          <h6>
                                            <Link to="/author-02">
                                              {item.name}{" "}
                                            </Link>
                                          </h6>{" "}
                                          <span> place a bid</span>
                                        </div>
                                        <span className="time">
                                          {item.time}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="price">
                                    <h5>{item.price}</h5>
                                    <span>= {item.priceChange}</span>
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

                                    <div className="author-infor">
                                      {trains.map((item, index) => (
                                        <>
                                          <div className="name" key={index}>
                                            <h6> {item.trait_type} </h6>{" "}
                                            {/* <span> place a bid</span> */}
                                          </div>
                                          <span className="time">
                                            {item.value}
                                          </span>
                                        </>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </TabPanel>
                        <TabPanel>
                          <div className="provenance">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
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
