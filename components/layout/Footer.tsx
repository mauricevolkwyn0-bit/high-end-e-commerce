import Link from 'next/link'
import { Instagram, Twitter } from 'lucide-react'

const links = {
  house: [
    { label: 'Our Story', href: '/about' },
    { label: 'Ateliers', href: '/ateliers' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Careers', href: '/careers' },
  ],
  shop: [
    { label: 'New Arrivals', href: '/shop?filter=new' },
    { label: 'Collections', href: '/collections' },
    { label: 'Womenswear', href: '/shop?category=Womenswear' },
    { label: 'Menswear', href: '/shop?category=Menswear' },
    { label: 'Jewellery', href: '/shop?category=Jewelry' },
  ],
  service: [
    { label: 'Client Services', href: '/contact' },
    { label: 'Bespoke Appointments', href: '/bespoke' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Care Guide', href: '/care' },
    { label: 'Size Guide', href: '/sizes' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-obsidian-dark border-t border-obsidian-border mt-section">
      {/* Newsletter strip */}
      <div className="border-b border-obsidian-border px-4 sm:px-6 lg:px-12 py-10 lg:py-14 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
          <div>
            <p className="text-2xs tracking-[0.3em] uppercase text-obsidian-gold mb-2">
              Private Access
            </p>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-obsidian-cream">
              Receive the exceptional.
            </h3>
          </div>
          <form className="flex w-full lg:w-auto lg:min-w-[400px]">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 min-w-0 bg-transparent border border-obsidian-border border-r-0 px-3 sm:px-5 py-3 sm:py-3.5 text-sm text-obsidian-cream placeholder-obsidian-muted focus:outline-none focus:border-obsidian-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-obsidian-gold text-obsidian-black px-4 sm:px-6 py-3 sm:py-3.5 text-2xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium hover:bg-obsidian-gold-light transition-colors duration-300 whitespace-nowrap flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="font-display text-2xl tracking-[0.4em] uppercase text-obsidian-cream block mb-4">
              OBSIDIAN
            </Link>
            <p className="text-sm text-obsidian-muted leading-relaxed max-w-xs">
              A fashion house defined by singular artistry and uncompromising materials. Since 2018.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-obsidian-muted hover:text-obsidian-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter/X" className="text-obsidian-muted hover:text-obsidian-gold transition-colors">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-5">
                {section === 'house' ? 'The House' : section === 'shop' ? 'Shop' : 'Client Services'}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-obsidian-muted hover:text-obsidian-cream transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-obsidian-border px-4 sm:px-6 lg:px-12 py-6 max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-obsidian-muted tracking-wide">
          © {new Date().getFullYear()} OBSIDIAN. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="text-xs text-obsidian-muted hover:text-obsidian-cream transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs text-obsidian-muted hover:text-obsidian-cream transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
