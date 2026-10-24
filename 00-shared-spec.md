# LeaseChain: Shared Spec (baca semua anggota tim)

> Dokumen ini adalah **kontrak antar-peran**. Kalau ada yang ingin mengubah nama fungsi/event/status, kabari semua orang dulu, karena UI dan integrasi bergantung pada ini.

## 1. Satu kalimat

LeaseChain adalah catatan publik status sewa tanah di Bali (di Monad) yang menolak sewa ganda, memberi masa keberatan sebelum sewa resmi, dan menampilkan rekam jejak notaris secara terbuka.

## 2. Yang DIKERJAKAN vs TIDAK

| Dikerjakan (MVP) | TIDAK dikerjakan (taruh di roadmap) |
|---|---|
| Daftar sewa oleh notaris | Stake/slashing notaris |
| Anti-double-lease | ZK / privasi lanjutan |
| Challenge window + bond | Integrasi BPN sungguhan |
| Resolve sengketa (resolver simulasi) | Token ERC-1155 / NFT rumit |
| Dashboard publik + audit trail notaris | Challenge setelah status LEASED |
| Deploy testnet + verifikasi explorer | Multisig sungguhan |

**Aturan emas:** hanya umumkan fitur yang benar-benar jalan saat demo (rubrik: "all announced functions are working").

## 3. Aktor

| Aktor | Peran |
|---|---|
| Notaris | Mendaftarkan tanah dan sewa (role `NOTARY`) |
| Pihak yang keberatan | Siapa saja, wajib setor bond (`challenge`) |
| Resolver | Memutuskan sengketa. **Untuk demo: satu wallet tim, diberi label "simulasi putusan pengadilan/BPN"** |
| Admin | Mengatur parameter (window, bond) |
| Publik | Hanya membaca, tanpa wallet |

## 4. State machine

```
AVAILABLE --registerLease--> PENDING_FINALIZATION
PENDING_FINALIZATION --window habis, tanpa challenge, finalize()--> LEASED
PENDING_FINALIZATION --challenge()--> DISPUTED
PENDING_FINALIZATION --cancel() oleh notaris--> CANCELLED
DISPUTED --resolve(upheld=true)--> CANCELLED   (bond kembali ke challenger)
DISPUTED --resolve(upheld=false)--> PENDING_FINALIZATION (sisa window; bond hangus)
LEASED --masa sewa habis, expire()--> EXPIRED
CANCELLED / EXPIRED --> tanah bisa didaftarkan lagi (AVAILABLE)
```

Aturan penting:
- `registerLease` **ditolak** kalau status bukan AVAILABLE (anti-double-lease).
- Challenge yang ditolak **tidak mengulang window dari nol**, hanya sisa waktu yang berlanjut.
- Batas challenge per tanah per sewa (usulan: 3).
- Durasi window dan nilai bond = **parameter** (demo: ~2 menit; produksi: 7-14 hari).

## 5. Antarmuka kontrak (JANGAN diubah sepihak)

Status (enum, urutan ini):
`0 Available, 1 PendingFinalization, 2 Leased, 3 Disputed, 4 Cancelled, 5 Expired`

Fungsi tulis:

| Fungsi | Siapa | Keterangan |
|---|---|---|
| `registerLease(bytes32 landId, address tenant, uint64 durationSeconds, bytes32 docHash)` | NOTARY | Status harus Available |
| `cancel(bytes32 landId)` | NOTARY | Hanya saat Pending |
| `challenge(bytes32 landId, bytes32 evidenceHash)` payable | Siapa saja | Wajib kirim >= bond, saat Pending |
| `finalize(bytes32 landId)` | Siapa saja | Setelah window habis, tanpa dispute aktif |
| `resolve(bytes32 landId, bool upheld)` | RESOLVER | Hanya saat Disputed |
| `expire(bytes32 landId)` | Siapa saja | Setelah masa sewa habis |
| `setChallengeWindow(uint64 seconds)` | ADMIN | |
| `setBond(uint256 wei)` | ADMIN | |

Fungsi baca:

| Fungsi | Mengembalikan |
|---|---|
| `getLand(bytes32 landId)` | status, tenant, notary, startTime, endTime, challengeDeadline, docHash, challengeCount |
| `notaryStats(address notary)` | totalLeases, totalDisputed, totalCancelled |
| `challengeWindow()` / `bond()` | parameter aktif |

Event (untuk dashboard dan audit trail):

```
LeaseRegistered(bytes32 indexed landId, address indexed notary, address tenant, uint64 endTime, bytes32 docHash)
LeaseChallenged(bytes32 indexed landId, address indexed challenger, bytes32 evidenceHash)
DisputeResolved(bytes32 indexed landId, address indexed resolver, bool upheld)
LeaseFinalized(bytes32 indexed landId)
LeaseCancelled(bytes32 indexed landId, address indexed by)
LeaseExpired(bytes32 indexed landId)
```

`landId` = hash dari kode registrasi internal tanah (**bukan** alamat/NIK mentah).

## 6. Data demo (mock, jujur dinyatakan mock)

- 3 tanah contoh: `LAND-001` (kasus normal), `LAND-002` (kasus sewa ganda ditolak), `LAND-003` (kasus challenge)
- 2 notaris demo: satu "bersih", satu dengan pola mencurigakan (untuk dashboard)
- Semua identitas fiktif. Tidak ada KTP/NIK sungguhan di mana pun.

## 7. Skenario demo 3 menit (semua orang harus hafal)

1. Notaris register lease `LAND-001` -> status PENDING + hitung mundur
2. Coba daftarkan `LAND-001` lagi -> **ditolak**
3. Challenge masuk di `LAND-003` -> DISPUTED terlihat di dashboard
4. Resolver memutuskan -> CANCELLED atau kembali PENDING
5. `LAND-001` tanpa challenge -> auto-finalize ke LEASED
6. Tunjukkan audit trail notaris
7. Sebut lantang: **repo link, alamat kontrak, live URL**, dan satu kalimat limitasi jujur

Kalimat limitasi: *"Resolver dan verifikasi BPN di demo ini masih simulasi. Sistem tidak bisa mendeteksi suap secara otomatis. Yang kami tawarkan adalah transparansi dan masa keberatan."*

## 8. Checklist rubrik (400 poin)

**Basic (100)**
- [ ] Repo GitHub publik
- [ ] README (live URL + alamat kontrak)
- [ ] Kontrak di Monad Testnet
- [ ] Proyek ter-host publik

**Advance: working (100)**
- [ ] Semua fungsi yang diumumkan jalan
- [ ] Transaksi on-chain live saat demo
- [ ] Kontrak terverifikasi di explorer
- [ ] Orang lain bisa menjalankan dari README tanpa bantuan

**Advance: build in public (100)**
- [ ] Post di X/LinkedIn tag @monad, @monad_dev, @geeky_kartikey
- [ ] Video demo >= 30 detik, produk berjalan
- [ ] Video iklan kreatif
- [ ] 5K+ views kolektif (di luar kendali, post sedini mungkin)

**Bonus (100)**
- [ ] Mainnet (25), pertimbangkan: data demo itu mock
- [ ] Custom domain (15)
- [ ] PMF / revenue / innovation (juri, sampai 20 masing-masing)

Semua dikunci **16.45**.

## 9. Timeline

| Jam | Kegiatan |
|---|---|
| 12.45-13.00 | Sync, kunci spec ini, buat repo publik |
| 13.00-14.15 | Kontrak + deploy (A) / scaffold + hosting + README (B) / desain dengan data mock (UI) |
| 14.15-15.15 | Integrasi, uji transaksi live |
| 15.15-15.45 | Latihan demo; **orang lain menjalankan README dari nol** |
| 15.45-16.15 | Rekam video, posting |
| 16.15-16.30 | Cek final dan submit |
| 16.30-16.45 | Buffer |
