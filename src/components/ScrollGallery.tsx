import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { galleryImages } from "@/data/menu";

/**
 * Scroll-driven gallery for the /gallery page.
 * Three columns drift at different speeds; cards fade & scale in.
 */
export function ScrollGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  const cols: typeof galleryImages[] = [[], [], []];
  galleryImages.forEach((img, i) => cols[i % 3].push(img));

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-3xl"
    >
      <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6">
        <Column items={cols[0]} y={y1} />
        <Column items={cols[1]} y={y2} className="hidden md:block" />
        <Column items={cols[2]} y={y3} />
        {/* Mobile: show column 1 images in 2-column layout */}
        <Column items={cols[1]} y={y2} className="md:hidden" />
      </div>
    </div>
  );
}

function Column({
  items,
  y,
  className = "",
}: {
  items: { src: string; label: string }[];
  y: ReturnType<typeof useTransform<number, string>>;
  className?: string;
}) {
  return (
    <motion.div style={{ y }} className={`flex flex-col gap-4 sm:gap-5 md:gap-6 ${className}`}>
      {items.map((g, i) => (
        <motion.figure
          key={g.src + i}
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          whileHover={{ scale: 1.015 }}
          className="group relative overflow-hidden rounded-2xl bg-card shadow-soft transition-shadow hover:shadow-lift"
        >
          <div className="aspect-[3/4] w-full overflow-hidden">
            <img
              src={g.src}
              alt={g.label}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent p-4">
            <figcaption className="font-display text-sm text-white drop-shadow-sm sm:text-base">
              {g.label}
            </figcaption>
          </div>
        </motion.figure>
      ))}
    </motion.div>
  );
}
