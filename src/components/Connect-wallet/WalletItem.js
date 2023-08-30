import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function WalletItem(props) {
	return (
    <div
      className={`flex items-center ${props.className}`}
      onClick={props.onClick}
    >
      <div className="wallet-flex">
        {props.icon}
        <a className="item-text" href="" onClick={(e) => e.preventDefault()}>
          {props.title}
        </a>
      </div>
    </div>
  );
}

WalletItem.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.object,
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};
