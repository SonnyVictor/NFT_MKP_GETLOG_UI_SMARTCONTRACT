

async function getTokenInfo(tokenAddress,web3) {
  const contract = new web3.eth.Contract(
    [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ name: "", type: "uint8" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ name: "_owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "balance", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { name: '_owner', type: 'address' },
          { name: '_spender', type: 'address' }
        ],
        name: 'allowance',
        outputs: [{ name: 'remaining', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [
          { name: 'spender', type: 'address' },
          { name: 'amount', type: 'uint256' }
        ],
        name: 'approve',
        outputs: [{ name: 'remaining', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ],
    tokenAddress
  );

  try {
    const [name, decimals, totalSupply, symbol] = await Promise.all([
      contract.methods.name().call(),
      contract.methods.decimals().call(),
      contract.methods.totalSupply().call(),
      contract.methods.symbol().call(),

    ]);

    return {
      name,
      decimals: parseInt(decimals),
      address: tokenAddress,
      supply: web3.utils.fromWei(totalSupply, 'ether'),
      symbol,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default getTokenInfo
