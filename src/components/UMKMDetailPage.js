import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const UMKMDetailPage = () => {
  const { id } = useParams();
  const [umkm, setUmkm] = useState(null);
  const [reviews, setReviews] = useState([]);

  const umkmDatabase = [
    {
      name: "Warung Makan Bu Siti",
      icon: "🍜",
      desc: "Menyajikan makanan tradisional dengan cita rasa autentik dan bumbu racikan turun temurun",
      category: "Kuliner",
      hours: "07.00 - 20.00",
      price: "Rp 10.000 - 25.000",
      address: "Jl. Pendidikan No. 12, Karawang Barat",
      distance: "200 meter (3 menit jalan kaki)",
      description: "Warung Makan Bu Siti telah berdiri sejak tahun 2010 dan menjadi favorit para pelajar dan guru di sekitar sekolah. Dengan menu andalan nasi goreng spesial, soto ayam, dan berbagai lauk pauk tradisional, warung ini selalu ramai dikunjungi terutama saat jam istirahat.",
      features: ["Porsi besar dengan harga terjangkau", "Bahan segar setiap hari", "Tempat bersih dan nyaman", "Tersedia paket hemat untuk pelajar", "Bisa pesan antar untuk rombongan"],
      rating: 4.8,
      reviewCount: 127
    },
    {
      name: "Toko Buku Cerdas",
      icon: "📚",
      desc: "Toko buku lengkap dengan berbagai alat tulis dan buku pelajaran untuk semua tingkat",
      category: "Pendidikan",
      hours: "08.00 - 18.00",
      price: "Diskon 10% untuk pelajar",
      address: "Jl. Ilmu No. 5, Karawang Barat",
      distance: "150 meter (2 menit jalan kaki)",
      description: "Toko Buku Cerdas menyediakan berbagai kebutuhan sekolah mulai dari buku pelajaran, novel, alat tulis, hingga perlengkapan sekolah lainnya. Dengan stok yang selalu update dan harga terjangkau, toko ini menjadi pilihan utama para pelajar.",
      features: ["Buku pelajaran lengkap semua mata pelajaran", "Diskon khusus untuk pembelian rombongan", "Program tukar buku bekas", "Alat tulis branded dan lokal", "Pelayanan ramah dan konsultasi gratis"],
      rating: 4.7,
      reviewCount: 89
    },
    {
      name: "Fotokopi & Print Kilat",
      icon: "🖨️",
      desc: "Layanan fotokopi, print, scan, dan jilid cepat dengan kualitas terbaik",
      category: "Jasa",
      hours: "06.30 - 21.00",
      price: "Print mulai Rp 300/lembar",
      address: "Depan Gerbang Sekolah, Karawang",
      distance: "50 meter (1 menit jalan kaki)",
      description: "Fotokopi & Print Kilat beroperasi sejak pagi hingga malam untuk memenuhi kebutuhan printing para pelajar. Dengan mesin modern dan operator berpengalaman, hasil print dijamin memuaskan.",
      features: ["Buka dari pagi hingga malam", "Harga murah dan kompetitif", "Hasil berkualitas tinggi", "Bisa edit dokumen sederhana", "Layanan express untuk keperluan mendesak"],
      rating: 4.9,
      reviewCount: 203
    },
    {
      name: "Kedai Kopi Pelajar",
      icon: "☕",
      desc: "Tempat hangout asik dengan WiFi gratis, minuman kopi, dan suasana nyaman",
      category: "Kuliner",
      hours: "09.00 - 22.00",
      price: "Kopi mulai Rp 8.000",
      address: "Jl. Merdeka No. 18, Karawang Barat",
      distance: "300 meter (5 menit jalan kaki)",
      description: "Kedai Kopi Pelajar adalah tempat favorit untuk mengerjakan tugas, diskusi kelompok, atau sekadar bersantai. Dengan WiFi gratis unlimited, colokan listrik di setiap meja, dan menu minuman yang variatif.",
      features: ["WiFi gratis unlimited", "Colokan listrik di setiap meja", "Menu minuman dan snack lengkap", "Ruang diskusi nyaman", "Background music santai untuk belajar"],
      rating: 4.6,
      reviewCount: 156
    },
    {
      name: "Laundry Express",
      icon: "👕",
      desc: "Jasa laundry kilat untuk seragam dan pakaian sehari-hari dengan harga terjangkau",
      category: "Jasa",
      hours: "07.00 - 20.00",
      price: "Rp 5.000/kg (cuci reguler)",
      address: "Jl. Bersih No. 9, Karawang Barat",
      distance: "250 meter (4 menit jalan kaki)",
      description: "Laundry Express melayani cuci kilat dengan kualitas bersih maksimal. Cocok untuk pelajar yang sibuk dan tidak sempat mencuci sendiri. Tersedia layanan antar-jemput gratis untuk area sekitar sekolah.",
      features: ["Cuci kilat 3-6 jam", "Parfum pewangi pilihan", "Setrika rapi dan wangi", "Antar-jemput gratis area sekolah", "Harga spesial untuk paket langganan"],
      rating: 4.7,
      reviewCount: 95
    },
    {
      name: "Toko Sepatu & Tas",
      icon: "👟",
      desc: "Menjual sepatu sekolah, tas, dan aksesoris dengan kualitas premium",
      category: "Pendidikan",
      hours: "08.00 - 19.00",
      price: "Harga mulai Rp 75.000",
      address: "Jl. Fashion No. 21, Karawang Barat",
      distance: "400 meter (6 menit jalan kaki)",
      description: "Toko Sepatu & Tas menyediakan berbagai model sepatu sekolah, sepatu olahraga, tas sekolah, dan tas olahraga dengan kualitas terjamin. Semua produk bergaransi dan tersedia dalam berbagai ukuran.",
      features: ["Produk bergaransi resmi", "Tersedia semua ukuran", "Bisa custom untuk model tertentu", "Konsultasi gratis pemilihan produk", "Program trade-in sepatu lama"],
      rating: 4.5,
      reviewCount: 72
    },
    {
      name: "Barbershop Keren",
      icon: "💈",
      desc: "Pangkas rambut stylish untuk pelajar dengan tukang cukur berpengalaman",
      category: "Jasa",
      hours: "09.00 - 20.00",
      price: "Rp 15.000 - 30.000",
      address: "Jl. Gaya No. 7, Karawang Barat",
      distance: "180 meter (3 menit jalan kaki)",
      description: "Barbershop Keren melayani potong rambut dengan berbagai model, dari model standar sekolah hingga model trendy. Dengan barber profesional dan peralatan modern, hasil potongan dijamin rapi dan sesuai keinginan.",
      features: ["Barber berpengalaman dan profesional", "Model potongan up-to-date", "Ruang ber-AC dan bersih", "Konsultasi model gratis", "Loyalty card untuk pelanggan tetap"],
      rating: 4.8,
      reviewCount: 134
    },
    {
      name: "Toko Seragam Sekolah",
      icon: "🎽",
      desc: "Pusat seragam sekolah lengkap dengan kualitas bahan terbaik dan harga terjangkau",
      category: "Pendidikan",
      hours: "08.00 - 17.00",
      price: "Paket lengkap Rp 200.000",
      address: "Jl. Seragam No. 3, Karawang Barat",
      distance: "220 meter (3 menit jalan kaki)",
      description: "Toko Seragam Sekolah menjual seragam lengkap mulai dari baju, celana/rok, dasi, topi, hingga kaos kaki. Bahan berkualitas, jahitan rapi, dan harga terjangkau. Tersedia juga jasa jahit custom untuk ukuran khusus.",
      features: ["Bahan berkualitas tahan lama", "Jahitan rapi dan kuat", "Tersedia semua ukuran", "Jasa jahit custom", "Garansi tukar jika tidak pas"],
      rating: 4.6,
      reviewCount: 68
    },
    {
      name: "Warung Es & Jajanan",
      icon: "🍧",
      desc: "Aneka es segar dan jajanan tradisional yang enak dan murah meriah",
      category: "Kuliner",
      hours: "10.00 - 21.00",
      price: "Mulai Rp 5.000",
      address: "Samping Lapangan Sekolah, Karawang",
      distance: "100 meter (2 menit jalan kaki)",
      description: "Warung Es & Jajanan menyajikan berbagai es segar seperti es campur, es buah, es teh manis, dan jajanan tradisional. Tempat favorit untuk melepas dahaga setelah olahraga atau di siang hari yang panas.",
      features: ["Es segar dengan buah asli", "Jajanan tradisional lengkap", "Harga terjangkau kantong pelajar", "Porsi melimpah", "Tempat duduk nyaman"],
      rating: 4.7,
      reviewCount: 142
    },
    {
      name: "Bengkel Sepeda",
      icon: "🚲",
      desc: "Service dan perbaikan sepeda cepat dengan teknisi handal dan harga murah",
      category: "Jasa",
      hours: "07.00 - 18.00",
      price: "Service mulai Rp 10.000",
      address: "Jl. Roda No. 15, Karawang Barat",
      distance: "280 meter (4 menit jalan kaki)",
      description: "Bengkel Sepeda melayani service rutin, perbaikan, dan modifikasi sepeda. Dengan teknisi berpengalaman dan spare part lengkap, sepeda Anda akan kembali seperti baru.",
      features: ["Teknisi berpengalaman 10+ tahun", "Spare part original dan kw", "Service cepat 30 menit", "Harga transparan", "Garansi perbaikan 1 minggu"],
      rating: 4.9,
      reviewCount: 88
    }
  ];

  const reviewsData = [
    {
      name: "Ahmad Rizki",
      avatar: "👨",
      rating: 5,
      date: "2 hari yang lalu",
      text: "Makanannya enak banget! Porsi besar, harga murah. Soto ayamnya juara, bumbu meresap sempurna. Tempatnya juga bersih dan nyaman. Recommended banget buat yang cari makan enak di sekitar sekolah!",
      likes: 24,
      helpful: 18
    },
    {
      name: "Siti Nurhaliza",
      avatar: "👩",
      rating: 5,
      date: "5 hari yang lalu",
      text: "Udah langganan dari kelas 10, sekarang kelas 12 masih setia ke sini. Bu Siti orangnya ramah, pelayanan cepat. Nasi goreng spesialnya mantap!",
      likes: 19,
      helpful: 15
    },
    {
      name: "Budi Santoso",
      avatar: "👨",
      rating: 4,
      date: "1 minggu yang lalu",
      text: "Overall bagus sih, cuma kadang pas jam istirahat agak antri panjang. Tapi worth it kok, rasanya memang enak. Saran aja mungkin bisa nambah pegawai.",
      likes: 12,
      helpful: 10
    },
    {
      name: "Dewi Lestari",
      avatar: "👩",
      rating: 5,
      date: "2 minggu yang lalu",
      text: "Tempat favorit buat makan siang! Menu variatif, setiap hari ada menu berbeda. Paket hemat pelajar sangat membantu. Tempatnya juga dekat dari sekolah, tinggal jalan kaki aja.",
      likes: 31,
      helpful: 22
    },
    {
      name: "Eko Prasetyo",
      avatar: "👨",
      rating: 5,
      date: "3 minggu yang lalu",
      text: "Bisa pesan antar untuk rombongan itu sangat membantu banget pas ada acara kelas. Makanannya tetap anget dan enak sampai lokasi. Terima kasih Bu Siti!",
      likes: 15,
      helpful: 12
    }
  ];

  useEffect(() => {
    const umkmId = parseInt(id) || 0;
    setUmkm(umkmDatabase[umkmId]);
    setReviews(reviewsData);
    document.title = umkmDatabase[umkmId]?.name + ' - Detail UMKM' || 'Detail UMKM';
  }, [id]);

  const likeReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].likes++;
    setReviews(updatedReviews);
  };

  const helpfulReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].helpful++;
    setReviews(updatedReviews);
  };

  const addReview = () => {
    const name = prompt('Nama Anda:');
    if (!name) return;
    
    const rating = parseInt(prompt('Rating (1-5):'));
    if (!rating || rating < 1 || rating > 5) return;
    
    const text = prompt('Tulis ulasan Anda:');
    if (!text) return;

    const newReview = {
      name: name,
      avatar: name[0].toUpperCase(),
      rating: rating,
      date: 'Baru saja',
      text: text,
      likes: 0,
      helpful: 0
    };

    setReviews([newReview, ...reviews]);
    alert('Terima kasih atas ulasan Anda! 🎉');
  };

  const openMaps = () => {
    alert(`🗺️ Membuka Google Maps untuk navigasi ke ${umkm?.name}...`);
  };

  const contactWhatsApp = () => {
    alert('💬 Menghubungkan ke WhatsApp...\n\nNomor: 0812-3456-7890');
  };

  const contactInstagram = () => {
    alert(`📸 Membuka Instagram ${umkm?.name}...`);
  };

  if (!umkm) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <div className="hero-icon">{umkm.icon}</div>
            </div>
            <div className="col-md-8">
              <div className="hero-info">
                <h1>{umkm.name}</h1>
                <p>{umkm.desc}</p>
                <div className="info-tags">
                  <span className="tag">⏰ {umkm.hours}</span>
                  <span className="tag">💰 {umkm.price}</span>
                  <span className="tag">🏷️ {umkm.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        {/* Description Section */}
        <div className="section">
          <h2>📝 Tentang UMKM Ini</h2>
          <div className="description-content">
            <p>{umkm.description}</p>
            <div className="highlight">
              <strong>🌟 Keunggulan:</strong>
              <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem', lineHeight: '2' }}>
                {umkm.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="section">
          <h2>📍 Lokasi & Alamat</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="map-container">
                <div className="map-placeholder">
                  <div style={{ fontSize: '4rem' }}>🗺️</div>
                  <p style={{ marginTop: '1rem' }}>Peta Lokasi</p>
                  <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem' }}>
                    Klik tombol petunjuk untuk navigasi
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="address-info">
                <div className="address-item">
                  <div className="address-icon">📍</div>
                  <div>
                    <strong>Alamat Lengkap</strong>
                    <p style={{ color: '#aaa', marginTop: '0.3rem' }}>
                      {umkm.address}, Karawang, Jawa Barat 41311
                    </p>
                  </div>
                </div>
                <div className="address-item">
                  <div className="address-icon">🚶</div>
                  <div>
                    <strong>Jarak dari Sekolah</strong>
                    <p style={{ color: '#aaa', marginTop: '0.3rem' }}>± {umkm.distance}</p>
                  </div>
                </div>
                <div className="address-item">
                  <div className="address-icon">🅿️</div>
                  <div>
                    <strong>Parkir</strong>
                    <p style={{ color: '#aaa', marginTop: '0.3rem' }}>
                      Tersedia parkir sepeda & motor gratis
                    </p>
                  </div>
                </div>
                <button className="directions-btn" onClick={openMaps}>
                  🧭 Petunjuk Arah
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="section">
          <div className="reviews-header">
            <div>
              <h2>⭐ Ulasan & Rating</h2>
              <div className="rating-summary">
                <div className="rating-number">{umkm.rating}</div>
                <div>
                  <div className="stars">{'★'.repeat(Math.floor(umkm.rating))}{'☆'.repeat(5 - Math.floor(umkm.rating))}</div>
                  <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                    Dari {umkm.reviewCount} ulasan
                  </p>
                </div>
              </div>
            </div>
            <button className="add-review-btn" onClick={addReview}>
              ✍️ Tulis Ulasan
            </button>
          </div>

          <div>
            {reviews.map((review, index) => (
              <div key={index} className="review-card" style={{ animation: `fadeInUp 0.6s ease ${index * 0.1}s backwards` }}>
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">{review.avatar}</div>
                    <div>
                      <div className="reviewer-name">{review.name}</div>
                      <div className="review-date">{review.date}</div>
                    </div>
                  </div>
                  <div className="review-stars">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                </div>
                <div className="review-text">{review.text}</div>
                <div className="review-actions">
                  <button className="action-btn" onClick={() => likeReview(index)}>
                    👍 Suka ({review.likes})
                  </button>
                  <button className="action-btn" onClick={() => helpfulReview(index)}>
                    ✓ Membantu ({review.helpful})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="section">
          <h2>📞 Hubungi UMKM</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <a href="#" className="contact-btn whatsapp d-block text-center" onClick={(e) => { e.preventDefault(); contactWhatsApp(); }}>
                💬 WhatsApp
              </a>
            </div>
            <div className="col-md-4">
              <a href="tel:+628123456789" className="contact-btn phone d-block text-center">
                📞 Telepon
              </a>
            </div>
            <div className="col-md-4">
              <a href="#" className="contact-btn instagram d-block text-center" onClick={(e) => { e.preventDefault(); contactInstagram(); }}>
                📸 Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UMKMDetailPage;
