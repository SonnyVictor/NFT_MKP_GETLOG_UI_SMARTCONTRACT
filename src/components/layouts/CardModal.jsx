import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { BigNumber } from "ethers";

const CardModal = (props) => {
  const zero = BigNumber.from(0);
  const [inputValue, setInputValue] = useState(zero);
  const [isTime, setTime] = useState("2592000");
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

  return (
    <Modal show={props.show} onHide={props.onHide} data={props.data?.token_id}>
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-body space-y-20 pd-40">
        <h3>List Items</h3>
        <p className="text-center">
          LumiaNFT Luffy OnePiece{" "}
          <span className="price color-popup">#{props.data?.token_id}</span>
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
          <p className="text-right price color-popup">{inputValue} ETH </p>
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
        >
          {" "}
          List Sell
        </button>
      </div>
    </Modal>
  );
};

export default CardModal;
