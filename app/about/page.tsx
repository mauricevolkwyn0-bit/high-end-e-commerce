import Link from 'next/link'

export const metadata = { title: 'Our Story — OBSIDIAN' }

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-section">
      <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto">

        {/* Hero */}
        <div className="max-w-3xl mb-24">
          <p className="text-2xs tracking-[0.3em] uppercase text-obsidian-gold mb-4">The House</p>
          <h1 className="font-display text-6xl lg:text-8xl text-obsidian-cream leading-none mb-8">Our Story</h1>
          <p className="text-obsidian-cream/60 text-lg leading-relaxed">
            OBSIDIAN was founded in 2018 on a single conviction: that true luxury is not announced,
            it is felt — in the weight of fabric against skin, in the precision of a seam, in the
            silence between ornament and restraint.
          </p>
        </div>

        {/* Divider */}
        <div className="w-px h-24 bg-obsidian-gold/30 mx-0 mb-24" />

        {/* Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-24">
          <div>
            <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-4">Philosophy</p>
            <h2 className="font-display text-4xl text-obsidian-cream mb-6">Restraint as a language</h2>
            <p className="text-obsidian-cream/60 leading-relaxed mb-4">
              Every collection begins not with what to add, but with what to remove. Our designers
              work in silence for the first two weeks of any season — sketching in pencil, in private,
              before the first fabric is touched.
            </p>
            <p className="text-obsidian-cream/60 leading-relaxed">
              The result is clothing that possesses an inner quietness. Garments that do not compete
              for attention, but reward it.
            </p>
          </div>
          <div>
            <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-4">Craft</p>
            <h2 className="font-display text-4xl text-obsidian-cream mb-6">Made to endure</h2>
            <p className="text-obsidian-cream/60 leading-relaxed mb-4">
              Each OBSIDIAN piece passes through no fewer than forty individual artisan hands before
              it leaves our Paris atelier. We work exclusively with mills that have operated for
              more than a century — in Biella, in Lyon, in Kyoto.
            </p>
            <p className="text-obsidian-cream/60 leading-relaxed">
              We do not produce seasonal surplus. Every garment is made to order or in a strictly
              limited run. When it is gone, it is gone.
            </p>
          </div>
        </div>

        {/* Founding */}
        <div className="border-t border-obsidian-border pt-16 mb-24">
          <div className="max-w-2xl">
            <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-4">2018 — Paris</p>
            <blockquote className="font-display text-3xl lg:text-4xl text-obsidian-cream/80 leading-snug italic">
              &ldquo;Luxury is not aspiration. It is inheritance — of time, of skill, of material truth.&rdquo;
            </blockquote>
            <p className="text-obsidian-muted text-sm mt-4 tracking-wide">— Founder, OBSIDIAN</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-8">
          <Link
            href="/collections"
            className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold border-b border-obsidian-gold pb-0.5"
          >
            View Collections
          </Link>
          <Link
            href="/ateliers"
            className="text-2xs tracking-[0.25em] uppercase text-obsidian-muted hover:text-obsidian-cream transition-colors border-b border-obsidian-border pb-0.5"
          >
            Our Ateliers
          </Link>
        </div>

      </div>
    </div>
  )
}
