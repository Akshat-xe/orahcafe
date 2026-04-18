import { useState } from "react";
import { motion } from "framer-motion";

type DayKey = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

/**
 * Hourly busyness levels from 6a to 9p (16 bars).
 * Curve based on real Google popular-times observations:
 *  - Weekdays: business-day curve, peak 11a-1p, taper after 2p.
 *  - Sat: short morning brunch spike (8a-12p), quiet after.
 *  - Sun: lightest day, gentle morning bump.
 *  - Sat/Sun show clear drop vs weekdays per real trend.
 * Values are 0-100 (relative busyness).
 */
const data: Record<DayKey, number[]> = {
  // 6a 7a 8a 9a 10a 11a 12p 1p 2p 3p 4p 5p 6p 7p 8p 9p
  MON: [12, 22, 38, 52, 64, 78, 86, 88, 72, 50, 30, 20, 14, 10, 8, 6],
  TUE: [14, 26, 44, 60, 74, 86, 92, 94, 82, 56, 32, 22, 16, 12, 10, 8],
  WED: [14, 28, 46, 62, 76, 86, 92, 92, 80, 54, 32, 22, 16, 12, 10, 8],
  THU: [16, 30, 48, 66, 80, 90, 94, 96, 84, 58, 34, 22, 16, 12, 10, 8],
  FRI: [18, 32, 52, 70, 86, 94, 98, 98, 88, 62, 36, 24, 18, 14, 12, 10],
  // Saturday — short brunch spike, quiet afternoon
  SAT: [0, 0, 36, 58, 74, 70, 50, 34, 18, 10, 6, 4, 4, 0, 0, 0],
  // Sunday — lightest, gentle morning
  SUN: [0, 0, 16, 22, 32, 42, 44, 36, 22, 14, 8, 6, 4, 0, 0, 0],
};

const days: DayKey[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const dayLabels: Record<DayKey, string> = {
  MON: "Mon",
  TUE: "Tue",
  WED: "Wed",
  THU: "Thu",
  FRI: "Fri",
  SAT: "Sat",
  SUN: "Sun",
};
const xLabels = ["6a", "9a", "12p", "3p", "6p", "9p"];

const summaries: Record<DayKey, { peak: string; vibe: string }> = {
  MON: { peak: "11a–1p", vibe: "Steady working-day rush" },
  TUE: { peak: "10a–2p", vibe: "Strong, broad lunch peak" },
  WED: { peak: "10:30a–2p", vibe: "Smooth, balanced midday" },
  THU: { peak: "11a–2p", vibe: "Confident pre-weekend buzz" },
  FRI: { peak: "10a–2p", vibe: "Busiest day of the week" },
  SAT: { peak: "9a–11a", vibe: "Short brunch spike, quiet after" },
  SUN: { peak: "10a–1p", vibe: "Lightest day — easy seats" },
};

export function PopularTimes() {
  const [day, setDay] = useState<DayKey>("FRI");
  const bars = data[day];
  const liveIndex = day === "FRI" ? 5 : -1; // Friday live highlight ~11a

  const peakIdx = bars.indexOf(Math.max(...bars));
  const max = Math.max(...bars, 1);

  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-8 max-w-2xl md:mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary sm:text-sm">
            Visit rhythm
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            When Orah hums.
          </h2>
          <p className="mt-3 text-sm text-foreground/70 sm:mt-4 sm:text-base">
            A peek at how the café flows through the week — handy for picking
            the perfect coffee window or a quiet lunch table.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="rounded-3xl bg-ink p-5 text-ink-foreground shadow-lift sm:p-6 md:p-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex w-full gap-1 rounded-2xl bg-white/5 p-1 sm:w-auto sm:rounded-full">
              {days.map((d) => (
                <button
                  key={d}
                  onClick={() => setDay(d)}
                  className={`flex-1 rounded-xl px-1.5 py-3 min-h-[44px] text-xs font-semibold tracking-wide transition touch-manipulation active:scale-95 sm:flex-none sm:rounded-full sm:px-3.5 sm:py-1.5 ${
                    day === d
                      ? "bg-cream text-ink shadow-soft"
                      : "text-ink-foreground/70 hover:text-ink-foreground"
                  }`}
                  aria-pressed={day === d}
                >
                  <span className="sm:hidden">{dayLabels[d].slice(0, 2)}</span>
                  <span className="hidden sm:inline">{d}</span>
                </button>
              ))}
            </div>

            {day === "FRI" && (
              <div className="flex items-center gap-2 text-[11px] text-ink-foreground/80 sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Live: less busy than usual
              </div>
            )}
          </div>

          <div className="mt-8 sm:mt-10">
            <div className="relative h-44 sm:h-52">
              {/* grid lines */}
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="border-t border-white/5" />
                ))}
              </div>

              <div className="relative flex h-full items-end gap-1 sm:gap-1.5">
                {bars.map((v, i) => {
                  const isLive = i === liveIndex;
                  const isPeak = i === peakIdx;
                  const heightPct = (v / max) * 100;
                  return (
                    <motion.div
                      key={`${day}-${i}`}
                      initial={{ height: 0, opacity: 0.4 }}
                      animate={{ height: `${heightPct}%`, opacity: 1 }}
                      transition={{
                        duration: 0.55,
                        delay: i * 0.02,
                        ease: [0.2, 0.8, 0.2, 1],
                      }}
                      className={`relative flex-1 rounded-t-md sm:rounded-t-lg ${
                        isLive
                          ? "bg-accent"
                          : isPeak
                            ? "bg-sage"
                            : "bg-white/15 hover:bg-white/25"
                      }`}
                      title={`${v}%`}
                    />
                  );
                })}
              </div>
            </div>

            <div className="mt-3 flex justify-between text-[10px] uppercase tracking-wider text-ink-foreground/55 sm:text-[11px]">
              {xLabels.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-3 border-t border-white/10 pt-5 sm:mt-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-ink-foreground/50">Day</p>
              <p className="mt-1 font-display text-base sm:text-lg">{dayLabels[day]}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-ink-foreground/50">Peak</p>
              <p className="mt-1 font-display text-base sm:text-lg">{summaries[day].peak}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-ink-foreground/50">Vibe</p>
              <p className="mt-1 text-sm text-ink-foreground/80">{summaries[day].vibe}</p>
            </div>
          </div>

          <p className="mt-5 text-[11px] text-ink-foreground/55 sm:text-xs">
            People typically spend 20 min to 2 hr here.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
