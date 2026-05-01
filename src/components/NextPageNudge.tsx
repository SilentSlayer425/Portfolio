import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function NextPageNudge({ to, label, hint }: { to: string; label: string; hint: string }) {
  return (
    <section className="container py-24">
      <Link
        to={to}
        className="group block rounded-2xl border border-border bg-card p-10 md:p-14 hover-lift"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{hint}</p>
        <div className="mt-3 flex items-center justify-between gap-6">
          <h3 className="font-display text-3xl md:text-5xl">{label}</h3>
          <ArrowRight className="h-7 w-7 text-primary transition-transform group-hover:translate-x-2" />
        </div>
      </Link>
    </section>
  );
}
