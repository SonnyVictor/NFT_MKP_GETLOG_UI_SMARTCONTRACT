import { ethers } from "ethers";
import {
  ContractNFT,
  address_MKP_LISTBUYSELL_OPBNB_TESTNET,
} from "../integrateContract/contract";

export async function getLogsInRange(provider, contractEventNFT, from, to) {
  const getFilters = contractEventNFT.filters.Mint();
  const events = await contractEventNFT.queryFilter(getFilters, from, to);

  return events;
}

export async function getLogsInRangeAllEventMKP(fromBlock, toBlock) {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://opbnb-mainnet-rpc.bnbchain.org"
  );
  const contractAddress = address_MKP_LISTBUYSELL_OPBNB_TESTNET;
  const topicFilter = [
    "0xc2f03ecafb308e14f48fad7a97ce6801c53d3d85bbc9f07d6af07a36353721c2",
    "0x7f1f50e630774899de8224e2755705b9bbc4a5eaa9c5c5819f950d049f6df175",
    "0xc2f03ecafb308e14f48fad7a97ce6801c53d3d85bbc9f07d6af07a36353721c2",
    "0xd95631535651c70a1497fec4877e22850d2cf9fc99e31ade6bbe4c0bfa241f29",
  ];

  return provider.getLogs({
    fromBlock: fromBlock,
    toBlock: toBlock,
    address: contractAddress,
    topics: [topicFilter],
  });
}
