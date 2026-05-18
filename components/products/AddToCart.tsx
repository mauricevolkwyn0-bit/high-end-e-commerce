'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { useCartStore } from '@/store/cartStore'
import { Product } from '@/lib/types'

export function AddToCart({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? '')
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name ?? '')
  const [added, setAdded] = useState(false)
  const addItem = useCartStore((s) => s.addItem)

  function handleAdd() {
    addItem(product, selectedSize, selectedColor)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Color */}
      {product.colors.length > 0 && (
        <div className="space-y-3">
          <p className="text-2xs tracking-[0.2em] uppercase text-obsidian-muted">
            Colour — <span className="text-obsidian-cream">{selectedColor}</span>
          </p>
          <div className="flex gap-3">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedColor(c.name)}
                aria-label={c.name}
                style={{ backgroundColor: c.hex }}
                className={`w-7 h-7 rounded-full border-2 transition-all duration-300 ${
                  selectedColor === c.name
                    ? 'border-obsidian-gold scale-110'
                    : 'border-obsidian-border hover:border-obsidian-muted'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Size */}
      {product.sizes.length > 0 && (
        <div className="space-y-3">
          <p className="text-2xs tracking-[0.2em] uppercase text-obsidian-muted">Size</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`px-4 py-2.5 text-2xs tracking-[0.15em] uppercase border transition-all duration-300 ${
                  selectedSize === s
                    ? 'border-obsidian-gold text-obsidian-gold bg-obsidian-gold/10'
                    : 'border-obsidian-border text-obsidian-cream/60 hover:border-obsidian-cream/40 hover:text-obsidian-cream'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <Button
        size="lg"
        fullWidth
        onClick={handleAdd}
        disabled={product.stock === 0}
        className="mt-2"
      >
        {product.stock === 0 ? 'Sold Out' : added ? 'Added to Bag' : 'Add to Bag'}
      </Button>
    </div>
  )
}
