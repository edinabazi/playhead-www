import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { links } from "../../content/site";
import { ease } from "./motion";

type Platform = "mac" | "windows" | "linux";
type PreviewPlatform = Platform | "auto";

const macDownloads = [
  {
    label: "Apple Silicon",
    detail: "M-series Macs",
    href: links.downloadMacAppleSilicon,
    logo: "/assets/apple-logo.svg",
    logoClassName: "h-7 w-auto",
  },
  {
    label: "Intel Macs",
    detail: "Older Intel models",
    href: links.downloadMacIntel,
    logo: "/assets/intel-logo.svg",
    logoClassName: "h-7 w-auto",
  },
] as const;

const platformDownloads: Record<
  Platform,
  {
    label: string;
    href: string;
    logo: string;
    logoClassName: string;
    target?: "_blank";
  }
> = {
  mac: {
    label: "Download for Mac",
    href: links.downloadMacAppleSilicon,
    logo: "/assets/apple-logo.svg",
    logoClassName: "h-[30px] w-5",
  },
  windows: {
    label: "Download for Windows",
    href: links.downloadWindows,
    logo: "/assets/windows-logo.svg",
    logoClassName: "size-[25px]",
  },
  linux: {
    label: "Download for Linux",
    href: links.downloadLinux,
    logo: "/assets/linux-logo.svg",
    logoClassName: "size-[29px]",
    target: "_blank",
  },
};

const previewPlatforms: PreviewPlatform[] = ["auto", "mac", "windows", "linux"];

function detectPlatform(): Platform {
  const platform =
    (
      navigator as Navigator & {
        userAgentData?: { platform?: string };
      }
    ).userAgentData?.platform ||
    navigator.platform ||
    navigator.userAgent;
  const normalizedPlatform = platform.toLowerCase();

  if (normalizedPlatform.includes("win")) return "windows";
  if (normalizedPlatform.includes("linux")) return "linux";
  return "mac";
}

type CtaButtonsProps = {
  placement: "hero" | "footer";
};

export function CtaButtons({ placement }: CtaButtonsProps) {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [detectedPlatform, setDetectedPlatform] = useState<Platform>("mac");
  const [previewPlatform, setPreviewPlatform] =
    useState<PreviewPlatform>("auto");
  const [showPreviewToggle, setShowPreviewToggle] = useState(false);
  const dropdownId = useId();
  const downloadRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const activePlatform =
    previewPlatform === "auto" ? detectedPlatform : previewPlatform;
  const activeDownload = platformDownloads[activePlatform];
  const isMacDownload = activePlatform === "mac";

  useEffect(() => {
    setDetectedPlatform(detectPlatform());
    setShowPreviewToggle(
      window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1",
    );
  }, []);

  useEffect(() => {
    if (!isDownloadOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !downloadRef.current?.contains(event.target)
      ) {
        setIsDownloadOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsDownloadOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDownloadOpen]);

  useEffect(() => {
    if (!isMacDownload) {
      setIsDownloadOpen(false);
    }
  }, [isMacDownload]);

  const downloadButtonContent = (
    <>
      <div className="absolute left-5 translate-x-0 opacity-100 transition duration-300 ease-out group-hover:-translate-x-full group-hover:scale-x-50 group-hover:opacity-0 group-hover:blur-sm">
        <img
          src={activeDownload.logo}
          alt=""
          aria-hidden="true"
          className={activeDownload.logoClassName}
        />
      </div>
      <div className="translate-x-0 transition duration-300 ease-out group-hover:-translate-x-8">
        {activeDownload.label}
      </div>
    </>
  );

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-8">
      <div
        ref={downloadRef}
        className="relative flex flex-col items-center gap-2"
      >
        {isMacDownload ? (
          <button
            type="button"
            aria-expanded={isDownloadOpen}
            aria-controls={dropdownId}
            onClick={() => setIsDownloadOpen((open) => !open)}
            className="group relative inline-flex h-16 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[var(--website-ui-primary)] px-5 py-4 pl-15 text-xl font-semibold tracking-[-0.04em] text-[var(--website-text-primary-on-dark)] shadow-[0_18px_52px_rgba(34,34,29,0.22)] transition duration-300 ease-out hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--website-ui-primary)]"
          >
            {downloadButtonContent}
            <ChevronDown
              aria-hidden="true"
              size={25}
              strokeWidth={2.2}
              className={`absolute right-5 translate-x-full scale-x-50 opacity-0 blur-sm transition duration-300 ease-out group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100 group-hover:blur-none ${
                isDownloadOpen
                  ? "translate-x-0 rotate-180 scale-x-100 opacity-100 blur-none"
                  : "rotate-0"
              }`}
            />
          </button>
        ) : (
          <a
            href={activeDownload.href}
            target={activeDownload.target}
            rel={activeDownload.target === "_blank" ? "noopener noreferrer" : undefined}
            data-analytics-event="download_button_clicked"
            data-analytics-target={activePlatform}
            data-analytics-placement={placement}
            className="group relative inline-flex h-16 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[var(--website-ui-primary)] px-5 py-4 pl-15 text-xl font-semibold tracking-[-0.04em] text-[var(--website-text-primary-on-dark)] shadow-[0_18px_52px_rgba(34,34,29,0.22)] transition duration-300 ease-out hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--website-ui-primary)]"
          >
            {downloadButtonContent}
            <ArrowRight
              aria-hidden="true"
              size={24}
              strokeWidth={2}
              className="absolute right-5 translate-x-full scale-x-50 opacity-0 blur-sm transition duration-300 ease-out group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100 group-hover:blur-none"
            />
          </a>
        )}
        <AnimatePresence>
          {isMacDownload && isDownloadOpen && (
            <motion.div
              id={dropdownId}
              role="menu"
              className="absolute left-1/2 top-[76px] z-20 w-[min(92vw,330px)] -translate-x-1/2 overflow-hidden rounded-xl border border-[rgba(34,34,29,0.12)] bg-[rgba(255,255,234,0.94)] p-2 text-left shadow-[0_28px_80px_rgba(34,34,29,0.28)] backdrop-blur-xl"
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: -10, scale: 0.96, filter: "blur(8px)" }
              }
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -8, scale: 0.98, filter: "blur(6px)" }
              }
              transition={{ duration: prefersReducedMotion ? 0 : 0.34, ease }}
            >
              <div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,34,29,0.42),transparent)]" />
              {macDownloads.map((download, index) => (
                <motion.a
                  key={download.href}
                  role="menuitem"
                  href={download.href}
                  onClick={() => setIsDownloadOpen(false)}
                  data-analytics-event="download_button_clicked"
                  data-analytics-target={
                    download.href === links.downloadMacAppleSilicon
                      ? "macos_silicon"
                      : "macos_intel"
                  }
                  data-analytics-placement={placement}
                  className="group/item relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-lg px-3 py-3 text-[var(--website-text-primary)] transition duration-150 ease-out hover:bg-[var(--website-ui-primary)] hover:text-[var(--website-text-primary-on-dark)] focus-visible:bg-[var(--website-ui-primary)] focus-visible:text-[var(--website-text-primary-on-dark)] focus-visible:outline-none"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.28,
                    ease,
                    delay: prefersReducedMotion ? 0 : index * 0.045,
                  }}
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[var(--website-ui-primary)]">
                    <img
                      src={download.logo}
                      alt=""
                      aria-hidden="true"
                      className={download.logoClassName}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-bold leading-none tracking-[-0.04em]">
                      {download.label}
                    </span>
                    <span className="mt-1 block text-sm font-medium leading-none tracking-[-0.03em] opacity-70">
                      {download.detail}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    size={21}
                    strokeWidth={2.1}
                    className="shrink-0 translate-x-0 opacity-55 transition duration-300 ease-out group-hover/item:translate-x-1 group-hover/item:opacity-100 group-focus-visible/item:translate-x-0 group-focus-visible/item:opacity-100"
                  />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        {showPreviewToggle && (
          <div className="flex rounded-lg border border-[rgba(34,34,29,0.16)] p-1">
            {previewPlatforms.map((platform) => (
              <button
                key={platform}
                type="button"
                onClick={() => setPreviewPlatform(platform)}
                className={`cursor-pointer rounded-md px-2.5 py-1 text-[11px] font-bold capitalize tracking-[-0.03em] transition duration-200 ease-out ${
                  previewPlatform === platform
                    ? "bg-[var(--website-ui-primary)] text-[var(--website-text-primary-on-dark)]"
                    : "text-[var(--website-text-muted)] hover:bg-[rgba(34,34,29,0.08)]"
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
        )}
      </div>
      <a
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
        data-analytics-event="github_button_clicked"
        data-analytics-target="github"
        data-analytics-placement={placement}
        className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-xl border-2 border-[var(--website-ui-primary)] px-5 py-4 pl-15 text-xl font-semibold tracking-[-0.04em] text-[var(--website-text-primary)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[rgba(34,34,29,0.06)]"
      >
        <div className="absolute left-5 translate-x-0 opacity-100 transition duration-300 ease-out group-hover:-translate-x-full group-hover:scale-x-50 group-hover:opacity-0 group-hover:blur-sm">
          <img
            src="/assets/github-logo.svg"
            alt=""
            aria-hidden="true"
            className="size-[30px]"
          />
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
