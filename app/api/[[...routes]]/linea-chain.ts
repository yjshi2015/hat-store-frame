// import { defineChain } from '../../utils/chain/defineChain.js'
import { defineChain } from 'viem'

export const lineaSepolia = /*#__PURE__*/ defineChain({
  id: 59141,
  name: 'Linea Sepolia',
  nativeCurrency: { name: 'Linea Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.sepolia.linea.build'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Etherscan',
      url: 'https://sepolia.lineascan.build/',
    },
  },
  testnet: true,
})