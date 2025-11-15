// Tokorestuibu UMKM JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // UMKM Data
    const umkmData = {
        name: "Toko Restu Ibu",
        icon: "🏪",
        category: "Toko Kelontong",
        description: "Toko kelontong keluarga dengan pelayanan hangat dan kebutuhan lengkap sehari-hari",
        hours: "06.30 - 21.30",
        price: "Harga keluarga",
        address: "Jl. Ibu No. 99, Karawang Barat",
        phone: "+628123456789",
        whatsapp: "628123456789",
        instagram: "@tokorestuibu"
    };

    // Product inventory
    const productInventory = {
        'kebutuhan_dapur': [
            { name: 'Beras Premium', price: 'Rp 13.000/kg', stock: 50, unit: 'kg' },
            { name: 'Minyak Goreng', price: 'Rp 17.000/liter', stock: 30, unit: 'liter' },
            { name: 'Gula Pasir', price: 'Rp 12.500/kg', stock: 40, unit: 'kg' },
            { name: 'Tepung Terigu', price: 'Rp 9.500/kg', stock: 25, unit: 'kg' },
            { name: 'Kecap Manis', price: 'Rp 8.000/botol', stock: 60, unit: 'botol' },
            { name: 'Saus Tomat', price: 'Rp 7.500/botol', stock: 45, unit: 'botol' }
        ],
        'minuman': [
            { name: 'Teh Sariwangi', price: 'Rp 14.000/box', stock: 35, unit: 'box' },
            { name: 'Kopi Kapal Api', price: 'Rp 11.500/sachet', stock: 80, unit: 'sachet' },
            { name: 'Susu Bear Brand', price: 'Rp 9.000/kaleng', stock: 40, unit: 'kaleng' },
            { name: 'Air Mineral', price: 'Rp 4.500/galon', stock: 20, unit: 'galon' }
        ],
        'kebersihan': [
            { name: 'Sabun Mandi', price: 'Rp 5.500/batang', stock: 70, unit: 'batang' },
            { name: 'Sampo', price: 'Rp 14.000/botol', stock: 30, unit: 'botol' },
            { name: 'Pasta Gigi', price: 'Rp 7.500/tube', stock: 55, unit: 'tube' },
            { name: 'Deterjen', price: 'Rp 16.000/kemasan', stock: 25, unit: 'kemasan' }
        ],
        'snack': [
            { name: 'Kerupuk Udang', price: 'Rp 9.000/bungkus', stock: 40, unit: 'bungkus' },
            { name: 'Biskuit Regina', price: 'Rp 11.000/pack', stock: 35, unit: 'pack' },
            { name: 'Permen Mint', price: 'Rp 3.000/bungkus', stock: 90, unit: 'bungkus' },
            { name: 'Coklat SilverQueen', price: 'Rp 12.500/bar', stock: 20, unit: 'bar' }
        ]
    };

    // Family packages
    const familyPackages = [
        { 
            name: 'Paket Keluarga Kecil', 
            items: ['Beras 5kg', 'Minyak 1L', 'Gula 1kg', 'Teh 1box'], 
            price: 'Rp 95.000', 
            savings: 'Hemat Rp 15.000',
            suitable: '2-3 orang'
        },
        { 
            name: 'Paket Keluarga Besar', 
            items: ['Beras 10kg', 'Minyak 2L', 'Gula 2kg', 'Teh 2box', 'Kopi 1box'], 
            price: 'Rp 185.000', 
            savings: 'Hemat Rp 35.000',
            suitable: '4-6 orang'
        },
        { 
            name: 'Paket Kebersihan Rumah', 
            items: ['Sabun 2batang', 'Sampo 1botol', 'Pasta Gigi 2tube', 'Deterjen 1kemasan'], 
            price: 'Rp 48.000', 
            savings: 'Hemat Rp 8.000',
            suitable: '1 bulan'
        }
    ];

    // Initialize page
    initializePage();

    function initializePage() {
        updatePageContent();
        setupEventListeners();
        addAnimations();
        setupProductInventory();
        setupFamilyPackages();
        setupCustomerService();
        setupLoyaltyProgram();
        setupOrderSystem();
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
        
        // Add family badge to hero
        const heroInfo = document.querySelector('.hero-info');
        if (heroInfo) {
            const familyBadge = document.createElement('div');
            familyBadge.className = 'family-badge';
            familyBadge.innerHTML = `
                <div class="badge-content">
                    <span class="badge-icon">👨‍👩‍👧‍👦</span>
                    <span class="badge-text">Toko Keluarga Sejak 1992</span>
                </div>
            `;
            
            const badgeStyle = document.createElement('style');
            badgeStyle.textContent = `
                .family-badge {
                    margin-top: 1rem;
                }
                .badge-content {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.8rem 1.5rem;
                    background: linear-gradient(135deg, rgba(255, 105, 180, 0.2) 0%, rgba(255, 20, 147, 0.2) 100%);
                    border: 1px solid rgba(255, 105, 180, 0.3);
                    border-radius: 25px;
                    color: #ff69b4;
                    font-weight: bold;
                    font-size: 0.95rem;
                }
                .badge-icon {
                    font-size: 1.2rem;
                }
            `;
            document.head.appendChild(badgeStyle);
            
            heroInfo.appendChild(familyBadge);
        }
    }

    function setupEventListeners() {
        // Contact buttons
        const whatsappBtn = document.querySelector('.contact-btn.whatsapp');
        const phoneBtn = document.querySelector('.contact-btn.phone');
        const instagramBtn = document.querySelector('.contact-btn.instagram');
        
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', () => {
                window.open(`https://wa.me/${umkmData.whatsapp}?text=Halo Ibu, saya ingin berbelanja di Toko Restu Ibu`, '_blank');
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

    function setupProductInventory() {
        // Add product inventory section
        const inventorySection = document.createElement('div');
        inventorySection.className = 'section';
        inventorySection.innerHTML = `
            <h2>📦 Inventori Produk</h2>
            <div class="inventory-tabs">
                ${Object.keys(productInventory).map(category => `
                    <button class="inventory-tab-btn active" data-category="${category}">
                        ${formatCategoryName(category)}
                    </button>
                `).join('')}
            </div>
            <div class="inventory-container" id="inventoryContainer">
                ${renderInventoryProducts('kebutuhan_dapur')}
            </div>
        `;
        
        // Add styles for product inventory
        const inventoryStyle = document.createElement('style');
        inventoryStyle.textContent = `
            .inventory-tabs {
                display: flex;
                gap: 0.5rem;
                margin: 1.5rem 0;
                flex-wrap: wrap;
                justify-content: center;
            }
            .inventory-tab-btn {
                padding: 0.8rem 1.5rem;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                color: #aaa;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 0.9rem;
            }
            .inventory-tab-btn.active,
            .inventory-tab-btn:hover {
                background: rgba(255, 105, 180, 0.2);
                border-color: #ff69b4;
                color: white;
            }
            .inventory-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 1.5rem;
            }
            .inventory-item {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 15px;
                padding: 1.5rem;
                transition: all 0.3s;
                position: relative;
            }
            .inventory-item:hover {
                background: rgba(255, 105, 180, 0.1);
                border-color: #ff69b4;
                transform: translateY(-5px);
            }
            .item-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 1rem;
            }
            .item-name {
                color: #fff;
                font-size: 1.1rem;
                font-weight: 600;
                margin: 0;
            }
            .item-stock {
                background: rgba(76, 175, 80, 0.2);
                color: #4caf50;
                padding: 0.3rem 0.8rem;
                border-radius: 15px;
                font-size: 0.8rem;
                font-weight: bold;
            }
            .item-stock.low {
                background: rgba(255, 152, 0, 0.2);
                color: #ff9800;
            }
            .item-details {
                margin-bottom: 1rem;
            }
            .item-price {
                color: #ff69b4;
                font-weight: bold;
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
            }
            .item-unit {
                color: #aaa;
                font-size: 0.9rem;
            }
            .item-actions {
                display: flex;
                gap: 0.5rem;
            }
            .add-item-btn,
            .item-info-btn {
                flex: 1;
                padding: 0.8rem;
                border: none;
                border-radius: 8px;
                color: white;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 0.9rem;
            }
            .add-item-btn {
                background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
            }
            .add-item-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4);
            }
            .item-info-btn {
                background: rgba(255, 255, 255, 0.1);
            }
            .item-info-btn:hover {
                background: rgba(255, 255, 255, 0.2);
            }
        `;
        document.head.appendChild(inventoryStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            const firstSection = container.querySelector('.section');
            if (firstSection) {
                firstSection.after(inventorySection);
            } else {
                container.appendChild(inventorySection);
            }
        }
        
        // Setup inventory tab switching
        setupInventoryTabSwitching();
    }

    function formatCategoryName(category) {
        const names = {
            'kebutuhan_dapur': 'Kebutuhan Dapur',
            'minuman': 'Minuman',
            'kebersihan': 'Kebersihan',
            'snack': 'Snack'
        };
        return names[category] || category;
    }

    function renderInventoryProducts(category) {
        const products = productInventory[category];
        return `
            <div class="inventory-grid">
                ${products.map((product, index) => `
                    <div class="inventory-item" data-category="${category}" data-index="${index}">
                        <div class="item-header">
                            <h4 class="item-name">${product.name}</h4>
                            <span class="item-stock ${product.stock < 30 ? 'low' : ''}">
                                Stok: ${product.stock} ${product.unit}
                            </span>
                        </div>
                        <div class="item-details">
                            <div class="item-price">${product.price}</div>
                            <div class="item-unit">Per ${product.unit}</div>
                        </div>
                        <div class="item-actions">
                            <button class="add-item-btn" onclick="addInventoryItem('${category}', ${index})">
                                🛒 Tambah
                            </button>
                            <button class="item-info-btn" onclick="showItemInfo('${category}', ${index})">
                                ℹ️ Info
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function setupInventoryTabSwitching() {
        const tabButtons = document.querySelectorAll('.inventory-tab-btn');
        const inventoryContainer = document.getElementById('inventoryContainer');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                tabButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Update inventory display
                const category = this.dataset.category;
                inventoryContainer.innerHTML = renderInventoryProducts(category);
            });
        });
    }

    function setupFamilyPackages() {
        // Add family packages section
        const packagesSection = document.createElement('div');
        packagesSection.className = 'section';
        packagesSection.innerHTML = `
            <h2>👨‍👩‍👧‍👦 Paket Keluarga</h2>
            <div class="family-packages-grid">
                ${familyPackages.map((pkg, index) => `
                    <div class="family-package-card">
                        <div class="package-header">
                            <h4>${pkg.name}</h4>
                            <span class="package-suitable">👥 ${pkg.suitable}</span>
                        </div>
                        <div class="package-items">
                            <h5>Isi Paket:</h5>
                            <ul>
                                ${pkg.items.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="package-pricing">
                            <div class="package-price">${pkg.price}</div>
                            <div class="package-savings">${pkg.savings}</div>
                        </div>
                        <button class="order-package-btn" onclick="orderFamilyPackage(${index})">
                            🛺 Pesan Paket
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Add styles for family packages
        const packagesStyle = document.createElement('style');
        packagesStyle.textContent = `
            .family-packages-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                gap: 2rem;
                margin-top: 1.5rem;
            }
            .family-package-card {
                background: linear-gradient(135deg, rgba(255, 105, 180, 0.1) 0%, rgba(255, 20, 147, 0.1) 100%);
                border: 1px solid rgba(255, 105, 180, 0.3);
                border-radius: 20px;
                padding: 2rem;
                transition: all 0.3s;
            }
            .family-package-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 40px rgba(255, 105, 180, 0.2);
            }
            .package-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 1.5rem;
            }
            .package-header h4 {
                color: #fff;
                font-size: 1.3rem;
                margin: 0;
            }
            .package-suitable {
                background: rgba(255, 105, 180, 0.2);
                color: #ff69b4;
                padding: 0.3rem 0.8rem;
                border-radius: 15px;
                font-size: 0.9rem;
            }
            .package-items {
                margin-bottom: 1.5rem;
            }
            .package-items h5 {
                color: #fff;
                margin: 0 0 0.5rem 0;
            }
            .package-items ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .package-items li {
                color: #aaa;
                padding: 0.3rem 0;
                padding-left: 1rem;
                position: relative;
            }
            .package-items li::before {
                content: '✓';
                position: absolute;
                left: 0;
                color: #ff69b4;
            }
            .package-pricing {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5rem;
            }
            .package-price {
                color: #ff69b4;
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
                background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
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
                box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4);
            }
        `;
        document.head.appendChild(packagesStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(packagesSection);
        }
    }

    function setupCustomerService() {
        // Add customer service section
        const serviceSection = document.createElement('div');
        serviceSection.className = 'section';
        serviceSection.innerHTML = `
            <h2>💝 Pelayanan Pelanggan</h2>
            <div class="service-grid">
                <div class="service-card">
                    <div class="service-icon">📞</div>
                    <h4>Konsultasi Produk</h4>
                    <p>Butuh rekomendasi produk? Tanya Ibu langsung!</p>
                    <button class="service-btn" onclick="contactForConsultation()">
                        💬 Konsultasi Gratis
                    </button>
                </div>
                <div class="service-card">
                    <div class="service-icon">🚚</div>
                    <h4>Antar Langsung</h4>
                    <p>Pengiriman hari yang sama untuk area Karawang</p>
                    <button class="service-btn" onclick="requestDelivery()">
                        🏠 Minta Antar
                    </button>
                </div>
                <div class="service-card">
                    <div class="service-icon">🎁</div>
                    <h4>Program Member</h4>
                    <p>Dapatkan diskon khusus dan hadiah ulang tahun</p>
                    <button class="service-btn" onclick="joinMembership()">
                        ⭐ Daftar Member
                    </button>
                </div>
                <div class="service-card">
                    <div class="service-icon">⏰</div>
                    <h4>Buka Lebih Lama</h4>
                    <p>Layanan darurat hingga pukul 22:00</p>
                    <button class="service-btn" onclick="emergencyOrder()">
                        🆘 Pesan Darurat
                    </button>
                </div>
            </div>
        `;
        
        // Add styles for customer service
        const serviceStyle = document.createElement('style');
        serviceStyle.textContent = `
            .service-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
                margin-top: 1.5rem;
            }
            .service-card {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 15px;
                padding: 2rem;
                text-align: center;
                transition: all 0.3s;
            }
            .service-card:hover {
                background: rgba(255, 105, 180, 0.1);
                border-color: #ff69b4;
                transform: translateY(-5px);
            }
            .service-icon {
                font-size: 2.5rem;
                margin-bottom: 1rem;
            }
            .service-card h4 {
                color: #fff;
                font-size: 1.2rem;
                margin: 0 0 0.5rem 0;
            }
            .service-card p {
                color: #aaa;
                margin-bottom: 1.5rem;
                line-height: 1.6;
            }
            .service-btn {
                padding: 0.8rem 1.5rem;
                background: rgba(255, 105, 180, 0.2);
                border: 1px solid rgba(255, 105, 180, 0.3);
                border-radius: 20px;
                color: #ff69b4;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 0.9rem;
                font-weight: bold;
            }
            .service-btn:hover {
                background: rgba(255, 105, 180, 0.4);
                transform: scale(1.05);
            }
        `;
        document.head.appendChild(serviceStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(serviceSection);
        }
    }

    function setupLoyaltyProgram() {
        // Add loyalty program section
        const loyaltySection = document.createElement('div');
        loyaltySection.className = 'section';
        loyaltySection.innerHTML = `
            <h2>⭐ Program Loyalitas Keluarga</h2>
            <div class="loyalty-tiers">
                <div class="loyalty-tier">
                    <div class="tier-header">
                        <h3>🥉 Perunggu</h3>
                        <span>Baru</span>
                    </div>
                    <ul>
                        <li>Diskon 3% semua produk</li>
                        <li>Poin reward 1x</li>
                        <li>Gratis ongkir 3km</li>
                    </ul>
                </div>
                <div class="loyalty-tier featured">
                    <div class="tier-header">
                        <h3>🥈 Perak</h3>
                        <span>Bulan ke-2</span>
                    </div>
                    <ul>
                        <li>Diskon 5% semua produk</li>
                        <li>Poin reward 2x</li>
                        <li>Gratis ongkir 5km</li>
                        <li>Hadiah ulang tahun</li>
                    </ul>
                </div>
                <div class="loyalty-tier">
                    <div class="tier-header">
                        <h3>🥇 Emas</h3>
                        <span>6 bulan+</span>
                    </div>
                    <ul>
                        <li>Diskon 10% semua produk</li>
                        <li>Poin reward 3x</li>
                        <li>Gratis ongkir seluruh Karawang</li>
                        <li>Prioritas layanan</li>
                        <li>Produk eksklusif</li>
                    </ul>
                </div>
            </div>
        `;
        
        // Add styles for loyalty program
        const loyaltyStyle = document.createElement('style');
        loyaltyStyle.textContent = `
            .loyalty-tiers {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 2rem;
                margin-top: 2rem;
            }
            .loyalty-tier {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                padding: 2rem;
                text-align: center;
                transition: all 0.3s;
                position: relative;
            }
            .loyalty-tier.featured {
                border-color: #ff69b4;
                background: linear-gradient(135deg, rgba(255, 105, 180, 0.1) 0%, rgba(255, 20, 147, 0.1) 100%);
                transform: scale(1.05);
            }
            .loyalty-tier:hover {
                transform: translateY(-5px);
            }
            .loyalty-tier.featured:hover {
                transform: scale(1.05) translateY(-5px);
            }
            .tier-header {
                margin-bottom: 1.5rem;
            }
            .tier-header h3 {
                color: #fff;
                font-size: 1.4rem;
                margin: 0 0 0.5rem 0;
            }
            .tier-header span {
                color: #ff69b4;
                font-weight: bold;
            }
            .loyalty-tier ul {
                list-style: none;
                padding: 0;
                margin: 0;
                text-align: left;
            }
            .loyalty-tier li {
                color: #ccc;
                padding: 0.5rem 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                position: relative;
                padding-left: 1.5rem;
            }
            .loyalty-tier li::before {
                content: '✓';
                position: absolute;
                left: 0;
                color: #ff69b4;
            }
            .loyalty-tier li:last-child {
                border-bottom: none;
            }
        `;
        document.head.appendChild(loyaltyStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(loyaltySection);
        }
    }

    function setupOrderSystem() {
        // Add quick order section
        const orderSection = document.createElement('div');
        orderSection.className = 'section';
        orderSection.innerHTML = `
            <h2>🚀 Pesan Cepat</h2>
            <div class="quick-order-form">
                <div class="form-row">
                    <label>Nama Anda:</label>
                    <input type="text" id="customerName" placeholder="Masukkan nama lengkap">
                </div>
                <div class="form-row">
                    <label>Nomor WhatsApp:</label>
                    <input type="tel" id="customerPhone" placeholder="08xx-xxxx-xxxx">
                </div>
                <div class="form-row">
                    <label>Alamat Pengiriman:</label>
                    <textarea id="customerAddress" placeholder="Masukkan alamat lengkap" rows="3"></textarea>
                </div>
                <div class="form-row">
                    <label>Pesan Khusus:</label>
                    <textarea id="specialRequest" placeholder="Ada permintaan khusus?" rows="2"></textarea>
                </div>
                <div class="form-actions">
                    <button class="submit-order-btn" onclick="submitQuickOrder()">
                        📋 Kirim Pesanan
                    </button>
                    <button class="clear-form-btn" onclick="clearOrderForm()">
                        🗑️ Hapus Form
                    </button>
                </div>
            </div>
        `;
        
        // Add styles for order system
        const orderStyle = document.createElement('style');
        orderStyle.textContent = `
            .quick-order-form {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                padding: 2rem;
                margin-top: 1.5rem;
            }
            .form-row {
                margin-bottom: 1.5rem;
            }
            .form-row label {
                display: block;
                color: #fff;
                font-weight: 600;
                margin-bottom: 0.5rem;
            }
            .form-row input,
            .form-row textarea {
                width: 100%;
                padding: 1rem;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 10px;
                color: white;
                font-size: 1rem;
            }
            .form-row input::placeholder,
            .form-row textarea::placeholder {
                color: #aaa;
            }
            .form-actions {
                display: flex;
                gap: 1rem;
            }
            .submit-order-btn,
            .clear-form-btn {
                flex: 1;
                padding: 1rem;
                border: none;
                border-radius: 10px;
                color: white;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 1rem;
                font-weight: bold;
            }
            .submit-order-btn {
                background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
            }
            .submit-order-btn:hover {
                transform: scale(1.02);
                box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4);
            }
            .clear-form-btn {
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            .clear-form-btn:hover {
                background: rgba(255, 255, 255, 0.2);
            }
        `;
        document.head.appendChild(orderStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(orderSection);
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
    window.addInventoryItem = function(category, index) {
        const product = productInventory[category][index];
        const message = `Halo Ibu, saya ingin memesan ${product.name} (${product.price})`;
        window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    };

    window.showItemInfo = function(category, index) {
        const product = productInventory[category][index];
        const modal = document.createElement('div');
        modal.className = 'item-info-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>📦 Informasi Produk</h3>
                    <button class="close-modal-btn" onclick="closeItemInfo()">✕</button>
                </div>
                <div class="modal-body">
                    <h4>${product.name}</h4>
                    <div class="product-info-grid">
                        <div class="info-item">
                            <span class="info-label">Harga:</span>
                            <span class="info-value">${product.price}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Stok:</span>
                            <span class="info-value">${product.stock} ${product.unit}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Satuan:</span>
                            <span class="info-value">Per ${product.unit}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Kategori:</span>
                            <span class="info-value">${formatCategoryName(category)}</span>
                        </div>
                    </div>
                    <div class="modal-actions">
                        <button class="order-from-modal-btn" onclick="addInventoryItem('${category}', ${index}); closeItemInfo();">
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
            max-width: 500px;
            width: 90%;
        `;
        
        document.body.appendChild(modal);
    };

    window.closeItemInfo = function() {
        const modal = document.querySelector('.item-info-modal');
        if (modal) {
            document.body.removeChild(modal);
        }
    };

    window.orderFamilyPackage = function(index) {
        const pkg = familyPackages[index];
        const items = pkg.items.join(', ');
        const message = `Halo Ibu, saya ingin memesan ${pkg.name} dengan isi: ${items}. Harga: ${pkg.price}`;
        window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    };

    window.contactForConsultation = function() {
        const message = `Halo Ibu, saya butuh konsultasi produk di Toko Restu Ibu`;
        window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    };

    window.requestDelivery = function() {
        const message = `Halo Ibu, saya ingin menggunakan layanan antar langsung Toko Restu Ibu`;
        window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    };

    window.joinMembership = function() {
        const message = `Halo Ibu, saya ingin mendaftar sebagai member Toko Restu Ibu`;
        window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    };

    window.emergencyOrder = function() {
        const message = `🆘 Halo Ibu, ini pesanan darurat. Saya butuh bantuan segera!`;
        window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    };

    window.submitQuickOrder = function() {
        const name = document.getElementById('customerName').value;
        const phone = document.getElementById('customerPhone').value;
        const address = document.getElementById('customerAddress').value;
        const request = document.getElementById('specialRequest').value;
        
        if (!name || !phone || !address) {
            showNotification('Mohon lengkapi semua field yang wajib diisi!', 'error');
            return;
        }
        
        const message = `Halo Ibu, saya ingin melakukan pemesanan cepat:

Nama: ${name}
WhatsApp: ${phone}
Alamat: ${address}
${request ? `Pesan khusus: ${request}` : ''}

Mohon info ketersediaan dan total harga. Terima kasih!`;
        
        window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
        showNotification('Pesanan Anda telah dikirim!', 'success');
    };

    window.clearOrderForm = function() {
        document.getElementById('customerName').value = '';
        document.getElementById('customerPhone').value = '';
        document.getElementById('customerAddress').value = '';
        document.getElementById('specialRequest').value = '';
        showNotification('Form telah dibersihkan', 'info');
    };

    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        const colors = {
            'success': 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)',
            'error': 'linear-gradient(135deg, #f44336 0%, #da190b 100%)',
            'info': 'linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)'
        };
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${colors[type]};
            color: white;
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
        }, 3000);
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
            color: #ff69b4;
            font-size: 1.4rem;
            margin: 0 0 1.5rem 0;
        }
        .product-info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        .info-item {
            display: flex;
            justify-content: space-between;
            padding: 0.8rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
        }
        .info-label {
            color: #aaa;
            font-weight: 500;
        }
        .info-value {
            color: #fff;
            font-weight: bold;
        }
        .modal-actions {
            margin-top: 2rem;
        }
        .order-from-modal-btn {
            width: 100%;
            padding: 1rem;
            background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
            border: none;
            border-radius: 10px;
            color: white;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s;
        }
        .order-from-modal-btn:hover {
            transform: scale(1.02);
            box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4);
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
