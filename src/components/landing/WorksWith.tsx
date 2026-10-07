import { motion, useReducedMotion } from "motion/react";
import { formats, integrations } from "../../content/site";
import { ease, useAnimationProps } from "./motion";

export function WorksWith() {
  const inView = useAnimationProps();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="formats-heading"
      className="flex w-full max-w-[960px] flex-col items-center px-5 py-28 sm:py-40"
    >
      <motion.div
        className="motion-preload flex w-full translate-y-6 flex-col items-center opacity-0"
        {...inView}
        transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease }}
      >
        <h2
          id="formats-heading"
          className="max-w-[720px] text-balance text-center text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-[var(--website-text-primary)] sm:text-[64px]"
        >
          Plays the files you already have.
        </h2>
        <ul className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-14">
          {formats.map((format) => (
            <li
              key={format}
              className="rounded-full bg-[var(--website-ui-primary)] px-5 py-2.5 text-lg font-bold tracking-[-0.03em] text-[var(--website-text-primary-on-dark)] sm:text-xl"
            >
              {format}
            </li>
          ))}
        </ul>
        <div className="mt-14 w-full sm:mt-20">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex items-center gap-5 rounded-[32px] bg-[rgba(34,34,29,0.06)] px-7 py-6"
              style={{ cornerShape: "squircle" } as React.CSSProperties}
            >
              <img
                src={integration.icon}
                alt=""
                aria-hidden="true"
                className="size-10 shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold leading-tight tracking-[-0.04em] text-[var(--website-text-primary)]">
                  Scrobbles to {integration.name}
                </h3>
                <p className="mt-1 text-base font-medium leading-[1.4] tracking-[-0.03em] text-[var(--website-text-muted)]">
                  {integration.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
