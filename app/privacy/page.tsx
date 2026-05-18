export const metadata = { title: 'Privacy Policy — OBSIDIAN' }

const sections = [
  {
    title: 'What We Collect',
    body: `When you place an order or create an account, we collect your name, email address, postal address, and payment information. Payment data is processed exclusively by PayPal and Stripe — we never store card details on our servers. We also collect standard browsing data (IP address, browser type, pages visited) via server logs and analytics.`,
  },
  {
    title: 'How We Use Your Data',
    body: `We use your personal data to process and fulfil orders, communicate about your order status, and provide client services. With your explicit consent, we may send you editorial communications about new collections and events. We never sell, rent, or share your personal data with third parties for marketing purposes.`,
  },
  {
    title: 'Data Retention',
    body: `Order records are retained for seven years to comply with financial regulations. Account data is retained for as long as your account is active. You may request deletion of your account and associated data at any time — we will action this within 30 days, subject to legal retention requirements.`,
  },
  {
    title: 'Your Rights (GDPR)',
    body: `If you are based in the European Economic Area, you have the right to access, correct, port, and erase your personal data. You also have the right to object to or restrict our processing of your data, and to withdraw consent at any time. To exercise these rights, contact privacy@obsidian.house. You also have the right to lodge a complaint with your national data protection authority.`,
  },
  {
    title: 'Cookies',
    body: `We use essential cookies to operate the website (session management, cart state) and, with your consent, analytics cookies to understand how the site is used. We do not use advertising or tracking cookies. You can manage your cookie preferences at any time from the banner that appears on your first visit.`,
  },
  {
    title: 'Security',
    body: `All data in transit is encrypted using TLS 1.3. Our infrastructure runs on ISO 27001-certified cloud providers. We conduct annual penetration tests and maintain a responsible disclosure programme for security researchers.`,
  },
  {
    title: 'Contact',
    body: `For privacy-related enquiries, contact our Data Protection Officer at privacy@obsidian.house or by post at: OBSIDIAN, Attn: DPO, 14 Rue du Faubourg Saint-Honoré, 75008 Paris, France.`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-section">
      <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto">

        <div className="max-w-3xl mb-20">
          <h1 className="font-display text-6xl lg:text-7xl text-obsidian-cream leading-none mb-6">Privacy Policy</h1>
          <p className="text-obsidian-cream/40 text-sm">Last updated: January 2025</p>
        </div>

        <div className="max-w-2xl space-y-12">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-2xl text-obsidian-cream mb-4">{s.title}</h2>
              <p className="text-obsidian-cream/60 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
