import { motion, useReducedMotion } from "motion/react";
import { features } from "../../content/site";
import {
  ease,
  revealAnimate,
  softRevealInitial,
  useAnimationProps,
} from "./motion";

export function FeatureGrid() {
  const inView = useAnimationProps();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className="motion-preload grid w-full max-w-240 translate-y-6 grid-cols-2 auto-rows-[152px] gap-x-4 gap-y-10 px-5 pt-16 pb-28 opacity-0 sm:grid-cols-4 sm:auto-rows-[168px] sm:gap-y-12 sm:pt-24 sm:pb-40"
      {...inView}
      transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease }}
    >
      {features.map(({ title, Icon }, index) => (
        <motion.div
          key={title.join(" ")}
          className="motion-preload flex h-full translate-y-[18px] flex-col items-center justify-center gap-4 text-center opacity-0"
          initial={prefersReducedMotion ? false : softRevealInitial}
          whileInView={revealAnimate}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.78,
            ease,
            delay: Math.min(index * 0.065, 0.34),
          }}
        >
          <Icon
            aria-hidden="true"
            size={48}
            strokeWidth={2.25}
            className="size-12 text-black"
          />
          <h2 className="text-2xl font-bold leading-[0.96] tracking-[-0.035em] text-black sm:text-[28px]">
            {title[0]}
            <br />
            {title[1]}
          </h2>
        </motion.div>
      ))}
    </motion.section>
  );
}
