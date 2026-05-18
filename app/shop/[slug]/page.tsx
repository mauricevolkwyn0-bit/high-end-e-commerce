import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductBySlug, products } from '@/lib/data/products'
import { AddToCart } from '@/components/products/AddToCart'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  return (
    <div className="pt-24 pb-section">
      {/* Breadcrumb */}
      <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto mb-8">
        <nav className="flex items-center gap-2 text-2xs tracking-[0.2em] uppercase text-obsidian-muted">
          <Link href="/shop" className="hover:text-obsidian-gold transition-colors">Shop</Link>
          <span>/</span>
          {product.collection_name && (
            <>
              <Link
                href={`/collections/${product.collection_id}`}
                className="hover:text-obsidian-gold transition-colors"
              >
                {product.collection_name}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-obsidian-cream/50">{product.name}</span>
        </nav>
      </div>

      <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Images */}
        <div className="space-y-3">
          <div className="relative aspect-fashion overflow-hidden bg-obsidian-charcoal">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-3 gap-3">
              {product.images.slice(1).map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden bg-obsidian-charcoal">
                  <Image
                    src={img}
                    alt={`${product.name} view ${i + 2}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 33vw, 17vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="lg:sticky lg:top-28 lg:self-start space-y-8">
          <div>
            {product.collection_name && (
              <p className="text-2xs tracking-[0.3em] uppercase text-obsidian-gold mb-3">
                {product.collection_name}
              </p>
            )}
            <h1 className="font-display text-4xl lg:text-5xl text-obsidian-cream leading-none mb-4">
              {product.name}
            </h1>
            <p className="font-display text-2xl text-obsidian-cream/80">
              ${product.price.toLocaleString()}
            </p>
          </div>

          <div className="w-12 h-px bg-obsidian-border" />

          <p className="text-obsidian-cream/70 text-sm leading-relaxed">
            {product.description}
          </p>

          <AddToCart product={product} />

          {/* Meta */}
          <div className="space-y-3 pt-4 border-t border-obsidian-border">
            {product.material && (
              <div className="flex gap-4">
                <span className="text-2xs tracking-[0.2em] uppercase text-obsidian-muted w-24 flex-shrink-0">
                  Material
                </span>
                <span className="text-sm text-obsidian-cream/70">{product.material}</span>
              </div>
            )}
            {product.origin && (
              <div className="flex gap-4">
                <span className="text-2xs tracking-[0.2em] uppercase text-obsidian-muted w-24 flex-shrink-0">
                  Origin
                </span>
                <span className="text-sm text-obsidian-cream/70">{product.origin}</span>
              </div>
            )}
            <div className="flex gap-4">
              <span className="text-2xs tracking-[0.2em] uppercase text-obsidian-muted w-24 flex-shrink-0">
                Category
              </span>
              <span className="text-sm text-obsidian-cream/70">{product.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
