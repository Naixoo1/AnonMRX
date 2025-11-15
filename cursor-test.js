// Cursor Test JavaScript - Interactive cursor effects and animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cursor effects
    initializeCursorEffects();
    setupInteractiveElements();
    addCursorAnimations();
    setupCursorTrails();
    initializeCursorCustomization();
    setupPerformanceMonitoring();
});

function initializeCursorEffects() {
    // Create custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    document.body.appendChild(cursorFollower);
    
    // Add cursor styles
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        body {
            cursor: none !important;
        }
        
        .custom-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            mix-blend-mode: difference;
        }
        
        .cursor-follower {
            position: fixed;
            width: 40px;
            height: 40px;
            border: 2px solid rgba(102, 126, 234, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            transition: transform 0.3s ease, opacity 0.3s ease;
            mix-blend-mode: difference;
        }
        
        .custom-cursor.hover {
            transform: scale(2);
            background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
        }
        
        .cursor-follower.hover {
            transform: scale(1.5);
            border-color: rgba(255, 105, 180, 0.8);
        }
        
        .custom-cursor.click {
            transform: scale(0.8);
        }
        
        .cursor-follower.click {
            transform: scale(0.6);
            opacity: 0.5;
        }
        
        .cursor-trail {
            position: fixed;
            width: 10px;
            height: 10px;
            background: rgba(102, 126, 234, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9997;
            animation: fadeOut 1s ease forwards;
        }
        
        @keyframes fadeOut {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0);
            }
        }
        
        .cursor-text {
            position: fixed;
            color: #667eea;
            font-weight: bold;
            font-size: 14px;
            pointer-events: none;
            z-index: 9996;
            background: rgba(10, 10, 10, 0.8);
            padding: 5px 10px;
            border-radius: 5px;
            white-space: nowrap;
            animation: fadeInOut 2s ease forwards;
        }
        
        @keyframes fadeInOut {
            0% {
                opacity: 0;
                transform: translateY(10px);
            }
            20% {
                opacity: 1;
                transform: translateY(0);
            }
            80% {
                opacity: 1;
                transform: translateY(0);
            }
            100% {
                opacity: 0;
                transform: translateY(-10px);
            }
        }
        
        .ripple-effect {
            position: fixed;
            border: 2px solid rgba(102, 126, 234, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9995;
            animation: ripple 0.6s ease-out forwards;
        }
        
        @keyframes ripple {
            0% {
                width: 0;
                height: 0;
                opacity: 1;
            }
            100% {
                width: 100px;
                height: 100px;
                opacity: 0;
            }
        }
        
        .particle {
            position: fixed;
            width: 4px;
            height: 4px;
            background: #667eea;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9994;
            animation: particle 1s ease-out forwards;
        }
        
        @keyframes particle {
            0% {
                opacity: 1;
                transform: translate(0, 0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(var(--tx), var(--ty)) scale(0);
            }
        }
    `;
    document.head.appendChild(cursorStyle);
    
    // Track mouse movement
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update cursor position immediately
        cursor.style.left = mouseX - 10 + 'px';
        cursor.style.top = mouseY - 10 + 'px';
        
        // Check for hoverable elements
        checkHoverableElements(e);
    });
    
    // Smooth follower animation
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX - 20 + 'px';
        cursorFollower.style.top = followerY - 20 + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
    
    // Handle click effects
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
        cursorFollower.classList.add('click');
        createRippleEffect(mouseX, mouseY);
        createParticles(mouseX, mouseY);
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
        cursorFollower.classList.remove('click');
    });
    
    // Handle cursor enter/leave
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorFollower.style.opacity = '0';
    });
}

function setupInteractiveElements() {
    // Add interactive cursor effects to various elements
    const interactiveSelectors = [
        'button', 'a', '.btn', '.card', '.umkm-card', 
        '.product-card', '.category-card', '.featured-card',
        'input', 'textarea', 'select', '.nav-link'
    ];
    
    interactiveSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.addEventListener('mouseenter', function() {
                document.querySelector('.custom-cursor').classList.add('hover');
                document.querySelector('.cursor-follower').classList.add('hover');
                showCursorText(this.dataset.cursorText || getDefaultText(this));
            });
            
            element.addEventListener('mouseleave', function() {
                document.querySelector('.custom-cursor').classList.remove('hover');
                document.querySelector('.cursor-follower').classList.remove('hover');
            });
        });
    });
}

function getDefaultText(element) {
    const tagName = element.tagName.toLowerCase();
    const className = element.className;
    
    if (tagName === 'button' || className.includes('btn')) {
        return 'Klik';
    } else if (tagName === 'a') {
        return 'Link';
    } else if (className.includes('card')) {
        return 'Lihat Detail';
    } else if (tagName === 'input' || tagName === 'textarea') {
        return 'Input';
    } else if (tagName === 'select') {
        return 'Pilih';
    } else {
        return 'Interaksi';
    }
}

function showCursorText(text) {
    const existingText = document.querySelector('.cursor-text');
    if (existingText) {
        existingText.remove();
    }
    
    const cursorText = document.createElement('div');
    cursorText.className = 'cursor-text';
    cursorText.textContent = text;
    cursorText.style.left = (mouseX + 20) + 'px';
    cursorText.style.top = (mouseY - 30) + 'px';
    
    document.body.appendChild(cursorText);
    
    setTimeout(() => {
        cursorText.remove();
    }, 2000);
}

function setupCursorTrails() {
    let trailCounter = 0;
    const maxTrails = 20;
    
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.9) { // Create trail occasionally
            createTrail(e.clientX, e.clientY);
        }
    });
    
    function createTrail(x, y) {
        if (trailCounter >= maxTrails) return;
        
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = (x - 5) + 'px';
        trail.style.top = (y - 5) + 'px';
        
        document.body.appendChild(trail);
        trailCounter++;
        
        setTimeout(() => {
            trail.remove();
            trailCounter--;
        }, 1000);
    }
}

function createRippleEffect(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.left = (x - 50) + 'px';
    ripple.style.top = (y - 50) + 'px';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function createParticles(x, y) {
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        // Random direction
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 50 + Math.random() * 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        // Random color
        const colors = ['#667eea', '#764ba2', '#ff69b4', '#ff1493', '#ffd700'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

function addCursorAnimations() {
    // Add cursor animation controls
    const controlsSection = document.createElement('section');
    controlsSection.className = 'cursor-controls';
    controlsSection.innerHTML = `
        <div class="container">
            <h2>🎯 Cursor Test Controls</h2>
            <div class="controls-grid">
                <div class="control-group">
                    <h3>Cursor Effects</h3>
                    <div class="control-buttons">
                        <button onclick="toggleTrails()" class="control-btn">Toggle Trails</button>
                        <button onclick="toggleParticles()" class="control-btn">Toggle Particles</button>
                        <button onclick="toggleRipple()" class="control-btn">Toggle Ripple</button>
                        <button onclick="toggleText()" class="control-btn">Toggle Text</button>
                    </div>
                </div>
                
                <div class="control-group">
                    <h3>Cursor Style</h3>
                    <div class="control-buttons">
                        <button onclick="changeCursorStyle('default')" class="control-btn">Default</button>
                        <button onclick="changeCursorStyle('neon')" class="control-btn">Neon</button>
                        <button onclick="changeCursorStyle('minimal')" class="control-btn">Minimal</button>
                        <button onclick="changeCursorStyle('rainbow')" class="control-btn">Rainbow</button>
                    </div>
                </div>
                
                <div class="control-group">
                    <h3>Speed Settings</h3>
                    <div class="speed-controls">
                        <label>Cursor Speed:</label>
                        <input type="range" id="cursorSpeed" min="0.05" max="0.3" step="0.05" value="0.1">
                        <span id="speedValue">0.1</span>
                    </div>
                </div>
                
                <div class="control-group">
                    <h3>Performance</h3>
                    <div class="performance-info">
                        <div class="stat">FPS: <span id="fps">60</span></div>
                        <div class="stat">Active Trails: <span id="activeTrails">0</span></div>
                        <div class="stat">Active Particles: <span id="activeParticles">0</span></div>
                    </div>
                </div>
            </div>
            
            <div class="test-area">
                <h3>🧪 Test Area</h3>
                <p>Move your cursor over different elements to see the effects:</p>
                <div class="test-elements">
                    <button class="test-btn">Button</button>
                    <a href="#" class="test-link">Link</a>
                    <div class="test-card">Card</div>
                    <input type="text" class="test-input" placeholder="Input field">
                    <select class="test-select">
                        <option>Dropdown</option>
                    </select>
                </div>
            </div>
        </div>
    `;
    
    // Add controls styles
    const controlsStyle = document.createElement('style');
    controlsStyle.textContent = `
        .cursor-controls {
            padding: 3rem 2rem;
            background: rgba(10, 10, 10, 0.8);
            margin: 2rem 0;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
        }
        .cursor-controls h2 {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 2rem;
            color: #fff;
        }
        .controls-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }
        .control-group {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 1.5rem;
        }
        .control-group h3 {
            color: #667eea;
            margin-bottom: 1rem;
        }
        .control-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        .control-btn {
            padding: 0.8rem 1rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: none;
            border-radius: 8px;
            color: white;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 0.9rem;
        }
        .control-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        .speed-controls {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .speed-controls label {
            color: #aaa;
        }
        .speed-controls input {
            width: 100%;
        }
        .performance-info {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .stat {
            color: #ccc;
            font-size: 0.9rem;
        }
        .stat span {
            color: #667eea;
            font-weight: bold;
        }
        .test-area {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 2rem;
        }
        .test-area h3 {
            color: #fff;
            margin-bottom: 1rem;
        }
        .test-area p {
            color: #aaa;
            margin-bottom: 2rem;
        }
        .test-elements {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
        }
        .test-btn {
            padding: 1rem 2rem;
            background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
            border: none;
            border-radius: 8px;
            color: white;
            cursor: pointer;
        }
        .test-link {
            padding: 1rem 2rem;
            background: rgba(102, 126, 234, 0.2);
            border: 1px solid rgba(102, 126, 234, 0.3);
            border-radius: 8px;
            color: #667eea;
            text-decoration: none;
        }
        .test-card {
            padding: 1rem 2rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            color: #fff;
        }
        .test-input {
            padding: 1rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            color: white;
        }
        .test-select {
            padding: 1rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            color: white;
        }
        
        /* Cursor style variations */
        .custom-cursor.neon {
            background: radial-gradient(circle, #00ff00 0%, #00ff00 50%, transparent 70%);
            box-shadow: 0 0 20px #00ff00, 0 0 40px #00ff00, 0 0 60px #00ff00;
        }
        
        .custom-cursor.minimal {
            background: transparent;
            border: 2px solid #667eea;
            width: 16px;
            height: 16px;
        }
        
        .custom-cursor.rainbow {
            background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
            animation: rainbow 2s linear infinite;
        }
        
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(controlsStyle);
    
    document.body.appendChild(controlsSection);
    
    // Setup speed control
    const speedSlider = document.getElementById('cursorSpeed');
    const speedValue = document.getElementById('speedValue');
    
    speedSlider.addEventListener('input', function() {
        speedValue.textContent = this.value;
        updateCursorSpeed(this.value);
    });
}

function initializeCursorCustomization() {
    // State management for effects
    window.cursorEffects = {
        trails: true,
        particles: true,
        ripple: true,
        text: true,
        style: 'default'
    };
}

function toggleTrails() {
    window.cursorEffects.trails = !window.cursorEffects.trails;
    showNotification(`Trails: ${window.cursorEffects.trails ? 'ON' : 'OFF'}`);
}

function toggleParticles() {
    window.cursorEffects.particles = !window.cursorEffects.particles;
    showNotification(`Particles: ${window.cursorEffects.particles ? 'ON' : 'OFF'}`);
}

function toggleRipple() {
    window.cursorEffects.ripple = !window.cursorEffects.ripple;
    showNotification(`Ripple: ${window.cursorEffects.ripple ? 'ON' : 'OFF'}`);
}

function toggleText() {
    window.cursorEffects.text = !window.cursorEffects.text;
    showNotification(`Text: ${window.cursorEffects.text ? 'ON' : 'OFF'}`);
}

function changeCursorStyle(style) {
    const cursor = document.querySelector('.custom-cursor');
    cursor.className = 'custom-cursor ' + style;
    window.cursorEffects.style = style;
    showNotification(`Cursor Style: ${style}`);
}

function updateCursorSpeed(speed) {
    // Update cursor animation speed
    const follower = document.querySelector('.cursor-follower');
    follower.style.transition = `transform ${speed}s ease, opacity 0.3s ease`;
}

function setupPerformanceMonitoring() {
    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 60;
    
    function updatePerformance() {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime >= lastTime + 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;
            
            // Update display
            const fpsDisplay = document.getElementById('fps');
            if (fpsDisplay) {
                fpsDisplay.textContent = fps;
            }
        }
        
        // Update active elements count
        const trailsCount = document.querySelectorAll('.cursor-trail').length;
        const particlesCount = document.querySelectorAll('.particle').length;
        
        const trailsDisplay = document.getElementById('activeTrails');
        const particlesDisplay = document.getElementById('activeParticles');
        
        if (trailsDisplay) trailsDisplay.textContent = trailsCount;
        if (particlesDisplay) particlesDisplay.textContent = particlesCount;
        
        requestAnimationFrame(updatePerformance);
    }
    
    updatePerformance();
}

function checkHoverableElements(e) {
    const element = document.elementFromPoint(e.clientX, e.clientY);
    if (!element) return;
    
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.cursor-follower');
    
    // Check if element should trigger hover effect
    const isHoverable = element.matches('button, a, .btn, .card, .umkm-card, .product-card, .category-card, .featured-card, input, textarea, select, .nav-link, .control-btn, .test-btn, .test-link, .test-card, .test-input, .test-select');
    
    if (isHoverable) {
        if (!cursor.classList.contains('hover')) {
            cursor.classList.add('hover');
            follower.classList.add('hover');
        }
    } else {
        if (cursor.classList.contains('hover')) {
            cursor.classList.remove('hover');
            follower.classList.remove('hover');
        }
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cursor-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
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
            notification.remove();
        }, 300);
    }, 2000);
}

// Export functions for global access
window.cursorTestFunctions = {
    toggleTrails,
    toggleParticles,
    toggleRipple,
    toggleText,
    changeCursorStyle,
    updateCursorSpeed,
    showNotification
};
