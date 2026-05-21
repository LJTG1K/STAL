import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STAL — Premium Stainless Steel Cutlery",
  description: "Archival-grade stainless steel flatware. Sharp geometry. Luminous accents. Brutalist minimalism.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fafaf9" />
      </head>
      <body className="bg-neutral-50 text-neutral-900 min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-neutral-50 border-b border-neutral-200">
          <nav className="container max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-heading font-bold tracking-wider">
              <a href="/" className="hover:text-cyan-600 transition-colors">STAL</a>
            </div>
            <div className="flex items-center gap-8">
              <a href="/shop" className="text-sm font-mono hover:text-cyan-600 transition-colors">SHOP</a>
              <a href="#" className="text-sm font-mono hover:text-cyan-600 transition-colors">ABOUT</a>
              <a href="#" className="text-sm font-mono hover:text-cyan-600 transition-colors">CART</a>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-neutral-200 bg-neutral-50 mt-16">
          <div className="container max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div>
                <h3 className="text-sm font-mono font-bold mb-4 tracking-widest">SHOP</h3>
                <ul className="space-y-2 text-xs font-mono">
                  <li><a href="/shop" className="hover:text-cyan-600">All Products</a></li>
                  <li><a href="#" className="hover:text-cyan-600">Cutlery Sets</a></li>
                  <li><a href="#" className="hover:text-cyan-600">Individual Pieces</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-mono font-bold mb-4 tracking-widest">COMPANY</h3>
                <ul className="space-y-2 text-xs font-mono">
                  <li><a href="#" className="hover:text-cyan-600">About STAL</a></li>
                  <li><a href="#" className="hover:text-cyan-600">Our Craft</a></li>
                  <li><a href="#" className="hover:text-cyan-600">Sustainability</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-mono font-bold mb-4 tracking-widest">SUPPORT</h3>
                <ul className="space-y-2 text-xs font-mono">
                  <li><a href="#" className="hover:text-cyan-600">Contact</a></li>
                  <li><a href="#" className="hover:text-cyan-600">Shipping</a></li>
                  <li><a href="#" className="hover:text-cyan-600">Returns</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-mono font-bold mb-4 tracking-widest">FOLLOW</h3>
                <ul className="space-y-2 text-xs font-mono">
                  <li><a href="#" className="hover:text-cyan-600">Instagram</a></li>
                  <li><a href="#" className="hover:text-cyan-600">Twitter</a></li>
                  <li><a href="#" className="hover:text-cyan-600">Newsletter</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-neutral-200 pt-8">
              <p className="text-xs font-mono text-neutral-600 mb-2">© 2026 STAL. All rights reserved.</p>
              <p className="text-xs font-mono text-neutral-500">Archival-grade stainless steel. Sharp geometry. Luminous accents.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
