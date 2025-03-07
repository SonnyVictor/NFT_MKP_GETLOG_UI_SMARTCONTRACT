import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Countdown from "react-countdown";
import CardModal from "../CardModal";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import img1 from "../../../assets/images/box-item/image-box-26.jpg";
import img2 from "../../../assets/images/box-item/image-box-27.jpg";
import img3 from "../../../assets/images/box-item/image-box-28.jpg";
import img4 from "../../../assets/images/box-item/image-box-29.jpg";
import img5 from "../../../assets/images/box-item/image-box-30.jpg";
import img6 from "../../../assets/images/box-item/image-box-31.jpg";
import imga1 from "../../../assets/images/avatar/avt-11.jpg";
import imga2 from "../../../assets/images/avatar/avt-12.jpg";
import imga3 from "../../../assets/images/avatar/avt-13.jpg";

const LiveAuction = () => {
  const [data] = useState([
    {
      img: img1,
      title: "Lumia nft Luffy 1",
      tags: "bsc",
      imgAuthor: imga1,
      nameAuthor: "SalvadorDali",
      price: "4.89 opBNB",
      wishlist: "100",
    },
    {
      img: img2,
      title: "Lumia nft Luffy 2",
      tags: "bsc",
      imgAuthor: imga2,
      nameAuthor: "Trista Francis",
      price: "4.89 opBNB",
      wishlist: "100",
    },
    {
      img: img3,
      title: "Lumia nft Luffy 3",
      tags: "bsc",
      imgAuthor: imga3,
      nameAuthor: "Trista Francis",
      price: "4.89 opBNB",
      wishlist: "100",
    },
    {
      img: img4,
      title: "Lumia nft Luffy 4",
      tags: "bsc",
      imgAuthor: imga1,
      nameAuthor: "SalvadorDali",
      price: "4.89 opBNB",
      wishlist: "100",
    },
    {
      img: img5,
      title: "Lumia nft Luffy 5",
      tags: "bsc",
      imgAuthor: imga2,
      nameAuthor: "Trista Francis",
      price: "4.89 opBNB",
      wishlist: "100",
    },
    {
      img: img6,
      title: "Lumia nft Luffy 6",
      tags: "bsc",
      imgAuthor: imga3,
      nameAuthor: "Trista Francis",
      price: "4.89 opBNB",
      wishlist: "100",
    },
  ]);

  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <section className="tf-section live-auctions">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-live-auctions">
                <h2 className="tf-title pb-20">Live Auctions</h2>
                <Link to="/explore-03" className="exp style2">
                  EXPLORE MORE
                </Link>
              </div>
            </div>
            <div className="col-md-12">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  767: {
                    slidesPerView: 2,
                  },
                  991: {
                    slidesPerView: 3,
                  },
                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-container show-shadow carousel auctions">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="slider-item">
                            <div className="sc-card-product">
                              <div className="card-media">
                                <img src={item.img} alt="axies" />
                                <span className="number-like">
                                  {item.wishlist}
                                </span>
                                <div className="featured-countdown">
                                  <span className="slogan"></span>
                                  <Countdown date={Date.now() + 500000000}>
                                    <span>You are good to go!</span>
                                  </Countdown>
                                </div>
                                <div className="button-place-bid">
                                  <button
                                    // onClick={() => setModalShow(true)}
                                    className="sc-button style-place-bid style bag fl-button pri-3"
                                  >
                                    <span>Place Bid</span>
                                  </button>
                                </div>
                              </div>
                              <div className="card-title">
                                <h5>{item.title}</h5>
                                <div className="tags">{item.tags}</div>
                              </div>
                              <div className="meta-info">
                                <div className="author">
                                  <div className="avatar">
                                    <img src={item.imgAuthor} alt="axies" />
                                  </div>
                                  <div className="info">
                                    <span>Creator</span>
                                    <h6>{item.nameAuthor}</h6>
                                  </div>
                                </div>
                                <div className="price">
                                  <span>Current Bid</span>
                                  <h5> {item.price}</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

export default LiveAuction;
