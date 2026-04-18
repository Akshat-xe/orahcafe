import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  MapPin,
  Phone,
  Wifi,
  Trees,
  Coffee,
  Croissant,
  Salad,
  Clock,
  ArrowRight,
  Sparkles,
  Heart,
  Leaf,
  Plus,
} from "lucide-react";
import heroCoffee from "@/assets/Pasted image (43).png";
import slide1 from "@/assets/slide1.jpg";
import slide2 from "@/assets/slide2.jpg";
import slide3 from "@/assets/slide3.jpg";
import slide4 from "@/assets/slide4.jpg";
import l1 from "@/assets/l1.jpg";
import l2 from "@/assets/l2.jpg";
import l3 from "@/assets/l3.jpg";
import l4 from "@/assets/l4.jpg";
import s1 from "@/assets/s1.jpg";
import s2 from "@/assets/s2.jpg";
import s3 from "@/assets/s3.jpg";
import s4 from "@/assets/s4.jpg";
import { highlights, business } from "@/data/menu";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { PopularTimes } from "@/components/PopularTimes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orah Cafe — Bright Perth Café on Hay Street" },
      {
        name: "description",
        content:
          "Fresh coffee, honest food and a bright Perth café made for mornings, lunch breaks and easy catch-ups on Hay Street.",
      },
      { property: "og:title", content: "Orah Cafe — Bright Perth Café on Hay Street" },
      {
        property: "og:description",
        content:
          "Breakfast, brunch and lunch in Perth CBD. 4.9★ on Google. Dine-in and takeaway on Hay Street.",
      },
      { property: "og:image", content: heroCoffee },
      { name: "twitter:image", content: heroCoffee },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Highlights />
      <WhyLocals />
      <TestimonialsSection />
      <PopularTimes />
      <Visit />
      <FAQ />
    </>
  );
}

/* ─── Reusable auto crossfade image slider ──────────────────────────────── */

const largeSlidePics = [l1, l2, l3, l4];
const smallSlidePics = [s1, s2, s3, s4];

function ImageSlider({ images, className }: { images: string[]; className?: string }) {
  const [idx, setIdx] = useState(0);
  const len = images.length;
  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % len), 2200);
    return () => clearInterval(t);
  }, [len]);
  return (
    <div className={`relative ${className ?? ""}`}>
      <AnimatePresence>
        <motion.img
          key={idx}
          src={images[idx]}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-warm" />
      {/* Motion blur orbs — larger & softer */}
      <div className="pointer-events-none absolute -left-48 top-10 h-[560px] w-[560px] rounded-full bg-blush/50 blur-[140px]" />
      <div className="pointer-events-none absolute -right-48 bottom-0 h-[560px] w-[560px] rounded-full bg-sage/35 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-cream/60 blur-[80px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur"
          >
            <MapPin className="h-3.5 w-3.5" /> Hay Street, Perth CBD
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl"
          >
            Fresh coffee.<br />
            <span className="italic text-primary">Honest</span> food.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-lg text-lg text-foreground/70"
          >
            A bright Perth café made for mornings, lunch breaks and easy catch-ups.
            Brunch all day, healthy bowls, gorgeous coffee — right in the city.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/menu"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ink-foreground transition hover:opacity-90 active:scale-95 touch-manipulation"
            >
              View Menu <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/visit"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-soft transition hover:bg-cream active:scale-95 touch-manipulation"
            >
              Visit Us
            </Link>
            <a
              href="https://www.instagram.com/orahcafe/"
              target="_blank"
              rel="noreferrer"
              className="liquid-glass-btn inline-flex min-h-[48px] items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground/90 touch-manipulation active:scale-95"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> Visit Instagram
            </a>
            <a
              href={business.phoneHref}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/60 active:scale-95 touch-manipulation"
            >
              <Phone className="h-4 w-4" /> Call now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-3 text-xs"
          >
            <Chip icon={<Star className="h-3.5 w-3.5 fill-current text-accent" />}>4.9 Google Rating</Chip>
            <Chip icon={<Coffee className="h-3.5 w-3.5" />}>Great Coffee</Chip>
            <Chip icon={<Croissant className="h-3.5 w-3.5" />}>Breakfast & Lunch</Chip>
            <Chip icon={<MapPin className="h-3.5 w-3.5" />}>Perth CBD</Chip>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-lift">
            <ImageSlider
              images={[slide1, slide2, slide3, slide4]}
              className="aspect-[4/5] w-full md:aspect-[5/6]"
            />
            {/* Soft blur overlay at bottom edge */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent backdrop-blur-[1px]" />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-10 hidden rounded-3xl bg-white/90 p-4 shadow-lift backdrop-blur-md md:block"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-sage/30 text-primary">
                <Star className="h-5 w-5 fill-current" />
              </div>
              <div>
                <p className="text-2xl font-semibold leading-none">4.9</p>
                <p className="text-xs text-foreground/60">440 Google reviews</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 bottom-10 hidden rounded-3xl bg-ink/90 p-4 text-ink-foreground shadow-lift backdrop-blur-md md:block"
          >
            <p className="text-xs uppercase tracking-wider text-ink-foreground/60">Open now</p>
            <p className="mt-1 font-display text-lg">Coffee · Brunch</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Chip({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 font-medium text-foreground/80 backdrop-blur">
      {icon} {children}
    </span>
  );
}

function TrustStrip() {
  const items = [
    { icon: <Coffee className="h-5 w-5" />, label: "Specialty coffee" },
    { icon: <Salad className="h-5 w-5" />, label: "Fresh & healthy" },
    { icon: <Croissant className="h-5 w-5" />, label: "All-day brunch" },
    { icon: <Leaf className="h-5 w-5" />, label: "Vegetarian options" },
    { icon: <Wifi className="h-5 w-5" />, label: "Free Wi-Fi" },
    { icon: <Trees className="h-5 w-5" />, label: "Outdoor seating" },
  ];
  return (
    <section className="border-y border-border/60 bg-card">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-10 gap-y-4 px-6 py-6 text-sm text-foreground/70">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-2">
            <span className="text-primary">{it.icon}</span>
            <span className="font-medium">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Most loved at Orah</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
              The dishes locals reorder.
            </h2>
            <p className="mt-4 text-foreground/70">
              A curated handful of the things people come back for — from our
              steak sandwich to the buddha bowl, with a long black on the side.
            </p>
          </div>
          <Link
            to="/menu"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-cream touch-manipulation active:scale-95"
          >
            See full menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Cards: less rounded on mobile, more on desktop */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.article
              key={h.name}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group overflow-hidden rounded-xl bg-card shadow-soft transition hover:shadow-lift sm:rounded-3xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={h.image}
                  alt={h.name}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-foreground backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs">
                  <Sparkles className="h-2.5 w-2.5 text-primary sm:h-3 sm:w-3" /> {h.tag}
                </span>
              </div>
              <div className="flex items-start justify-between gap-1.5 p-2.5 sm:gap-4 sm:p-5">
                <div className="min-w-0">
                  <h3 className="font-display text-sm leading-snug sm:text-xl">{h.name}</h3>
                  <p className="mt-1 hidden text-sm text-foreground/65 sm:block">{h.blurb}</p>
                </div>
                {h.price !== undefined && (
                  <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-foreground sm:px-3 sm:py-1 sm:text-sm">
                    ${h.price.toFixed(2)}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyLocals() {
  const reasons = [
    { icon: <Coffee className="h-6 w-6" />, title: "Coffee worth the walk", body: "Specialty beans pulled by people who care. Smooth long blacks, silky flat whites, the lot." },
    { icon: <Salad className="h-6 w-6" />, title: "Fresh, fast, honest", body: "Buddha bowls, vibrant salads and warm grain bowls — quick lunch, no compromise." },
    { icon: <Croissant className="h-6 w-6" />, title: "Brunch all day", body: "Eggs Benny Benny, smashed avo, bacon rolls — whenever the craving hits." },
    { icon: <Heart className="h-6 w-6" />, title: "A regular's welcome", body: "Friendly faces, easy mornings, and tables that feel like yours." },
  ];
  return (
    <section className="relative overflow-hidden bg-cream py-24">
      {/* Motion blur orb */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-blush/30 blur-[100px]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          {/* Image column — large slider + small slider */}
          <div className="relative pb-8 md:pb-0">
            {/* Large image slider */}
            <ImageSlider
              images={largeSlidePics}
              className="aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-lift"
            />
            {/* Small image slider — visible on all screen sizes */}
            <div className="absolute -bottom-4 -right-3 w-24 aspect-[3/4] overflow-hidden rounded-2xl border-[3px] border-cream shadow-lift md:-bottom-10 md:-right-6 md:w-44 md:rounded-3xl md:border-4">
              <ImageSlider images={smallSlidePics} className="h-full w-full" />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Why locals love Orah</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
              The little Hay Street ritual.
            </h2>
            <p className="mt-4 max-w-lg text-foreground/70">
              Tucked into the city, Orah is the kind of place where the office
              regulars know their order, students stay an extra hour, and a quick
              coffee turns into the best part of the day.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title} className="rounded-2xl bg-card p-5 shadow-soft">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-sage/30 text-primary">
                    {r.icon}
                  </div>
                  <h3 className="mt-3 font-display text-lg">{r.title}</h3>
                  <p className="mt-1 text-sm text-foreground/65">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const orahTestimonials = [
  {
    quote: "Amazingly priced and incredibly tasty. Easily my favourite Hay Street stop.",
    name: "Maddie",
    designation: "Regular",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote: "The salads are fresh, generous and full of flavour. Great spot for a working lunch.",
    name: "James",
    designation: "Local",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote: "Friendly staff, lovely coffee, and a vibe that makes you want to stay all morning.",
    name: "Aiko",
    designation: "Visitor",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote: "A little hidden gem in the city. Quick service even on the busiest mornings.",
    name: "Priya",
    designation: "CBD Worker",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote: "Best eggs benny in Perth, full stop. The hollandaise is absolutely silky.",
    name: "Tom",
    designation: "Brunch Enthusiast",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote: "Perfect study spot — good Wi-Fi, great chai latte, and they never rush you out.",
    name: "Sophie",
    designation: "UWA Student",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote: "The Korean Bulgogi Pasta is absolutely unreal. My new Friday tradition.",
    name: "Min",
    designation: "Perth Local",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote: "Popped in for a quick coffee and ended up staying two hours. No regrets at all.",
    name: "Lucy",
    designation: "City Explorer",
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">What people say</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
              Loved by Perth.
            </h2>
          </div>
          <div className="inline-flex items-center gap-3 rounded-2xl bg-secondary px-5 py-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current text-accent" />
              ))}
            </div>
            <div>
              <p className="text-2xl font-semibold leading-none">4.9</p>
              <p className="text-xs text-foreground/60">440 Google reviews</p>
            </div>
          </div>
        </div>
        <CircularTestimonials testimonials={orahTestimonials} />
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 overflow-hidden rounded-[2.5rem] bg-card shadow-soft md:grid-cols-2">
          <div className="p-8 md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Visit us</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
              Right on Hay Street.
            </h2>
            <p className="mt-4 text-foreground/70">
              Easy to find, easy to settle in. Pop in for a quick takeaway coffee
              or stay a while.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 rounded-2xl bg-secondary p-4 transition active:scale-[0.99] hover:bg-cream touch-manipulation"
              >
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Orah Cafe</p>
                  <p className="text-sm text-foreground/65">Suite 3, 459 Hay Street</p>
                  <p className="text-sm text-foreground/60">Perth WA 6000, Australia</p>
                </div>
              </a>
              <a
                href={business.phoneHref}
                className="flex items-start gap-3 rounded-2xl bg-secondary p-4 transition active:scale-[0.99] hover:bg-cream touch-manipulation"
              >
                <Phone className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">{business.phone}</p>
                  <p className="text-sm text-foreground/60">Tap to call</p>
                </div>
              </a>
              <div className="flex items-start gap-3 rounded-2xl bg-secondary p-4">
                <Clock className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Open daily for breakfast & lunch</p>
                  <p className="text-sm text-foreground/60">Coffee from early — pop in any time.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {["Dine-in", "Takeaway", "Free Wi-Fi", "Outdoor seating", "Vegetarian", "Vegan-friendly", "Plenty of parking"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-background px-3 py-1.5 font-medium text-foreground/70">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ink-foreground transition active:scale-95 hover:opacity-90 touch-manipulation"
              >
                Get directions <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground transition active:scale-95 hover:bg-cream touch-manipulation"
              >
                View menu
              </Link>
              <Link
                to="/visit"
                hash="amenities"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition active:scale-95 hover:bg-secondary touch-manipulation"
              >
                See all amenities
              </Link>
            </div>
          </div>

          <div className="relative min-h-[360px]">
            <iframe
              title="Orah Cafe location — satellite view"
              src={business.mapsEmbed}
              className="absolute inset-0 h-full w-full border-0"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Do you offer dine-in and takeaway?", a: "Yes — both. Settle in at a table, or grab your coffee and food to go." },
    { q: "Do you have vegetarian and vegan-friendly options?", a: "Plenty. From the Orah Buddha Bowl to Very Much Avocado, Mushroom World War and Nudely Noodle, there's lots to love." },
    { q: "Do you serve breakfast and lunch?", a: "All day, every day. Brunch classics in the morning and hearty lunches through to early afternoon." },
    { q: "Is Orah good for coffee and a quick work session?", a: "Absolutely. Free Wi-Fi, friendly staff and a calm city vibe make it easy to get an hour in." },
    { q: "Where exactly are you in Perth CBD?", a: "Suite 3/459 Hay Street, right in the heart of the city." },
    { q: "Do you have outdoor seating?", a: "Yes — perfect for a sunny morning long black." },
    { q: "Can I get a quick takeaway coffee?", a: "Of course. Most coffees are ready in just a few minutes." },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-cream py-24">
      {/* Motion blur orb */}
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-sage/25 blur-[100px]" />
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">FAQ</p>
        <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
          Good things to know.
        </h2>
        <div className="mt-10 overflow-hidden divide-y divide-border rounded-3xl bg-card shadow-soft">
          {faqs.map((f, i) => (
            <div key={f.q}>
              {/* Controlled button — works on all mobile browsers */}
              <button
                type="button"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="flex w-full min-h-[56px] items-center justify-between gap-4 px-5 py-5 text-left touch-manipulation sm:px-6"
                aria-expanded={openIdx === i}
              >
                <span className="font-display text-base leading-snug sm:text-lg">{f.q}</span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-foreground/20 bg-secondary text-foreground/60 transition-all duration-300 ${
                    openIdx === i ? "rotate-45 border-primary bg-primary/10 text-primary" : ""
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
              <motion.div
                initial={false}
                animate={openIdx === i ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-foreground/70 sm:px-6">{f.a}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
