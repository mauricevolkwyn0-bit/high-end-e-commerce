export const metadata = { title: 'Bespoke Appointments — OBSIDIAN' }

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    body: 'A private meeting with your dedicated OBSIDIAN atelier director, either in person at one of our three houses or via secure video. We discuss your brief, your timeline, and your intention for the piece.',
  },
  {
    number: '02',
    title: 'Design Dialogue',
    body: 'Over one to three weeks, our design team develops sketches and initial fabric proposals specifically for you. Nothing is shown until it is ready. We do not rush this stage.',
  },
  {
    number: '03',
    title: 'Material Selection',
    body: 'You are presented with our full fabric archive — including materials unavailable in any collection — alongside a sample library for tactile reference. Selections can be made in person or shipped to you by secure courier.',
  },
  {
    number: '04',
    title: 'Fittings',
    body: 'A minimum of three fittings, conducted at your preferred location. We travel to clients worldwide. Final approval does not happen until you are completely satisfied.',
  },
  {
    number: '05',
    title: 'Delivery',
    body: 'Your completed piece arrives in OBSIDIAN archival packaging, accompanied by a certificate of provenance and a care record detailing every material and technique used in its creation.',
  },
]

export default function BespokePage() {
  return (
    <div className="min-h-screen pt-24 pb-section">
      <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto">

        <div className="max-w-3xl mb-20">
          <p className="text-2xs tracking-[0.3em] uppercase text-obsidian-gold mb-4">Client Services</p>
          <h1 className="font-display text-6xl lg:text-8xl text-obsidian-cream leading-none mb-8">Bespoke</h1>
          <p className="text-obsidian-cream/60 text-lg leading-relaxed">
            The most personal expression of OBSIDIAN. A bespoke commission is a collaboration
            between client and craftsperson — a piece made for one body, one occasion, one life.
            We accept a limited number of commissions each season.
          </p>
        </div>

        {/* Process */}
        <div className="mb-20">
          <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-10">The Process</p>
          <div className="space-y-0">
            {steps.map((step) => (
              <div
                key={step.number}
                className="border-t border-obsidian-border py-10 grid grid-cols-1 lg:grid-cols-[80px_200px_1fr] gap-4 lg:gap-12"
              >
                <span className="font-display text-4xl text-obsidian-gold/20">{step.number}</span>
                <h3 className="font-display text-2xl text-obsidian-cream self-start">{step.title}</h3>
                <p className="text-obsidian-cream/60 leading-relaxed">{step.body}</p>
              </div>
            ))}
            <div className="border-t border-obsidian-border" />
          </div>
        </div>

        {/* Lead time & pricing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-obsidian-border mb-16">
          <div className="bg-obsidian-black p-10 lg:p-14">
            <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-4">Lead Time</p>
            <p className="font-display text-3xl text-obsidian-cream mb-4">8 – 16 weeks</p>
            <p className="text-obsidian-cream/60 leading-relaxed text-sm">
              Depending on complexity. Rush commissions (under 6 weeks) are available on request
              and subject to atelier capacity. We will always tell you honestly whether a timeline
              is achievable.
            </p>
          </div>
          <div className="bg-obsidian-black p-10 lg:p-14">
            <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-4">Investment</p>
            <p className="font-display text-3xl text-obsidian-cream mb-4">From €4,800</p>
            <p className="text-obsidian-cream/60 leading-relaxed text-sm">
              A 50% deposit is required to begin. The balance is due at final fitting. All
              bespoke commissions include lifetime repair and alteration under our house guarantee.
            </p>
          </div>
        </div>

        {/* Request form */}
        <div className="max-w-2xl">
          <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-8">Request an Appointment</p>
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-2xs tracking-[0.2em] uppercase text-obsidian-muted mb-2">First Name</label>
                <input type="text" className="w-full bg-obsidian-charcoal border border-obsidian-border px-4 py-3 text-sm text-obsidian-cream outline-none focus:border-obsidian-gold transition-colors" />
              </div>
              <div>
                <label className="block text-2xs tracking-[0.2em] uppercase text-obsidian-muted mb-2">Last Name</label>
                <input type="text" className="w-full bg-obsidian-charcoal border border-obsidian-border px-4 py-3 text-sm text-obsidian-cream outline-none focus:border-obsidian-gold transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-2xs tracking-[0.2em] uppercase text-obsidian-muted mb-2">Email Address</label>
              <input type="email" className="w-full bg-obsidian-charcoal border border-obsidian-border px-4 py-3 text-sm text-obsidian-cream outline-none focus:border-obsidian-gold transition-colors" />
            </div>
            <div>
              <label className="block text-2xs tracking-[0.2em] uppercase text-obsidian-muted mb-2">Preferred Atelier</label>
              <select className="w-full bg-obsidian-charcoal border border-obsidian-border px-4 py-3 text-sm text-obsidian-cream outline-none focus:border-obsidian-gold transition-colors appearance-none">
                <option value="">Select a location…</option>
                <option>Paris</option>
                <option>Milan</option>
                <option>Tokyo</option>
                <option>Remote / Video Consultation</option>
              </select>
            </div>
            <div>
              <label className="block text-2xs tracking-[0.2em] uppercase text-obsidian-muted mb-2">Brief</label>
              <textarea rows={4} placeholder="Tell us what you have in mind…" className="w-full bg-obsidian-charcoal border border-obsidian-border px-4 py-3 text-sm text-obsidian-cream placeholder-obsidian-muted/50 outline-none focus:border-obsidian-gold transition-colors resize-none" />
            </div>
            <button type="submit" className="bg-obsidian-gold hover:bg-obsidian-gold-light text-obsidian-black py-4 px-10 tracking-[0.3em] uppercase text-2xs font-medium transition-colors duration-300">
              Request Appointment
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}
