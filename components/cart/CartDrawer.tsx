'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } =
    useCartStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const count = mounted ? totalItems() : 0
  const total = mounted ? totalPrice() : 0
  const visibleItems = mounted ? items : []

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[70] bg-obsidian-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[80] h-full w-full max-w-[420px] bg-obsidian-dark flex flex-col transition-transform duration-500 ease-luxury ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-obsidian-border">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-obsidian-gold" />
            <span className="tracking-[0.25em] uppercase text-2xs text-obsidian-cream">
              Your Bag
              {count > 0 && (
                <span className="ml-2 text-obsidian-muted">({count})</span>
              )}
            </span>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-obsidian-cream/50 hover:text-obsidian-cream transition-colors duration-300"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8">
          {visibleItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-20">
              <ShoppingBag size={40} strokeWidth={1} className="text-obsidian-gray" />
              <p className="font-display text-2xl text-obsidian-cream/50 tracking-wide">
                Your bag is empty
              </p>
              <p className="text-2xs tracking-[0.2em] uppercase text-obsidian-muted">
                Discover our collections
              </p>
              <button
                onClick={closeCart}
                className="mt-4 text-2xs tracking-[0.25em] uppercase text-obsidian-gold hover:text-obsidian-gold-light transition-colors duration-300 border-b border-obsidian-gold pb-0.5"
              >
                Explore Now
              </button>
            </div>
          ) : (
            visibleItems.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                className="flex gap-4"
              >
                {/* Product image placeholder */}
                <div className="w-20 h-24 bg-obsidian-charcoal flex-shrink-0 overflow-hidden">
                  {item.product.images?.[0] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-obsidian-charcoal" />
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col gap-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-display text-base leading-tight text-obsidian-cream">
                      {item.product.name}
                    </p>
                    <button
                      onClick={() =>
                        removeItem(item.product.id, item.selectedSize, item.selectedColor)
                      }
                      aria-label="Remove item"
                      className="text-obsidian-muted hover:text-obsidian-cream transition-colors duration-300 flex-shrink-0 mt-0.5"
                    >
                      <Trash2 size={14} strokeWidth={1.5} />
                    </button>
                  </div>

                  <p className="text-2xs tracking-[0.15em] uppercase text-obsidian-muted">
                    {item.selectedSize} · {item.selectedColor}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-2">
                    {/* Quantity */}
                    <div className="flex items-center gap-3 border border-obsidian-border">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity - 1
                          )
                        }
                        aria-label="Decrease quantity"
                        className="w-8 h-8 flex items-center justify-center text-obsidian-cream/60 hover:text-obsidian-cream transition-colors"
                      >
                        <Minus size={12} strokeWidth={1.5} />
                      </button>
                      <span className="text-sm w-4 text-center tabular-nums text-obsidian-cream">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity + 1
                          )
                        }
                        aria-label="Increase quantity"
                        className="w-8 h-8 flex items-center justify-center text-obsidian-cream/60 hover:text-obsidian-cream transition-colors"
                      >
                        <Plus size={12} strokeWidth={1.5} />
                      </button>
                    </div>

                    <p className="text-sm tracking-wider text-obsidian-cream">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {visibleItems.length > 0 && (
          <div className="px-8 py-6 border-t border-obsidian-border space-y-6">
            <div className="flex items-center justify-between">
              <span className="tracking-[0.2em] uppercase text-2xs text-obsidian-muted">
                Subtotal
              </span>
              <span className="font-display text-xl text-obsidian-cream">
                ${total.toLocaleString()}
              </span>
            </div>
            <p className="text-2xs tracking-[0.15em] text-obsidian-muted text-center">
              Shipping &amp; duties calculated at checkout
            </p>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full bg-obsidian-gold hover:bg-obsidian-gold-light text-obsidian-black text-center py-4 tracking-[0.3em] uppercase text-2xs font-medium transition-colors duration-300"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={closeCart}
              className="block w-full text-center tracking-[0.25em] uppercase text-2xs text-obsidian-cream/40 hover:text-obsidian-cream/70 transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
