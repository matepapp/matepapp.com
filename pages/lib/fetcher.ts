export async function fetcher(...args) {
  // @ts-expect-error dynamic fetch arguments
  const res = await fetch(...args)

  return res.json()
}
