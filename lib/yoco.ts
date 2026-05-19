export async function createYocoCheckout(
  amountInCents: number,
  successUrl: string,
  cancelUrl: string,
  failureUrl: string,
) {
  const res = await fetch('https://payments.yoco.com/api/checkouts', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.YOCO_SECRET_KEY!}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount: amountInCents,
      currency: 'ZAR',
      successUrl,
      cancelUrl,
      failureUrl,
    }),
  })

  const data = await res.json()
  if (!res.ok) {
    throw new Error(
      `Yoco checkout failed (${res.status}): ${data.displayMessage ?? data.errorCode ?? 'unknown error'}`
    )
  }
  return data
}
