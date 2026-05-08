import { useReducedMotion } from "motion/react";

export const ease = [0.16, 1, 0.3, 1] as const;
export const revealInitial = { opacity: 0, y: 28, filter: "blur(10px)" };
export const revealAnimate = { opacity: 1, y: 0, filter: "blur(0px)" };
export const softRevealInitial = { opacity: 0, y: 18, filter: "blur(8px)" };

export function useAnimationProps() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return {
      initial: false,
      whileInView: revealAnimate,
      viewport: undefined,
    };
  }

  return {
    initial: revealInitial,
    whileInView: revealAnimate,
    viewport: { once: true, amount: 0.22 },
  };
}
