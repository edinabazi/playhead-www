import { motion, useReducedMotion } from "motion/react";
import { CtaButtons } from "./CtaButtons";
import { ease } from "./motion";

export function FooterCta() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className="motion-preload flex w-full translate-y-6 flex-col items-center px-5 pb-0 pt-16 opacity-0 sm:pt-[92px]"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease }}
    >
      <CtaButtons placement="footer" />
      <div className="relative mt-20 flex w-full justify-center overflow-visible">
        <motion.img
          src="/assets/playhead-footer-wordmark.svg"
          alt="Playhead"
          className="motion-preload w-[min(1277px,150vw)] max-w-none opacity-0 sm:w-[min(1277px,100vw)]"
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
        <p className="absolute bottom-7 left-1/2 w-full -translate-x-1/2 text-center text-sm font-semibold tracking-tighter text-[var(--website-text-muted)] sm:bottom-8 sm:text-base">
          Designed and built with ❤️ by{" "}
          <a
            href="https://edinabazi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--website-text-primary)] underline decoration-[rgba(34,34,29,0.32)] underline-offset-4 transition duration-200 ease-out hover:decoration-[var(--website-text-primary)]"
          >
            Edin
          </a>
          .
        </p>
      </div>
    </motion.section>
  );
}
