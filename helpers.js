export async function fetchJSON(url, opts = {}) {
  const res = await fetch(url, opts)
  if (!res.ok) throw new Error('Network error')
  return res.json()
}
