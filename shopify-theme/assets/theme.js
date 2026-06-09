/**
 * STAL Shopify Theme - Core JavaScript
 * Handles cart interactions, product variants, and interactive features
 */

(function() {
  'use strict';

  // ============================================
  // Cart Management
  // ============================================

  const CartManager = {
    updateQuantity(variantId, quantity) {
      return fetch('/cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: variantId,
          quantity: quantity,
        }),
      })
        .then(response => response.json())
        .catch(error => console.error('Error updating cart:', error));
    },

    addToCart(variantId, quantity = 1) {
      return fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: variantId,
          quantity: quantity,
        }),
      })
        .then(response => response.json())
        .then(data => {
          this.notifySuccess(`Added to cart (${quantity} item${quantity > 1 ? 's' : ''})`);
          return data;
        })
        .catch(error => {
          console.error('Error adding to cart:', error);
          this.notifyError('Failed to add to cart');
        });
    },

    removeFromCart(variantId) {
      return this.updateQuantity(variantId, 0);
    },

    notifySuccess(message) {
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-cyan-500 text-white px-6 py-3 font-mono text-sm rounded z-50';
      notification.textContent = message;
      document.body.appendChild(notification);

      setTimeout(() => {
        notification.remove();
      }, 3000);
    },

    notifyError(message) {
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-red-600 text-white px-6 py-3 font-mono text-sm rounded z-50';
      notification.textContent = message;
      document.body.appendChild(notification);

      setTimeout(() => {
        notification.remove();
      }, 3000);
    },
  };

  // ============================================
  // Product Variant Selection
  // ============================================

  const ProductVariants = {
    init() {
      const form = document.getElementById('product-form');
      if (!form) return;

      const optionButtons = form.querySelectorAll('[data-option]');
      const variantSelect = form.querySelector('[id="product-variant"]');

      optionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          this.selectOption(button, optionButtons, variantSelect);
        });
      });
    },

    selectOption(button, allButtons, variantSelect) {
      const option = button.dataset.option;
      const value = button.dataset.value;

      // Update button states
      allButtons.forEach(btn => {
        if (btn.dataset.option === option) {
          btn.classList.toggle('active', btn === button);
          if (btn === button) {
            btn.classList.add('border-cyan-500', 'text-cyan-500');
            btn.classList.remove('border-neutral-200');
          } else {
            btn.classList.remove('border-cyan-500', 'text-cyan-500');
            btn.classList.add('border-neutral-200');
          }
        }
      });

      // Update variant if needed
      if (variantSelect) {
        this.updateVariantSelect(option, value, variantSelect);
      }
    },

    updateVariantSelect(option, value, variantSelect) {
      // Implementation depends on product structure
      // This is a placeholder
      console.log(`Selected ${option}: ${value}`);
    },
  };

  // ============================================
  // 360° Viewer (Placeholder)
  // ============================================

  const Viewer360 = {
    init() {
      const viewer = document.getElementById('viewer-360');
      if (!viewer) return;

      // Placeholder for Three.js integration
      // Real implementation would load 3D model here
      console.log('360° viewer initialized (placeholder)');
    },
  };

  // ============================================
  // Image Gallery Lightbox
  // ============================================

  const ImageGallery = {
    init() {
      const thumbnails = document.querySelectorAll('.product-thumbnail');
      const mainImage = document.querySelector('.product-main-image');

      if (!mainImage || thumbnails.length === 0) return;

      thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
          const imageSrc = thumb.querySelector('img').src;
          mainImage.src = imageSrc;
          
          // Update active state
          thumbnails.forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
        });
      });
    },
  };

  // ============================================
  // Newsletter Form
  // ============================================

  const Newsletter = {
    init() {
      const forms = document.querySelectorAll('form[data-newsletter]');
      
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          this.submit(form);
        });
      });
    },

    submit(form) {
      const email = form.querySelector('input[type="email"]').value;
      
      if (!this.isValidEmail(email)) {
        CartManager.notifyError('Please enter a valid email');
        return;
      }

      // In a real implementation, this would submit to Shopify's
      // customer list or an external service
      CartManager.notifySuccess('Subscribed! Check your email.');
      form.reset();
    },

    isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
  };

  // ============================================
  // Filter Bar (Collection Page)
  // ============================================

  const FilterBar = {
    init() {
      const filterButtons = document.querySelectorAll('[data-filter]');
      
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          button.classList.toggle('active');
          this.applyFilters();
        });
      });
    },

    applyFilters() {
      const activeFilters = document.querySelectorAll('[data-filter].active');
      const filters = Array.from(activeFilters).map(f => f.dataset.filter);
      
      // In a real implementation, this would filter products via AJAX
      console.log('Applied filters:', filters);
    },
  };

  // ============================================
  // Mobile Menu
  // ============================================

  const MobileMenu = {
    init() {
      const toggle = document.getElementById('mobile-menu-toggle');
      const menu = document.getElementById('mobile-menu');

      if (!toggle || !menu) return;

      toggle.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });

      // Close menu when a link is clicked
      menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          menu.classList.add('hidden');
        });
      });
    },
  };

  // ============================================
  // Scroll Animations
  // ============================================

  const ScrollAnimations = {
    init() {
      const elements = document.querySelectorAll('[data-scroll-animate]');
      
      if (!elements.length || !('IntersectionObserver' in window)) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(el => observer.observe(el));
    },
  };

  // ============================================
  // Initialization
  // ============================================

  document.addEventListener('DOMContentLoaded', () => {
    ProductVariants.init();
    Viewer360.init();
    ImageGallery.init();
    Newsletter.init();
    FilterBar.init();
    MobileMenu.init();
    ScrollAnimations.init();

    console.log('STAL Theme loaded');
  });

  // Export for global access if needed
  window.STAL = {
    cart: CartManager,
    variants: ProductVariants,
    viewer: Viewer360,
    gallery: ImageGallery,
  };
})();
