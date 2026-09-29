function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M23.04 12.27c0-.82-.07-1.42-.22-2.05H12.24v3.72h6.19c-.13 1.02-.8 2.56-2.31 3.6l-.02.14 3.35 2.6.23.02c2.13-1.97 3.36-4.86 3.36-8.03Z" />
      <path fill="#34A853" d="M12.24 23c3.04 0 5.6-1 7.46-2.72l-3.56-2.76c-.95.66-2.23 1.13-3.9 1.13-2.98 0-5.5-1.97-6.4-4.7l-.13.01-3.48 2.7-.05.13C3.61 20.42 7.61 23 12.24 23Z" />
      <path fill="#FBBC05" d="M5.84 13.95a6.9 6.9 0 0 1-.37-2.2c0-.77.14-1.5.36-2.2l-.01-.15-3.52-2.74-.12.06A10.94 10.94 0 0 0 1 11.75c0 1.77.43 3.44 1.18 4.93l3.66-2.73Z" />
      <path fill="#EA4335" d="M12.24 4.85c2.12 0 3.55.91 4.37 1.68l3.19-3.12C17.83 1.72 15.28.5 12.24.5 7.61.5 3.61 3.08 1.84 6.75l3.65 2.8c.9-2.73 3.42-4.7 6.75-4.7Z" />
    </svg>
  );
}

export default function SocialAuthButtons() {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label="Continue with Facebook"
        className="flex h-12 flex-1 items-center justify-center rounded-full border border-line text-ink transition hover:border-brand"
      >
        <FacebookIcon />
      </button>
      <button
        type="button"
        aria-label="Continue with Google"
        className="flex h-12 flex-1 items-center justify-center rounded-full border border-line text-ink transition hover:border-brand"
      >
        <GoogleIcon />
      </button>
    </div>
  );
}
