const items = [
  'Haute Couture',
  'Bespoke Tailoring',
  'Rare Materials',
  'Geneva Jewellery',
  'Paris Atelier',
  'London Savile Row',
  'Milano Craftsmanship',
  'Exceptional by Design',
]

export function MarqueeStrip() {
  const doubled = [...items, ...items]

  return (
    <div className="border-y border-obsidian-border bg-obsidian-dark py-4 overflow-hidden">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span className="text-2xs tracking-[0.3em] uppercase text-obsidian-muted whitespace-nowrap">
              {item}
            </span>
            <span className="text-obsidian-gold text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
