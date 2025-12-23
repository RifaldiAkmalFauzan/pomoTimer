# ⏱️ Pomodoro Timer

Aplikasi Pomodoro sederhana berbasis command-line (Node.js) untuk membantu mengatur sesi kerja dan istirahat dengan notifikasi desktop.

## Fitur

- ✅ Durasi dapat dikustomisasi — Atur durasi kerja dan istirahat sesuai kebutuhan
- ✅ Notifikasi desktop — Notifikasi muncul saat sesi berakhir
- ✅ Tampilan CLI yang bersih — Hitungan mundur realtime dalam format HH:MM:SS
- ✅ Shutdown yang rapi — Hentikan timer kapan saja dengan `Ctrl+C`
- ✅ Validasi input — Pastikan durasi yang dimasukkan berupa angka positif
- ✅ Siklus otomatis — Berganti antara sesi kerja dan istirahat secara otomatis

## Persyaratan

- Node.js (v12.0 atau lebih baru)
- npm (sudah termasuk di Node.js)

## Instalasi

1. Clone repository:

```bash
git clone https://github.com/RifaldiAkmalFauzan/pomoTimer.git
cd pomoTimer
```

2. Install dependency:

```bash
npm install
```

## Penggunaan

### Jalankan (Default: 25 menit kerja + 5 menit istirahat)

```bash
node ./index.js
```

### Atur durasi sendiri

```bash
node ./index.js <work_duration> <break_duration>
```

Contoh:

- Pomodoro standar (25/5):
```bash
node ./index.js 25 5
```
- Sesi singkat (10/2):
```bash
node ./index.js 10 2
```
- Untuk testing cepat (30 detik kerja, 30 detik istirahat):
```bash
node ./index.js 0.5 0.5
```

## Cara Kerja

1. Program memulai dengan sesi kerja (Work)
2. Menampilkan hitungan mundur setiap detik
3. Saat waktu habis, munculkan notifikasi desktop
4. Secara otomatis berpindah ke sesi berikutnya (Work ↔ Break)
5. Siklus berlangsung terus hingga dihentikan dengan `Ctrl+C`

### Contoh Output

```
⏱️  Pomodoro Timer Started!
📌 Work: 25 min | Break: 5 min
Press Ctrl+C to stop

Work Time Remaining: 00:24:55
Work Time Remaining: 00:24:54
...
[Notifikasi desktop muncul saat sesi berakhir]
Break Time Remaining: 00:04:59
...
```

## Struktur Proyek

```
pomoTimer/
├── index.js          # File utama aplikasi
├── package.json      # Metadata & dependency
└── README.md         # Dokumentasi ini
```

## Arsitektur Kode

Kode dibagi menjadi bagian-logis:

- **Constants** — Nilai default dan interval
- **Configuration** — Parsing argumen command-line
- **Validation** — Validasi durasi input
- **UI & Shutdown** — Pesan awal dan penanganan keluar program
- **State** — Variabel state timer
- **Utilities** — Fungsi bantu (format waktu, notifikasi)
- **Timer Logic** — Logika utama timer dan manajemen sesi
- **Entry** — Titik masuk aplikasi

## Dependensi

- `node-notifier` — Notifikasi desktop lintas-platform
- `moment` — Utility untuk format waktu

## Tips & Praktik

- Gunakan `0.5 0.5` untuk testing cepat (30 detik)
- Sesuaikan durasi berdasarkan tingkat fokus tugas
- Jalankan di terminal yang tetap terbuka agar notifikasi muncul

## Troubleshooting

- **Timer menampilkan nilai default** — Pastikan argumen yang diberikan adalah angka positif
- **Tidak muncul notifikasi** — Periksa pengaturan notifikasi sistem
- **Error terkait dependency** — Jalankan `npm install`

Semoga sesi Pomodoro-mu produktif! 🍅⏱️

