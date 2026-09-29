export default function Logo({ variant = "light", className = "" }) {
  const text = variant === "light" ? "text-white" : "text-ink";
  return (
    <a href="#" className={`inline-flex items-center gap-2 ${className}`} aria-label="ByteSpace home">
      <svg width="22" height="26" viewBox="0 0 24 28" fill="none" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v6.2A8 8 0 0 1 13.5 8C18.2 8 22 11.8 22 16.5S18.2 25 13.5 25c-1.9 0-3.6-.6-5-1.7A2 2 0 0 1 6 25H4a2 2 0 0 1-2-2V3Zm11.5 9.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
          fill="#C8F400"
        />
      </svg>
      <span className={`text-lg font-bold tracking-tight ${text}`}>ByteSpace</span>
    </a>
  );
}
