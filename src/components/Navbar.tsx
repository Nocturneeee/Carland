"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", icon: "home" },
    { href: "/catalog", label: "Catalog", icon: "directions_car" },
    { href: "/contact", label: "Contact", icon: "contact_support" },
  ];

  return (
    <header className="bg-surface/80 backdrop-blur-xl sticky top-0 z-50 border-b border-white/10 shadow-sm h-16 md:h-20 flex items-center">
      <div className="flex justify-between items-center w-full px-4 md:px-[64px] max-w-[1280px] mx-auto">
        {/* Logo + Desktop Nav */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/" className="text-xl md:text-2xl font-extrabold text-primary tracking-tight">
            GarasiBoost
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`nav-menu-link pb-1 text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? "text-primary font-bold"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/admin" className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-primary/5">
            <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
            Admin Login
          </Link>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-primary/5 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-on-surface">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-surface/98 backdrop-blur-xl border-b border-outline-variant/20 shadow-2xl md:hidden z-50">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-semibold ${
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-on-surface-variant hover:text-primary hover:bg-primary/5"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
                {link.label}
              </Link>
            ))}
            <hr className="border-outline-variant/20 my-1" />
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-sm font-semibold text-on-surface-variant">Appearance</span>
              <ThemeToggle />
            </div>
            <Link
              href="/admin"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-primary hover:bg-primary/5 rounded-xl transition-all text-sm font-semibold"
            >
              <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
              Admin Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
