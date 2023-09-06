import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CardModal from "../components/layouts/CardModal";

import avt from "../assets/images/avatar/avt-author-tab.jpg";
import HeaderStyle2 from "../components/header/HeaderStyle2";
import {
  ContractNFT,
  getImageNFT,
} from "../../src/integrateContract/contract/";
import { useActiveWeb3React } from "../hooks";

const Authors02 = () => {
  const { account } = useActiveWeb3React();
  const [menuTab] = useState([
    {
      class: "active",
      name: "ITEMS",
    },
    {
      class: "",
      name: "ART",
    },
    {
      class: "",
      name: "MUSIC",
    },
    {
      class: "",
      name: "COLLECTIBLES",
    },
    {
      class: "",
      name: "SPORTS",
    },
  ]);

  const [visible, setVisible] = useState(8);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const [modalShow, setModalShow] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [idPopup, setIdPopup] = useState(0);

  const [dataNFT, setDataNFT] = useState([]);

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
          setIsLoading(false);
          return i;
        })
      );
      setDataNFT([...testItems]);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getItemsNFTProfile();
  }, [account, menuTab]);
  return (
    <div className="authors-2">
      <HeaderStyle2 />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Author</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                  </li>
                  <li>Author</li>
                </ul>
              </div>
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
                <h2 className="title">Trista Francis</h2>
                <p className="content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                  deleniti asperiores sit.
                </p>
                <form>
                  <input
                    type="text"
                    className="inputcopy"
                    defaultValue="DdzFFzCqrhshMSxABCdfrge"
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
                  <Link to="/login" className="sc-button style-1 follow">
                    Follow
                  </Link>
                </div>
              </div>
            </div>
            <Tabs>
              <TabList>
                {menuTab.map((item, index) => (
                  <Tab key={index}>{item.name}</Tab>
                ))}
              </TabList>

              <div className="content-tab">
                <div className="content-inner">
                  <div className="row">
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
        data={dataNFT ? dataNFT[idPopup] : {}}
      />
      <Footer />
    </div>
  );
};

export default Authors02;
