import {
  app,
  faqs,
  features,
  formats,
  links,
  seo,
  siteUrl,
} from "../content/site";

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

/**
 * Describes Playhead as software for search engines and AI assistants: what it is, what it
 * costs, where it runs, and where to get it.
 */
export function softwareJsonLd() {
  const author = {
    "@type": "Person",
    "@id": `${siteUrl}/#author`,
    name: app.author.name,
    url: app.author.url,
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: absoluteUrl("/"),
        name: app.name,
        description: seo.description,
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#author` },
      },
      author,
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#app`,
        name: app.name,
        description: seo.description,
        url: absoluteUrl("/"),
        applicationCategory: "MultimediaApplication",
        applicationSubCategory: "Music player",
        operatingSystem: app.operatingSystems.join(", "),
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        isAccessibleForFree: true,
        license: app.license,
        downloadUrl: app.releases,
        installUrl: links.downloadMacAppleSilicon,
        releaseNotes: app.releases,
        codeRepository: links.github,
        sameAs: [links.github],
        screenshot: absoluteUrl("/assets/playhead-app-screenshot.png"),
        image: absoluteUrl("/assets/playhead-icon.png"),
        author: { "@id": `${siteUrl}/#author` },
        featureList: [
          ...features.map(({ title }) => title.join(" ")),
          `Plays ${formats.join(", ")}`,
        ],
      },
    ],
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
