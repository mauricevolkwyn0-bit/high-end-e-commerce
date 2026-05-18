import Image from 'next/image'
import Link from 'next/link'
import { Hero } from '@/components/home/Hero'
import { MarqueeStrip } from '@/components/home/MarqueeStrip'
import { ProductCard } from '@/components/products/ProductCard'
import { featuredProducts, collections } from '@/lib/data/products'

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />

      {/* Featured Products */}
      <section className="py-section px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-2xs tracking-[0.3em] uppercase text-obsidian-gold mb-3">
              Curated Selection
            </p>
            <h2 className="font-display text-display-sm text-obsidian-cream">
              Featured Pieces
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden lg:block text-2xs tracking-[0.25em] uppercase text-obsidian-cream/50 hover:text-obsidian-gold transition-colors duration-300 border-b border-obsidian-border pb-0.5"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center lg:hidden">
          <Link
            href="/shop"
            className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold border-b border-obsidian-gold pb-0.5"
          >
            View All Pieces
          </Link>
        </div>
      </section>

      <MarqueeStrip />

      {/* Collections */}
      <section className="py-section px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="mb-12">
          <p className="text-2xs tracking-[0.3em] uppercase text-obsidian-gold mb-3">
            Atelier
          </p>
          <h2 className="font-display text-display-sm text-obsidian-cream">
            Our Collections
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {collections.map((collection, i) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.slug}`}
              className={`group relative overflow-hidden bg-obsidian-charcoal ${
                i === 0 ? 'lg:row-span-2 aspect-[3/4] lg:aspect-auto lg:min-h-[700px]' : 'aspect-[3/2]'
              }`}
            >
              <Image
                src={collection.cover_image}
                alt={collection.name}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-black/80 via-obsidian-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-2">
                  {collection.product_count} Pieces
                </p>
                <h3 className="font-display text-2xl lg:text-3xl text-obsidian-cream mb-2">
                  {collection.name}
                </h3>
                <p className="text-sm text-obsidian-cream/60 leading-relaxed hidden lg:block max-w-xs">
                  {collection.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Editorial Banner */}
      <section className="py-section-sm px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="relative overflow-hidden bg-obsidian-charcoal min-h-[300px] flex items-center justify-center text-center px-8 py-20">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1800&q=80&auto=format&fit=crop"
              alt="Editorial"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <p className="text-2xs tracking-[0.4em] uppercase text-obsidian-gold mb-6">
              Private Clientele
            </p>
            <h2 className="font-display text-4xl lg:text-6xl text-obsidian-cream mb-6 leading-none">
              By Appointment Only
            </h2>
            <p className="text-obsidian-cream/60 text-sm leading-relaxed mb-8 max-w-md mx-auto">
              For our most discerning clients, we offer a private viewing experience at our atelier in Paris, London, and Geneva.
            </p>
            <Link
              href="/contact"
              className="inline-block text-2xs tracking-[0.3em] uppercase text-obsidian-black bg-obsidian-gold hover:bg-obsidian-gold-light transition-colors duration-300 px-10 py-4"
            >
              Request a Viewing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
