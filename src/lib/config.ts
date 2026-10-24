// Monad Testnet configuration
export const monadTestnet = {
  id: 10143,
  name: 'Monad Testnet',
  nativeCurrency: { 
    name: 'MON', 
    symbol: 'MON', 
    decimals: 18 
  },
  rpcUrls: {
    default: { http: ['https://testnet-rpc.monad.xyz'] },
  },
  blockExplorers: {
    default: { 
      name: 'MonadVision', 
      url: 'https://testnet.monadscan.com' 
    },
  },
  testnet: true,
};

// Contract configuration
export const CONTRACT_ADDRESS = '0x11c1a9ccb57a24a5ec52c20bfa67c6df07738f0c' as const;

// Demo wallet addresses
export const DEMO_WALLETS = {
  NOTARY1: '0xb6b140a62D22A5e5f5f96A03F433163eC514AbBb',
  NOTARY2: '0xA06A9CB9f5e78056236Cca7EE551fbCB1a90a72A',
  RESOLVER: '0x63DF52F754e35B0734767b86d2342b5EB766f324',
  ADMIN: '0xF29b83d440419a8c4AE25b98882cA37b91a9D0f0',
};

// Parameters
export const CHALLENGE_WINDOW = 120; // seconds
export const BOND_AMOUNT = '0.01'; // ETH
