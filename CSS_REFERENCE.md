# STAL Theme CSS Reference

Quick reference for all CSS classes defined for the STAL Shopify theme (replacing Tailwind).

## Spacing

### Margin
- `.mt-*` - margin-top (0, 2, 4, 6, 8, 12, 16)
- `.mb-*` - margin-bottom (0, 2, 3, 4, 6, 8, 12, 16)
- `.mx-auto` - margin horizontal auto
- `.my-auto` - margin vertical auto
- `.ml-2` - margin-left

### Padding
- `.px-2, .px-3, .px-4, .px-6, .px-8` - horizontal padding
- `.py-1, .py-2, .py-4, .py-8, .py-20, .py-32` - vertical padding
- `.p-2, .p-4, .p-8` - all sides
- `.pt-4, .pt-6, .pt-12` - padding-top
- `.pb-12` - padding-bottom

### Gap
- `.gap-2` through `.gap-12` (flex/grid spacing)

## Layout

### Display
- `.flex` - display: flex
- `.grid` - display: grid
- `.block` - display: block
- `.hidden` - display: none
- `.inline-block` - inline-block
- `.inline` - inline

### Flex
- `.flex-col` - flex-direction: column
- `.flex-row` - flex-direction: row
- `.flex-1` - flex: 1
- `.flex-wrap` - flex-wrap: wrap
- `.items-center, .items-start, .items-end, .items-baseline`
- `.justify-center, .justify-between, .justify-start, .justify-end`

### Grid
- `.grid-cols-1` through `.grid-cols-4`
- `.col-span-1, .col-span-3, .col-span-4`

## Sizing

### Width
- `.w-full` - 100%
- `.w-5` through `.w-32` (1.25rem to 8rem)

### Height
- `.h-full` - 100%
- `.h-px` - 1px
- `.h-5` through `.h-32`
- `.h-screen` - 100vh

### Aspect
- `.aspect-square` - aspect-ratio: 1/1

## Typography

### Font Size
- `.text-xs` - 0.75rem
- `.text-sm` - 0.875rem
- `.text-base` - 1rem
- `.text-lg` - 1.125rem
- `.text-xl` - 1.25rem
- `.text-2xl` - 1.5rem
- `.text-3xl` - 1.875rem
- `.text-4xl` - 2.25rem
- `.text-5xl` - 3rem
- `.text-7xl` - 4.5rem

### Font Family
- `.font-heading` - System mono stack
- `.font-body` - System mono stack
- `.font-mono` - SF Mono, Monaco, Inconsolata

### Font Weight
- `.font-light` - 300
- `.font-normal` - 400
- `.font-bold` - 700

### Text Alignment
- `.text-center`, `.text-left`, `.text-right`

### Letter Spacing
- `.tracking-wide` - 0.1em
- `.tracking-wider` - 0.15em
- `.tracking-tight` - -0.02em

### Line Height
- `.leading-tight` - 1.2
- `.leading-relaxed` - 1.625

### Text Decoration
- `.line-through` - strikethrough
- `.line-clamp-2` - truncate to 2 lines
- `.whitespace-nowrap` - no wrapping

## Colors

### Text
- `.text-white`
- `.text-neutral-300` - #D7D3CF
- `.text-neutral-400` - #A29D96
- `.text-neutral-500` - #78716B
- `.text-neutral-600` - #57534E
- `.text-neutral-900` - #1C1917
- `.text-cyan-500` - #29B6F6
- `.text-green-600` - #16A34A
- `.text-red-600` - #DC2626

### Background
- `.bg-white`
- `.bg-neutral-50` - #FAFAF9
- `.bg-neutral-100` - #F5F5F4
- `.bg-neutral-800` - #292423
- `.bg-neutral-900` - #1C1917
- `.bg-cyan-500` - #29B6F6
- `.bg-cyan-600` - #039BE5

### Borders
- `.border` - 1px solid
- `.border-t`, `.border-b`, `.border-l`, `.border-r` - directional
- `.border-neutral-200` - #E7E5E4
- `.border-neutral-700` - #44403C
- `.border-neutral-900` - #1C1917
- `.border-2` - 2px border

## Position

### Display
- `.relative` - position: relative
- `.absolute` - position: absolute
- `.fixed` - position: fixed
- `.sticky` - position: sticky

### Positioning
- `.top-0, .bottom-0, .left-0, .right-0`
- `.top-3, .right-3` - 0.75rem
- `.bottom-8` - 2rem
- `.top-1/3` - 33.333%
- `.top-2/3` - 66.666%
- `.left-1/2` - 50%
- `.inset-0` - all edges 0

### Z-Index
- `.z-10`, `.z-20`, `.z-40`, `.z-100`

## Visibility

- `.hidden` - display: none
- `.pointer-events-none` - pointer-events: none
- `.opacity-0` - 0%
- `.opacity-10` - 10%
- `.opacity-50` - 50%
- `.opacity-100` - 100%

## Transform & Animation

### Transform
- `.transform` - enable transforms
- `.-translate-x-1/2` - translateX(-50%)
- `.scale-105` - scale(1.05)

### Animations
- `.animate-bounce` - bouncing animation
- `.animate-pulse` - pulsing animation

### Blur/Effects
- `.blur-2xl` - blur(1rem)
- `.blur-lg` - blur(0.5rem)

## Transitions

- `.transition-all` - all properties
- `.transition-colors` - color, background-color, border-color
- `.transition-opacity` - opacity
- `.transition-transform` - transform
- `.duration-0` - 0.3s
- `.duration-300` - 0.3s

## Hover States

- `.hover:opacity-100:hover` - opacity 1
- `.hover:text-cyan-500:hover` - color accent
- `.hover:border-cyan-500:hover` - border accent
- `.hover:bg-cyan-500:hover` - bg accent
- `.hover:bg-cyan-600:hover` - bg accent darker
- `.hover:scale-105:hover` - scale up

## Group Hover (for parent-child interactions)

- `.group` - container
- `.group-hover:border-cyan-500:hover` - child border on parent hover
- `.group-hover:opacity-10:hover` - child opacity on parent hover
- `.group-hover:opacity-100:hover` - child visible on parent hover
- `.group-hover:text-cyan-500:hover` - child color on parent hover
- `.group-hover:scale-105:hover` - child scale on parent hover

## Focus States

- `.focus:outline-none:focus` - remove focus outline
- `.focus:border-cyan-500:focus` - color border on focus

## Responsive Breakpoints

### Small (640px+)
- `.sm:flex-row` - flex-direction: row

### Medium (768px+)
- `.md:hidden` - display: none
- `.md:flex` - display: flex
- `.md:block` - display: block
- `.md:grid-cols-2` - 2 column grid
- `.md:py-20, .md:py-32` - padding variants
- `.md:text-2xl, .md:text-5xl, .md:text-7xl` - responsive text
- `.md:w-32, .md:h-32` - sizing
- `.md:flex-row` - flex-direction

### Large (1024px+)
- `.lg:grid-cols-3, .lg:grid-cols-4` - grid columns
- `.lg:col-span-1, .lg:col-span-3, .lg:col-span-4` - column spanning

## Utilities

- `.container` - max-width container
- `.sr-only` - screen reader only
- `.group` - group hover container
- `.flex-shrink-0` - no shrinking

## Placeholder Text

- `.placeholder-neutral-400` - #A29D96
- `.placeholder-neutral-500` - #78716B

## Border Radius

- `.rounded` - border-radius: 0.25rem
- `.rounded-full` - border-radius: 9999px (circular)

## Buttons

- `.btn-primary` - dark button with hover effect
- `.btn-secondary` - transparent button with border, color hover

## Gradients

- `.bg-gradient-to-br` - diagonal gradient
- `.bg-gradient-to-r` - horizontal gradient
- `.from-*` - gradient start color
- `.via-*` - gradient mid color
- `.to-*` - gradient end color

Gradient colors available:
- `from/to-neutral-50, -neutral-100, -cyan-500, -blue-500`
- `via-neutral-50, -white, -transparent`

---

All utilities are defined in `assets/theme.css` and are Shopify-compatible (no compilation needed).
