import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { business } from "@/data/menu";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/menu" as const, label: "Menu" },
  { to: "/gallery" as const, label: "Gallery" },
  { to: "/visit" as const, label: "Visit" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 pointer-events-none ${
        scrolled
          ? "py-2 bg-white/75 backdrop-blur-xl backdrop-saturate-200 border-b border-white/30 shadow-soft"
          : "py-3 bg-white/40 backdrop-blur-md"
      }`}
    >
      <div
        className="pointer-events-auto relative z-10 mx-3 flex items-center justify-between gap-3 rounded-2xl px-3 py-2.5 transition-all duration-300 glass-strong shadow-lift sm:mx-4 sm:gap-6 sm:rounded-3xl sm:px-5 sm:py-3 md:mx-auto md:max-w-7xl"
      >
        <Link
          to="/"
          className="flex items-center gap-2 active:scale-95 transition-transform"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-display text-lg">
            o
          </span>
          <span className="font-display text-lg tracking-tight sm:text-xl">Orah Cafe</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-xl px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/visit"
            hash="amenities"
            className="rounded-xl px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground touch-manipulation"
          >
            Amenities
          </Link>
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-4 py-2 text-sm font-medium text-ink-foreground transition active:scale-95 hover:opacity-90 touch-manipulation"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-foreground transition active:scale-90 touch-manipulation md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        style={{ zIndex: 40 }}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          role="presentation"
          className={`fixed inset-0 top-0 bg-ink/30 backdrop-blur-sm transition-opacity duration-200 touch-manipulation ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`relative mx-3 mt-2 origin-top rounded-2xl bg-card p-3 shadow-lift transition-all duration-200 sm:mx-4 ${
            open
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="min-h-[48px] flex items-center rounded-xl px-4 py-3 text-base font-semibold text-foreground/90 transition touch-manipulation active:scale-[0.98] active:bg-cream data-[status=active]:bg-secondary data-[status=active]:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/visit"
              hash="amenities"
              onClick={() => setOpen(false)}
              className="min-h-[48px] flex items-center rounded-xl px-4 py-3 text-base font-semibold text-foreground/90 transition touch-manipulation active:scale-[0.98] active:bg-cream hover:bg-secondary"
            >
              Amenities
            </Link>
            <a
              href={business.phoneHref}
              onClick={() => setOpen(false)}
              className="mt-1 min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-base font-semibold text-ink-foreground transition touch-manipulation active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" /> Call {business.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
