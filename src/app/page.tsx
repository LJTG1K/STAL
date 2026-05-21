'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-neutral-900">
        {/* Placeholder Hero Asset - Stark Fork Reflection Concept */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div
            className="text-9xl font-heading font-bold text-neutral-50"
            style={{
              transform: `perspective(1200px) rotateX(${scrollPos * 0.05}deg)`,
            }}
          >
            ⚡
          </div>
        </div>

        {/* Fracture overlay effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 border-l border-cyan-500"
            style={{
              width: '1px',
              left: '33%',
              opacity: 0.1 + Math.sin(scrollPos * 0.01) * 0.05,
            }}
          ></div>
          <div
            className="absolute inset-0 border-l border-cyan-500"
            style={{
              width: '1px',
              left: '66%',
              opacity: 0.1 + Math.cos(scrollPos * 0.01) * 0.05,
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-heading font-bold text-neutral-50 mb-6 leading-tight">
            Archival Precision
          </h1>

          <p className="text-xl md:text-2xl font-mono text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            18/10 stainless steel. Sharp geometry. Luminous accents. Brutalist form meets functional elegance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/shop"
              className="px-8 py-4 border border-cyan-500 text-cyan-500 font-mono text-sm font-bold hover:bg-cyan-500 hover:text-neutral-900 transition-all duration-200"
            >
              EXPLORE COLLECTION
            </Link>
            <button className="px-8 py-4 border border-neutral-400 text-neutral-300 font-mono text-sm hover:border-cyan-500 hover:text-cyan-500 transition-all duration-200">
              VIEW SPECS
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-pulse">
            <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 md:py-32 bg-neutral-50 border-t border-neutral-200">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-neutral-900">
            The Collection
          </h2>
          <p className="text-lg font-mono text-neutral-600 mb-12 max-w-2xl">
            Precision cutlery engineered for the discerning table. Every piece a study in geometric minimalism and functional form.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: '18/10 Stainless',
                desc: 'Mirror-polished archival-grade steel. Resistant to corrosion and discoloration.',
              },
              {
                title: 'Sharp Geometry',
                desc: 'Brutalist forms. Precision-engineered prongs and blades. Every edge intentional.',
              },
              {
                title: 'Luminous Accents',
                desc: 'Frosted finishes reveal light. Sub-zero cyan highlights. Minimal, deliberate.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="border border-neutral-200 p-8 group hover:border-cyan-500 hover:bg-cyan-50 hover:bg-opacity-5 transition-all duration-200"
              >
                <h3 className="text-2xl font-heading font-bold mb-3 text-neutral-900 group-hover:text-cyan-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 font-mono text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="border-t border-neutral-200 pt-12">
            <Link
              href="/shop"
              className="inline-flex items-center font-mono text-sm font-bold text-neutral-900 hover:text-cyan-600 group"
            >
              BROWSE ALL PRODUCTS
              <span className="ml-3 inline-block group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 md:py-32 bg-neutral-900 border-t border-neutral-800">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-heading font-bold text-neutral-50 mb-6">
                Designed for Life
              </h2>
              <p className="text-lg font-mono text-neutral-400 leading-relaxed mb-6">
                STAL cutlery is engineered for decades of use. Dishwasher-safe. Hand-washable. Built to outlast trends and reward daily use.
              </p>
              <p className="text-neutral-500 font-mono text-sm">
                Each piece arrives individually inspected. Zero defects. Archive-ready packaging.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { label: 'Material', value: '18/10 Stainless Steel' },
                { label: 'Finish', value: 'Mirror Polish + Frosted' },
                { label: 'Care', value: 'Dishwasher Safe' },
                { label: 'Warranty', value: 'Lifetime' },
              ].map((spec, i) => (
                <div key={i} className="border-l border-cyan-500 border-opacity-30 pl-4">
                  <p className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-1">
                    {spec.label}
                  </p>
                  <p className="text-lg font-heading font-bold text-neutral-50">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-32 bg-neutral-50 border-t border-neutral-200">
        <div className="container max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-neutral-900">
            Stay Updated
          </h2>
          <p className="text-lg font-mono text-neutral-600 mb-8">
            New pieces. Stock updates. Archival thoughts on design.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-neutral-300 bg-neutral-50 text-neutral-900 font-mono text-sm placeholder:text-neutral-400 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 border border-neutral-900 bg-neutral-900 text-neutral-50 font-mono text-sm font-bold hover:bg-neutral-800 transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>

          <p className="text-xs font-mono text-neutral-500 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
}
