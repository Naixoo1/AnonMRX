// Tokoberaskaryapusaka UMKM JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // UMKM Data
    const umkmData = {
        name: "Toko Beras Karya Pusaka",
        icon: "🏺",
        category: "Sembako",
        description: "Toko beras tradisional dengan warisan kualitas dan pelayanan terbaik sejak 1985",
        hours: "06.00 - 21.00",
        price: "Rp 11.000 - 22.000/kg",
        address: "Jl. Pusaka No. 88, Karawang Barat",
        phone: "+628123456789",
        whatsapp: "628123456789",
        instagram: "@tokoberaskaryapusaka"
    };

    // Heritage rice varieties
    const heritageRice = [
        { 
            name: 'Beras Pusaka Premium', 
            price: 'Rp 18.000/kg', 
            description: 'Beras warisan keluarga dengan kualitas terbaik',
            origin: 'Karawang Asli',
            quality: 'Premium',
            stock: 'Tersedia'
        },
        { 
            name: 'Beras IR 64 Kualitas Super', 
            price: 'Rp 13.500/kg', 
            description: 'Beras pilihan dengan butiran sempurna',
            origin: 'Karawang',
            quality: 'Super',
            stock: 'Tersedia'
        },
        { 
            name: 'Beras Pandan Wangi Heritage', 
            price: 'Rp 16.000/kg', 
            description: 'Aroma pandan alami dari kebun sendiri',
            origin: 'Karawang',
            quality: 'Premium',
            stock: 'Terbatas'
        },
        { 
            name: 'Beras Organik Karya Pusaka', 
            price: 'Rp 22.000/kg', 
            description: 'Beras organik tanpa pestisida',
            origin: 'Lokal',
            quality: 'Organik',
            stock: 'Tersedia'
        },
        { 
            name: 'Beras Muncul Special', 
            price: 'Rp 15.000/kg', 
            description: 'Varietas unggul lokal Karawang',
            origin: 'Karawang',
            quality: 'Premium',
            stock: 'Tersedia'
        },
        { 
            name: 'Beras Ketan Putih', 
            price: 'Rp 20.000/kg', 
            description: 'Ketan berkualitas untuk jajanan tradisional',
            origin: 'Karawang',
            quality: 'Special',
            stock: 'Tersedia'
        }
    ];

    // Special packages
    const specialPackages = [
        { 
            name: 'Paket Keluarga Pusaka', 
            price: 'Rp 275.000', 
            description: '25kg Beras Pusaka Premium + gratis bumbu',
            savings: 'Hemat Rp 25.000',
            popular: true
        },
        { 
            name: 'Paket Warisan', 
            price: 'Rp 150.000', 
            description: '10kg campuran beras premium',
            savings: 'Hemat Rp 15.000',
            popular: false
        },
        { 
            name: 'Paket Organik Sehat', 
            price: 'Rp 220.000', 
            description: '10kg Beras Organik + madu',
            savings: 'Gratis ongkir',
            popular: false
        }
    ];

    // Initialize page
    initializePage();

    function initializePage() {
        updatePageContent();
        setupEventListeners();
        addAnimations();
        setupHeritageSection();
        setupRiceProducts();
        setupSpecialPackages();
        setupHeritageStory();
        setupLoyaltyProgram();
    }

    function updatePageContent() {
        // Update page title
        document.title = `${umkmData.name} - Detail UMKM`;
        
        // Update hero section
        const heroIcon = document.getElementById('heroIcon');
        const umkmName = document.getElementById('umkmName');
        const umkmDesc = document.getElementById('umkmDesc');
        
        if (heroIcon) heroIcon.textContent = umkmData.icon;
        if (umkmName) umkmName.textContent = umkmData.name;
        if (umkmDesc) umkmDesc.textContent = umkmData.description;
    }

    function setupEventListeners() {
        // Contact buttons
        const whatsappBtn = document.querySelector('.contact-btn.whatsapp');
        const phoneBtn = document.querySelector('.contact-btn.phone');
        const instagramBtn = document.querySelector('.contact-btn.instagram');
        
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', () => {
                window.open(`https://wa.me/${umkmData.whatsapp}?text=Halo, saya ingin memesan beras di Toko Beras Karya Pusaka`, '_blank');
            });
        }
        
        if (phoneBtn) {
            phoneBtn.addEventListener('click', () => {
                window.open(`tel:${umkmData.phone}`, '_blank');
            });
        }
        
        if (instagramBtn) {
            instagramBtn.addEventListener('click', () => {
                window.open(`https://instagram.com/${umkmData.instagram.replace('@', '')}`, '_blank');
            });
        }

        // Photo gallery lightbox
        setupPhotoGallery();
    }

    function setupHeritageSection() {
        // Add heritage badge to hero
        const heroInfo = document.querySelector('.hero-info');
        if (heroInfo) {
            const heritageBadge = document.createElement('div');
            heritageBadge.className = 'heritage-badge';
            heritageBadge.innerHTML = `
                <div class="badge-content">
                    <span class="badge-icon">🏆</span>
                    <span class="badge-text">Warisan Sejak 1985</span>
                </div>
            `;
            
            const badgeStyle = document.createElement('style');
            badgeStyle.textContent = `
                .heritage-badge {
                    margin-top: 1rem;
                }
                .badge-content {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.8rem 1.5rem;
                    background: linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 193, 7, 0.2) 100%);
                    border: 1px solid rgba(255, 215, 0, 0.3);
                    border-radius: 25px;
                    color: #ffd700;
                    font-weight: bold;
                    font-size: 0.95rem;
                }
                .badge-icon {
                    font-size: 1.2rem;
                }
            `;
            document.head.appendChild(badgeStyle);
            
            heroInfo.appendChild(heritageBadge);
        }
    }

    function setupRiceProducts() {
        // Add rice products section
        const productsSection = document.createElement('div');
        productsSection.className = 'section';
        productsSection.innerHTML = `
            <h2>🌾 Varietas Beras Warisan</h2>
            <div class="rice-showcase">
                ${heritageRice.map((rice, index) => `
                    <div class="heritage-rice-card" data-index="${index}">
                        <div class="rice-header">
                            <div class="rice-title">
                                <h4>${rice.name}</h4>
                                <span class="origin-badge">${rice.origin}</span>
                            </div>
                            <div class="rice-price-info">
                                <span class="rice-price">${rice.price}</span>
                                <span class="quality-badge ${rice.quality.toLowerCase()}">${rice.quality}</span>
                            </div>
                        </div>
                        <p class="rice-description">${rice.description}</p>
                        <div class="rice-meta">
                            <span class="stock-status ${rice.stock === 'Tersedia' ? 'in-stock' : 'limited-stock'}">
                                📦 ${rice.stock}
                            </span>
                        </div>
                        <div class="rice-actions">
                            <button class="order-heritage-btn" onclick="orderHeritageRice('${rice.name}')">
                                🛒 Pesan Sekarang
                            </button>
                            <button class="view-details-btn" onclick="viewRiceDetails(${index})">
                                📋 Detail
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Add styles for heritage rice cards
        const productsStyle = document.createElement('style');
        productsStyle.textContent = `
            .rice-showcase {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: 2rem;
                margin-top: 2rem;
            }
            .heritage-rice-card {
                background: linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 193, 7, 0.05) 100%);
                border: 1px solid rgba(255, 215, 0, 0.2);
                border-radius: 20px;
                padding: 2rem;
                transition: all 0.3s;
                position: relative;
            }
            .heritage-rice-card:hover {
                background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 193, 7, 0.1) 100%);
                border-color: #ffd700;
                transform: translateY(-5px);
                box-shadow: 0 15px 40px rgba(255, 215, 0, 0.1);
            }
            .rice-header {
                margin-bottom: 1rem;
            }
            .rice-title {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 0.5rem;
            }
            .rice-title h4 {
                color: #fff;
                font-size: 1.2rem;
                margin: 0;
            }
            .origin-badge {
                background: rgba(102, 126, 234, 0.2);
                color: #667eea;
                padding: 0.2rem 0.6rem;
                border-radius: 10px;
                font-size: 0.8rem;
            }
            .rice-price-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .rice-price {
                color: #ffd700;
                font-weight: bold;
                font-size: 1.1rem;
            }
            .quality-badge {
                padding: 0.3rem 0.8rem;
                border-radius: 15px;
                font-size: 0.8rem;
                font-weight: bold;
                text-transform: uppercase;
            }
            .quality-badge.premium {
                background: rgba(255, 215, 0, 0.2);
                color: #ffd700;
            }
            .quality-badge.super {
                background: rgba(76, 175, 80, 0.2);
                color: #4caf50;
            }
            .quality-badge.organik {
                background: rgba(139, 195, 74, 0.2);
                color: #8bc34a;
            }
            .quality-badge.special {
                background: rgba(156, 39, 176, 0.2);
                color: #9c27b0;
            }
            .rice-description {
                color: #aaa;
                margin-bottom: 1rem;
                line-height: 1.6;
            }
            .rice-meta {
                margin-bottom: 1.5rem;
            }
            .stock-status {
                display: inline-block;
                padding: 0.3rem 0.8rem;
                border-radius: 15px;
                font-size: 0.8rem;
                font-weight: bold;
            }
            .stock-status.in-stock {
                background: rgba(76, 175, 80, 0.2);
                color: #4caf50;
            }
            .stock-status.limited-stock {
                background: rgba(255, 152, 0, 0.2);
                color: #ff9800;
            }
            .rice-actions {
                display: flex;
                gap: 0.5rem;
            }
            .order-heritage-btn,
            .view-details-btn {
                flex: 1;
                padding: 0.8rem;
                border: none;
                border-radius: 10px;
                color: white;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 0.9rem;
            }
            .order-heritage-btn {
                background: linear-gradient(135deg, #ffd700 0%, #ff9800 100%);
                color: #000;
                font-weight: bold;
            }
            .order-heritage-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
            }
            .view-details-btn {
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            .view-details-btn:hover {
                background: rgba(255, 255, 255, 0.2);
            }
        `;
        document.head.appendChild(productsStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            const firstSection = container.querySelector('.section');
            if (firstSection) {
                firstSection.after(productsSection);
            } else {
                container.appendChild(productsSection);
            }
        }
    }

    function setupSpecialPackages() {
        // Add special packages section
        const packagesSection = document.createElement('div');
        packagesSection.className = 'section';
        packagesSection.innerHTML = `
            <h2>🎁 Paket Spesial Warisan</h2>
            <div class="packages-grid">
                ${specialPackages.map((pkg, index) => `
                    <div class="special-package-card ${pkg.popular ? 'popular' : ''}" data-index="${index}">
                        ${pkg.popular ? '<div class="popular-ribbon">⭐ POPULER</div>' : ''}
                        <div class="package-content">
                            <h4>${pkg.name}</h4>
                            <p class="package-description">${pkg.description}</p>
                            <div class="package-price-row">
                                <span class="package-price">${pkg.price}</span>
                                <span class="package-savings">${pkg.savings}</span>
                            </div>
                            <button class="order-package-btn" onclick="orderSpecialPackage('${pkg.name}')">
                                🛺 Pesan Paket
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Add styles for special packages
        const packagesStyle = document.createElement('style');
        packagesStyle.textContent = `
            .packages-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                margin-top: 2rem;
            }
            .special-package-card {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                overflow: hidden;
                transition: all 0.3s;
                position: relative;
            }
            .special-package-card.popular {
                border-color: #ffd700;
                background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 193, 7, 0.1) 100%);
            }
            .special-package-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2);
            }
            .popular-ribbon {
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
            .package-content {
                padding: 2rem;
            }
            .package-content h4 {
                color: #fff;
                font-size: 1.3rem;
                margin: 0 0 1rem 0;
            }
            .package-description {
                color: #aaa;
                margin-bottom: 1.5rem;
                line-height: 1.6;
            }
            .package-price-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5rem;
            }
            .package-price {
                color: #ffd700;
                font-weight: bold;
                font-size: 1.4rem;
            }
            .package-savings {
                background: rgba(76, 175, 80, 0.2);
                color: #4caf50;
                padding: 0.3rem 0.8rem;
                border-radius: 15px;
                font-size: 0.9rem;
                font-weight: bold;
            }
            .order-package-btn {
                width: 100%;
                padding: 1rem;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border: none;
                border-radius: 10px;
                color: white;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 1rem;
                font-weight: bold;
            }
            .order-package-btn:hover {
                transform: scale(1.02);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
        `;
        document.head.appendChild(packagesStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(packagesSection);
        }
    }

    function setupHeritageStory() {
        // Add heritage story section
        const storySection = document.createElement('div');
        storySection.className = 'section';
        storySection.innerHTML = `
            <h2>📖 Cerita Warisan</h2>
            <div class="heritage-story">
                <div class="story-content">
                    <div class="story-timeline">
                        <div class="timeline-item">
                            <div class="timeline-year">1985</div>
                            <div class="timeline-content">
                                <h4>Awal Mula</h4>
                                <p>Toko Beras Karya Pusaka didirikan oleh Bapak H. Ahmad dengan komitmen menyediakan beras berkualitas terbaik untuk masyarakat Karawang.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">1995</div>
                            <div class="timeline-content">
                                <h4>Ekspansi Bisnis</h4>
                                <p>Memperluas jaringan distribusi dan mulai melayani pesanan besar untuk restoran dan hotel di wilayah Karawang.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">2010</div>
                            <div class="timeline-content">
                                <h4>Generasi Kedua</h4>
                                <p>Diteruskan oleh generasi kedua dengan inovasi produk organik dan kemasan modern tanpa menghilangkan kualitas tradisional.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">2024</div>
                            <div class="timeline-content">
                                <h4>Era Digital</h4>
                                <p>Mengadopsi teknologi untuk pelayanan online dan mempertahankan warisan kualitas yang telah terbukti selama hampir 40 tahun.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add styles for heritage story
        const storyStyle = document.createElement('style');
        storyStyle.textContent = `
            .heritage-story {
                margin-top: 2rem;
            }
            .story-timeline {
                position: relative;
                padding-left: 2rem;
            }
            .story-timeline::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 2px;
                background: linear-gradient(to bottom, #ffd700, #667eea);
            }
            .timeline-item {
                position: relative;
                margin-bottom: 3rem;
                padding-left: 2rem;
            }
            .timeline-item::before {
                content: '';
                position: absolute;
                left: -2.5rem;
                top: 0.5rem;
                width: 12px;
                height: 12px;
                background: #ffd700;
                border-radius: 50%;
                border: 3px solid rgba(255, 215, 0, 0.3);
            }
            .timeline-year {
                position: absolute;
                left: -6rem;
                top: 0;
                background: linear-gradient(135deg, #ffd700 0%, #ff9800 100%);
                color: #000;
                padding: 0.5rem 1rem;
                border-radius: 20px;
                font-weight: bold;
                font-size: 0.9rem;
            }
            .timeline-content h4 {
                color: #fff;
                font-size: 1.2rem;
                margin: 0 0 0.5rem 0;
            }
            .timeline-content p {
                color: #aaa;
                line-height: 1.6;
                margin: 0;
            }
        `;
        document.head.appendChild(storyStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(storySection);
        }
    }

    function setupLoyaltyProgram() {
        // Add loyalty program section
        const loyaltySection = document.createElement('div');
        loyaltySection.className = 'section';
        loyaltySection.innerHTML = `
            <h2>🎊 Program Loyalitas</h2>
            <div class="loyalty-program">
                <div class="loyalty-cards">
                    <div class="loyalty-card bronze">
                        <div class="loyalty-icon">🥉</div>
                        <h4>Anggota Perunggu</h4>
                        <p>Minimal pembelian 50kg/bulan</p>
                        <ul>
                            <li>Diskon 2% untuk semua produk</li>
                            <li>Gratis ongkir radius 3km</li>
                            <li>Hadiah ulang tahun</li>
                        </ul>
                    </div>
                    <div class="loyalty-card silver">
                        <div class="loyalty-icon">🥈</div>
                        <h4>Anggota Perak</h4>
                        <p>Minimal pembelian 100kg/bulan</p>
                        <ul>
                            <li>Diskon 5% untuk semua produk</li>
                            <li>Gratis ongkir radius 5km</li>
                            <li>Prioritas pengiriman</li>
                            <li>Poin reward 2x</li>
                        </ul>
                    </div>
                    <div class="loyalty-card gold">
                        <div class="loyalty-icon">🥇</div>
                        <h4>Anggota Emas</h4>
                        <p>Minimal pembelian 200kg/bulan</p>
                        <ul>
                            <li>Diskon 10% untuk semua produk</li>
                            <li>Gratis ongkir seluruh Karawang</li>
                            <li>Layanan personal assistant</li>
                            <li>Produk eksklusif</li>
                        </ul>
                    </div>
                </div>
                <div class="loyalty-cta">
                    <button class="join-loyalty-btn" onclick="joinLoyaltyProgram()">
                        🎯 Gabung Sekarang
                    </button>
                </div>
            </div>
        `;
        
        // Add styles for loyalty program
        const loyaltyStyle = document.createElement('style');
        loyaltyStyle.textContent = `
            .loyalty-program {
                margin-top: 2rem;
            }
            .loyalty-cards {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 2rem;
                margin-bottom: 2rem;
            }
            .loyalty-card {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                padding: 2rem;
                text-align: center;
                transition: all 0.3s;
            }
            .loyalty-card:hover {
                transform: translateY(-5px);
            }
            .loyalty-card.bronze {
                border-color: #cd7f32;
                background: rgba(205, 127, 50, 0.1);
            }
            .loyalty-card.silver {
                border-color: #c0c0c0;
                background: rgba(192, 192, 192, 0.1);
            }
            .loyalty-card.gold {
                border-color: #ffd700;
                background: rgba(255, 215, 0, 0.1);
            }
            .loyalty-icon {
                font-size: 3rem;
                margin-bottom: 1rem;
            }
            .loyalty-card h4 {
                color: #fff;
                font-size: 1.3rem;
                margin: 0 0 0.5rem 0;
            }
            .loyalty-card p {
                color: #aaa;
                margin-bottom: 1.5rem;
            }
            .loyalty-card ul {
                list-style: none;
                padding: 0;
                text-align: left;
            }
            .loyalty-card li {
                color: #ccc;
                padding: 0.5rem 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            }
            .loyalty-card li:last-child {
                border-bottom: none;
            }
            .loyalty-cta {
                text-align: center;
            }
            .join-loyalty-btn {
                padding: 1rem 3rem;
                background: linear-gradient(135deg, #ffd700 0%, #ff9800 100%);
                border: none;
                border-radius: 25px;
                color: #000;
                font-weight: bold;
                font-size: 1.1rem;
                cursor: pointer;
                transition: all 0.3s;
            }
            .join-loyalty-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
            }
        `;
        document.head.appendChild(loyaltyStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(loyaltySection);
        }
    }

    function setupPhotoGallery() {
        const photoItems = document.querySelectorAll('.photo-item');
        
        photoItems.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                const title = this.querySelector('.photo-title').textContent;
                openLightbox(img.src, title);
            });
        });
    }

    function openLightbox(imageSrc, title) {
        // Create lightbox overlay
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            cursor: pointer;
        `;
        
        const img = document.createElement('img');
        img.src = imageSrc;
        img.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            border-radius: 10px;
        `;
        
        lightbox.appendChild(img);
        document.body.appendChild(lightbox);
        
        lightbox.addEventListener('click', function() {
            document.body.removeChild(lightbox);
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

        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'all 0.6s ease';
            observer.observe(section);
        });
    }

    // Global functions
    window.orderHeritageRice = function(riceName) {
        const message = `Halo, saya ingin memesan ${riceName} dari Toko Beras Karya Pusaka`;
        window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    };

    window.orderSpecialPackage = function(packageName) {
        const message = `Halo, saya ingin memesan ${packageName} dari Toko Beras Karya Pusaka`;
        window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    };

    window.viewRiceDetails = function(index) {
        const rice = heritageRice[index];
        const modal = document.createElement('div');
        modal.className = 'rice-details-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>🌾 Detail Produk</h3>
                    <button class="close-modal-btn" onclick="closeModal()">✕</button>
                </div>
                <div class="modal-body">
                    <h4>${rice.name}</h4>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <span class="detail-label">Asal:</span>
                            <span class="detail-value">${rice.origin}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Kualitas:</span>
                            <span class="detail-value">${rice.quality}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Harga:</span>
                            <span class="detail-value">${rice.price}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Stok:</span>
                            <span class="detail-value">${rice.stock}</span>
                        </div>
                    </div>
                    <div class="detail-description">
                        <h5>Deskripsi:</h5>
                        <p>${rice.description}</p>
                    </div>
                    <div class="modal-actions">
                        <button class="order-from-modal-btn" onclick="orderHeritageRice('${rice.name}'); closeModal();">
                            🛒 Pesan Sekarang
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;
        
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.cssText = `
            background: rgba(10, 10, 10, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 2rem;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
        `;
        
        document.body.appendChild(modal);
    };

    window.joinLoyaltyProgram = function() {
        const message = `Halo, saya tertarik untuk bergabung dengan Program Loyalitas Toko Beras Karya Pusaka`;
        window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    };

    window.closeModal = function() {
        const modal = document.querySelector('.rice-details-modal');
        if (modal) {
            document.body.removeChild(modal);
        }
    };

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #ffd700 0%, #ff9800 100%);
            color: #000;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            font-weight: bold;
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

    // Back button functionality
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.history.back();
        });
    }

    // Add modal styles
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }
        .modal-header h3 {
            color: #fff;
            margin: 0;
        }
        .close-modal-btn {
            background: none;
            border: none;
            color: #aaa;
            font-size: 1.5rem;
            cursor: pointer;
            transition: color 0.3s;
        }
        .close-modal-btn:hover {
            color: #fff;
        }
        .modal-body h4 {
            color: #ffd700;
            font-size: 1.4rem;
            margin: 0 0 1.5rem 0;
        }
        .detail-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        .detail-item {
            display: flex;
            justify-content: space-between;
            padding: 0.8rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
        }
        .detail-label {
            color: #aaa;
            font-weight: 500;
        }
        .detail-value {
            color: #fff;
            font-weight: bold;
        }
        .detail-description h5 {
            color: #fff;
            margin: 0 0 0.5rem 0;
        }
        .detail-description p {
            color: #aaa;
            line-height: 1.6;
            margin: 0;
        }
        .modal-actions {
            margin-top: 2rem;
        }
        .order-from-modal-btn {
            width: 100%;
            padding: 1rem;
            background: linear-gradient(135deg, #ffd700 0%, #ff9800 100%);
            border: none;
            border-radius: 10px;
            color: #000;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s;
        }
        .order-from-modal-btn:hover {
            transform: scale(1.02);
            box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
        }
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
    document.head.appendChild(modalStyle);
});
