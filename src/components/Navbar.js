"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="container-x grid h-[84px] grid-cols-[1fr_auto] items-center md:h-[108px] md:grid-cols-3" aria-label="Main">
        <Logo />

        <ul className="hidden items-center justify-center gap-8 text-sm md:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={l.active ? "font-semibold text-white" : "text-white/75 transition hover:text-white"}
                aria-current={l.active ? "page" : undefined}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center justify-end gap-6 text-sm text-white md:flex">
          <Link href="/sign-in" className="text-white/80 transition hover:text-white">Sign In</Link>
          <Link href="/join-us" className="text-white/80 transition hover:text-white">Join Us</Link>
          <button type="button" aria-label="Cart" className="text-white transition hover:text-lime">
            <ShoppingBag size={18} />
          </button>
        </div>

        <button
          type="button"
          className="justify-self-end text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="container-x md:hidden">
          <ul className="flex flex-col gap-4 rounded-2xl bg-white p-5 text-sm font-medium text-ink shadow-float">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
            {[
              { label: "Sign In", href: "/sign-in" },
              { label: "Join Us", href: "/join-us" },
            ].map((l) => (
              <li key={l.label}>
                <Link href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
