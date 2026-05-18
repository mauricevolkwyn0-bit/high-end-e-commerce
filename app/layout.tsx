import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CartDrawer } from '@/components/cart/CartDrawer'

export const metadata: Metadata = {
  title: { default: 'OBSIDIAN — Luxury Fashion House', template: '%s | OBSIDIAN' },
  description:
    'The world\'s most exclusive fashion house. Couture gowns, bespoke tailoring, and singular jewellery for those who demand the extraordinary.',
  keywords: ['luxury fashion', 'haute couture', 'bespoke', 'designer'],
  openGraph: {
    title: 'OBSIDIAN — Luxury Fashion House',
    description: 'The art of extraordinary.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-obsidian-black text-obsidian-cream antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  )
}
