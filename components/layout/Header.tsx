'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'

const navLinks = [
  { label: 'New Arrivals', href: '/shop?filter=new' },
  { label: 'Collections', href: '/collections' },
  { label: 'Womenswear', href: '/shop?category=Womenswear' },
  { label: 'Menswear', href: '/shop?category=Menswear' },
  { label: 'Jewelry', href: '/shop?category=Jewelry' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { toggleCart, totalItems } = useCartStore()
  const count = mounted ? totalItems() : 0

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-obsidian-black/95 backdrop-blur-md border-b border-obsidian-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Left — hamburger on mobile, nav on desktop */}
            <div className="flex items-center">
              <button
                className="lg:hidden text-obsidian-cream/70 hover:text-obsidian-gold transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
              <nav className="hidden lg:flex items-center gap-8">
                {navLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-2xs tracking-[0.25em] uppercase text-obsidian-cream/70 hover:text-obsidian-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Logo — centred absolutely so it stays true-centre at all sizes */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 font-display text-2xl tracking-[0.4em] uppercase text-obsidian-cream"
            >
              OBSIDIAN
            </Link>

            {/* Right — icons */}
            <div className="flex items-center gap-5 lg:gap-6">
              <nav className="hidden lg:flex items-center gap-8 mr-2">
                {navLinks.slice(2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-2xs tracking-[0.25em] uppercase text-obsidian-cream/70 hover:text-obsidian-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <button
                aria-label="Search"
                className="text-obsidian-cream/70 hover:text-obsidian-gold transition-colors duration-300"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              <Link
                href="/account"
                aria-label="Account"
                className="hidden lg:block text-obsidian-cream/70 hover:text-obsidian-gold transition-colors duration-300"
              >
                <User size={18} strokeWidth={1.5} />
              </Link>

              <button
                onClick={toggleCart}
                aria-label="Shopping bag"
                className="relative text-obsidian-cream/70 hover:text-obsidian-gold transition-colors duration-300"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-obsidian-gold text-obsidian-black text-[10px] flex items-center justify-center font-medium">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-obsidian-black flex flex-col">
          <div className="flex items-center justify-between px-6 h-20 border-b border-obsidian-border">
            <span className="font-display text-2xl tracking-[0.4em] uppercase">OBSIDIAN</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={20} strokeWidth={1.5} className="text-obsidian-cream/70" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl tracking-wide py-3 border-b border-obsidian-border text-obsidian-cream/80 hover:text-obsidian-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/account"
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl tracking-wide py-3 mt-4 text-obsidian-cream/50 hover:text-obsidian-gold transition-colors"
            >
              My Account
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
