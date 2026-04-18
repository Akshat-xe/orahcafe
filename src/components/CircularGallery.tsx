import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/menu";

type Item = { src: string; label: string };

interface Props {
  items?: Item[];
  /** Distance from center for each card. */
  radius?: number;
  /** Auto-rotate speed (deg per frame). */
  autoRotateSpeed?: number;
  className?: string;
}

/**
 * Premium circular 3D coverflow gallery.
 * - Cards arranged in a full circle on the Y axis (perspective).
 * - Auto-rotates gently when idle, follows page scroll when scrolling.
 * - Clicking a card brings it forward.
 */
export function CircularGallery({
  items = galleryImages,
  radius = 520,
  autoRotateSpeed = 0.05,
  className = "",
}: Props) {
  const [rotation, setRotation] = useState(0);
  const rotationRef = useRef(0);
  const isScrollingRef = useRef(false);
  const isHoverRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  // Responsive radius — smaller on mobile so cards fit nicely.
  const [r, setR] = useState(radius);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 480) setR(220);
      else if (w < 768) setR(300);
      else if (w < 1024) setR(420);
      else setR(radius);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [radius]);

  // Scroll-driven rotation
  useEffect(() => {
    const onScroll = () => {
      isScrollingRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      rotationRef.current = progress * 540;
      setRotation(rotationRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 180);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-rotation when idle and not hovered
  useEffect(() => {
    const tick = () => {
      if (!isScrollingRef.current && !isHoverRef.current) {
        rotationRef.current += autoRotateSpeed;
        setRotation(rotationRef.current);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [autoRotateSpeed]);

  const anglePerItem = 360 / items.length;

  return (
    <div
      role="region"
      aria-label="Orah Cafe circular gallery"
      className={`relative mx-auto flex h-[440px] w-full items-center justify-center sm:h-[520px] md:h-[600px] ${className}`}
      style={{ perspective: "1800px" }}
      onMouseEnter={() => (isHoverRef.current = true)}
      onMouseLeave={() => (isHoverRef.current = false)}
    >
      {/* Floating speech badges */}
      <motion.div
        initial={{ opacity: 0, y: -8, rotate: -8 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="pointer-events-none absolute left-2 top-2 z-30 sm:left-6 sm:top-4"
      >
        <div className="relative rounded-3xl bg-gradient-blush px-4 py-2 text-xs font-semibold text-ink shadow-lift sm:text-sm">
          fresh today ✨
          <span className="absolute -bottom-1.5 left-6 h-3 w-3 rotate-45 bg-blush" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -8, rotate: 8 }}
        animate={{ opacity: 1, y: 0, rotate: 6 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="pointer-events-none absolute right-2 top-4 z-30 sm:right-6 sm:top-6"
      >
        <div className="relative rounded-3xl bg-gradient-sage px-4 py-2 text-xs font-semibold text-ink-foreground shadow-lift sm:text-sm">
          made in Perth · loved daily
          <span className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-sage" />
        </div>
      </motion.div>

      <div
        className="relative h-full w-full"
        style={{
          transform: `rotateY(${rotation}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.05s linear",
        }}
      >
        {items.map((item, i) => {
          const itemAngle = i * anglePerItem;
          const total = ((rotation % 360) + 360) % 360;
          const relative = ((itemAngle + total) % 360 + 360) % 360;
          const normalized = Math.abs(relative > 180 ? 360 - relative : relative);
          const opacity = Math.max(0.25, 1 - normalized / 180);
          return (
            <div
              key={item.src + i}
              className="absolute h-[260px] w-[180px] sm:h-[320px] sm:w-[220px] md:h-[380px] md:w-[260px]"
              style={{
                transform: `rotateY(${itemAngle}deg) translateZ(${r}px)`,
                left: "50%",
                top: "50%",
                marginLeft: "-110px",
                marginTop: "-160px",
                opacity,
                transition: "opacity 0.3s linear",
              }}
            >
              <div className="group relative h-full w-full overflow-hidden rounded-[2rem] border border-white/30 bg-card shadow-card backdrop-blur-md">
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/40" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4">
                  <p className="font-display text-base text-white drop-shadow-md sm:text-lg">
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
