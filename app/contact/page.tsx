export const metadata = { title: 'Client Services — OBSIDIAN' }

const channels = [
  {
    label: 'Email',
    value: 'clientservices@obsidian.house',
    detail: 'Response within 4 hours, Monday – Saturday',
    href: 'mailto:clientservices@obsidian.house',
  },
  {
    label: 'Telephone',
    value: '+33 1 42 00 00 00',
    detail: 'Available 10:00 – 19:00 CET, Monday – Saturday',
    href: 'tel:+33142000000',
  },
  {
    label: 'WhatsApp',
    value: '+33 6 00 00 00 00',
    detail: 'For urgent order enquiries only',
    href: 'https://wa.me/33600000000',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-section">
      <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto">

        <div className="max-w-3xl mb-20">
          <p className="text-2xs tracking-[0.3em] uppercase text-obsidian-gold mb-4">Client Services</p>
          <h1 className="font-display text-6xl lg:text-8xl text-obsidian-cream leading-none mb-8">Contact</h1>
          <p className="text-obsidian-cream/60 text-lg leading-relaxed">
            Every enquiry is handled by a dedicated client relations specialist — not a ticket
            system, not a chatbot. We take as long as necessary to answer properly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-obsidian-border mb-20">
          {channels.map((c) => (
            <div key={c.label} className="bg-obsidian-black p-10 lg:p-12">
              <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-4">{c.label}</p>
              <a
                href={c.href}
                className="font-display text-xl text-obsidian-cream hover:text-obsidian-gold transition-colors block mb-3"
              >
                {c.value}
              </a>
              <p className="text-sm text-obsidian-cream/50">{c.detail}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-2xl">
          <p className="text-2xs tracking-[0.25em] uppercase text-obsidian-gold mb-8">Send a Message</p>
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-2xs tracking-[0.2em] uppercase text-obsidian-muted mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full bg-obsidian-charcoal border border-obsidian-border px-4 py-3 text-sm text-obsidian-cream placeholder-obsidian-muted/50 outline-none focus:border-obsidian-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-2xs tracking-[0.2em] uppercase text-obsidian-muted mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full bg-obsidian-charcoal border border-obsidian-border px-4 py-3 text-sm text-obsidian-cream placeholder-obsidian-muted/50 outline-none focus:border-obsidian-gold transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-2xs tracking-[0.2em] uppercase text-obsidian-muted mb-2">Email Address</label>
              <input
                type="email"
                className="w-full bg-obsidian-charcoal border border-obsidian-border px-4 py-3 text-sm text-obsidian-cream placeholder-obsidian-muted/50 outline-none focus:border-obsidian-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-2xs tracking-[0.2em] uppercase text-obsidian-muted mb-2">Enquiry Type</label>
              <select className="w-full bg-obsidian-charcoal border border-obsidian-border px-4 py-3 text-sm text-obsidian-cream outline-none focus:border-obsidian-gold transition-colors appearance-none">
                <option value="">Select…</option>
                <option>Order Enquiry</option>
                <option>Returns & Exchanges</option>
                <option>Bespoke Commission</option>
                <option>Product Information</option>
                <option>Press & Partnerships</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-2xs tracking-[0.2em] uppercase text-obsidian-muted mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full bg-obsidian-charcoal border border-obsidian-border px-4 py-3 text-sm text-obsidian-cream placeholder-obsidian-muted/50 outline-none focus:border-obsidian-gold transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-obsidian-gold hover:bg-obsidian-gold-light text-obsidian-black py-4 px-10 tracking-[0.3em] uppercase text-2xs font-medium transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}
