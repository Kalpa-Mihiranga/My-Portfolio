"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    // Simulate sending (connect to EmailJS, Resend, or Formspree in production)
            try {
          const response = await fetch("https://formspree.io/f/xvzlljgz", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: form.name,
              email: form.email,
              message: form.message,
            }),
          });

          if (response.ok) {
            setSent(true);

            // Optional: clear form
            setForm({
              name: "",
              email: "",
              message: "",
            });
          } else {
            alert("Failed to send message.");
          }
        } catch (error) {
          console.error(error);
          alert("Something went wrong.");
        } finally {
          setSending(false);
        }
      

    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
  };

  return (
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="bg-background py-24"
>
      <div className="section-container">

        {/* ── Hero ── */}
        <header className="mb-20">
          <span className="label-mono text-primary block mb-4">Inquiry_001</span>
          <h1 className="font-sans font-bold tracking-tight mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
            LET&apos;S BUILD THE<br />
            <span className="text-primary">NEXT GENERATION.</span>
          </h1>
          <p className="text-on-surface-variant max-w-2xl leading-relaxed">
            Ready to transform complex technical requirements into high-performance digital
            experiences? I am currently accepting high-impact collaborations and architectural
            consultations.
          </p>
        </header>

        {/* ── Bento Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">

          {/* Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-xl p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 border border-primary/30 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Send size={24} className="text-primary" />
                </div>
                <h3 className="font-sans font-semibold text-2xl mb-2">Transmission Sent</h3>
                <p className="text-on-surface-variant">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { key: "name", label: "Name", placeholder: "ALAN TURING", type: "text" },
                    { key: "email", label: "Email", placeholder: "ARCHITECTURE@SYSTEM.IO", type: "email" },
                  ].map(({ key, label, placeholder, type }) => (
                    <div key={key} className="space-y-2">
                      <label className="label-mono text-on-surface-variant">{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full bg-surface-container border-0 border-b border-white/10 focus:border-secondary-container outline-none text-on-surface font-mono text-sm py-4 transition-all placeholder:text-on-surface-variant/40"
                      />
                    </div>
                  ))}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="label-mono text-on-surface-variant">Message</label>
                  <textarea
                    rows={5}
                    placeholder="DESCRIBE YOUR PROJECT SCOPE..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-surface-container border-0 border-b border-white/10 focus:border-secondary-container outline-none text-on-surface font-mono text-sm py-4 transition-all resize-none placeholder:text-on-surface-variant/40"
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={sending}
                  className="w-full py-4 bg-primary text-on-primary font-mono text-sm font-bold tracking-widest uppercase glow-hover transition-all duration-300 flex justify-center items-center gap-3 group rounded-sm disabled:opacity-50"
                >
                  {sending ? "Transmitting..." : "Execute Transmission"}
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>

          {/* Right Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Direct Channels */}
            <div className="glass-panel rounded-xl p-8 flex flex-col gap-4">
              <h3 className="label-mono text-on-surface-variant mb-2">Direct_Channels</h3>
              {[
                { icon: Github, label: "GitHub", href: siteConfig.github },
                { icon: Linkedin, label: "LinkedIn", href: siteConfig.linkedin },
                { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}` },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between group p-4 bg-surface-container-high rounded hover:bg-surface-container-highest transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <Icon size={18} className="text-primary" />
                    <span className="font-mono text-sm tracking-wider">{label}</span>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-on-surface-variant group-hover:text-primary transition-colors"
                  />
                </a>
              ))}
            </div>

            {/* Collaborate CTA */}
            <div className="relative overflow-hidden rounded-xl border border-secondary-container/20 bg-secondary-container/5 min-h-[200px] flex flex-col justify-end p-8">
              {/* Background icon */}
              <div className="absolute top-4 right-4 opacity-[0.07] text-secondary-container">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                </svg>
              </div>

              <div className="relative z-10">
                <h4 className="font-sans font-bold text-2xl mb-2 text-secondary-container">
                  Collaborate?
                </h4>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                  {siteConfig.availabilityNote}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                  <span className="label-mono text-secondary-container">
                    Status: {siteConfig.availableForWork ? "Available" : "Unavailable"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Location Banner ── */}
        <section className="w-full h-[360px] glass-panel rounded-xl overflow-hidden relative group">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&q=80"
            alt="Global presence"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/30 to-transparent" />
          <div className="absolute bottom-8 left-8 glass-panel rounded p-5">
            <span className="label-mono text-primary block mb-1">Global Presence</span>
            <p className="font-mono text-sm tracking-wider">{siteConfig.location}</p>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
