import { skills, education, certifications, languages, siteConfig } from "@/lib/data";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <div className="bg-background py-24">
      <div className="section-container">

        {/* ── Hero ── */}
        <section className="mb-32">
          <h1 className="font-sans font-bold tracking-tight mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
            Precision in Code,<br />
            <span className="text-primary">Elegance in Systems.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            An intersection of structural engineering principles and contemporary interaction design.
            Crafting digital environments where performance meets aesthetic clarity.
          </p>
        </section>

        {/* ── The Journey ── */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <span className="label-mono text-primary block mb-4">01. The Journey</span>
              <h2 className="font-sans font-semibold text-3xl tracking-tight">
                Growth Through Iteration.
              </h2>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-on-surface-variant leading-relaxed">
                  Starting from a foundation in algorithmic logic, I transitioned into the visual
                  realm to bridge the gap between technical feasibility and user desire. My career
                  has been a deliberate progression from building functional blocks to architecting
                  complete digital ecosystems.
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  I believe that great design is not just how something looks, but how it behaves
                  under load. Every pixel is backed by a rationale of efficiency and clarity.
                </p>
              </div>
              {/* Image */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary-container/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-700" />
                <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-surface-container">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
                    alt="Architecture abstraction"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Technical Stack (Bento Grid) ── */}
        <section className="mb-32">
          <div className="mb-12">
            <span className="label-mono text-primary block mb-4">02. Technical Stack</span>
            <h2 className="font-sans font-semibold text-3xl tracking-tight">Core Competencies.</h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[560px]">

            {/* Frontend — wide */}
            <div className="md:col-span-2 glass-panel rounded-xl p-8 flex flex-col justify-between hover:border-white/15 transition-all duration-300">
              <div>
                <div className="w-8 h-8 border border-primary/30 bg-primary/10 rounded flex items-center justify-center mb-4">
                  <span className="text-primary text-xs">⌨</span>
                </div>
                <h3 className="font-sans font-semibold text-xl mb-2">Frontend Architecture</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((s) => (
                  <span key={s} className="tech-tag">{s}</span>
                ))}
              </div>
            </div>

            {/* Visual Systems — tall */}
            <div className="md:col-span-1 md:row-span-2 glass-panel rounded-xl p-8 flex flex-col justify-between hover:border-white/15 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-8 h-8 border border-secondary-fixed/30 bg-secondary-fixed/10 rounded flex items-center justify-center mb-4">
                  <span className="text-secondary-fixed text-xs">◈</span>
                </div>
                <h3 className="font-sans font-semibold text-xl">Visual Systems</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Design language definitions, prototyping, and complex interaction models.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {skills.design.map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary-fixed flex-shrink-0" />
                    <span className="font-mono text-sm tracking-wider">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend — smaller */}
            <div className="md:col-span-1 md:row-span-1 glass-panel rounded-xl p-8 flex flex-col justify-between hover:border-white/15 transition-all duration-300">
              <h3 className="label-mono text-on-surface-variant">Back-End</h3>
              <div className="space-y-2">
                {skills.backend.slice(0, 3).map((s) => (
                  <div key={s} className="font-mono text-sm tracking-wider">{s.toUpperCase()}</div>
                ))}
              </div>
            </div>

            {/* System Design — wide bottom */}
            <div className="md:col-span-2 md:row-span-1 glass-panel rounded-xl p-8 flex items-center justify-between group overflow-hidden hover:border-white/15 transition-all duration-300">
              <div className="z-10">
                <h3 className="font-sans font-semibold text-xl mb-2">System Design</h3>
                <p className="text-on-surface-variant text-sm max-w-xs">
                  Scalable infrastructure and deployment pipelines using Docker and AWS.
                </p>
              </div>
              <div className="opacity-5 group-hover:opacity-15 transition-opacity text-8xl font-mono text-primary select-none">
                ▣
              </div>
            </div>

          </div>
        </section>

        {/* ── Education ── */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <span className="label-mono text-primary block mb-4">03. Education</span>
              <h2 className="font-sans font-semibold text-3xl tracking-tight">
                Formal<br />Academic Background.
              </h2>
            </div>
            <div className="md:col-span-2 space-y-10">
              {education.map((edu, i) => (
                <div key={i} className="border-b border-white/5 pb-10 last:border-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                    <div>
                      <h4 className="font-sans font-semibold text-xl mb-1">{edu.degree}</h4>
                      <p className="font-mono text-sm text-primary tracking-wider">{edu.institution}</p>
                    </div>
                    <span className="font-mono text-sm text-on-surface-variant shrink-0">{edu.period}</span>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">{edu.description}</p>
                </div>
              ))}

              {/* Certifications & Languages */}
              <div className="flex gap-12 pt-4">
                <div>
                  <span className="label-mono text-on-surface-variant block mb-3">Certification</span>
                  {certifications.map((cert) => (
                    <p key={cert} className="font-mono text-sm tracking-wider">{cert}</p>
                  ))}
                </div>
                <div>
                  <span className="label-mono text-on-surface-variant block mb-3">Language</span>
                  <p className="font-mono text-sm tracking-wider">{languages.join(" / ")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
