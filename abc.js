const umkmData = [
    {
        name: "Warung Makan Bu Siti",
        icon: "🍜",
        desc: "Menyajikan makanan tradisional dengan cita rasa autentik",
        category: "makanan",
        details: ["⏰ Buka: 07.00 - 20.00", "📍 Jl. Pendidikan No. 12", "💰 Rp 10.000 - 25.000"],
        link: "warungbusiti.html"
    },
    {
        name: "Toko Buku Cerdas",
        icon: "📚",
        desc: "Lengkap dengan alat tulis dan buku pelajaran",
        category: "pendidikan",
        details: ["⏰ Buka: 08.00 - 18.00", "📍 Jl. Ilmu No. 5", "💰 Diskon 10% pelajar"]
    },
    {
        name: "Fotokopi & Print Kilat",
        icon: "🖨️",
        desc: "Layanan cepat untuk kebutuhan sekolah Anda",
        category: "jasa",
        details: ["⏰ Buka: 06.30 - 21.00", "📍 Depan Gerbang", "💰 Print Rp 300/lembar"]
    },
    {
        name: "Kedai Kopi Pelajar",
        icon: "☕",
        desc: "Tempat nongkrong asik dengan WiFi gratis",
        category: "makanan",
        details: ["⏰ Buka: 09.00 - 22.00", "📍 Jl. Merdeka No. 18", "💰 Kopi mulai Rp 8.000"]
    },
    {
        name: "Laundry Express",
        icon: "👕",
        desc: "Cuci kilat seragam dan pakaian sehari-hari",
        category: "jasa",
        details: ["⏰ Buka: 07.00 - 20.00", "📍 Jl. Bersih No. 9", "💰 Rp 5.000/kg"]
    },
    {
        name: "Toko Sepatu & Tas",
        icon: "👟",
        desc: "Sepatu sekolah dan tas berkualitas",
        category: "pendidikan",
        details: ["⏰ Buka: 08.00 - 19.00", "📍 Jl. Fashion No. 21", "💰 Mulai Rp 75.000"]
    },
    {
        name: "Barbershop Keren",
        icon: "💈",
        desc: "Potong rambut stylish untuk pelajar",
        category: "jasa",
        details: ["⏰ Buka: 09.00 - 20.00", "📍 Jl. Gaya No. 7", "💰 Rp 15.000 - 30.000"]
    },
    {
        name: "Toko Seragam Sekolah",
        icon: "🎽",
        desc: "Seragam lengkap dengan kualitas terbaik",
        category: "pendidikan",
        details: ["⏰ Buka: 08.00 - 17.00", "📍 Jl. Seragam No. 3", "💰 Paket Rp 200.000"]
    },
    {
        name: "Warung Es & Jajanan",
        icon: "🍧",
        desc: "Beragam es segar dan camilan enak",
        category: "makanan",
        details: ["⏰ Buka: 10.00 - 21.00", "📍 Samping Lapangan", "💰 Mulai Rp 5.000"]
    },
    {
        name: "Bengkel Sepeda",
        icon: "🚲",
        desc: "Service dan perbaikan sepeda cepat",
        category: "jasa",
        details: ["⏰ Buka: 07.00 - 18.00", "📍 Jl. Roda No. 15", "💰 Service Rp 10.000"]
    }
];

function renderUMKM(data = umkmData) {
    const grid = document.getElementById('umkmGrid');
    grid.innerHTML = '';
    
    data.forEach((umkm, index) => {
        const card = document.createElement('div');
        card.className = 'umkm-card';
        card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s backwards`;
        
        card.innerHTML = `
            <div class="umkm-image">${umkm.icon}</div>
            <div class="umkm-content">
                <h3>${umkm.name}</h3>
                <p>${umkm.desc}</p>
                <div class="umkm-details" id="details-${index}">
                    ${umkm.details.map(detail => `<span class="detail-tag">${detail}</span>`).join('')}
                </div>
                <button class="visit-btn" onclick="visitUMKM('${umkm.name}')">Kunjungi Sekarang</button>
            </div>
        `;

        card.addEventListener('click', function(e) {
            if (e.target.tagName !== 'BUTTON') {
                // Redirect to UMKM detail page
                window.location.href = `umkm-detail.html?id=${index}&name=${encodeURIComponent(umkm.name)}`;
            }
        });

        grid.appendChild(card);
    });
}

function filterCategory(category) {
    const filtered = umkmData.filter(umkm => umkm.category === category);
    renderUMKM(filtered);
    setTimeout(() => {
        document.getElementById('umkm').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function visitUMKM(name) {
    const umkm = umkmData.find(u => u.name === name);
    function slugify(str) {
        return str.toString().toLowerCase()
            .normalize('NFKD') // separate diacritics
            .replace(/[\u0300-\u036f]/g, '') // remove diacritics
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    if (umkm) {
        const link = umkm.link ? umkm.link : `${slugify(umkm.name)}.html`;
        window.location.href = link;
    } else {
        console.warn('UMKM not found:', name);
    }
}

function scrollToUMKM() {
    document.getElementById('umkm').scrollIntoView({ behavior: 'smooth' });
}

function openVideo() {
    alert('🎥 Video akan dibuka di tab baru!');
}

renderUMKM();


