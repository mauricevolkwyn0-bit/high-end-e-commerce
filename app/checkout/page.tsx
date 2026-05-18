'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useCartStore } from '@/store/cartStore'
import { ShippingAddress } from '@/lib/types'

const emptyAddress: ShippingAddress = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  address_line_1: '',
  address_line_2: '',
  city: '',
  state: '',
  postal_code: '',
  country: '',
}

type Step = 'shipping' | 'payment' | 'confirmation'

export default function CheckoutPage() {
  const { items, totalPrice, totalItems, clearCart } = useCartStore()
  const [mounted, setMounted] = useState(false)
  const [step, setStep] = useState<Step>('shipping')
  const [address, setAddress] = useState<ShippingAddress>(emptyAddress)
  const [errors, setErrors] = useState<Partial<ShippingAddress>>({})
  const [paypalError, setPaypalError] = useState<string | null>(null)

  useEffect(() => { setMounted(true) }, [])

  const count = mounted ? totalItems() : 0
  const total = mounted ? totalPrice() : 0
  const visibleItems = mounted ? items : []

  function validate() {
    const required: (keyof ShippingAddress)[] = [
      'first_name', 'last_name', 'email', 'address_line_1', 'city', 'state', 'postal_code', 'country',
    ]
    const next: Partial<ShippingAddress> = {}
    required.forEach((k) => {
      if (!address[k]) next[k] = 'Required'
    })
    if (address.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address.email)) {
      next.email = 'Invalid email'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleShippingSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (validate()) setStep('payment')
  }

  function field(
    key: keyof ShippingAddress,
    label: string,
    options?: { type?: string; placeholder?: string; half?: boolean }
  ) {
    return (
      <div className={options?.half ? 'col-span-1' : 'col-span-1 sm:col-span-2'}>
        <label className="block text-2xs tracking-[0.2em] uppercase text-obsidian-muted mb-2">
          {label}
        </label>
        <input
          type={options?.type ?? 'text'}
          value={address[key] ?? ''}
          onChange={(e) => setAddress((prev) => ({ ...prev, [key]: e.target.value }))}
          placeholder={options?.placeholder}
          className={`w-full bg-obsidian-charcoal border px-4 py-3 text-sm text-obsidian-cream placeholder-obsidian-muted/50 outline-none transition-colors duration-300 focus:border-obsidian-gold ${
            errors[key] ? 'border-red-500/60' : 'border-obsidian-border'
          }`}
        />
        {errors[key] && (
          <p className="mt-1 text-2xs text-red-400 tracking-wide">{errors[key]}</p>
        )}
      </div>
    )
  }

  if (mounted && count === 0 && step !== 'confirmation') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
        <p className="font-display text-4xl text-obsidian-cream/30">Your bag is empty</p>
        <Link
          href="/shop"
          className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold border-b border-obsidian-gold pb-0.5"
        >
          Return to Shop
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-section">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-12 max-w-screen-2xl mx-auto mb-10">
        <Link href="/" className="font-display text-2xl tracking-[0.4em] uppercase text-obsidian-cream">
          OBSIDIAN
        </Link>
        <div className="flex items-center gap-4 mt-6">
          {(['shipping', 'payment', 'confirmation'] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center gap-4">
              <span
                className={`text-2xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                  step === s ? 'text-obsidian-gold' : 'text-obsidian-muted'
                }`}
              >
                {s}
              </span>
              {i < 2 && <span className="text-obsidian-border">—</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-12 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-20">

        {/* Left — form area */}
        <div className="order-2 lg:order-1">
          {step === 'shipping' && (
            <form onSubmit={handleShippingSubmit} noValidate>
              <h2 className="font-display text-3xl text-obsidian-cream mb-8">Shipping Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {field('first_name', 'First Name', { half: true })}
                {field('last_name', 'Last Name', { half: true })}
                {field('email', 'Email Address', { type: 'email' })}
                {field('phone', 'Phone (optional)')}
                {field('address_line_1', 'Address')}
                {field('address_line_2', 'Apartment, suite, etc. (optional)')}
                {field('city', 'City', { half: true })}
                {field('state', 'State / Province', { half: true })}
                {field('postal_code', 'Postal Code', { half: true })}
                {field('country', 'Country', { half: true })}
              </div>
              <button
                type="submit"
                className="mt-8 w-full bg-obsidian-gold hover:bg-obsidian-gold-light text-obsidian-black py-4 tracking-[0.3em] uppercase text-2xs font-medium transition-colors duration-300"
              >
                Continue to Payment
              </button>
            </form>
          )}

          {step === 'payment' && (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => setStep('shipping')}
                  className="text-2xs tracking-[0.2em] uppercase text-obsidian-muted hover:text-obsidian-cream transition-colors"
                >
                  ← Back
                </button>
                <h2 className="font-display text-3xl text-obsidian-cream">Payment</h2>
              </div>

              {/* Shipping summary */}
              <div className="border border-obsidian-border p-4 sm:p-6 mb-8 space-y-1">
                <p className="text-2xs tracking-[0.2em] uppercase text-obsidian-gold mb-3">Shipping to</p>
                <p className="text-sm text-obsidian-cream">{address.first_name} {address.last_name}</p>
                <p className="text-sm text-obsidian-cream/70">{address.address_line_1}{address.address_line_2 ? `, ${address.address_line_2}` : ''}</p>
                <p className="text-sm text-obsidian-cream/70">{address.city}, {address.state} {address.postal_code}</p>
                <p className="text-sm text-obsidian-cream/70">{address.country}</p>
              </div>

              <div className="border border-obsidian-border p-4 sm:p-6">
                <p className="text-2xs tracking-[0.2em] uppercase text-obsidian-muted mb-6">
                  Total due: <span className="text-obsidian-cream text-sm ml-2">${total.toLocaleString()}</span>
                </p>
                {process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ? (
                  <PayPalScriptProvider
                    options={{
                      clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                      currency: 'USD',
                    }}
                  >
                    {paypalError && (
                      <p className="mb-4 text-sm text-red-400 text-center">{paypalError}</p>
                    )}
                    <PayPalButtons
                      style={{ layout: 'vertical', color: 'gold', shape: 'rect', label: 'pay' }}
                      createOrder={async () => {
                        setPaypalError(null)
                        const res = await fetch('/api/paypal/create-order', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ amount: total }),
                        })
                        const data = await res.json()
                        if (!res.ok || !data.id) {
                          const msg = data.error ?? 'Failed to create PayPal order. Check server env vars.'
                          setPaypalError(msg)
                          throw new Error(msg)
                        }
                        return data.id
                      }}
                      onApprove={async (data) => {
                        const res = await fetch('/api/paypal/capture-order', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ orderId: data.orderID }),
                        })
                        const capture = await res.json()
                        if (capture.status === 'COMPLETED') {
                          clearCart()
                          setStep('confirmation')
                        } else {
                          setPaypalError('Payment capture failed. Please try again.')
                        }
                      }}
                      onError={(err) => {
                        setPaypalError(String(err) ?? 'An unexpected PayPal error occurred.')
                      }}
                    />
                  </PayPalScriptProvider>
                ) : (
                  <div className="border border-obsidian-border/50 p-6 text-center space-y-3">
                    <p className="text-2xs tracking-[0.2em] uppercase text-obsidian-gold">PayPal Not Configured</p>
                    <p className="text-sm text-obsidian-cream/50">
                      Add <code className="text-obsidian-gold">NEXT_PUBLIC_PAYPAL_CLIENT_ID</code> to your{' '}
                      <code className="text-obsidian-cream/70">.env.local</code> to enable payments.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {step === 'confirmation' && (
            <div className="text-center py-16 space-y-6">
              <div className="w-16 h-px bg-obsidian-gold mx-auto" />
              <h2 className="font-display text-5xl text-obsidian-cream">Thank You</h2>
              <p className="text-obsidian-cream/60 max-w-md mx-auto leading-relaxed">
                Your order has been placed. A confirmation has been sent to{' '}
                <span className="text-obsidian-cream">{address.email}</span>. Our atelier will be
                in touch within 24 hours.
              </p>
              <div className="w-16 h-px bg-obsidian-border mx-auto" />
              <Link
                href="/shop"
                className="inline-block mt-4 text-2xs tracking-[0.25em] uppercase text-obsidian-gold border-b border-obsidian-gold pb-0.5"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>

        {/* Right — order summary */}
        {step !== 'confirmation' && (
          <aside className="order-1 lg:order-2 lg:sticky lg:top-28 lg:self-start space-y-6 border border-obsidian-border lg:border-0 p-5 lg:p-0">
            <h3 className="font-display text-2xl text-obsidian-cream">Order Summary</h3>
            <div className="space-y-5">
              {visibleItems.map((item) => (
                <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                  <div className="relative w-16 h-20 bg-obsidian-charcoal flex-shrink-0 overflow-hidden">
                    {item.product.images?.[0] && (
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    )}
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-obsidian-gold text-obsidian-black text-[10px] flex items-center justify-center font-medium">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-display text-base text-obsidian-cream leading-tight">{item.product.name}</p>
                    <p className="text-2xs tracking-[0.15em] uppercase text-obsidian-muted mt-1">
                      {item.selectedSize} · {item.selectedColor}
                    </p>
                    <p className="text-sm text-obsidian-cream/70 mt-1">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-obsidian-border pt-5 space-y-3">
              <div className="flex justify-between text-sm text-obsidian-cream/70">
                <span>Subtotal ({count} {count === 1 ? 'item' : 'items'})</span>
                <span>${total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-obsidian-cream/70">
                <span>Shipping</span>
                <span className="text-obsidian-gold">Complimentary</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-obsidian-border">
                <span className="text-2xs tracking-[0.2em] uppercase text-obsidian-muted">Total</span>
                <span className="font-display text-xl text-obsidian-cream">${total.toLocaleString()}</span>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}
