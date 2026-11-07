## /api/navigation
- Bentuk akar: object
- Kunci daftar: data
- Jumlah item: 4
- Field per item: 
    - label (teks)
    - href (teks)
- Alamat gambar: tidak ada
- Catatan: di akar terdapat success (boolean) dan count (angka). Nilai success = true dan count = 4.

## /api/tracks
- Bentuk akar: object
- Kunci daftar: data
- Jumlah item: 3
- Field per item:
  - id (teks)
  - name (teks)
  - tagline (teks)
  - description (teks)
  - icon (teks/emoji)
  - color (teks/kode warna HEX)
  - skills (array teks)
  - what_you_do (teks)
  - explore_link (teks)
  - open (boolean)
- Alamat gambar: tidak ada
- Catatan: di akar terdapat success (boolean) dan count (angka). Setiap item memiliki 10 field. Field skills berisi daftar keterampilan. Terdapat 3 track: Research & Discovery, Design & Creativity, dan Development.

## /api/faqs
- Bentuk akar: object
- Kunci daftar: data
- Jumlah item: 7
- Field per item:
  - id (teks)
  - question (teks)
  - answer (teks)
  - category (teks)
- Alamat gambar: tidak ada
- Catatan: di akar terdapat success (boolean), count (angka), dan filter (null). Terdapat 7 pertanyaan FAQ yang terbagi menjadi 3 kategori: joining-learning (5 item), collaboration (1 item), dan speaking-sharing (1 item).

## /api/formats
- Bentuk akar: object
- Kunci daftar: data
- Jumlah item: 4
- Field per item:
  - id (teks)
  - name (teks)
  - description (teks)
  - icon (teks/emoji)
  - cta (teks)
- Alamat gambar: tidak ada
- Catatan: di akar terdapat success (boolean) dan count (angka). Terdapat 4 program formats, yaitu Study groups, Project circles, Hands-on workshops, dan Knowledge sharing.

## /api/journey
- Bentuk akar: object
- Kunci daftar: data
- Jumlah item: 4
- Field per item:
  - step (angka)
  - id (teks)
  - title (teks)
  - description (teks)
- Alamat gambar: tidak ada
- Catatan: di akar terdapat success (boolean) dan count (angka). Terdapat 4 tahapan learning journey, yaitu Discover, Practice, Build, dan Share. Field step menunjukkan urutan setiap tahapan.