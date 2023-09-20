import React, { useState, Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import { ImageNft, Nodata } from "./TodayPicksStyle";
import CardModalBuy from "../CardModalUpdatePrice";
import { convertTime } from "../../../utils/formartTime";
import { shortenAddress } from "../../../utils/formartAddress";
import { convertTimeEnd } from "../../../utils/formartTime";
import { convertendTime } from "../../../utils/formartTime";
import Countdown from "react-countdown";
import ItemDetails01 from "../../../pages/ItemDetails01";
import NodataImg from "../../../assets/images/logo/No-nft.svg";
import styled from "styled-components";
import { RefreshContext } from "../../../context/RefreshContext";
import avat1 from "../../../assets/images/avatar/avt-11.jpg";
const TodayPicks = (props) => {
  const data = props.data;
  const isMarketPlace  =  props.isMarketPlace 
  const [visible, setVisible] = useState(20);
  const { chainIdConnect, handleCheckNetWork } = useContext(RefreshContext);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 20);
  };
  const [modalShow, setModalShow] = useState(false);
  const [dataFilter] = useState([
    {
      image: "/assets/icon/icon-arb.svg",
      name: "Arb",
    },
    {
      image: "/assets/icon/BNBIcon.png",
      name: "opBNB",
    },
    {
      image: "/assets/icon/icon-zeta.png",
      name: "ZetaChain",
    },
    
  ]);
  const [dataTab] = useState(
    [
        {
            id: 1,
            title: "All",
        },
        {
            id: 2,
            title: "XRender Luffy",
        },
        {
            id: 3,
            title: "XRender AI",
        },
        {
          id: 4,
          title: "XRender Art",
      },
    ]
)

const [tabActive, setTabActive] = useState(1)

const handleFilter = (id) => {
  setTabActive(id)
}
  return (
    <Fragment>
      <section lassName="tf-section today-pick">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              {
              !isMarketPlace  ? 
                <div className="heading-live-auctions mg-bt-21">
                  <h2 className="tf-title">Marketplace</h2>
                  <Link to="/marketplace" className="exp style2">
                    EXPLORE MORE
                  </Link>
                </div> : 
                <FilterBox>
                   <div className="sc-explore-2">
                    <div className="flat-tabs explore-tab">
                        <Tabs >
                            <TabList
                              style={{
                                marginBottom: '20px'
                              }}
                            >
                                {
                                  dataTab.map(data=> (
                                      <Tab 
                                        style={{
                                          boxShadow: '0px 2px 6px 0px rgb(47 83 109 / 10%)',
                                          fontWeight: 600,
                                          background: tabActive !== data.id && '#fff',
                                        }} 
                                      key={data.id} 
                                      onClick={() => handleFilter(data.id)}
                                      >{data.title}</Tab>
                                  ))
                                }
                            </TabList>
                        </Tabs>
                      </div>
                   </div>
                  <div className="widget widget-filter style-2 mgbt-0">
                    <ul className="box-check">
                      {dataFilter.map((item, index) => (
                        <li key={index}>
                          <Link to="#" className="box-widget-filter">
                            <img style={{
                              width: '24px',
                              marginRight: '10px'
                            }} src={item.image} alt={item.name} />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FilterBox>
              }
            </div>
            {chainIdConnect === 204 ? (
              <>
                {data.length ? (
                  <>
                    {data.slice(0, visible).map((item, index) => {
                      return (
                        <Link to={`/details?id=${item?.tokenId}`} 
                        key={index}
                        className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                          <div
                            className={`sc-card-product ${
                              item.feature ? "comingsoon" : ""
                            } `}
                          >
                            <div className="card-media">
                              <img
                                src={`data:image/svg+xml;utf8,${encodeURIComponent(
                                  item?.tokenIMG
                                )}`}
                                alt="NFT Image"
                                width="200px"
                                height="200px"
                              />
                              <a
                                className="wishlist-button heart"
                                style={{ color: "#fff" }}
                              >
                                <span className="number-like">100</span>
                              </a>
                              <div class="featured-countdown">
                                <span class="slogan"></span>
                                <Countdown date={Number(item?.endTime) * 1000}>
                                  <span>End Of Sale!</span>
                                </Countdown>
                              </div>
                            </div>
                            <div className="card-title">
                              <h5 className="style2">
                                "{item?.symbolNFT + " #" + item?.tokenId}"
                              </h5>
                              <div className="">
                                {/* <Countdown date={Number(item?.endTime) * 1000}> */}
                                <div class="tags">opBNB</div>
                                {/* </Countdown> */}
                                {/* {convertendTime(item?.endTime)} */}
                              </div>
                            </div>
                            <div className="meta-info">
                              <div className="author">
                                <div class="avatar">
                                  <img src={avat1} alt="axies" />
                                </div>
                                <div className="info">
                                  <span>Seller</span>
                                  <h6>
                                    <Link to="/authors-02">
                                      {item.nameAuthor}
                                    </Link>{" "}
                                    <span>{shortenAddress(item?.seller)}</span>
                                  </h6>
                                </div>
                              </div>
                              <div className="price">
                                <span>Price List</span>
                                <h5> {item.price} BNB </h5>
                              </div>
                            </div>
                            <div className="card-bottom">
                              <Link to={`/details?id=${item?.tokenId}`}>
                                <button
                                  onClick={() => setModalShow(true)}
                                  className="sc-button style bag fl-button pri-3 no-bg"
                                >
                                  <span>Buy NFT</span>
                                </button>
                              </Link>
                              <Link
                                to={`/details?id=${item?.tokenId}`}
                                className="view-history reload"
                              >
                                View History
                              </Link>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </>
                ) : (
                  <Nodata>
                    <img src={NodataImg} alt="" />{" "}
                    <Link to="/mint-nft">
                      <button>Go To Mint-Nft</button>
                    </Link>
                  </Nodata>
                )}
              </>
            ) : (
              <>
                <Nodata>
                  <img src={NodataImg} alt="" />{" "}
                  <button onClick={() => handleCheckNetWork()}>
                    Please Change NetWork opBNB{" "}
                  </button>
                </Nodata>
              </>
            )}
            {visible < data.length && (
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
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

TodayPicks.propTypes = {
  data: PropTypes.array.isRequired,
};

const FilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default TodayPicks;
