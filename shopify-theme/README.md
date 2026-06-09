# STAL Shopify Theme

A complete Shopify theme conversion of the STAL premium e-commerce platform. Brutalist minimalism meets functional precision—18/10 stainless steel cutlery with sharp geometry, cyan accents, and archive-ready design.

**Store:** [stal-8774.myshopify.com](https://stal-8774.myshopify.com)  
**Status:** Ready for upload & configuration

---

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Theme Structure](#theme-structure)
- [Features](#features)
- [Design System](#design-system)
- [Setup Instructions](#setup-instructions)
- [Customization](#customization)
- [Product Import](#product-import)
- [Known Limitations](#known-limitations)
- [Next Steps](#next-steps)

---

## 🚀 Quick Start

1. **Download this theme** → Zip the entire directory
2. **Login to Shopify Admin** → `stal-8774.myshopify.com/admin`
3. **Upload theme** → Sales Channels → Online Store → Themes → Add Theme → Upload ZIP
4. **Configure products** → Import sample products or create your own
5. **Customize colors** → Theme Settings → Colors (all configurable via Shopify settings)
6. **Go live** → Publish theme

---

## 📁 Theme Structure

```
stal-shopify-theme/
├── theme.json                    # Theme metadata & settings
│
├── templates/                    # Page templates
│   ├── layout.liquid             # Master layout (header, footer, globals)
│   ├── index.liquid              # Homepage
│   ├── product.liquid            # Product detail page
│   ├── collection.liquid         # Shop / collection pages
│   └── 404.liquid                # Not found page (optional)
│
├── sections/                     # Reusable components
│   ├── header.liquid             # Navigation & branding
│   ├── hero.liquid               # Homepage hero section
│   ├── featured-collection.liquid # Featured products carousel
│   ├── product-card.liquid       # Individual product card component
│   ├── trust-section.liquid      # Trust/warranty section
│   ├── newsletter.liquid         # Email subscription form
│   └── footer.liquid             # Footer with links & socials
│
├── assets/                       # Static resources
│   ├── base.css                  # Core styles, resets, utilities
│   ├── theme.css                 # STAL design system & components
│   └── theme.js                  # Interactive features (cart, variants, etc.)
│
├── config/                       # Shopify configuration
│   └── settings_schema.json      # Theme customization settings
│
├── locales/                      # Language strings
│   └── en.default.json           # English translations
│
├── data/                         # Sample data
│   └── sample-products.json      # 12 sample products (cutlery)
│
└── README.md                     # This file
```

---

## ✨ Features

### Homepage
- **Hero section** with brutalist design, cyan accents, fracture overlays
- **Scroll-triggered animations** with perspective transforms
- **Featured collection** (3-column grid with hover effects)
- **Trust section** (material specs, warranty, shipping, care instructions)
- **Newsletter signup** with email validation

### Shop / Collection
- **Product grid** (1 col mobile, 2 col tablet, 3 col desktop)
- **Sidebar filters** (price, type, material)
- **Sorting options** (recommended, price, newest)
- **Pagination** (12 products per page, configurable)
- **Product cards** with iridescent overlay & shimmer effects

### Product Detail
- **Image gallery** with thumbnails & lightbox
- **360° viewer placeholder** (ready for Three.js integration)
- **Product variants** (color, size, finish options)
- **Quantity selector** (±/input)
- **Trust badges** (free shipping, returns, warranty)
- **Specifications section** (material, weight, care)
- **Related products** (3-column grid)

### Design Elements
- **Sharp transitions** (all 0s duration per STAL spec)
- **Iridescent gradients** on hover (cyan → blue at 0-10% opacity)
- **Blade shimmer** effect on product cards
- **Digital grain texture** overlay (SVG, 0.02% opacity)
- **Monochromatic palette** with 10% cyan accents
- **Responsive typography** (5 breakpoints)

---

## 🎨 Design System

### Colors

```
Neutral (90%)
├── neutral-50:    #FAFAF9  (page background)
├── neutral-900:   #1C1917  (text)
├── neutral-200:   #E7E5E4  (borders)
└── neutral-600:   #57534E  (secondary text)

Stalhrim Accents (10%)
├── cyan-500:      #29B6F6  (primary interactive)
├── cyan-600:      #039BE5  (hover states)
└── frost-300:     #BCCCDC  (subtle backgrounds)
```

**Customize in Shopify:**
- Theme Settings → Colors
- All colors are configurable without touching code

### Typography

```
Headings:
├── font:      UI Monospace, system fonts
├── weight:    700 (bold)
├── spacing:   -0.02em (tight)
└── scale:     H1: 60px, H2: 48px, H3: 36px...

Body:
├── font:      SF Mono, Monaco, Inconsolata
├── size:      16px base
├── weight:    400 (regular)
└── spacing:   -0.02em (tight)
```

**Customize in Shopify:**
- Theme Settings → Typography
- Font picker, size ranges all configurable

### Effects

```
Sharp Edge:
└── Left + top borders for brutalist shadow

Glass Frost:
├── backdrop-filter: blur(10px)
├── background: rgba(188, 204, 220, 0.1)
└── border: 1px solid rgba(231, 229, 228, 0.2)

Iridescent Overlay:
├── Gradient: cyan-500 → blue at 0-10% opacity
└── Triggers on element hover

Blade Shimmer:
├── Left-to-right gradient shine
└── 0.6s animation on hover

Digital Grain:
├── SVG noise filter at 0.02% opacity
└── Subtle texture overlay
```

---

## 📲 Setup Instructions

### 1. **Upload Theme to Shopify**

```
Store: stal-8774.myshopify.com
Step 1: Log in to Shopify Admin
Step 2: Go to Sales Channels → Online Store → Themes
Step 3: Click "Add Theme" → Upload ZIP
Step 4: Wait for processing (2-5 minutes)
Step 5: Click "Customize" to preview
```

### 2. **Configure Basic Settings**

```
Theme Settings → General
├── [ ] Update site title (if needed)
└── [ ] Update tagline/description

Theme Settings → Colors
├── [ ] Background color (default: #FAFAF9)
├── [ ] Text color (default: #1C1917)
├── [ ] Primary accent (default: #29B6F6)
└── [ ] Border color (default: #E7E5E4)

Theme Settings → Header
├── [ ] Update logo text (currently "STAL")
└── [ ] Enable search bar (optional)

Theme Settings → Footer
├── [ ] Update copyright text
└── [ ] Select footer menu
```

### 3. **Import Products**

**Option A: Manual Upload**
```
Shopify Admin → Products → Add Product
├── [ ] Title
├── [ ] Description
├── [ ] Price
├── [ ] Category/Type
├── [ ] Images (ideally 4+ per product)
└── [ ] Collections
```

**Option B: Bulk Import (Recommended)**
```
1. Download sample products CSV from this theme:
   └── data/sample-products.json (convert to CSV)
   
2. In Shopify Admin:
   └── Products → Import → Upload CSV
   
3. Map columns:
   ├── Handle → Handle
   ├── Title → Title
   ├── Price → Price
   ├── Type → Type
   ├── Description → Description
   └── Material → Metafield: custom.specifications
   
4. Click "Import"
```

See [Product Import Guide](#product-import) below for details.

### 4. **Add Product Images**

The theme expects product images in this order:
1. **Main product image** (featured)
2-4. **Thumbnail images** (gallery)

To add images to products:
```
Shopify Admin → Products → [Product Name]
├── [ ] Upload main image
├── [ ] Upload up to 3 additional images
└── [ ] Set featured image (shows on collection grid)
```

### 5. **Configure Collections**

```
Shopify Admin → Products → Collections
├── Create "All Products" (auto-populated)
├── Create "Flatware" (type: Flatware)
├── Create "Serving" (type: Serving)
├── Create "Specialty" (type: Specialty)
└── Create "Sets" (type: Sets)
```

### 6. **Customize Homepage**

```
Theme Settings → Homepage
├── [ ] Update hero title
├── [ ] Update hero subtitle
├── [ ] Select featured collection
└── [ ] Customize featured items
```

### 7. **Test & Launch**

```
Before going live:
├── [ ] Test homepage on mobile/tablet/desktop
├── [ ] Test product page (variants, add to cart)
├── [ ] Test collection page (filters, sorting)
├── [ ] Test cart functionality
├── [ ] Test newsletter signup
├── [ ] Check images load properly
├── [ ] Verify colors match brand
└── [ ] Test on different browsers
```

---

## 🎯 Customization

### Change Primary Color

```liquid
<!-- Option 1: Via Shopify Admin (Easiest) -->
Theme Settings → Colors → Primary Accent → Change #29B6F6 to your color

<!-- Option 2: Manually in theme.json -->
{
  "settings": {
    "color_scheme_accent_1": "#YOUR_HEX_CODE"
  }
}

<!-- Option 3: CSS override (advanced) -->
assets/theme.css → Modify --color-accent variable
```

### Add Custom Section

```liquid
<!-- Create new file: sections/my-section.liquid -->
<section>
  <h2>{{ section.settings.title }}</h2>
</section>

{% schema %}
{
  "name": "My Section",
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Title"
    }
  ]
}
{% endschema %}

<!-- Add to layout.liquid -->
{% section 'my-section' %}
```

### Customize Product Specifications

```liquid
<!-- Edit: templates/product.liquid line ~270 -->
{% if product.metafields.custom.specifications %}
  <!-- Product specs are pulled from metafield -->
{% endif %}

<!-- To set metafield on products, use Shopify API or admin UI -->
```

### Add Analytics

```liquid
<!-- Edit: templates/layout.liquid -->
<!-- Before closing </body> tag, add your tracking code -->
<script>
  // Google Analytics, Hotjar, Segment, etc.
</script>
```

---

## 📦 Product Import

### CSV Format

```csv
Handle,Title,Price,Type,Description,Material,Weight,Length
dinner-fork,Dinner Fork,24.99,Flatware,4-prong precision flatware,18/10 Stainless,42g,20.3cm
dinner-knife,Dinner Knife,26.99,Flatware,Serrated edge blade,18/10 Stainless,48g,22.9cm
...
```

### Via Shopify Admin

```
1. Go to Products → Import
2. Click "Upload file" and select CSV
3. Map columns:
   - Handle → Handle
   - Title → Title
   - Price → Price
   - Type → Type (becomes tag)
   - Description → Description
4. Click "Import" and wait for processing
```

### Via Shopify API

```bash
# Using Shopify CLI
shopify app deploy

# Or via REST API
curl -X POST https://stal-8774.myshopify.com/admin/api/2024-10/products.json \
  -H "X-Shopify-Access-Token: YOUR_TOKEN" \
  -d '{
    "product": {
      "title": "Dinner Fork",
      "product_type": "Flatware",
      "vendor": "STAL",
      "variants": [{"price": "24.99"}]
    }
  }'
```

### Sample Products Included

The theme includes 12 sample products:
1. Dinner Fork — $24.99
2. Dinner Knife — $26.99
3. Table Spoon — $22.99
4. Dessert Spoon — $18.99
5. Salad Fork — $20.99
6. Service Fork — $34.99
7. Serving Spoon — $32.99
8. Butter Knife — $14.99
9. Steak Knife — $28.99
10. Coffee Spoon — $12.99
11. Oyster Fork — $16.99
12. 12-Piece Flatware Set — $199.99

**Import from `data/sample-products.json`:**
```bash
# Convert JSON to CSV, then upload via Shopify admin
# Or use a tool like: https://www.convertcsv.com/json-to-csv.htm
```

---

## ⚠️ Known Limitations

### 1. **360° Viewer**
- Placeholder only. To implement:
  - Install Three.js library
  - Load 3D models (.glb/.obj)
  - Edit `assets/theme.js` → `Viewer360` section
  - See: [Three.js Documentation](https://threejs.org/)

### 2. **Product Filters**
- Filters render but are not functional in base theme
- To enable:
  - Use Shopify's built-in faceted search (recommended)
  - Or implement via Shopify's search API
  - Edit `templates/collection.liquid` to add filter logic

### 3. **Image Optimization**
- Placeholder SVGs shown for products without images
- Upload actual product photography for best results
- Recommended: 1200×1200px minimum, square aspect ratio

### 4. **Search**
- Search bar is placeholder only
- To enable:
  - Shopify Admin → Sales Channels → Online Store → Customize
  - Add search to header section
  - Uses Shopify's built-in product search

### 5. **Wishlist / Save for Later**
- Button present but not functional
- To implement:
  - Use localStorage for client-side saving
  - Or integrate with Shopify customer accounts
  - Edit `assets/theme.js` to add implementation

### 6. **Responsive Issues**
- Base CSS uses Tailwind-like utilities (custom-built)
- If responsive breaks on certain screen sizes:
  - Edit `assets/base.css` media query breakpoints
  - Add/remove breakpoints as needed

---

## 🔧 Next Steps

### Immediate (Before Going Live)

- [ ] Upload theme to Shopify
- [ ] Import all 12 sample products
- [ ] Add product photography (replace SVG placeholders)
- [ ] Create collections (Flatware, Serving, Specialty, Sets)
- [ ] Configure colors and typography
- [ ] Set up shipping rules
- [ ] Configure tax settings
- [ ] Test checkout flow
- [ ] Test on mobile (iOS + Android)

### Short Term (First Month)

- [ ] Implement 360° product viewer (Three.js)
- [ ] Add product reviews section
- [ ] Set up email marketing (integrate Mailchimp, Klaviyo, etc.)
- [ ] Configure abandoned cart emails
- [ ] Add FAQ/help section
- [ ] Set up social media links
- [ ] Create blog posts
- [ ] Set up analytics (Google Analytics 4, Hotjar)

### Medium Term (1-3 Months)

- [ ] Implement dynamic filtering (Shopify's search API)
- [ ] Add product recommendations
- [ ] Create loyalty/rewards program
- [ ] Implement upsell features
- [ ] Add A/B testing setup
- [ ] Optimize images for performance
- [ ] Set up email automation

### Long Term (Ongoing)

- [ ] Content marketing strategy
- [ ] Performance optimization (Core Web Vitals)
- [ ] Mobile app (if needed)
- [ ] Marketplace integration (Amazon, eBay, etc.)
- [ ] Subscription/recurring products
- [ ] Advanced personalization

---

## 📱 Browser Support

**Tested & Supported:**
- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

**Not Supported:**
- Internet Explorer (any version)
- Edge Legacy (<79)

---

## 🎓 Learning Resources

- [Shopify Liquid Reference](https://shopify.dev/api/admin-rest/2024-10)
- [Liquid Template Language](https://shopify.github.io/liquid/)
- [Shopify Theme Development](https://shopify.dev/themes/architecture)
- [Shopify CLI Guide](https://shopify.dev/themes/tools/cli)
- [CSS for Shopify](https://shopify.dev/themes/architecture/assets/styling)

---

## 📞 Support

For issues or questions:

- **Email:** lachlan@stal.io
- **GitHub Issues:** [LJTG1K/STAL](https://github.com/LJTG1K/STAL/issues)
- **Shopify Help:** [help.shopify.com](https://help.shopify.com)

---

## 📄 License

Proprietary — STAL, 2026

Built with ⚡ precision. Deployed to Shopify.
