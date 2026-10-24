# LeaseChain UI - Integration Guide

## Quick Toggle: Mock vs Blockchain Data

Edit `.env`:
```
# Use mock data (fast, for UI development)
VITE_USE_CHAIN_DATA=false

# Use real blockchain data (requires Monad Testnet RPC)
VITE_USE_CHAIN_DATA=true
```

After changing, restart dev server: `npm run dev`

## Contract Info

- **Address**: `0x11c1a9ccb57a24a5ec52c20bfa67c6df07738f0c`
- **Network**: Monad Testnet (Chain ID: 10143)
- **Explorer**: https://explorer-testnet.monad.xyz/address/0x11c1a9ccb57a24a5ec52c20bfa67c6df07738f0c

## Demo Wallets (Testnet Only)

```
Notary 1:  0xb6b140a62D22A5e5f5f96A03F433163eC514AbBb
Notary 2:  0xA06A9CB9f5e78056236Cca7EE551fbCB1a90a72A  
Resolver:  0x63DF52F754e35B0734767b86d2342b5EB766f324
```

Private keys in: `../LeaseChain-Handoff-UI/demo-wallets.txt`

## Current Status

✅ UI complete with mock data  
✅ Blockchain data provider ready (`src/lib/data/chainDataProvider.ts`)  
✅ Wagmi configured for Monad Testnet  
⏳ Switch to blockchain data when contract has demo transactions

## Testing Blockchain Integration

1. Set `VITE_USE_CHAIN_DATA=true` in `.env`
2. Restart: `npm run dev`
3. Search for `LAND-001` (will show Available if not registered on-chain yet)
4. Use MetaMask with demo wallet to register leases
5. UI will show real on-chain data

## Architecture

```
src/lib/data/
├── types.ts              # Shared interfaces
├── mockData.ts          # Demo data for development
├── chainDataProvider.ts # Blockchain reader (wagmi/viem)
└── dataProvider.ts      # Toggle between mock/chain
```

Toggle is automatic based on `.env`. No code changes needed.
