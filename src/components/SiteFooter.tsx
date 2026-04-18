import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Star, Wifi, Trees, ArrowUpRight, Instagram, Facebook } from "lucide-react";
import { business, food } from "@/data/menu";
import logo from "@/assets/logo.png";

const mostExpensive = food
  .flatMap((c) => c.items)
  .filter((i) => i.price !== undefined)
  .sort((a, b) => (b.price ?? 0) - (a.price ?? 0))
  .slice(0, 6);

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-12 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Orah Cafe"
                className="h-10 w-10 rounded-xl object-contain bg-cream p-0.5"
              />
              <span className="font-display text-2xl">Orah Cafe</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-ink-foreground/70">
              Bright Perth café on Hay Street. Honest food, lovely coffee, and a
              corner of the city to slow down in.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5">
                <Star className="h-3.5 w-3.5 fill-current text-accent" /> 4.9 · 440 reviews
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5">
                <Wifi className="h-3.5 w-3.5" /> Free Wi-Fi
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5">
                <Trees className="h-3.5 w-3.5" /> Outdoor seating
              </span>
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Orah Cafe on Instagram"
                className="grid h-11 w-11 min-h-[44px] min-w-[44px] place-items-center rounded-xl bg-white/10 transition hover:bg-white/20 touch-manipulation active:scale-95"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={business.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Orah Cafe on Facebook"
                className="grid h-11 w-11 min-h-[44px] min-w-[44px] place-items-center rounded-xl bg-white/10 transition hover:bg-white/20 touch-manipulation active:scale-95"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Most loved */}
          <div className="md:col-span-3">
            <h4 className="font-display text-lg">Most Loved</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/75">
              {mostExpensive.map((item) => (
                <li key={item.name}>
                  <Link
                    to="/menu"
                    className="flex items-center justify-between gap-2 transition-colors hover:text-ink-foreground"
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-ink-foreground/40">${item.price?.toFixed(2)}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/menu"
              className="mt-4 inline-flex items-center gap-1 text-sm text-accent hover:underline"
            >
              View full menu <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-lg">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/75">
              <li>
                <Link to="/" className="inline-flex min-h-[40px] items-center transition-colors hover:text-ink-foreground touch-manipulation">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="inline-flex min-h-[40px] items-center transition-colors hover:text-ink-foreground touch-manipulation">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="inline-flex min-h-[40px] items-center transition-colors hover:text-ink-foreground touch-manipulation">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/visit" className="inline-flex min-h-[40px] items-center transition-colors hover:text-ink-foreground touch-manipulation">
                  Visit Us
                </Link>
              </li>
              <li>
                <Link
                  to="/visit"
                  hash="amenities"
                  className="inline-flex min-h-[40px] items-center transition-colors hover:text-ink-foreground touch-manipulation"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <a
                  href={business.phoneHref}
                  className="inline-flex min-h-[40px] items-center transition-colors hover:text-ink-foreground touch-manipulation"
                >
                  Call Now
                </a>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div className="md:col-span-2">
            <h4 className="font-display text-lg">Visit</h4>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-start gap-2 text-sm text-ink-foreground/75 transition-colors hover:text-ink-foreground"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                Suite 3, 459 Hay St
                <br />
                Perth WA 6000
              </span>
            </a>
            <a
              href={business.phoneHref}
              className="mt-3 flex items-center gap-2 text-sm text-ink-foreground/75 transition-colors hover:text-ink-foreground"
            >
              <Phone className="h-4 w-4" /> {business.phone}
            </a>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-white/10 px-3 py-1">Dine-in</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Takeaway</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-ink-foreground/55">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Orah Cafe. Made with care in Perth.</p>
          <p>
            Web Developer · Web Designer:{" "}
            <span className="font-medium text-ink-foreground/75">Akshat Kumar</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/menu" className="inline-flex min-h-[36px] items-center hover:text-ink-foreground touch-manipulation">
              Menu
            </Link>
            <Link to="/gallery" className="inline-flex min-h-[36px] items-center hover:text-ink-foreground touch-manipulation">
              Gallery
            </Link>
            <Link to="/visit" className="inline-flex min-h-[36px] items-center hover:text-ink-foreground touch-manipulation">
              Visit
            </Link>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[36px] items-center hover:text-ink-foreground touch-manipulation"
            >
              Directions
            </a>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
