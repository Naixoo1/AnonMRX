# Cursor Trail Effects Setup Guide

## 🌟 Overview

The cursor trail effect creates colorful, glowing particles that follow your mouse movement on the UMKM website. It includes click burst effects and customizable colors.

## 📁 Files

- **`cursor.js`** - Main cursor trail effect system
- **`cursor-test.html`** - Test page to verify effects work

## 🎯 Features

### ✅ **Mouse Trail Effects**
- Colorful particles follow mouse movement
- Glowing effect with shadow blur
- Smooth fade-out animations
- Touch support for mobile devices

### ✅ **Click Burst Effects**
- Explosive particle burst on click
- 15 particles in circular pattern
- Random colors and velocities
- Satisfying visual feedback

### ✅ **Customization Options**
- Change trail colors dynamically
- Adjust intensity/trail count
- Toggle effects on/off
- Keyboard shortcuts support

### ✅ **Performance Optimized**
- Automatic cleanup of old particles
- Pause when page is not visible
- Respect prefers-reduced-motion setting
- Efficient canvas rendering

## 🔧 Installation

### **Step 1: Include the Script**
Add this to your HTML files (before closing `</body>` tag):
```html
<script src="cursor.js"></script>
```

### **Step 2: Auto-Initialization**
The script automatically initializes when the page loads. No additional setup needed!

### **Step 3: Test the Effects**
Open `cursor-test.html` in your browser to verify everything works.

## 🎮 Control Options

### **JavaScript Control**
```javascript
// Change colors
app.tubes.setColors(['#ff6b6b', '#4ecdc4', '#45b7d1']);

// Change intensity (10-50)
app.tubes.setIntensity(30);

// Toggle effects on/off
app.toggleEffects();
```

### **Keyboard Shortcuts**
- **C** - Change colors
- **I** - Change intensity  
- **T** - Toggle effects
- **Space** - Test burst effect

### **Click Events**
The system automatically responds to clicks with burst effects and color changes.

## 🎨 Customization

### **Color Themes**
```javascript
// Default colors
const colors = ['#f967fb', '#53bc28', '#6958d5', '#83f36e', '#fe8a2e', '#ff008a', '#60aed5'];

// Custom themes
const neonColors = ['#ff00ff', '#00ffff', '#ffff00', '#ff00aa', '#00ff00'];
const pastelColors = ['#ffb3ba', '#bae1ff', '#ffffba', '#baffc9', '#ffdfba'];
```

### **Effect Parameters**
```javascript
// In cursor.js, modify these values:
this.maxTrails = 20;        // Number of trail particles
this.trailLife = 1000;      // Particle lifetime (ms)
this.colors = [...];        // Available colors
```

## 📱 Mobile Support

The cursor trail automatically adapts to touch devices:
- Touch movement creates trails
- Touch taps create burst effects
- Optimized for mobile performance

## 🔧 Troubleshooting

### **Effects Not Showing**
1. Check browser console for errors
2. Ensure `cursor.js` is loaded correctly
3. Test with `cursor-test.html` first
4. Check if JavaScript is enabled

### **Performance Issues**
1. Reduce `maxTrails` value
2. Decrease `trailLife` duration
3. Check if other scripts are conflicting

### **Not Working on Mobile**
1. Ensure touch events are enabled
2. Check mobile browser compatibility
3. Test with touch gestures

## 🌐 Browser Compatibility

### **Supported Browsers**
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

### **Required Features**
- Canvas API support
- RequestAnimationFrame
- ES6 Classes (modern browsers)

## 🚀 Integration with UMKM Website

### **Add to Main Page**
```html
<!-- In MainPage.html -->
<script src="cursor.js"></script>
```

### **Add to Detail Pages**
```html
<!-- In all UMKM detail pages -->
<script src="cursor.js"></script>
```

### **React Integration**
```javascript
// In your React component
useEffect(() => {
    const script = document.createElement('script');
    script.src = '/cursor.js';
    document.body.appendChild(script);
    
    return () => {
        // Cleanup if needed
        if (window.app) {
            window.app.toggleEffects(); // Turn off
        }
    };
}, []);
```

## 🎯 Best Practices

### **Performance Tips**
1. Use reasonable trail counts (10-30)
2. Set appropriate lifetime (500-2000ms)
3. Clean up on page unload
4. Respect accessibility preferences

### **User Experience**
1. Don't overuse effects
2. Ensure they don't interfere with content
3. Provide option to disable
4. Test on various devices

### **Accessibility**
- Automatically disabled for `prefers-reduced-motion`
- Doesn't interfere with screen readers
- No keyboard navigation impact

## 🔍 Debug Mode

Add this to test and debug:
```javascript
// Enable debug logging
window.cursorTrail.debug = true;

// Check current status
console.log('Active trails:', window.cursorTrail.trails.length);
console.log('Current colors:', window.cursorTrail.colors);
```

## 🎉 Ready to Use!

Once installed:
1. Mouse movement creates colorful trails
2. Clicks create burst effects
3. Colors change dynamically
4. Works on desktop and mobile
5. Performance optimized

Your UMKM website will have impressive visual effects that engage users! 🌟
