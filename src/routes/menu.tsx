import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Leaf, WheatOff, ChevronDown } from "lucide-react";
import { food, drinks, type MenuCategory, type MenuItem } from "@/data/menu";
import heroCoffee from "@/assets/Pasted image (43).png";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Orah Cafe Perth | Breakfast, Lunch, Coffee" },
      {
        name: "description",
        content:
          "Browse the full Orah Cafe menu — eggs benny, buddha bowls, burgers, pasta, fresh salads, smoothies, specialty coffee and more. Perth CBD on Hay Street.",
      },
      { property: "og:title", content: "Orah Cafe — Full Menu" },
      { property: "og:description", content: "Breakfast, lunch, coffee and bakery in Perth CBD." },
      { property: "og:image", content: heroCoffee },
    ],
  }),
  component: MenuPage,
});

const allGroups = [
  { group: "Food", categories: food },
  { group: "Drinks", categories: drinks },
] as const;

const allCategories = [...food, ...drinks];

function MenuPage() {
  const [activeId, setActiveId] = useState(slug(allCategories[0].title));
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const scrollingRef = useRef(false);

  useEffect(() => {
    const nodes = allCategories.map((c) => document.getElementById(slug(c.title)));
    const obs = new IntersectionObserver(
      (entries) => {
        if (scrollingRef.current) return;
        for (const e of entries) {
          if (e.isIntersecting) setActiveId(e.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    nodes.forEach((n) => n && obs.observe(n));
    return () => obs.disconnect();
  }, []);

  function scrollToSection(id: string) {
    setMobileNavOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 132;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    scrollingRef.current = true;
    setActiveId(id);
    window.scrollTo({ top: y, behavior: "smooth" });
    setTimeout(() => { scrollingRef.current = false; }, 800);
  }

  const activeLabel = allCategories.find((c) => slug(c.title) === activeId)?.title ?? "Menu";

  return (
    <div className="bg-background">
      {/* Header */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">The menu</p>
          <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Made fresh, served simply.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-foreground/70 sm:text-base">
            Brunch favourites, healthy bowls, comforting mains, and the kind of
            coffee that makes you slow down. Prices in AUD.
          </p>
        </div>
      </section>

      {/* ─── Mobile 2-column category nav ─────────────────────────────────────── */}
      <div className="sticky top-[60px] z-20 border-b border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
        {/* Toggle bar — shows current category + expand chevron */}
        <button
          type="button"
          onClick={() => setMobileNavOpen((v) => !v)}
          className="flex w-full items-center justify-between px-5 py-3.5 text-left touch-manipulation"
          aria-expanded={mobileNavOpen}
        >
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/40">
              Browsing:
            </span>
            <span className="text-sm font-semibold text-foreground">{activeLabel}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-medium text-foreground/40">All categories</span>
            <ChevronDown
              className={`h-4 w-4 text-foreground/50 transition-transform duration-250 ${mobileNavOpen ? "rotate-180" : ""}`}
            />
          </div>
        </button>

        {/* Expandable 2-column categories */}
        <AnimatePresence>
          {mobileNavOpen && (
            <motion.div
              key="nav-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
              className="overflow-hidden border-t border-border/40"
            >
              <div className="grid grid-cols-2 divide-x divide-border/40">
                {/* Food column */}
                <div className="py-2">
                  <p className="px-4 pb-1 pt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/35">
                    Food
                  </p>
                  {food.map((c) => (
                    <button
                      key={c.title}
                      type="button"
                      onClick={() => scrollToSection(slug(c.title))}
                      className={`block w-full px-4 py-2.5 text-left text-sm transition touch-manipulation ${
                        activeId === slug(c.title)
                          ? "bg-secondary/80 font-semibold text-foreground"
                          : "font-medium text-foreground/55 active:bg-secondary/40"
                      }`}
                    >
                      {c.title}
                    </button>
                  ))}
                </div>

                {/* Drinks column */}
                <div className="py-2">
                  <p className="px-4 pb-1 pt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/35">
                    Drinks
                  </p>
                  {drinks.map((c) => (
                    <button
                      key={c.title}
                      type="button"
                      onClick={() => scrollToSection(slug(c.title))}
                      className={`block w-full px-4 py-2.5 text-left text-sm transition touch-manipulation ${
                        activeId === slug(c.title)
                          ? "bg-secondary/80 font-semibold text-foreground"
                          : "font-medium text-foreground/55 active:bg-secondary/40"
                      }`}
                    >
                      {c.title}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Two-column layout */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex gap-8 lg:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden w-52 shrink-0 md:block">
            <div className="sticky top-24 py-10">
              {allGroups.map(({ group, categories }) => (
                <div key={group} className="mb-7">
                  <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/35">
                    {group}
                  </p>
                  <ul className="space-y-px">
                    {categories.map((c) => (
                      <li key={c.title}>
                        <a
                          href={`#${slug(c.title)}`}
                          className={`block rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                            activeId === slug(c.title)
                              ? "bg-secondary text-foreground"
                              : "text-foreground/55 hover:bg-secondary/60 hover:text-foreground"
                          }`}
                        >
                          {c.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          {/* Content */}
          <div className="min-w-0 flex-1 py-10">
            <SectionDivider label="Food" />
            {food.map((c) => (
              <CategoryBlock key={c.title} cat={c} />
            ))}

            <SectionDivider label="Drinks" className="mt-16" />
            {drinks.map((c) => (
              <CategoryBlock key={c.title} cat={c} />
            ))}

            {/* CTA */}
            <div className="mt-20 rounded-3xl bg-cream p-8 text-center md:p-12">
              <h3 className="font-display text-3xl">Hungry yet?</h3>
              <p className="mt-2 text-foreground/70">
                Pop in for a coffee, brunch or a quick lunch break.
              </p>
              <Link
                to="/visit"
                className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ink-foreground hover:opacity-90 touch-manipulation active:scale-95"
              >
                Visit us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionDivider({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`mb-8 flex items-center gap-3 ${className}`}>
      <span className="h-px flex-1 bg-border" />
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/35">
        {label}
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function CategoryBlock({ cat }: { cat: MenuCategory }) {
  return (
    <div id={slug(cat.title)} className="mb-12 scroll-mt-36 md:scroll-mt-28">
      <div className="mb-5 border-b border-border pb-3">
        <h2 className="font-display text-2xl tracking-tight md:text-3xl">{cat.title}</h2>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {cat.items.map((item) => (
          <ItemRow key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl bg-card p-4 shadow-soft transition hover:shadow-lift sm:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <h3 className="font-display text-base leading-tight sm:text-lg">{item.name}</h3>
            {item.dietary?.includes("V") && (
              <span className="inline-flex items-center gap-1 rounded-full bg-sage/30 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
                <Leaf className="h-2.5 w-2.5" /> V
              </span>
            )}
            {item.dietary?.includes("GF") && (
              <span className="inline-flex items-center gap-1 rounded-full bg-blush/40 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-foreground/80">
                <WheatOff className="h-2.5 w-2.5" /> GF
              </span>
            )}
          </div>
          {item.description && (
            <p className="mt-1 text-xs text-foreground/60 sm:text-sm">{item.description}</p>
          )}
          {item.add && item.add.length > 0 && (
            <p className="mt-1.5 text-[11px] text-foreground/45">
              {item.add.map((a) => `+${a.label} $${a.price.toFixed(0)}`).join(" · ")}
            </p>
          )}
        </div>
        <div className="shrink-0 text-right">
          {item.price !== undefined ? (
            <span className="font-display text-base font-semibold text-foreground sm:text-lg">
              ${item.price.toFixed(2)}
            </span>
          ) : (
            <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/60">
              ask staff
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
