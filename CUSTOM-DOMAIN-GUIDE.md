# Custom .com Domain Setup Guide

## 🌐 Get Your Own .com Domain

### Option 1: Buy a New Domain ($10-15/year)

#### **Recommended Domain Registrars:**
1. **Namecheap** - Best for beginners (~$10/year)
2. **GoDaddy** - Popular choice (~$15/year)  
3. **Cloudflare** - Great performance (~$10/year)
4. **Google Domains** - Simple interface (~$12/year)

#### **Perfect Domains for UMKM Karawang:**
- `umkm-karawang.com` - Professional & clear
- `karawang-umkm.com` - Alternative spelling
- `ukmkarawang.com` - Short & memorable
- `umkmkarawang.com` - No hyphens

### Option 2: Free Subdomain Alternatives

If you want a free professional-looking URL:
- `umkm-karawang.github.io` (GitHub Pages)
- `umkm-karawang.netlify.app` (Netlify)
- `umkm-karawang.vercel.app` (Vercel)

## 🛠 Setup Steps for .com Domain

### Step 1: Purchase Your Domain
1. Go to Namecheap/GoDaddy/Cloudflare
2. Search for your desired domain
3. Complete purchase (usually $10-15/year)
4. Get access to domain DNS settings

### Step 2: Connect to Netlify (Easiest)

#### **Method A: Netlify DNS (Recommended)**
1. Go to your Netlify dashboard
2. Site settings → Domain management → Add custom domain
3. Enter your domain: `umkm-karawang.com`
4. Netlify will give you nameservers
5. Update nameservers at your domain registrar

#### **Method B: External DNS**
1. Add domain in Netlify settings
2. Netlify will show you DNS records
3. Add these records at your domain registrar:
   ```
   Type: CNAME
   Name: @
   Value: your-site.netlify.app
   
   Type: CNAME  
   Name: www
   Value: your-site.netlify.app
   ```

### Step 3: SSL Certificate (Automatic)
- Netlify automatically provides free SSL
- HTTPS will work immediately
- No additional setup needed

## 🚀 Alternative: GitHub Pages + Custom Domain

### Setup Steps:
1. Buy your domain at any registrar
2. Go to GitHub repository → Settings → Pages
3. Add your custom domain
4. Create `CNAME` file in your repository
5. Update DNS records at your registrar

## 💰 Cost Breakdown

| Option | Domain Cost | Hosting | Total/Year |
|--------|-------------|---------|------------|
| Netlify + .com | $10-15 | Free | $10-15 |
| GitHub Pages + .com | $10-15 | Free | $10-15 |
| Vercel + .com | $10-15 | Free | $10-15 |
| Netlify subdomain | Free | Free | $0 |

## ⚡ Quick Setup (15 minutes)

### **Fastest Method - Netlify:**
1. Buy domain at Namecheap.com
2. Go to Netlify → Domain settings
3. Add `umkm-karawang.com`
4. Update nameservers to Netlify's
5. Wait 5-10 minutes for propagation
6. Your site is live at your .com domain!

## 🎯 Recommended Setup

**For UMKM Karawang, I recommend:**
- **Domain:** `umkm-karawang.com` (professional & clear)
- **Registrar:** Namecheap (easy DNS management)
- **Hosting:** Netlify (free, fast, reliable)
- **Total cost:** ~$12/year

## 📱 Mobile & SEO Benefits

**With your own .com domain:**
- Better Google ranking
- Professional appearance
- Easy to remember & share
- Brand recognition
- Email addresses (info@umkm-karawang.com)

## 🔧 DNS Configuration Example

**At your domain registrar:**
```
Nameservers:
  dns1.p04.nsone.net
  dns2.p04.nsone.net
  dns3.p04.nsone.net
  dns4.p04.nsone.net
```

**Or DNS records:**
```
Type  Name    Value
A     @       75.2.60.5
A     @       52.2.172.241
CNAME www     umkm-karawang.netlify.app
```

## 🎉 After Setup

Once configured:
- Your site works at `https://umkm-karawang.com`
- Automatic HTTPS/SSL certificate
- Free hosting forever
- Professional email possible
- Better SEO ranking

Your UMKM website will look much more professional with a .com domain!
