import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import {
  ArrowRight,
  AudioLines,
  CodeXml,
  FilePen,
  FolderSearch,
  GlobeX,
  Keyboard,
  Paintbrush,
  UserLock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: Array<{ title: [string, string]; Icon: LucideIcon }> = [
  {
    title: ["Waveform", "playback"],
    Icon: AudioLines,
  },
  {
    title: ["Beautiful", "interface"],
    Icon: Paintbrush,
  },
  {
    title: ["Local-first", "library"],
    Icon: GlobeX,
  },
  {
    title: ["Folder-based", "browsing"],
    Icon: FolderSearch,
  },
  {
    title: ["Metadata", "editing"],
    Icon: FilePen,
  },
  {
    title: ["Keyboard", "shortcuts"],
    Icon: Keyboard,
  },
  {
    title: ["No accounts,", "no ads"],
    Icon: UserLock,
  },
  {
    title: ["Free and", "open source"],
    Icon: CodeXml,
  },
];

const faqs = [
  {
    question: "What is Playhead?",
    answer:
      "Playhead is a minimal, waveform-based music player for your local music library. It’s built for people who still keep real music files, organize folders, edit metadata, and want a cleaner way to listen.",
  },
  {
    question: "Is Playhead a streaming app?",
    answer:
      "No. Playhead is for local music files. It does not stream music, recommend music, or lock you into an online account.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No. No signups, no accounts, no cloud profile. Open the app, import your music folders, and start listening.",
  },
  {
    question: "Does Playhead work offline?",
    answer:
      "Yes. Playhead is designed around local playback. Your library lives on your machine, not in the cloud.",
  },
  {
    question: "What file formats does it support?",
    answer:
      "Playhead is built for common local music formats. Format support may expand during beta, so the exact list can change as development continues.",
  },
  {
    question: "Can I browse by folders?",
    answer:
      "Yes. Playhead has a folder-based mode so you can browse and filter tracks by the folders you imported. Perfect if your music collection is already organized your own way.",
  },
  {
    question: "Can I browse like a normal music library?",
    answer:
      "Yes. Playhead also has a standard library mode that organizes your music into tracks, artists, and albums.",
  },
  {
    question: "Can I edit track metadata?",
    answer:
      "Yes. Playhead lets you view and modify track metadata, so you can clean up messy titles, artists, albums, and other track details.",
  },
  {
    question: "Why waveform-based?",
    answer:
      "Waveforms make music feel more visual and usable. You can see the structure of a track, jump around faster, and understand the energy of a song at a glance.",
  },
  {
    question: "Is this made for DJs?",
    answer:
      "Kind of. Playhead is not trying to replace pro DJ software. It’s for DJs, collectors, producers, and music enthusiasts who want a fast, beautiful way to browse, preview, and manage local tracks.",
  },
  {
    question: "Is Playhead open source?",
    answer: "Yes. Playhead is open source and MIT licensed.",
  },
  {
    question: "Is Playhead free?",
    answer:
      "Yes, the app is open source. Paid builds, donations, or supporter options may come later, but the project itself is MIT licensed.",
  },
  {
    question: "Is Playhead finished?",
    answer:
      "Not yet. Playhead is currently in beta and still under active development. Expect rough edges, missing features, and fast improvements.",
  },
  {
    question: "Does Playhead collect data?",
    answer:
      "Playhead is designed to be local-first. No accounts, no ads, and no cloud music library. If optional telemetry is included in beta builds, it should be clearly disclosed and easy to disable.",
  },
  {
    question: "What platforms does it support?",
    answer:
      "Playhead is currently focused on desktop. Platform support may change as the app develops.",
  },
  {
    question: "Can I contribute?",
    answer:
      "Yes. Contributions, issues, ideas, bug reports, and design feedback are welcome through GitHub.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;
const revealInitial = { opacity: 0, y: 28, filter: "blur(10px)" };
const revealAnimate = { opacity: 1, y: 0, filter: "blur(0px)" };
const softRevealInitial = { opacity: 0, y: 18, filter: "blur(8px)" };

function useAnimationProps() {
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

function CtaButtons() {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-8">
      <div className="flex flex-col items-center gap-2">
        <a
          href="https://github.com/edinabazi/playhead/releases/latest/download/playhead-macos.zip"
          className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-xl bg-[var(--website-ui-primary)] px-5 py-4 pl-13 text-xl font-semibold tracking-[-0.04em] text-[var(--website-text-primary-on-dark)] transition duration-300 ease-out hover:opacity-95"
        >
          <div className="absolute left-5 translate-x-0 opacity-100 transition duration-300 ease-out group-hover:-translate-x-full group-hover:scale-x-50 group-hover:opacity-0 group-hover:blur-sm">
            <img src="/assets/apple-logo.svg" alt="" className="h-[30px] w-5" />
          </div>
          <div className="translate-x-0 transition duration-300 ease-out group-hover:-translate-x-8">
            Download for Mac
          </div>
          <ArrowRight
            aria-hidden="true"
            size={24}
            strokeWidth={2}
            className="absolute right-5 translate-x-full scale-x-50 opacity-0 blur-sm transition duration-300 ease-out group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100 group-hover:blur-none"
          />
        </a>
        <span className="text-xs font-medium tracking-[-0.03em] text-[var(--website-text-muted)]">
          Windows &amp; Linux soon
        </span>
      </div>
      <a
        href="https://github.com/edinabazi/playhead"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-xl border-2 border-[var(--website-ui-primary)] px-5 py-4 pl-15 text-xl font-semibold tracking-[-0.04em] text-[var(--website-text-primary)] transition duration-300 ease-out hover:bg-[rgba(34,34,29,0.06)]"
      >
        <div className="absolute left-5 translate-x-0 opacity-100 transition duration-300 ease-out group-hover:-translate-x-full group-hover:scale-x-50 group-hover:opacity-0 group-hover:blur-sm">
          <img src="/assets/github-logo.svg" alt="" className="size-[30px]" />
        </div>
        <div className="translate-x-0 transition duration-300 ease-out group-hover:-translate-x-8">
          View on GitHub
        </div>
        <ArrowRight
          aria-hidden="true"
          size={24}
          strokeWidth={2}
          className="absolute right-5 translate-x-full scale-x-50 opacity-0 blur-sm transition duration-300 ease-out group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100 group-hover:blur-none"
        />
      </a>
    </div>
  );
}

export default function LandingPage() {
  const inView = useAnimationProps();
  const prefersReducedMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const loadInitial = prefersReducedMotion ? false : softRevealInitial;
  const loadAnimate = revealAnimate;
  const transition = { duration: prefersReducedMotion ? 0 : 0.95, ease };

  return (
    <main className="mx-auto flex min-h-screen w-full flex-col items-center overflow-hidden pt-10 sm:pt-16">
      <section className="flex w-full max-w-[1728px] flex-col items-center px-5">
        <motion.a
          href="/"
          aria-label="Playhead home"
          className="motion-preload mb-10 block translate-y-[18px] opacity-0 sm:mb-16"
          initial={loadInitial}
          animate={loadAnimate}
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
          animate={loadAnimate}
          transition={{ ...transition, delay: 0.18 }}
        >
          <h1 className="text-[42px] font-bold leading-[0.9] tracking-[-0.04em] text-[var(--website-text-primary)] sm:text-6xl lg:text-[64px]">
            Beautiful, local, free
            <br className="hidden sm:block" />
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
          animate={loadAnimate}
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
          animate={loadAnimate}
          transition={{
            ...transition,
            duration: prefersReducedMotion ? 0 : 1.12,
            delay: 0.44,
          }}
        >
          <img
            src="/assets/playhead-hero-bg.png"
            alt=""
            className="absolute bottom-0 left-0 h-auto w-[114%] max-w-none"
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
            {faqs.map((faq, index) => (
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
                  aria-expanded={openFaq === faq.question}
                  onClick={() =>
                    setOpenFaq((current) =>
                      current === faq.question ? null : faq.question,
                    )
                  }
                >
                  {faq.question}
                  <motion.span
                    className="text-3xl font-normal leading-none"
                    animate={{ rotate: openFaq === faq.question ? 45 : 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.42,
                      ease,
                    }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === faq.question ? (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
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
                        initial={
                          prefersReducedMotion
                            ? false
                            : { y: -10, filter: "blur(5px)" }
                        }
                        animate={{ y: 0, filter: "blur(0px)" }}
                        exit={{ y: -8, filter: "blur(4px)" }}
                        transition={{
                          duration: prefersReducedMotion ? 0 : 0.48,
                          ease,
                        }}
                        className="max-w-2xl text-lg font-medium pb-7 text-base leading-7 text-[rgba(255,255,234,0.72)] sm:pb-9"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <motion.section
        className="motion-preload flex w-full translate-y-6 flex-col items-center px-5 pb-0 pt-16 opacity-0 sm:pt-[92px]"
        {...inView}
        transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease }}
      >
        <CtaButtons />
        <motion.img
          src="/assets/playhead-footer-wordmark.svg"
          alt="Playhead"
          width="1277"
          height="212"
          className="motion-preload mt-20 h-auto w-full max-w-[1277px] translate-y-5 object-contain opacity-0"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 24, filter: "blur(10px)" }
          }
          whileInView={{ opacity: 0.6, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 1,
            ease,
            delay: 0.16,
          }}
        />
      </motion.section>
    </main>
  );
}
