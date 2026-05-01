import { experience } from "@/content/portfolio";
import { SectionReveal } from "../SectionReveal";

export function Experience() {
  return (
    <section className="container py-24 md:py-36">
      <SectionReveal>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Timeline</p>
        <h2 className="font-display text-4xl md:text-6xl leading-tight text-balance max-w-3xl">
          A short walk through where I've been.
        </h2>
      </SectionReveal>

      <div className="mt-20 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
        <ul className="space-y-12">
          {experience.map((e, i) => {
            const left = i % 2 === 0;
            return (
              <li key={i} className="relative grid md:grid-cols-2 gap-6 md:gap-12">
                <span
                  aria-hidden
                  className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 h-3 w-3 rounded-full bg-primary ring-4 ring-background"
                />
                {left ? (
                  <>
                    <SectionReveal className="md:text-right pl-10 md:pl-0 md:pr-12">
                      <Card item={e} align="right" />
                    </SectionReveal>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <SectionReveal className="pl-10 md:pl-12">
                      <Card item={e} align="left" />
                    </SectionReveal>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Card({ item, align }: { item: typeof experience[number]; align: "left" | "right" }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 hover-lift inline-block w-full">
      <div className={`flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground ${align === "right" ? "md:justify-end" : ""}`}>
        <span>{item.kind === "work" ? "Work" : "Education"}</span>
        <span>·</span>
        <span>{item.period}</span>
      </div>
      <h3 className="mt-2 font-display text-2xl">{item.role}</h3>
      <p className="text-primary text-sm font-medium">{item.org}</p>
      <p className="mt-3 text-muted-foreground leading-relaxed">{item.blurb}</p>
    </div>
  );
}
