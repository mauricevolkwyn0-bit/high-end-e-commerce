import { NextRequest, NextResponse } from 'next/server'
import { createYocoCharge } from '@/lib/yoco'

export async function POST(req: NextRequest) {
  try {
    const { token, amountInCents } = await req.json()
    if (!token || typeof amountInCents !== 'number') {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
    const result = await createYocoCharge(token, amountInCents)
    return NextResponse.json(result)
  } catch (err) {
    console.error('Yoco charge error:', err)
    const message = err instanceof Error ? err.message : 'Failed to process payment'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
