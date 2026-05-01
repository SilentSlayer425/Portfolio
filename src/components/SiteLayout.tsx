import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/content/portfolio";

const nav = [
  { to: "/", label: "Home" },
  { to: "/journey", label: "Journey" },
  { to: "/work", label: "Work" },
  { to: "/connect", label: "Connect" },
];

export default function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="container flex items-center justify-between h-16">
          <NavLink to="/" className="font-display text-lg font-semibold tracking-tight">
            <span className="text-primary">{profile.initials}</span>
            <span className="text-muted-foreground">.</span>
          </NavLink>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `story-link transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
        {/* Mobile nav */}
        <nav className="md:hidden flex items-center justify-around border-t border-border/60 py-2 text-xs">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="relative flex-1 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="relative z-10 border-t border-border/60 mt-24">
        <div className="container py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {profile.name}. Brewed slowly.</p>
          <div className="flex gap-5">
            <a href={profile.socials.github} className="story-link" target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.socials.linkedin} className="story-link" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`} className="story-link">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
