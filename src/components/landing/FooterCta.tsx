import { motion, useReducedMotion } from "motion/react";
import { CtaButtons } from "./CtaButtons";
import { ease, useAnimationProps } from "./motion";

export function FooterCta() {
  const inView = useAnimationProps();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className="motion-preload flex w-full translate-y-6 flex-col items-center px-5 pb-0 pt-16 opacity-0 sm:pt-[92px]"
      {...inView}
      transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease }}
    >
      <CtaButtons />
      <motion.img
        src="/assets/playhead-footer-wordmark.svg"
        alt="Playhead"
        className="motion-preload mt-20 opacity-0"
        initial={
          prefersReducedMotion
            ? false
            : { opacity: 0, y: 24, filter: "blur(10px)" }
        }
        whileInView={{ opacity: 0.6, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 1,
          ease,
          delay: 0.16,
        }}
      />
    </motion.section>
  );
}
