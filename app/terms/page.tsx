export const metadata = { title: 'Terms of Service — OBSIDIAN' }

const sections = [
  {
    title: '1. Acceptance',
    body: `By using the OBSIDIAN website and placing an order, you agree to these terms in full. If you do not agree, please do not use our services. These terms are governed by the laws of France and any disputes shall be subject to the exclusive jurisdiction of the courts of Paris.`,
  },
  {
    title: '2. Orders & Contract',
    body: `Placing an order constitutes an offer to purchase. A contract is only formed when we send you an order confirmation email. We reserve the right to cancel or decline any order at our discretion — for example, where an item is out of stock or where we suspect fraudulent activity. In such cases, you will be refunded in full.`,
  },
  {
    title: '3. Pricing & Payment',
    body: `All prices are displayed in USD and are inclusive of applicable taxes unless otherwise stated. Duties and import taxes for international shipments are calculated at checkout and included in your final total. We accept payment by PayPal and major credit/debit cards via Stripe. All transactions are secured and encrypted.`,
  },
  {
    title: '4. Shipping',
    body: `We dispatch all orders within 2 business days of order confirmation. Delivery times vary by region — see our Shipping & Returns page for current estimates. Risk of loss and title for products pass to you upon delivery. If your order does not arrive within the estimated window, contact us immediately.`,
  },
  {
    title: '5. Returns & Refunds',
    body: `You have the right to return most items within 30 days of delivery. Please refer to our Shipping & Returns page for full details, including non-returnable item categories. Refunds are processed to the original payment method within 5 business days of our receiving your return.`,
  },
  {
    title: '6. Intellectual Property',
    body: `All content on this website — including photography, copy, design, and brand assets — is the property of OBSIDIAN and protected by copyright. You may not reproduce, distribute, or use any content for commercial purposes without our written permission. Personal, non-commercial use for reference or sharing is permitted.`,
  },
  {
    title: '7. Limitation of Liability',
    body: `To the maximum extent permitted by law, OBSIDIAN shall not be liable for indirect, incidental, or consequential damages arising from your use of this website or our products. Our total liability to you shall not exceed the amount you paid for the specific order giving rise to the claim.`,
  },
  {
    title: '8. Changes to These Terms',
    body: `We may update these terms from time to time. The current version, with its date, will always be available on this page. Continued use of the website after changes constitutes acceptance of the revised terms.`,
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-section">
      <div className="px-6 lg:px-12 max-w-screen-2xl mx-auto">

        <div className="max-w-3xl mb-20">
          <h1 className="font-display text-6xl lg:text-7xl text-obsidian-cream leading-none mb-6">Terms of Service</h1>
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
