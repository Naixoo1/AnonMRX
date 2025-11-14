// Fotokopi Lisa UMKM JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // UMKM Data
    const umkmData = {
        name: "Fotokopi Lisa",
        icon: "🖨️",
        category: "Jasa",
        description: "Layanan fotokopi, print, scan, dan jilid cepat dengan kualitas terbaik",
        hours: "07.30 - 18.00",
        price: "Rp 500/lembar",
        address: "57 Jl. Dewi Sartika, Karawang Barat",
        phone: "+628123456789",
        whatsapp: "628123456789",
        instagram: "@fotokopilisa"
    };

    // Service prices
    const servicePrices = {
        'Print BW': 'Rp 500/lembar',
        'Print Warna': 'Rp 2.000/lembar',
        'Fotokopi': 'Rp 300/lembar',
        'Scan': 'Rp 1.000/halaman',
        'Jilid': 'Rp 3.000-10.000',
        'Edit Dokumen': 'Rp 10.000-50.000'
    };

    // Initialize page
    initializePage();

    function initializePage() {
        updatePageContent();
        setupEventListeners();
        addAnimations();
        setupServiceCalculator();
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
                window.open(`https://wa.me/${umkmData.whatsapp}?text=Halo, saya ingin menggunakan jasa fotokopi/print`, '_blank');
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

    function setupServiceCalculator() {
        // Add service price list
        const serviceSection = document.createElement('div');
        serviceSection.className = 'section';
        serviceSection.innerHTML = `
            <h2>💰 Daftar Harga Jasa</h2>
            <div class="price-list">
                ${Object.entries(servicePrices).map(([service, price]) => `
                    <div class="price-item">
                        <span class="service-name">${service}</span>
                        <span class="service-price">${price}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Add styles for price list
        const style = document.createElement('style');
        style.textContent = `
            .price-list {
                display: grid;
                gap: 1rem;
                margin-top: 1rem;
            }
            .price-item {
                display: flex;
                justify-content: space-between;
                padding: 1rem;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 10px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                transition: all 0.3s;
            }
            .price-item:hover {
                background: rgba(102, 126, 234, 0.1);
                border-color: #667eea;
                transform: translateX(5px);
            }
            .service-name {
                font-weight: 600;
                color: #fff;
            }
            .service-price {
                color: #667eea;
                font-weight: bold;
            }
        `;
        document.head.appendChild(style);
        
        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(serviceSection);
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

    // Quick order function
    function quickOrder(service) {
        const message = `Halo Fotokopi Lisa, saya ingin memesan layanan: ${service}`;
        window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    }

    // Add quick order buttons
    function addQuickOrderButtons() {
        const quickOrderSection = document.createElement('div');
        quickOrderSection.className = 'quick-order-section';
        quickOrderSection.innerHTML = `
            <h3>🚀 Pesan Cepat</h3>
            <div class="quick-order-buttons">
                ${Object.keys(servicePrices).slice(0, 4).map(service => `
                    <button class="quick-order-btn" onclick="quickOrder('${service}')">
                        ${service}
                    </button>
                `).join('')}
            </div>
        `;
        
        const quickOrderStyle = document.createElement('style');
        quickOrderStyle.textContent = `
            .quick-order-section {
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                padding: 2rem;
                margin: 2rem 0;
            }
            .quick-order-buttons {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
            }
            .quick-order-btn {
                padding: 1rem;
                background: rgba(102, 126, 234, 0.2);
                border: 1px solid rgba(102, 126, 234, 0.3);
                border-radius: 10px;
                color: white;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 0.9rem;
            }
            .quick-order-btn:hover {
                background: rgba(102, 126, 234, 0.4);
                transform: translateY(-2px);
            }
        `;
        document.head.appendChild(quickOrderStyle);
        
        const contactSection = document.querySelector('.contact-buttons').parentElement.parentElement;
        if (contactSection) {
            contactSection.before(quickOrderSection);
        }
    }

    // Initialize quick order buttons
    setTimeout(addQuickOrderButtons, 100);
});
