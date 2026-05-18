import Link from 'next/link'

export const metadata = { title: 'Careers — OBSIDIAN' }

const roles = [
  {
    title: 'Senior Pattern Cutter',
    location: 'Paris Atelier',
    type: 'Permanent',
    department: 'Womenswear',
  },
  {
    title: 'Head of Fabric Procurement',
    location: 'Milan Atelier',
    type: 'Permanent',
    department: 'Operations',
  },
  {
    title: 'Jewellery Designer',
    location: 'Tokyo Atelier',
    type: 'Permanent',
    department: 'Accessories',
  },
  {
    title: 'Client Relations Manager',
    location: 'Remote / Paris',
    type: 'Permanent',
    department: 'Client Services',
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-24 pb-section">
      <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto">

        <div className="max-w-3xl mb-20">
          <p className="text-2xs tracking-[0.3em] uppercase text-obsidian-gold mb-4">The House</p>
          <h1 className="font-display text-6xl lg:text-8xl text-obsidian-cream leading-none mb-8">Careers</h1>
          <p className="text-obsidian-cream/60 text-lg leading-relaxed">
            OBSIDIAN is built by people who believe making something well is the highest form of
            argument. We are small by design, and every role carries real weight. We do not hire
            for potential — we hire for mastery.
          </p>
        </div>

        {/* Current Openings */}
        <div className="mb-20">
          <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-8">Current Openings</p>
          <div className="space-y-0">
            {roles.map((role) => (
              <div
                key={role.title}
                className="border-t border-obsidian-border py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 group cursor-pointer hover:bg-obsidian-charcoal/30 transition-colors px-0 -mx-0"
              >
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-obsidian-cream group-hover:text-obsidian-gold transition-colors">{role.title}</h3>
                  <p className="text-sm text-obsidian-muted mt-1">{role.department}</p>
                </div>
                <div className="flex items-center gap-8 text-sm text-obsidian-cream/50">
                  <span>{role.location}</span>
                  <span className="text-2xs tracking-[0.15em] uppercase border border-obsidian-border px-3 py-1">
                    {role.type}
                  </span>
                </div>
              </div>
            ))}
            <div className="border-t border-obsidian-border" />
          </div>
        </div>

        {/* Speculative */}
        <div className="border border-obsidian-border p-10 lg:p-14 max-w-2xl mb-16">
          <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-4">Speculative Applications</p>
          <p className="text-obsidian-cream/60 leading-relaxed mb-6">
            If you do not see a role that matches your discipline, we welcome introductions from
            extraordinary craftspeople, designers, and specialists. We hold speculative applications
            for eighteen months and contact candidates directly when a relevant position arises.
          </p>
          <a
            href="mailto:careers@obsidian.house"
            className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold border-b border-obsidian-gold pb-0.5"
          >
            careers@obsidian.house
          </a>
        </div>

        <Link
          href="/about"
          className="text-2xs tracking-[0.25em] uppercase text-obsidian-muted hover:text-obsidian-cream transition-colors border-b border-obsidian-border pb-0.5"
        >
          About the House
        </Link>

      </div>
    </div>
  )
}
