import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [umkmData, setUmkmData] = useState([]);

  useEffect(() => {
    const data = [
      {
        name: "Waffle Cone",
        icon: "🍦",
        desc: "Ice Cream lezat dengan side dish unik",
        category: "makanan",
        address: "Jl. Kertabumi no. 34, Karawang, Jawa Barat",
        details: ["⏰ Buka: 08.00 - 17.00", "📍 Jl. Kertabumi no. 34", "💰 Rp 10.000 - Rp. 25.000"],
        link: "wafflecone.html"
      },
      {
        name: "SidoMuncul",
        icon: "🍷",
        desc: "Herbal tradisional untuk kesehatan Anda",
        category: "makanan",
        address: "Jl. Ir. H. Juanda No.78, Karawang, Jawa Barat",
        details: ["⏰ Buka: 08.00 - 18.00", "📍 Jl. Ir. H. Juanda No.78", "💰 Rp 10.000 - Rp. 20.000"],
        link: "sidomuncul.html"
      },
      {
        name: "Warung Doa Ibu",
        icon: "🥪",
        desc: "Warung simpel dengan cita rasa ibu",
        category: "makanan",
        address: "5 Jl. Arif Rahman Hakim, Karawang, Jawa Barat",
        details: ["⏰ Buka: 06.30 - 21.00", "📍 5 Jl. Arif Rahman Hakim", "💰 Rp. 100 - Rp. 10.000"],
        link: "warungdoaibu.html"
      },
      {
        name: "Si Dotang Uni Ita",
        icon: "🥯",
        desc: "Donut dengan rasa yang lezat",
        category: "makanan",
        address: "78 Jl. Ir. H. Juanda, Karawang, Jawa Barat",
        details: ["⏰ Buka: 10.00 - 17.00", "📍 78 Jl. Ir. H. Juanda", "💰 Rp. 2.500/pcs"],
        link: "sidotanguniita.html"
      },
      {
        name: "Toko Restu Ibu",
        icon: "🏪",
        desc: "Toko sembako lengkap dan murah",
        category: "barang",
        address: "Jl. Rk. Sasta Kusumah, Karawang, Jawa Barat",
        details: ["⏰ Buka: 08.00 - 17.00", "📍 Jl. Rk. Sasta Kusumah", "💰 Rp. 5.000 - Rp. 30.000"],
        link: "tokorestuibu.html"
      },
      {
        name: "Soda Gembira",
        icon: "🥤",
        desc: "Minuman soda menyegarkan",
        category: "makanan",
        address: "60 Jl. Ir. H. Juanda, Karawang, Jawa Barat",
        details: ["⏰ Buka: 09.00 - 17.00", "📍 60 Jl. Ir. H. Juanda", "💰 Mulai Rp 5.000"],
        link: "sodagembira.html"
      },
      {
        name: "Nasi Kebuli & Ayam Panggang",
        icon: "🍗",
        desc: "Nasi kebuli dengan ayam panggang spesial",
        category: "makanan",
        address: "31 Jl. Kertabumi, Karawang, Jawa Barat",
        details: ["⏰ Buka: 09.00 - 20.00", "📍 31 Jl. Kertabumi", "💰 Rp 15.000 - Rp. 30.000"],
        link: "nasikebuliayam.html"
      },
      {
        name: "Toko Beras 'Karya pusaka'",
        icon: "🍚",
        desc: "Toko beras dengan berbagai pilihan kualitas terbaik",
        category: "makanan",
        address: "26 Jl. Belakang Ps. Karawang, Jawa Barat",
        details: ["⏰ Buka: 08.00 - 17.00", "📍26 Jl. Belakang Ps.", "💰 Paket Rp 20.000 - Rp. 40.000"],
        link: "tokoberas.html"
      },
      {
        name: "Toko Lidya",
        icon: "🛍️",
        desc: "Toko perlengkapan rumah tangga lengkap",
        category: "barang",
        address: "26 Jl. Belakang Ps. Karawang, Jawa Barat",
        details: ["⏰ Buka: 10.00 - 21.00", "📍 26 Jl. Belakang Ps.", "💰 Mulai Rp 5.000"],
        link: "tokolidya.html"
      },
      {
        name: "Fotokopi Lisa",
        icon: "🖨️",
        desc: "Layanan fotokopi dan print cepat",
        category: "jasa",
        address: "57 Jl. Dewi Sartika, Karawang, Jawa Barat",
        details: ["⏰ Buka: 07.30 - 18.00", "📍 57 Jl. Dewi Sartika", "💰 Rp. 500/lembar"],
        link: "fotokopilisa.html"
      }
    ];

    // Add distance property to each item (simulating the Google Maps functionality)
    const dataWithDistance = data.map(item => ({
      ...item,
      distance: "🚏 Menghitung jarak..."
    }));

    setUmkmData(dataWithDistance);
    setFilteredData(dataWithDistance);
  }, []);

  useEffect(() => {
    let filtered = umkmData;
    
    if (selectedCategory) {
      filtered = filtered.filter(umkm => umkm.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(umkm => 
        umkm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        umkm.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        umkm.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredData(filtered);
  }, [selectedCategory, searchTerm, umkmData]);

  const filterCategory = (category) => {
    setSelectedCategory(category);
    setTimeout(() => {
      document.getElementById('umkm').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
    if (searchActive) {
      setSearchTerm('');
    }
  };

  const scrollToUMKM = () => {
    document.getElementById('umkm').scrollIntoView({ behavior: 'smooth' });
  };

  const visitUMKM = (index) => {
    const umkm = filteredData[index];
    if (umkm) {
      // Navigate to React detail page using the UMKM ID
      window.location.href = `/umkm/${index + 1}`;
    }
  };

  const UMKMCard = ({ umkm, index }) => {
    return (
      <div 
        className="umkm-card" 
        style={{ animation: `fadeInUp 0.6s ease ${index * 0.1}s backwards` }}
      >
        <div className="umkm-image">{umkm.icon}</div>
        <div className="umkm-content">
          <h3>{umkm.name}</h3>
          <p>{umkm.desc}</p>
          <button className="visit-btn" onClick={() => visitUMKM(index)}>
            Kunjungi Sekarang
          </button>
        </div>
      </div>
    );
  };

  const searchResults = searchTerm ? umkmData.filter(umkm => 
    umkm.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    umkm.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    umkm.category.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-section">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Logo_Kementerian_Usaha_Mikro%2C_Kecil%2C_dan_Menengah_Republik_Indonesia_%282025%29.svg/1200px-Logo_Kementerian_Usaha_Mikro%2C_Kecil%2C_dan_Menengah_Republik_Indonesia_%282025%29.svg.png" 
          alt="Logo" className="logo" />
          <div className="school-info">
            <h1>UMKM KARAWANG</h1>
            <p>UMKM sekitar Karawang</p>
          </div>
        </div>
        <ul className="nav-menu">
          <li><a href="#home">🏠 Beranda</a></li>
          <li><a href="#umkm">🏪 UMKM</a></li>
          <li><a href="#kategori">📋 Kategori</a></li>
          <li><a href="#kontak">📞 Kontak</a></li>
        </ul>
        <div className="nav-icons">
          <div className="search-container">
            <input 
              type="text" 
              className={`search-input ${searchActive ? 'active' : ''}`} 
              placeholder="Cari UMKM..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              id="searchInput"
            />
            <div className="icon-btn" id="searchBtn" onClick={toggleSearch}>🔎</div>
            {searchTerm && searchResults.length > 0 && (
              <div className="search-results active">
                {searchResults.length === 0 ? (
                  <div className="no-results">Tidak ada hasil ditemukan</div>
                ) : (
                  searchResults.map((umkm, idx) => (
                    <div key={idx} className="search-result-item" onClick={() => {setSearchTerm(''); setSearchActive(false);}}>
                      <div className="search-result-name">{umkm.icon} {umkm.name}</div>
                      <div className="search-result-desc">{umkm.desc}</div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="https://cdn.pixabay.com/video/2022/04/01/112805-694771488_large.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">UMKM KARAWANG</h1>
          <p className="hero-subtitle">Selamat Datang Di Website UMKM KRW!</p>
          <button className="hero-cta" onClick={scrollToUMKM}>
            Lihat UMKM →
          </button>
        </div>
        <div className="scroll-indicator">⬇️</div>
      </section>

      {/* Main Content */}
      <div className="main-content">
        {/* Category Section */}
        <section className="category-section" id="kategori">
          <div className="section-header">
            <h2>Kategori UMKM</h2>
            <p>berbagai UMKM disekitar Karawang</p>
          </div>
          <div className="category-grid">
            <div className="category-card" onClick={() => filterCategory('makanan')}>
              <div className="category-icon">🍜</div>
              <h3>Kuliner</h3>
              <p>Makanan & Minuman</p>
            </div>
            <div className="category-card" onClick={() => filterCategory('barang')}>
              <div className="category-icon">📚</div>
              <h3>Produk</h3>
              <p>Barang sehari hari</p>
            </div>
            <div className="category-card" onClick={() => filterCategory('jasa')}>
              <div className="category-icon">⚙️</div>
              <h3>Jasa</h3>
              <p>Layanan & Service</p>
            </div>
          </div>
        </section>

        {/* UMKM Grid */}
        <section id="umkm">
          <div className="section-header">
            <h2>10 UMKM Pilihan</h2>
            <p>Dukung bisnis lokal di sekitar Kota Karawang</p>
          </div>
          <div className="umkm-grid">
            {filteredData.map((umkm, index) => (
              <UMKMCard umkm={umkm} index={index} key={index} />
            ))}
          </div>
          {filteredData.length === 0 && (
            <div className="no-results">
              <p>Tidak ada UMKM yang ditemukan untuk kategori atau pencarian ini.</p>
              <button className="hero-cta" onClick={() => {setSelectedCategory(''); setSearchTerm('');}}>
                Tampilkan Semua
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default HomePage;
