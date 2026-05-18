import { NextRequest, NextResponse } from 'next/server'
import { capturePayPalOrder } from '@/lib/paypal'

export async function POST(req: NextRequest) {
  try {
    const { orderId } = await req.json()
    if (!orderId) {
      return NextResponse.json({ error: 'Missing orderId' }, { status: 400 })
    }
    const capture = await capturePayPalOrder(orderId)
    return NextResponse.json(capture)
  } catch (err) {
    console.error('PayPal capture-order error:', err)
    return NextResponse.json({ error: 'Failed to capture order' }, { status: 500 })
  }
}
