// Cursor Trail Effect System for UMKM Website
// Creates colorful trail effects following mouse movement

class CursorTrail {
    constructor() {
        this.trails = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.colors = ['#f967fb', '#53bc28', '#6958d5', '#83f36e', '#fe8a2e', '#ff008a', '#60aed5'];
        this.maxTrails = 20;
        this.trailLife = 1000; // milliseconds
        
        this.init();
    }

    init() {
        // Create canvas for trail effects
        this.createCanvas();
        
        // Track mouse movement
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        
        // Handle touch for mobile
        document.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        
        // Start animation loop
        this.animate();
        
        // Add click effects
        this.addClickEffects();
    }

    createCanvas() {
        // Create overlay canvas
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '9999';
        this.canvas.style.opacity = '0.8';
        
        document.body.appendChild(this.canvas);
        
        // Set canvas size
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        
        // Get context
        this.ctx = this.canvas.getContext('2d');
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    handleMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        
        // Create new trail
        this.createTrail(e.clientX, e.clientY);
    }

    handleTouchMove(e) {
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            this.mouseX = touch.clientX;
            this.mouseY = touch.clientY;
            this.createTrail(touch.clientX, touch.clientY);
        }
    }

    createTrail(x, y) {
        const trail = {
            x: x,
            y: y,
            size: Math.random() * 15 + 5,
            color: this.getRandomColor(),
            alpha: 1,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: this.trailLife,
            created: Date.now()
        };
        
        this.trails.push(trail);
        
        // Limit trail count
        if (this.trails.length > this.maxTrails) {
            this.trails.shift();
        }
    }

    getRandomColor() {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    animate() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw trails
        const now = Date.now();
        this.trails = this.trails.filter(trail => {
            const age = now - trail.created;
            const lifePercent = 1 - (age / trail.life);
            
            if (lifePercent <= 0) return false;
            
            // Update position
            trail.x += trail.vx;
            trail.y += trail.vy;
            trail.alpha = lifePercent;
            trail.size *= 0.98; // Shrink over time
            
            // Draw trail
            this.drawTrail(trail);
            
            return true;
        });
        
        requestAnimationFrame(() => this.animate());
    }

    drawTrail(trail) {
        this.ctx.save();
        
        // Set glow effect
        this.ctx.shadowBlur = 20;
        this.ctx.shadowColor = trail.color;
        
        // Draw circle
        this.ctx.globalAlpha = trail.alpha;
        this.ctx.fillStyle = trail.color;
        this.ctx.beginPath();
        this.ctx.arc(trail.x, trail.y, trail.size, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Draw inner bright core
        this.ctx.globalAlpha = trail.alpha * 0.8;
        this.ctx.fillStyle = '#ffffff';
        this.ctx.beginPath();
        this.ctx.arc(trail.x, trail.y, trail.size * 0.3, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.restore();
    }

    addClickEffects() {
        document.addEventListener('click', (e) => {
            this.createClickBurst(e.clientX, e.clientY);
        });
    }

    createClickBurst(x, y) {
        // Create burst of particles
        for (let i = 0; i < 15; i++) {
            const angle = (Math.PI * 2 * i) / 15;
            const velocity = Math.random() * 5 + 3;
            
            const particle = {
                x: x,
                y: y,
                size: Math.random() * 8 + 4,
                color: this.getRandomColor(),
                alpha: 1,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                life: 800,
                created: Date.now()
            };
            
            this.trails.push(particle);
        }
        
        // Limit trail count
        if (this.trails.length > this.maxTrails * 2) {
            this.trails = this.trails.slice(-this.maxTrails);
        }
    }

    // Public methods for external control
    setColors(colors) {
        this.colors = colors;
    }

    setIntensity(intensity) {
        this.maxTrails = intensity;
    }

    destroy() {
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
        this.trails = [];
    }
}

// Initialize cursor trail when DOM is loaded
let cursorTrail = null;

function initCursorEffects() {
    // Only initialize if user prefers animations
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        cursorTrail = new CursorTrail();
        console.log('Cursor trail effects initialized! 🌟');
    }
}

// Control functions for external use
function randomColors(count) {
    const colors = ['#f967fb', '#53bc28', '#6958d5', '#83f36e', '#fe8a2e', '#ff008a', '#60aed5'];
    const selected = [];
    for (let i = 0; i < count; i++) {
        selected.push(colors[Math.floor(Math.random() * colors.length)]);
    }
    return selected;
}

// App object for external control
const app = {
    tubes: {
        colors: ["#f967fb", "#53bc28", "#6958d5"],
        lights: {
            intensity: 200,
            colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
        },
        
        setColors: function(colors) {
            if (cursorTrail) {
                cursorTrail.setColors(colors);
            }
        },
        
        setLightColors: function(colors) {
            if (cursorTrail) {
                cursorTrail.setColors(colors);
            }
        },
        
        setIntensity: function(intensity) {
            if (cursorTrail) {
                cursorTrail.setIntensity(intensity / 10);
            }
        }
    },
    
    // Toggle effects on/off
    toggleEffects: function() {
        if (cursorTrail) {
            cursorTrail.destroy();
            cursorTrail = null;
        } else {
            cursorTrail = new CursorTrail();
        }
    }
};

// Enhanced click handler
document.body.addEventListener('click', (e) => { 
    const colors = randomColors(3);
    const lightColors = randomColors(4);
    
    // Update trail colors
    if (cursorTrail) {
        cursorTrail.setColors(colors);
    }
    
    // Create additional burst effect
    if (cursorTrail) {
        cursorTrail.createClickBurst(e.clientX, e.clientY);
    }
    
    // Log for debugging
    console.log('Cursor colors updated:', colors, lightColors);
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for page to settle
    setTimeout(() => {
        initCursorEffects();
    }, 500);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause effects when page is not visible
        if (cursorTrail) {
            cursorTrail.destroy();
            cursorTrail = null;
        }
    } else {
        // Resume when page becomes visible
        setTimeout(() => {
            initCursorEffects();
        }, 100);
    }
});

// Export for global access
window.CursorTrail = CursorTrail;
window.app = app;