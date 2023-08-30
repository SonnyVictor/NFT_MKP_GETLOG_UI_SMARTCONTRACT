import { MaxUint256 } from '@ethersproject/constants'
import { TransactionResponse } from '@ethersproject/providers'
import { useCallback, useMemo } from 'react'
import { calculateGasMargin } from '../utils'
import { useTokenContract, useTokenNFTContract } from './useContract'

export enum ApprovalState {
  UNKNOWN,
  NOT_APPROVED,
  PENDING,
  APPROVED,
}

// const useAllowance = async (addressAllow) => {
//   const { account } = useActiveWeb3React()
//   const [allowance, setAllowance] = useState(new BigNumber(0))
//   useEffect(() => {
//     if (account) {
//       const currentAllowance = useTokenAllowanceCustom('0xE1068958C357e84f2C065D8C9b9f15C70028B546', account ?? undefined, addressAllow)
//       setAllowance(currentAllowance)
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [account, allowance])
//   return allowance
// }

// returns a variable indicating the state of the approval and a function which approves if necessary or early returns


// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
export function useApproveCallbackCustom(
  token?: string,
  addressNeedApprove?: string,
  tokenId?: string
): [() => Promise<void>] {
  const tokenContract: any = useTokenContract(token, true)
 
  const approve = useCallback(async (): Promise<void> => {
    const estimatedGas = await tokenContract.estimateGas.approve(addressNeedApprove, MaxUint256).catch(() => {
      return tokenContract.estimateGas.approve(addressNeedApprove, MaxUint256)
    })
    return tokenContract
      .approve(addressNeedApprove, MaxUint256, {
        gasLimit: calculateGasMargin(estimatedGas),
      })
      .then((response: TransactionResponse) => {
        let reuslt: any = {
          summary: `Aprrove  successfully!`,
        }
        if (tokenId) {
          reuslt = {
            ...reuslt,
            attr1: `${tokenId}-approve`,
          }
        }
        return response
      })
      .catch((error: Error) => {
        console.debug('Failed to approve token', error)
        throw error
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenContract, addressNeedApprove])

  return [approve]
}

// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
export function useApproveNFTCallbackCustom(
  token?: string,
  addressNeedApprove?: string,
  tokenId?: string,
  attr1?: string
): [() => Promise<void>] {
  const tokenContract: any = useTokenNFTContract(token)

  const approve = useCallback(async (): Promise<void> => {
    const estimatedGas = await tokenContract.estimateGas.approve(addressNeedApprove, tokenId).catch(() => {
      return tokenContract.estimateGas.approve(addressNeedApprove, tokenId)
    })
    return tokenContract
      .approve(addressNeedApprove, tokenId, {
        gasLimit: calculateGasMargin(estimatedGas),
      })
      .then((response: TransactionResponse) => {
        let reuslt: any = {
          summary: `Aprrove  successfully!`,
        }
        if (tokenId) {
          reuslt = {
            ...reuslt,
            attr1: `${tokenId}-approve`,
          }
        }
       
        return response
      })
      .catch((error: Error) => {
        console.debug('Failed to approve token', error)
        throw error
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenContract, tokenId, addressNeedApprove])

  return [approve]
}
