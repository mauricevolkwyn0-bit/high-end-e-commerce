import Link from 'next/link'

export const metadata = { title: 'Shipping & Returns — OBSIDIAN' }

export default function ShippingPage() {
  return (
    <div className="min-h-screen pt-24 pb-section">
      <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto">

        <div className="max-w-3xl mb-20">
          <p className="text-2xs tracking-[0.3em] uppercase text-obsidian-gold mb-4">Client Services</p>
          <h1 className="font-display text-6xl lg:text-8xl text-obsidian-cream leading-none mb-8">Shipping &amp; Returns</h1>
          <p className="text-obsidian-cream/60 text-lg leading-relaxed">
            Every OBSIDIAN order is dispatched in archival packaging by our in-house logistics team.
            Delivery is complimentary, worldwide, without exception.
          </p>
        </div>

        {/* Shipping */}
        <div className="mb-16">
          <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-8">Delivery</p>
          <div className="space-y-0">
            {[
              { region: 'Europe', time: '2 – 3 business days', carrier: 'DHL Express' },
              { region: 'North America', time: '3 – 5 business days', carrier: 'FedEx International Priority' },
              { region: 'Asia Pacific', time: '4 – 6 business days', carrier: 'DHL Express' },
              { region: 'Rest of World', time: '5 – 8 business days', carrier: 'DHL Express' },
            ].map((row) => (
              <div key={row.region} className="border-t border-obsidian-border py-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-0">
                <span className="text-obsidian-cream">{row.region}</span>
                <span className="text-obsidian-cream/60">{row.time}</span>
                <span className="text-obsidian-cream/40 text-sm">{row.carrier}</span>
              </div>
            ))}
            <div className="border-t border-obsidian-border" />
          </div>
          <p className="text-sm text-obsidian-cream/40 mt-4">
            All orders include full tracking and signature-on-delivery. Duties and taxes are
            calculated and paid at checkout — no surprises on arrival.
          </p>
        </div>

        {/* Returns */}
        <div className="mb-16">
          <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-8">Returns</p>
          <div className="max-w-2xl space-y-6 text-obsidian-cream/60 leading-relaxed">
            <p>
              We offer a <span className="text-obsidian-cream">30-day return window</span> from
              the date of delivery. Items must be unworn, unaltered, and in original packaging
              with all tags attached.
            </p>
            <p>
              To initiate a return, contact your dedicated client relations specialist at{' '}
              <a href="mailto:returns@obsidian.house" className="text-obsidian-gold underline-offset-2 hover:underline">
                returns@obsidian.house
              </a>{' '}
              with your order number. A pre-paid returns label will be issued within 4 hours.
            </p>
            <p>
              Refunds are processed within 5 business days of our receiving the returned item.
              We refund to the original payment method. We do not charge restocking fees.
            </p>
          </div>
        </div>

        {/* Exceptions */}
        <div className="border border-obsidian-border p-10 max-w-2xl mb-16">
          <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-4">Non-Returnable Items</p>
          <ul className="space-y-2 text-sm text-obsidian-cream/60">
            {[
              'Bespoke and made-to-order commissions',
              'Swimwear and lingerie (hygiene grounds)',
              'Items with removed or damaged tags',
              'Items showing signs of wear, alteration, or damage',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-obsidian-gold mt-0.5">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-8">
          <Link href="/contact" className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold border-b border-obsidian-gold pb-0.5">
            Contact Client Services
          </Link>
          <Link href="/care" className="text-2xs tracking-[0.25em] uppercase text-obsidian-muted hover:text-obsidian-cream transition-colors border-b border-obsidian-border pb-0.5">
            Care Guide
          </Link>
        </div>

      </div>
    </div>
  )
}
