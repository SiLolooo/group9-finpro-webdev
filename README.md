# Group 9 - Udara Sehat Harian: Informasi Kualitas Udara & Catatan Aktivitas (SDG 11.6 & 3.9)

Final Project Web Development - HITLAB 26.2  
**Studi Kasus:** Jalur B — Pekerja luar ruang mencatat durasi aktivitas dan meninjau perkiraan kondisi kualitas udara pada jam terkait.

## Tim & Pembagian Peran (3 Anggota)
- **[Nama Anggota 1]** - **Frontend & Styling (HTML & Tailwind CSS)**  
  Membangun seluruh antarmuka web responsif: halaman informasi & skala indeks US AQI, pilihan lokasi umum, tabel/grafik prakiraan 24 jam (`PM2.5`, `PM10`, `US AQI`), serta form & daftar jurnal aktivitas[cite: 6].
- **[Nama Anggota 2]** - **Frontend Logic & Integrasi (JavaScript & Fetch API)**  
  Menghubungkan tampilan dengan Backend API, mengatur DOM Manipulation, state loading/empty/error, timestamp pembaruan, serta mekanisme fallback ke snapshot data cadangan[cite: 1, 6].
- **[Nama Anggota 3]** - **Backend, API Contract & Deployment (Express.js & Vercel)**  
  Membangun server Express.js (endpoint prakiraan udara & CRUD jurnal aktivitas), mengintegrasikan adapter penyimpanan persisten, deploy ke Vercel, serta mengelola Pull Request di GitHub[cite: 1, 6].

## Konvensi Repositori
- **Struktur Folder:**
  - `/frontend` : Halaman antarmuka (HTML, Tailwind CSS, JavaScript)
  - `/backend` : Server API (Node.js & Express.js)
- **Aturan Git:**
  - Dilarang push langsung ke `main` setelah setup awal selesai.
  - Gunakan format branch: `feat/nama-fitur` (contoh: `feat/tabel-aqi`, `feat/crud-aktivitas`).
  - Lakukan Pull Request untuk menggabungkan kode ke `main`.

## Batasan Demo & Atribusi Data
- Sumber data prakiraan kualitas udara berasal dari **Open-Meteo / CAMS Air Quality API**[cite: 6].
- Angka prakiraan pada koordinat pilihan merupakan simulasi model regional per jam, bukan pembacaan sensor di rumah/lokasi pengguna maupun pengukuran dosis paparan kesehatan[cite: 6].
- Aplikasi menyediakan **snapshot data cadangan berlabel tanggal** apabila API live tidak tersedia saat pengujian[cite: 1, 6].
