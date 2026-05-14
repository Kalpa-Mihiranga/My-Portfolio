import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects, siteConfig, skills } from "@/lib/data";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="bg-background">

      {/* ─── Hero Section ─────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        </div>

        {/* Decorative line */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="section-container relative z-10 pb-24 pt-32">
          {/* Label */}
          <div className="animate-fade-in-up delay-100 flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-primary" />
            <span className="label-mono text-primary">{siteConfig.role.split(" ")[0].toUpperCase()}-STACK ENGINEER</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-200 font-sans font-bold leading-[1.02] tracking-tight mb-8 max-w-4xl"
              style={{ fontSize: "clamp(40px, 6.5vw, 72px)" }}>
            Engineering full-stack systems<br />
            at the{" "}
            <em className="text-primary not-italic">intersection</em>{" "}
            of Software, Data, and Design.
          </h1>

          {/* Subtext */}
          <p className="animate-fade-in-up delay-300 text-on-surface-variant text-lg max-w-2xl leading-relaxed mb-12">
            {siteConfig.bio}
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-mono text-sm font-semibold tracking-widest hover:bg-primary/90 transition-all duration-300 glow-hover rounded-sm"
            >
              Explore Portfolio
              <ArrowRight size={16} />
            </Link>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/20 font-mono text-sm tracking-widest hover:border-primary/50 hover:text-primary transition-all duration-300 rounded-sm"
            >
              View Technical Docs
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Selected Projects ─────────────────────────── */}
      <section className="py-32">
        <div className="section-container">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="label-mono text-primary block mb-3">Case Studies</span>
              <h2 className="font-sans font-bold text-4xl tracking-tight">Selected Projects</h2>
            </div>
            <p className="text-on-surface-variant max-w-xs leading-relaxed">
              A showcase of technical architecture and intuitive interface design across diverse industries.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured Large Card */}
            {featuredProjects[0] && (
              <div className="md:col-span-1 group relative overflow-hidden rounded-xl border border-white/5 bg-surface-container">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={featuredProjects[0].image}
                    alt={featuredProjects[0].title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {featuredProjects[0].tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-sans font-semibold text-xl mb-1">{featuredProjects[0].title}</h3>
                  <p className="text-on-surface-variant text-sm mb-4">{featuredProjects[0].description}</p>
                  
                  {/* Problem / Solution / Outcome */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Problem", text: featuredProjects[0].problem },
                      { label: "Solution", text: featuredProjects[0].solution },
                      { label: "Outcome", text: featuredProjects[0].outcome },
                    ].map(({ label, text }) => (
                      <div key={label}>
                        <span className="label-mono text-on-surface-variant block mb-1">{label}</span>
                        <p className="text-[12px] text-on-surface-variant leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                  
                  {featuredProjects[0].githubUrl && (
                    <a href={featuredProjects[0].githubUrl} target="_blank" rel="noopener noreferrer"
                       className="label-mono text-primary flex items-center gap-2 hover:gap-3 transition-all">
                      View Case Study <ArrowRight size={12} />
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Right column cards */}
            <div className="flex flex-col gap-6">
              {featuredProjects.slice(1, 3).map((project) => (
                <div key={project.id}
                     className="group relative overflow-hidden rounded-xl border border-white/5 bg-surface-container hover:border-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-0">
                    {project.image && (
                      <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                    )}
                    <div className="flex-1 p-6">
                      <span className="label-mono text-primary block mb-2">{project.category}</span>
                      <h3 className="font-sans font-semibold text-lg mb-2">{project.title}</h3>
                      <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tech-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Competencies ────────────────────────── */}
      <section className="py-32 border-t border-white/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <span className="label-mono text-primary block mb-4">Core Competencies</span>
              <h2 className="font-sans font-bold text-4xl tracking-tight mb-6">
                Forging the digital backbone of tomorrow.
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-10">{siteConfig.bio}</p>

              {/* Skills grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "01. Frontend", value: skills.frontend.slice(0, 2).join(", ") },
                  { label: "02. Backend", value: skills.backend.slice(0, 2).join(", ") },
                  { label: "03. Data", value: skills.data.slice(0, 2).join(", ") },
                  { label: "04. Design", value: skills.design.slice(0, 2).join(", ") },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <span className="label-mono text-primary block mb-1">{label}</span>
                    <span className="font-mono text-sm text-on-surface-variant">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Terminal-style status panel */}
            <div className="glass-panel rounded-xl p-6 font-mono text-sm">
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-on-surface-variant text-xs tracking-widest">system_diagnostics.exe</span>
              </div>

              {/* Status rows */}
              {[
                { label: "Database Integrity", status: "ACTIVE", color: "text-primary" },
                { label: "Cloud Sync", status: "OPTIMAL", color: "text-secondary-fixed" },
                { label: "System Diagnostics", status: "STABLE", color: "text-tertiary" },
              ].map(({ label, status, color }) => (
                <div key={label} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                  <span className="text-on-surface-variant tracking-wider text-xs">{label}</span>
                  <span className={`${color} tracking-widest text-xs font-semibold`}>{status}</span>
                </div>
              ))}

              {/* Terminal output */}
              <div className="mt-6 space-y-1">
                {[
                  "> INITIALIZING_CORE_SERVICES...",
                  "> CONNECTING_SECURE_STORAGE...",
                  "> READY_FOR_DEPLOYMENT...",
                ].map((line) => (
                  <p key={line} className="text-on-surface-variant text-xs tracking-wider opacity-60">{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
