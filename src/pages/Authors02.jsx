import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CardModal from "../components/layouts/CardModal";

import avt from "../assets/images/avatar/avt-author-tab.png";
import HeaderStyle2 from "../components/header/HeaderStyle2";
import {
  ContractNFT,
  contractMarketPlace,
  getImageNFT,
  unListNFT,
} from "../../src/integrateContract/contract/";
import { useActiveWeb3React } from "../hooks";
import { ethers } from "ethers";
import {
  convertTimeEnd,
  convertUnixTimeToExpirationTime,
  convertendTime,
} from "../utils/formartTime";
import CardModalUpdatePrice from "../components/layouts/CardModalUpdatePrice";
import { Nodata } from "../components/layouts/home-5/TodayPicksStyle";
import NodataImg from "../assets/images/logo/No-nft.svg";
import { RefreshContext } from "../context/RefreshContext";
import { ToastContainer, toast } from "react-toastify";
const Authors02 = () => {
  const { account } = useActiveWeb3React();
  const { getOpBnbBalance, handleGetOpBnbBalance } = useContext(RefreshContext);

  const [tabIndex, setTabIndex] = useState(0);
  const [menuTab] = useState([
    {
      class: "active",
      name: "Items",
    },
    {
      class: "",
      name: "On Sale",
    },
    // {
    //   class: "",
    //   name: "History",
    // },
  ]);

  const [visible, setVisible] = useState(8);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const [modalShow, setModalShow] = useState(false);
  const [modalShowUpdatePice, setModalShowUpdatePice] = useState(false);
  // const [modalShowActionList, setModalShowActionList] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [idPopup, setIdPopup] = useState(0);

  const [dataNFT, setDataNFT] = useState([]);

  const [dataOnSaleNFT, setDataOnSaleNFT] = useState([]);

  const getItemsNFTProfile = async () => {
    setIsLoading(true);
    try {
      const getcontractNFT = await ContractNFT();
      let getItemsUser = await getcontractNFT.listNFTOfOwner(account);

      const testItems = await Promise.all(
        getItemsUser.map(async (id) => {
          var tokenURI = await getImageNFT(id);
          var nameNFT = await getcontractNFT.name();
          var symbolNFT = await getcontractNFT.symbol();
          let i = {
            img: tokenURI,
            name: nameNFT,
            token_id: id.toString(),
            symbol: symbolNFT,
          };
          return i;
        })
      );
      setDataNFT([...testItems]);
      setIsLoading(false);
      await handleGetOpBnbBalance();
    } catch (error) {
      // console.log(error);
      setIsLoading(false);
    }
  };

  const getItemsNFTOnsale = async () => {
    setIsLoading(true);
    try {
      // address
      const getcontractNFT = await ContractNFT();

      const getcontractMKP = await contractMarketPlace();

      const itemsOnsales = await getcontractMKP.fetchItemsOnSale(account);
      const items = await Promise.all(
        itemsOnsales.map(async (value) => {
          var tokenURI = await getImageNFT(value.tokenId.toString());
          var nameNFT = await getcontractNFT.name();
          var symbolNFT = await getcontractNFT.symbol();
          let i = {
            id: value.itemId.toString(),
            token_id: value.tokenId.toString(),
            price: value.price.toString(),
            endTime: value.timeEnd.toString(),
            name: nameNFT,
            img: tokenURI,
            symbol: symbolNFT,
          };
          setIsLoading(false);
          return i;
        })
      );
      setDataOnSaleNFT(items);
      setIsLoading(false);
      await handleGetOpBnbBalance();
    } catch (error) {
      setIsLoading(false);
      // console.log("getItemsNFTOnSale", error);
    }
  };
  const unListNFTOnSale = async (id) => {
    setIsLoading(true);
    try {
      await unListNFT(id);
      setIsLoading(false);
      toast("UnList NFT successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      handleGetOpBnbBalance();
      setTabIndex(0);
    } catch (error) {
      setIsLoading(false);
      // console.log("error", error);
    }
  };

  // console.log(tabIndex);
  useEffect(() => {
    getItemsNFTProfile();
    getItemsNFTOnsale();
  }, [account, getOpBnbBalance, tabIndex]);
  return (
    <>
      <ToastContainer />
      {isloading && (
        <div
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            zIndex: "33333333333333333333333333333333",
            top: "0px",
            left: "0px",
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        ></div>
      )}

      <div className="authors-2">
        {/* <HeaderStyle2 /> */}
        <section className="flat-title-page inner">
          <div className="overlay"></div>
          <div className="themesflat-container">
            <div className="row">
              <div className="col-md-12">
                <div className="page-title-heading mg-bt-12">
                  <h1 className="heading text-center">My Profile</h1>
                </div>
                {/* <div className="breadcrumbs style2">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="#">Pages</Link>
                    </li>
                    <li>Author</li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <section className="tf-section authors">
          <div className="themesflat-container">
            <div className="flat-tabs tab-authors">
              <div className="author-profile flex">
                <div className="feature-profile">
                  <img src={avt} alt="Axies" className="avatar" />
                </div>
                <div className="infor-profile">
                  <span>Author Profile</span>
                  <p className="content">
                    <br />
                  </p>
                  <h2 className="title"> XRender Nft </h2>
                  <p className="content">
                    <br />
                  </p>
                  <form>
                    <input
                      type="text"
                      className="inputcopy"
                      defaultValue={
                        account
                          ? `${account.substring(0, 8)}... ${account.substring(
                              account.length - 8,
                              account.length
                            )}`
                          : ""
                      }
                      readOnly
                    />
                    <button type="button" className="btn-copycode">
                      <i className="icon-fl-file-1"></i>
                    </button>
                  </form>
                </div>
                <div className="widget-social style-3">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li className="style-2">
                      <Link to="#">
                        <i className="fab fa-telegram-plane"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                    <li className="mgr-none">
                      <Link to="#">
                        <i className="icon-fl-tik-tok-2"></i>
                      </Link>
                    </li>
                  </ul>
                  <div className="btn-profile">
                    <Link to="#" className="sc-button style-1 follow">
                      Follow
                    </Link>
                  </div>
                </div>
              </div>
              <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
              >
                <TabList>
                  {menuTab.map((item, index) => (
                    <Tab key={index}>{item.name}</Tab>
                  ))}
                </TabList>

                <div className="content-tab">
                  <div className="content-inner">
                    <div className="row">
                      <TabPanel>
                        {dataNFT.length ? (
                          <>
                            {dataNFT?.map((item, index) => (
                              <div
                                key={item?.token_id}
                                className="col-xl-3 col-lg-4 col-md-6 col-12"
                              >
                                <div className="sc-card-product explode ">
                                  <div className="card-media">
                                    <img
                                      src={`data:image/svg+xml;utf8,${encodeURIComponent(
                                        item?.img
                                      )}`}
                                      alt="NFT Image"
                                      width="200px"
                                      height="200px"
                                    />

                                    <div className="button-place-bid ">
                                      <button
                                        onClick={() => {
                                          setModalShow(true);
                                          setIdPopup(index);
                                        }}
                                        className="sc-button style-place-bid style bag fl-button pri-3"
                                      >
                                        <span>List Sell</span>
                                      </button>
                                    </div>

                                    <span className="number-like">
                                      {" "}
                                      {item?.token_id.toString()}
                                    </span>
                                  </div>
                                  <div className="card-title mg-bt-16">
                                    <h5>{item?.name}</h5>
                                  </div>
                                  <h5>TokenId #{item?.token_id}</h5>
                                  <div className="meta-info">
                                    <div className="author">
                                      <div className="avatar"></div>
                                      <div className="info"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        ) : (
                          <Nodata>
                            <img src={NodataImg} alt="" />
                            <Link to="/mint-nft">
                              <button>Go To Min-Nft</button>
                            </Link>
                          </Nodata>
                        )}
                      </TabPanel>

                      <TabPanel>
                        {dataOnSaleNFT.length ? (
                          <>
                            {dataOnSaleNFT?.map((item, index) => (
                              <div
                                key={item?.token_id}
                                className="col-xl-3 col-lg-4 col-md-6 col-12"
                              >
                                <div className="sc-card-product explode ">
                                  <div className="card-media">
                                    <img
                                      src={`data:image/svg+xml;utf8,${encodeURIComponent(
                                        item?.img
                                      )}`}
                                      alt="NFT Image"
                                      width="200px"
                                      height="200px"
                                    />

                                    <div className="button-place-bid ">
                                      <button
                                        onClick={() => {
                                          unListNFTOnSale(item.id);
                                          setIdPopup(item.id);
                                        }}
                                        className="sc-button style-place-bid style bag fl-button pri-3"
                                      >
                                        <span>UnList Sell</span>
                                      </button>
                                    </div>

                                    <span className="number-like">
                                      {" "}
                                      {item?.token_id.toString()}
                                    </span>
                                  </div>
                                  <div className="card-title mg-bt-16">
                                    <h5>{item?.name}</h5>
                                  </div>
                                  <h5>TokenId #{item?.token_id}</h5>
                                  <h5>
                                    Date Remaining
                                    {convertUnixTimeToExpirationTime(
                                      item?.endTime
                                    )}
                                  </h5>

                                  <div className="meta-info">
                                    <div className="author">
                                      <div className="avatar"></div>
                                      <div className="info"></div>
                                    </div>
                                  </div>
                                  <div className="card-bottom style-explode">
                                    <div className="price">
                                      <span>Current List</span>
                                      <div className="price-details">
                                        <h5>
                                          {ethers.utils.formatEther(item.price)}{" "}
                                          BNB
                                        </h5>
                                        <span>= {item?.priceChange}</span>
                                      </div>
                                    </div>
                                    <button
                                      onClick={() => {
                                        setModalShowUpdatePice(true);
                                        setIdPopup(index);
                                      }}
                                      className="btn-primary"
                                    >
                                      UpDate Price
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        ) : (
                          <Nodata>
                            <img src={NodataImg} alt="" />
                            <button
                              onClick={() => {
                                setTabIndex(0);
                              }}
                            >
                              List Nft
                            </button>
                          </Nodata>
                        )}
                      </TabPanel>

                      <TabPanel></TabPanel>
                      {/* {visible < item?.dataContent.length && (
                      <div className="col-md-12 wrap-inner load-more text-center">
                        <Link
                          to="#"
                          id="load-more"
                          className="sc-button loadmore fl-button pri-3"
                          onClick={showMoreItems}
                        >
                          <span>Load More</span>
                        </Link>
                      </div>
                    )} */}
                    </div>
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </section>
        <CardModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          showAction={setModalShow}
          data={dataNFT ? dataNFT[idPopup] : {}}
        />
        <CardModalUpdatePrice
          show={modalShowUpdatePice}
          onHide={() => setModalShowUpdatePice(false)}
          showAction={setModalShowUpdatePice}
          data={dataOnSaleNFT ? dataOnSaleNFT[idPopup] : {}}
        />

        <Footer />
      </div>
    </>
  );
};

export default Authors02;
