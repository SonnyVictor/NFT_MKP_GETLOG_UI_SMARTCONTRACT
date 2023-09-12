import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logodark from "../../assets/images/logo/XRenderLogo.png";
import logofooter from "../../assets/images/logo/XRenderLogo.png";
import styled from "styled-components";
const Footer = () => {
  const accountList = [
    {
      title: "Authors",
      link: "/",
    },
    {
      title: "Collection",
      link: "/",
    },
    {
      title: "Author Profile",
      link: "/",
    },
    {
      title: "Create Item",
      link: "/",
    },
  ];
  const resourcesList = [
    {
      title: "Help & Support",
      link: "/",
    },
    {
      title: "Live Auctions",
      link: "/",
    },
    {
      title: "Item Details",
      link: "/",
    },
    {
      title: "Activity",
      link: "/",
    },
  ];
  const companyList = [
    {
      title: "Explore",
      link: "/",
    },
    {
      title: "Contact Us",
      link: "/",
    },
    {
      title: "Our Blog",
      link: "/",
    },
    {
      title: "FAQ",
      link: "/",
    },
  ];
  const socialList = [
    {
      icon: "fab ",
      link: " https://twitter.com/XRenderAI",
      elm: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3263 1.9039H21.6998L14.3297 10.3274L23 21.7899H16.2112L10.894 14.8379L4.80995 21.7899H1.43443L9.31743 12.78L1 1.9039H7.96111L12.7674 8.25823L18.3263 1.9039ZM17.1423 19.7707H19.0116L6.94539 3.81703H4.93946L17.1423 19.7707Z"
            fill="#777"
          />
        </svg>
      ),
    },
    {
      icon: "fab ",
      link: "https://xrenderai.substack.com/",
      elm: (
        <svg
          role="img"
          width="21"
          height="24"
          viewBox="0 0 21 24"
          fill="#777"
          strokeWidth="1.8"
          stroke="none"
          xmlns="http://www.w3.org/2000/svg"
          className="nav-logo-icon"
        >
          <g>
            <title></title>
            <path d="M20.9991 5.40625H0V8.24275H20.9991V5.40625Z"></path>
            <path d="M0 10.8125V24.0004L10.4991 18.1107L21 24.0004V10.8125H0Z"></path>
            <path d="M20.9991 0H0V2.83603H20.9991V0Z"></path>
          </g>
        </svg>
      ),
    },
    {
      icon: "fab fa-telegram-plane",
      link: "https://t.me/XRenderAI",
    },
    {
      icon: "fab fa-youtube",
      link: "https://www.youtube.com/@XRenderAI/",
    },
    {
      icon: "fab",
      link: "https://xrenderai.medium.com/",
      elm: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.76884 5.15625C10.5072 5.15625 13.5374 8.20768 13.5374 11.9715C13.5374 15.7354 10.5069 18.7866 6.76884 18.7866C3.03073 18.7866 0 15.7354 0 11.9715C0 8.20768 3.0305 5.15625 6.76884 5.15625ZM17.5782 5.55547C19.4474 5.55547 20.9626 8.42775 20.9626 11.9715H20.9628C20.9628 15.5144 19.4476 18.3876 17.5784 18.3876C15.7092 18.3876 14.194 15.5144 14.194 11.9715C14.194 8.42867 15.709 5.55547 17.5782 5.55547ZM22.8097 6.22375C23.4669 6.22375 24 8.79708 24 11.9715C24 15.1451 23.4672 17.7193 22.8097 17.7193C22.1522 17.7193 21.6196 15.1458 21.6196 11.9715C21.6196 8.79731 22.1524 6.22375 22.8097 6.22375Z"
            fill="#777777"
          />
        </svg>
      ),
    },
    {
      icon: "icon-fl-vt",
      link: "https://discord.gg/q4dj79xB",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      <footer id="footer" className="footer-light-style clearfix bg-style">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-12">
              <div className="widget widget-logo">
                <LogoFooter className="logo-footer" id="logo-footer">
                  <Link to="/">
                    <img
                      className="logo-dark"
                      id="logo_footer"
                      src={logodark}
                      alt="nft-gaming"
                    />
                    <img
                      className="logo-light"
                      id="logo_footer"
                      src={logofooter}
                      alt="nft-gaming"
                    />
                  </Link>
                </LogoFooter>
                <p className="sub-widget-logo">
                  XRender AI as part of a unique opBNB Ecosystem. XRender AI
                  Generator solution allows you to create and sell
                  blockchain-secured digital collections.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-5 col-5">
              <div className="widget widget-menu style-1">
                <h5 className="title-widget">My Account</h5>
                <ul>
                  {accountList.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-7 col-7">
              <div className="widget widget-menu style-2">
                <h5 className="title-widget">Resources</h5>
                <ul>
                  {resourcesList.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-5 col-5">
              <div className="widget widget-menu fl-st-3">
                <h5 className="title-widget">Company</h5>
                <ul>
                  {companyList.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-7 col-12">
              <div className="widget widget-subcribe">
                <h5 className="title-widget">Subscribe Us</h5>
                <div className="form-subcribe">
                  <form
                    id="subscribe-form"
                    action="#"
                    method="GET"
                    acceptCharset="utf-8"
                    className="form-submit"
                  >
                    <input
                      name="email"
                      className="email"
                      type="email"
                      placeholder="info@yourgmail.com"
                      required
                    />
                    <button id="submit" name="submit" type="submit">
                      <i className="icon-fl-send"></i>
                    </button>
                  </form>
                </div>
                <div className="widget-social style-1 mg-t32">
                  <ul>
                    {socialList.map((item, index) => (
                      <li key={index}>
                        <a href={item.link} target="_blank">
                          <i className={item.icon}>{item.elm}</i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {isVisible && <Link onClick={scrollToTop} to="#" id="scroll-top"></Link>}

      <div
        className="modal fade popup"
        id="popup_bid"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body space-y-20 pd-40">
              <h3>Place a Bid</h3>
              <p className="text-center">
                You must bid at least{" "}
                <span className="price color-popup">4.89 ETH</span>
              </p>
              <input
                type="text"
                className="form-control"
                placeholder="00.00 BNB"
              />
              <p>
                Enter quantity. <span className="color-popup">5 available</span>
              </p>
              <input type="number" className="form-control" placeholder="1" />
              <div className="hr"></div>
              <div className="d-flex justify-content-between">
                <p> You must bid at least:</p>
                <p className="text-right price color-popup"> 4.89 BNB </p>
              </div>
              <div className="d-flex justify-content-between">
                <p> Service free:</p>
                <p className="text-right price color-popup"> 0,89 BNB </p>
              </div>
              <div className="d-flex justify-content-between">
                <p> Total bid amount:</p>
                <p className="text-right price color-popup"> 4 BNB </p>
              </div>
              <Link
                to="/"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#popup_bid_success"
                data-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                Place a bid
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const LogoFooter = styled.div`
  a{
    display: flex;
    align-items: center;
    img{
      width: 175px;
    }
  }
`