import { profile } from "@/content/portfolio";
import { SectionReveal } from "../SectionReveal";

export function About() {
  return (
    <section className="container py-24 md:py-36">
      <SectionReveal>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">About</p>
      </SectionReveal>

      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <SectionReveal className="md:col-span-5">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-secondary">
            <div className="absolute inset-0 warm-glow opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              <img
                src="/Portrait.jpg"
                alt="Portrait of me"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="md:col-span-7" delay={0.15}>
          <h2 className="font-display text-4xl md:text-6xl leading-tight text-balance">
            A quiet maker who likes things <em className="text-primary">considered</em> and well-built.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
            I'm {profile.name.split(" ")[0]} — a software engineer drawn to the small details that
            make products feel good to use. I work across the stack, sketch when stuck, and care
            about the quiet craft of writing software that lasts.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { k: "Based in", v: profile.location },
              { k: "Focus", v: profile.focus },
              { k: "Currently", v: profile.currently },
            ].map((c) => (
              <div
                key={c.k}
                className="rounded-full border border-border bg-card px-5 py-2 text-sm"
              >
                <span className="text-muted-foreground">{c.k} · </span>
                <span className="font-medium">{c.v}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
