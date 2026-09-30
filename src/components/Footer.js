import Logo from "./Logo";
import { footerColumns, legalLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-x pt-14 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Logo variant="dark" />
            <p className="mt-4 max-w-[380px] text-xs text-body">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <form className="mt-5 flex max-w-[420px] items-center gap-2" action="#">
              <label className="flex-1">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-11 w-full rounded-full border border-line bg-white px-5 text-sm outline-none transition placeholder:text-body focus:border-brand"
                />
              </label>
              <button
                type="submit"
                className="h-11 rounded-full bg-lime px-6 text-sm font-semibold text-ink transition hover:brightness-95"
              >
                Search
              </button>
            </form>
            <p className="mt-4 max-w-[380px] text-[10px] leading-relaxed text-body">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((col, i) => (
              <ul key={i} className="space-y-3.5 text-xs text-body">
                {col.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition hover:text-brand">{l}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line py-6 text-[10px] text-body sm:flex-row sm:items-center sm:justify-between md:mt-24">
          <p>&copy; {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex gap-6">
            {legalLinks.map((l) => (
              <li key={l}><a href="#" className="transition hover:text-brand">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
