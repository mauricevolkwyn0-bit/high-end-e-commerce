import Link from 'next/link'

export const metadata = { title: 'Sustainability — OBSIDIAN' }

const pillars = [
  {
    number: '01',
    title: 'Materials',
    body: 'Every fibre we use is traceable to its source. We work with certified organic cotton, Responsible Wool Standard-certified merino, and deadstock silks from heritage mills. Synthetic fibres account for less than 3% of our annual output — and that figure is falling.',
  },
  {
    number: '02',
    title: 'Production',
    body: 'OBSIDIAN produces to demand. We never manufacture speculative inventory. Our atelier model means every garment has an owner before it is cut. Unsold samples are donated to textile arts schools; fabric off-cuts go to our partner workshops for accessories.',
  },
  {
    number: '03',
    title: 'Longevity',
    body: 'A garment that lasts twenty years has a fraction of the footprint of one that lasts two. Our lifetime repair programme is free, permanent, and unconditional. We will restore any OBSIDIAN piece — at any age, in any condition — for the cost of postage.',
  },
  {
    number: '04',
    title: 'People',
    body: 'All OBSIDIAN artisans are permanent employees, never contractors. We pay above the living wage in every city where we operate, offer funded sabbaticals for craft development, and publish our full supplier list publicly each year.',
  },
]

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen pt-24 pb-section">
      <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto">

        <div className="max-w-3xl mb-24">
          <p className="text-2xs tracking-[0.3em] uppercase text-obsidian-gold mb-4">The House</p>
          <h1 className="font-display text-6xl lg:text-8xl text-obsidian-cream leading-none mb-8">Sustainability</h1>
          <p className="text-obsidian-cream/60 text-lg leading-relaxed">
            We do not use the word &lsquo;sustainable&rsquo; lightly. For OBSIDIAN, it means making fewer things,
            making them better, and standing behind them forever. It is not a marketing position.
            It is a constitutional requirement of how we operate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-obsidian-border mb-24">
          {pillars.map((p) => (
            <div key={p.number} className="bg-obsidian-black p-10 lg:p-14">
              <span className="font-display text-5xl text-obsidian-gold/20 block mb-6">{p.number}</span>
              <h2 className="font-display text-3xl text-obsidian-cream mb-4">{p.title}</h2>
              <p className="text-obsidian-cream/60 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Commitment statement */}
        <div className="border-t border-obsidian-border pt-16 max-w-2xl mb-16">
          <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-6">Our Commitment</p>
          <p className="text-obsidian-cream/70 leading-relaxed mb-4">
            By 2028, OBSIDIAN will operate all three ateliers on 100% renewable energy and achieve
            net-zero Scope 1 and 2 emissions. Our annual Environmental Report is published each
            January and independently audited.
          </p>
          <p className="text-obsidian-cream/70 leading-relaxed">
            We report against the Fashion Pact framework and are founding signatories of the
            Responsible Luxury Initiative.
          </p>
        </div>

        <Link
          href="/about"
          className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold border-b border-obsidian-gold pb-0.5"
        >
          Learn More About the House
        </Link>

      </div>
    </div>
  )
}
