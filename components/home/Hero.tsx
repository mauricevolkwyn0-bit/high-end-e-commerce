'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1800&q=90&auto=format&fit=crop',
    label: 'The Obsidian Collection',
    headline: ['The Art of', 'Extraordinary'],
    sub: 'Autumn / Winter 2025',
    href: '/collections/obsidian-collection',
  },
  {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1800&q=90&auto=format&fit=crop',
    label: 'Lumière de Paris',
    headline: ['Parisian', 'Luminescence'],
    sub: 'Spring / Summer 2025',
    href: '/collections/lumiere-de-paris',
  },
  {
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1800&q=90&auto=format&fit=crop',
    label: 'The Imperiale',
    headline: ['Bespoke', 'Mastery'],
    sub: 'Menswear — Year Round',
    href: '/collections/imperiale',
  },
]

export function Hero() {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setActive((prev) => (prev + 1) % slides.length)
        setFading(false)
      }, 600)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[active]

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background image */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${fading ? 'opacity-0' : 'opacity-100'}`}
      >
        <Image
          src={slide.image}
          alt={slide.label}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-black/80 via-obsidian-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-20 lg:pb-28 px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div
          className={`transition-all duration-700 ${fading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
        >
          <p className="text-2xs tracking-[0.35em] uppercase text-obsidian-gold mb-4">
            {slide.label} — {slide.sub}
          </p>
          <h1 className="font-display font-light leading-none tracking-tight mb-8">
            <span className="block text-[clamp(3.5rem,10vw,8rem)] text-obsidian-cream">
              {slide.headline[0]}
            </span>
            <span className="block text-[clamp(3.5rem,10vw,8rem)] text-obsidian-cream/40">
              {slide.headline[1]}
            </span>
          </h1>
          <div className="flex items-center gap-6">
            <Link href={slide.href}>
              <Button size="lg">Explore Collection</Button>
            </Link>
            <Link
              href="/shop"
              className="text-2xs tracking-[0.25em] uppercase text-obsidian-cream/60 hover:text-obsidian-gold transition-colors duration-300"
            >
              Shop All
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 lg:right-12 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFading(true); setTimeout(() => { setActive(i); setFading(false) }, 300) }}
            className={`h-px transition-all duration-500 ${
              i === active ? 'w-10 bg-obsidian-gold' : 'w-4 bg-obsidian-cream/30'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-2xs tracking-[0.3em] uppercase text-obsidian-cream/30">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-obsidian-cream/30 to-transparent" />
      </div>
    </section>
  )
}
