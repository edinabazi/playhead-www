import { motion, useReducedMotion } from "motion/react";
import { soundcloudFeatures } from "../../content/site";
import {
  ease,
  revealAnimate,
  softRevealInitial,
  useAnimationProps,
} from "./motion";
import { SoundCloudVisual } from "./visuals";

export function SoundCloudSection() {
  const inView = useAnimationProps();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="soundcloud-heading"
      className="w-full bg-[#1A1A18] px-5 py-16 text-[var(--website-text-primary-on-dark)] sm:py-[92px]"
    >
      <motion.div
        className="motion-preload mx-auto flex w-full max-w-[1120px] translate-y-6 flex-col items-center opacity-0"
        {...inView}
        transition={{ duration: prefersReducedMotion ? 0 : 0.95, ease }}
      >
        <img
          src="/icons/soundcloud.svg"
          alt=""
          aria-hidden="true"
          className="h-9 w-auto invert"
        />
        <h2
          id="soundcloud-heading"
          className="mt-6 max-w-[760px] text-balance text-center text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-[64px]"
        >
          Your SoundCloud, inside Playhead.
        </h2>
        <p className="mt-6 max-w-[620px] text-center text-base font-medium leading-[1.4] tracking-[-0.03em] text-[rgba(255,255,234,0.72)] sm:text-lg">
          Connect SoundCloud and your collections play right beside your local
          files, with the waveform-first player you already use.
        </p>
        <div className="mt-12 w-full max-w-[760px] sm:mt-16">
          <SoundCloudVisual />
        </div>
        <ul className="mt-12 grid w-full gap-x-10 gap-y-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {soundcloudFeatures.map((feature, index) => (
            <motion.li
              key={feature.title}
              className="motion-preload translate-y-[14px] border-t border-[rgba(255,255,234,0.24)] pt-5 opacity-0"
              initial={prefersReducedMotion ? false : softRevealInitial}
              whileInView={revealAnimate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.7,
                ease,
                delay: prefersReducedMotion ? 0 : Math.min(index * 0.05, 0.25),
              }}
            >
              <h3 className="text-xl font-bold leading-tight tracking-[-0.04em]">
                {feature.title}
              </h3>
              <p className="mt-2 text-base font-medium leading-[1.4] tracking-[-0.03em] text-[rgba(255,255,234,0.72)]">
                {feature.body}
              </p>
            </motion.li>
          ))}
        </ul>
        <p className="mt-12 text-center text-sm font-medium tracking-[-0.02em] text-[rgba(255,255,234,0.5)]">
          Optional. Connect it in Settings → Integrations. Streams tracks
          SoundCloud makes available for playback.
        </p>
      </motion.div>
    </section>
  );
}
