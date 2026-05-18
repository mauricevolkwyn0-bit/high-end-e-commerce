import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getCollectionBySlug, getProductsByCollection, collections } from '@/lib/data/products'
import { ProductCard } from '@/components/products/ProductCard'

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }))
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const collection = getCollectionBySlug(slug)
  if (!collection) notFound()

  const collectionProducts = getProductsByCollection(collection.id)

  return (
    <>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src={collection.cover_image}
          alt={collection.name}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-black via-obsidian-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-12 pb-16 max-w-screen-2xl mx-auto">
          <p className="text-2xs tracking-[0.3em] uppercase text-obsidian-gold mb-4">
            Collection
          </p>
          <h1 className="font-display text-display-sm text-obsidian-cream leading-none mb-4">
            {collection.name}
          </h1>
          <p className="text-obsidian-cream/60 max-w-lg leading-relaxed">
            {collection.description}
          </p>
        </div>
      </div>

      {/* Products */}
      <section className="py-section px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <p className="text-2xs tracking-[0.2em] uppercase text-obsidian-muted mb-10">
          {collectionProducts.length} {collectionProducts.length === 1 ? 'Piece' : 'Pieces'}
        </p>
        {collectionProducts.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-display text-3xl text-obsidian-cream/30">
              Coming Soon
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {collectionProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
