/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import web3 from "web3";

import { Modal, Dropdown, message, Select } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { isMobile } from "react-device-detect";
import { useConnectWallet, useActiveWeb3React } from "../../hooks";
import { NEED_A_PLACEHOLDER, WALLET_LIST } from "../../constants/index";
import WalletItem from "./WalletItem";
import { useWeb3React } from "@web3-react/core";
import "./style.css";
import switchNetworkChain from "../../utils/walletChain";
import { MAPPING_CHAINID } from "../../constants";

declare const window: Window & typeof globalThis & { ethereum: any };
const Web3 = new web3(window.ethereum);
const ens = Web3.eth.ens;

const ConnectWallet = () => {
  // const [state1, actions1] = useHookPrice();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const { walletLogin, walletLogout } = useConnectWallet();

  const { Option } = Select;
  const walletItemClass = "w-1/3 flex-auto mb-0.5 p-0.5 last:bg-transparent";
  const { account } = useActiveWeb3React();
  const { chainId }: any = useWeb3React();
  const context = useWeb3React();
  const { active } = context;
  const provider = "https://data-seed-prebsc-1-s1.binance.org:8545/";

  const w3 = window.ethereum ? new web3(window.ethereum) : new web3(provider);
  const [bnbBalance, setBnbBalance] = useState(0);

  const [initialValue, setInitialValue]: any = useState("bep");
  function handleChain(value: any, e: any) {
    if (account !== undefined) {
      handleConnect("1");
      // @ts-ignore
      const _chainId = MAPPING_CHAINID[value];
      switchNetworkChain(_chainId, value).then((res) => {
        // actions1.updateChain(value);
        if (res !== false) {
          setInitialValue(value);
          // actions1.updateChain(value);
        } else {
          setInitialValue(localStorage.getItem("chain"));
          // actions1.updateChain(localStorage.getItem("chain"));
        }
      });
    }
  }

  useEffect(() => {
    setInitialValue(localStorage.getItem("chain"));
  }, [localStorage.getItem("chain")]);

  useEffect(() => {
    if (account) {
      w3.eth.getBalance(account, (err, balance) => {
        if (balance) {
          let _balance: any = web3.utils.fromWei(
            web3.utils.toBN(balance),
            "ether"
          );
          let bnbBl = Math.round(parseFloat(_balance) * 10000) / 10000;
          setBnbBalance(bnbBl);
        }
      });
    }
  }, [account, chainId]);

  // --- ACTION IN MODAL ---
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const accountEllipsis = active
    ? `${account?.substring(0, 4)}...${account?.substring(account.length - 4)}`
    : "Connect Wallet ";

  const accountEllipsisRow = active
    ? `${account?.substring(0, 6)}...${account?.substring(account.length - 6)}`
    : "Connect Wallet ";

  // ---- HANDLE DISCONNECT ----
  const handleDisconnect = () => {
    walletLogout();
    setIsModalVisible(false);
  };

  // ---- HANDLE CONNECT ----
  const handleConnect = async (connectorId: string) => {
    try {
      const rs = await walletLogin(connectorId);

      setIsModalVisible(false);
    } catch (e) {
      console.error("Login failed");
    }
  };

  const token_network = (chainId: any) => {
    switch (chainId) {
      case 1:
        return "ETH";
        break;
      case 137:
        return "MATIC";
        break;
      case 42161:
        return "ETH";
        break;
      case 97:
        return "tBNB";
        break;
      default:
        return "BNB";
    }
  };
  const menu = (
    <>
      <div className="main-dropdown-wl">
        <div className="top-dropdown">
          <div className="box-address">
            <div className="address-name">Wallet address :</div>
            <div className="account-name">
              {accountEllipsisRow}
              <CopyToClipboard
                text={`${account}`}
                onCopy={() => {
                  message.success("Copied", 0.4);
                }}
              >
                <span className="img-copy">
                  <img src="/images/imgido/copy.png?v=3" alt="" />
                </span>
              </CopyToClipboard>
            </div>
          </div>
        </div>

        <div className="footer-dropdown">
          <button type="button" className="btn-dis" onClick={handleDisconnect}>
            Disconnect
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {isMobile ? (
        <div className="filter-chain mobile">
          <Select
            value={initialValue}
            onChange={handleChain}
            style={{ width: 175, marginRight: 10 }}
            placeholder="Select network"
          >
            <>
              <Option key="bep" value="bep">
                <img src="/images/bnb.png?v=3" alt="" />
                BNB Chain
              </Option>
              <Option key="erc" value="erc">
                <img src="/images/ethe.png?v=3" alt="" />
                Ethereum
              </Option>
              <Option key="poly" value="poly">
                <img src="/images/poly.png?v=3" alt="" /> Polygon
              </Option>
              <Option key="arb" value="arb">
                <img src="/images/arb.png?v=3" alt="" /> Arbitrum
              </Option>
            </>
          </Select>
        </div>
      ) : (
        <div className="filter-chain">
          <Select
            value={initialValue}
            onChange={handleChain}
            style={{ width: 175, marginRight: 10 }}
            placeholder="Select network"
          >
            <>
              <Option key="beptest" value="beptest">
                <img src="/images/bnb.png?v=3" alt="" />
                BNB TEST
              </Option>
              <Option key="bep" value="bep">
                <img src="/images/bnb.png?v=3" alt="" />
                BNB Chain
              </Option>
              <Option key="erc" value="erc">
                <img src="/images/ethe.png?v=3" alt="" />
                Ethereum
              </Option>
              <Option key="poly" value="poly">
                <img src="/images/poly.png?v=3" alt="" /> Polygon
              </Option>

              <Option key="arb" value="arb">
                <img src="/images/arb.png?v=3" alt="" /> Arbitrum
              </Option>
            </>
          </Select>
        </div>
      )}
      {active ? (
        <>
          {/* @ts-ignore this lib is incompatible with react18  */}
          <Dropdown overlay={menu} placement="bottom">
            <button className="btn-account" type="button">
              <div className="img-bnb">
                <div className="price">
                  {bnbBalance} {token_network(chainId)}
                </div>
              </div>

              <span className="account-style">
                <img src="/images/meta-wl.png?v=3" alt="" />
                {accountEllipsis}
              </span>
            </button>
          </Dropdown>
        </>
      ) : (
        <>
          <button className="btn-connect" onClick={showModal}>
            Connect Wallet
          </button>
        </>
      )}
      {/* @ts-ignore this lib is incompatible with react18  */}
      <Modal
        title={
          <div className="text-md connect-wallet-title">
            {!account ? "Select Wallet" : ""}
          </div>
        }
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="connect-wallet"
      >
        {!active ? (
          <>
            <div className="flex flex-wrap">
              <>
                {WALLET_LIST.map((wallet) => {
                  return (
                    <>
                      <WalletItem
                        className={`wallet-item`}
                        key={wallet.title}
                        onClick={() => handleConnect(wallet.connectorId)}
                        icon={<wallet.icon width="48px" />}
                        title={wallet.title}
                      />
                    </>
                  );
                })}
              </>
              {NEED_A_PLACEHOLDER && <div className={walletItemClass} />}
            </div>
          </>
        ) : (
          ""
        )}
      </Modal>
    </>
  );
};

export default ConnectWallet;
