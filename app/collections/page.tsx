import Image from 'next/image'
import Link from 'next/link'
import { collections } from '@/lib/data/products'

export default function CollectionsPage() {
  return (
    <div className="pt-32 pb-section px-6 lg:px-12 max-w-screen-2xl mx-auto">
      <div className="mb-16">
        <p className="text-2xs tracking-[0.3em] uppercase text-obsidian-gold mb-3">
          The Atelier
        </p>
        <h1 className="font-display text-display-sm text-obsidian-cream">Our Collections</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={`/collections/${collection.slug}`}
            className="group relative overflow-hidden bg-obsidian-charcoal aspect-[4/5]"
          >
            <Image
              src={collection.cover_image}
              alt={collection.name}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-black/80 via-obsidian-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-2">
                {collection.product_count} Pieces
              </p>
              <h2 className="font-display text-2xl lg:text-3xl text-obsidian-cream mb-3">
                {collection.name}
              </h2>
              <p className="text-sm text-obsidian-cream/60 leading-relaxed max-w-sm">
                {collection.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
