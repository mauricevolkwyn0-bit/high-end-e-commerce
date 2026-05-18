import { NextRequest, NextResponse } from 'next/server'
import { createPayPalOrder } from '@/lib/paypal'

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json()
    if (!amount || typeof amount !== 'number') {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
    }
    const order = await createPayPalOrder(amount)
    return NextResponse.json(order)
  } catch (err) {
    console.error('PayPal create-order error:', err)
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
  }
}
