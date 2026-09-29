/* Decorative 3D shape. Purely visual, hidden from assistive tech. */
export default function Deco({ src, className = "" }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" aria-hidden="true" className={`pointer-events-none absolute select-none ${className}`} />;
}
