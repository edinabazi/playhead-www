import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { faqs } from "../../content/site";
import { ease, revealAnimate, useAnimationProps } from "./motion";

export function FaqSection() {
  const inView = useAnimationProps();
  const prefersReducedMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#1A1A18] px-5 py-16 text-[var(--website-text-primary-on-dark)] sm:py-[92px]">
      <motion.div
        className="motion-preload mx-auto flex w-full max-w-[960px] translate-y-6 flex-col items-center gap-12 opacity-0 sm:gap-[92px]"
        {...inView}
        transition={{ duration: prefersReducedMotion ? 0 : 0.95, ease }}
      >
        <h2 className="text-center text-5xl font-bold leading-tight tracking-[-0.04em] sm:text-[64px]">
          FAQs
        </h2>
        <div className="w-full">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === faq.question;
            const answerId = `faq-answer-${index}`;

            return (
              <motion.div
                key={faq.question}
                className="motion-preload translate-y-[14px] border-b border-[var(--website-text-primary-on-dark)] opacity-0"
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 18, filter: "blur(7px)" }
                }
                whileInView={revealAnimate}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.68,
                  ease,
                  delay: Math.min(index * 0.035, 0.28),
                }}
              >
                <button
                  type="button"
                  className="flex w-full cursor-pointer select-none items-center justify-between gap-6 py-6 text-left text-xl font-semibold leading-tight tracking-[-0.04em] sm:py-8 sm:text-2xl"
                  aria-controls={answerId}
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenFaq((current) =>
                      current === faq.question ? null : faq.question,
                    )
                  }
                >
                  {faq.question}
                  <motion.span
                    className="text-3xl font-normal leading-none"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.42,
                      ease,
                    }}
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  id={answerId}
                  aria-hidden={!isOpen}
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    height: {
                      duration: prefersReducedMotion ? 0 : 0.72,
                      ease,
                    },
                    opacity: {
                      duration: prefersReducedMotion ? 0 : 0.34,
                      ease,
                    },
                  }}
                  className="overflow-hidden"
                >
                  <motion.p
                    animate={{
                      y: isOpen || prefersReducedMotion ? 0 : -8,
                      filter:
                        isOpen || prefersReducedMotion
                          ? "blur(0px)"
                          : "blur(4px)",
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.48,
                      ease,
                    }}
                    className="max-w-2xl pb-7 text-base font-medium leading-7 text-[rgba(255,255,234,0.72)] sm:pb-9"
                  >
                    {faq.answer}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
