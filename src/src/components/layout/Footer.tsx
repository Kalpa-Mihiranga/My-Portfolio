import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-container-lowest">
      <div className="section-container py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <span className="label-mono text-on-surface-variant">
          {siteConfig.title}
        </span>

        {/* Copyright */}
        <span className="font-mono text-[11px] tracking-widest text-secondary-fixed text-center">
          {siteConfig.copyright}
        </span>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] text-on-surface-variant hover:text-secondary-container transition-colors tracking-wider"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] text-on-surface-variant hover:text-secondary-container transition-colors tracking-wider"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-[13px] text-on-surface-variant hover:text-secondary-container transition-colors tracking-wider"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
