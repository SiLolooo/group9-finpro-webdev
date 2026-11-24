# Group 9 - Udara Sehat Harian: Informasi Kualitas Udara & Catatan Aktivitas (SDG 11.6 & 3.9)

Final Project Web Development - HITLAB 26.2  
**Studi Kasus:** Jalur B — Pekerja luar ruang mencatat durasi aktivitas dan meninjau perkiraan kondisi kualitas udara pada jam terkait.

## Link Aplikasi (Kalian nanti edit sesuai dengan versi yang kalian buat) 
- **Live App deployment (Vercel):** `[Isi URL deploy Vercel]`
- **Initial Repo Check (GitHub Pages):** https://silolooo.github.io/group9-finpro-webdev/

## Tim & Pembagian Peran
- **[Anggota 1]** - **Frontend & Styling (HTML & Tailwind CSS)**  
  Membangun seluruh antarmuka web responsif: halaman informasi & skala indeks US AQI, pilihan lokasi umum, tabel/grafik prakiraan 24 jam (`PM2.5`, `PM10`, `US AQI`), serta form & daftar jurnal aktivitas.
- **[Anggota 2]** - **Frontend Logic & Integrasi (JavaScript & Fetch API)**  
  Menghubungkan tampilan dengan Backend API, mengatur DOM Manipulation, state loading/empty/error, timestamp pembaruan, serta mekanisme fallback ke snapshot data cadangan.
- **[Anggota 3]** - **Backend, API Contract & Deployment (Express.js & Vercel)**  
  Membangun server Express.js (`GET /api/air-quality`, CRUD `/api/activities`), mengintegrasikan `storageAdapter.js`, deploy Vercel, serta mengelola Pull Request di GitHub.

## Konvensi Repositori
- **Struktur Folder:**
  - `/frontend` : Halaman antarmuka (HTML, Tailwind CSS, JavaScript)
  - `/backend` : Server API (Node.js, Express.js, dan `storageAdapter.js`)
  - `/data` : Snapshot data cadangan prakiraan kualitas udara (`snapshot-open-meteo.json`)
- **Aturan Git:**
  - Dilarang push langsung ke `main` setelah setup awal selesai.
  - Gunakan format branch: `feat/nama-fitur` (contoh: `feat/tabel-aqi`, `feat/crud-aktivitas`).
  - Lakukan Pull Request untuk menggabungkan kode ke `main`.

## Batasan Demo & Atribusi Data
- Sumber data prakiraan kualitas udara berasal dari **Open-Meteo / CAMS Air Quality API**.
- Angka prakiraan pada koordinat pilihan merupakan simulasi model regional per jam, bukan pembacaan sensor di lokasi pengguna maupun pengukuran dosis paparan kesehatan.
- Jurnal hanya mencatat aktivitas harian dan meninjau perkiraan kondisi pada jam terkait (tidak menjanjikan "jam paling aman").
- Aplikasi menyediakan **snapshot data cadangan berlabel tanggal** apabila API live tidak tersedia saat pengujian.

## Alur Penggunaan Aplikasi (User Flow)
1. **Literasi & Skala US AQI:** Pengguna (pekerja luar ruang) membuka web untuk membaca penjelasan batasan data prakiraan serta kategori indeks `US AQI` (tanpa konversi sembarangan ke ISPU).
2. **Cek Prakiraan 24 Jam:** Pengguna memilih lokasi umum (default Jakarta) untuk melihat tabel/grafik prakiraan per jam (`PM2.5` dalam µg/m³, `PM10` dalam µg/m³, dan `US AQI`).
3. **Jurnal Aktivitas Luar Ruang (CRUD):** Pengguna mencatat rencana atau riwayat aktivitasnya (nama aktivitas, jam mulai/durasi, lokasi, catatan) dan dapat melihat, mengedit, atau menghapusnya untuk ditinjau terhadap perkiraan udara pada jam terkait.

## Alur Data & Arsitektur Sistem
- **Frontend (`index.html` + `app.js`)** ──(HTTP Fetch)──► **Backend Express**
- **Backend (`GET /api/air-quality`)** ──(Live API)──► Open-Meteo / CAMS Air Quality API
- **Backend (`GET /api/air-quality`)** ──(Fallback)──► `/data/snapshot-open-meteo.json` (jika API live gagal)
- **Backend (`CRUD /api/activities`)** ──(Simpan)──► `storageAdapter.js` (JSON)

## Daftar Endpoint API (Backend)
- `GET /api/air-quality` — Mengambil prakiraan kualitas udara 24 jam (`PM2.5`, `PM10`, `US AQI`) dari Open-Meteo atau snapshot cadangan
- `GET /api/activities` — Menampilkan seluruh riwayat catatan aktivitas luar ruang[cite: 1]
- `POST /api/activities` — Menambah catatan aktivitas baru (nama aktivitas, jam/durasi, lokasi, catatan)
- `PUT /api/activities/:id` — Mengubah catatan aktivitas berdasarkan ID
- `DELETE /api/activities/:id` — Menghapus catatan aktivitas berdasarkan ID

## Tahapan Pengerjaan (Roadmap)
- **Tahap 1 (Setup & Git):** Accept collaborator, clone repo, isi nama anggota di `README.md` via Pull Request.
- **Tahap 2 (Frontend UI & Tabel Awal):** Buat layout responsif (HTML + Tailwind CSS) untuk tabel prakiraan 24 jam, penjelasan skala US AQI, dan form jurnal aktivitas.
- **Tahap 3 (Backend & Integrasi API):** Buat server Express.js untuk mengambil data Open-Meteo (dengan fallback ke file snapshot) serta endpoint CRUD jurnal via `storageAdapter.js`.
- **Tahap 4 (Deploy & Finalisasi):** Deploy full-stack ke Vercel, update link live demo di `README.md`, dan pastikan atribusi Open-Meteo/CAMS tampil jelas.

## Cara Menjalankan di Lokal
1. Clone repositori ini dengan command:
   `git clone https://github.com/SiLolooo/group9-finpro-webdev.git`
   *(Kamu bisa jalanin di terminal vscode nya langsung)*
2. Masuk ke folder backend dan install dependencies *(saat tahap Sesi 7–8)*:
   `cd backend && npm install && npm start`
3. Buka file antarmuka di folder `frontend/` menggunakan **Live Server** di VS Code.
