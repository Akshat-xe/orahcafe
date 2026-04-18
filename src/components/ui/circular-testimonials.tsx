import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
}

function calculateGap(width: number) {
  const minGap = 44;
  const maxGap = 68;
  if (width <= 320) return minGap;
  if (width >= 640) return maxGap;
  return minGap + (maxGap - minGap) * ((width - 320) / 320);
}

export function CircularTestimonials({
  testimonials,
  autoplay = true,
}: CircularTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(480);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = useMemo(() => testimonials.length, [testimonials]);
  const active = useMemo(() => testimonials[activeIndex], [activeIndex, testimonials]);

  useEffect(() => {
    const resize = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => setActiveIndex((p) => (p + 1) % count), 5000);
    }
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [autoplay, count]);

  const stop = () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  const handleNext = useCallback(() => { setActiveIndex((p) => (p + 1) % count); stop(); }, [count]);
  const handlePrev = useCallback(() => { setActiveIndex((p) => (p - 1 + count) % count); stop(); }, [count]);

  function getCardStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const lift = gap * 0.7;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + count) % count === index;
    const isRight = (activeIndex + 1) % count === index;
    if (isActive) {
      return { zIndex: 3, opacity: 1, pointerEvents: "auto", transform: "translateX(0) translateY(0) scale(1)", transition: "all 0.7s cubic-bezier(.4,2,.3,1)" };
    }
    if (isLeft) {
      return { zIndex: 2, opacity: 0.8, pointerEvents: "auto", transform: `translateX(-${gap}px) translateY(-${lift}px) scale(0.85)`, transition: "all 0.7s cubic-bezier(.4,2,.3,1)" };
    }
    if (isRight) {
      return { zIndex: 2, opacity: 0.8, pointerEvents: "auto", transform: `translateX(${gap}px) translateY(-${lift}px) scale(0.85)`, transition: "all 0.7s cubic-bezier(.4,2,.3,1)" };
    }
    return { zIndex: 1, opacity: 0, pointerEvents: "none", transition: "all 0.7s cubic-bezier(.4,2,.3,1)" };
  }

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Image stack */}
        <div ref={containerRef} className="relative mx-auto flex h-80 w-full max-w-sm items-center justify-center sm:h-96">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => { setActiveIndex(i); stop(); }}
              className="absolute h-64 w-48 overflow-hidden rounded-[1.75rem] shadow-lift cursor-pointer touch-manipulation focus-visible:outline-none sm:h-72 sm:w-52"
              style={getCardStyle(i)}
              aria-label={`View testimonial from ${t.name}`}
            >
              <img src={t.src} alt={t.name} className="h-full w-full object-cover" draggable={false} />
              <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/20" />
            </button>
          ))}
        </div>

        {/* Quote + controls */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32 }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current text-accent" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 font-display text-xl leading-snug text-foreground/90 sm:text-2xl">
                "{active.quote}"
              </blockquote>
              <div className="mt-5">
                <p className="font-semibold text-foreground">{active.name}</p>
                <p className="text-sm text-foreground/55">{active.designation}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-7 flex gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="grid h-12 w-12 min-h-[48px] min-w-[48px] place-items-center rounded-full bg-ink text-ink-foreground transition hover:bg-primary active:scale-95 touch-manipulation cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="grid h-12 w-12 min-h-[48px] min-w-[48px] place-items-center rounded-full bg-ink text-ink-foreground transition hover:bg-primary active:scale-95 touch-manipulation cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="mt-4 flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); stop(); }}
                className={`h-3 rounded-full transition-all duration-300 touch-manipulation cursor-pointer ${i === activeIndex ? "w-8 bg-primary" : "w-3 bg-foreground/25 hover:bg-foreground/40"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
