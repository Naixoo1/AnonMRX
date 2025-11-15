// Nasikebuliayam UMKM JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // UMKM Data
    const umkmData = {
        name: "Nasi Kebuli Ayam",
        icon: "🍗",
        category: "Kuliner",
        description: "Spesialis nasi keuli ayam dengan rempah pilihan dan cita rasa autentik",
        hours: "10.00 - 22.00",
        price: "Rp 15.000 - 35.000",
        address: "Jl. Rempah No. 23, Karawang Barat",
        phone: "+628123456789",
        whatsapp: "628123456789",
        instagram: "@nasikebuliayam"
    };

    // Menu items
    const menuItems = [
        { name: 'Nasi Kebuli Ayam Bakar', price: 'Rp 25.000', description: 'Ayam bakar dengan bumbu keuli khas' },
        { name: 'Nasi Kebuli Ayam Goreng', price: 'Rp 23.000', description: 'Ayam goreng crispy dengan rempah keuli' },
        { name: 'Nasi Kebuli Kambing', price: 'Rp 35.000', description: 'Daging kambing empuk dengan bumbu spesial' },
        { name: 'Nasi Kebuli Komplit', price: 'Rp 30.000', description: 'Ayam + telur + sambal + acar' },
        { name: 'Paket Keluarga', price: 'Rp 100.000', description: '4 porsi nasi keuli lengkap' }
    ];

    // Initialize page
    initializePage();

    function initializePage() {
        updatePageContent();
        setupEventListeners();
        addAnimations();
        setupMenuDisplay();
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
                window.open(`https://wa.me/${umkmData.whatsapp}?text=Halo, saya ingin memesan Nasi Kebuli Ayam`, '_blank');
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

    function setupMenuDisplay() {
        // Add menu section
        const menuSection = document.createElement('div');
        menuSection.className = 'section';
        menuSection.innerHTML = `
            <h2>🍽️ Menu Spesial</h2>
            <div class="menu-grid">
                ${menuItems.map((item, index) => `
                    <div class="menu-item" data-index="${index}">
                        <div class="menu-header">
                            <h4>${item.name}</h4>
                            <span class="menu-price">${item.price}</span>
                        </div>
                        <p class="menu-description">${item.description}</p>
                        <button class="order-menu-btn" onclick="orderMenuItem('${item.name}')">
                            🛒 Pesan Sekarang
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Add styles for menu
        const menuStyle = document.createElement('style');
        menuStyle.textContent = `
            .menu-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 1.5rem;
                margin-top: 1.5rem;
            }
            .menu-item {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 15px;
                padding: 1.5rem;
                transition: all 0.3s;
            }
            .menu-item:hover {
                background: rgba(102, 126, 234, 0.1);
                border-color: #667eea;
                transform: translateY(-5px);
            }
            .menu-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.5rem;
            }
            .menu-header h4 {
                color: #fff;
                font-size: 1.1rem;
                margin: 0;
            }
            .menu-price {
                color: #667eea;
                font-weight: bold;
                font-size: 1rem;
            }
            .menu-description {
                color: #aaa;
                margin-bottom: 1rem;
                font-size: 0.9rem;
            }
            .order-menu-btn {
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
            .order-menu-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
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
    }

    function setupOrderSystem() {
        // Add order tracking feature
        const orderSection = document.createElement('div');
        orderSection.className = 'section';
        orderSection.innerHTML = `
            <h2>📋 Cara Pemesanan</h2>
            <div class="order-steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h4>Pilih Menu</h4>
                        <p>Pilih menu favorit Anda dari daftar menu yang tersedia</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h4>Hubungi Kami</h4>
                        <p>Klik tombol WhatsApp atau telepon untuk melakukan pemesanan</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h4>Antar atau Ambil</h4>
                        <p>Pilih antar ke alamat atau ambil langsung di tempat</p>
                    </div>
                </div>
            </div>
        `;
        
        // Add styles for order steps
        const orderStyle = document.createElement('style');
        orderStyle.textContent = `
            .order-steps {
                display: grid;
                gap: 1.5rem;
                margin-top: 1.5rem;
            }
            .step {
                display: flex;
                gap: 1rem;
                align-items: flex-start;
            }
            .step-number {
                min-width: 40px;
                height: 40px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
            }
            .step-content h4 {
                color: #fff;
                margin-bottom: 0.3rem;
            }
            .step-content p {
                color: #aaa;
                font-size: 0.9rem;
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

    // Back button functionality
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.history.back();
        });
    }

    // Order menu item function
    window.orderMenuItem = function(itemName) {
        const message = `Halo, saya ingin memesan: ${itemName}`;
        window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    };
});
