import { motion, useReducedMotion } from "motion/react";
import { spotlights, type Spotlight } from "../../content/site";
import {
  ease,
  revealAnimate,
  softRevealInitial,
  useAnimationProps,
} from "./motion";
import { CrateVisual, EqualizerVisual, WaveformVisual } from "./visuals";

const visuals: Record<Spotlight["visual"], () => React.JSX.Element> = {
  waveform: WaveformVisual,
  crate: CrateVisual,
  equalizer: EqualizerVisual,
};

export function Spotlights() {
  const inView = useAnimationProps();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="spotlights-heading"
      className="flex w-full max-w-[1280px] flex-col items-center px-5 pb-28 sm:pb-40"
    >
      <motion.h2
        id="spotlights-heading"
        className="motion-preload max-w-[820px] translate-y-6 text-center text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-balance text-[var(--website-text-primary)] opacity-0 sm:text-[64px]"
        {...inView}
        transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease }}
      >
        Made for people who still keep a music library.
      </motion.h2>
      <div className="mt-12 grid w-full gap-5 sm:mt-20 lg:grid-cols-3">
        {spotlights.map((spotlight, index) => {
          const Visual = visuals[spotlight.visual];
          return (
            <motion.article
              key={spotlight.title}
              className="motion-preload flex translate-y-[18px] flex-col overflow-hidden rounded-[40px] bg-[rgba(34,34,29,0.06)] opacity-0"
              style={{ cornerShape: "squircle" } as React.CSSProperties}
              initial={prefersReducedMotion ? false : softRevealInitial}
              whileInView={revealAnimate}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.8,
                ease,
                delay: prefersReducedMotion ? 0 : index * 0.08,
              }}
            >
              <div
                className="m-3 rounded-[30px] bg-[#1A1A18] px-6 py-8"
                style={{ cornerShape: "squircle" } as React.CSSProperties}
              >
                <Visual />
              </div>
              <div className="flex flex-1 flex-col px-7 pb-8 pt-4">
                <p className="text-sm font-bold uppercase tracking-[-0.01em] text-[var(--website-text-muted)]">
                  {spotlight.eyebrow}
                </p>
                <h3 className="mt-2 text-[28px] font-bold leading-[1] tracking-[-0.04em] text-[var(--website-text-primary)]">
                  {spotlight.title}
                </h3>
                <p className="mt-3 text-base font-medium leading-[1.36] tracking-[-0.03em] text-[var(--website-text-muted)]">
                  {spotlight.body}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {spotlight.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-base font-semibold leading-[1.3] tracking-[-0.03em] text-[var(--website-text-primary)]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[var(--website-ui-primary)]"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
