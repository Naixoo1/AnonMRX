# UMKM Karawang - Direktori Usaha Mikro, Kecil, dan Menengah

🏪 **Platform digital untuk mempromosikan UMKM terbaik di Karawang**

## 📋 Tentang Project

UMKM Karawang adalah website direktori yang menampilkan berbagai Usaha Mikro, Kecil, dan Menengah di Karawang. Platform ini dibangun dengan React.js dan dilengkapi dengan fitur-fitur interaktif untuk membantu pengguna menemukan dan terhubung dengan UMKM lokal.

## ✨ Fitur Utama

### 🎯 Direktori UMKM
- **10+ UMKM Terdaftar** dari berbagai kategori
- **Pencarian & Filter** berdasarkan kategori, rating, dan harga
- **Detail Lengkap** setiap UMKM dengan foto, kontak, dan jam operasional

### 🛍️ Kategori UMKM
- **Kuliner** - Warung makan dan restoran
- **Toko Kelontong** - Kebutuhan sehari-hari
- **Jasa** - Layanan profesional
- **Sembako** - Kebutuhan pokok
- **Kesehatan** - Produk herbal
- **Minuman** - Various beverages

### 🎨 Fitur Interaktif
- **Photo Gallery** dengan lightbox
- **Shopping Cart** untuk pesanan
- **WhatsApp Integration** untuk kontak langsung
- **Google Maps** untuk lokasi
- **Cursor Effects** (testing mode)
- **Responsive Design** untuk semua device

### 🚀 Teknologi
- **Frontend**: React 18, React Router, Bootstrap 5
- **Build Tool**: Create React App
- **Deployment**: Netlify
- **Maps**: Google Maps API
- **Icons**: Bootstrap Icons

## 📁 Struktur Project

```
UMKM-Karawang/
├── public/                 # Static files
│   ├── index.html         # Main HTML template
│   ├── manifest.json      # PWA manifest
│   └── robots.txt         # SEO robots
├── src/                   # React source code
│   ├── components/        # React components
│   │   ├── Navbar.js
│   │   ├── HomePage.js
│   │   └── UMKMDetailPage.js
│   ├── utils/            # Utility functions
│   ├── App.js            # Main App component
│   ├── index.js          # Entry point
│   ├── App.css           # Global styles
│   └── index.css         # Base styles
├── build/                # Production build (auto-generated)
├── *.html               # Static HTML pages
├── *.js                 # JavaScript files for HTML pages
└── docs/                # Documentation files
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm atau yarn
- Git

### Local Development

1. **Clone repository**
```bash
git clone https://github.com/Naixoo1/AnonMRX.git
cd AnonMRX
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Buka browser** di `http://localhost:3000`

### Production Build

```bash
npm run build
```

Build akan dihasilkan di folder `build/`

## 🚀 Deployment

### Netlify (Recommended)
1. Connect repository ke Netlify
2. Build command: `npm run build`
3. Publish directory: `build`
4. Environment variable: `NODE_VERSION = 18`

### Manual Deployment
1. Run `npm run build`
2. Upload folder `build/` ke hosting
3. Pastikan server mendukut SPA routing

## 📱 UMKM Pages

Setiap UMKM memiliki halaman dedicated dengan:

- **Hero Section** - Informasi utama
- **Photo Gallery** - Foto produk/tempat
- **Contact Buttons** - WhatsApp, Phone, Instagram
- **Interactive Features** - Menu, pesanan, dll
- **Responsive Design** - Mobile friendly

### Daftar UMKM:
1. **Sidomuncul** - Toko herbal tradisional
2. **Warung Doa Ibu** - Warung makan keluarga
3. **Fotokopi Lisa** - Layanan percetakan
4. **Nasi Kebuli Ayam** - Spesialis nasi keuli
5. **Sido Tang Uniita** - Toko kelontong
6. **Soda Gembira** - Toko minuman
7. **Toko Beras** - Penyedia beras
8. **Toko Beras Karya Pusaka** - Beras warisan
9. **Toko Lidiya** - Grocery modern
10. **Toko Restu Ibu** - Family store

## 🎨 Customization

### Menambah UMKM Baru
1. Buat file HTML baru: `[nama-umkm].html`
2. Buat file JavaScript: `[nama-umkm].js`
3. Update database di `MainPage.js`
4. Tambahkan routing di `App.js`

### Mengubah Styles
- Edit `src/App.css` untuk global styles
- Edit `src/index.css` untuk base styles
- Component styles di folder masing-masing

### API Integration
- Google Maps API untuk lokasi
- WhatsApp API untuk pesan
- Instagram API untuk social media

## 🔧 Configuration

### Environment Variables
```bash
REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### Netlify Configuration
```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

## 🐛 Troubleshooting

### Common Issues
1. **Build Failed** - Pastikan `public/index.html` ada
2. **Maps Not Loading** - Check API key
3. **Router Not Working** - Setup redirects di hosting
4. **Styles Not Loading** - Check import paths

### Debug Mode
```bash
# Enable detailed logging
DEBUG=true npm start

# Build with analysis
npm run build -- --analyze
```

## 📈 Performance

- **Bundle Size**: ~58KB (gzipped)
- **Load Time**: <2 seconds
- **Lighthouse Score**: 90+ (dengan optimasi)
- **Mobile Friendly**: 100% responsive

## 🤝 Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/nama-fitur`
3. Commit changes: `git commit -m 'Add nama fitur'`
4. Push to branch: `git push origin feature/nama-fitur`
5. Open Pull Request

## 📄 License

MIT License - feel free to use for personal or commercial projects

## 👥 Team

- **Developer**: Naixoo
- **Design**: UMKM Karawang Team
- **Content**: Local UMKM Owners

## 📞 Contact

- **GitHub**: [@Naixoo1](https://github.com/Naixoo1)
- **Email**: [your-email@example.com]
- **Website**: [https://your-domain.netlify.app](https://your-domain.netlify.app)

## 🙏 Acknowledgments

- All UMKM owners in Karawang
- React.js community
- Bootstrap team
- Netlify for hosting
- Google Maps API

---

⭐ **Jika lupa bintang repository ini!**

🚀 **Support UMKM lokal dengan platform digital!**
