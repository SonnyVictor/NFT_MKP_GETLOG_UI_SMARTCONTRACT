import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ToastContainer } from "react-bootstrap";
import {
  approveContractNFT,
  listSellContractNFT,
  address_MKP_LISTBUYSELL_OPBNB_TESTNET,
  upDatePriceNFTMarketPlace,
} from "../../integrateContract/contract";
import { ethers } from "ethers";
import LoadingComponent from "../Loading";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const CardModalUpdatePrice = (props) => {
  const [inputValue, setInputValue] = useState();
  const [isTime, setTime] = useState("2592000");
  const [isLoading, setIsLoading] = useState(false);
  const [valueTimes, setValueTimes] = useState(0);
  const handleInputChange = useCallback((e) => {
    e.preventDefault();
    const value = e.target.value;
    setInputValue(value);
  }, []);

  const updatelistSellNFT = async (tokenId, price) => {
    setIsLoading(true);
    try {
      const parsePrice = ethers.utils.parseEther(price.toString());
      await upDatePriceNFTMarketPlace(tokenId, parsePrice).then((res) => {
        setIsLoading(false);
        toast("Update Price Nft successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }).catch((err) => {
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
        setIsLoading(false);
      });
    } catch (error) {
      console.log("fail Error", error);
    }
  };

  return (
    <>
      <ToastContainer />
      {isLoading && (
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
      <Modal
        show={props.show}
        onHide={props.onHide}
        data={props.data?.token_id.toString()}
      >
        <Modal.Header closeButton></Modal.Header>
        <div className="modal-body space-y-20 pd-40">
          <h3>Update Price Items</h3>
          <p className="text-center">
            LumiaNFT Luffy OnePiece{" "}
            <span className="price color-popup">
              #{props.data?.token_id.toString()}
            </span>
          </p>
          <form>
            <span>Setting price</span>
            <input
              type="text"
              className="form-control "
              placeholder="0.00 BNB"
              value={inputValue}
              onChange={handleInputChange}
            />
          </form>
          {/* <p>
            Duration <span className="color-popup">Time</span>
          </p>
          <select
            className="form-control h-56"
            defaultValue="2592000"
            onChange={onChangeTime}
          >
            <option value="2592000">1 month</option>
            <option value="5184000">2 month</option>
            <option value="7776000">3 month</option>
          </select> */}
          <div className="hr"></div>
          <div className="d-flex justify-content-between">
            <p> Listing Price:</p>
            <p className="text-right price color-popup">{inputValue} BNB </p>
          </div>
          <div className="d-flex justify-content-between">
            <p> Creator Earnings:</p>
            <p className="text-right price color-popup"> 5% </p>
          </div>
          <div className="d-flex justify-content-between">
            <p> Service free:</p>
            <p className="text-right price color-popup"> 2% </p>
          </div>
          <div className="d-flex justify-content-between">
            <p> Total Receive amount:</p>
            <p className="text-right price color-popup">
              {" "}
              {inputValue - inputValue * 0.007 || 0}{" "}
            </p>
          </div>
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#popup_bid_success"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              updatelistSellNFT(props.data.id.toString(), inputValue);
            }}
          >
            {isLoading ? <LoadingComponent /> : "Update Price Sell"}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CardModalUpdatePrice;
