import { skills } from "@/content/portfolio";
import { SectionReveal } from "../SectionReveal";

export function Skills() {
  const allBadges = Object.values(skills).flat();
  const doubled = [...allBadges, ...allBadges];

  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="container">
        <SectionReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Stack</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight text-balance max-w-3xl">
            Tools I reach for, sharpened over time.
          </h2>
        </SectionReveal>
      </div>

      <div className="mt-16 relative">
        <div className="flex animate-marquee whitespace-nowrap will-change-transform backface-visibility-hidden">
          {doubled.map((b, i) => (
            <span
              key={i}
              className="mx-3 px-6 py-3 rounded-full border border-border bg-card text-base md:text-lg font-display"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>

      <div className="container mt-16 grid sm:grid-cols-3 gap-6">
        {Object.entries(skills).map(([group, items], idx) => (
          <SectionReveal key={group} delay={idx * 0.1}>
            <div className="rounded-2xl border border-border bg-card p-6 h-full">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{group}</p>
              <ul className="mt-4 space-y-1.5 text-foreground">
                {items.map((s) => (
                  <li key={s} className="font-display text-lg">{s}</li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
