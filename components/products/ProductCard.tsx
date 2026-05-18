import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="relative aspect-fashion overflow-hidden bg-obsidian-charcoal mb-4 img-hover-zoom">
        {product.images[0] && (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        {product.stock <= 2 && (
          <span className="absolute top-3 left-3 bg-obsidian-black/80 text-obsidian-gold text-2xs tracking-[0.2em] uppercase px-3 py-1.5">
            {product.stock === 1 ? 'Final Piece' : 'Almost Gone'}
          </span>
        )}
      </div>
      <div className="space-y-1">
        {product.collection_name && (
          <p className="text-2xs tracking-[0.2em] uppercase text-obsidian-muted">
            {product.collection_name}
          </p>
        )}
        <p className="font-display text-lg text-obsidian-cream group-hover:text-obsidian-gold transition-colors duration-300">
          {product.name}
        </p>
        <p className="text-sm tracking-wider text-obsidian-cream/70">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  )
}
