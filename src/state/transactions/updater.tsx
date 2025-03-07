import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActiveWeb3React } from "../../hooks";

import { AppDispatch, AppState } from "../index";
import { checkedTransaction, finalizeTransaction } from "./actions";

export function shouldCheck(
  lastBlockNumber: number,
  tx: { addedTime: number; receipt?: any; lastCheckedBlockNumber?: number }
): boolean {
  if (tx.receipt) return false;
  if (!tx.lastCheckedBlockNumber) return true;
  const blocksSinceCheck = lastBlockNumber - tx.lastCheckedBlockNumber;
  if (blocksSinceCheck < 1) return false;
  const minutesPending = (new Date().getTime() - tx.addedTime) / 1000 / 60;
  if (minutesPending > 60) {
    // every 10 blocks if pending for longer than an hour
    return blocksSinceCheck > 9;
  }
  if (minutesPending > 5) {
    // every 3 blocks if pending more than 5 minutes
    return blocksSinceCheck > 2;
  }
  // otherwise every block
  return true;
}

export default function Updater(): null {
  const { chainId, library } = useActiveWeb3React();

  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector<AppState, AppState["transactions"]>(
    (s) => s.transactions
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const transactions = chainId ? state[chainId] ?? {} : {};

  // show popup on confirm

  useEffect(() => {
    if (!chainId || !library) return;

    Object.keys(transactions)
      .filter((hash) => shouldCheck(0, transactions[hash]))
      .forEach((hash) => {
        library
          .getTransactionReceipt(hash)
          .then((receipt: any) => {
            if (receipt) {
              dispatch(
                finalizeTransaction({
                  chainId,
                  hash,
                  receipt: {
                    blockHash: receipt.blockHash,
                    blockNumber: receipt.blockNumber,
                    contractAddress: receipt.contractAddress,
                    from: receipt.from,
                    status: receipt.status,
                    to: receipt.to,
                    transactionHash: receipt.transactionHash,
                    transactionIndex: receipt.transactionIndex,
                  },
                  attr1: transactions[hash]?.attr1,
                })
              );
            } else {
              dispatch(checkedTransaction({ chainId, hash, blockNumber: 0 }));
            }
          })
          .catch((error: any) => {
            console.error(`failed to check transaction hash: ${hash}`, error);
          });
      });
  }, [chainId, library, transactions, dispatch]);

  return null;
}
