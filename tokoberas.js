// Tokoberas UMKM JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // UMKM Data
    const umkmData = {
        name: "Toko Beras",
        icon: "🌾",
        category: "Sembako",
        description: "Penyedia berbagai jenis beras kualitas premium dengan harga terjangkau",
        hours: "07.00 - 20.00",
        price: "Rp 12.000 - 20.000/kg",
        address: "Jl. Padi No. 34, Karawang Barat",
        phone: "+628123456789",
        whatsapp: "628123456789",
        instagram: "@tokoberas_karawang"
    };

    // Rice products
    const riceProducts = [
        { name: 'Beras IR 64', price: 'Rp 12.000/kg', description: 'Beras kualitas standar, pulen dan wangi', type: 'premium' },
        { name: 'Beras Setra Ramos', price: 'Rp 13.500/kg', description: 'Beras super pulen dengan kualitas terbaik', type: 'premium' },
        { name: 'Beras Pandan Wangi', price: 'Rp 15.000/kg', description: 'Beras aromatik dengan wangi pandan alami', type: 'premium' },
        { name: 'Beras Merah', price: 'Rp 18.000/kg', description: 'Beras merah organik, kaya nutrisi', type: 'organik' },
        { name: 'Beras Hitam', price: 'Rp 20.000/kg', description: 'Beras hitam kaya antioksidan', type: 'organik' },
        { name: 'Beras Basmati', price: 'Rp 25.000/kg', description: 'Beras impor kualitas internasional', type: 'impor' }
    ];

    // Package deals
    const packageDeals = [
        { name: 'Paket Hemat 5kg', price: 'Rp 60.000', description: 'Beras IR 64 kemasan 5kg', discount: 'Gratis ongkir' },
        { name: 'Paket Keluarga 10kg', price: 'Rp 120.000', description: 'Beras Setra Ramos kemasan 10kg', discount: 'Diskon Rp 5.000' },
        { name: 'Paket Premium 25kg', price: 'Rp 300.000', description: 'Beras Pandan Wangi kemasan 25kg', discount: 'Gratis 1kg' }
    ];

    // Initialize page
    initializePage();

    function initializePage() {
        updatePageContent();
        setupEventListeners();
        addAnimations();
        setupRiceProducts();
        setupPackageDeals();
        setupDeliveryInfo();
        setupOrderCalculator();
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
                window.open(`https://wa.me/${umkmData.whatsapp}?text=Halo, saya ingin memesan beras di Toko Beras`, '_blank');
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

    function setupRiceProducts() {
        // Add rice products section
        const productsSection = document.createElement('div');
        productsSection.className = 'section';
        productsSection.innerHTML = `
            <h2>🌾 Jenis Beras</h2>
            <div class="product-filters">
                <button class="filter-btn active" data-filter="all">Semua</button>
                <button class="filter-btn" data-filter="premium">Premium</button>
                <button class="filter-btn" data-filter="organik">Organik</button>
                <button class="filter-btn" data-filter="impor">Impor</button>
            </div>
            <div class="rice-grid" id="riceGrid">
                ${riceProducts.map((product, index) => `
                    <div class="rice-card" data-type="${product.type}" data-index="${index}">
                        <div class="rice-header">
                            <h4>${product.name}</h4>
                            <span class="rice-price">${product.price}</span>
                        </div>
                        <p class="rice-description">${product.description}</p>
                        <div class="rice-quality">
                            <span class="quality-badge ${product.type}">${product.type.toUpperCase()}</span>
                        </div>
                        <div class="rice-actions">
                            <button class="order-rice-btn" onclick="orderRice('${product.name}')">
                                🛒 Pesan
                            </button>
                            <button class="compare-btn" onclick="addToCompare(${index})">
                                ⚖️ Bandingkan
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Add styles for rice products
        const productsStyle = document.createElement('style');
        productsStyle.textContent = `
            .product-filters {
                display: flex;
                gap: 0.5rem;
                margin: 1.5rem 0;
                flex-wrap: wrap;
            }
            .filter-btn {
                padding: 0.8rem 1.5rem;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                color: #aaa;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 0.9rem;
            }
            .filter-btn.active,
            .filter-btn:hover {
                background: rgba(102, 126, 234, 0.2);
                border-color: #667eea;
                color: white;
            }
            .rice-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1.5rem;
            }
            .rice-card {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 15px;
                padding: 1.5rem;
                transition: all 0.3s;
            }
            .rice-card:hover {
                background: rgba(102, 126, 234, 0.1);
                border-color: #667eea;
                transform: translateY(-5px);
            }
            .rice-card.hidden {
                display: none;
            }
            .rice-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.5rem;
            }
            .rice-header h4 {
                color: #fff;
                font-size: 1.1rem;
                margin: 0;
            }
            .rice-price {
                color: #667eea;
                font-weight: bold;
                font-size: 1rem;
            }
            .rice-description {
                color: #aaa;
                margin-bottom: 1rem;
                font-size: 0.9rem;
            }
            .rice-quality {
                margin-bottom: 1rem;
            }
            .quality-badge {
                display: inline-block;
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
            .quality-badge.organik {
                background: rgba(76, 175, 80, 0.2);
                color: #4caf50;
            }
            .quality-badge.impor {
                background: rgba(33, 150, 243, 0.2);
                color: #2196f3;
            }
            .rice-actions {
                display: flex;
                gap: 0.5rem;
            }
            .order-rice-btn,
            .compare-btn {
                flex: 1;
                padding: 0.8rem;
                border: none;
                border-radius: 8px;
                color: white;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 0.9rem;
            }
            .order-rice-btn {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
            .order-rice-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
            .compare-btn {
                background: rgba(255, 255, 255, 0.1);
            }
            .compare-btn:hover {
                background: rgba(255, 255, 255, 0.2);
            }
            .compare-btn.selected {
                background: rgba(76, 175, 80, 0.3);
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
        
        // Setup product filtering
        setupProductFilter();
    }

    function setupProductFilter() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const riceCards = document.querySelectorAll('.rice-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active filter
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter products
                const filter = this.dataset.filter;
                riceCards.forEach(card => {
                    if (filter === 'all' || card.dataset.type === filter) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    function setupPackageDeals() {
        // Add package deals section
        const packagesSection = document.createElement('div');
        packagesSection.className = 'section';
        packagesSection.innerHTML = `
            <h2>📦 Paket Hemat</h2>
            <div class="package-grid">
                ${packageDeals.map((pkg, index) => `
                    <div class="package-card">
                        <div class="package-header">
                            <h4>${pkg.name}</h4>
                            <span class="package-discount">${pkg.discount}</span>
                        </div>
                        <p class="package-description">${pkg.description}</p>
                        <div class="package-price">
                            <span class="price-label">Harga:</span>
                            <span class="price-value">${pkg.price}</span>
                        </div>
                        <button class="order-package-btn" onclick="orderPackage('${pkg.name}')">
                            🛒 Pesan Paket
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Add styles for package deals
        const packagesStyle = document.createElement('style');
        packagesStyle.textContent = `
            .package-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 1.5rem;
                margin-top: 1.5rem;
            }
            .package-card {
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
                border: 1px solid rgba(102, 126, 234, 0.3);
                border-radius: 15px;
                padding: 1.5rem;
                transition: all 0.3s;
                position: relative;
            }
            .package-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
            }
            .package-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.5rem;
            }
            .package-header h4 {
                color: #fff;
                font-size: 1.1rem;
                margin: 0;
            }
            .package-discount {
                background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
                color: white;
                padding: 0.3rem 0.8rem;
                border-radius: 15px;
                font-size: 0.8rem;
                font-weight: bold;
            }
            .package-description {
                color: #aaa;
                margin-bottom: 1rem;
                font-size: 0.9rem;
            }
            .package-price {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
            }
            .price-label {
                color: #ccc;
                font-size: 0.9rem;
            }
            .price-value {
                color: #667eea;
                font-weight: bold;
                font-size: 1.1rem;
            }
            .order-package-btn {
                width: 100%;
                padding: 0.8rem;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border: none;
                border-radius: 8px;
                color: white;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 0.9rem;
            }
            .order-package-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
        `;
        document.head.appendChild(packagesStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(packagesSection);
        }
    }

    function setupDeliveryInfo() {
        // Add delivery information section
        const deliverySection = document.createElement('div');
        deliverySection.className = 'section';
        deliverySection.innerHTML = `
            <h2>🚚 Informasi Pengiriman</h2>
            <div class="delivery-info-grid">
                <div class="delivery-info-card">
                    <div class="delivery-icon">🏠</div>
                    <h4>Ambil di Toko</h4>
                    <p>Gratis - Siap dalam 30 menit</p>
                    <ul>
                        <li>Tidak ada minimum pembelian</li>
                        <li>Bisa cek kualitas beras langsung</li>
                    </ul>
                </div>
                <div class="delivery-info-card">
                    <div class="delivery-icon">🚐</div>
                    <h4>Antar Lokal</h4>
                    <p>Rp 10.000 - Radius 5 km</p>
                    <ul>
                        <li>Minimal pembelian 10kg</li>
                        <li>Sampai hari yang sama</li>
                    </ul>
                </div>
                <div class="delivery-info-card">
                    <div class="delivery-icon">📦</div>
                    <h4>Pesan Besar</h4>
                    <p>Gratis ongkir - Minimal 50kg</p>
                    <ul>
                        <li>Gratis kemasan premium</li>
                        <li>Prioritas pengiriman</li>
                    </ul>
                </div>
            </div>
        `;
        
        // Add styles for delivery info
        const deliveryStyle = document.createElement('style');
        deliveryStyle.textContent = `
            .delivery-info-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
                margin-top: 1.5rem;
            }
            .delivery-info-card {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 15px;
                padding: 1.5rem;
                text-align: center;
                transition: all 0.3s;
            }
            .delivery-info-card:hover {
                background: rgba(102, 126, 234, 0.1);
                border-color: #667eea;
                transform: translateY(-5px);
            }
            .delivery-icon {
                font-size: 2.5rem;
                margin-bottom: 1rem;
            }
            .delivery-info-card h4 {
                color: #fff;
                margin: 0 0 0.5rem 0;
                font-size: 1.1rem;
            }
            .delivery-info-card p {
                color: #667eea;
                font-weight: bold;
                margin: 0 0 1rem 0;
            }
            .delivery-info-card ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .delivery-info-card li {
                color: #aaa;
                font-size: 0.9rem;
                padding: 0.3rem 0;
            }
        `;
        document.head.appendChild(deliveryStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(deliverySection);
        }
    }

    function setupOrderCalculator() {
        // Add order calculator
        const calculatorSection = document.createElement('div');
        calculatorSection.className = 'section';
        calculatorSection.innerHTML = `
            <h2>🧮 Kalkulator Pesanan</h2>
            <div class="calculator">
                <div class="calculator-row">
                    <label>Pilih Beras:</label>
                    <select id="riceSelect">
                        ${riceProducts.map(product => 
                            `<option value="${product.name}">${product.name} - ${product.price}</option>`
                        ).join('')}
                    </select>
                </div>
                <div class="calculator-row">
                    <label>Berat (kg):</label>
                    <input type="number" id="weightInput" min="1" max="100" value="5">
                </div>
                <div class="calculator-row">
                    <label>Total Harga:</label>
                    <span id="totalPrice" class="total-price">Rp 0</span>
                </div>
                <button class="calculate-order-btn" onclick="calculateOrder()">
                    Hitung Total
                </button>
                <button class="order-calculated-btn" onclick="orderCalculated()" disabled>
                    🛒 Pesan Sekarang
                </button>
            </div>
        `;
        
        // Add styles for calculator
        const calculatorStyle = document.createElement('style');
        calculatorStyle.textContent = `
            .calculator {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 15px;
                padding: 2rem;
                margin-top: 1.5rem;
            }
            .calculator-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
            }
            .calculator-row label {
                color: #fff;
                font-weight: 500;
                min-width: 150px;
            }
            .calculator-row select,
            .calculator-row input {
                flex: 1;
                max-width: 200px;
                padding: 0.8rem;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 8px;
                color: white;
                font-size: 1rem;
            }
            .total-price {
                color: #667eea;
                font-weight: bold;
                font-size: 1.2rem;
            }
            .calculate-order-btn,
            .order-calculated-btn {
                padding: 1rem 2rem;
                border: none;
                border-radius: 8px;
                color: white;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 1rem;
                margin-right: 1rem;
            }
            .calculate-order-btn {
                background: rgba(102, 126, 234, 0.2);
                border: 1px solid rgba(102, 126, 234, 0.3);
            }
            .calculate-order-btn:hover {
                background: rgba(102, 126, 234, 0.4);
            }
            .order-calculated-btn {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
            .order-calculated-btn:hover:not(:disabled) {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
            .order-calculated-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        `;
        document.head.appendChild(calculatorStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(calculatorSection);
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
    window.orderRice = function(riceName) {
        const message = `Halo, saya ingin memesan ${riceName}`;
        window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    };

    window.orderPackage = function(packageName) {
        const message = `Halo, saya ingin memesan ${packageName}`;
        window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    };

    let compareList = [];
    window.addToCompare = function(index) {
        const btn = document.querySelectorAll('.compare-btn')[index];
        const product = riceProducts[index];
        
        if (btn.classList.contains('selected')) {
            btn.classList.remove('selected');
            compareList = compareList.filter(p => p.name !== product.name);
            showNotification(`${product.name} dihapus dari perbandingan`);
        } else {
            if (compareList.length < 3) {
                btn.classList.add('selected');
                compareList.push(product);
                showNotification(`${product.name} ditambahkan ke perbandingan`);
                
                if (compareList.length === 3) {
                    showCompareModal();
                }
            } else {
                showNotification('Maksimal 3 produk untuk perbandingan');
            }
        }
    };

    function showCompareModal() {
        const modal = document.createElement('div');
        modal.className = 'compare-modal';
        modal.innerHTML = `
            <div class="compare-content">
                <h3>📊 Perbandingan Produk</h3>
                <div class="compare-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Harga</th>
                                <th>Kualitas</th>
                                <th>Deskripsi</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${compareList.map(product => `
                                <tr>
                                    <td>${product.name}</td>
                                    <td>${product.price}</td>
                                    <td>${product.type.toUpperCase()}</td>
                                    <td>${product.description}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                <button class="close-compare-btn" onclick="closeCompareModal()">Tutup</button>
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
        
        const compareContent = modal.querySelector('.compare-content');
        compareContent.style.cssText = `
            background: rgba(10, 10, 10, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 2rem;
            max-width: 800px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
        `;
        
        document.body.appendChild(modal);
    }

    window.closeCompareModal = function() {
        const modal = document.querySelector('.compare-modal');
        if (modal) {
            document.body.removeChild(modal);
        }
        // Reset compare buttons
        document.querySelectorAll('.compare-btn.selected').forEach(btn => {
            btn.classList.remove('selected');
        });
        compareList = [];
    };

    let calculatedOrder = null;
    window.calculateOrder = function() {
        const riceSelect = document.getElementById('riceSelect');
        const weightInput = document.getElementById('weightInput');
        const totalPrice = document.getElementById('totalPrice');
        const orderBtn = document.querySelector('.order-calculated-btn');
        
        const selectedRice = riceProducts.find(p => p.name === riceSelect.value);
        const weight = parseInt(weightInput.value);
        const pricePerKg = parseInt(selectedRice.price.replace(/\D/g, ''));
        const total = pricePerKg * weight;
        
        calculatedOrder = {
            product: selectedRice.name,
            weight: weight,
            total: total
        };
        
        totalPrice.textContent = `Rp ${total.toLocaleString('id-ID')}`;
        orderBtn.disabled = false;
        
        showNotification(`Total pesanan: ${weight}kg ${selectedRice.name} = Rp ${total.toLocaleString('id-ID')}`);
    };

    window.orderCalculated = function() {
        if (calculatedOrder) {
            const message = `Halo, saya ingin memesan ${calculatedOrder.weight}kg ${calculatedOrder.product} dengan total harga Rp ${calculatedOrder.total.toLocaleString('id-ID')}`;
            window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
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

    // Back button functionality
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.history.back();
        });
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
        .compare-table table {
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
        }
        .compare-table th,
        .compare-table td {
            padding: 0.8rem;
            text-align: left;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .compare-table th {
            color: #fff;
            background: rgba(102, 126, 234, 0.2);
        }
        .compare-table td {
            color: #ccc;
        }
        .close-compare-btn {
            padding: 0.8rem 2rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            color: white;
            cursor: pointer;
            transition: all 0.3s;
        }
        .close-compare-btn:hover {
            background: rgba(255, 255, 255, 0.2);
        }
    `;
    document.head.appendChild(notificationStyle);
});
