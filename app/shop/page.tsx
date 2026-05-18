'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { products } from '@/lib/data/products'
import { ProductCard } from '@/components/products/ProductCard'

const categories = ['All', 'Womenswear', 'Menswear', 'Jewelry', 'Bags']

function ShopContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  const filterParam = searchParams.get('filter')

  let filtered = [...products]
  if (categoryParam) {
    filtered = filtered.filter((p) => p.category === categoryParam)
  }
  if (filterParam === 'new') {
    filtered = [...filtered].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
  }

  const activeCategory = categoryParam ?? 'All'

  return (
    <>
      {/* Filter bar */}
      <div className="flex items-center gap-1 flex-wrap">
        {categories.map((cat) => {
          const href = cat === 'All' ? '/shop' : `/shop?category=${cat}`
          const isActive = cat === activeCategory
          return (
            <a
              key={cat}
              href={href}
              className={`px-5 py-2.5 text-2xs tracking-[0.2em] uppercase transition-all duration-300 ${
                isActive
                  ? 'bg-obsidian-gold text-obsidian-black'
                  : 'border border-obsidian-border text-obsidian-cream/60 hover:border-obsidian-gold hover:text-obsidian-gold'
              }`}
            >
              {cat}
            </a>
          )
        })}
      </div>

      <p className="text-2xs tracking-[0.2em] uppercase text-obsidian-muted mt-8 mb-8">
        {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-24">
          <p className="font-display text-3xl text-obsidian-cream/30">No pieces found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  )
}

export default function ShopPage() {
  return (
    <div className="pt-32 pb-section px-6 lg:px-12 max-w-screen-2xl mx-auto">
      <div className="mb-12">
        <p className="text-2xs tracking-[0.3em] uppercase text-obsidian-gold mb-3">
          The Collection
        </p>
        <h1 className="font-display text-display-sm text-obsidian-cream">All Pieces</h1>
      </div>
      <Suspense fallback={<div className="text-obsidian-muted text-2xs tracking-widest uppercase">Loading…</div>}>
        <ShopContent />
      </Suspense>
    </div>
  )
}
