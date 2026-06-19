import astroWorker from "@astrojs/cloudflare/entrypoints/server";
import { trackAICrawlerResponse } from "@datafast/ai-crawl";

interface Env {
  ASSETS: Fetcher;
  PUBLIC_DATAFAST_WEBSITE_ID?: string;
  PUBLIC_DATAFAST_DOMAIN?: string;
}

export default {
  async fetch(request, env, ctx) {
    const response = await astroWorker.fetch(request, env, ctx);

    if (env.PUBLIC_DATAFAST_WEBSITE_ID) {
      trackAICrawlerResponse(request, response, ctx, {
        websiteId: env.PUBLIC_DATAFAST_WEBSITE_ID,
        domain: env.PUBLIC_DATAFAST_DOMAIN ?? "playheadapp.com",
      });
    }

    return response;
  },
} satisfies ExportedHandler<Env>;
