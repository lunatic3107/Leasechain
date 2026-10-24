# Summary Handoff untuk Tim UI

## ✅ Yang Sudah Selesai

### 1. Alamat Kontrak
**File**: `DEPLOYMENTS.md`
```
0x11c1a9ccb57a24a5ec52c20bfa67c6df07738f0c
```

### 2. ABI (file JSON)
**File**: `LeaseRegistry.abi.json` (baru dibuat)
Atau ambil dari: `out/LeaseRegistry.sol/LeaseRegistry.json`

### 3. Nama Jaringan dan Link Explorer
**File**: `DEPLOYMENTS.md`
- Network: Monad Testnet
- Chain ID: 10143
- RPC: https://testnet-rpc.monad.xyz
- Explorer: https://explorer-testnet.monad.xyz/address/0x11c1a9ccb57a24a5ec52c20bfa67c6df07738f0c

### 4. Alamat Wallet Demo
**File**: README.md (alamat saja) + `demo-wallets.txt` (dengan private key, JANGAN commit)
```
Notary 1:  0xb6b140a62D22A5e5f5f96A03F433163eC514AbBb
Notary 2:  0xA06A9CB9f5e78056236Cca7EE551fbCB1a90a72A
Resolver:  0x63DF52F754e35B0734767b86d2342b5EB766f324
Admin:     0xF29b83d440419a8c4AE25b98882cA37b91a9D0f0
```

### 5. Parameter Aktif (window, bond)
**Dari**: hasil setup
```
Challenge Window: 120 detik
Bond: 0.01 ETH
```

### 6. Kode Tanah Demo
**Dari**: hasil seed (belum ada tanah terdaftar, contract kosong untuk UI populate)
```
LAND-001 (kasus normal)
LAND-002 (sewa ganda ditolak)
LAND-003 (challenge)

// Generate landId:
keccak256(toHex("LAND-001"))
```

Status sekarang: semua Available (0)

### 7. 00-shared-spec.md versi terbaru
**File**: `00-shared-spec.md` (sudah ada di repo)

---

## 📦 File yang Harus Dibagikan ke Teman UI

1. ✅ `DEPLOYMENTS.md` - alamat contract + explorer links
2. ✅ `LeaseRegistry.abi.json` - ABI untuk wagmi/viem
3. ✅ `demo-wallets.txt` - private keys (share secure, jangan commit)
4. ✅ `00-shared-spec.md` - fungsi/event names (jangan diubah)
5. ✅ `HANDOFF-UI.md` - instruksi lengkap setup wagmi + examples

---

## 🚀 Quick Start untuk UI Dev

Copy paste ini ke teman UI:

**Wagmi setup**:
```typescript
import { http, createConfig } from 'wagmi';

// monadTestnet belum di wagmi/chains bawaan, definisikan manual:
const monadTestnet = {
  id: 10143,
  name: 'Monad Testnet',
  nativeCurrency: { name: 'MON', symbol: 'MON', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://testnet-rpc.monad.xyz'] },
  },
  blockExplorers: {
    default: { name: 'MonadVision', url: 'https://explorer-testnet.monad.xyz' },
  },
};

const config = createConfig({
  chains: [monadTestnet],
  transports: {
    [monadTestnet.id]: http(),
  },
});
```

**Contract config**:
```typescript
const CONTRACT_ADDRESS = '0x11c1a9ccb57a24a5ec52c20bfa67c6df07738f0c';
import ABI from './LeaseRegistry.abi.json';
```

**Read example** (getLand):
```typescript
const { data } = useReadContract({
  address: CONTRACT_ADDRESS,
  abi: ABI,
  functionName: 'getLand',
  args: [landId], // bytes32
});
// Returns: [status, tenant, notary, startTime, endTime, challengeDeadline, docHash, challengeCount]
```

**Write example** (registerLease):
```typescript
const { writeContract } = useWriteContract();

writeContract({
  address: CONTRACT_ADDRESS,
  abi: ABI,
  functionName: 'registerLease',
  args: [
    landId,           // bytes32
    tenantAddress,    // address
    31536000n,        // uint64 (1 tahun dalam detik)
    docHash,          // bytes32
  ],
});
```

---

## ⚠️ Catatan Penting

1. **Private keys** di `demo-wallets.txt` hanya untuk testnet. JANGAN pakai untuk mainnet.
2. **RPC public** `https://testnet-rpc.monad.xyz` bisa lambat. Kalau butuh RPC cepat, daftar Alchemy/QuickNode.
3. **Challenge window 2 menit** - UI harus countdown real-time dari `challengeDeadline`.
4. **Faucet testnet**: https://faucet.monad.xyz/ (untuk bond 0.01 ETH).

---

## 📞 Contact

Kalau ada yang kurang atau error, DM grup. File lengkap ada di repo.
