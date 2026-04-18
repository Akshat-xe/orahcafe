import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ScrollGallery } from "@/components/ScrollGallery";
import interior from "@/assets/Pasted image (43).png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Orah Cafe Perth" },
      {
        name: "description",
        content:
          "A look inside Orah Cafe, Perth — fresh brunch, beautiful coffee and a bright Hay Street space.",
      },
      { property: "og:title", content: "Orah Cafe — Gallery" },
      {
        property: "og:description",
        content: "Brunch, coffee and café moments from Hay Street, Perth.",
      },
      { property: "og:image", content: interior },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="relative overflow-hidden bg-cream py-14 md:py-20">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sage/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary sm:text-sm">
            Gallery
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Every frame of <span className="italic">Orah</span>.
          </h1>
          <p className="mt-3 max-w-xl text-sm text-foreground/70 sm:text-base">
            Brunch, coffee and café moments from Hay Street, Perth.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              to="/menu"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ink-foreground transition active:scale-95 hover:opacity-90 touch-manipulation"
            >
              See the menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24">
        <ScrollGallery />
      </section>
    </div>
  );
}
