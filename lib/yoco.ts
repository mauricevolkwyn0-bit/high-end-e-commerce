export async function createYocoCharge(token: string, amountInCents: number) {
  const res = await fetch('https://online.yoco.com/v1/charges/', {
    method: 'POST',
    headers: {
      'X-Auth-Secret-Key': process.env.YOCO_SECRET_KEY!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token, amountInCents, currency: 'ZAR' }),
  })

  const data = await res.json()
  if (!res.ok) {
    throw new Error(
      `Yoco charge failed (${res.status}): ${data.displayMessage ?? data.errorCode ?? 'unknown error'}`
    )
  }
  return data
}
