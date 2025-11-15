// Sidomuncul UMKM JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // UMKM Data
    const umkmData = {
        name: "Sidomuncul",
        icon: "🌿",
        category: "Kesehatan & Herbal",
        description: "Toko herbal tradisional yang menyediakan berbagai produk kesehatan alami",
        hours: "08.00 - 20.00",
        price: "Mulai Rp 5.000",
        address: "Jl. Sehat No. 15, Karawang Barat",
        phone: "+628123456789",
        whatsapp: "628123456789",
        instagram: "@sidomuncul_herbal"
    };

    // Initialize page
    initializePage();

    function initializePage() {
        updatePageContent();
        setupEventListeners();
        addAnimations();
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
                window.open(`https://wa.me/${umkmData.whatsapp}`, '_blank');
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

    // Smooth scroll for navigation
    function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
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
});
