'use client';

import { products } from '@/lib/products';
import Link from 'next/link';
import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find(p => p.id === productId);

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || 'Silver');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-cyan-600 hover:text-cyan-700">
            ← Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-6 bg-neutral-50 border-b border-neutral-200">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm font-mono text-neutral-600">
            <Link href="/shop" className="hover:text-cyan-600">Shop</Link>
            <span>/</span>
            <Link href={`/shop?category=${product.category}`} className="hover:text-cyan-600">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-neutral-900 font-bold">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 md:py-20 bg-neutral-50">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Product Image & 360 Viewer */}
            <div className="space-y-8">
              {/* Main Image */}
              <div className="border border-neutral-200 bg-neutral-100 aspect-square flex items-center justify-center relative group overflow-hidden">
                <div className="text-9xl opacity-40 group-hover:opacity-50 transition-opacity">
                  🔪
                </div>

                {/* Iridescent gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-transparent to-blue-500 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none"></div>

                {/* Frosted glass effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-400 via-transparent to-transparent opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>

                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500 text-neutral-900 text-xs font-mono font-bold">
                  {product.category}
                </div>
              </div>

              {/* 360 Viewer Placeholder */}
              <div className="border border-neutral-200 bg-neutral-100 p-8 text-center">
                <p className="text-sm font-mono text-neutral-500 mb-4">INTERACTIVE 360° VIEWER</p>
                <div className="flex items-center justify-center h-40 bg-neutral-50">
                  <div className="space-y-4 text-center">
                    <div className="text-4xl opacity-20">↻</div>
                    <p className="text-xs font-mono text-neutral-400">Drag to rotate • Pinch to zoom</p>
                    <p className="text-xs font-mono text-neutral-500 mt-2">3D model loads on product page</p>
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="border border-neutral-300 bg-neutral-100 aspect-square flex items-center justify-center cursor-pointer hover:border-cyan-500 transition-colors"
                  >
                    <span className="text-2xl opacity-30">🔪</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Product Info & Options */}
            <div className="flex flex-col">
              {/* Header */}
              <div className="mb-12">
                <p className="text-xs font-mono text-cyan-600 uppercase tracking-widest mb-3">
                  {product.category}
                </p>
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-neutral-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-3xl font-heading font-bold text-neutral-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              {/* Description */}
              <div className="mb-12 pb-12 border-b border-neutral-200">
                <p className="text-lg font-mono text-neutral-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Color Selection */}
              {product.colors.length > 0 && (
                <div className="mb-12 pb-12 border-b border-neutral-200">
                  <p className="text-sm font-mono font-bold text-neutral-900 uppercase tracking-widest mb-4">
                    Finish
                  </p>
                  <div className="flex items-center gap-4">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 border transition-all text-sm font-mono font-bold ${
                          selectedColor === color
                            ? 'border-cyan-500 text-cyan-600 bg-cyan-50 bg-opacity-20'
                            : 'border-neutral-300 text-neutral-600 hover:border-cyan-500'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Add to Cart */}
              <div className="mb-12 pb-12 border-b border-neutral-200 space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-mono font-bold text-neutral-900 uppercase tracking-widest">
                    Qty
                  </label>
                  <div className="flex items-center border border-neutral-300">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-neutral-900 hover:bg-neutral-100 font-mono text-sm"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 text-center font-mono border-l border-r border-neutral-300 focus:outline-none"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-neutral-900 hover:bg-neutral-100 font-mono text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button className="w-full px-8 py-4 border border-neutral-900 bg-neutral-900 text-neutral-50 font-mono font-bold hover:bg-neutral-800 transition-colors">
                  ADD TO CART
                </button>

                <button className="w-full px-8 py-4 border border-neutral-300 text-neutral-900 font-mono font-bold hover:border-cyan-500 hover:text-cyan-600 transition-colors">
                  ❤ SAVE FOR LATER
                </button>
              </div>

              {/* Specifications */}
              <div className="space-y-4 mb-12 pb-12 border-b border-neutral-200">
                <p className="text-sm font-mono font-bold text-neutral-900 uppercase tracking-widest">
                  Specifications
                </p>

                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-start">
                    <span className="text-sm font-mono text-neutral-600 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}:
                    </span>
                    <span className="text-sm font-mono font-bold text-neutral-900 text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Shipping & Returns */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg">📦</span>
                  <div>
                    <p className="text-sm font-mono font-bold text-neutral-900">Free Shipping</p>
                    <p className="text-xs font-mono text-neutral-600">Orders over $100 ship free</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-lg">↩️</span>
                  <div>
                    <p className="text-sm font-mono font-bold text-neutral-900">30-Day Returns</p>
                    <p className="text-xs font-mono text-neutral-600">No questions asked</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-lg">∞</span>
                  <div>
                    <p className="text-sm font-mono font-bold text-neutral-900">Lifetime Warranty</p>
                    <p className="text-xs font-mono text-neutral-600">Against defects in materials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 md:py-32 bg-neutral-900 border-t border-neutral-800">
        <div className="container max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-heading font-bold text-neutral-50 mb-12">
            You Might Also Like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/shop/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="border border-neutral-700 bg-neutral-800 bg-opacity-50 group-hover:border-cyan-500 group-hover:bg-opacity-70 transition-all p-6">
                    <div className="aspect-square bg-neutral-700 mb-4 flex items-center justify-center text-6xl opacity-40">
                      🔪
                    </div>
                    <h3 className="text-lg font-heading font-bold text-neutral-50 group-hover:text-cyan-400 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm font-mono text-neutral-400 mb-3">
                      ${relatedProduct.price.toFixed(2)}
                    </p>
                    <p className="text-xs font-mono text-neutral-500">
                      {relatedProduct.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
