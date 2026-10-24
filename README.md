# LeaseChain

Catatan publik status sewa tanah di Bali (Monad Testnet) yang menolak sewa ganda, memberi masa keberatan sebelum sewa resmi, dan menampilkan rekam jejak notaris secara terbuka.

## Live

- **Network**: Monad Testnet
- **Contract**: (akan diisi setelah deploy)
- **Explorer**: (akan diisi setelah verify)

## Apa yang dikerjakan

LeaseChain mencatat status sewa (bukan kepemilikan) tanah di blockchain. Notaris mendaftarkan sewa, sistem menolak sewa ganda otomatis, sewa masuk masa keberatan 2 menit, siapa saja bisa keberatan dengan setor jaminan, resolver memutuskan sengketa. Semua transaksi publik untuk transparansi.

**Ini BUKAN** jual-beli tanah dan BUKAN menggantikan notaris atau hukum tanah Indonesia.

## Run it yourself

### Prerequisites

1. **Foundry** (Solidity toolkit):
   ```bash
   curl -L https://foundry.paradigm.xyz | bash
   foundryup
   ```

2. **Wallet dengan MON testnet**:
   - Buat wallet: `cast wallet new`
   - Faucet: https://faucet.monad.xyz/
   - Simpan private key di tempat aman

3. **Node.js 18+** (untuk frontend, opsional)

### Install & Deploy

```bash
# Clone
git clone <repo-url>
cd MONAD_HACKATHON

# Install dependencies
forge install

# Setup environment
cp .env.example .env
# Edit .env: isi PRIVATE_KEY dengan key Anda

# Test (opsional)
forge test -vv

# Deploy ke Monad Testnet
forge script script/Deploy.s.sol --rpc-url https://testnet-rpc.monad.xyz --broadcast

# Catat address yang muncul, lalu verify (ganti <ADDRESS> dan <DEPLOYER>):
# Method 1: Via API (recommended)
forge verify-contract <ADDRESS> contracts/LeaseRegistry.sol:LeaseRegistry \
  --chain 10143 --show-standard-json-input > /tmp/standard-input.json

cat out/LeaseRegistry.sol/LeaseRegistry.json | jq '.metadata' > /tmp/metadata.json

curl -X POST https://agents.devnads.com/v1/verify \
  -H "Content-Type: application/json" \
  -d '{
    "chainId": 10143,
    "contractAddress": "<ADDRESS>",
    "contractName": "contracts/LeaseRegistry.sol:LeaseRegistry",
    "compilerVersion": "v0.8.28+commit.7893614a",
    "standardJsonInput": '$(cat /tmp/standard-input.json)',
    "foundryMetadata": '$(cat /tmp/metadata.json)',
    "constructorArgs": "'$(cast abi-encode 'constructor(address,address)' <DEPLOYER> <DEPLOYER> | cut -c 3-)'"
  }'

# Method 2: Fallback via Sourcify
forge verify-contract <ADDRESS> contracts/LeaseRegistry.sol:LeaseRegistry \
  --chain 10143 --verifier sourcify \
  --verifier-url "https://sourcify-api-monad.blockvision.org/" \
  --constructor-args $(cast abi-encode "constructor(address,address)" <DEPLOYER> <DEPLOYER>)

# Seed demo data (notary1, notary2, resolver addresses)
export REGISTRY_ADDRESS=<ADDRESS>
export NOTARY1_ADDRESS=<address>
export NOTARY2_ADDRESS=<address>
export RESOLVER_ADDRESS=<address>
forge script script/Seed.s.sol --rpc-url https://testnet-rpc.monad.xyz --broadcast
```

### Mencoba skenario demo

1. **Register lease** (sebagai notary1):
   ```bash
   cast send <REGISTRY_ADDRESS> "registerLease(bytes32,address,uint64,bytes32)" \
     $(cast keccak "LAND-001") <TENANT_ADDRESS> 31536000 $(cast keccak "doc-hash") \
     --rpc-url https://testnet-rpc.monad.xyz --private-key <NOTARY1_PRIVATE_KEY>
   ```

2. **Coba register ulang** (ditolak):
   ```bash
   cast send <REGISTRY_ADDRESS> "registerLease(bytes32,address,uint64,bytes32)" \
     $(cast keccak "LAND-001") <TENANT_ADDRESS> 31536000 $(cast keccak "doc-hash") \
     --rpc-url https://testnet-rpc.monad.xyz --private-key <NOTARY1_PRIVATE_KEY>
   # Revert: NotAvailable()
   ```

3. **Challenge** (tunggu <2 menit):
   ```bash
   cast send <REGISTRY_ADDRESS> "challenge(bytes32,bytes32)" \
     $(cast keccak "LAND-001") $(cast keccak "evidence") \
     --value 0.01ether --rpc-url https://testnet-rpc.monad.xyz --private-key <CHALLENGER_KEY>
   ```

4. **Resolve** (sebagai resolver):
   ```bash
   cast send <REGISTRY_ADDRESS> "resolve(bytes32,bool)" \
     $(cast keccak "LAND-001") false \
     --rpc-url https://testnet-rpc.monad.xyz --private-key <RESOLVER_PRIVATE_KEY>
   ```

5. **Finalize** (tunggu >2 menit sejak register):
   ```bash
   cast send <REGISTRY_ADDRESS> "finalize(bytes32)" \
     $(cast keccak "LAND-001") \
     --rpc-url https://testnet-rpc.monad.xyz --private-key <ANY_KEY>
   ```

6. **Lihat status**:
   ```bash
   cast call <REGISTRY_ADDRESS> "getLand(bytes32)(uint8,address,address,uint64,uint64,uint64,bytes32,uint8)" \
     $(cast keccak "LAND-001") --rpc-url https://testnet-rpc.monad.xyz
   ```

## Demo accounts

(Akan diisi setelah seed: alamat wallet notary1, notary2, resolver. **TIDAK** termasuk private key.)

## Architecture

```
┌─────────────┐
│   Notaris   │──register──┐
└─────────────┘            │
                           ▼
┌─────────────┐      ┌──────────────────┐
│ Pihak awam  │─────▶│ LeaseRegistry.sol│
│ (challenge) │      │  (Monad Testnet) │
└─────────────┘      └──────────────────┘
                           │
┌─────────────┐            │
│  Resolver   │◀──resolve──┘
└─────────────┘

┌─────────────┐
│  Dashboard  │──read──▶ Events + getLand()
│  (publik)   │
└─────────────┘
```

Off-chain: UI frontend (Next.js + wagmi), data demo mock.
On-chain: status sewa, hash dokumen, challenge, finalize, rekam jejak notaris.

## Known Limitations

1. **Resolver adalah simulasi** putusan pengadilan/BPN untuk demo. Produksi butuh integrasi resmi.
2. **Verifikasi BPN adalah mock**. Sistem tidak memeriksa dokumen sungguhan.
3. **Sistem tidak mendeteksi suap secara otomatis**; yang ditawarkan adalah transparansi dan masa keberatan.
4. **Data demo fiktif** (LAND-001, LAND-002, LAND-003). Tidak ada NIK/KTP sungguhan.

## Tech Stack

- **Smart Contract**: Solidity 0.8.28, OpenZeppelin AccessControl + ReentrancyGuard
- **Testing**: Foundry (17 tests covering happy path, double-lease, challenge, role checks)
- **Deployment**: Monad Testnet (chain ID 10143)
- **Frontend**: (akan ditambahkan oleh teammate)

## Roadmap

- Stake/slashing untuk notaris nakal
- Integrasi BPN resmi
- ZK untuk privasi lanjutan
- Multisig resolver independen
- Challenge setelah status Leased
- Token ERC-1155 untuk representasi sewa

## Contract Functions

| Function | Who | Description |
|----------|-----|-------------|
| `registerLease` | NOTARY | Daftarkan sewa baru (status harus Available) |
| `cancel` | NOTARY | Batalkan sewa saat Pending |
| `challenge` | Anyone (with bond) | Keberatan saat Pending + setor jaminan |
| `resolve` | RESOLVER | Putuskan sengketa (upheld=bond kembali, dismissed=bond hangus) |
| `finalize` | Anyone | Sah-kan sewa setelah window habis tanpa sengketa aktif |
| `expire` | Anyone | Tandai sewa habis masa berlaku |
| `getLand` | Public | Baca status tanah |
| `notaryStats` | Public | Rekam jejak notaris (total leases, disputed, cancelled) |

## Security

- **Checks-effects-interactions** pattern
- **ReentrancyGuard** pada fungsi yang transfer ETH
- **Pull-payment** untuk bond refund (mapping `pendingWithdrawals`)
- **Custom errors** (gas-efficient)
- **Role-based access** (NOTARY, RESOLVER, ADMIN)

## License

MIT

---

**Dibuat untuk Monad Blitz Hackathon**
