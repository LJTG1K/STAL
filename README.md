# STAL — Premium Stainless Steel Cutlery

**Archival-grade cutlery e-commerce platform. Sharp geometry. Luminous accents. Brutalist minimalism.**

Built with Next.js 16, TypeScript, and Tailwind CSS. Vercel-ready production build.

---

## 🎯 Overview

STAL is a premium e-commerce platform for precision-engineered stainless steel cutlery. The design system combines:

- **Monochromatic brutalism** – Clean, minimal aesthetic with sharp edges
- **Sub-zero cyan accents** – 10% color palette for luminous highlights
- **Sharp geometric typography** – Monument Extended-style headings + monospace body text
- **Functional minimalism** – Every element serves a purpose
- **Archival studio feel** – Archive-ready presentation and packaging philosophy

---

## 🏗️ Architecture

### Project Structure

```
stal/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with header/footer
│   │   ├── page.tsx            # Homepage with hero + fracture effect
│   │   ├── globals.css         # Global styles + digital grain texture
│   │   └── shop/
│   │       ├── page.tsx        # Shop grid with filters & iridescent overlays
│   │       └── [id]/
│   │           └── page.tsx    # Product detail with specs & 360 viewer
│   └── lib/
│       └── products.ts         # Product data & types
├── tailwind.config.ts          # Design system tokens & theme
├── next.config.ts              # Next.js configuration
└── package.json                # Dependencies
```

### Tech Stack

- **Framework:** Next.js 16.2.6 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 with custom design tokens
- **Fonts:** System stack (UI Monospace + SF Mono)
- **Deployment:** Vercel (optimized for Edge Functions & ISR)

---

## 🎨 Design System

### Color Palette

**Monochromatic Base (90%)**
```
neutral-50:   #FAFAF9 (page background)
neutral-900:  #1C1917 (text)
neutral-200:  #E7E5E4 (borders)
neutral-600:  #57534E (secondary text)
```

**Stalhrim Accents (10%)**
```
cyan-500:     #29B6F6 (primary interactive)
cyan-600:     #039BE5 (hover states)
frost-300:    #BCCCDC (subtle backgrounds)
```

### Typography

- **Headings:** UI Monospace, -apple-system (Monument Extended equivalent)
  - H1: 60px / 1.2 line-height
  - H2: 48px / H3: 36px / H4: 24px
  
- **Body:** SF Mono, Monaco, Inconsolata (PP Neue Montreal equivalent)
  - Base: 16px / 1.5 line-height
  - Letter-spacing: -0.02em (tight)

### Components

- **Glass Frost:** Frosted background with backdrop blur + subtle borders
- **Sharp Edge:** Left + top borders for brutalist shadow effect
- **Iridescent Overlay:** Cyan → Blue gradient at 0-10% opacity on hover
- **Blade Shimmer:** Left-to-right shine effect on interactive elements
- **Digital Grain:** SVG-based texture overlay (0.02% opacity)

### Micro-Interactions

- **Sharp Transitions:** All animations use `transition: all 0s ease` (instant)
- **Hover States:** Border color → cyan-500, text color changes instantly
- **Active States:** Scale(0.98) for tactile feedback
- **Scroll Effects:** Perspective transforms on hero section

---

## 📦 Features

### Homepage (`/`)

- **Hero Section**
  - Perspective-transformed icon on scroll
  - Fracture line overlays (dividing lines at 33% & 66%)
  - Call-to-action buttons (Explore Collection + View Specs)
  - Scroll indicator with pulse animation

- **Featured Collection**
  - Three-column feature grid
  - Material highlights + geometry notes
  - Browse all products CTA

- **Trust Section**
  - Dark background with cyan accents
  - Material specs + warranty information

- **Newsletter Signup**
  - Email input with cyan focus state
  - Minimal form styling

### Shop Grid (`/shop`)

- **Filter Bar**
  - Category filters (All, Flatware, Serving, Specialty, Sets)
  - Item count display
  - Active filter highlighting with cyan accent

- **Product Cards**
  - 3-column responsive grid (1 col mobile, 2 col tablet)
  - Iridescent gradient overlay on hover
  - Blade-like shimmer effect on hover
  - Price + category + description
  - Material specs + color indicators
  - Sharp border → cyan border on hover

### Product Detail (`/shop/[id]`)

- **Breadcrumb Navigation**
  - Category links for filtering

- **Product Image**
  - Placeholder with iridescent overlay on hover
  - Badge for category
  - Thumbnail gallery (4 images placeholder)

- **360° Viewer Placeholder**
  - Interactive viewer layout (ready for Three.js integration)
  - Drag-to-rotate, pinch-to-zoom instructions

- **Product Information**
  - Dynamic pricing + description
  - Color/finish selector buttons
  - Quantity selector (±/input)
  - Add to cart + save buttons

- **Specifications**
  - Material (18/10 Stainless Steel)
  - Weight, length, care instructions
  - Clean key-value layout

- **Trust Elements**
  - Free shipping (orders >$100)
  - 30-day returns
  - Lifetime warranty

- **Related Products**
  - 3-column grid of related items
  - Dark background with hover effects

---

## 📊 Product Data

**12 Sample Products:**

1. **Dinner Fork** — $24.99 — 4-prong precision flatware
2. **Dinner Knife** — $26.99 — Serrated edge blade
3. **Table Spoon** — $22.99 — Concave geometric form
4. **Dessert Spoon** — $18.99 — Compact form
5. **Salad Fork** — $20.99 — 3-prong design
6. **Service Fork** — $34.99 — Serving-scale piece
7. **Serving Spoon** — $32.99 — Large-scale spoon
8. **Butter Knife** — $14.99 — Minimal flatware
9. **Steak Knife** — $28.99 — Aggressive serrated edge
10. **Coffee Spoon** — $12.99 — Espresso-scale form
11. **Oyster Fork** — $16.99 — Specialist tool
12. **Flatware Set (12-piece)** — $199.99 — Complete place setting

All products include:
- Name, category, price
- Description + short copy
- Material specs (weight, length, care)
- Available finishes (Silver, Matte Black where applicable)

---

## 🚀 Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

---

## 📱 Responsive Design

- **Mobile (< 768px):** Single-column layouts, stacked navigation
- **Tablet (768px - 1024px):** 2-column grids, adjusted spacing
- **Desktop (> 1024px):** 3-column grids, full-width containers

---

## 🎯 Next Steps (Roadmap)

### Phase 2: Asset Integration
- [ ] Replace placeholder emoji icons with actual cutlery photography
- [ ] Implement hero asset (stark fork reflection concept)
- [ ] Add product photography per item
- [ ] Create thumbnail variants

### Phase 3: 360° Product Viewer
- [ ] Integrate Three.js for interactive 3D models
- [ ] Add drag-to-rotate functionality
- [ ] Implement pinch-to-zoom on mobile
- [ ] Create 360° image carousel fallback

### Phase 4: E-Commerce Integration
- [ ] Connect to Shopify API (products + inventory)
- [ ] Implement shopping cart (client-side state)
- [ ] Add checkout flow
- [ ] Stripe payment integration

### Phase 5: Analytics & Optimization
- [ ] Add Vercel Analytics
- [ ] Image optimization (next/image component)
- [ ] Performance monitoring
- [ ] A/B testing infrastructure

### Phase 6: Content & SEO
- [ ] Product photography with proper alt text
- [ ] Meta descriptions + OG tags
- [ ] Structured data (JSON-LD)
- [ ] Blog/editorial content

---

## 🔧 Configuration

### Tailwind Design Tokens

Defined in `tailwind.config.ts`:

```typescript
// Color tokens
colors: {
  neutral: { 50, 100, 200, ..., 900 }
  cyan: { 50, 100, 200, ..., 900 }
  frost: { 50, 100, 200, ..., 900 }
}

// Typography
fontFamily: {
  heading: ['UI Monospace', ...],
  mono: ['SF Mono', ...],
}

// Effects
backdropBlur: { xs, sm, md, lg }
animation: {} // Instant transitions preferred
```

### Environment Variables

None required for local development. For Vercel deployment:
- `NEXT_PUBLIC_SITE_URL` (optional, for OG tags)

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Connect repo to Vercel
vercel link

# Deploy
vercel

# View live site
vercel --prod
```

**Vercel Settings:**
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Node.js Version: 18+ (recommended)

### Manual Deployment

```bash
# Build static export (if needed)
npm run build

# Deploy `.next` directory to hosting provider
```

---

## 📄 File Structure

```
/
├── README.md                      # This file
├── package.json                   # Dependencies
├── package-lock.json              # Lockfile
├── tailwind.config.ts             # Design system
├── next.config.ts                 # Next.js config
├── tsconfig.json                  # TypeScript config
├── eslint.config.mjs              # Linting rules
├── postcss.config.mjs             # PostCSS config
├── public/                        # Static assets
│   └── [placeholder SVGs]
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   └── shop/
    │       ├── page.tsx
    │       └── [id]/
    │           └── page.tsx
    └── lib/
        └── products.ts
```

---

## 🎓 Design Philosophy

**STAL embraces brutalist minimalism:**

1. **Extreme clarity** — No decoration without function
2. **Geometric precision** — Sharp angles, clean lines
3. **Luminous restraint** — Cyan accents reveal, not overwhelm
4. **Archive-ready** — Built to last decades of use
5. **Monochromatic discipline** — One color family, one message
6. **Instant feedback** — No delays, no easing (sharp transitions)
7. **Functional form** — Cutlery metaphor throughout (sharp, precise, useful)

---

## 📝 License

Proprietary — STAL, 2026

---

## 🤝 Support

For issues or questions:
- Email: lachlan@stal.io
- GitHub: https://github.com/LJTG1K/STAL

---

**Built with ⚡ precision. Deployed to Vercel Edge.**
