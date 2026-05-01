import { projects, profile } from "@/content/portfolio";
import { SectionReveal } from "../SectionReveal";
import { ArrowUpRight, Github } from "lucide-react";

export function FeaturedWork() {
  return (
    <section className="container py-24 md:py-32">
      <SectionReveal>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Selected work</p>
        <h2 className="font-display text-4xl md:text-6xl leading-tight text-balance max-w-3xl">
          A few things I've built recently.
        </h2>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Each scrolls past in its own moment — take your time.
        </p>
      </SectionReveal>

      <div className="mt-24 space-y-32 md:space-y-48">
        {projects.map((p, i) => (
          <ProjectScene key={p.title} project={p} index={i} />
        ))}
      </div>

      <SectionReveal className="mt-32">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="group block rounded-2xl border border-border bg-card p-10 md:p-14 hover-lift"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">More</p>
          <div className="mt-3 flex items-center justify-between gap-6">
            <h3 className="font-display text-3xl md:text-5xl">View all on GitHub</h3>
            <ArrowUpRight className="h-7 w-7 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </a>
      </SectionReveal>
    </section>
  );
}

function ProjectScene({ project, index }: { project: typeof projects[number]; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
      <SectionReveal
        className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}
      >
        <div className="md:sticky md:top-24">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-secondary">
            <div className="absolute inset-0 warm-glow opacity-50" />
            <div className="absolute top-6 left-6 font-display text-7xl md:text-9xl text-primary/30 select-none">
              {project.label}
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              {project.title} — image placeholder
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="md:col-span-5" delay={0.1}>
        <h3 className="font-display text-3xl md:text-5xl leading-tight">{project.title}</h3>
        <p className="mt-5 text-muted-foreground leading-relaxed">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:-translate-y-0.5 transition-transform"
          >
            Live site <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover-lift"
          >
            <Github className="h-4 w-4" /> Source
          </a>
        </div>
      </SectionReveal>
    </div>
  );
}
