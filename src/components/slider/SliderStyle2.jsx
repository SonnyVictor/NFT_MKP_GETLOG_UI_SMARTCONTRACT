import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import img1 from "../../assets/images/slider/Luffy1.png";
import img2 from "../../assets/images/slider/Luffy2.png";
import img3 from "../../assets/images/slider/Luffy3.png";
import img4 from "../../assets/images/slider/Luffy4.png";
import img5 from "../../assets/images/slider/Luffy5.png";
import img6 from "../../assets/images/slider/Luffy6.png";
import { Link } from "react-router-dom";

const SliderStyle2 = () => {
  const subtitle = " XRender AI";
  const title =
    "XRender AI - Smart Artis";
  const description =
    " XRender uses Artificial Intelligence so that users can experience our platform completely free of charge. Users will experience XRender AI with all the most outstanding features.";
  return (
    <section className="flat-title-page home5">
      <div className="overlay"></div>
      <div className="themesflat-container">
        <div className="wrap-heading flat-slider d-flex align-items-center">
          <div className="content">
            <h4 className="mg-bt-11">
              <span className="fill">{subtitle}</span>
            </h4>
            <h1 className="heading">{title}</h1>
            <p className="sub-heading mg-t-7 mg-bt-39">{description}</p>
            <div className="flat-bt-slider style2 flex">
              <Link
                to="/mint-nft"
                className="sc-button header-slider style style-1 rocket fl-button pri-1"
              >
                <span>Get Mint</span>
              </Link>
              <Link to="/nft-ai"
                className="sc-button header-slider style style-1 note fl-button pri-1"
              >
                <span>Try AI Demo</span>
              </Link>
            </div>
          </div>

          <Swiper
            modules={[Autoplay]}
            direction={"vertical"}
            spaceBetween={10}
            slidesPerView={5}
            loop
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={2000}
          >
            <SwiperSlide>
              <img src={img1} alt="Axies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Axies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="Axies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Axies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="Axies" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            modules={[Autoplay]}
            direction={"vertical"}
            spaceBetween={10}
            slidesPerView={5}
            loop
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={2100}
          >
            <SwiperSlide>
              <img src={img5} alt="Axies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="Axies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="Axies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="Axies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Axies" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            modules={[Autoplay]}
            direction={"vertical"}
            spaceBetween={10}
            slidesPerView={5}
            loop
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={2200}
          >
            <SwiperSlide>
              <img src={img3} alt="Axies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="Axies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Axies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="Axies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="Axies" />
            </SwiperSlide>
          </Swiper>
          {/* <Swiper
            modules={[Autoplay]}
            direction={"vertical"}
            spaceBetween={10}
            slidesPerView={5}
            loop
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={2000}
            className="end"
          >
            <SwiperSlide>
              <img src={img3} alt="Axies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Axies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="Axies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="Axies" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="Axies" />
            </SwiperSlide>
          </Swiper> */}
        </div>
      </div>
    </section>
  );
};

export default SliderStyle2;
