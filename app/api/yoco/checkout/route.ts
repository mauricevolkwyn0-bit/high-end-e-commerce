import { NextRequest, NextResponse } from 'next/server'
import { createYocoCheckout } from '@/lib/yoco'

export async function POST(req: NextRequest) {
  try {
    const { amountInCents, successUrl, cancelUrl, failureUrl } = await req.json()
    if (typeof amountInCents !== 'number' || !successUrl || !cancelUrl || !failureUrl) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
    const result = await createYocoCheckout(amountInCents, successUrl, cancelUrl, failureUrl)
    return NextResponse.json(result)
  } catch (err) {
    console.error('Yoco checkout error:', err)
    const message = err instanceof Error ? err.message : 'Failed to create checkout'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
