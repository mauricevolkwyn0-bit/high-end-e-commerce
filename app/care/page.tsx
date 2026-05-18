import Link from 'next/link'

export const metadata = { title: 'Care Guide — OBSIDIAN' }

const materials = [
  {
    name: 'Silk & Silk Blends',
    instructions: [
      'Hand wash in cool water (max 30°C) with a pH-neutral detergent',
      'Do not wring — gently press between clean towels to remove moisture',
      'Hang dry away from direct sunlight and heat sources',
      'Iron on a low setting while still slightly damp, on the reverse side',
      'Store flat or loosely rolled; avoid hanging which can distort the weave',
    ],
  },
  {
    name: 'Wool & Cashmere',
    instructions: [
      'Dry clean recommended for structured pieces; hand wash acceptable for knitwear',
      'Use only wool-specific detergent; never standard laundry liquid',
      'Lay flat to dry to preserve shape — never hang wet wool',
      'Fold for storage; use cedar blocks to deter moths',
      'Pilling is natural and can be gently removed with a cashmere comb',
    ],
  },
  {
    name: 'Linen',
    instructions: [
      'Machine wash on a gentle cycle at 30°C or hand wash',
      'Linen softens beautifully with each wash — this is a feature, not a flaw',
      'Tumble dry on low or line dry',
      'Iron while damp for a crisp finish, or embrace natural texture',
      'Store folded in a cool, dry drawer',
    ],
  },
  {
    name: 'Leather & Suede',
    instructions: [
      'Wipe clean with a barely damp cloth; never soak or submerge',
      'Condition smooth leather every 3–6 months with a specialist leather cream',
      'For suede, use a dry suede brush to restore the nap after use',
      'Allow wet leather to dry naturally away from heat',
      'Store in the provided dust bag; stuff with tissue paper to maintain shape',
    ],
  },
]

export default function CarePage() {
  return (
    <div className="min-h-screen pt-24 pb-section">
      <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto">

        <div className="max-w-3xl mb-20">
          <p className="text-2xs tracking-[0.3em] uppercase text-obsidian-gold mb-4">Client Services</p>
          <h1 className="font-display text-6xl lg:text-8xl text-obsidian-cream leading-none mb-8">Care Guide</h1>
          <p className="text-obsidian-cream/60 text-lg leading-relaxed">
            The materials we use are chosen to last decades. With the right care, an OBSIDIAN
            garment improves with age. These instructions are by material — follow the label on
            your specific piece for any additional guidance.
          </p>
        </div>

        <div className="space-y-0 mb-16">
          {materials.map((m) => (
            <div key={m.name} className="border-t border-obsidian-border py-12 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-16">
              <h2 className="font-display text-2xl text-obsidian-cream">{m.name}</h2>
              <ul className="space-y-3">
                {m.instructions.map((inst, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-obsidian-cream/60">
                    <span className="text-obsidian-gold/60 mt-0.5 flex-shrink-0">—</span>
                    {inst}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="border-t border-obsidian-border" />
        </div>

        {/* Repair */}
        <div className="border border-obsidian-border p-10 lg:p-14 max-w-2xl mb-16">
          <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-4">Lifetime Repair</p>
          <p className="text-obsidian-cream/60 leading-relaxed mb-6">
            Every OBSIDIAN piece is eligible for our lifetime repair programme — free of charge,
            for any reason, at any time. Send your garment to our Paris atelier and our craftspeople
            will assess and restore it. You pay only the cost of postage to us.
          </p>
          <a
            href="mailto:repairs@obsidian.house"
            className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold border-b border-obsidian-gold pb-0.5"
          >
            repairs@obsidian.house
          </a>
        </div>

        <div className="flex gap-8">
          <Link href="/shipping" className="text-2xs tracking-[0.25em] uppercase text-obsidian-muted hover:text-obsidian-cream transition-colors border-b border-obsidian-border pb-0.5">
            Shipping &amp; Returns
          </Link>
          <Link href="/contact" className="text-2xs tracking-[0.25em] uppercase text-obsidian-muted hover:text-obsidian-cream transition-colors border-b border-obsidian-border pb-0.5">
            Contact Client Services
          </Link>
        </div>

      </div>
    </div>
  )
}
