import { motion, useReducedMotion } from "motion/react";
import { privacyPoints } from "../../content/site";
import {
  ease,
  revealAnimate,
  softRevealInitial,
  useAnimationProps,
} from "./motion";

export function PrivacySection() {
  const inView = useAnimationProps();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="privacy-heading"
      className="flex w-full max-w-[1120px] flex-col items-center px-5 pb-28 sm:pb-40"
    >
      <motion.h2
        id="privacy-heading"
        className="motion-preload max-w-[760px] translate-y-6 text-center text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-balance text-[var(--website-text-primary)] opacity-0 sm:text-[64px]"
        {...inView}
        transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease }}
      >
        Local-first, by design.
      </motion.h2>
      <ul className="mt-12 grid w-full gap-x-10 gap-y-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
        {privacyPoints.map((point, index) => (
          <motion.li
            key={point.title}
            className="motion-preload translate-y-[14px] border-t-2 border-[var(--website-ui-primary)] pt-5 opacity-0"
            initial={prefersReducedMotion ? false : softRevealInitial}
            whileInView={revealAnimate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.7,
              ease,
              delay: prefersReducedMotion ? 0 : index * 0.06,
            }}
          >
            <h3 className="text-2xl font-bold leading-tight tracking-[-0.04em] text-[var(--website-text-primary)]">
              {point.title}
            </h3>
            <p className="mt-2 text-base font-medium leading-[1.4] tracking-[-0.03em] text-[var(--website-text-muted)]">
              {point.body}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
