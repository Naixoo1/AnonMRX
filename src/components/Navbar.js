import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Logo_Kementerian_Usaha_Mikro%2C_Kecil%2C_dan_Menengah_Republik_Indonesia_%282025%29.svg/1200px-Logo_Kementerian_Usaha_Mikro%2C_Kecil%2C_dan_Menengah_Republik_Indonesia_%282025%29.svg.png" 
          alt="Logo" 
          className="logo"
        />
        <div className="school-info">
          <h1>UMKM KARAWANG</h1>
          <p>UMKM sekitar Karawang</p>
        </div>
      </div>
      <ul className="nav-menu">
        <li><Link to="#home">🏠 Beranda</Link></li>
        <li><Link to="#umkm">🏪 UMKM</Link></li>
        <li><Link to="#kategori">📋 Kategori</Link></li>
        <li><Link to="#kontak">📞 Kontak</Link></li>
      </ul>
      <div className="nav-icons">
        <div className="icon-btn">🔎</div>
        <div className="icon-btn">🌙</div>
        <div className="icon-btn">👤</div>
      </div>
    </nav>
  );
};

export default Navbar;
