# LeaseChain UI

> **Catatan Demo:** Ini adalah frontend prototype untuk hackathon. Menggunakan data mock. Kontrak belum terdeploy.

## Tentang LeaseChain

LeaseChain adalah catatan publik status sewa tanah di Bali (di Monad) yang:
- ✅ Menolak sewa ganda
- ✅ Memberi masa keberatan sebelum sewa resmi
- ✅ Menampilkan rekam jejak notaris secara terbuka
- ⚠️ **TIDAK** menjual tanah atau menggantikan notaris/hukum

## Setup & Instalasi

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Struktur Data

UI ini dibangun dengan **data layer yang terpisah** (`src/lib/data/`) untuk memudahkan integrasi dengan kontrak:

```
src/lib/data/
├── types.ts         # TypeScript interfaces
├── mockData.ts      # Data demo untuk development
└── dataProvider.ts  # Interface + implementasi mock
```

### Integrasi dengan Kontrak

**Untuk mengganti mock data dengan data blockchain:**

1. Buka `src/lib/data/dataProvider.ts`
2. Buat implementasi baru dari interface `DataProvider`
3. Gunakan wagmi/viem untuk memanggil fungsi kontrak:
   - `getLand()` → panggil `getLand(bytes32 landId)` 
   - `getNotaryStats()` → panggil `notaryStats(address)`
   - dll.
4. Update export di baris terakhir untuk menggunakan implementasi baru

Interface kontrak ada di `00-shared-spec.md`.

## Fitur UI

### 1. Halaman Publik (tanpa wallet)
- **Cek Status Tanah** (`/`): Search tanah, lihat status, countdown timer, timeline events
- **Audit Trail Notaris** (`/audit`): Tabel notaris dengan flag pola mencurigakan

### 2. Halaman Aksi (butuh wallet)
- **Panel Notaris** (`/notary`): Form daftarkan sewa baru
- **Panel Keberatan** (`/challenge`): Form ajukan keberatan + bond
- **Panel Resolver** (`/resolver`): Simulasi keputusan sengketa

### 3. Fitur Demo
- **Quick Fill** button di setiap form untuk percepat demo
- **Countdown timer** besar dan jelas untuk challenge window
- **Mock wallet** connection (klik "Connect Wallet" untuk simulasi)

## Skenario Demo (3 menit)

1. Buka `/` → search `LAND-001` → tunjukkan countdown timer
2. Ke `/notary` → quick fill → coba daftarkan `LAND-002` (akan ditolak: sudah disewa)
3. Ke `/challenge` → quick fill → ajukan keberatan `LAND-001`
4. Ke `/resolver` → lihat sengketa `LAND-003` → resolve
5. Ke `/audit` → tunjukkan notaris dengan flag "Pola Mencurigakan"
6. Klik "Keterbatasan Sistem" → baca disclaimer

## Stack Teknis

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Icons**: Lucide React
- **Fonts**: Inter (UI), JetBrains Mono (code)

## Palet Warna

- Primary: `#0A6B6D` (teal - trust, stability)
- Accent: `#D87A4A` (terracotta - earth, Bali)
- Success: `#2D7A4F` (jade - approved)
- Warning: `#E59500` (amber - pending)
- Danger: `#D9534F` (coral - disputed)

## Keterbatasan

**Yang TIDAK kami lakukan:**
- Menggantikan notaris atau BPN
- Menjual/transfer tanah
- Mendeteksi suap otomatis
- Resolver sungguhan (masih simulasi)

**Yang kami tawarkan:**
- Transparansi publik
- Anti-double-lease
- Masa keberatan
- Audit trail

## Build in Public

Video dan konten untuk hackathon ada di `02-uiux-prompt.md`.

---

Built with ❤️ for Monad Blitz Hackathon
