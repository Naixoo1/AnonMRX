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
        id: 1,
        name: "Waffle Cone",
        icon: "🍦",
        desc: "Ice Cream lezat dengan side dish unik",
        category: "makanan",
        address: "Jl. Kertabumi no. 34, Karawang, Jawa Barat",
        details: ["⏰ Buka: 08.00 - 17.00", "📍 Jl. Kertabumi no. 34", "💰 Rp 10.000 - Rp. 25.000"],
        link: "wafflecone.html",
        distance: "1.1 Km (16 menit jalan kaki)",
        features: ["Porsi besar dengan harga terjangkau", "Bahan segar setiap hari", "Tempat nyaman", "Tersedia makanan ringan", "Bisa Qris"],
        description: "Wafflecone belum lama berdiri namun rasanya yang enak dan harga yang terjangkau membuat disukai banyak orang sekitar seperti murid",
        images: ["wfafle.jpeg", "wafelc.jpeg", "wafelcon.jpeg"],
        phone: "+628123456789"
      },
      {
        id: 2,
        name: "SidoMuncul",
        icon: "🍷",
        desc: "Herbal tradisional untuk kesehatan Anda",
        category: "makanan",
        address: "Jl. Ir. H. Juanda No.78, Karawang, Jawa Barat",
        details: ["⏰ Buka: 08.00 - 18.00", "📍 Jl. Ir. H. Juanda No.78", "💰 Rp 10.000 - Rp. 20.000"],
        link: "sidomuncul.html",
        distance: "± 600 meter (9 menit jalan kaki)",
        features: ["Produk herbal 100% alami", "Konsultasi kesehatan", "Jamu segar", "Harga terjangkau", "Layanan antar"],
        description: "SidoMuncul menyediakan berbagai produk herbal tradisional untuk menjaga kesehatan Anda. Dengan bahan-bahan alami pilihan dan resep turun temurun.",
        images: ["dobu.jpeg", "domcul.jpeg", "domunb.jpeg"],
        phone: "+628123456789"
      },
      {
        id: 3,
        name: "Warung Doa Ibu",
        icon: "🥪",
        desc: "Warung simpel dengan cita rasa ibu",
        category: "makanan",
        address: "5 Jl. Arif Rahman Hakim, Karawang, Jawa Barat",
        details: ["⏰ Buka: 06.30 - 21.00", "📍 5 Jl. Arif Rahman Hakim", "💰 Rp. 100 - Rp. 10.000"],
        link: "warungdoaibu.html",
        distance: "0.8 Km (12 menit jalan kaki)",
        features: ["Menu rumahan", "Harga terjangkau", "Porsi besar", "Buka dari pagi", "Bisa pesan antar"],
        description: "Warung Doa Ibu menyajikan berbagai makanan rumahan dengan cita rasa khas ibu. Dengan harga yang terjangkau dan porsi yang mengenyangkan.",
        images: ["warung1.jpeg", "warung2.jpeg", "warung3.jpeg"],
        phone: "+628123456789"
      },
      {
        id: 4,
        name: "Si Dotang Uni Ita",
        icon: "🥯",
        desc: "Donut dengan rasa yang lezat",
        category: "makanan",
        address: "78 Jl. Ir. H. Juanda, Karawang, Jawa Barat",
        details: ["⏰ Buka: 10.00 - 17.00", "📍 78 Jl. Ir. H. Juanda", "💰 Rp. 2.500/pcs"],
        link: "sidotanguniita.html",
        distance: "± 700 meter (10 menit jalan kaki)",
        features: ["Donat lembut", "Berbagai rasa", "Topping lengkap", "Harga murah", "Tempat nyaman"],
        description: "Si Dotang Uni Ita menawarkan berbagai jenis donut dengan rasa yang lezat dan tekstur yang lembut. Topping lengkap dengan harga terjangkau.",
        images: ["dotang.jpeg", "sidotang.jpeg", "tangnita.jpeg"],
        phone: "+628123456789"
      },
      {
        id: 5,
        name: "Toko Restu Ibu",
        icon: "🏪",
        desc: "Toko sembako lengkap dan murah",
        category: "barang",
        address: "Jl. Rk. Sasta Kusumah, Karawang, Jawa Barat",
        details: ["⏰ Buka: 08.00 - 17.00", "📍 Jl. Rk. Sasta Kusumah", "💰 Rp. 5.000 - Rp. 30.000"],
        link: "tokorestuibu.html",
        distance: "± 900 meter (13 menit jalan kaki)",
        features: ["Sembako lengkap", "Harga murah", "Kualitas baik", "Pelayanan ramah", "Layanan antar"],
        description: "Toko Restu Ibu menyediakan berbagai kebutuhan sembako lengkap dengan harga murah dan kualitas terjamin. Pelayanan yang ramah dan bersahabat.",
        images: ["restuibu.jpeg", "restu.jpeg", "restubu.jpeg"],
        phone: "+628123456789"
      },
      {
        id: 6,
        name: "Soda Gembira",
        icon: "🥤",
        desc: "Minuman soda menyegarkan",
        category: "makanan",
        address: "60 Jl. Ir. H. Juanda, Karawang, Jawa Barat",
        details: ["⏰ Buka: 09.00 - 17.00", "📍 60 Jl. Ir. H. Juanda", "💰 Mulai Rp 5.000"],
        link: "sodagembira.html",
        distance: "± 650 meter (9 menit jalan kaki)",
        features: ["Minuman segar", "Berbagai rasa", "Es krim", "Tempat nongkrong", "WiFi gratis"],
        description: "Soda Gembira menyajikan berbagai minuman soda yang menyegarkan dengan pilihan rasa yang beragam. Tempat yang cocok untuk nongkrong dan bersantai.",
        images: ["gembira.jpeg", "soda imbra.jpeg", "sodgem.jpeg"],
        phone: "+628123456789"
      },
      {
        id: 7,
        name: "Nasi Kebuli & Ayam Panggang",
        icon: "🍗",
        desc: "Nasi kebuli dengan ayam panggang spesial",
        category: "makanan",
        address: "31 Jl. Kertabumi, Karawang, Jawa Barat",
        details: ["⏰ Buka: 09.00 - 20.00", "📍 31 Jl. Kertabumi", "💰 Rp 15.000 - Rp. 30.000"],
        link: "nasikebuliayam.html",
        distance: "± 850 meter (12 menit jalan kaki)",
        features: ["Nasi kebuli autentik", "Ayam panggang spesial", "Rempah pilihan", "Porsi besar", "Bisa pesan antar"],
        description: "Nasi Kebuli & Ayam Panggang menyajikan nasi kebuli dengan rempah pilihan dan ayam panggang yang spesial dengan cita rasa autentik.",
        images: ["nasibul.jpeg", "nasib.jpeg", "nasi buli2.jpeg"],
        phone: "+628123456789"
      },
      {
        id: 8,
        name: "Toko Beras 'Karya pusaka'",
        icon: "🍚",
        desc: "Toko beras dengan berbagai pilihan kualitas terbaik",
        category: "makanan",
        address: "26 Jl. Belakang Ps. Karawang, Jawa Barat",
        details: ["⏰ Buka: 08.00 - 17.00", "📍26 Jl. Belakang Ps.", "💰 Paket Rp 20.000 - Rp. 40.000"],
        link: "tokoberas.html",
        distance: "± 500 meter (7 menit jalan kaki)",
        features: ["Beras kualitas", "Berbagai jenis", "Harga grosir", "Kemasan hygiene", "Layanan antar"],
        description: "Toko Beras 'Karya Pusaka' menyediakan berbagai jenis beras dengan kualitas terbaik dan harga grosir yang kompetitif.",
        images: ["beras.jpeg", "bra.jpeg", "bras .jpeg"],
        phone: "+628123456789"
      },
      {
        id: 9,
        name: "Toko Lidya",
        icon: "🛍️",
        desc: "Toko perlengkapan rumah tangga lengkap",
        category: "barang",
        address: "26 Jl. Belakang Ps. Karawang, Jawa Barat",
        details: ["⏰ Buka: 10.00 - 21.00", "📍 26 Jl. Belakang Ps.", "💰 Mulai Rp 5.000"],
        link: "tokolidya.html",
        distance: "± 550 meter (8 menit jalan kaki)",
        features: ["Perlengkapan lengkap", "Harga murah", "Kualitas baik", "Pelayanan ramah", "Bisa kredit"],
        description: "Toko Lidya menyediakan berbagai perlengkapan rumah tangga lengkap dengan harga yang terjangkau dan kualitas yang baik.",
        images: ["tokolidya.jpeg", "stubu.jpeg", "stuibu.jpeg"],
        phone: "+628123456789"
      },
      {
        id: 10,
        name: "Fotokopi Lisa",
        icon: "🖨️",
        desc: "Layanan fotokopi dan print cepat",
        category: "jasa",
        address: "57 Jl. Dewi Sartika, Karawang, Jawa Barat",
        details: ["⏰ Buka: 07.30 - 18.00", "📍 57 Jl. Dewi Sartika", "💰 Rp. 500/lembar"],
        link: "fotokopilisa.html",
        distance: "± 500 meter (7 menit jalan kaki)",
        features: ["Print Cepat", "Edit dokumen", "Tempat bersih", "Hasil berkualitas", "Harga murah"],
        description: "Fotokopi Lisa menyediakan layanan fotokopi dan print cepat dengan kualitas tinggi. Melayani juga editing dokumen sederhana.",
        images: ["docul.jpeg", "siducol.jpeg", "siodow .jpeg"],
        phone: "+628123456789"
      }
    ];

    // Set UMKM data
    setUmkmData(data);
    setFilteredData(data);
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
    const [showDetails, setShowDetails] = useState(false);
    
    const distanceText = umkm.distance || '🚏 Menghitung jarak...';
    const updatedDetails = [...umkm.details, distanceText];

    const handleCardClick = () => {
      // Navigate to React detail page using the UMKM ID
      window.location.href = `/umkm/${umkm.id}`;
    };

    const handleDetailsClick = (e) => {
      e.stopPropagation();
      setShowDetails(!showDetails);
    };

    return (
      <div 
        className="umkm-card" 
        style={{ animation: `fadeInUp 0.6s ease ${index * 0.1}s backwards` }}
        onClick={handleCardClick}
      >
        <div className="umkm-image">{umkm.icon}</div>
        <div className="umkm-content">
          <h3>{umkm.name}</h3>
          <p>{umkm.desc}</p>
          <div 
            className={`umkm-details ${showDetails ? 'active' : ''}`} 
            id={`details-${index}`}
            onClick={handleDetailsClick}
          >
            {updatedDetails.map((detail, idx) => (
              <span key={idx} className="detail-tag">{detail}</span>
            ))}
          </div>
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
            <h1>KARAWANG-Enterprises</h1>
            <p>Usaha Mikro Kecil Menengah sekitar Karawang</p>
          </div>
        </div>
        <ul className="nav-menu">
          <li><a href="#home">🏠 Beranda</a></li>
          <li><a href="#umkm">🏪 UMKM</a></li>
          <li><a href="#kategori">📋 Kategori</a></li>
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
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">KARA-ONE</h1>
          <p className="hero-subtitle">Selamat Datang Di Website Untuk UMKM Sekitar Karawang!</p>
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
            <p>Berbagai UMKM disekitar Karawang</p>
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
            <h2>10 UMKM</h2>
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
