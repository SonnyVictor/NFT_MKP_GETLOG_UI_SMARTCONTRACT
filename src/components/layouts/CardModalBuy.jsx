import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import {
  approveContractNFT,
  listSellContractNFT,
  address_MKP_LISTBUYSELL_OPBNB_TESTNET,
} from "../../integrateContract/contract";
import { ethers } from "ethers";

const CardModalBuy = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      data={props.data?.token_id.toString()}
    >
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-body space-y-20 pd-40">
        <h3>Buy Items</h3>
        <p className="text-center">
          LumiaNFT Luffy OnePiece{" "}
          <span className="price color-popup">
            #{props.data?.token_id.toString()}
          </span>
        </p>

        <p>
          Duration <span className="color-popup">Time</span>
        </p>
        <select
          className="form-control h-56"
          defaultValue="2592000"
          //   onChange={onChangeTime}
        >
          <option value="2592000">1 month</option>
          <option value="5184000">2 month</option>
          <option value="7776000">3 month</option>
        </select>
        <div className="hr"></div>
        <div className="d-flex justify-content-between">
          <p> Listing Price:</p>
          {/* <p className="text-right price color-popup">{inputValue} BNB </p> */}
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
            {/* {inputValue - inputValue * 0.007}{" "} */}
          </p>
        </div>
        <button
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#popup_bid_success"
          data-dismiss="modal"
          aria-label="Close"
        >
          {" "}
          Buy NFT
        </button>
      </div>
    </Modal>
  );
};

export default CardModalBuy;
