# STAL Shopify Theme - Setup Checklist

Complete this checklist to get the store fully operational.

---

## 📦 Pre-Upload Checklist

Before uploading to Shopify, verify:

- [ ] All Liquid files have valid syntax
- [ ] CSS files load without errors
- [ ] JavaScript runs without console errors
- [ ] Image placeholders are intentional
- [ ] No hardcoded links to test domains
- [ ] All sections have schema blocks
- [ ] Colors match STAL design system
- [ ] Typography matches design specs

**Time to complete:** 30 minutes

---

## 🚀 Upload & Activation (Shopify Admin)

### Step 1: Upload Theme
1. Go to **Sales Channels → Online Store → Themes**
2. Click **"Add Theme" → "Upload ZIP"**
3. Select the `stal-shopify-theme.zip` file
4. Wait for processing (2-5 minutes)
5. Click **"Customize"** when ready

**Status:** ⏳ Processing

### Step 2: Preview Theme
1. Click **"Preview"** to see live version
2. Test:
   - [ ] Homepage loads without errors
   - [ ] Navigation works
   - [ ] Images load (or show placeholders)
   - [ ] Responsive on mobile
3. Close preview when satisfied

**Status:** ✅ Preview Complete

### Step 3: Publish Theme
1. In **Themes** list, find STAL theme
2. Click **"..."** (three dots)
3. Click **"Publish"**
4. Confirm: "Your theme is now live"

**Status:** 🔴 LIVE (Store is now using theme)

**Time to complete:** 10 minutes

---

## 🏪 Store Configuration

### Products & Collections

**Step 1: Import Sample Products**
1. Go to **Products → Import**
2. Download products CSV from `data/sample-products.json`
3. Convert JSON to CSV (use [convertcsv.com](https://www.convertcsv.com/json-to-csv.htm))
4. Upload CSV file
5. Wait for import to complete

**Status:** ✅ 12 Sample Products Imported

**Step 2: Create Collections**
1. Go to **Products → Collections**
2. Create collection: "All Products" (automatic)
3. Create collection: "Flatware" (add dinner fork, knife, etc.)
4. Create collection: "Serving" (add service fork, serving spoon)
5. Create collection: "Specialty" (add steak knife, coffee spoon, oyster fork)
6. Create collection: "Sets" (add 12-piece flatware set)

**Status:** ✅ Collections Created

**Step 3: Add Product Images**
1. Go to **Products → [Product Name]**
2. Click **"Add Media"** 
3. Upload 4+ images per product (recommended):
   - Main product image
   - Detail/close-up
   - In-use/lifestyle
   - Alt angle
4. Set first image as "Featured"
5. Repeat for all 12 products

**Status:** 📸 Images Uploaded (or use placeholders)

**Time to complete:** 2-4 hours

### Theme Settings

**Step 1: Customize Colors**
1. Go to **Themes → STAL → Customize**
2. Click **"Theme Settings"**
3. Go to **Colors**
4. Verify (or change):
   - Background: #FAFAF9 ✓
   - Text: #1C1917 ✓
   - Primary Accent: #29B6F6 ✓
   - Border: #E7E5E4 ✓
   - Frost: #BCCCDC ✓
5. Click **"Save"**

**Status:** ✅ Colors Verified

**Step 2: Customize Typography**
1. In **Theme Settings**
2. Go to **Typography**
3. Verify:
   - Heading Font: System UI ✓
   - Body Font: System UI ✓
   - Body Font Size: 16px ✓
4. Click **"Save"**

**Status:** ✅ Typography Verified

**Step 3: Customize Header**
1. In **Theme Settings**
2. Go to **Header**
3. Set:
   - Logo Text: "STAL"
   - Show Search: (optional)
4. Click **"Save"**

**Status:** ✅ Header Customized

**Step 4: Customize Footer**
1. In **Theme Settings**
2. Go to **Footer**
3. Set:
   - Newsletter Signup: Enabled
   - Newsletter Title: "Subscribe"
   - Copyright Text: "© 2026 STAL. All rights reserved."
   - Footer Menu: (select menu or create new)
4. Click **"Save"**

**Status:** ✅ Footer Customized

**Time to complete:** 30 minutes

### Payment & Shipping

**Step 1: Payment Gateway**
1. Go to **Settings → Payment Methods**
2. Select payment provider:
   - Shopify Payments (recommended)
   - Stripe
   - PayPal
   - Other
3. Complete setup
4. Test payment flow

**Status:** ✅ Payments Configured

**Step 2: Shipping Rates**
1. Go to **Settings → Shipping**
2. Create shipping zone: "Worldwide"
3. Set rates:
   - Free over $100 ✓
   - Flat rate: $9.99 (under $100)
4. Add delivery times
5. Test checkout

**Status:** ✅ Shipping Configured

**Step 3: Tax Settings**
1. Go to **Settings → Taxes**
2. Enable automatic tax calculation (if available in region)
3. Or manually configure tax rates by region
4. Test cart calculations

**Status:** ✅ Tax Configured

**Time to complete:** 1 hour

---

## 🔍 Testing

### Desktop Testing

- [ ] Homepage loads
- [ ] Navigation works (header links)
- [ ] Hero section displays
- [ ] Featured collection shows products
- [ ] Trust section renders
- [ ] Newsletter form works
- [ ] Footer displays
- [ ] Colors match STAL design
- [ ] Typography looks correct

### Mobile Testing (iPhone/Android)

- [ ] Homepage responsive
- [ ] Menu works (hamburger toggle)
- [ ] Products display 1 column
- [ ] Images load
- [ ] Buttons clickable
- [ ] Form inputs accessible
- [ ] Text readable

### Collection Page Testing

- [ ] Products display in grid
- [ ] Pagination works
- [ ] Sorting options visible
- [ ] Filters display (even if non-functional)
- [ ] Product cards hover effects work

### Product Page Testing

- [ ] Product title displays
- [ ] Images load or show placeholders
- [ ] Price visible
- [ ] Add to cart button works
- [ ] Quantity selector works
- [ ] Trust badges visible
- [ ] Specifications display
- [ ] Related products show

### Cart & Checkout Testing

- [ ] Add to cart works
- [ ] Cart badge updates
- [ ] Can remove items
- [ ] Quantity adjusts
- [ ] Cart subtotal calculates
- [ ] Checkout flow works
- [ ] Payment gateway loads
- [ ] Order confirmation shows

### Cross-Browser Testing

- [ ] Chrome/Edge
- [ ] Safari (desktop + mobile)
- [ ] Firefox
- [ ] Mobile browsers (Chrome, Safari)

**Time to complete:** 2-3 hours

---

## 🌐 Pre-Launch Checks

### SEO & Metadata
- [ ] Store name set correctly
- [ ] Store description added
- [ ] Product titles optimized
- [ ] Product descriptions added
- [ ] Product images have alt text
- [ ] Meta descriptions set

### Legal & Policies
- [ ] Privacy Policy created
- [ ] Terms of Service created
- [ ] Return Policy created
- [ ] Shipping Policy created
- [ ] Links added to footer

### Email Configuration
- [ ] Store notification emails configured
- [ ] Customer order confirmation enabled
- [ ] Newsletter email setup (Mailchimp, Klaviyo, etc.)

### Analytics
- [ ] Google Analytics 4 installed
- [ ] Facebook Pixel installed (optional)
- [ ] Hotjar/Clarity installed (optional)

### Domain & SSL
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Domain points to Shopify

**Time to complete:** 1-2 hours

---

## 🚀 Launch!

### Go Live Checklist
- [ ] Theme is published
- [ ] All products imported
- [ ] Collections created
- [ ] Colors customized
- [ ] Shipping configured
- [ ] Payments working
- [ ] Testing complete
- [ ] Policies in place
- [ ] Analytics installed
- [ ] Domain ready

### Announcement
- [ ] Email customers (if migrating)
- [ ] Post on social media
- [ ] Update website
- [ ] Tell team/stakeholders

---

## 📊 Post-Launch (First Week)

### Monitor
- [ ] Check error logs in Shopify
- [ ] Monitor site performance
- [ ] Test checkout flow daily
- [ ] Check email confirmations
- [ ] Monitor analytics

### Optimize
- [ ] Review Core Web Vitals
- [ ] Optimize images if needed
- [ ] Adjust shipping if needed
- [ ] Update descriptions based on feedback

### Market
- [ ] Share launch announcement
- [ ] Run first email campaign
- [ ] Post blog content
- [ ] Engage on social media

---

## 📈 First 30 Days

### Content
- [ ] Add blog posts (3-5)
- [ ] Create email sequences
- [ ] Plan social media content

### Customer Service
- [ ] Set up help desk (Zendesk, Gorgias, etc.)
- [ ] Create FAQ page
- [ ] Monitor customer inquiries
- [ ] Respond quickly to messages

### Analytics
- [ ] Review traffic sources
- [ ] Analyze conversion rates
- [ ] Identify popular products
- [ ] Note underperforming items

### Optimization
- [ ] A/B test product images
- [ ] Optimize product descriptions
- [ ] Improve homepage based on data
- [ ] Plan new products/collections

---

## 🎯 Success Metrics

Track these over time:

- [ ] Daily visitors
- [ ] Conversion rate
- [ ] Average order value
- [ ] Customer acquisition cost
- [ ] Return customers
- [ ] Email open rate
- [ ] Site load time
- [ ] Mobile conversion rate

---

## 📝 Notes

Use this space to track decisions, issues, or questions:

```
[Add your notes here]


```

---

## ✅ Completion

**Overall Status:** ⏳ In Progress

**Estimated Time to Complete:** 8-12 hours  
**Target Launch Date:** [Enter date]

**Completed by:** [Your name]  
**Date Completed:** [Date]

---

_For questions or issues, contact: lachlan@stal.io_
