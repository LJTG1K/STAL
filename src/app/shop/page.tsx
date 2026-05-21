'use client';

import Link from 'next/link';
import { products } from '@/lib/products';
import { useState } from 'react';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <>
      <section className="py-16 md:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="container max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-heading font-bold mb-4 text-neutral-900">
            Shop
          </h1>
          <p className="text-lg font-mono text-neutral-600 max-w-2xl">
            Precision cutlery. Archival-grade materials. Sharp geometry meets luminous restraint.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-neutral-50 border-b border-neutral-200">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-sm font-mono text-neutral-600 uppercase tracking-widest">Filter:</span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-sm font-mono border transition-all ${
                  selectedCategory === cat
                    ? 'border-cyan-500 text-cyan-600 bg-cyan-50 bg-opacity-20'
                    : 'border-neutral-300 text-neutral-600 hover:border-cyan-500 hover:text-cyan-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-xs font-mono text-neutral-500 mt-6">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.id}`}
                className="group"
              >
                {/* Product Card */}
                <div className="border border-neutral-200 group-hover:border-cyan-500 transition-colors duration-200 overflow-hidden">
                  {/* Image Container */}
                  <div className="relative bg-neutral-100 aspect-square flex items-center justify-center overflow-hidden">
                    {/* Placeholder image with icon */}
                    <div className="text-6xl opacity-40 group-hover:opacity-60 transition-opacity">
                      🔪
                    </div>

                    {/* Iridescent overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>

                    {/* Blade-like hover shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 translate-x-full group-hover:translate-x-[-100%] transition-all duration-500 pointer-events-none"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 bg-neutral-50 group-hover:bg-cyan-50 group-hover:bg-opacity-30 transition-colors duration-200">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg md:text-xl font-heading font-bold text-neutral-900 group-hover:text-cyan-600 transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-sm font-mono text-neutral-500 group-hover:text-cyan-600 transition-colors">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">
                      {product.category}
                    </p>

                    <p className="text-sm font-mono text-neutral-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Material spec */}
                    <div className="text-xs font-mono text-neutral-500 border-t border-neutral-200 pt-3 group-hover:border-cyan-300 transition-colors">
                      <span className="text-neutral-400">Material:</span> {product.specs.material}
                    </div>

                    {/* Color indicators */}
                    {product.colors.length > 0 && (
                      <div className="flex items-center gap-2 mt-3">
                        {product.colors.map((color) => (
                          <div
                            key={color}
                            className="w-3 h-3 border border-neutral-300 rounded-full group-hover:border-cyan-500 transition-colors"
                            style={{
                              backgroundColor:
                                color === 'Silver'
                                  ? '#f5f5f4'
                                  : color === 'Matte Black'
                                    ? '#1c1917'
                                    : '#039BE5',
                            }}
                          ></div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Set CTA */}
      {filteredProducts.some(p => p.category === 'Sets') && (
        <section className="py-16 md:py-24 bg-neutral-900 border-t border-neutral-800">
          <div className="container max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-4">
                  Complete Your Table
                </p>
                <h2 className="text-5xl font-heading font-bold text-neutral-50 mb-6">
                  Flatware Sets
                </h2>
                <p className="text-lg font-mono text-neutral-400 mb-6 leading-relaxed">
                  Curated collections of our most essential pieces. Carefully grouped for complete place settings.
                </p>
                <Link
                  href="/shop?category=Sets"
                  className="inline-flex items-center px-6 py-3 border border-cyan-500 text-cyan-500 font-mono text-sm font-bold hover:bg-cyan-500 hover:text-neutral-900 transition-all"
                >
                  VIEW SETS
                  <span className="ml-2">→</span>
                </Link>
              </div>

              <div className="text-center">
                <div className="text-8xl opacity-30">⚡</div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
