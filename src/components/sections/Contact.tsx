import { profile } from "@/content/portfolio";
import { SectionReveal } from "../SectionReveal";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

const tiles = (p: typeof profile) => [
  { label: "Email", value: p.email, href: `mailto:${p.email}`, Icon: Mail },
  { label: "GitHub", value: "@SilentSlayer425", href: p.socials.github, Icon: Github },
  { label: "LinkedIn", value: "/in/nathan-lachmaiya-89188336a/", href: p.socials.linkedin, Icon: Linkedin },
];

export function Contact() {
  return (
    <section className="container py-24 md:py-36">
      <SectionReveal>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Contact</p>
        <h2 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95] text-balance">
          Let's <em className="text-primary">talk.</em>
        </h2>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Got an idea, a role, or just want to say hi? My inbox stays warm.
        </p>
      </SectionReveal>

      <div className="mt-16 grid sm:grid-cols-2 gap-5">
        {tiles(profile).map((t, i) => (
          <SectionReveal key={t.label} delay={i * 0.07}>
            <a
              href={t.href}
              target={t.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 md:p-8 hover-lift"
            >
              <div className="flex items-center gap-5">
                <span className="h-12 w-12 grid place-items-center rounded-xl bg-secondary text-primary">
                  <t.Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.label}</p>
                  <p className="font-display text-xl">{t.value}</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
            </a>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
