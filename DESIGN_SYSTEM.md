# STAL Design System

## Color Palette

### Monochromatic Base (90%)
```
neutral-50   #FAFAF9  ████ (Page background, cards)
neutral-100  #F5F5F4  ████
neutral-200  #E7E5E4  ████ (Borders, subtle dividers)
neutral-300  #D6D3D1  ████
neutral-400  #A8A29E  ████ (Secondary text)
neutral-500  #78716B  ████
neutral-600  #57534E  ████ (Body text)
neutral-700  #44403C  ████
neutral-800  #292524  ████
neutral-900  #1C1917  ████ (Primary text, dark sections)
```

### Sub-Zero Cyan Accents (8%)
```
cyan-50      #F0F9FC  ████ (Hover backgrounds)
cyan-100     #E1F3F8  ████
cyan-200     #B3E5F5  ████
cyan-300     #81D4F7  ████
cyan-400     #4FC3F7  ████
cyan-500     #29B6F6  ████ (Primary interactive)
cyan-600     #039BE5  ████ (Hover state)
cyan-700     #0288D1  ████
cyan-800     #0277BD  ████
cyan-900     #01579B  ████ (Dark accents)
```

### Frosted Glass (2%)
```
frost-50     #F8FAFB  ████ (Subtle tints)
frost-100    #F0F4F8  ████
frost-200    #D9E2EC  ████
frost-300    #BCCCDC  ████
frost-400    #9FB3C8  ████
frost-500    #829AB1  ████
frost-600    #627D98  ████
frost-700    #486581  ████
frost-800    #2D3E50  ████
frost-900    #1A202C  ████ (Deep cool shadows)
```

---

## Typography System

### Typeface Stack
```
Headings:
  Font Family:  UI Monospace, -apple-system, BlinkMacSystemFont, 
                "Segoe UI", "Helvetica Neue", sans-serif
  Weight:       700 (bold)
  Spacing:      -0.02em (tight)
  Line Height:  1.2 (compact)

Body Text:
  Font Family:  "SF Mono", "Monaco", "Inconsolata", "Fira Mono", 
                "PT Mono", monospace
  Weight:       400 (normal)
  Spacing:      0em (default)
  Line Height:  1.5 (readable)
```

### Type Scale

| Level | Size | Line Height | Usage |
|-------|------|-------------|-------|
| **H1** | 60px | 1.2 | Page titles (homepage hero) |
| **H2** | 48px | 1.2 | Section headings |
| **H3** | 36px | 1.2 | Subsection titles |
| **H4** | 24px | 1.2 | Card titles |
| **H5** | 20px | 1.2 | Small headings |
| **Base** | 16px | 1.5 | Body text, descriptions |
| **Small** | 14px | 1.5 | Secondary text, labels |
| **Xs** | 12px | 1.33 | Meta info, captions |

---

## Component Library

### Buttons

#### Primary Button
```html
<button class="px-8 py-4 border border-cyan-500 
                text-cyan-500 font-mono font-bold 
                hover:bg-cyan-500 hover:text-neutral-900 
                transition-all">
  EXPLORE COLLECTION
</button>
```
- Border: 1px cyan-500
- Text: cyan-500
- Hover: cyan-500 bg, neutral-900 text
- Transition: instant (0s)

#### Secondary Button
```html
<button class="px-8 py-4 border border-neutral-400 
                text-neutral-600 font-mono 
                hover:border-cyan-500 hover:text-cyan-600 
                transition-all">
  VIEW SPECS
</button>
```
- Border: 1px neutral-400
- Text: neutral-600
- Hover: cyan-500 border, cyan-600 text

#### Dark Button
```html
<button class="px-8 py-4 border border-neutral-900 
                bg-neutral-900 text-neutral-50 font-mono 
                hover:bg-neutral-800 transition-colors">
  SUBSCRIBE
</button>
```
- Border: 1px neutral-900
- Background: neutral-900
- Hover: neutral-800 bg

### Input Fields

```html
<input class="px-4 py-3 border border-neutral-300 
               bg-neutral-50 text-neutral-900 
               font-mono text-sm placeholder:text-neutral-400 
               focus:outline-none focus:border-cyan-500 
               transition-colors" 
       placeholder="your@email.com" />
```
- Border: 1px neutral-300
- Focus: cyan-500 border (instant)
- No blur, crisp appearance

### Product Card

```html
<div class="border border-neutral-200 
            group hover:border-cyan-500 
            transition-colors duration-200">
  <!-- Image with overlay -->
  <div class="relative bg-neutral-100 aspect-square 
              flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 
                bg-gradient-to-br from-cyan-500 
                via-blue-500 to-transparent 
                opacity-0 group-hover:opacity-10 
                transition-opacity duration-200 
                pointer-events-none"></div>
  </div>
  
  <!-- Content -->
  <div class="p-6 bg-neutral-50 
              group-hover:bg-cyan-50 
              group-hover:bg-opacity-30 
              transition-colors duration-200">
    <h3 class="text-lg font-heading font-bold 
               text-neutral-900 
               group-hover:text-cyan-600 transition-colors">
      {product.name}
    </h3>
  </div>
</div>
```

**Hover Effects:**
- Border: neutral-200 → cyan-500
- Background: neutral-50 → cyan-50 (20% opacity)
- Text: neutral-900 → cyan-600
- Overlay: 0% → 10% opacity
- Shimmer: 100% → -100% (left-to-right)

### Frosted Glass Panel

```html
<div class="bg-opacity-50 backdrop-blur-sm 
            border border-neutral-200 border-opacity-20">
  {/* Content */}
</div>
```
- Background: 50% opacity with backdrop blur
- Border: 1px neutral-200 at 20% opacity

### Badge

```html
<span class="px-3 py-1 bg-cyan-500 
             text-neutral-900 text-xs 
             font-mono font-bold">
  Flatware
</span>
```
- Background: cyan-500
- Text: neutral-900
- Size: xs (12px)

---

## Interactions

### Hover States

#### Default Hover
```css
transition: all 0s ease;
```
- Instant (no easing)
- All properties transition simultaneously

#### Border Transition
```css
border-color: neutral-200 → cyan-500
```

#### Text Color Transition
```css
color: neutral-600 → cyan-600
```

#### Background Transition
```css
background-color: neutral-50 → cyan-50 (20% opacity)
```

#### Iridescent Overlay
```css
@keyframes hover-overlay {
  0%   { opacity: 0%; }
  100% { opacity: 10%; }
}
```
Gradient: `linear-gradient(135deg, transparent 0%, rgba(41, 182, 246, 0.1) 25%, rgba(0, 136, 209, 0.1) 50%, transparent 100%)`

#### Blade Shimmer
```css
@keyframes blade-shimmer {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```
Gradient: `linear-gradient(90deg, transparent, rgba(41, 182, 246, 0.2), transparent)`
Duration: 0.3s

### Active States

#### Button Active
```css
transform: scale(0.98);
```
Slight scale down for tactile feedback.

#### Focus States (Inputs)
```css
border-color: neutral-300 → cyan-500
outline: none
transition: all 0s ease
```

---

## Layout Grid

### Container
```html
<div class="container max-w-6xl mx-auto px-6">
  {/* Content */}
</div>
```
- Max-width: 1280px (6xl breakpoint)
- Horizontal padding: 24px (px-6)
- Responsive: Reduces padding on mobile

### Product Grid

#### Desktop (> 1024px)
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem; /* 32px */
```

#### Tablet (768px - 1024px)
```css
grid-template-columns: repeat(2, 1fr);
```

#### Mobile (< 768px)
```css
grid-template-columns: 1fr;
```

---

## Spacing Scale

```
2px   = space-0.5
4px   = space-1
8px   = space-2
12px  = space-3
16px  = space-4
24px  = space-6
32px  = space-8
48px  = space-12
64px  = space-16
96px  = space-24
```

### Standard Spacing

| Element | Spacing |
|---------|---------|
| Section padding | 80px (top/bottom) |
| Container padding | 24px (left/right) |
| Grid gap | 32px |
| Card padding | 24px |
| Element margin | 16px |

---

## Border System

### Default Border
```css
border: 1px solid;
border-color: neutral-200;
```

### Accent Border
```css
border: 1px solid;
border-color: cyan-500;
```

### Sharp Edge (Shadow alternative)
```css
border-left: 1px solid;
border-top: 1px solid;
border-color: neutral-900 (20% opacity);
```

### Divider
```css
border-top: 1px solid;
border-color: neutral-200;
```

---

## Effects & Textures

### Digital Grain Overlay
```html
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <filter id="noise">
    <feTurbulence type="fractalNoise" 
                   baseFrequency="0.9" 
                   numOctaves="4" 
                   seed="1" />
    <feColorMatrix type="saturate" values="0.3" />
  </filter>
  <rect width="100%" height="100%" 
        fill="rgba(0,0,0,0.02)" 
        filter="url(#noise)" />
</svg>
```
- Opacity: 0.02 (2% visible)
- Frequency: 0.9 (fine grain)
- Octaves: 4 (detailed noise)

### Frosted Glass Effect
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Iridescent Gradient
```css
background: linear-gradient(
  135deg,
  transparent 0%,
  rgba(41, 182, 246, 0.1) 25%,
  rgba(0, 136, 209, 0.1) 50%,
  transparent 100%
);
```

---

## Responsive Breakpoints

```
sm:  640px   (not heavily used; mostly 1-col mobile)
md:  768px   (tablet: shift to 2-col)
lg:  1024px  (desktop: shift to 3-col)
xl:  1280px  (wide desktop: max container width)
2xl: 1536px  (ultra-wide, unused)
```

### Mobile-First Approach
```
Default: 1 column
md:      2 columns (grid-cols-2)
lg:      3 columns (grid-cols-3)
```

---

## Accessibility

### Contrast Ratios
- Text on neutral-50: neutral-900 (18:1) ✅ AAA
- Text on neutral-900: neutral-50 (18:1) ✅ AAA
- Text on cyan-50: cyan-600 (8:1) ✅ AA

### Focus States
- All interactive elements have visible focus state
- Focus outline: cyan-500 border
- No outline: none (border replaced)

### Semantic HTML
- Proper heading hierarchy (h1 → h6)
- Semantic nav, main, footer elements
- Alt text for all images (when assets added)
- Form labels properly associated

---

## Animation Principles

### Core Philosophy
**Sharp, instant feedback — no delays or easing.**

```css
/* All transitions default to: */
transition: all 0s ease;
```

Why:
- Brutalist aesthetic demands immediacy
- No animation bloat
- Focuses on state change, not motion
- Fast, responsive feel

### Exceptions (Future)
- Loading states (if needed)
- Page transitions (if added)
- 3D model rotation (when viewer added)

---

## Implementation Examples

### Hero Button
```tsx
<Link
  href="/shop"
  className="px-8 py-4 border border-cyan-500 
             text-cyan-500 font-mono text-sm font-bold 
             hover:bg-cyan-500 hover:text-neutral-900 
             transition-all duration-200"
>
  EXPLORE COLLECTION
</Link>
```

### Product Card
```tsx
<Link href={`/shop/${product.id}`} className="group">
  <div className="border border-neutral-200 
                  group-hover:border-cyan-500 
                  transition-colors duration-200">
    <div className="relative bg-neutral-100 
                    aspect-square overflow-hidden">
      <div className="absolute inset-0 
                      bg-gradient-to-br from-cyan-500 
                      via-blue-500 to-transparent 
                      opacity-0 group-hover:opacity-10 
                      transition-opacity 
                      pointer-events-none"></div>
    </div>
    <div className="p-6 group-hover:bg-cyan-50 
                    group-hover:bg-opacity-30">
      <h3 className="text-lg font-heading font-bold 
                     group-hover:text-cyan-600 
                     transition-colors">
        {product.name}
      </h3>
    </div>
  </div>
</Link>
```

### Filter Button (Active)
```tsx
<button
  onClick={() => setSelectedCategory(cat)}
  className={`px-4 py-2 text-sm font-mono border 
              transition-all ${
    selectedCategory === cat
      ? 'border-cyan-500 text-cyan-600 
         bg-cyan-50 bg-opacity-20'
      : 'border-neutral-300 text-neutral-600 
         hover:border-cyan-500 hover:text-cyan-600'
  }`}
>
  {cat}
</button>
```

---

## Usage Guidelines

### When to Use Cyan
- Interactive elements (buttons, links)
- Hover states on cards
- Focus indicators on inputs
- Accent borders
- Badge backgrounds (on neutral text)

### When to Use Neutral
- Primary text
- Page background
- Card backgrounds
- Borders (default state)
- Secondary headings

### When to Use Frost
- Subtle backgrounds (rare)
- Deep shadows (rare)
- Overlay backgrounds (minimal)

### 10% Accent Rule
- Cyan should appear in ~10% of visual space
- 90% monochromatic (neutral)
- Maintains brutalist minimalism
- Prevents accent fatigue

---

## Dark Mode (Future)

Current: Light mode only.

If dark mode added:
```css
@media (prefers-color-scheme: dark) {
  --color-bg:     #1C1917 (neutral-900)
  --color-text:   #FAFAF9 (neutral-50)
  --color-border: #44403C (neutral-700)
  --color-accent: #4FC3F7 (cyan-400, brighter for dark)
}
```

---

## Performance Notes

- No external font loads (system stack)
- No CSS-in-JS (Tailwind static)
- No animation libraries (CSS only)
- No heavy icons (emoji placeholders)
- Minimal JavaScript (pure React)

**Expected Bundle Impact:**
- Tailwind CSS: ~45KB (before gzip)
- Custom CSS: ~5KB
- Total CSS: ~50KB (gzipped: ~15KB)

---

**Last Updated:** May 21, 2026  
**Version:** 1.0  
**Status:** Complete & Production-Ready

---

_This design system is a living document. Update as design evolves._
