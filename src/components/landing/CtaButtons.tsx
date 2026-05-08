import { ArrowRight } from "lucide-react";
import { links } from "../../content/site";

export function CtaButtons() {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-8">
      <div className="flex flex-col items-center gap-2">
        <a
          href={links.downloadMac}
          className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-xl bg-[var(--website-ui-primary)] px-5 py-4 pl-13 text-xl font-semibold tracking-[-0.04em] text-[var(--website-text-primary-on-dark)] transition duration-300 ease-out hover:opacity-95"
        >
          <div className="absolute left-5 translate-x-0 opacity-100 transition duration-300 ease-out group-hover:-translate-x-full group-hover:scale-x-50 group-hover:opacity-0 group-hover:blur-sm">
            <img
              src="/assets/apple-logo.svg"
              alt=""
              aria-hidden="true"
              className="h-[30px] w-5"
            />
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
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-xl border-2 border-[var(--website-ui-primary)] px-5 py-4 pl-15 text-xl font-semibold tracking-[-0.04em] text-[var(--website-text-primary)] transition duration-300 ease-out hover:bg-[rgba(34,34,29,0.06)]"
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
