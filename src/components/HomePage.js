import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [umkmData] = useState([
    {
      name: "Warung Makan Bu Siti",
      icon: "🍜",
      desc: "Menyajikan makanan tradisional dengan cita rasa autentik",
      category: "makanan",
      details: ["⏰ Buka: 07.00 - 20.00", "📍 Jl. Pendidikan No. 12", "💰 Rp 10.000 - 25.000"],
    },
    {
      name: "Toko Buku Cerdas",
      icon: "📚",
      desc: "Lengkap dengan alat tulis dan buku pelajaran",
      category: "pendidikan",
      details: ["⏰ Buka: 08.00 - 18.00", "📍 Jl. Ilmu No. 5", "💰 Diskon 10% pelajar"],
    },
    {
      name: "Fotokopi & Print Kilat",
      icon: "🖨️",
      desc: "Layanan cepat untuk kebutuhan sekolah Anda",
      category: "jasa",
      details: ["⏰ Buka: 06.30 - 21.00", "📍 Depan Gerbang", "💰 Print Rp 300/lembar"],
    },
    {
      name: "Kedai Kopi Pelajar",
      icon: "☕",
      desc: "Tempat nongkrong asik dengan WiFi gratis",
      category: "makanan",
      details: ["⏰ Buka: 09.00 - 22.00", "📍 Jl. Merdeka No. 18", "💰 Kopi mulai Rp 8.000"],
    },
    {
      name: "Laundry Express",
      icon: "👕",
      desc: "Cuci kilat seragam dan pakaian sehari-hari",
      category: "jasa",
      details: ["⏰ Buka: 07.00 - 20.00", "📍 Jl. Bersih No. 9", "💰 Rp 5.000/kg"],
    },
    {
      name: "Toko Sepatu & Tas",
      icon: "👟",
      desc: "Sepatu sekolah dan tas berkualitas",
      category: "pendidikan",
      details: ["⏰ Buka: 08.00 - 19.00", "📍 Jl. Fashion No. 21", "💰 Mulai Rp 75.000"],
    },
    {
      name: "Barbershop Keren",
      icon: "💈",
      desc: "Potong rambut stylish untuk pelajar",
      category: "jasa",
      details: ["⏰ Buka: 09.00 - 20.00", "📍 Jl. Gaya No. 7", "💰 Rp 15.000 - 30.000"],
    },
    {
      name: "Toko Seragam Sekolah",
      icon: "🎽",
      desc: "Seragam lengkap dengan kualitas terbaik",
      category: "pendidikan",
      details: ["⏰ Buka: 08.00 - 17.00", "📍 Jl. Seragam No. 3", "💰 Paket Rp 200.000"],
    },
    {
      name: "Warung Es & Jajanan",
      icon: "🍧",
      desc: "Beragam es segar dan camilan enak",
      category: "makanan",
      details: ["⏰ Buka: 10.00 - 21.00", "📍 Samping Lapangan", "💰 Mulai Rp 5.000"],
    },
    {
      name: "Bengkel Sepeda",
      icon: "🚲",
      desc: "Service dan perbaikan sepeda cepat",
      category: "jasa",
      details: ["⏰ Buka: 07.00 - 18.00", "📍 Jl. Roda No. 15", "💰 Service Rp 10.000"],
    }
  ]);

  const [filteredData, setFilteredData] = useState(umkmData);

  const filterCategory = (category) => {
    const filtered = umkmData.filter(umkm => umkm.category === category);
    setFilteredData(filtered);
    setTimeout(() => {
      document.getElementById('umkm').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToUMKM = () => {
    document.getElementById('umkm').scrollIntoView({ behavior: 'smooth' });
  };

  const visitUMKM = (name) => {
    const umkm = umkmData.find(u => u.name === name);
    if (umkm) {
      const index = umkmData.indexOf(umkm);
      window.location.href = `/umkm/${index}`;
    }
  };

  const UMKMCard = ({ umkm, index }) => {
    return (
      <div className="col-lg-4 col-md-6">
        <div 
          className="card umkm-card h-100" 
          style={{ 
            animation: `fadeInUp 0.6s ease ${index * 0.1}s backwards`, 
            cursor: 'pointer' 
          }}
          onClick={() => visitUMKM(umkm.name)}
        >
          <div className="umkm-image">{umkm.icon}</div>
          <div className="card-body">
            <h3 className="card-title">{umkm.name}</h3>
            <p className="card-text">{umkm.desc}</p>
            <div className="mt-2">
              {umkm.details.map((detail, idx) => (
                <span key={idx} className="badge bg-primary me-1 mb-1">
                  {detail}
                </span>
              ))}
            </div>
            <button 
              className="btn btn-primary visit-btn mt-3" 
              onClick={(e) => {
                e.stopPropagation();
                visitUMKM(umkm.name);
              }}
            >
              Kunjungi Sekarang
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section" id="home">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="https://cdn.pixabay.com/video/2022/04/01/112805-694771488_large.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">UMKM KARAWANG</h1>
          <p className="hero-subtitle">WEBSITE UMKM KARAWANG</p>
          <button className="hero-cta" onClick={scrollToUMKM}>
            Lihat UMKM →
          </button>
        </div>
        <div className="scroll-indicator">⬇️</div>
      </section>

      {/* Category Section */}
      <section className="category-section" id="kategori">
        <div className="container">
          <div className="section-header">
            <h2>Kategori UMKM</h2>
            <p>berbagai UMKM disekitar Karawang</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="category-card" onClick={() => filterCategory('makanan')}>
                <div className="category-icon">🍜</div>
                <h3>Kuliner</h3>
                <p>Makanan & Minuman</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-card" onClick={() => filterCategory('pendidikan')}>
                <div className="category-icon">📚</div>
                <h3>Pendidikan</h3>
                <p>Alat Tulis & Buku</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-card" onClick={() => filterCategory('jasa')}>
                <div className="category-icon">⚙️</div>
                <h3>Jasa</h3>
                <p>Layanan & Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UMKM Grid */}
      <section id="umkm">
        <div className="container">
          <div className="section-header">
            <h2>10 UMKM Pilihan</h2>
            <p>Dukung bisnis lokal di sekitar Kota Karawang</p>
          </div>
          <div className="row g-4">
            {filteredData.map((umkm, index) => (
              <UMKMCard key={index} umkm={umkm} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
