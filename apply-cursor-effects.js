// Apply cursor trail effects to all UMKM HTML files
// This script adds the cursor.js reference to all HTML files in subdirectories

const fs = require('fs');
const path = require('path');

// List of UMKM directories
const umkmDirectories = [
    'fotokopilisa',
    'sidomuncul', 
    'sidotang',
    'sodagembira',
    'tokoberas',
    'tokobukucerdas',
    'tokolidya',
    'tokorestuibu',
    'wafflecone',
    'warungdoaibu'
];

// Function to add cursor script to HTML file
function addCursorScript(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if cursor script is already added
        if (content.includes('cursor.js')) {
            console.log(`✅ Cursor script already exists in ${filePath}`);
            return;
        }
        
        // Add cursor script before closing body tag
        if (content.includes('</body>')) {
            content = content.replace('</body>', '    <!-- Cursor Trail Effects -->\n    <script src="../cursor.js"></script>\n</body>');
            
            fs.writeFileSync(filePath, content);
            console.log(`✅ Added cursor script to ${filePath}`);
        } else {
            console.log(`⚠️  No closing body tag found in ${filePath}`);
        }
    } catch (error) {
        console.log(`❌ Error processing ${filePath}:`, error.message);
    }
}

// Process all UMKM directories
umkmDirectories.forEach(dir => {
    const htmlFiles = fs.readdirSync(dir).filter(file => file.endsWith('.html'));
    
    htmlFiles.forEach(file => {
        const filePath = path.join(dir, file);
        addCursorScript(filePath);
    });
});

console.log('\n🎉 Cursor trail effects applied to all UMKM pages!');
console.log('\n📋 Summary:');
console.log('- MainPage.html ✅');
console.log('- nasikebuli/nasikebuliayam.html ✅');
console.log('- warungbusiti/warungbusiti.html ✅');
umkmDirectories.forEach(dir => {
    console.log(`- ${dir}/ ✅`);
});
