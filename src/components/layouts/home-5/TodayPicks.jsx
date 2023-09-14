import React, { useState, Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import img1 from "../../../assets/images/icon/menu.png";
import img2 from "../../../assets/images/icon/rainbow.png";
import img3 from "../../../assets/images/icon/photo.png";
import img4 from "../../../assets/images/icon/itunes.png";
import CardModal from "../CardModal";
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
const TodayPicks = (props) => {
  const data = props.data;
  const [visible, setVisible] = useState(8);
  const { chainIdConnect, handleCheckNetWork } = useContext(RefreshContext);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const [modalShow, setModalShow] = useState(false);
  return (
    <Fragment>
      <section className="tf-section today-pick">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-live-auctions mg-bt-21">
                <h2 className="tf-title">Marketplace</h2>
              </div>
            </div>
            {chainIdConnect === 204 ? (
              <>
                {data.length ? (
                  <>
                    {data.slice(0, visible).map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
                        >
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
                                class="wishlist-button heart"
                                style={{ color: "#fff" }}
                              >
                                <span class="number-like">100</span>
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
                                <div class="tags">bsc</div>
                                {/* </Countdown> */}
                                {/* {convertendTime(item?.endTime)} */}
                              </div>
                            </div>
                            <div className="meta-info">
                              <div className="author">
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
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <Nodata>
                    <img src={NodataImg} alt="" />{" "}
                    <Link to="/mint-nft">
                      <button>Go To Mint-Nft </button>
                    </Link>
                  </Nodata>
                )}
              </>
            ) : (
              <Nodata>
                <img src={NodataImg} alt="" />{" "}
                <button onClick={() => handleCheckNetWork()}>
                  Please Change NetWork{" "}
                </button>
              </Nodata>
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
      {/* <CardModalBuy show={modalShow} onHide={() => setModalShow(false)} /> */}
    </Fragment>
  );
};

TodayPicks.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TodayPicks;
