import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function WalletItem(props) {
  return (
    <ItemWallet onClick={props.onClick}>
      <div pr="14px" className="wallet-icon">
        {props.icon}
        <p className="Item-text-connect" onClick={(e) => e.preventDefault()}>
          {props.title}
        </p>
      </div>
      {props.isPopular ? <button>Popular</button> : <></>}
    </ItemWallet>
  );
}

WalletItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.object,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isPopular: Boolean,
};
const ItemWallet = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 12px;
  border-radius: 8px;
  background: var(--gray-50, #f9fafb);
  div {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--gray-900, #111928);
    /* text-base/font-bold */
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    color: #111928;
  }
  button {
    color: var(--gray-500, #6b7280);
    text-align: center;
    /* text-xs/font-medium */
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    display: flex;
    padding: 2px 10px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background: var(--gray-200, #e5e7eb);
    border: none;
  }
  :hover {
    div,
    button,
    p {
      color: #fff;
    }
    background: linear-gradient(
      227.3deg,
      rgba(138, 32, 140, 0.5) 0%,
      rgba(24, 27, 129, 0.5)
    );
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
  }
`;
