import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "@/content/portfolio";
import { useEffect, useState } from "react";

export function Hero() {
  const reduce = useReducedMotion();
  const words = profile.name.split(" ");
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIdx((i) => (i + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Floating warm blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[60vh] w-[60vh] rounded-full warm-glow blur-3xl animate-blob will-change-transform backface-visibility-hidden"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 h-[55vh] w-[55vh] rounded-full warm-glow blur-3xl animate-blob will-change-transform backface-visibility-hidden"
        style={{ animationDelay: "-7s" }}
      />

      <div className="container relative">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Portfolio · est. {new Date().getFullYear()}
        </p>

        <h1 className="font-display text-[clamp(3rem,11vw,11rem)] leading-[0.95] font-medium">
          {words.map((word, wi) => {
            const charOffset = words.slice(0, wi).reduce((acc, w) => acc + w.length + 1, 0);
            return (
              <span key={wi} className="inline-block whitespace-nowrap">
                {word.split("").map((ch, ci) => (
                  <motion.span
                    key={ci}
                    initial={reduce ? { opacity: 0 } : { y: "110%", opacity: 0 }}
                    animate={reduce ? { opacity: 1 } : { y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: (charOffset + ci) * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {ch}
                  </motion.span>
                ))}
                {wi < words.length - 1 && (
                  <motion.span
                    initial={reduce ? { opacity: 0 } : { y: "110%", opacity: 0 }}
                    animate={reduce ? { opacity: 1 } : { y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: (charOffset + word.length) * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                    style={{ whiteSpace: "pre" }}
                  >
                    {" "}
                  </motion.span>
                )}
              </span>
            );
          })}
        </h1>

        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl">
          <div className="overflow-hidden h-7 md:h-9">
            <motion.div
              key={roleIdx}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-2xl text-primary font-medium"
            >
              {profile.roles[roleIdx]}
            </motion.div>
          </div>
          <p className="md:max-w-md text-muted-foreground leading-relaxed">{profile.tagline}</p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            See the work
            <ArrowDown className="h-4 w-4 -rotate-90" />
          </Link>
          <Link
            to="/connect"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover-lift"
          >
            Get in touch
          </Link>
        </div>

        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] mb-2">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-8 w-[1px] bg-border"
          />
        </motion.div>
      </div>
    </section>
  );
}
