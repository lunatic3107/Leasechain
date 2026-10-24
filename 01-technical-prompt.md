# LeaseChain: Technical Pack (Kamu + Teman 1)

> Prasyarat: baca `00-shared-spec.md`. Semua nama fungsi/event di sini mengikuti spec itu.
> Catatan: **jangan percaya kode AI mentah.** Review sendiri logika anti-double-lease dan state machine.

---

## Bagian A. Kamu: Smart Contract

### A1. Setup agent

Pasang skill Monad (sesuai halaman skills.devnads.com):

```
npx skills add therealharpaljadeja/monskills
```

Lalu mulai sesi agent dengan:

> Open https://skills.devnads.com/install.md and follow its MONSKILLS install instructions. After MONSKILLS is installed, start with the local monskill routing skill.

### A2. Prompt untuk agent (copy-paste)

```
You are helping me build a Solidity smart contract for a hackathon on Monad Testnet.
Use the Monad skills for network config, deployment and verification. Do NOT guess
chain IDs, RPC URLs, or explorer URLs; take them from the skills/official docs.

PROJECT: LeaseChain, a public registry of land LEASE status (not ownership).
Notaries register leases; the contract rejects double-leases; a lease is not final
until a challenge window passes; anyone can challenge with a bond; a resolver
decides disputes. Personal data never goes on-chain, only hashes.

CONSTRAINTS
- Solidity, OpenZeppelin AccessControl with roles: NOTARY, RESOLVER, ADMIN
- Keep it SMALL and readable. No upgradeability, no tokens/NFTs, no ZK.
- Use Foundry or Hardhat (pick whichever the Monad skill recommends)
- Custom errors instead of revert strings
- Checks-effects-interactions; use a pull-payment or safe transfer pattern for
  bond refunds; protect against reentrancy
- No hardcoded secrets. Private key only via environment variable.

STATUS ENUM (exact order)
0 Available, 1 PendingFinalization, 2 Leased, 3 Disputed, 4 Cancelled, 5 Expired

STRUCT per land (keyed by bytes32 landId):
status, tenant, notary, startTime, endTime, challengeDeadline, docHash,
challengeCount, challenger, challengeBond

STATE TRANSITIONS
- registerLease(landId, tenant, durationSeconds, docHash) [NOTARY]:
  require status is Available (or Cancelled/Expired treated as Available).
  Set Pending, challengeDeadline = now + challengeWindow.
- cancel(landId) [NOTARY]: only while Pending, only by the notary who registered.
- challenge(landId, evidenceHash) payable: only while Pending and before deadline,
  msg.value >= bond, challengeCount < MAX_CHALLENGES (3). Status -> Disputed.
- resolve(landId, upheld) [RESOLVER]: only while Disputed.
  upheld=true  -> Cancelled, refund bond to challenger.
  upheld=false -> back to Pending with the ORIGINAL deadline (do not reset),
                  bond is forfeited to a treasury address.
- finalize(landId): anyone; only Pending and block.timestamp >= challengeDeadline.
  -> Leased.
- expire(landId): anyone; only Leased and block.timestamp >= endTime. -> Expired.
- setChallengeWindow(seconds) / setBond(wei) [ADMIN]

VIEWS: getLand(landId), notaryStats(address) -> totalLeases,totalDisputed,totalCancelled,
challengeWindow(), bond()

EVENTS (exact):
LeaseRegistered(bytes32 indexed landId, address indexed notary, address tenant, uint64 endTime, bytes32 docHash)
LeaseChallenged(bytes32 indexed landId, address indexed challenger, bytes32 evidenceHash)
DisputeResolved(bytes32 indexed landId, address indexed resolver, bool upheld)
LeaseFinalized(bytes32 indexed landId)
LeaseCancelled(bytes32 indexed landId, address indexed by)
LeaseExpired(bytes32 indexed landId)

DELIVERABLES
1. Contract + interface file
2. Tests covering: happy path, double-lease rejection, unauthorized callers,
   challenge with insufficient bond, challenge after deadline, resolve both
   branches, finalize too early, expire, challenge cap, bond refund/forfeit
3. Deploy script for Monad Testnet (reads PRIVATE_KEY from env)
4. Commands to verify the contract source on the Monad explorer
5. A short list of known limitations
Start by proposing the file layout and wait for my OK before writing code.
```

### A3. Kerangka kerja (checklist)

- [ ] Repo publik dibuat, struktur `contracts/`, `test/`, `script/`, `frontend/`, `README.md`
- [ ] Kontrak + interface sesuai spec
- [ ] Test lulus (minimal skenario di prompt)
- [ ] **Review manual:** anti-double-lease, jalur bond (refund vs forfeit), siapa boleh memanggil apa
- [ ] Deploy testnet, **catat alamat**
- [ ] Verifikasi source di explorer (25 poin)
- [ ] Beri role: wallet notaris demo (x2), resolver demo, admin
- [ ] Set `challengeWindow` demo (~120 detik) dan `bond` kecil
- [ ] Seed data demo: tiga tanah mock (lihat spec bagian 6)
- [ ] Kirim ke Teman 1 dan UI: alamat kontrak, ABI, alamat wallet demo
- [ ] Hasilkan file `DEPLOYMENTS.md` (alamat, chain, tanggal)

**Peringatan:** jangan commit private key. Pakai wallet khusus testnet.

---

## Bagian B. Teman 1: Integrasi Frontend, Hosting, README

### B1. Prompt untuk agent (copy-paste)

```
You are helping me wire a frontend to a deployed smart contract on Monad Testnet
for a hackathon. Use the Monad skills for network config, wallet connection,
and deployment to production. Do NOT guess chain IDs/RPC URLs; take them from the skills.

STACK: Next.js + wagmi + viem (or whatever the Monad skill scaffold recommends).
Hosting: any public host (no custom domain needed).

INPUTS I WILL PROVIDE: contract address, ABI, demo wallet addresses.
A separate teammate is building UI components with mock data; our job is to build
a data layer with a clean interface so mock data can be swapped for real chain data.

BUILD
1. Data layer (hooks): useLand(landId), useNotaryStats(address), useParams(),
   and an events feed for LeaseRegistered/LeaseChallenged/DisputeResolved/
   LeaseFinalized/LeaseCancelled/LeaseExpired.
2. Write actions with wallet: registerLease, cancel, challenge (sends bond),
   resolve, finalize, expire.
3. Public pages work WITHOUT a wallet (read-only).
4. For write actions, show tx status. If the Monad skill/docs support the
   synchronous raw-transaction RPC (eth_sendRawTransactionSync), use it so the UI
   updates instantly after a transaction during the demo.
5. Countdown component for challengeDeadline (uses chain timestamp where possible).
6. A mock/real switch via env variable so the UI teammate can work on mock data.
7. Deploy to a public host and give me the live URL.

CONSTRAINTS
- No private keys in frontend code or repo.
- Keep it simple. No state library beyond what wagmi/react-query provide.
- Handle errors with readable messages (e.g., "Land is already leased").
Start by proposing the file layout and wait for my OK before writing code.
```

### B2. Kerangka kerja (checklist)

- [ ] Scaffold app (pakai skill scaffold Monad)
- [ ] Hosting publik jalan (halaman kosong pun cukup di awal)
- [ ] Hooks data dengan **mode mock dulu**, supaya UI tidak menunggu kontrak
- [ ] Ganti ke data kontrak asli setelah alamat tersedia (~14.15)
- [ ] Uji tiap aksi tulis dengan wallet demo
- [ ] Uji transaksi live end-to-end sesuai skenario demo
- [ ] `.env.example` (tanpa secret)

### B3. Kerangka README (rubrik: 25 + 25 poin)

```markdown
# LeaseChain

One-line description.

## Live
- Live URL: <...>
- Network: Monad Testnet
- Contract address: <...>
- Explorer (verified source): <...>

## What it does
(3-5 kalimat bahasa sederhana)

## Run it yourself (tanpa bantuan kami)
1. Prasyarat (Node versi, wallet, faucet testnet)
2. git clone ...
3. Install dependencies
4. Copy .env.example -> .env, isi variabel
5. Run dev server
6. Cara mencoba skenario demo (langkah demi langkah)

## Demo accounts
(alamat wallet demo, role masing-masing; JANGAN tulis private key)

## Architecture
(diagram singkat: off-chain, notaris, kontrak, dashboard)

## Known limitations
- Resolver adalah simulasi putusan hukum
- Verifikasi BPN adalah mock
- Sistem tidak mendeteksi suap secara otomatis
- Data demo fiktif

## Roadmap
(stake/slashing, resolver independen, integrasi BPN, dll)
```

**Tes wajib 15.15:** minta orang lain (bukan anggota tim) menjalankan README dari nol. Perbaiki yang macet.
