"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Desktop & Mobile Nav Bar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]"
           style={{ background: "rgba(16, 19, 27, 0.85)", backdropFilter: "blur(20px)" }}>
        <div className="section-container flex items-center justify-between h-16">

          {/* Logo / Brand */}
          <Link href="/" className="label-mono text-primary tracking-[0.2em]">
            {siteConfig.title}
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link font-mono text-[13px] tracking-widest transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-primary active"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] tracking-widest px-5 py-2 border border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary transition-all duration-300 rounded-sm"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Drawer ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: "rgba(16, 19, 27, 0.98)", backdropFilter: "blur(20px)" }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-mono text-2xl tracking-widest transition-colors ${
                  pathname === link.href ? "text-primary" : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm tracking-widest px-6 py-3 border border-primary/30 text-primary mt-4"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
