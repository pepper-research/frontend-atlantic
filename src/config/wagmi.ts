import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { defineChain, http } from 'viem';
import { baseSepolia, sepolia, arbitrumSepolia } from 'viem/chains';

export const customChain = defineChain({
  id: 688689,
  name: 'Custom Trading Chain',
  nativeCurrency: { name: 'Custom Token', symbol: 'PHRS', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://atlantic.dplabs-internal.com'] },
    public: { http: ['https://atlantic.dplabs-internal.com'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://atlantic.pharosscan.xyz' },
  },
});

export const citreaTestnet = defineChain({
  id: 5115,
  name: 'Citrea Testnet',
  nativeCurrency: { name: 'Citrea Bitcoin', symbol: 'cBTC', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.testnet.citrea.xyz'] },
    public: { http: ['https://rpc.testnet.citrea.xyz'] },
  },
  blockExplorers: {
    default: { name: 'Citrea Explorer', url: 'https://explorer.testnet.citrea.xyz' },
  },
  testnet: true,
});

export const config = getDefaultConfig({
  appName: 'Trading Dashboard',
  projectId: 'd599add7e84b45278fada8bf28c54ac7',
  chains: [customChain, baseSepolia, citreaTestnet, arbitrumSepolia, sepolia],
  transports: {
    [customChain.id]: http('https://atlantic.dplabs-internal.com'),
    [baseSepolia.id]: http('https://site2.moralis-nodes.com/base-sepolia/0563a61e273c428f906716cd4befa362'),
    [citreaTestnet.id]: http('https://rpc.testnet.citrea.xyz'),
    [arbitrumSepolia.id]: http('https://site2.moralis-nodes.com/arbitrum-sepolia/a3b4b1042f834a959541c96811ef44bb'),
    [sepolia.id]: http('https://site2.moralis-nodes.com/sepolia/b59c444a55b74d56b3f836d2dd7144eb'),
  },
  ssr: false,
});
