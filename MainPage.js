// MainPage JavaScript - UMKM Directory
document.addEventListener('DOMContentLoaded', function() {
    // UMKM Database
    const umkmDatabase = [
        {
            id: 1,
            name: "Sidomuncul",
            icon: "🌿",
            category: "Kesehatan & Herbal",
            description: "Toko herbal tradisional dengan berbagai produk kesehatan alami",
            hours: "08.00 - 20.00",
            price: "Mulai Rp 5.000",
            rating: 4.7,
            reviewCount: 89,
            image: "sidomuncul.jpg",
            featured: true
        },
        {
            id: 2,
            name: "Warung Doa Ibu",
            icon: "🍛",
            category: "Kuliner",
            description: "Warung makan keluarga dengan menu masakan rumahan yang lezat",
            hours: "06.00 - 21.00",
            price: "Rp 10.000 - 25.000",
            rating: 4.8,
            reviewCount: 127,
            image: "warungdoaibu.jpg",
            featured: true
        },
        {
            id: 3,
            name: "Fotokopi Lisa",
            icon: "🖨️",
            category: "Jasa",
            description: "Layanan fotokopi, print, scan, dan jilid cepat dengan kualitas terbaik",
            hours: "07.30 - 18.00",
            price: "Rp 500/lembar",
            rating: 4.9,
            reviewCount: 203,
            image: "fotokopilisa.jpg",
            featured: false
        },
        {
            id: 4,
            name: "Nasi Kebuli Ayam",
            icon: "🍗",
            category: "Kuliner",
            description: "Spesialis nasi keuli ayam dengan rempah pilihan dan cita rasa autentik",
            hours: "10.00 - 22.00",
            price: "Rp 15.000 - 35.000",
            rating: 4.6,
            reviewCount: 156,
            image: "nasikebuliayam.jpg",
            featured: false
        },
        {
            id: 5,
            name: "Sido Tang Uniita",
            icon: "🏪",
            category: "Toko Kelontong",
            description: "Toko kelontong lengkap dengan kebutuhan sehari-hari dan harga terjangkau",
            hours: "07.00 - 21.00",
            price: "Harga bersaing",
            rating: 4.5,
            reviewCount: 95,
            image: "sidotanguniita.jpg",
            featured: false
        },
        {
            id: 6,
            name: "Soda Gembira",
            icon: "🥤",
            category: "Minuman",
            description: "Toko minuman segar dengan berbagai pilihan soda dan jus buah asli",
            hours: "10.00 - 22.00",
            price: "Rp 8.000 - 20.000",
            rating: 4.7,
            reviewCount: 142,
            image: "sodagembira.jpg",
            featured: true
        },
        {
            id: 7,
            name: "Toko Beras",
            icon: "🌾",
            category: "Sembako",
            description: "Penyedia berbagai jenis beras kualitas premium dengan harga terjangkau",
            hours: "07.00 - 20.00",
            price: "Rp 12.000 - 20.000/kg",
            rating: 4.8,
            reviewCount: 88,
            image: "tokoberas.jpg",
            featured: false
        },
        {
            id: 8,
            name: "Toko Beras Karya Pusaka",
            icon: "🏺",
            category: "Sembako",
            description: "Toko beras tradisional dengan warisan kualitas dan pelayanan terbaik sejak 1985",
            hours: "06.00 - 21.00",
            price: "Rp 11.000 - 22.000/kg",
            rating: 4.9,
            reviewCount: 134,
            image: "tokoberaskaryapusaka.jpg",
            featured: true
        },
        {
            id: 9,
            name: "Toko Lidiya",
            icon: "🏪",
            category: "Toko Kelontong",
            description: "Toko kelontong modern dengan kebutuhan sehari-hari lengkap dan harga bersaing",
            hours: "07.00 - 22.00",
            price: "Harga bersahabat",
            rating: 4.6,
            reviewCount: 72,
            image: "tokolidya.jpg",
            featured: false
        },
        {
            id: 10,
            name: "Toko Restu Ibu",
            icon: "🏪",
            category: "Toko Kelontong",
            description: "Toko kelontong keluarga dengan pelayanan hangat dan kebutuhan lengkap sehari-hari",
            hours: "06.30 - 21.30",
            price: "Harga keluarga",
            rating: 4.8,
            reviewCount: 168,
            image: "tokorestuibu.jpg",
            featured: true
        }
    ];

    // Categories
    const categories = [
        { id: 'all', name: 'Semua', icon: '🏪' },
        { id: 'kuliner', name: 'Kuliner', icon: '🍽️' },
        { id: 'toko_kelontong', name: 'Toko Kelontong', icon: '🛍️' },
        { id: 'jasa', name: 'Jasa', icon: '⚙️' },
        { id: 'sembako', name: 'Sembako', icon: '🌾' },
        { id: 'kesehatan', name: 'Kesehatan', icon: '🌿' },
        { id: 'minuman', name: 'Minuman', icon: '🥤' }
    ];

    // Initialize page
    initializePage();

    function initializePage() {
        setupHeroSection();
        setupCategories();
        setupSearchBar();
        setupFeaturedSection();
        setupUMKMGrid();
        setupFilters();
        setupEventListeners();
        addAnimations();
        setupStats();
    }

    function setupHeroSection() {
        // Add hero section if not exists
        const heroSection = document.createElement('section');
        heroSection.className = 'hero';
        heroSection.innerHTML = `
            <div class="hero-content">
                <div class="hero-text">
                    <h1>🏪 Direktori UMKM Karawang</h1>
                    <p>Temukan dan dukung Usaha Mikro, Kecil, dan Menengah terbaik di Karawang</p>
                    <div class="hero-stats">
                        <div class="stat-item">
                            <span class="stat-number">${umkmDatabase.length}</span>
                            <span class="stat-label">UMKM Terdaftar</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${categories.length - 1}</span>
                            <span class="stat-label">Kategori</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">4.8</span>
                            <span class="stat-label">Rating Rata-rata</span>
                        </div>
                    </div>
                </div>
                <div class="hero-image">
                    <div class="floating-icons">
                        <span class="icon-float" style="--delay: 0s;">🍜</span>
                        <span class="icon-float" style="--delay: 1s;">🛍️</span>
                        <span class="icon-float" style="--delay: 2s;">🖨️</span>
                        <span class="icon-float" style="--delay: 3s;">🌾</span>
                        <span class="icon-float" style="--delay: 4s;">🥤</span>
                    </div>
                </div>
            </div>
        `;
        
        // Add hero styles
        const heroStyle = document.createElement('style');
        heroStyle.textContent = `
            .hero {
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
                padding: 4rem 2rem;
                margin-bottom: 3rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            .hero-content {
                max-width: 1200px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 3rem;
                align-items: center;
            }
            .hero-text h1 {
                font-size: 3rem;
                margin-bottom: 1rem;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .hero-text p {
                font-size: 1.2rem;
                color: #aaa;
                margin-bottom: 2rem;
                line-height: 1.6;
            }
            .hero-stats {
                display: flex;
                gap: 2rem;
            }
            .stat-item {
                text-align: center;
            }
            .stat-number {
                display: block;
                font-size: 2rem;
                font-weight: bold;
                color: #667eea;
            }
            .stat-label {
                color: #aaa;
                font-size: 0.9rem;
            }
            .hero-image {
                position: relative;
                height: 300px;
            }
            .floating-icons {
                position: relative;
                width: 100%;
                height: 100%;
            }
            .icon-float {
                position: absolute;
                font-size: 3rem;
                animation: float 4s ease-in-out infinite;
                animation-delay: var(--delay);
            }
            .icon-float:nth-child(1) { top: 20%; left: 20%; }
            .icon-float:nth-child(2) { top: 60%; left: 70%; }
            .icon-float:nth-child(3) { top: 10%; left: 80%; }
            .icon-float:nth-child(4) { top: 70%; left: 30%; }
            .icon-float:nth-child(5) { top: 40%; left: 50%; }
            @keyframes float {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(10deg); }
            }
            @media (max-width: 768px) {
                .hero-content {
                    grid-template-columns: 1fr;
                    text-align: center;
                }
                .hero-text h1 {
                    font-size: 2rem;
                }
                .hero-stats {
                    justify-content: center;
                }
            }
        `;
        document.head.appendChild(heroStyle);
        
        // Insert hero at the beginning of body
        const firstElement = document.querySelector('body > *');
        if (firstElement) {
            document.body.insertBefore(heroSection, firstElement);
        } else {
            document.body.appendChild(heroSection);
        }
    }

    function setupCategories() {
        // Add categories section
        const categoriesSection = document.createElement('section');
        categoriesSection.className = 'categories-section';
        categoriesSection.innerHTML = `
            <div class="container">
                <h2>📂 Kategori UMKM</h2>
                <div class="categories-grid">
                    ${categories.map(category => `
                        <button class="category-card ${category.id === 'all' ? 'active' : ''}" 
                                data-category="${category.id}"
                                onclick="filterByCategory('${category.id}')">
                            <div class="category-icon">${category.icon}</div>
                            <div class="category-name">${category.name}</div>
                            <div class="category-count">${getCategoryCount(category.id)}</div>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Add categories styles
        const categoriesStyle = document.createElement('style');
        categoriesStyle.textContent = `
            .categories-section {
                padding: 3rem 2rem;
                background: rgba(255, 255, 255, 0.02);
            }
            .categories-section h2 {
                text-align: center;
                font-size: 2rem;
                margin-bottom: 2rem;
                color: #fff;
            }
            .categories-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 1.5rem;
                max-width: 1200px;
                margin: 0 auto;
            }
            .category-card {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 15px;
                padding: 2rem 1rem;
                text-align: center;
                cursor: pointer;
                transition: all 0.3s;
            }
            .category-card:hover {
                background: rgba(102, 126, 234, 0.1);
                border-color: #667eea;
                transform: translateY(-5px);
            }
            .category-card.active {
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
                border-color: #667eea;
            }
            .category-icon {
                font-size: 2.5rem;
                margin-bottom: 1rem;
            }
            .category-name {
                color: #fff;
                font-weight: 600;
                margin-bottom: 0.5rem;
            }
            .category-count {
                color: #667eea;
                font-size: 0.9rem;
            }
        `;
        document.head.appendChild(categoriesStyle);
        
        document.body.appendChild(categoriesSection);
    }

    function getCategoryCount(categoryId) {
        if (categoryId === 'all') return umkmDatabase.length;
        
        const categoryMap = {
            'kuliner': 'Kuliner',
            'toko_kelontong': 'Toko Kelontong',
            'jasa': 'Jasa',
            'sembako': 'Sembako',
            'kesehatan': 'Kesehatan & Herbal',
            'minuman': 'Minuman'
        };
        
        return umkmDatabase.filter(umkm => umkm.category === categoryMap[categoryId]).length;
    }

    function setupSearchBar() {
        // Add search bar section
        const searchSection = document.createElement('section');
        searchSection.className = 'search-section';
        searchSection.innerHTML = `
            <div class="container">
                <div class="search-container">
                    <div class="search-input-wrapper">
                        <input type="text" 
                               id="searchInput" 
                               placeholder="Cari UMKM berdasarkan nama atau kategori..."
                               oninput="handleSearch(this.value)">
                        <button class="search-btn" onclick="handleSearch(document.getElementById('searchInput').value)">
                            🔍
                        </button>
                    </div>
                    <div class="search-filters">
                        <button class="filter-btn" onclick="sortByName('asc')">🔤 A-Z</button>
                        <button class="filter-btn" onclick="sortByName('desc')">🔤 Z-A</button>
                        <button class="filter-btn" onclick="sortByRating('desc')">⭐ Rating Tertinggi</button>
                        <button class="filter-btn" onclick="sortByRating('asc')">⭐ Rating Terendah</button>
                    </div>
                </div>
            </div>
        `;
        
        // Add search styles
        const searchStyle = document.createElement('style');
        searchStyle.textContent = `
            .search-section {
                padding: 2rem;
                background: rgba(10, 10, 10, 0.5);
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            .search-container {
                max-width: 800px;
                margin: 0 auto;
            }
            .search-input-wrapper {
                display: flex;
                gap: 0.5rem;
                margin-bottom: 1rem;
            }
            #searchInput {
                flex: 1;
                padding: 1rem 1.5rem;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 25px;
                color: white;
                font-size: 1rem;
            }
            #searchInput::placeholder {
                color: #aaa;
            }
            .search-btn {
                padding: 1rem 1.5rem;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border: none;
                border-radius: 25px;
                color: white;
                cursor: pointer;
                transition: all 0.3s;
            }
            .search-btn:hover {
                transform: scale(1.05);
            }
            .search-filters {
                display: flex;
                gap: 0.5rem;
                justify-content: center;
                flex-wrap: wrap;
            }
            .filter-btn {
                padding: 0.5rem 1rem;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 15px;
                color: #aaa;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 0.9rem;
            }
            .filter-btn:hover {
                background: rgba(102, 126, 234, 0.2);
                border-color: #667eea;
                color: white;
            }
        `;
        document.head.appendChild(searchStyle);
        
        document.body.appendChild(searchSection);
    }

    function setupFeaturedSection() {
        // Add featured UMKM section
        const featuredSection = document.createElement('section');
        featuredSection.className = 'featured-section';
        featuredSection.innerHTML = `
            <div class="container">
                <h2>⭐ UMKM Unggulan</h2>
                <div class="featured-grid" id="featuredGrid">
                    ${umkmDatabase.filter(umkm => umkm.featured).map(umkm => `
                        <div class="featured-card" onclick="navigateToDetail(${umkm.id})">
                            <div class="featured-badge">⭐ Unggulan</div>
                            <div class="featured-icon">${umkm.icon}</div>
                            <h3>${umkm.name}</h3>
                            <p>${umkm.description}</p>
                            <div class="featured-meta">
                                <span class="category-tag">${umkm.category}</span>
                                <span class="rating">⭐ ${umkm.rating}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Add featured styles
        const featuredStyle = document.createElement('style');
        featuredStyle.textContent = `
            .featured-section {
                padding: 3rem 2rem;
                background: linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 193, 7, 0.05) 100%);
            }
            .featured-section h2 {
                text-align: center;
                font-size: 2rem;
                margin-bottom: 2rem;
                color: #fff;
            }
            .featured-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                max-width: 1200px;
                margin: 0 auto;
            }
            .featured-card {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 215, 0, 0.3);
                border-radius: 20px;
                padding: 2rem;
                text-align: center;
                cursor: pointer;
                transition: all 0.3s;
                position: relative;
                overflow: hidden;
            }
            .featured-card:hover {
                background: rgba(255, 215, 0, 0.1);
                border-color: #ffd700;
                transform: translateY(-5px);
                box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2);
            }
            .featured-badge {
                position: absolute;
                top: 15px;
                right: -30px;
                background: linear-gradient(135deg, #ffd700 0%, #ff9800 100%);
                color: #000;
                padding: 0.5rem 3rem;
                font-size: 0.8rem;
                font-weight: bold;
                transform: rotate(45deg);
                z-index: 1;
            }
            .featured-icon {
                font-size: 3rem;
                margin-bottom: 1rem;
            }
            .featured-card h3 {
                color: #fff;
                font-size: 1.4rem;
                margin: 0 0 1rem 0;
            }
            .featured-card p {
                color: #aaa;
                margin-bottom: 1.5rem;
                line-height: 1.6;
            }
            .featured-meta {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .category-tag {
                background: rgba(102, 126, 234, 0.2);
                color: #667eea;
                padding: 0.3rem 0.8rem;
                border-radius: 15px;
                font-size: 0.8rem;
            }
            .rating {
                color: #ffd700;
                font-weight: bold;
            }
        `;
        document.head.appendChild(featuredStyle);
        
        document.body.appendChild(featuredSection);
    }

    function setupUMKMGrid() {
        // Add main UMKM grid section
        const gridSection = document.createElement('section');
        gridSection.className = 'umkm-grid-section';
        gridSection.innerHTML = `
            <div class="container">
                <h2>🏪 Semua UMKM</h2>
                <div class="umkm-grid" id="umkmGrid">
                    ${renderUMKMCards(umkmDatabase)}
                </div>
                <div class="load-more-container">
                    <button class="load-more-btn" onclick="loadMore()" style="display: none;">
                        Muat Lebih Banyak
                    </button>
                </div>
            </div>
        `;
        
        // Add grid styles
        const gridStyle = document.createElement('style');
        gridStyle.textContent = `
            .umkm-grid-section {
                padding: 3rem 2rem;
            }
            .umkm-grid-section h2 {
                text-align: center;
                font-size: 2rem;
                margin-bottom: 2rem;
                color: #fff;
            }
            .umkm-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: 2rem;
                max-width: 1200px;
                margin: 0 auto;
            }
            .umkm-card {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 15px;
                padding: 2rem;
                transition: all 0.3s;
                cursor: pointer;
            }
            .umkm-card:hover {
                background: rgba(102, 126, 234, 0.1);
                border-color: #667eea;
                transform: translateY(-5px);
                box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2);
            }
            .umkm-header {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-bottom: 1rem;
            }
            .umkm-icon {
                font-size: 2.5rem;
            }
            .umkm-title {
                flex: 1;
            }
            .umkm-title h3 {
                color: #fff;
                font-size: 1.3rem;
                margin: 0 0 0.3rem 0;
            }
            .umkm-category {
                color: #667eea;
                font-size: 0.9rem;
            }
            .umkm-description {
                color: #aaa;
                line-height: 1.6;
                margin-bottom: 1.5rem;
            }
            .umkm-info {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
                margin-bottom: 1.5rem;
            }
            .info-item {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: #ccc;
                font-size: 0.9rem;
            }
            .umkm-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 1rem;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }
            .umkm-rating {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: #ffd700;
                font-weight: bold;
            }
            .umkm-price {
                color: #4caf50;
                font-weight: bold;
            }
            .load-more-container {
                text-align: center;
                margin-top: 3rem;
            }
            .load-more-btn {
                padding: 1rem 2rem;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border: none;
                border-radius: 25px;
                color: white;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 1rem;
                font-weight: bold;
            }
            .load-more-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
        `;
        document.head.appendChild(gridStyle);
        
        document.body.appendChild(gridSection);
    }

    function renderUMKMCards(umkmList) {
        return umkmList.map(umkm => `
            <div class="umkm-card" onclick="navigateToDetail(${umkm.id})">
                <div class="umkm-header">
                    <div class="umkm-icon">${umkm.icon}</div>
                    <div class="umkm-title">
                        <h3>${umkm.name}</h3>
                        <div class="umkm-category">${umkm.category}</div>
                    </div>
                </div>
                <div class="umkm-description">${umkm.description}</div>
                <div class="umkm-info">
                    <div class="info-item">
                        <span>⏰</span>
                        <span>${umkm.hours}</span>
                    </div>
                    <div class="info-item">
                        <span>💰</span>
                        <span>${umkm.price}</span>
                    </div>
                </div>
                <div class="umkm-footer">
                    <div class="umkm-rating">
                        <span>⭐</span>
                        <span>${umkm.rating}</span>
                        <span>(${umkm.reviewCount})</span>
                    </div>
                    <div class="umkm-price">${umkm.price}</div>
                </div>
            </div>
        `).join('');
    }

    function setupFilters() {
        // Add filter sidebar
        const filterSection = document.createElement('aside');
        filterSection.className = 'filter-sidebar';
        filterSection.innerHTML = `
            <div class="filter-content">
                <h3>🔍 Filter Pencarian</h3>
                <div class="filter-group">
                    <h4>Buka Sekarang</h4>
                    <label class="filter-checkbox">
                        <input type="checkbox" onchange="filterByOpenStatus(this.checked)">
                        <span>UMKM yang sedang buka</span>
                    </label>
                </div>
                <div class="filter-group">
                    <h4>Rating Minimum</h4>
                    <select onchange="filterByRating(this.value)">
                        <option value="">Semua Rating</option>
                        <option value="4.5">4.5 ke atas</option>
                        <option value="4.0">4.0 ke atas</option>
                        <option value="3.5">3.5 ke atas</option>
                    </select>
                </div>
                <div class="filter-group">
                    <h4>Harga</h4>
                    <select onchange="filterByPrice(this.value)">
                        <option value="">Semua Harga</option>
                        <option value="low">Murah (Rp 5.000 - 15.000)</option>
                        <option value="medium">Sedang (Rp 15.000 - 50.000)</option>
                        <option value="high">Mahal (Rp 50.000+)</option>
                    </select>
                </div>
                <button class="clear-filters-btn" onclick="clearAllFilters()">
                    🗑️ Hapus Filter
                </button>
            </div>
        `;
        
        // Add filter styles
        const filterStyle = document.createElement('style');
        filterStyle.textContent = `
            .filter-sidebar {
                position: fixed;
                top: 0;
                left: -300px;
                width: 300px;
                height: 100vh;
                background: rgba(10, 10, 10, 0.95);
                border-right: 1px solid rgba(255, 255, 255, 0.1);
                transition: left 0.3s ease;
                z-index: 1000;
                padding: 2rem;
                overflow-y: auto;
            }
            .filter-sidebar.open {
                left: 0;
            }
            .filter-content h3 {
                color: #fff;
                margin-bottom: 1.5rem;
            }
            .filter-group {
                margin-bottom: 2rem;
            }
            .filter-group h4 {
                color: #aaa;
                margin-bottom: 1rem;
                font-size: 0.9rem;
            }
            .filter-checkbox {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: #ccc;
                cursor: pointer;
                margin-bottom: 0.5rem;
            }
            .filter-group select {
                width: 100%;
                padding: 0.8rem;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 8px;
                color: white;
                font-size: 0.9rem;
            }
            .clear-filters-btn {
                width: 100%;
                padding: 0.8rem;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 8px;
                color: white;
                cursor: pointer;
                transition: all 0.3s;
            }
            .clear-filters-btn:hover {
                background: rgba(255, 255, 255, 0.2);
            }
            .filter-toggle-btn {
                position: fixed;
                top: 50%;
                left: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border: none;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                transition: all 0.3s;
                z-index: 999;
            }
            .filter-toggle-btn:hover {
                transform: scale(1.1);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
        `;
        document.head.appendChild(filterStyle);
        
        document.body.appendChild(filterSection);
        
        // Add filter toggle button
        const filterToggleBtn = document.createElement('button');
        filterToggleBtn.className = 'filter-toggle-btn';
        filterToggleBtn.innerHTML = '🔍';
        filterToggleBtn.onclick = toggleFilterSidebar;
        document.body.appendChild(filterToggleBtn);
    }

    function setupEventListeners() {
        // Add scroll to top button
        const scrollBtn = document.createElement('button');
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.innerHTML = '⬆️';
        scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        
        const scrollStyle = document.createElement('style');
        scrollStyle.textContent = `
            .scroll-to-top {
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border: none;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                transition: all 0.3s;
                z-index: 999;
                opacity: 0;
                visibility: hidden;
            }
            .scroll-to-top.visible {
                opacity: 1;
                visibility: visible;
            }
            .scroll-to-top:hover {
                transform: scale(1.1);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
        `;
        document.head.appendChild(scrollStyle);
        document.body.appendChild(scrollBtn);
        
        // Show/hide scroll button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });
    }

    function addAnimations() {
        // Intersection Observer for fade-in animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'all 0.6s ease';
            observer.observe(section);
        });
    }

    function setupStats() {
        // Add floating stats
        const statsContainer = document.createElement('div');
        statsContainer.className = 'floating-stats';
        statsContainer.innerHTML = `
            <div class="stat-float">
                <span class="stat-icon">🏪</span>
                <span class="stat-text">${umkmDatabase.length} UMKM</span>
            </div>
            <div class="stat-float">
                <span class="stat-icon">⭐</span>
                <span class="stat-text">4.8 Rating</span>
            </div>
            <div class="stat-float">
                <span class="stat-icon">📍</span>
                <span class="stat-text">Karawang</span>
            </div>
        `;
        
        const statsStyle = document.createElement('style');
        statsStyle.textContent = `
            .floating-stats {
                position: fixed;
                bottom: 30px;
                left: 30px;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                z-index: 998;
            }
            .stat-float {
                background: rgba(10, 10, 10, 0.9);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 25px;
                padding: 0.8rem 1.2rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                backdrop-filter: blur(10px);
            }
            .stat-icon {
                font-size: 1.2rem;
            }
            .stat-text {
                color: #fff;
                font-size: 0.9rem;
                font-weight: 600;
            }
        `;
        document.head.appendChild(statsStyle);
        document.body.appendChild(statsContainer);
    }

    // Global functions for filtering and navigation
    window.filterByCategory = function(categoryId) {
        // Update active category button
        document.querySelectorAll('.category-card').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${categoryId}"]`).classList.add('active');
        
        // Filter UMKM list
        let filteredList = umkmDatabase;
        
        if (categoryId !== 'all') {
            const categoryMap = {
                'kuliner': 'Kuliner',
                'toko_kelontong': 'Toko Kelontong',
                'jasa': 'Jasa',
                'sembako': 'Sembako',
                'kesehatan': 'Kesehatan & Herbal',
                'minuman': 'Minuman'
            };
            
            filteredList = umkmDatabase.filter(umkm => umkm.category === categoryMap[categoryId]);
        }
        
        // Update grid
        document.getElementById('umkmGrid').innerHTML = renderUMKMCards(filteredList);
        
        // Scroll to grid
        document.querySelector('.umkm-grid-section').scrollIntoView({ behavior: 'smooth' });
    };

    window.handleSearch = function(query) {
        const searchTerm = query.toLowerCase().trim();
        
        if (searchTerm === '') {
            document.getElementById('umkmGrid').innerHTML = renderUMKMCards(umkmDatabase);
            return;
        }
        
        const filteredList = umkmDatabase.filter(umkm => 
            umkm.name.toLowerCase().includes(searchTerm) ||
            umkm.category.toLowerCase().includes(searchTerm) ||
            umkm.description.toLowerCase().includes(searchTerm)
        );
        
        document.getElementById('umkmGrid').innerHTML = renderUMKMCards(filteredList);
    };

    window.sortByName = function(order) {
        const sortedList = [...umkmDatabase].sort((a, b) => {
            return order === 'asc' 
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        });
        
        document.getElementById('umkmGrid').innerHTML = renderUMKMCards(sortedList);
    };

    window.sortByRating = function(order) {
        const sortedList = [...umkmDatabase].sort((a, b) => {
            return order === 'desc' 
                ? b.rating - a.rating
                : a.rating - b.rating;
        });
        
        document.getElementById('umkmGrid').innerHTML = renderUMKMCards(sortedList);
    };

    window.filterByOpenStatus = function(isOpen) {
        if (!isOpen) {
            document.getElementById('umkmGrid').innerHTML = renderUMKMCards(umkmDatabase);
            return;
        }
        
        // Simple check for current time (in real app, this would be more sophisticated)
        const now = new Date();
        const currentHour = now.getHours();
        
        const openList = umkmDatabase.filter(umkm => {
            const hours = umkm.hours;
            // This is simplified - real implementation would parse hours properly
            return true; // For demo, assume all are open
        });
        
        document.getElementById('umkmGrid').innerHTML = renderUMKMCards(openList);
    };

    window.filterByRating = function(minRating) {
        if (!minRating) {
            document.getElementById('umkmGrid').innerHTML = renderUMKMCards(umkmDatabase);
            return;
        }
        
        const filteredList = umkmDatabase.filter(umkm => umkm.rating >= parseFloat(minRating));
        document.getElementById('umkmGrid').innerHTML = renderUMKMCards(filteredList);
    };

    window.filterByPrice = function(priceRange) {
        if (!priceRange) {
            document.getElementById('umkmGrid').innerHTML = renderUMKMCards(umkmDatabase);
            return;
        }
        
        // This is simplified - real implementation would parse price ranges
        const filteredList = umkmDatabase; // For demo, show all
        document.getElementById('umkmGrid').innerHTML = renderUMKMCards(filteredList);
    };

    window.clearAllFilters = function() {
        document.getElementById('umkmGrid').innerHTML = renderUMKMCards(umkmDatabase);
        document.getElementById('searchInput').value = '';
        
        // Reset all filter controls
        document.querySelectorAll('.filter-checkbox input').forEach(cb => cb.checked = false);
        document.querySelectorAll('.filter-group select').forEach(select => select.value = '');
        
        // Reset category
        document.querySelectorAll('.category-card').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector('[data-category="all"]').classList.add('active');
    };

    window.toggleFilterSidebar = function() {
        document.querySelector('.filter-sidebar').classList.toggle('open');
    };

    window.navigateToDetail = function(umkmId) {
        // Navigate to detail page
        const umkm = umkmDatabase.find(u => u.id === umkmId);
        if (umkm) {
            // In real implementation, this would navigate to actual detail page
            window.location.href = `${umkm.name.toLowerCase().replace(/\s+/g, '')}.html?id=${umkmId}`;
        }
    };

    window.loadMore = function() {
        // Placeholder for load more functionality
        showNotification('Semua UMKM telah dimuat');
    };

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }

    // Add notification animations
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(notificationStyle);
});
