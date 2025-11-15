// Tokolidya UMKM JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // UMKM Data
    const umkmData = {
        name: "Toko Lidiya",
        icon: "🏪",
        category: "Toko Kelontong",
        description: "Toko kelontong modern dengan kebutuhan sehari-hari lengkap dan harga bersaing",
        hours: "07.00 - 22.00",
        price: "Harga bersahabat",
        address: "Jl. Lidiya No. 12, Karawang Barat",
        phone: "+628123456789",
        whatsapp: "628123456789",
        instagram: "@tokolidya"
    };

    // Product categories
    const productCategories = {
        'sembako': [
            { name: 'Beras IR 64', price: 'Rp 12.000/kg', stock: 'Tersedia' },
            { name: 'Minyak Goreng', price: 'Rp 18.000/liter', stock: 'Tersedia' },
            { name: 'Gula Pasir', price: 'Rp 13.000/kg', stock: 'Tersedia' },
            { name: 'Tepung Terigu', price: 'Rp 10.000/kg', stock: 'Terbatas' }
        ],
        'kebutuhan_dapur': [
            { name: 'Saus Tomat', price: 'Rp 8.000', stock: 'Tersedia' },
            { name: 'Kecap Manis', price: 'Rp 9.000', stock: 'Tersedia' },
            { name: 'Sambal', price: 'Rp 7.000', stock: 'Tersedia' },
            { name: 'Garam', price: 'Rp 3.000', stock: 'Tersedia' }
        ],
        'minuman': [
            { name: 'Teh Sariwangi', price: 'Rp 15.000', stock: 'Tersedia' },
            { name: 'Kopi Kapal Api', price: 'Rp 12.000', stock: 'Tersedia' },
            { name: 'Susu Indomilk', price: 'Rp 10.000', stock: 'Tersedia' },
            { name: 'Air Mineral', price: 'Rp 5.000', stock: 'Tersedia' }
        ],
        'snack': [
            { name: 'Kerupuk', price: 'Rp 8.000', stock: 'Tersedia' },
            { name: 'Biskuit', price: 'Rp 10.000', stock: 'Tersedia' },
            { name: 'Permen', price: 'Rp 5.000', stock: 'Tersedia' },
            { name: 'Wafer', price: 'Rp 12.000', stock: 'Terbatas' }
        ],
        'kebersihan': [
            { name: 'Sabun Mandi', price: 'Rp 6.000', stock: 'Tersedia' },
            { name: 'Sampo', price: 'Rp 15.000', stock: 'Tersedia' },
            { name: 'Pasta Gigi', price: 'Rp 8.000', stock: 'Tersedia' },
            { name: 'Deterjen', price: 'Rp 18.000', stock: 'Tersedia' }
        ]
    };

    // Special offers
    const specialOffers = [
        { 
            title: 'Paket Hemat Sembako', 
            description: 'Beras 5kg + Minyak 1L + Gula 1kg', 
            price: 'Rp 85.000', 
            discount: 'Hemat Rp 10.000',
            valid: 'Berlaku sampai 30 Nov'
        },
        { 
            title: 'Bundle Kebersihan', 
            description: 'Sabun + Sampo + Pasta Gigi', 
            price: 'Rp 25.000', 
            discount: 'Hemat Rp 5.000',
            valid: 'Berlaku selama stok ada'
        },
        { 
            title: 'Paket Ngemil', 
            description: 'Snack pilihan + minuman', 
            price: 'Rp 20.000', 
            discount: 'Gratis 1 item',
            valid: 'Weekend special'
        }
    ];

    // Initialize page
    initializePage();

    function initializePage() {
        updatePageContent();
        setupEventListeners();
        addAnimations();
        setupProductCategories();
        setupSpecialOffers();
        setupShoppingCart();
        setupDeliveryService();
        setupSearchFeature();
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
                window.open(`https://wa.me/${umkmData.whatsapp}?text=Halo, saya ingin berbelanja di Toko Lidiya`, '_blank');
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

    function setupProductCategories() {
        // Add product categories section
        const categoriesSection = document.createElement('div');
        categoriesSection.className = 'section';
        categoriesSection.innerHTML = `
            <h2>🛍️ Kategori Produk</h2>
            <div class="category-tabs">
                ${Object.keys(productCategories).map(category => `
                    <button class="category-tab-btn active" data-category="${category}">
                        ${formatCategoryName(category)}
                    </button>
                `).join('')}
            </div>
            <div class="products-container" id="productsContainer">
                ${renderCategoryProducts('sembako')}
            </div>
        `;
        
        // Add styles for product categories
        const categoriesStyle = document.createElement('style');
        categoriesStyle.textContent = `
            .category-tabs {
                display: flex;
                gap: 0.5rem;
                margin: 1.5rem 0;
                flex-wrap: wrap;
                justify-content: center;
            }
            .category-tab-btn {
                padding: 0.8rem 1.5rem;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                color: #aaa;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 0.9rem;
            }
            .category-tab-btn.active,
            .category-tab-btn:hover {
                background: rgba(102, 126, 234, 0.2);
                border-color: #667eea;
                color: white;
            }
            .products-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
            }
            .product-card {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 15px;
                padding: 1.5rem;
                transition: all 0.3s;
            }
            .product-card:hover {
                background: rgba(102, 126, 234, 0.1);
                border-color: #667eea;
                transform: translateY(-5px);
            }
            .product-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 1rem;
            }
            .product-name {
                color: #fff;
                font-size: 1.1rem;
                font-weight: 600;
                margin: 0;
            }
            .product-stock {
                padding: 0.3rem 0.8rem;
                border-radius: 15px;
                font-size: 0.8rem;
                font-weight: bold;
            }
            .product-stock.tersedia {
                background: rgba(76, 175, 80, 0.2);
                color: #4caf50;
            }
            .product-stock.terbatas {
                background: rgba(255, 152, 0, 0.2);
                color: #ff9800;
            }
            .product-price {
                color: #667eea;
                font-weight: bold;
                font-size: 1.2rem;
                margin-bottom: 1rem;
            }
            .product-actions {
                display: flex;
                gap: 0.5rem;
            }
            .add-to-cart-btn,
            .quick-view-btn {
                flex: 1;
                padding: 0.8rem;
                border: none;
                border-radius: 8px;
                color: white;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 0.9rem;
            }
            .add-to-cart-btn {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
            .add-to-cart-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
            .quick-view-btn {
                background: rgba(255, 255, 255, 0.1);
            }
            .quick-view-btn:hover {
                background: rgba(255, 255, 255, 0.2);
            }
        `;
        document.head.appendChild(categoriesStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            const firstSection = container.querySelector('.section');
            if (firstSection) {
                firstSection.after(categoriesSection);
            } else {
                container.appendChild(categoriesSection);
            }
        }
        
        // Setup category switching
        setupCategorySwitching();
    }

    function formatCategoryName(category) {
        const names = {
            'sembako': 'Sembako',
            'kebutuhan_dapur': 'Kebutuhan Dapur',
            'minuman': 'Minuman',
            'snack': 'Snack',
            'kebersihan': 'Kebersihan'
        };
        return names[category] || category;
    }

    function renderCategoryProducts(category) {
        const products = productCategories[category];
        return `
            <div class="products-grid">
                ${products.map((product, index) => `
                    <div class="product-card" data-category="${category}" data-index="${index}">
                        <div class="product-header">
                            <h4 class="product-name">${product.name}</h4>
                            <span class="product-stock ${product.stock === 'Tersedia' ? 'tersedia' : 'terbatas'}">
                                ${product.stock}
                            </span>
                        </div>
                        <div class="product-price">${product.price}</div>
                        <div class="product-actions">
                            <button class="add-to-cart-btn" onclick="addToCart('${category}', ${index})">
                                🛒 Tambah
                            </button>
                            <button class="quick-view-btn" onclick="quickView('${category}', ${index})">
                                👁️ Lihat
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function setupCategorySwitching() {
        const categoryButtons = document.querySelectorAll('.category-tab-btn');
        const productsContainer = document.getElementById('productsContainer');
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Update products display
                const category = this.dataset.category;
                productsContainer.innerHTML = renderCategoryProducts(category);
            });
        });
    }

    function setupSpecialOffers() {
        // Add special offers section
        const offersSection = document.createElement('div');
        offersSection.className = 'section';
        offersSection.innerHTML = `
            <h2>🎉 Penawaran Spesial</h2>
            <div class="offers-grid">
                ${specialOffers.map((offer, index) => `
                    <div class="offer-card">
                        <div class="offer-header">
                            <h4>${offer.title}</h4>
                            <span class="offer-discount">${offer.discount}</span>
                        </div>
                        <p class="offer-description">${offer.description}</p>
                        <div class="offer-price-row">
                            <span class="offer-price">${offer.price}</span>
                            <span class="offer-valid">${offer.valid}</span>
                        </div>
                        <button class="order-offer-btn" onclick="orderSpecialOffer(${index})">
                            🛺 Pesan Penawaran
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Add styles for special offers
        const offersStyle = document.createElement('style');
        offersStyle.textContent = `
            .offers-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                margin-top: 1.5rem;
            }
            .offer-card {
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
                border: 1px solid rgba(102, 126, 234, 0.3);
                border-radius: 20px;
                padding: 2rem;
                transition: all 0.3s;
                position: relative;
                overflow: hidden;
            }
            .offer-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2);
            }
            .offer-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 1rem;
            }
            .offer-header h4 {
                color: #fff;
                font-size: 1.2rem;
                margin: 0;
            }
            .offer-discount {
                background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
                color: white;
                padding: 0.3rem 0.8rem;
                border-radius: 15px;
                font-size: 0.8rem;
                font-weight: bold;
            }
            .offer-description {
                color: #aaa;
                margin-bottom: 1.5rem;
                line-height: 1.6;
            }
            .offer-price-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5rem;
            }
            .offer-price {
                color: #667eea;
                font-weight: bold;
                font-size: 1.4rem;
            }
            .offer-valid {
                color: #ff9800;
                font-size: 0.9rem;
            }
            .order-offer-btn {
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
            .order-offer-btn:hover {
                transform: scale(1.02);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
        `;
        document.head.appendChild(offersStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(offersSection);
        }
    }

    function setupShoppingCart() {
        // Add shopping cart sidebar
        const cartSidebar = document.createElement('div');
        cartSidebar.className = 'cart-sidebar';
        cartSidebar.innerHTML = `
            <div class="cart-header">
                <h3>🛒 Keranjang Belanja</h3>
                <button class="toggle-cart-btn" onclick="toggleCart()">✕</button>
            </div>
            <div class="cart-items" id="cartItems">
                <p class="empty-cart">Keranjang kosong</p>
            </div>
            <div class="cart-summary">
                <div class="cart-total">
                    <strong>Total: Rp <span id="cartTotal">0</span></strong>
                </div>
                <button class="checkout-btn" onclick="checkout()" disabled>
                    🛺 Checkout
                </button>
            </div>
        `;
        
        // Add styles for shopping cart
        const cartStyle = document.createElement('style');
        cartStyle.textContent = `
            .cart-sidebar {
                position: fixed;
                top: 0;
                right: -400px;
                width: 400px;
                height: 100vh;
                background: rgba(10, 10, 10, 0.95);
                border-left: 1px solid rgba(255, 255, 255, 0.1);
                transition: right 0.3s ease;
                z-index: 1000;
                display: flex;
                flex-direction: column;
            }
            .cart-sidebar.open {
                right: 0;
            }
            .cart-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            .cart-header h3 {
                color: #fff;
                margin: 0;
            }
            .toggle-cart-btn {
                background: none;
                border: none;
                color: #aaa;
                font-size: 1.5rem;
                cursor: pointer;
                transition: color 0.3s;
            }
            .toggle-cart-btn:hover {
                color: #fff;
            }
            .cart-items {
                flex: 1;
                padding: 1.5rem;
                overflow-y: auto;
            }
            .empty-cart {
                color: #666;
                text-align: center;
                font-style: italic;
            }
            .cart-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 10px;
                margin-bottom: 1rem;
            }
            .cart-item-info {
                flex: 1;
            }
            .cart-item-name {
                color: #fff;
                font-weight: 600;
                margin-bottom: 0.3rem;
            }
            .cart-item-price {
                color: #667eea;
                font-size: 0.9rem;
            }
            .cart-item-quantity {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            .quantity-btn {
                width: 25px;
                height: 25px;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 5px;
                color: white;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .quantity-btn:hover {
                background: rgba(255, 255, 255, 0.2);
            }
            .cart-summary {
                padding: 1.5rem;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }
            .cart-total {
                color: #fff;
                font-size: 1.2rem;
                margin-bottom: 1rem;
            }
            .checkout-btn {
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
            .checkout-btn:hover:not(:disabled) {
                transform: scale(1.02);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
            .checkout-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            .cart-toggle-btn {
                position: fixed;
                top: 50%;
                right: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border: none;
                border-radius: 50%;
                width: 60px;
                height: 60px;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                transition: all 0.3s;
                z-index: 999;
            }
            .cart-toggle-btn:hover {
                transform: scale(1.1);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
            .cart-count {
                position: absolute;
                top: -5px;
                right: -5px;
                background: #ff6b6b;
                color: white;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;
                font-weight: bold;
            }
        `;
        document.head.appendChild(cartStyle);
        
        document.body.appendChild(cartSidebar);
        
        // Add cart toggle button
        const cartToggleBtn = document.createElement('button');
        cartToggleBtn.className = 'cart-toggle-btn';
        cartToggleBtn.innerHTML = '🛒<span class="cart-count" id="cartCount" style="display: none;">0</span>';
        cartToggleBtn.style.position = 'relative';
        cartToggleBtn.onclick = toggleCart;
        document.body.appendChild(cartToggleBtn);
    }

    function setupDeliveryService() {
        // Add delivery service section
        const deliverySection = document.createElement('div');
        deliverySection.className = 'section';
        deliverySection.innerHTML = `
            <h2>🚚 Layanan Pengiriman</h2>
            <div class="delivery-options">
                <div class="delivery-option">
                    <div class="delivery-icon">🏠</div>
                    <div class="delivery-info">
                        <h4>Ambil di Toko</h4>
                        <p>Gratis - Siap dalam 30 menit</p>
                        <ul>
                            <li>Tidak ada minimum pembelian</li>
                            <li>Bisa cek barang langsung</li>
                            <li>Dapatkan diskon tambahan 5%</li>
                        </ul>
                    </div>
                </div>
                <div class="delivery-option">
                    <div class="delivery-icon">🚐</div>
                    <div class="delivery-info">
                        <h4>Antar Kurir</h4>
                        <p>Rp 8.000 - Radius 5 km</p>
                        <ul>
                            <li>Minimal pembelian Rp 50.000</li>
                            <li>Sampai 2 jam</li>
                            <li>Gratis ongkir Rp 100.000+</li>
                        </ul>
                    </div>
                </div>
                <div class="delivery-option">
                    <div class="delivery-icon">📦</div>
                    <div class="delivery-info">
                        <h4>Langganan</h4>
                        <p>Gratis ongkir - Minimal Rp 200.000/bulan</p>
                        <ul>
                            <li>Prioritas pengiriman</li>
                            <li>Diskon khusus 10%</li>
                            <li>Layanan personal</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        
        // Add styles for delivery options
        const deliveryStyle = document.createElement('style');
        deliveryStyle.textContent = `
            .delivery-options {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 2rem;
                margin-top: 1.5rem;
            }
            .delivery-option {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 15px;
                padding: 2rem;
                text-align: center;
                transition: all 0.3s;
            }
            .delivery-option:hover {
                background: rgba(102, 126, 234, 0.1);
                border-color: #667eea;
                transform: translateY(-5px);
            }
            .delivery-icon {
                font-size: 3rem;
                margin-bottom: 1rem;
            }
            .delivery-info h4 {
                color: #fff;
                font-size: 1.2rem;
                margin: 0 0 0.5rem 0;
            }
            .delivery-info p {
                color: #667eea;
                font-weight: bold;
                margin: 0 0 1rem 0;
            }
            .delivery-info ul {
                list-style: none;
                padding: 0;
                margin: 0;
                text-align: left;
            }
            .delivery-info li {
                color: #aaa;
                font-size: 0.9rem;
                padding: 0.3rem 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            }
            .delivery-info li:last-child {
                border-bottom: none;
            }
        `;
        document.head.appendChild(deliveryStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(deliverySection);
        }
    }

    function setupSearchFeature() {
        // Add search bar to hero section
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            const searchBar = document.createElement('div');
            searchBar.className = 'search-bar';
            searchBar.innerHTML = `
                <div class="search-container">
                    <input type="text" id="productSearch" placeholder="Cari produk yang Anda butuhkan...">
                    <button class="search-btn" onclick="searchProducts()">🔍</button>
                </div>
                <div class="search-results" id="searchResults" style="display: none;"></div>
            `;
            
            const searchStyle = document.createElement('style');
            searchStyle.textContent = `
                .search-bar {
                    margin-top: 2rem;
                    width: 100%;
                }
                .search-container {
                    display: flex;
                    gap: 0.5rem;
                    max-width: 500px;
                    margin: 0 auto;
                }
                #productSearch {
                    flex: 1;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 25px;
                    color: white;
                    font-size: 1rem;
                }
                #productSearch::placeholder {
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
                .search-results {
                    margin-top: 1rem;
                    background: rgba(10, 10, 10, 0.95);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 15px;
                    padding: 1rem;
                    max-height: 300px;
                    overflow-y: auto;
                }
                .search-result-item {
                    padding: 0.8rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    cursor: pointer;
                    transition: background 0.3s;
                }
                .search-result-item:hover {
                    background: rgba(102, 126, 234, 0.1);
                }
                .search-result-item:last-child {
                    border-bottom: none;
                }
                .search-result-name {
                    color: #fff;
                    font-weight: 600;
                }
                .search-result-category {
                    color: #667eea;
                    font-size: 0.9rem;
                }
            `;
            document.head.appendChild(searchStyle);
            
            heroContent.appendChild(searchBar);
            
            // Setup search functionality
            setupSearchFunctionality();
        }
    }

    function setupSearchFunctionality() {
        const searchInput = document.getElementById('productSearch');
        const searchResults = document.getElementById('searchResults');
        
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            
            if (query.length > 0) {
                const results = [];
                
                Object.keys(productCategories).forEach(category => {
                    productCategories[category].forEach((product, index) => {
                        if (product.name.toLowerCase().includes(query)) {
                            results.push({
                                ...product,
                                category: category,
                                categoryIndex: index
                            });
                        }
                    });
                });
                
                if (results.length > 0) {
                    searchResults.innerHTML = results.map(result => `
                        <div class="search-result-item" onclick="selectSearchResult('${result.category}', ${result.categoryIndex})">
                            <div class="search-result-name">${result.name}</div>
                            <div class="search-result-category">${formatCategoryName(result.category)} - ${result.price}</div>
                        </div>
                    `).join('');
                    searchResults.style.display = 'block';
                } else {
                    searchResults.innerHTML = '<p style="color: #aaa; text-align: center;">Produk tidak ditemukan</p>';
                    searchResults.style.display = 'block';
                }
            } else {
                searchResults.style.display = 'none';
            }
        });
        
        // Hide search results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
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

    // Cart functionality
    let cart = [];

    window.addToCart = function(category, index) {
        const product = productCategories[category][index];
        const existingItem = cart.find(item => item.name === product.name);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                ...product,
                category: category,
                quantity: 1
            });
        }
        
        updateCart();
        showNotification(`${product.name} ditambahkan ke keranjang!`);
    };

    window.quickView = function(category, index) {
        const product = productCategories[category][index];
        const modal = document.createElement('div');
        modal.className = 'quick-view-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Detail Produk</h3>
                    <button class="close-modal-btn" onclick="closeQuickView()">✕</button>
                </div>
                <div class="modal-body">
                    <h4>${product.name}</h4>
                    <div class="product-details">
                        <p><strong>Kategori:</strong> ${formatCategoryName(category)}</p>
                        <p><strong>Harga:</strong> ${product.price}</p>
                        <p><strong>Stok:</strong> ${product.stock}</p>
                    </div>
                    <div class="modal-actions">
                        <button class="add-to-cart-modal-btn" onclick="addToCart('${category}', ${index}); closeQuickView();">
                            🛒 Tambah ke Keranjang
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

    window.closeQuickView = function() {
        const modal = document.querySelector('.quick-view-modal');
        if (modal) {
            document.body.removeChild(modal);
        }
    };

    function updateCart() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const cartCount = document.getElementById('cartCount');
        const checkoutBtn = document.querySelector('.checkout-btn');
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Keranjang kosong</p>';
            cartTotal.textContent = '0';
            cartCount.style.display = 'none';
            checkoutBtn.disabled = true;
        } else {
            cartItems.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${item.price}</div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </div>
            `).join('');
            
            // Calculate total
            const total = cart.reduce((sum, item) => {
                const price = parseInt(item.price.replace(/\D/g, ''));
                return sum + (price * item.quantity);
            }, 0);
            
            cartTotal.textContent = total.toLocaleString('id-ID');
            
            // Update cart count
            const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = itemCount;
            cartCount.style.display = 'flex';
            
            checkoutBtn.disabled = false;
        }
    }

    window.updateQuantity = function(index, change) {
        cart[index].quantity += change;
        
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        
        updateCart();
    };

    window.toggleCart = function() {
        const cartSidebar = document.querySelector('.cart-sidebar');
        cartSidebar.classList.toggle('open');
    };

    window.checkout = function() {
        if (cart.length > 0) {
            const orderList = cart.map(item => `${item.name} (${item.quantity}x)`).join(', ');
            const total = document.getElementById('cartTotal').textContent;
            const message = `Halo, saya ingin memesan: ${orderList}. Total: Rp ${total}`;
            window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
            
            // Clear cart after checkout
            cart = [];
            updateCart();
            toggleCart();
        }
    };

    window.orderSpecialOffer = function(index) {
        const offer = specialOffers[index];
        const message = `Halo, saya ingin memesan penawaran: ${offer.title} - ${offer.description}`;
        window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    };

    window.searchProducts = function() {
        const searchInput = document.getElementById('productSearch');
        searchInput.dispatchEvent(new Event('input'));
    };

    window.selectSearchResult = function(category, index) {
        // Switch to the category tab
        const categoryBtn = document.querySelector(`[data-category="${category}"]`);
        if (categoryBtn) {
            categoryBtn.click();
        }
        
        // Hide search results
        document.getElementById('searchResults').style.display = 'none';
        document.getElementById('productSearch').value = '';
        
        // Scroll to products section
        document.querySelector('.products-container').scrollIntoView({ 
            behavior: 'smooth' 
        });
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
            color: #667eea;
            font-size: 1.4rem;
            margin: 0 0 1rem 0;
        }
        .product-details p {
            color: #ccc;
            margin-bottom: 0.5rem;
        }
        .modal-actions {
            margin-top: 1.5rem;
        }
        .add-to-cart-modal-btn {
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
        .add-to-cart-modal-btn:hover {
            transform: scale(1.02);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
    `;
    document.head.appendChild(notificationStyle);
});
