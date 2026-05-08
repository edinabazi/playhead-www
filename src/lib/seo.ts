import { faqs, seo, siteUrl } from "../content/site";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export const pageSeo = {
  ...seo,
  canonicalUrl: absoluteUrl(seo.canonicalPath),
  openGraph: {
    ...seo.openGraph,
    image: absoluteUrl(seo.openGraph.image),
  },
  twitter: {
    ...seo.twitter,
    image: absoluteUrl(seo.twitter.image),
  },
};
