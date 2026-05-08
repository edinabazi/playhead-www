import { motion, useReducedMotion } from "motion/react";
import { CtaButtons } from "./CtaButtons";
import { ease, revealAnimate, softRevealInitial } from "./motion";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const loadInitial = prefersReducedMotion ? false : softRevealInitial;
  const transition = { duration: prefersReducedMotion ? 0 : 0.95, ease };

  return (
    <section className="flex w-full max-w-[1728px] flex-col items-center px-5">
      <motion.a
        href="/"
        aria-label="Playhead home"
        className="motion-preload mb-10 block translate-y-[18px] opacity-0 sm:mb-16"
        initial={loadInitial}
        animate={revealAnimate}
        transition={{ ...transition, delay: 0.04 }}
      >
        <img
          src="/assets/playhead-logo.svg"
          alt="Playhead"
          width="210"
          height="62"
          className="h-[42px] w-auto sm:h-[62px]"
        />
      </motion.a>

      <motion.div
        className="motion-preload mx-auto max-w-5xl translate-y-[18px] text-center opacity-0"
        initial={loadInitial}
        animate={revealAnimate}
        transition={{ ...transition, delay: 0.18 }}
      >
        <h1 className="text-[42px] font-bold leading-[0.9] tracking-[-0.04em] text-[var(--website-text-primary)] sm:text-6xl lg:text-[64px]">
          Beautiful, local, free
          <br className="hidden sm:inline" />
          <span className="inline sm:hidden">&nbsp;</span>
          waveform music player.
        </h1>
        <p className="mx-auto mt-6 max-w-[720px] text-base font-medium leading-[1.36] tracking-[-0.04em] text-[var(--website-text-muted)] sm:text-lg">
          Playhead gives your local music collection a clean, fast,
          waveform-first interface. <br className="hidden md:inline" />
          Browse by folders or library, inspect metadata, and move through
          tracks smoothly.
        </p>
      </motion.div>

      <motion.div
        className="motion-preload mt-8 translate-y-[18px] opacity-0"
        initial={loadInitial}
        animate={revealAnimate}
        transition={{ ...transition, delay: 0.32 }}
      >
        <CtaButtons />
      </motion.div>

      <motion.div
        className="motion-preload relative mt-10 h-[360px] w-full max-w-[1280px] translate-y-9 overflow-hidden rounded-[40px] bg-[var(--website-text-primary-on-dark)] opacity-0 sm:mt-14 sm:h-[520px] sm:rounded-[64px] lg:h-[717px] lg:rounded-[68px]"
        style={{ cornerShape: "squircle" }}
        initial={
          prefersReducedMotion
            ? false
            : { opacity: 0, y: 42, filter: "blur(12px)" }
        }
        animate={revealAnimate}
        transition={{
          ...transition,
          duration: prefersReducedMotion ? 0 : 1.12,
          delay: 0.44,
        }}
      >
        <img
          src="/assets/playhead-hero-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-full w-full object-cover xl:h-auto xl:w-[114%] xl:object-none max-w-none"
        />
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          className="absolute left-1/2 top-[18%] w-[72%] max-w-[774px] -translate-x-1/2 sm:top-[16%]"
          initial={prefersReducedMotion ? false : { y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 1.25,
            ease,
            delay: 1,
          }}
        >
          <div className="absolute inset-0 rounded-[38px] bg-[rgba(20,20,18,0.34)] shadow-2xl backdrop-blur-sm" />
          <img
            src="/assets/playhead-app-screenshot.png"
            alt="Playhead music player interface showing waveform playback and a local library"
            className="relative block h-auto w-full rounded-[18px] opacity-[0.9]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
