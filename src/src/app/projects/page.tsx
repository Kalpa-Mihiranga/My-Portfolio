"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, Globe } from "lucide-react";
import { projects, type ProjectCategory } from "@/lib/data";

const categories: ("All" | ProjectCategory)[] = ["All", "Software", "Design", "Data"];

export default function ProjectsPage() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="bg-background py-24">
      <div className="section-container">

        {/* ── Page Header ── */}
        <header className="mb-20">
          <span className="label-mono text-primary block mb-4">Selected Works</span>
          <h1 className="font-sans font-bold tracking-tight mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
            Engineering Visual<br />
            <span className="text-primary">Mastery.</span>
          </h1>
          <p className="text-on-surface-variant max-w-2xl leading-relaxed">
            A curation of technical precision and aesthetic rigor across software architecture,
            UI design, and data visualization.
          </p>
        </header>

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-sm tracking-widest px-5 py-2 rounded-sm border transition-all duration-300 ${
                active === cat
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-white/10 text-on-surface-variant hover:border-white/20 hover:text-on-surface"
              }`}
            >
              {cat} {cat !== "All" ? "Projects" : "Projects"}
            </button>
          ))}
        </div>

        {/* ── Project Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {filtered.map((project, i) => (
            <article
              key={project.id}
              className={`group relative rounded-xl border border-white/5 bg-surface-container overflow-hidden hover:border-white/10 transition-all duration-500 ${
                i === 2 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Project image */}
              <div className={`overflow-hidden ${i === 2 ? "flex flex-col lg:flex-row" : ""}`}>
                <div className={`overflow-hidden ${i === 2 ? "lg:w-2/5 aspect-[4/3] lg:aspect-auto" : "aspect-[16/9]"}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                {/* Content */}
                <div className={`p-8 ${i === 2 ? "lg:flex-1 flex flex-col justify-between" : ""}`}>
                  {/* Category badge */}
                  <span className="label-mono text-primary block mb-3">{project.category} / WEB</span>

                  {/* Title row */}
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="font-sans font-semibold text-2xl tracking-tight">{project.title}</h2>
                    <div className="flex gap-2 ml-4 shrink-0">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                           className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                          <Globe size={16} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                           className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Problem / Solution / Outcome */}
                  <div className="space-y-4 mb-6">
                    {[
                      { label: "The Problem", text: project.problem },
                      { label: "The Solution", text: project.solution },
                      { label: "The Outcome", text: project.outcome },
                    ].map(({ label, text }) => (
                      <div key={label} className="pl-3 border-l border-white/10">
                        <span className="label-mono text-on-surface-variant block mb-1">{label}</span>
                        <p className="text-on-surface-variant text-sm leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags + CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                    {(project.liveUrl || project.githubUrl || project.caseStudyUrl) && (
                      <div className="flex gap-3">
                        {project.caseStudyUrl && (
                          <a href={project.caseStudyUrl}
                             className="font-mono text-xs tracking-widest px-4 py-2 border border-primary/30 text-primary hover:bg-primary/10 transition-all rounded-sm">
                            View Full Case Study
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                             className="font-mono text-xs tracking-widest px-4 py-2 border border-white/10 text-on-surface-variant hover:border-primary/30 hover:text-primary transition-all rounded-sm">
                            Launch Site
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <div className="glass-panel rounded-xl p-16 text-center">
          <h3 className="font-sans font-bold text-3xl mb-4">Have a project in mind?</h3>
          <p className="text-on-surface-variant mb-8 max-w-md mx-auto leading-relaxed">
            I&apos;m currently accepting new commissions. Let&apos;s build something technically superior.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-sm tracking-widest px-8 py-4 border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 rounded-sm"
          >
            Start A Conversation
            <ArrowUpRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}
