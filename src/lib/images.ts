export function cfImage(id: string, variant = "public", fallback = "") {
  const base = import.meta.env.CLOUDFLARE_BASE;
  if (base) {
    return `${base}/${id}/${variant}`;
  }
  return fallback;
}
