// Sidotanguniita UMKM JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // UMKM Data
    const umkmData = {
        name: "Sido Tang Uniita",
        icon: "🏪",
        category: "Toko Kelontong",
        description: "Toko kelontong lengkap dengan kebutuhan sehari-hari dan harga terjangkau",
        hours: "07.00 - 21.00",
        price: "Harga bersaing",
        address: "Jl. Sejahtera No. 45, Karawang Barat",
        phone: "+628123456789",
        whatsapp: "628123456789",
        instagram: "@sidotanguniita"
    };

    // Product categories
    const productCategories = [
        { name: 'Sembako', items: ['Beras', 'Gula', 'Minyak Goreng', 'Tepung', 'Garam'] },
        { name: 'Kebutuhan Dapur', items: ['Bumbu Dapur', 'Saus', 'Kecap', 'Penyedap Rasa'] },
        { name: 'Minuman', items: ['Teh', 'Kopi', 'Susu', 'Air Mineral', 'Jus'] },
        { name: 'Snack', items: ['Kerupuk', 'Biskuit', 'Permen', 'Coklat', 'Wafer'] },
        { name: 'Kebutuhan Rumah', items: ['Sabun', 'Sampo', 'Pasta Gigi', 'Deterjen', 'Pembersih'] }
    ];

    // Initialize page
    initializePage();

    function initializePage() {
        updatePageContent();
        setupEventListeners();
        addAnimations();
        setupProductCategories();
        setupDeliveryService();
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
                window.open(`https://wa.me/${umkmData.whatsapp}?text=Halo, saya ingin berbelanja di Sido Tang Uniita`, '_blank');
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
        const productSection = document.createElement('div');
        productSection.className = 'section';
        productSection.innerHTML = `
            <h2>🛍️ Kategori Produk</h2>
            <div class="category-grid">
                ${productCategories.map((category, index) => `
                    <div class="category-card" data-category="${category.name}">
                        <div class="category-header">
                            <h3>${category.name}</h3>
                            <span class="item-count">${category.items.length} items</span>
                        </div>
                        <ul class="item-list">
                            ${category.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                        <button class="browse-category-btn" onclick="browseCategory('${category.name}')">
                            👀 Lihat Produk
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Add styles for product categories
        const categoryStyle = document.createElement('style');
        categoryStyle.textContent = `
            .category-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
                margin-top: 1.5rem;
            }
            .category-card {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 15px;
                padding: 1.5rem;
                transition: all 0.3s;
            }
            .category-card:hover {
                background: rgba(102, 126, 234, 0.1);
                border-color: #667eea;
                transform: translateY(-5px);
            }
            .category-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
            }
            .category-header h3 {
                color: #fff;
                margin: 0;
                font-size: 1.2rem;
            }
            .item-count {
                color: #667eea;
                font-size: 0.9rem;
                background: rgba(102, 126, 234, 0.2);
                padding: 0.3rem 0.8rem;
                border-radius: 15px;
            }
            .item-list {
                list-style: none;
                padding: 0;
                margin-bottom: 1rem;
            }
            .item-list li {
                color: #aaa;
                padding: 0.3rem 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                font-size: 0.9rem;
            }
            .item-list li:last-child {
                border-bottom: none;
            }
            .browse-category-btn {
                width: 100%;
                padding: 0.8rem;
                background: rgba(102, 126, 234, 0.2);
                border: 1px solid rgba(102, 126, 234, 0.3);
                border-radius: 8px;
                color: white;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 0.9rem;
            }
            .browse-category-btn:hover {
                background: rgba(102, 126, 234, 0.4);
                transform: scale(1.02);
            }
        `;
        document.head.appendChild(categoryStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            const firstSection = container.querySelector('.section');
            if (firstSection) {
                firstSection.after(productSection);
            } else {
                container.appendChild(productSection);
            }
        }
    }

    function setupDeliveryService() {
        // Add delivery service information
        const deliverySection = document.createElement('div');
        deliverySection.className = 'section';
        deliverySection.innerHTML = `
            <h2>🚚 Layanan Pengiriman</h2>
            <div class="delivery-options">
                <div class="delivery-option">
                    <div class="delivery-icon">🏃</div>
                    <div class="delivery-info">
                        <h4>Ambil di Toko</h4>
                        <p>Gratis - Siap dalam 15 menit</p>
                    </div>
                </div>
                <div class="delivery-option">
                    <div class="delivery-icon">🚲</div>
                    <div class="delivery-info">
                        <h4>Antar Kurir</h4>
                        <p>Rp 5.000 - Radius 3 km</p>
                    </div>
                </div>
                <div class="delivery-option">
                    <div class="delivery-icon">📦</div>
                    <div class="delivery-info">
                        <h4>Pesan Antar</h4>
                        <p>Minimal Rp 50.000 - Gratis ongkir</p>
                    </div>
                </div>
            </div>
        `;
        
        // Add styles for delivery options
        const deliveryStyle = document.createElement('style');
        deliveryStyle.textContent = `
            .delivery-options {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                margin-top: 1.5rem;
            }
            .delivery-option {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                transition: all 0.3s;
            }
            .delivery-option:hover {
                background: rgba(102, 126, 234, 0.1);
                border-color: #667eea;
                transform: translateX(5px);
            }
            .delivery-icon {
                font-size: 2rem;
                min-width: 40px;
                text-align: center;
            }
            .delivery-info h4 {
                color: #fff;
                margin: 0 0 0.3rem 0;
                font-size: 1rem;
            }
            .delivery-info p {
                color: #aaa;
                margin: 0;
                font-size: 0.9rem;
            }
        `;
        document.head.appendChild(deliveryStyle);
        
        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(deliverySection);
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

    // Back button functionality
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.history.back();
        });
    }

    // Browse category function
    window.browseCategory = function(categoryName) {
        const message = `Halo, saya ingin melihat produk kategori ${categoryName}`;
        window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    };
});
