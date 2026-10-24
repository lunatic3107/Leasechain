# LeaseChain: UI/UX Pack (Teman UI/UX)

> Prasyarat: baca `00-shared-spec.md`.
> Kamu bisa mulai **sekarang** dengan data mock. Kontrak belum perlu selesai.
> Tugasmu juga mencakup konten build in public (video dan posting), karena itu 100 poin.

---

## 1. Setup agent

Pakai skill Monad dari skills.devnads.com:

```
npx skills add therealharpaljadeja/monskills
```

Lalu mulai sesi agent dengan:

> Open https://skills.devnads.com/install.md and follow its MONSKILLS install instructions. After MONSKILLS is installed, start with the local monskill routing skill.

Halaman itu mengingatkan: kode hasil AI harus ditinjau dulu sebelum dianggap siap. Cek hasilnya di browser, jangan langsung percaya.

---

## 2. Prinsip desain

Penonton demo adalah **builder lain di ruangan** dan juri. Mereka memberi nilai pada produk yang jalan dan terlihat jelas, jadi:

- **Satu pesan per layar.** Status tanah harus terbaca dalam 2 detik.
- **Status = warna + teks + ikon** (jangan hanya warna).
- **Transparansi adalah daya jual.** Riwayat dan audit trail harus mudah ditemukan.
- **Bahasa awam.** Hindari jargon blockchain di UI utama (jelaskan "hash dokumen" sebagai "sidik jari dokumen").
- **Jangan tampilkan data pribadi.** Hanya kode tanah, status, tanggal, dan alamat wallet.
- **Halaman publik tanpa wallet.** Wallet hanya untuk aksi tulis.

Palet status (usulan):

| Status | Warna | Label UI |
|---|---|---|
| Available | Hijau | Tersedia |
| PendingFinalization | Kuning | Menunggu finalisasi (masa keberatan) |
| Leased | Biru | Disewa |
| Disputed | Merah | Sengketa |
| Cancelled | Abu-abu | Dibatalkan |
| Expired | Abu-abu muda | Berakhir |

---

## 3. Prompt untuk agent (copy-paste)

```
You are helping me design and build the UI for a hackathon project on Monad.
Use the Monad skills for frontend guidance. Do not invent chain/network details.

PROJECT: LeaseChain, a public registry of land LEASE status in Bali. It rejects
double-leases, gives a challenge window before a lease becomes final, and shows
each notary's public track record. It does NOT sell land and does NOT replace
notaries or law.

AUDIENCE: hackathon builders and judges watching a 3-minute live demo; also
ordinary people who should understand the status of a plot in 2 seconds.

IMPORTANT WORKFLOW: build with MOCK DATA first behind a clean data interface
(e.g., a /lib/data layer) because the contract is not deployed yet. A teammate
will swap mock for real chain data later. Do not hardcode mock data inside
components.

DATA SHAPES (mock these):
Land: { landId, status: 'Available'|'PendingFinalization'|'Leased'|'Disputed'|
'Cancelled'|'Expired', tenant, notary, startTime, endTime, challengeDeadline,
docHash, challengeCount }
NotaryStats: { address, totalLeases, totalDisputed, totalCancelled }
Event: { type: 'LeaseRegistered'|'LeaseChallenged'|'DisputeResolved'|
'LeaseFinalized'|'LeaseCancelled'|'LeaseExpired', landId, actor, timestamp }

PAGES / COMPONENTS
1. Public lookup page: search by land code -> big status badge, lease dates,
   countdown if Pending, history timeline of events. No wallet needed.
2. Audit trail / notary track record page: table of notaries with totals and a
   visible "suspicious pattern" flag (rule examples: many leases on the same
   land in a short time, high dispute ratio). Click a notary to see their history.
3. Notary panel (wallet required): form to register a lease (land code, tenant
   address, duration, document hash) with clear error states
   (e.g., "This land is already leased").
4. Challenge panel: form to challenge a pending lease (evidence hash + bond),
   explains the bond in plain language (refunded if valid, forfeited if not).
5. Resolver panel (labelled "Simulated court/BPN decision"): resolve a dispute.
6. Global: wallet connect button, network indicator, transaction status toasts,
   empty/loading/error states.
7. A "Known limitations" footer or modal in plain language.

DEMO REQUIREMENTS
- The demo flow must be completable in under 3 minutes by clicking through.
- The countdown for the challenge window must be large and obvious.
- Include a "demo mode" quick-fill for form fields to avoid typing live.

CONSTRAINTS
- Responsive; keep dependencies minimal; accessible contrast.
- Distinctive, intentional visual identity (not a generic template look).
Start by proposing a design direction (palette, type, layout sketch) and a
component list, then wait for my OK before building.
```

---

## 4. Kerangka kerja (checklist)

**Desain dan halaman**
- [ ] Arah visual disepakati (palet, font, tone)
- [ ] Halaman cek status (publik)
- [ ] Halaman audit trail notaris
- [ ] Panel notaris
- [ ] Panel challenge
- [ ] Panel resolver (label "simulasi")
- [ ] State kosong, loading, error
- [ ] Mode quick-fill untuk demo
- [ ] Serahkan komponen ke Teman 1 untuk disambung ke data asli (~14.15)

**Konten build in public (100 poin, jangan ditumpuk di akhir)**
- [ ] Post pertama sekarang: konsep/progres, tag **@monad, @monad_dev, @geeky_kartikey**
- [ ] Post progres tengah hari (screenshot UI)
- [ ] **Video demo** >= 30 detik, produk berjalan (rekam setelah integrasi stabil, ~15.45)
- [ ] **Video iklan kreatif** terpisah (30-60 detik, cerita masalah -> solusi)
- [ ] Posting semua video di sosmed sebelum 16.45
- [ ] Ajak teman membagikan (5K+ views kolektif, di luar kendali, makin awal makin baik)

**Aturan rumah dari panitia (screenshot):**
- Tanya dulu sebelum memposting orang yang terlihat di frame
- Jangan tampilkan layar dengan info pribadi
- Sebut lokasi sebagai **"The Studio"**, bukan kantor/HQ Monad

---

## 5. Kerangka video

### Video demo (30-90 detik)
1. Masalah dalam satu kalimat (sewa ganda di Bali)
2. Notaris mendaftarkan sewa -> status Pending + hitung mundur
3. Percobaan sewa ganda ditolak
4. Challenge -> status Sengketa
5. Audit trail notaris
6. Tutup: nama produk, live URL, "built on Monad"

### Video iklan kreatif (30-60 detik)
1. Hook: pertanyaan atau adegan ("Tanah ini disewa dua kali. Siapa yang menang?")
2. Masalah: ketidakjelasan dan sengketa
3. Solusi: papan status publik yang tidak bisa diubah diam-diam
4. Bukti: cuplikan UI
5. CTA: nama produk dan tag Monad

### Template posting

```
Building LeaseChain at the Monad Blitz: a public, tamper-proof registry for land
lease status in Bali. It rejects double-leases, gives a challenge window before
a lease is final, and shows each notary's public track record.
Built on @monad with @monad_dev. cc @geeky_kartikey
[video / screenshot]
```

(Sesuaikan isinya dan pastikan semua klaim di posting memang sudah jalan.)

---

## 6. Catatan penting

- **Kejujuran:** di UI dan konten, tandai resolver dan verifikasi BPN sebagai simulasi. Jangan mengesankan sudah terintegrasi dengan lembaga sungguhan.
- Pembagian kerja dengan Teman 1: kamu memegang **tampilan dan komponen**, Teman 1 memegang **koneksi data dan hosting**. Sepakati nama props/hooks di awal supaya penyambungan cepat.
