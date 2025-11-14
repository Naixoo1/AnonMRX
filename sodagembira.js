// Sodagembira UMKM JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // UMKM Data
    const umkmData = {
        name: "Soda Gembira",
        icon: "🥤",
        category: "Minuman",
        description: "Toko minuman segar dengan berbagai pilihan soda dan jus buah asli",
        hours: "10.00 - 22.00",
        price: "Rp 8.000 - 20.000",
        address: "Jl. Segar No. 67, Karawang Barat",
        phone: "+628123456789",
        whatsapp: "628123456789",
        instagram: "@sodagembira"
    };

    // Drink menu
    const drinkMenu = [
        { name: 'Soda Gembira Original', price: 'Rp 10.000', description: 'Susu kental manis dengan soda dan es batu' },
        { name: 'Soda Strawberry', price: 'Rp 12.000', description: 'Soda dengan sirup strawberry segar' },
        { name: 'Soda Melon', price: 'Rp 12.000', description: 'Soda dengan sirup melon yang menyegarkan' },
        { name: 'Soda Lemon', price: 'Rp 11.000', description: 'Soda dengan perasan lemon asli' },
        { name: 'Jus Alpukat', price: 'Rp 15.000', description: 'Jus alpukat premium dengan susu' },
        { name: 'Jus Mangga', price: 'Rp 13.000', description: 'Jus mangga manis tanpa gula tambahan' },
        { name: 'Thai Tea', price: 'Rp 14.000', description: 'Teh Thailand autentik dengan susu' },
        { name: 'Cappuccino Cincau', price: 'Rp 13.000', description: 'Kopi cappuccino dengan cincau' }
    ];

    // Initialize page
    initializePage();

    function initializePage() {
        updatePageContent();
        setupEventListeners();
        addAnimations();
        setupDrinkMenu();
        setupPromotions();
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
    }

    function setupEventListeners() {
        // Contact buttons
        const whatsappBtn = document.querySelector('.contact-btn.whatsapp');
        const phoneBtn = document.querySelector('.contact-btn.phone');
        const instagramBtn = document.querySelector('.contact-btn.instagram');
        
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', () => {
                window.open(`https://wa.me/${umkmData.whatsapp}?text=Halo, saya ingin memesan minuman di Soda Gembira`, '_blank');
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

    function setupDrinkMenu() {
        // Add drink menu section
        const menuSection = document.createElement('div');
        menuSection.className = 'section';
        menuSection.innerHTML = `
            <h2>🥤 Menu Minuman</h2>
            <div class="drink-categories">
                <div class="category-tabs">
                    <button class="tab-btn active" data-category="all">Semua</button>
                    <button class="tab-btn" data-category="soda">Soda</button>
                    <button class="tab-btn" data-category="jus">Jus</button>
                    <button class="tab-btn" data-category="kopi">Kopi & Teh</button>
                </div>
                <div class="drink-grid" id="drinkGrid">
                    ${drinkMenu.map((drink, index) => `
                        <div class="drink-card" data-category="${getDrinkCategory(drink.name)}" data-index="${index}">
                            <div class="drink-header">
                                <h4>${drink.name}</h4>
                                <span class="drink-price">${drink.price}</span>
                            </div>
                            <p class="drink-description">${drink.description}</p>
                            <div class="drink-actions">
                                <button class="order-drink-btn" onclick="orderDrink('${drink.name}')">
                                    🛒 Pesan
                                </button>
                                <button class="favorite-btn" onclick="toggleFavorite(${index})">
                                    ❤️
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Add styles for drink menu
        const menuStyle = document.createElement('style');
        menuStyle.textContent = `
            .drink-categories {
                margin-top: 1.5rem;
            }
            .category-tabs {
                display: flex;
                gap: 0.5rem;
                margin-bottom: 1.5rem;
                flex-wrap: wrap;
            }
            .tab-btn {
                padding: 0.8rem 1.5rem;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                color: #aaa;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 0.9rem;
            }
            .tab-btn.active,
            .tab-btn:hover {
                background: rgba(102, 126, 234, 0.2);
                border-color: #667eea;
                color: white;
            }
            .drink-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 1.5rem;
            }
            .drink-card {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 15px;
                padding: 1.5rem;
                transition: all 0.3s;
            }
            .drink-card:hover {
                background: rgba(102, 126, 234, 0.1);
                border-color: #667eea;
                transform: translateY(-5px);
            }
            .drink-card.hidden {
                display: none;
            }
            .drink-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.5rem;
            }
            .drink-header h4 {
                color: #fff;
                font-size: 1.1rem;
                margin: 0;
            }
            .drink-price {
                color: #667eea;
                font-weight: bold;
                font-size: 1rem;
            }
            .drink-description {
                color: #aaa;
                margin-bottom: 1rem;
                font-size: 0.9rem;
            }
            .drink-actions {
                display: flex;
                gap: 0.5rem;
            }
            .order-drink-btn,
            .favorite-btn {
                flex: 1;
                padding: 0.8rem;
                border: none;
                border-radius: 8px;
                color: white;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 0.9rem;
            }
            .order-drink-btn {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
            .order-drink-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
            .favorite-btn {
                background: rgba(255, 255, 255, 0.1);
                min-width: 50px;
            }
            .favorite-btn:hover {
                background: rgba(255, 0, 0, 0.2);
            }
            .favorite-btn.favorited {
                background: rgba(255, 0, 0, 0.3);
            }
        `;
        document.head.appendChild(menuStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            const firstSection = container.querySelector('.section');
            if (firstSection) {
                firstSection.after(menuSection);
            } else {
                container.appendChild(menuSection);
            }
        }
        
        // Setup category filtering
        setupCategoryFilter();
    }

    function getDrinkCategory(drinkName) {
        if (drinkName.toLowerCase().includes('soda')) return 'soda';
        if (drinkName.toLowerCase().includes('jus')) return 'jus';
        if (drinkName.toLowerCase().includes('tea') || drinkName.toLowerCase().includes('cappuccino')) return 'kopi';
        return 'soda';
    }

    function setupCategoryFilter() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const drinkCards = document.querySelectorAll('.drink-card');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active tab
                tabButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter drinks
                const category = this.dataset.category;
                drinkCards.forEach(card => {
                    if (category === 'all' || card.dataset.category === category) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    function setupPromotions() {
        // Add promotions section
        const promoSection = document.createElement('div');
        promoSection.className = 'section';
        promoSection.innerHTML = `
            <h2>🎉 Promo Spesial</h2>
            <div class="promo-grid">
                <div class="promo-card">
                    <div class="promo-badge">HAPPY HOUR</div>
                    <h4>Buy 1 Get 1</h4>
                    <p>Setiap pembelian Soda Gembira Original (14:00 - 17:00)</p>
                </div>
                <div class="promo-card">
                    <div class="promo-badge">WEEKEND</div>
                    <h4>Diskon 20%</h4>
                    <p>Semua jus buah (Sabtu-Minggu)</p>
                </div>
                <div class="promo-card">
                    <div class="promo-badge">MEMBER</div>
                    <h4>Poin Reward</h4>
                    <p>Kumpulkan poin untuk minuman gratis</p>
                </div>
            </div>
        `;
        
        // Add styles for promotions
        const promoStyle = document.createElement('style');
        promoStyle.textContent = `
            .promo-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
                margin-top: 1.5rem;
            }
            .promo-card {
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
                border: 1px solid rgba(102, 126, 234, 0.3);
                border-radius: 15px;
                padding: 1.5rem;
                position: relative;
                transition: all 0.3s;
            }
            .promo-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
            }
            .promo-badge {
                position: absolute;
                top: -10px;
                right: 15px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 0.3rem 0.8rem;
                border-radius: 15px;
                font-size: 0.8rem;
                font-weight: bold;
            }
            .promo-card h4 {
                color: #fff;
                margin: 0.5rem 0;
                font-size: 1.2rem;
            }
            .promo-card p {
                color: #aaa;
                margin: 0;
                font-size: 0.9rem;
            }
        `;
        document.head.appendChild(promoStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(promoSection);
        }
    }

    function setupOrderSystem() {
        // Add order summary
        const orderSummary = document.createElement('div');
        orderSummary.className = 'order-summary';
        orderSummary.innerHTML = `
            <h3>📝 Keranjang Anda</h3>
            <div id="cartItems" class="cart-items">
                <p class="empty-cart">Keranjang kosong</p>
            </div>
            <div class="cart-total">
                <strong>Total: Rp <span id="totalPrice">0</span></strong>
            </div>
            <button class="checkout-btn" onclick="checkout()" disabled>
                🛒 Checkout
            </button>
        `;
        
        // Add styles for order summary
        const cartStyle = document.createElement('style');
        cartStyle.textContent = `
            .order-summary {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: rgba(10, 10, 10, 0.95);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 15px;
                padding: 1.5rem;
                width: 300px;
                max-height: 400px;
                overflow-y: auto;
                z-index: 1000;
            }
            .cart-items {
                margin: 1rem 0;
                max-height: 200px;
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
                padding: 0.5rem 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            .cart-item-name {
                color: #fff;
                font-size: 0.9rem;
            }
            .cart-item-price {
                color: #667eea;
                font-weight: bold;
                font-size: 0.9rem;
            }
            .cart-total {
                border-top: 1px solid rgba(255, 255, 255, 0.2);
                padding-top: 1rem;
                margin-top: 1rem;
                color: #fff;
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
                margin-top: 1rem;
            }
            .checkout-btn:hover:not(:disabled) {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
            .checkout-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        `;
        document.head.appendChild(cartStyle);
        
        document.body.appendChild(orderSummary);
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

    window.orderDrink = function(drinkName) {
        const drink = drinkMenu.find(d => d.name === drinkName);
        if (drink) {
            cart.push(drink);
            updateCart();
            showNotification(`${drinkName} ditambahkan ke keranjang!`);
        }
    };

    window.toggleFavorite = function(index) {
        const btn = document.querySelectorAll('.favorite-btn')[index];
        btn.classList.toggle('favorited');
        const drink = drinkMenu[index];
        const action = btn.classList.contains('favorited') ? 'ditambahkan ke' : 'dihapus dari';
        showNotification(`${drink.name} ${action} favorit!`);
    };

    function updateCart() {
        const cartItems = document.getElementById('cartItems');
        const totalPrice = document.getElementById('totalPrice');
        const checkoutBtn = document.querySelector('.checkout-btn');
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Keranjang kosong</p>';
            totalPrice.textContent = '0';
            checkoutBtn.disabled = true;
        } else {
            cartItems.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <span class="cart-item-name">${item.name}</span>
                    <span class="cart-item-price">${item.price}</span>
                </div>
            `).join('');
            
            // Calculate total (simplified - just sum the numeric parts)
            const total = cart.reduce((sum, item) => {
                const price = parseInt(item.price.replace(/\D/g, ''));
                return sum + price;
            }, 0);
            totalPrice.textContent = total.toLocaleString('id-ID');
            checkoutBtn.disabled = false;
        }
    }

    window.checkout = function() {
        if (cart.length > 0) {
            const orderList = cart.map(item => item.name).join(', ');
            const message = `Halo, saya ingin memesan: ${orderList}`;
            window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
            cart = [];
            updateCart();
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
    `;
    document.head.appendChild(notificationStyle);
});
