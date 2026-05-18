import Link from 'next/link'

export const metadata = { title: 'Size Guide — OBSIDIAN' }

const womenswear = [
  { obsidian: 'XS', fr: '34', it: '38', uk: '6', us: '2', bust: '82–84', waist: '62–64', hips: '88–90' },
  { obsidian: 'S',  fr: '36', it: '40', uk: '8', us: '4', bust: '86–88', waist: '66–68', hips: '92–94' },
  { obsidian: 'M',  fr: '38', it: '42', uk: '10', us: '6', bust: '90–92', waist: '70–72', hips: '96–98' },
  { obsidian: 'L',  fr: '40', it: '44', uk: '12', us: '8', bust: '94–96', waist: '74–76', hips: '100–102' },
  { obsidian: 'XL', fr: '42', it: '46', uk: '14', us: '10', bust: '98–100', waist: '78–80', hips: '104–106' },
]

const menswear = [
  { obsidian: 'XS', eu: '44', uk: '34', us: '34', chest: '86–88', waist: '76–78', shoulder: '42–43' },
  { obsidian: 'S',  eu: '46', uk: '36', us: '36', chest: '90–92', waist: '80–82', shoulder: '44–45' },
  { obsidian: 'M',  eu: '48', uk: '38', us: '38', chest: '94–96', waist: '84–86', shoulder: '46–47' },
  { obsidian: 'L',  eu: '50', uk: '40', us: '40', chest: '98–100', waist: '88–90', shoulder: '48–49' },
  { obsidian: 'XL', eu: '52', uk: '42', us: '42', chest: '102–104', waist: '92–94', shoulder: '50–51' },
]

export default function SizesPage() {
  return (
    <div className="min-h-screen pt-24 pb-section">
      <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto">

        <div className="max-w-3xl mb-20">
          <p className="text-2xs tracking-[0.3em] uppercase text-obsidian-gold mb-4">Client Services</p>
          <h1 className="font-display text-6xl lg:text-8xl text-obsidian-cream leading-none mb-8">Size Guide</h1>
          <p className="text-obsidian-cream/60 text-lg leading-relaxed">
            All measurements are in centimetres. OBSIDIAN garments are cut with a considered ease —
            consult the individual product page for specific fit notes. When between sizes, we
            recommend sizing up for structured pieces and trusting your instinct for draped styles.
          </p>
        </div>

        {/* How to measure */}
        <div className="mb-16">
          <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-8">How to Measure</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-obsidian-border mb-2">
            {[
              { part: 'Chest / Bust', how: 'Measure around the fullest part of your chest, keeping the tape parallel to the floor.' },
              { part: 'Waist', how: 'Measure around your natural waist — the narrowest point, usually an inch above the navel.' },
              { part: 'Hips', how: 'Measure around the fullest part of your hips, approximately 20cm below your natural waist.' },
            ].map((m) => (
              <div key={m.part} className="bg-obsidian-black p-8">
                <p className="text-2xs tracking-[0.2em] uppercase text-obsidian-gold mb-3">{m.part}</p>
                <p className="text-sm text-obsidian-cream/60 leading-relaxed">{m.how}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Womenswear */}
        <div className="mb-16 overflow-x-auto">
          <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-6">Womenswear</p>
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="border-b border-obsidian-border">
                {['OBSIDIAN', 'FR', 'IT', 'UK', 'US', 'Bust (cm)', 'Waist (cm)', 'Hips (cm)'].map((h) => (
                  <th key={h} className="text-left text-2xs tracking-[0.15em] uppercase text-obsidian-muted pb-4 pr-6">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {womenswear.map((row) => (
                <tr key={row.obsidian} className="border-b border-obsidian-border/40">
                  <td className="py-4 pr-6 text-obsidian-gold font-medium">{row.obsidian}</td>
                  <td className="py-4 pr-6 text-obsidian-cream/70">{row.fr}</td>
                  <td className="py-4 pr-6 text-obsidian-cream/70">{row.it}</td>
                  <td className="py-4 pr-6 text-obsidian-cream/70">{row.uk}</td>
                  <td className="py-4 pr-6 text-obsidian-cream/70">{row.us}</td>
                  <td className="py-4 pr-6 text-obsidian-cream/70">{row.bust}</td>
                  <td className="py-4 pr-6 text-obsidian-cream/70">{row.waist}</td>
                  <td className="py-4 pr-6 text-obsidian-cream/70">{row.hips}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Menswear */}
        <div className="mb-16 overflow-x-auto">
          <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-6">Menswear</p>
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="border-b border-obsidian-border">
                {['OBSIDIAN', 'EU', 'UK', 'US', 'Chest (cm)', 'Waist (cm)', 'Shoulder (cm)'].map((h) => (
                  <th key={h} className="text-left text-2xs tracking-[0.15em] uppercase text-obsidian-muted pb-4 pr-6">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {menswear.map((row) => (
                <tr key={row.obsidian} className="border-b border-obsidian-border/40">
                  <td className="py-4 pr-6 text-obsidian-gold font-medium">{row.obsidian}</td>
                  <td className="py-4 pr-6 text-obsidian-cream/70">{row.eu}</td>
                  <td className="py-4 pr-6 text-obsidian-cream/70">{row.uk}</td>
                  <td className="py-4 pr-6 text-obsidian-cream/70">{row.us}</td>
                  <td className="py-4 pr-6 text-obsidian-cream/70">{row.chest}</td>
                  <td className="py-4 pr-6 text-obsidian-cream/70">{row.waist}</td>
                  <td className="py-4 pr-6 text-obsidian-cream/70">{row.shoulder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Still unsure */}
        <div className="border border-obsidian-border p-10 max-w-2xl mb-16">
          <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-4">Still unsure?</p>
          <p className="text-obsidian-cream/60 leading-relaxed mb-4">
            Our client relations team is happy to advise on fit for any specific piece — including
            recommending a bespoke consultation if a standard size is not quite right for your
            proportions.
          </p>
          <Link href="/contact" className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold border-b border-obsidian-gold pb-0.5">
            Speak to Client Services
          </Link>
        </div>

      </div>
    </div>
  )
}
