import { profile, highlights } from "@/content/portfolio";
import { SectionReveal } from "../SectionReveal";
import { Download, FileText } from "lucide-react";

export function Resume() {
  return (
    <section className="container py-24 md:py-36">
      <SectionReveal>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Resume</p>
        <h2 className="font-display text-4xl md:text-6xl leading-tight text-balance max-w-3xl">
          The short version, on paper.
        </h2>
      </SectionReveal>

      <div className="mt-16 grid md:grid-cols-12 gap-10 items-start">
        <SectionReveal className="md:col-span-7">
          <div className="relative aspect-[8.5/11] rounded-2xl overflow-hidden border border-border bg-card shadow-[0_30px_80px_-30px_hsl(0_0%_0%/0.2)]">
            <div className="absolute inset-0 p-10 md:p-14 flex flex-col gap-4">
              <div className="font-display text-3xl">{profile.name}</div>
              <div className="text-muted-foreground text-sm">{profile.role} · {profile.location}</div>
              <div className="h-px bg-border my-2" />
              <div className="space-y-2">
                {[1,2,3,4,5,6,7,8].map((n) => (
                  <div key={n} className="h-2 rounded bg-muted" style={{ width: `${50 + ((n*13)%50)}%` }} />
                ))}
              </div>
              <div className="h-px bg-border my-2" />
              <div className="space-y-2">
                {[1,2,3,4,5].map((n) => (
                  <div key={n} className="h-2 rounded bg-muted" style={{ width: `${40 + ((n*17)%55)}%` }} />
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 right-5 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <FileText className="h-3.5 w-3.5" /> resume.pdf · placeholder
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="md:col-span-5" delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-display text-2xl">Highlights</h3>
            <ul className="mt-5 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex gap-3 text-foreground">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <a
              href={profile.resumeUrl}
              download
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:-translate-y-0.5 transition-transform"
            >
              <Download className="h-4 w-4" /> Download PDF
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
