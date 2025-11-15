// Warungdoaibu UMKM JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // UMKM Data
    const umkmData = {
        name: "Warung Doa Ibu",
        icon: "🍛",
        category: "Kuliner",
        description: "Warung makan keluarga dengan menu masakan rumahan yang lezat dan bergizi",
        hours: "06.00 - 21.00",
        price: "Rp 10.000 - 25.000",
        address: "Jl. Berkah No. 8, Karawang Barat",
        phone: "+628123456789",
        whatsapp: "628123456789",
        instagram: "@warungdoaibu"
    };

    // Initialize page
    initializePage();

    function initializePage() {
        updatePageContent();
        setupEventListeners();
        addAnimations();
        setupMenuFeatures();
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
                window.open(`https://wa.me/${umkmData.whatsapp}?text=Halo, saya tertarik dengan menu di Warung Doa Ibu`, '_blank');
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

    function setupMenuFeatures() {
        // Add daily menu highlight
        const dailyMenu = {
            'Senin': 'Nasi Goreng Spesial',
            'Selasa': 'Soto Ayam Kampung',
            'Rabu': 'Rendang Sapi',
            'Kamis': 'Ayam Bakar Madu',
            'Jumat': 'Gulai Kambing',
            'Sabtu': 'Pecel Lele',
            'Minggu': 'Sop Buntut'
        };

        const today = new Date().toLocaleDateString('id-ID', { weekday: 'long' });
        const todayMenu = dailyMenu[today];
        
        if (todayMenu) {
            const menuHighlight = document.createElement('div');
            menuHighlight.className = 'menu-highlight';
            menuHighlight.innerHTML = `
                <h3>🍽️ Menu Hari Ini (${today})</h3>
                <p><strong>${todayMenu}</strong> - Spesial!</p>
            `;
            menuHighlight.style.cssText = `
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
                padding: 1.5rem;
                border-radius: 15px;
                margin: 1rem 0;
                border-left: 4px solid #667eea;
                text-align: center;
            `;
            
            const descriptionSection = document.querySelector('.description-content');
            if (descriptionSection) {
                descriptionSection.appendChild(menuHighlight);
            }
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

    // Add order functionality
    function orderNow() {
        const message = `Halo Warung Doa Ibu, saya ingin memesan makanan`;
        window.open(`https://wa.me/${umkmData.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    }
});
