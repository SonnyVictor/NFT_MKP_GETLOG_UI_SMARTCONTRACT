import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import LoadingComponent from "../Loading";
import {
  approveContractNFT,
  listSellContractNFT,
  address_MKP_LISTBUYSELL_OPBNB_TESTNET,
} from "../../integrateContract/contract";
import { ethers } from "ethers";

const CardModal = (props) => {
  const [inputValue, setInputValue] = useState(0);
  const [isTime, setTime] = useState("2592000");
  const [isLoading, setIsLoading] = useState(false);
  const [valueTimes, setValueTimes] = useState(0);
  const handleInputChange = useCallback((e) => {
    e.preventDefault();
    const value = e.target.value;
    setInputValue(value);
  }, []);

  const onChangeTime = (event) => {
    event.preventDefault();
    const time = event.target.value;
    setTime(time);
  };

  const listSellNFT = async (addressContractNFT, tokenId, price, time) => {
    setIsLoading(true);
    try {
      const parsePrice = ethers.utils.parseEther(price.toString());
      await approveContractNFT(addressContractNFT, tokenId).then(
        async (res) => {
          if (res?.reason) {
            console.log("faill");
            setIsLoading(false);
          } else {
            await listSellContractNFT(tokenId, parsePrice, time.toString());
            setIsLoading(false);
          }
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
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
          <h3>List Items</h3>
          <p className="text-center">
            LumiaNFT Luffy OnePiece{" "}
            <span className="price color-popup">
              #{props.data?.token_id.toString()}
            </span>
          </p>
          <input
            type="text"
            className="form-control"
            placeholder="0.00 ETH"
            value={inputValue}
            onChange={handleInputChange}
          />
          <p>
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
          </select>
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
              {inputValue - inputValue * 0.007}{" "}
            </p>
          </div>
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#popup_bid_success"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              listSellNFT(
                address_MKP_LISTBUYSELL_OPBNB_TESTNET,
                props.data.token_id.toString(),
                inputValue,
                Number(isTime)
              );
            }}
          >
            {isLoading ? <LoadingComponent /> : "List Sell"}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CardModal;
