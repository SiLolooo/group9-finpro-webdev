# Group 9 - Kalkulator & Perbandingan Jejak Karbon Listrik Kos (SDG 7.3 & 13.3)

Final Project Web Development - HITLAB 26.2  
**Studi Kasus:** Jalur B — Pengelola Kos (Perbandingan emisi maksimal 3 unit/kamar pada bulan yang sama & perhitungan emisi per kapita)

## Tim & Pembagian Peran
- **[Anggota 1]** - **Frontend 1 (Halaman Informasi & Form Input Unit Kos)**  
  Membangun halaman utama, edukasi mode latihan, pilihan faktor emisi, dan form input kWh serta jumlah penghuni per unit/kamar kos.
- **[Anggota 2]** - **Frontend 2 (Tabel Riwayat CRUD & Komparasi Antar Unit)**  
  Membangun tabel catatan tiap unit kos (edit/hapus), ringkasan periode, serta tampilan perbandingan emisi antar unit (maksimal 3 unit) dan emisi per kapita.
- **[Anggota 3]** - **Frontend Logic & Integrasi (DOM & Fetch API)**  
  Menghubungkan antarmuka ke Backend API, mengatur validasi UI (batas maksimal 3 unit perbandingan), state loading/empty/error, dan timestamp.
- **[Anggota 4]** - **Backend, API Contract & Deployment**  
  Membangun server Express.js (`GET /api/faktor-emisi`, `POST /api/emisi`, CRUD `/api/readings`), validasi server (`kWh < 0` ditolak), deploy Vercel, serta menjaga repositori GitHub.

## Konvensi Repositori
- **Struktur Folder:**
  - `/frontend` : Halaman antarmuka (HTML, Tailwind CSS, JavaScript)
  - `/backend` : Server API (Node.js & Express.js)
- **Aturan Git:**
  - Dilarang push langsung ke `main` setelah setup awal selesai.
  - Gunakan format branch: `feat/nama-fitur` (contoh: `feat/komparasi-unit`, `feat/api-readings`).
  - Lakukan Pull Request untuk menggabungkan kode ke `main`.

## Batasan Demo & Mode Latihan
- Aplikasi ini menggunakan faktor emisi sintetis berlabel **"latihan"** (`0.87 kg CO2/kWh`) untuk tujuan pembelajaran dan simulasi.
- Hasil perhitungan merupakan estimasi edukatif (SDG 7.3 & 13.3) dan bukan inventarisasi emisi karbon resmi/tersertifikasi.
