import { env } from "cloudflare:workers";

export const prerender = false;

type RuntimeEnv = {
  PUBLIC_POSTHOG_TOKEN?: string;
  PUBLIC_POSTHOG_API_HOST?: string;
  PUBLIC_DATAFAST_WEBSITE_ID?: string;
  PUBLIC_DATAFAST_DOMAIN?: string;
};

export function GET() {
  const runtimeEnv = env as RuntimeEnv;
  const config = {
    posthogToken:
      runtimeEnv.PUBLIC_POSTHOG_TOKEN ?? import.meta.env.PUBLIC_POSTHOG_TOKEN ?? "",
    posthogApiHost:
      runtimeEnv.PUBLIC_POSTHOG_API_HOST ??
      import.meta.env.PUBLIC_POSTHOG_API_HOST ??
      "https://eu.i.posthog.com",
    datafastWebsiteId:
      runtimeEnv.PUBLIC_DATAFAST_WEBSITE_ID ??
      import.meta.env.PUBLIC_DATAFAST_WEBSITE_ID ??
      "",
    datafastDomain:
      runtimeEnv.PUBLIC_DATAFAST_DOMAIN ??
      import.meta.env.PUBLIC_DATAFAST_DOMAIN ??
      "playheadapp.com",
  };

  return new Response(
    `window.PLAYHEAD_ANALYTICS_CONFIG=${JSON.stringify(config)};`,
    {
      headers: {
        "Content-Type": "application/javascript; charset=utf-8",
        "Cache-Control": "public, max-age=300",
      },
    },
  );
}
