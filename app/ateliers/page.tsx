import Link from 'next/link'

export const metadata = { title: 'Ateliers — OBSIDIAN' }

const ateliers = [
  {
    city: 'Paris',
    country: 'France',
    founded: '2018',
    specialty: 'Womenswear & Haute Couture',
    description:
      'Our founding atelier occupies a converted 19th-century hôtel particulier in the 8th arrondissement. One hundred and twelve artisans work across three floors of natural light, dedicated exclusively to womenswear and our annual couture commission.',
    address: '14 Rue du Faubourg Saint-Honoré, 75008 Paris',
  },
  {
    city: 'Milan',
    country: 'Italy',
    founded: '2020',
    specialty: 'Menswear & Tailoring',
    description:
      'Opened in 2020 in the Brera district, our Milan atelier specialises in menswear and bespoke tailoring. The building retains its original terracotta floors and wrought-iron balustrades — a reminder that the finest work is always done slowly.',
    address: 'Via Fiori Chiari 9, 20121 Milano',
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    founded: '2022',
    specialty: 'Jewellery & Accessories',
    description:
      'Our most recent house, situated in the Minami-Aoyama gallery quarter. The Tokyo atelier focuses on jewellery and accessories, working with master craftspeople trained in traditional Japanese metalwork alongside contemporary goldsmithing techniques.',
    address: '5-4-1 Minami-Aoyama, Minato-ku, Tokyo',
  },
]

export default function AteliersPage() {
  return (
    <div className="min-h-screen pt-24 pb-section">
      <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto">

        <div className="max-w-3xl mb-20">
          <p className="text-2xs tracking-[0.3em] uppercase text-obsidian-gold mb-4">The House</p>
          <h1 className="font-display text-6xl lg:text-8xl text-obsidian-cream leading-none mb-8">Ateliers</h1>
          <p className="text-obsidian-cream/60 text-lg leading-relaxed">
            Three ateliers. Three cities. One standard of absolute precision. Each house operates
            independently under a dedicated chef d&apos;atelier — a master with no fewer than twenty
            years in their discipline.
          </p>
        </div>

        <div className="space-y-0">
          {ateliers.map((atelier, i) => (
            <div
              key={atelier.city}
              className="border-t border-obsidian-border py-16 grid grid-cols-1 lg:grid-cols-[200px_1fr_300px] gap-8 lg:gap-16"
            >
              <div>
                <span className="font-display text-6xl text-obsidian-gold/20 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div>
                <h2 className="font-display text-4xl text-obsidian-cream mb-1">{atelier.city}</h2>
                <p className="text-2xs tracking-[0.2em] uppercase text-obsidian-muted mb-2">{atelier.country} — Est. {atelier.founded}</p>
                <p className="text-sm text-obsidian-gold tracking-wide mb-6">{atelier.specialty}</p>
                <p className="text-obsidian-cream/60 leading-relaxed max-w-xl">{atelier.description}</p>
              </div>
              <div className="lg:text-right">
                <p className="text-2xs tracking-[0.15em] uppercase text-obsidian-muted mb-2">Address</p>
                <p className="text-sm text-obsidian-cream/60 leading-relaxed">{atelier.address}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-obsidian-border" />
        </div>

        <div className="mt-16">
          <Link
            href="/bespoke"
            className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold border-b border-obsidian-gold pb-0.5"
          >
            Book a Bespoke Appointment
          </Link>
        </div>

      </div>
    </div>
  )
}
