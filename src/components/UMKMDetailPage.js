import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const UMKMDetailPage = () => {
  const { id } = useParams();
  const [umkm, setUmkm] = useState(null);

  const umkmDatabase = [
    {
      id: 1,
      name: "Waffle Cone",
      icon: "🍦",
      desc: "Ice Cream lezat dengan side dish unik",
      category: "makanan",
      address: "Jl. Kertabumi no. 34, Karawang, Jawa Barat",
      details: ["⏰ Buka: 08.00 - 17.00", "📍 Jl. Kertabumi no. 34", "💰 Rp 10.000 - Rp. 25.000"],
      link: "wafflecone.html",
      phone: "+628123456789",
      distance: "± 800 meter (12 menit jalan kaki)",
      features: ["Ice Cream premium", "Side dish unik", "Tempat nyaman", "Harga terjangkau", "Pelayanan ramah"],
      description: "Waffle Cone menyajikan ice cream lezat dengan berbagai pilihan rasa dan side dish yang unik. Tempat yang nyaman untuk bersantai bersama teman dan keluarga.",
      images: ["waffle.jpeg", "wafelc.jpeg", "wafelcon.jpeg"]
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
      phone: "+628123456789",
      distance: "± 600 meter (9 menit jalan kaki)",
      features: ["Produk herbal 100% alami", "Konsultasi kesehatan", "Jamu segar", "Harga terjangkau", "Layanan antar"],
      description: "SidoMuncul menyediakan berbagai produk herbal tradisional untuk menjaga kesehatan Anda. Dengan bahan-bahan alami pilihan dan resep turun temurun.",
      images: ["dobu.jpeg", "domcul.jpeg", "domunb.jpeg"]
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
      phone: "+628123456789",
      distance: "± 400 meter (6 menit jalan kaki)",
      features: ["Menu rumahan", "Porsi besar", "Harga murah", "Tempat bersih", "Buka pagi"],
      description: "Warung Doa Ibu menyajikan berbagai masakan rumahan dengan cita rasa autentik seperti masakan ibu. Porsi besar dengan harga sangat terjangkau.",
      images: ["doaibu.jpeg", "doa-ibu.jpeg", "doabu.jpeg"]
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
      phone: "+628123456789",
      distance: "± 700 meter (10 menit jalan kaki)",
      features: ["Donat lembut", "Berbagai rasa", "Topping lengkap", "Harga murah", "Tempat nyaman"],
      description: "Si Dotang Uni Ita menawarkan berbagai jenis donut dengan rasa yang lezat dan tekstur yang lembut. Topping lengkap dengan harga terjangkau.",
      images: ["dotang.jpeg", "sidotang.jpeg", "tangnita.jpeg"]
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
      phone: "+628123456789",
      distance: "± 900 meter (13 menit jalan kaki)",
      features: ["Sembako lengkap", "Harga murah", "Kualitas baik", "Pelayanan ramah", "Layanan antar"],
      description: "Toko Restu Ibu menyediakan berbagai kebutuhan sembako lengkap dengan harga murah dan kualitas terjamin. Pelayanan yang ramah dan bersahabat.",
      images: ["restuibu.jpeg", "restu.jpeg", "restubu.jpeg"]
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
      phone: "+628123456789",
      distance: "± 650 meter (9 menit jalan kaki)",
      features: ["Minuman segar", "Berbagai rasa", "Es krim", "Tempat nongkrong", "WiFi gratis"],
      description: "Soda Gembira menyajikan berbagai minuman soda yang menyegarkan dengan pilihan rasa yang beragam. Tempat yang cocok untuk nongkrong dan bersantai.",
      images: ["gembira.jpeg", "soda-imbra.jpeg", "sodgem.jpeg"]
    },
    {
      id: 7,
      name: "Nasi Kebuli & Ayam panggang",
      icon: "🍗",
      desc: "Nasi kebuli dengan ayam panggang spesial",
      category: "makanan",
      address: "31 Jl. Kertabumi, Karawang, Jawa Barat",
      details: ["⏰ Buka: 09.00 - 20.00", "📍 31 Jl. Kertabumi", "💰 Rp 15.000 - Rp. 30.000"],
      link: "nasikebuliayam.html",
      phone: "+628123456789",
      distance: "± 850 meter (12 menit jalan kaki)",
      features: ["Nasi kebuli autentik", "Ayam panggang spesial", "Rempah pilihan", "Porsi besar", "Bisa pesan antar"],
      description: "Nasi Kebuli & Ayam Panggang menyajikan nasi kebuli dengan rempah pilihan dan ayam panggang yang spesial dengan cita rasa autentik.",
      images: ["nasibul.jpeg", "nasib.jpeg", "nasi-buli2.jpeg"]
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
      phone: "+628123456789",
      distance: "± 500 meter (7 menit jalan kaki)",
      features: ["Beras kualitas", "Berbagai jenis", "Harga grosir", "Kemasan hygiene", "Layanan antar"],
      description: "Toko Beras 'Karya Pusaka' menyediakan berbagai jenis beras dengan kualitas terbaik dan harga grosir yang kompetitif.",
      images: ["beras.jpeg", "bra.jpeg", "bras.jpeg"]
    },
    {
      id: 9,
      name: "Toko Lidya",
      icon: "🛍",
      desc: "Toko perlengkapan rumah tangga lengkap",
      category: "barang",
      address: "26 Jl. Belakang Ps. Karawang, Jawa Barat",
      details: ["⏰ Buka: 10.00 - 21.00", "📍 26 Jl. Belakang Ps.", "💰 Mulai Rp 5.000"],
      link: "tokolidya.html",
      phone: "+628123456789",
      distance: "± 550 meter (8 menit jalan kaki)",
      features: ["Perlengkapan lengkap", "Harga murah", "Kualitas baik", "Pelayanan ramah", "Bisa kredit"],
      description: "Toko Lidya menyediakan berbagai perlengkapan rumah tangga lengkap dengan harga yang terjangkau dan kualitas yang baik.",
      images: ["tokolidya.jpeg", "stubu.jpeg", "stuibu.jpeg"]
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
      phone: "+628123456789",
      distance: "± 500 meter (7 menit jalan kaki)",
      features: ["Print Cepat", "Edit dokumen", "Tempat bersih", "Hasil berkualitas", "Harga murah"],
      description: "Fotokopi Lisa menyediakan layanan fotokopi dan print cepat dengan kualitas tinggi. Melayani juga editing dokumen sederhana.",
      images: ["docul.jpeg", "siducol.jpeg", "siodow.jpeg"]
    }
  ];

  useEffect(() => {
    const foundUmkm = umkmDatabase.find(u => u.id === parseInt(id));
    setUmkm(foundUmkm || null);
  }, [id]);

  if (!umkm) {
    return (
      <div className="container text-center py-5">
        <h1>UMKM Tidak Ditemukan</h1>
        <p>UMKM yang Anda cari tidak tersedia.</p>
        <Link to="/" className="back-btn">
          ← Kembali ke Beranda
        </Link>
      </div>
    );
  }

  const contactWhatsApp = () => {
    window.open(`https://wa.me/628123456789?text=Halo, saya tertarik dengan ${umkm.name}`, '_blank');
  };

  const contactInstagram = () => {
    window.open('https://instagram.com/umkmkarawang', '_blank');
  };

  const getDirections = () => {
    window.open(`https://maps.app.goo.gl/uutd6gG4BfVU6mgN9`, '_blank');
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
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
        <Link to="/" className="back-btn">
          ← Kembali ke Beranda
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-icon">{umkm.icon}</div>
          <div className="hero-info">
            <h1>{umkm.name}</h1>
            <p>{umkm.desc}</p>
            <div className="info-tags">
              {umkm.details.map((detail, index) => (
                <span key={index} className="tag">{detail}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        {/* Description Section */}
        <div className="section">
          <h2>📝 Tentang UMKM Ini</h2>
          <div className="description-content">
            <p>{umkm.description}</p>
            <div className="highlight">
              <strong>🌟 Keunggulan:</strong>
              <ul style={{marginTop: '0.5rem', marginLeft: '1.5rem', lineHeight: '2'}}>
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
          <div className="location-grid">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.8359548048716!2d107.29982910627363!3d-6.306764798414024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977c353efeb11%3A0xee9a90b005a508ba!2sJl.%20Dewi%20Sartika%20No.57%2C%20Nagasari%2C%20Kec.%20Karawang%20Bar.%2C%20Karawang%2C%20Jawa%20Barat%2041312!5e0!3m2!1sen!2sid!4v1763012879207!5m2!1sen!2sid"
                width="100%"
                height="300"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="address-info">
              <div className="address-item">
                <div className="address-icon">📍</div>
                <div>
                  <strong>Alamat Lengkap</strong>
                  <p style={{color: '#aaa', marginTop: '0.3rem'}}>{umkm.address}</p>
                </div>
              </div>
              <div className="address-item">
                <div className="address-icon">🚶</div>
                <div>
                  <strong>Jarak dari Stasiun KRW</strong>
                  <p style={{color: '#aaa', marginTop: '0.3rem'}}>{umkm.distance}</p>
                </div>
              </div>
              <div className="address-item">
                <div className="address-icon">🅿️</div>
                <div>
                  <strong>Parkir</strong>
                  <p style={{color: '#aaa', marginTop: '0.3rem'}}>Tersedia parkir sepeda & motor gratis</p>
                </div>
              </div>
              <button className="directions-btn" onClick={getDirections}>
                🧭 Petunjuk Arah
              </button>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="section">
          <h2>📸 Galeri Foto</h2>
          <div className="photo-gallery">
            {umkm.images.map((image, index) => (
              <div key={index} className="photo-item">
                <img 
                  src={process.env.PUBLIC_URL + `/gambar/${image}`} 
                  alt={`${umkm.name} ${index + 1}`} 
                  className="photo-img"
                  onError={(e) => {
                    console.log('Image failed to load:', process.env.PUBLIC_URL + `/gambar/${image}`);
                    e.target.src = 'https://via.placeholder.com/300x200?text=Error';
                  }}
                />
                <div className="photo-overlay">
                  <div className="photo-title">
                    {index === 0 ? "Produk Utama" : index === 1 ? "Layanan" : "Tempat Usaha"}
                  </div>
                  <div className="photo-desc">
                    {index === 0 ? "Koleksi produk unggulan kami" : 
                     index === 1 ? "Layanan terbaik untuk pelanggan" : 
                     "Suasana toko yang nyaman dan bersih"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section - Using exact HTML structure */}
        <div className="section">
          <h2>📞 Hubungi UMKM</h2>
          <div className="contact-buttons">
            <a href="#" className="contact-btn whatsapp" onClick={(e) => {e.preventDefault(); contactWhatsApp();}}>
              💬 WhatsApp
            </a>
            <a href={`tel:${umkm.phone}`} className="contact-btn phone">
              📞 Telepon
            </a>
            <a href="#" className="contact-btn instagram" onClick={(e) => {e.preventDefault(); contactInstagram();}}>
              📸 Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UMKMDetailPage;
