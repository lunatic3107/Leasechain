# Handoff untuk Tim UI/UX LeaseChain

## Yang harus kamu serahkan

### 1. Alamat kontrak
**Untuk**: Teman 1 + UI  
**Dari mana**: `DEPLOYMENTS.md`

```
Contract Address: 0x11c1a9ccb57a24a5ec52c20bfa67c6df07738f0c
Network: Monad Testnet (Chain ID: 10143)
RPC URL: https://testnet-rpc.monad.xyz
```

---

### 2. ABI (file JSON)
**Untuk**: Teman 1  
**Dari mana**: Hasil build (`out/` atau `artifacts/`)

**Lokasi file ABI**:
```
out/LeaseRegistry.sol/LeaseRegistry.json
```

Copy file ini atau extract field `abi` saja untuk wagmi/viem.

**Quick extract ABI**:
```bash
cat out/LeaseRegistry.sol/LeaseRegistry.json | python -c "import sys, json; print(json.dumps(json.load(sys.stdin)['abi'], indent=2))" > LeaseRegistry.abi.json
```

---

### 3. Nama jaringan dan link explorer
**Untuk**: Teman 1 + UI  
**Dari mana**: `DEPLOYMENTS.md`

**Explorers**:
- MonadVision: https://explorer-testnet.monad.xyz/address/0x11c1a9ccb57a24a5ec52c20bfa67c6df07738f0c
- Socialscan: https://testnet.monad.socialscan.io/address/0x11c1a9ccb57a24a5ec52c20bfa67c6df07738f0c
- Monadscan: https://testnet.monadscan.com/address/0x11c1a9ccb57a24a5ec52c20bfa67c6df07738f0c

---

### 4. Alamat wallet demo (2 notaris, 1 resolver, 1 admin)
**Untuk**: Teman 1 + UI  
**Dari mana**: hasil setup role

**Demo Wallets** (untuk testing UI):
```
Notary 1:  0xb6b140a62D22A5e5f5f96A03F433163eC514AbBb
Notary 2:  0xA06A9CB9f5e78056236Cca7EE551fbCB1a90a72A
Resolver:  0x63DF52F754e35B0734767b86d2342b5EB766f324
Admin:     0xF29b83d440419a8c4AE25b98882cA37b91a9D0f0
```

Private keys ada di `demo-wallets.txt` (jangan commit, share via secure channel ke teman saja).

---

### 5. Parameter aktif (window, bond)
**Untuk**: UI  
**Dari mana**: hasil setup parameter

```
Challenge Window: 120 detik (2 menit)
Bond: 0.01 ETH
```

UI harus tampilkan countdown 2 menit setelah lease registered, dan form challenge harus validasi >= 0.01 ETH.

---

### 6. Kode tanah demo (LAND-001 sampai LAND-003) dan statusnya sekarang
**Untuk**: UI  
**Dari mana**: hasil seed

**Saat ini**: Belum ada tanah yang terdaftar (contract kosong).

**Kode tanah demo** (sesuai `00-shared-spec.md`):
```
LAND-001: kasus normal (happy path)
LAND-002: kasus sewa ganda ditolak
LAND-003: kasus challenge
```

**Cara generate landId untuk UI**:
```javascript
import { keccak256, toHex } from 'viem';

const landId = keccak256(toHex('LAND-001'));
// 0x5e4a7843e35... (bytes32)
```

**Status enum**:
```
0 = Available
1 = PendingFinalization
2 = Leased
3 = Disputed
4 = Cancelled
5 = Expired
```

---

### 7. 00-shared-spec.md versi terbaru
**Untuk**: Semua  
**Dari mana**: repo

File sudah ada di root: `00-shared-spec.md`

**Penting**: Semua nama fungsi, event, dan struct di spec itu TIDAK BOLEH diubah tanpa sync semua orang.

---

## File-file yang perlu dibagikan

1. `DEPLOYMENTS.md` → alamat contract, explorer, tx hash
2. `out/LeaseRegistry.sol/LeaseRegistry.json` → ABI lengkap
3. `demo-wallets.txt` → private keys (via secure channel, JANGAN commit)
4. `00-shared-spec.md` → kontrak fungsi/event (sudah ada di repo)
5. `README.md` → instruksi run-it-yourself

---

## Quick Start untuk Frontend Dev

### Setup wagmi config
```typescript
import { monadTestnet } from 'wagmi/chains'; // Butuh patch, lihat monskills wallet-integration

const config = createConfig({
  chains: [monadTestnet],
  transports: {
    [monadTestnet.id]: http('https://testnet-rpc.monad.xyz'),
  },
});
```

### Read contract example
```typescript
import { useReadContract } from 'wagmi';
import LeaseRegistryABI from './LeaseRegistry.abi.json';

const { data: land } = useReadContract({
  address: '0x11c1a9ccb57a24a5ec52c20bfa67c6df07738f0c',
  abi: LeaseRegistryABI,
  functionName: 'getLand',
  args: [landId], // bytes32
});

// data = [status, tenant, notary, startTime, endTime, challengeDeadline, docHash, challengeCount]
```

### Write contract example
```typescript
import { useWriteContract } from 'wagmi';

const { writeContract } = useWriteContract();

// Challenge
writeContract({
  address: '0x11c1a9ccb57a24a5ec52c20bfa67c6df07738f0c',
  abi: LeaseRegistryABI,
  functionName: 'challenge',
  args: [landId, evidenceHash],
  value: parseEther('0.01'), // bond
});
```

### Watch events
```typescript
import { useWatchContractEvent } from 'wagmi';

useWatchContractEvent({
  address: '0x11c1a9ccb57a24a5ec52c20bfa67c6df07738f0c',
  abi: LeaseRegistryABI,
  eventName: 'LeaseRegistered',
  onLogs(logs) {
    console.log('New lease:', logs);
  },
});
```

---

## Testing UI

1. Connect wallet ke Monad Testnet
2. Import salah satu demo wallet private key ke MetaMask
3. Pastikan RPC URL: `https://testnet-rpc.monad.xyz`, Chain ID: `10143`
4. Coba register lease as Notary 1
5. Coba challenge (butuh ETH untuk bond, minta faucet: https://faucet.monad.xyz/)

---

## Kontak

Kalau ada yang kurang jelas atau butuh data tambahan, kabari via grup/Slack.
