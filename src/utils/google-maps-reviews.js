// Google Maps Reviews Integration System
// Live ratings and reviews from Google Maps API

class GoogleMapsReviews {
    constructor() {
        this.apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your API key
        this.places = {
            'warungbusiti': {
                placeId: 'ChIJd8zQ8L9ZaS4R7v0xXqOeY7E', // Example Place ID
                name: 'Warung Makan Bu Siti'
            },
            'tokobukucerdas': {
                placeId: 'ChIJrXtQ8L9ZaS4R7v0xXqOeY7F',
                name: 'Toko Buku Cerdas'
            },
            'fotokopilisa': {
                placeId: 'ChIJrXtQ8L9ZaS4R7v0xXqOeY7G',
                name: 'Fotokopi & Print Kilat'
            },
            'sidomuncul': {
                placeId: 'ChIJrXtQ8L9ZaS4R7v0xXqOeY7H',
                name: 'Kedai Kopi Pelajar'
            },
            'sidotanguniita': {
                placeId: 'ChIJrXtQ8L9ZaS4R7v0xXqOeY7I',
                name: 'Laundry Express'
            },
            'sodagembira': {
                placeId: 'ChIJrXtQ8L9ZaS4R7v0xXqOeY7J',
                name: 'Toko Sepatu & Tas'
            },
            'tokoberaskaryapusaka': {
                placeId: 'ChIJrXtQ8L9ZaS4R7v0xXqOeY7K',
                name: 'Barbershop Keren'
            },
            'tokolidya': {
                placeId: 'ChIJrXtQ8L9ZaS4R7v0xXqOeY7L',
                name: 'Toko Seragam Sekolah'
            },
            'tokorestuibu': {
                placeId: 'ChIJrXtQ8L9ZaS4R7v0xXqOeY7M',
                name: 'Warung Es & Jajanan'
            },
            'wafflecone': {
                placeId: 'ChIJrXtQ8L9ZaS4R7v0xXqOeY7N',
                name: 'Bengkel Sepeda'
            },
            'warungdoaibu': {
                placeId: 'ChIJrXtQ8L9ZaS4R7v0xXqOeY7O',
                name: 'Warung Doa Ibu'
            }
        };
    }

    // Load Google Maps API
    loadGoogleMapsAPI() {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        
        return new Promise((resolve) => {
            script.onload = resolve;
        });
    }

    // Get place details including reviews
    async getPlaceDetails(placeId) {
        if (!window.google || !window.google.maps) {
            await this.loadGoogleMapsAPI();
        }

        const service = new google.maps.places.PlacesService(document.createElement('div'));
        
        return new Promise((resolve, reject) => {
            service.getDetails({
                placeId: placeId,
                fields: ['name', 'rating', 'user_ratings_total', 'reviews', 'formatted_address', 'formatted_phone_number', 'photos']
            }, (result, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    resolve(result);
                } else {
                    reject(new Error(`Place details failed: ${status}`));
                }
            });
        });
    }

    // Format reviews for display
    formatReviews(reviews) {
        return reviews.slice(0, 5).map(review => ({
            author_name: review.author_name,
            rating: review.rating,
            text: review.text,
            relative_time_description: review.relative_time_description,
            profile_photo_url: review.profile_photo_url,
            stars: '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)
        }));
    }

    // Update HTML with live Google Maps data
    async updateBusinessPage(businessKey) {
        try {
            const place = this.places[businessKey];
            if (!place) {
                console.error(`Business ${businessKey} not found`);
                return;
            }

            const details = await this.getPlaceDetails(place.placeId);
            const formattedReviews = this.formatReviews(details.reviews || []);

            // Update rating display
            this.updateRating(details);
            
            // Update reviews section
            this.updateReviews(formattedReviews);
            
            // Update business info
            this.updateBusinessInfo(details);
            
            // Update photos
            this.updatePhotos(details.photos || []);

        } catch (error) {
            console.error('Error updating business page:', error);
            this.showFallbackData();
        }
    }

    // Update rating display
    updateRating(details) {
        const ratingElement = document.querySelector('.rating-number');
        const reviewCountElement = document.querySelector('.rating-summary p');
        const starsElement = document.querySelector('.stars');

        if (ratingElement) {
            ratingElement.textContent = details.rating ? details.rating.toFixed(1) : '4.7';
        }
        
        if (reviewCountElement) {
            reviewCountElement.textContent = `Dari ${details.user_ratings_total || 127} ulasan (Google Maps)`;
        }
        
        if (starsElement && details.rating) {
            const fullStars = Math.floor(details.rating);
            starsElement.textContent = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
        }
    }

    // Update reviews section
    updateReviews(reviews) {
        const reviewsContainer = document.getElementById('reviewsContainer');
        if (!reviewsContainer) return;

        reviewsContainer.innerHTML = reviews.map((review, index) => `
            <div class="review-card google-review" style="animation: fadeInUp 0.6s ease ${index * 0.1}s backwards;">
                <div class="review-header">
                    <div class="reviewer-info">
                        <img src="${review.profile_photo_url}" alt="${review.author_name}" class="reviewer-avatar">
                        <div>
                            <div class="reviewer-name">${review.author_name}</div>
                            <div class="review-date">${review.relative_time_description}</div>
                            <div class="google-badge">
                                <i class="bi bi-google"></i> Google Maps Review
                            </div>
                        </div>
                    </div>
                    <div class="review-stars">${review.stars}</div>
                </div>
                <div class="review-text">${review.text}</div>
                <div class="review-actions">
                    <button class="action-btn" onclick="window.open('https://search.google.com/local/writereview?placeid=${this.places[getCurrentBusinessKey()].placeId}', '_blank')">
                        ✍️ Tulis Ulasan Google
                    </button>
                    <button class="action-btn" onclick="window.open('https://maps.google.com/?q=place_id:${this.places[getCurrentBusinessKey()].placeId}', '_blank')">
                        🗺️ Lihat di Google Maps
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Update business information
    updateBusinessInfo(details) {
        // Update address if available
        if (details.formatted_address) {
            const addressElements = document.querySelectorAll('[data-address]');
            addressElements.forEach(el => {
                el.textContent = details.formatted_address;
            });
        }

        // Update phone if available
        if (details.formatted_phone_number) {
            const phoneElements = document.querySelectorAll('[data-phone]');
            phoneElements.forEach(el => {
                el.href = `tel:${details.formatted_phone_number}`;
                el.textContent = details.formatted_phone_number;
            });
        }
    }

    // Update photos gallery
    updatePhotos(photos) {
        const photosContainer = document.getElementById('photosGallery');
        if (!photosContainer || photos.length === 0) return;

        photosContainer.innerHTML = `
            <div class="photos-section">
                <h3>📸 Foto dari Google Maps</h3>
                <div class="photos-grid">
                    ${photos.slice(0, 6).map(photo => `
                        <img src="${photo.getUrl({ maxWidth: 300, maxHeight: 200 })}" 
                             alt="Business photo" 
                             class="business-photo"
                             onclick="window.open('${photo.getUrl()}', '_blank')">
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Show fallback data if API fails
    showFallbackData() {
        const ratingElement = document.querySelector('.rating-number');
        const reviewCountElement = document.querySelector('.rating-summary p');
        
        if (ratingElement) ratingElement.textContent = '4.7';
        if (reviewCountElement) reviewCountElement.textContent = 'Dari 127 ulasan (Data lokal)';
    }

    // Initialize all business pages
    async initializeAllPages() {
        const currentPath = window.location.pathname;
        const businessKey = this.getBusinessKeyFromPath(currentPath);
        
        if (businessKey) {
            await this.updateBusinessPage(businessKey);
        }
    }

    // Extract business key from URL path
    getBusinessKeyFromPath(path) {
        const businessKeys = Object.keys(this.places);
        return businessKeys.find(key => path.includes(key));
    }
}

// Helper function to get current business key
function getCurrentBusinessKey() {
    const path = window.location.pathname;
    const gmaps = new GoogleMapsReviews();
    return gmaps.getBusinessKeyFromPath(path);
}

// CSS for Google Maps reviews integration
const googleReviewsCSS = `
.google-review {
    border-left: 3px solid #4285f4;
}

.google-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    background: rgba(66, 133, 244, 0.1);
    color: #4285f4;
    padding: 0.2rem 0.5rem;
    border-radius: 10px;
    font-size: 0.8rem;
    margin-top: 0.3rem;
}

.reviewer-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}

.photos-section {
    margin: 2rem 0;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 15px;
}

.photos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.business-photo {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s;
}

.business-photo:hover {
    transform: scale(1.05);
}

.loading-review {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #888;
    font-style: italic;
}

.loading-review::before {
    content: "⏳";
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`;

// Inject CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = googleReviewsCSS;
document.head.appendChild(styleSheet);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    const gmaps = new GoogleMapsReviews();
    
    // Show loading state
    const reviewsContainer = document.getElementById('reviewsContainer');
    if (reviewsContainer) {
        reviewsContainer.innerHTML = '<div class="loading-review">Memuat ulasan dari Google Maps...</div>';
    }
    
    // Load live reviews
    await gmaps.initializeAllPages();
});

// Export for use in other files
window.GoogleMapsReviews = GoogleMapsReviews;
